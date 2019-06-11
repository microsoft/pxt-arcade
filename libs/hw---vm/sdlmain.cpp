#include "SDL.h"
#include <stdint.h>
#include <stdio.h>
#include <ctype.h>

#if UINTPTR_MAX == 0xffffffff
#define BINSUFF "-32"
#elif UINTPTR_MAX == 0xffffffffffffffff
#define BINSUFF ""
#else
#error "UINTPTR_MAX has invalid value"
#endif

#if defined(__IPHONEOS__) || defined(__ANDROID__)
#define PXT_STATIC 1
#define PXT_TOUCH 1
#define PXT_IOS 1
#endif

#if defined(__WINDOWS__)
#include <windows.h>
#define WIN_StringToUTF8(S)                                                                        \
    SDL_iconv_string("UTF-8", "UTF-16LE", (char *)(S), (SDL_wcslen(S) + 1) * sizeof(WCHAR))
#define WIN_UTF8ToString(S)                                                                        \
    (WCHAR *)SDL_iconv_string("UTF-16LE", "UTF-8", (char *)(S), SDL_strlen(S) + 1)
#endif

#ifndef PXT_STATIC
#if defined(__MACOSX__)
#define SONAME "libpxt" BINSUFF ".dylib"
#elif defined(__WINDOWS__)
#define SONAME "pxt" BINSUFF ".dll"
#else
#define SONAME "libpxt" BINSUFF ".so"
#endif
#endif

#define WIDTH 160
#define HEIGHT 120

int win_width, win_height;

SDL_Rect activeDisplayRect;

SDL_Renderer *renderer;

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
    KEY_RESET = 100, // passed as event to TS, which does control.reset()
    KEY_EXIT,        // handled here
};

