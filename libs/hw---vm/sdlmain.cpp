
#include <SDL.h>
#include <stdio.h>

#if defined( __MACOSX__ )
#define SONAME "libpxt.dylib"
#elif defined( __WINDOWS__)
#define SONAME "pxt.dll"
#else
#define SONAME "libpxt.so"
#endif

#define WIDTH 160
#define HEIGHT 120

const int SCREEN_WIDTH = WIDTH * 4;
const int SCREEN_HEIGHT = HEIGHT * 4;

const int INTERNAL_KEY_UP = 2050;
const int INTERNAL_KEY_DOWN = 2051;

enum Key {
    KEY_LEFT = 1,
    KEY_UP,
    KEY_RIGHT,
    KEY_DOWN,
    KEY_A,
    KEY_B,
    KEY_MENU,
    KEY_RESET,
    KEY_EXIT,
};

int mapKeyCode(int sdlCode) {
    switch (sdlCode) {
    case 'a':
    case SDLK_LEFT:
        return KEY_LEFT;
    case 'd':
    case SDLK_RIGHT:
        return KEY_RIGHT;
    case 'w':
    case SDLK_UP:
        return KEY_UP;
    case 's':
    case SDLK_DOWN:
        return KEY_DOWN;
    case ' ':
    case 'q':
    case 'z':
        return KEY_A;
    case 'x':
    case 'e':
    case SDLK_RETURN:
        return KEY_B;

    case 'm':
        return KEY_MENU;

    case 'j':
        return KEY_LEFT + 7;
    case 'i':
        return KEY_UP + 7;
    case 'l':
        return KEY_RIGHT + 7;
    case 'k':
        return KEY_DOWN + 7;
    case 'u':
        return KEY_A + 7;
    case 'o':
        return KEY_B + 7;

    default:
        return 0;
    }
}

typedef void (*get_pixels_t)(int width, int height, uint32_t *screen);
typedef void (*raise_event_t)(int src, int val);
typedef void (*vm_start_t)(const char *fn);

#define SDL_CHECK(call)                                                                            \
    if (!(call)) {                                                                                 \
        fprintf(stderr, "SDL error: %s - %s", #call, SDL_GetError());                              \
        exit(1);                                                                                   \
    }


void *loadPXTLib(char *argv[]) {
    char prevDir[PATH_MAX];
    getwd(prevDir);
    const char *exename = argv[0];
    if (exename == NULL || !strchr(exename, '/'))
        exename = "./vm";
    char namebuf[strlen(exename)];
    strcpy(namebuf, exename);
    *strrchr(namebuf, '/') = 0;
    strcpy(strrchr(namebuf, '/') + 1, SONAME);

    printf("so=%s",namebuf);

    void *vmDLL = SDL_LoadObject(namebuf+2);
    if (!vmDLL) {
        fprintf(stderr, "can't load %s SDL_Error: %s\n", namebuf, SDL_GetError());
        exit(1);
    }
}

extern "C" int main(int argc, char *argv[]) {
    void *vmDLL = loadPXTLib(argv);
    get_pixels_t get_pixels = (get_pixels_t)SDL_LoadFunction(vmDLL, "pxt_screen_get_pixels");
    vm_start_t vm_start = (vm_start_t)SDL_LoadFunction(vmDLL, "pxt_vm_start");
    raise_event_t raise_event = (raise_event_t)SDL_LoadFunction(vmDLL, "pxt_raise_event");
    if (!get_pixels || !vm_start || !raise_event) {
        printf("can't load fun from dylib SDL_Error: %s\n", SDL_GetError());
        exit(1);
    }

    SDL_CHECK(SDL_Init(SDL_INIT_VIDEO) >= 0);

    SDL_Window *window = SDL_CreateWindow("MakeCode Arcade64", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                              SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN);

    SDL_CHECK(window != NULL);

    SDL_Renderer *renderer =
        SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);

    SDL_Surface *surf;
    surf = SDL_CreateRGBSurfaceWithFormat(0, WIDTH, HEIGHT, 32, SDL_PIXELFORMAT_BGRA32);

    SDL_CHECK(surf != NULL);

    for (int y = 0; y < HEIGHT; ++y)
        for (int x = 0; x < WIDTH; ++x) {
            ((uint32_t *)surf->pixels)[y * WIDTH + x] =
                x == y ? 0xffffffff : 0xff000000 | ((x * 2) << 8);
        }

    SDL_Texture *tex = SDL_CreateTextureFromSurface(renderer, surf);

    SDL_RenderClear(renderer);
    SDL_RenderCopy(renderer, tex, NULL, NULL);
    SDL_RenderPresent(renderer);

    vm_start(argv[1]);

    SDL_Event e;
    int quit = 0;
    int numFr = 0;
    int prevTicks = SDL_GetTicks();

    while (!quit) {
        while (SDL_PollEvent(&e)) {
            if (e.type == SDL_QUIT) {
                quit = 1;
            }
            if ((e.type == SDL_KEYDOWN || e.type == SDL_KEYUP) && !e.key.repeat) {
                int ev = e.type == SDL_KEYDOWN ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP;
                int kk = mapKeyCode(e.key.keysym.sym);
                if (kk) {
                    raise_event(ev, kk);
                    raise_event(ev, 0); // any key
                }
            }
            if (e.type == SDL_MOUSEBUTTONDOWN) {
                // quit = 1;
            }
        }

        get_pixels(WIDTH, HEIGHT, (uint32_t *)surf->pixels);

        SDL_UpdateTexture(tex, NULL, surf->pixels, WIDTH * 4);

        SDL_RenderClear(renderer);
        SDL_RenderCopy(renderer, tex, NULL, NULL);
        SDL_RenderPresent(renderer);

        numFr++;
        int now = SDL_GetTicks();
        if (now - prevTicks > 1000) {
            // printf("fps=%d\n", numFr);
            prevTicks = now;
            numFr = 0;
        }
    }

    SDL_DestroyWindow(window);
    SDL_Quit();

    return 0;
}
