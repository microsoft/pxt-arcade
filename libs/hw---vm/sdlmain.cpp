
#include <SDL.h>
#include <stdio.h>

#if defined(__MACOSX__)
#define SONAME "libpxt.dylib"
#elif defined(__WINDOWS__)
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
typedef int (*get_logs_t)(int logtype, char *dst, int maxSize);
typedef int (*get_panic_code_t)();
typedef void (*get_audio_samples_t)(int16_t *buf, unsigned numSamples);

get_audio_samples_t pxt_get_audio_samples;

void fatal(const char *msg, const char *info) {
    SDL_LogCritical(SDL_LOG_CATEGORY_APPLICATION, "%s %s (SDL Error: %s)", msg, info ? info : "",
                    SDL_GetError());
    exit(1);
}

#define SDL_CHECK(call)                                                                            \
    if (!(call)) {                                                                                 \
        fatal("SDL Call error", #call);                                                            \
    }

void *loadPXTLib(char *argv[]) {
    const char *exename = argv[0];
    if (exename == NULL || !strchr(exename, '/'))
        exename = "./vm";
    int solen = strlen(exename) + strlen(SONAME);
    char namebuf[solen + 1];
    strcpy(namebuf, exename);
    strcpy(strrchr(namebuf, '/') + 1, SONAME);

    void *vmDLL = SDL_LoadObject(namebuf);
    if (!vmDLL) {
        fatal("can't load DLL", namebuf);
    }

    return vmDLL;
}

char logtmp[64 * 1024];

void flush_logs(get_logs_t get_logs) {
    while (1) {
        int sz = get_logs(0, logtmp, sizeof(logtmp) - 1);
        if (sz <= 0)
            break;
        for (int i = 0; i < sz;) {
            int j;
            for (j = i; j < sz; ++j) {
                if (logtmp[j] == '\n') {
                    break;
                }
            }
            logtmp[j] = 0;
            SDL_Log("%s", logtmp + i);
            i = j + 1;
        }
    }
}

void audioCallback(void *userdata, Uint8 *stream, int len) {
    pxt_get_audio_samples((int16_t*)stream, len / 2);
}

void openAudio() {
    SDL_AudioSpec wanted, actual;

    SDL_zero(wanted);
    SDL_zero(actual);
    wanted.freq = 44100;
    wanted.format = AUDIO_S16SYS;
    wanted.channels = 1;
    wanted.samples = 1024;
    wanted.callback = audioCallback;

    SDL_CHECK(SDL_OpenAudio(&wanted, &actual) == 0);

    SDL_Log("audio device %d Hz, %d ch, %d sampl", actual.freq, actual.channels, actual.samples);
}

extern "C" int main(int argc, char *argv[]) {
    SDL_LogSetAllPriority(SDL_LOG_PRIORITY_INFO);

    void *vmDLL = loadPXTLib(argv);
    get_pixels_t get_pixels = (get_pixels_t)SDL_LoadFunction(vmDLL, "pxt_screen_get_pixels");
    vm_start_t vm_start = (vm_start_t)SDL_LoadFunction(vmDLL, "pxt_vm_start");
    raise_event_t raise_event = (raise_event_t)SDL_LoadFunction(vmDLL, "pxt_raise_event");
    get_logs_t get_logs = (get_logs_t)SDL_LoadFunction(vmDLL, "pxt_get_logs");
    get_panic_code_t get_panic_code =
        (get_panic_code_t)SDL_LoadFunction(vmDLL, "pxt_get_panic_code");
    pxt_get_audio_samples = (get_audio_samples_t)SDL_LoadFunction(vmDLL, "pxt_get_audio_samples");

    if (!get_pixels || !vm_start || !raise_event || !get_logs || !get_panic_code || !pxt_get_audio_samples) {
        fatal("can't load pxt function from DLL", "");
    }

    SDL_CHECK(SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO) >= 0);

    SDL_Window *window =
        SDL_CreateWindow("MakeCode Arcade64", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                         SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN);

    SDL_CHECK(window != NULL);

    SDL_Renderer *renderer =
        SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);

    SDL_Surface *surf;
    surf = SDL_CreateRGBSurfaceWithFormat(0, WIDTH, HEIGHT, 32, SDL_PIXELFORMAT_BGRA32);

    SDL_CHECK(surf != NULL);

    openAudio();

    memset(surf->pixels, 0, HEIGHT * WIDTH * 4);

    SDL_Texture *tex = SDL_CreateTextureFromSurface(renderer, surf);

    SDL_RenderClear(renderer);
    SDL_RenderCopy(renderer, tex, NULL, NULL);
    SDL_RenderPresent(renderer);

    int now = SDL_GetTicks();
    int lastLoad = 0;
    int nextLoad = now;

    SDL_Event e;
    int quit = 0;
    int numFr = 0;
    int prevTicks = SDL_GetTicks();

    while (!quit) {
        now = SDL_GetTicks();

        if (nextLoad && now >= nextLoad) {
            vm_start(argv[1]);
            SDL_PauseAudio(0);
            lastLoad = now;
            nextLoad = 0;
        }

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

        flush_logs(get_logs);

        if (!nextLoad) {
            int code = get_panic_code();
            if (code == -1) {
                SDL_Log("restarting image at user req");
                nextLoad = lastLoad + 3000; // this will likely be in the past
            } else if (code >= 1000) {
                SDL_Log("hit soft crash, code=%d; restarting", code - 1000);
                nextLoad = now + 3000;
            } else if (code != 0) {
                SDL_LogCritical(SDL_LOG_CATEGORY_APPLICATION, "fatal runtime error %d; bye", code);
                exit(1);
            }
        }

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