int mapKeyCode(int sdlCode) {
    switch (sdlCode) {
    case SDLK_ESCAPE:
        return KEY_EXIT;
    case '/':
        return KEY_RESET;
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
typedef void (*vm_start_buffer_t)(uint8_t *data, unsigned len);
typedef int (*get_logs_t)(int logtype, char *dst, int maxSize);
typedef int (*get_panic_code_t)();
typedef void (*get_audio_samples_t)(int16_t *buf, unsigned numSamples);

#ifdef PXT_STATIC
extern "C" {
void pxt_screen_get_pixels(int width, int height, uint32_t *screen);
void pxt_raise_event(int src, int val);
void pxt_vm_start(const char *fn);
void pxt_vm_start_buffer(uint8_t *data, unsigned len);
int pxt_get_logs(int logtype, char *dst, int maxSize);
int pxt_get_panic_code();
void pxt_get_audio_samples(int16_t *buf, unsigned numSamples);
}
#else
get_audio_samples_t pxt_get_audio_samples;
raise_event_t pxt_raise_event;
vm_start_buffer_t pxt_vm_start_buffer;
#endif

int exitReq;

void raise_key(Key k, int ev) {
    if (k == KEY_EXIT && ev == INTERNAL_KEY_UP)
        exitReq = 1;
    pxt_raise_event(ev, k);
    pxt_raise_event(ev, 0); // any
}

void fatal(const char *msg, const char *info = "") {
    SDL_LogCritical(SDL_LOG_CATEGORY_APPLICATION, "%s %s (SDL Error: %s)", msg, info ? info : "",
                    SDL_GetError());
    exit(1);
}

#ifndef PXT_TOUCH
void init_touch_keys() {}
void draw_touch_keys() {}
void handle_touch_events(SDL_Event &) {}
#else
struct OnScreenKey {
    Key keyId;
    SDL_Point center;
    char name;
    bool isPressed, prevPressed;
};

struct TrackedFinger {
    SDL_FingerID fingerId;
    OnScreenKey *lastKey, *secondLastKey;
};

#define NUM_FINGERS 10
#define NUM_KEYS 8

OnScreenKey keys[NUM_KEYS];
TrackedFinger fingers[NUM_FINGERS];

int distance(SDL_Point &a, SDL_Point &b) {
    return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
}

void add_key(Key kid, char name, int x, int y) {
    for (int i = 0; i < NUM_KEYS; ++i) {
        if (keys[i].keyId == 0) {
            auto k = &keys[i];
            k->keyId = kid;
            k->center.x = x;
            k->center.y = y;
            k->name = name;
            break;
        }
    }
}

void init_touch_keys() {
    int widthLeft = activeDisplayRect.x;
    int widthRight = win_width - activeDisplayRect.x - activeDisplayRect.w;

    int kps = widthLeft / 2 - 10;
    if (kps > win_height / 6)
        kps = win_height / 6;
    int kpx = widthLeft / 2;
    int menuY = win_height / 10;
    int kpy = win_height / 2 + menuY;

    add_key(KEY_MENU, 'M', kpx - kps, menuY);
    add_key(KEY_EXIT, 'E', kpx + kps, menuY);

    add_key(KEY_LEFT, '<', kpx - kps, kpy);
    add_key(KEY_RIGHT, '<', kpx + kps, kpy);
    add_key(KEY_UP, '^', kpx, kpy - kps);
    add_key(KEY_DOWN, 'v', kpx, kpy + kps);

    int abx = win_width - widthRight / 2;
    int ay = win_height / 2 - kps;
    int by = win_height / 2 + kps;

    add_key(KEY_A, 'A', abx, ay);
    add_key(KEY_B, 'B', abx, by);
}

void draw_touch_keys() {
    SDL_Rect keyR;
    int sz = 3;
    keyR.w = sz * 2;
    keyR.h = sz * 2;
    for (int i = 0; i < NUM_KEYS; ++i) {
        SDL_SetRenderDrawColor(renderer, 255, keys[i].isPressed ? 255 : 0, 0, 255);
        keyR.x = keys[i].center.x - sz;
        keyR.y = keys[i].center.y - sz;
        SDL_RenderFillRect(renderer, &keyR);
    }
}

void handle_touch_events(SDL_Event &e) {
    if (e.type == SDL_FINGERDOWN || e.type == SDL_FINGERUP || e.type == SDL_FINGERMOTION) {
        SDL_Point p;
        p.x = e.tfinger.x * win_width;
        p.y = e.tfinger.y * win_height;

        int i, firstFree = -1;
        for (i = 0; i < NUM_FINGERS; ++i) {
            if (fingers[i].lastKey) {
                if (fingers[i].fingerId == e.tfinger.fingerId)
                    break;
            } else {
                if (firstFree == -1)
                    firstFree = i;
            }
        }

        if (e.type == SDL_FINGERUP) {
            if (i != NUM_FINGERS)
                fingers[i].lastKey = NULL;
        } else {
            if (i == NUM_FINGERS) {
                i = firstFree;
                if (i == -1)
                    fatal("too many fingers?");
            }
            fingers[i].fingerId = e.tfinger.fingerId;
            auto nearest = &keys[0];
            auto nearestDistance = -1;
            for (int j = 0; j < NUM_KEYS; ++j) {
                auto dist = distance(p, keys[j].center);
                if (nearestDistance == -1 || nearestDistance > dist) {
                    nearestDistance = dist;
                    nearest = &keys[j];
                }
            }

            fingers[i].secondLastKey = NULL;
            auto minDistance = (win_height / 5) * (win_height / 5);
            if (nearestDistance > minDistance)
                nearest = NULL;
            else {
                auto secondNearest = &keys[0];
                auto secondNearestDist = -1;
                for (int j = 0; j < NUM_KEYS; ++j) {
                    if (&keys[j] == nearest)
                        continue;
                    auto dist = distance(p, keys[j].center);
                    if (secondNearestDist == -1 || secondNearestDist > dist) {
                        secondNearestDist = dist;
                        secondNearest = &keys[j];
                    }
                }

                auto maxDist = nearestDistance * 16 / 10;
                if (secondNearestDist < maxDist) {
                    fingers[i].secondLastKey = secondNearest;
                }
            }

            fingers[i].lastKey = nearest;
        }

        for (int j = 0; j < NUM_KEYS; ++j) {
            keys[j].prevPressed = keys[j].isPressed;
            keys[j].isPressed = false;
        }

        for (int i = 0; i < NUM_FINGERS; ++i) {
            if (fingers[i].lastKey)
                fingers[i].lastKey->isPressed = true;
            if (fingers[i].secondLastKey)
                fingers[i].secondLastKey->isPressed = true;
        }

        for (int j = 0; j < NUM_KEYS; ++j) {
            if (keys[j].prevPressed != keys[j].isPressed)
                raise_key(keys[j].keyId, keys[j].isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP);
        }
    }
}
#endif

#define SDL_CHECK(call)                                                                            \
    if (!(call)) {                                                                                 \
        fatal("SDL Call error", #call);                                                            \
    }

#ifndef PXT_STATIC
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
#endif

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
    pxt_get_audio_samples((int16_t *)stream, len / 2);
}

SDL_AudioDeviceID audioDev;
void openAudio() {
    SDL_AudioSpec wanted, actual;

    SDL_zero(wanted);
    SDL_zero(actual);
    wanted.freq = 44100;
    wanted.format = AUDIO_S16SYS;
    wanted.channels = 1;
    wanted.samples = 1024;
    wanted.callback = audioCallback;

    int n = SDL_GetNumAudioDevices(0);
    for (int i = 0; i < n; ++i) {
        SDL_Log("audio %d %s", i, SDL_GetAudioDeviceName(i, 0));
    }

    audioDev = SDL_OpenAudioDevice(NULL, 0, &wanted, &actual, 0);

    // SDL_CHECK(SDL_OpenAudio(&wanted, &actual) == 0);

    SDL_Log("audio device %d Hz, %d ch, %d sampl", actual.freq, actual.channels, actual.samples);
}

static void SDLCALL logOutput(void *userdata, int category, SDL_LogPriority priority,
                              const char *message) {
    (void)userdata;

#if defined(__WINDOWS__)
    static HANDLE stdoutHandle;

    if (!stdoutHandle) {
        AttachConsole(ATTACH_PARENT_PROCESS);
        stdoutHandle = GetStdHandle(STD_OUTPUT_HANDLE);
    }

    unsigned len = strlen(message) + 2;
    char msgNL[len + 1];
    strcpy(msgNL, message);
    strcat(msgNL, "\r\n");

    OutputDebugString(msgNL);

    unsigned long charsWritten;
    WriteFile(stdoutHandle, msgNL, len, &charsWritten, NULL);
#else
    fprintf(stderr, "%s\n", message);
#endif
}

#ifdef PXT_IOS
extern "C" void fetchSources(const char *scriptId);
extern "C" void initCache();
#endif

extern "C" int main(int argc, char *argv[]) {
#ifdef PXT_IOS
    initCache();
#endif

    SDL_LogSetAllPriority(SDL_LOG_PRIORITY_INFO);

    SDL_LogSetOutputFunction(logOutput, NULL);

#ifndef PXT_STATIC
    SDL_Log("loading %s ...", SONAME);

    void *vmDLL = loadPXTLib(argv);
    get_pixels_t pxt_screen_get_pixels =
        (get_pixels_t)SDL_LoadFunction(vmDLL, "pxt_screen_get_pixels");
    vm_start_t pxt_vm_start = (vm_start_t)SDL_LoadFunction(vmDLL, "pxt_vm_start");
    pxt_vm_start_buffer = (vm_start_buffer_t)SDL_LoadFunction(vmDLL, "pxt_vm_start_buffer");
    pxt_raise_event = (raise_event_t)SDL_LoadFunction(vmDLL, "pxt_raise_event");
    get_logs_t pxt_get_logs = (get_logs_t)SDL_LoadFunction(vmDLL, "pxt_get_logs");
    get_panic_code_t pxt_get_panic_code =
        (get_panic_code_t)SDL_LoadFunction(vmDLL, "pxt_get_panic_code");
    pxt_get_audio_samples = (get_audio_samples_t)SDL_LoadFunction(vmDLL, "pxt_get_audio_samples");

    if (!pxt_screen_get_pixels || !pxt_vm_start || !pxt_vm_start_buffer || !pxt_raise_event ||
        !pxt_get_logs || !pxt_get_panic_code || !pxt_get_audio_samples) {
        fatal("can't load pxt function from DLL", "");
    }
#endif

    SDL_CHECK(SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO) >= 0);

    SDL_Window *window =
        SDL_CreateWindow("MakeCode Arcade64", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                         SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN);

    SDL_GetWindowSize(window, &win_width, &win_height);

    SDL_CHECK(window != NULL);

    renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);

    SDL_Surface *surf;
    surf = SDL_CreateRGBSurfaceWithFormat(0, WIDTH, HEIGHT, 32, SDL_PIXELFORMAT_BGRA32);

    SDL_CHECK(surf != NULL);

    openAudio();

    memset(surf->pixels, 0, HEIGHT * WIDTH * 4);

    SDL_Texture *tex = SDL_CreateTextureFromSurface(renderer, surf);

    int ww2 = win_height * 4 / 3;
    int freeSpace = win_width - ww2;
    int widthLeft = 3 * freeSpace / 4;
    activeDisplayRect.x = widthLeft;
    activeDisplayRect.y = 0;
    activeDisplayRect.h = win_height;
    activeDisplayRect.w = ww2;

    init_touch_keys();

    SDL_RenderClear(renderer);
    SDL_RenderCopy(renderer, tex, NULL, &activeDisplayRect);
    SDL_RenderPresent(renderer);

    int now = SDL_GetTicks();
    int nextLoad = now + 100;
    int lastLoad = 0;

    SDL_Event e;
    int quit = 0;
    int numFr = 0;
    int prevTicks = SDL_GetTicks();

    const char *imageName = argv[1];
#ifdef PXT_IOS
    const char *imageID = NULL;
    imageName = "menu.pxt64";
#endif

    while (!quit) {
        now = SDL_GetTicks();

        if (nextLoad && now >= nextLoad) {
#ifdef PXT_IOS
            if (imageID) {
                fetchSources(imageID);
                imageID = NULL;
            } else
#endif
                pxt_vm_start(imageName);
            SDL_PauseAudioDevice(audioDev, 0);
            // SDL_PauseAudio(0);
            nextLoad = 0;
            lastLoad = now;
        }

        while (SDL_PollEvent(&e)) {
            if (e.type == SDL_QUIT) {
                quit = 1;
            }
            if ((e.type == SDL_KEYDOWN || e.type == SDL_KEYUP) && !e.key.repeat) {
                int ev = e.type == SDL_KEYDOWN ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP;
                auto kk = (Key)mapKeyCode(e.key.keysym.sym);
                if (kk == KEY_EXIT) {
                    quit = 1;
                    break;
                }
                if (kk)
                    raise_key(kk, ev);
            }
#ifdef PXT_IOS
            if (e.type == SDL_DROPFILE) {
                char *p = e.drop.file;
                while (*p && *p != ':')
                    p++;
                while (*p && (*p == ':' || *p == '/'))
                    p++;
                char *beg = p;
                if (*p == '_') {
                    p++;
                    while (isalnum(*p))
                        p++;
                } else if (isdigit(*p)) {
                    while (isdigit(*p) || *p == '-')
                        p++;
                }
                if (p - beg > 8) {
                    *p = 0;
                    nextLoad = now + 300;
                    SDL_free((void *)imageID);
                    imageID = SDL_strdup(beg);
                }
                SDL_free(e.drop.file);
            }
#endif

            if (e.type == SDL_MOUSEBUTTONDOWN) {
                // quit = 1;
            }
            handle_touch_events(e);
        }

        pxt_screen_get_pixels(WIDTH, HEIGHT, (uint32_t *)surf->pixels);

        SDL_UpdateTexture(tex, NULL, surf->pixels, WIDTH * 4);

        SDL_SetRenderDrawColor(renderer, 40, 40, 40, 255);
        SDL_RenderClear(renderer);
        SDL_RenderCopy(renderer, tex, NULL, &activeDisplayRect);

        draw_touch_keys();
        SDL_RenderPresent(renderer);

        flush_logs(pxt_get_logs);

        if (exitReq) {
            if (!nextLoad && now > 2000 + lastLoad) {
                SDL_Log("exit at key request");
                nextLoad = now;
            }
            exitReq = 0;
        }

        if (!nextLoad) {
            int code = pxt_get_panic_code();
            if (code == -1) {
                // restart done in user code
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

#ifdef PXT_IOS
        SDL_Delay(25);
#endif
    }

    SDL_DestroyWindow(window);
    SDL_Quit();

    return 0;
}
