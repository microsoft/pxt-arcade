// Auto-generated. Do not edit.
declare const enum DAL {
    // built/codal/libraries/codal-core/inc/core/CodalComponent.h
    DEVICE_ID_BUTTON_A = 1,
    DEVICE_ID_BUTTON_B = 2,
    DEVICE_ID_BUTTON_AB = 3,
    DEVICE_ID_BUTTON_RESET = 4,
    DEVICE_ID_ACCELEROMETER = 5,
    DEVICE_ID_COMPASS = 6,
    DEVICE_ID_DISPLAY = 7,
    DEVICE_ID_THERMOMETER = 8,
    DEVICE_ID_RADIO = 9,
    DEVICE_ID_RADIO_DATA_READY = 10,
    DEVICE_ID_MULTIBUTTON_ATTACH = 11,
    DEVICE_ID_SERIAL = 12,
    DEVICE_ID_GESTURE = 13,
    DEVICE_ID_SYSTEM_TIMER = 14,
    DEVICE_ID_SCHEDULER = 15,
    DEVICE_ID_COMPONENT = 16,
    DEVICE_ID_LIGHT_SENSOR = 17,
    DEVICE_ID_TOUCH_SENSOR = 18,
    DEVICE_ID_SYSTEM_DAC = 19,
    DEVICE_ID_SYSTEM_MICROPHONE = 20,
    DEVICE_ID_SYSTEM_LEVEL_DETECTOR = 21,
    DEVICE_ID_SYSTEM_LEVEL_DETECTOR_SPL = 22,
    DEVICE_ID_MSC = 23,
    DEVICE_ID_SPI = 24,
    DEVICE_ID_IO_P0 = 100,
    DEVICE_ID_MESSAGE_BUS_LISTENER = 1021,
    DEVICE_ID_NOTIFY_ONE = 1022,
    DEVICE_ID_NOTIFY = 1023,
    DEVICE_COMPONENT_RUNNING = 4096,
    DEVICE_COMPONENT_STATUS_SYSTEM_TICK = 8192,
    DEVICE_COMPONENT_STATUS_IDLE_TICK = 16384,
    DEVICE_COMPONENT_LISTENERS_CONFIGURED = 1,
    DEVICE_COMPONENT_EVT_SYSTEM_TICK = 1,
    // built/codal/libraries/codal-core/inc/core/CodalFiber.h
    DEVICE_SCHEDULER_RUNNING = 1,
    DEVICE_SCHEDULER_IDLE = 2,
    DEVICE_FIBER_FLAG_FOB = 1,
    DEVICE_FIBER_FLAG_PARENT = 2,
    DEVICE_FIBER_FLAG_CHILD = 4,
    DEVICE_FIBER_FLAG_DO_NOT_PAGE = 8,
    DEVICE_SCHEDULER_EVT_TICK = 1,
    DEVICE_SCHEDULER_EVT_IDLE = 2,
    // built/codal/libraries/codal-core/inc/core/CodalListener.h
    MESSAGE_BUS_LISTENER_PARAMETERISED = 1,
    MESSAGE_BUS_LISTENER_METHOD = 2,
    MESSAGE_BUS_LISTENER_BUSY = 4,
    MESSAGE_BUS_LISTENER_REENTRANT = 8,
    MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY = 16,
    MESSAGE_BUS_LISTENER_DROP_IF_BUSY = 32,
    MESSAGE_BUS_LISTENER_NONBLOCKING = 64,
    MESSAGE_BUS_LISTENER_URGENT = 128,
    MESSAGE_BUS_LISTENER_DELETING = 32768,
    MESSAGE_BUS_LISTENER_IMMEDIATE = 192,
    // built/codal/libraries/codal-core/inc/core/ErrorNo.h
    DEVICE_OK = 0,
    DEVICE_INVALID_PARAMETER = -1001,
    DEVICE_NOT_SUPPORTED = -1002,
    DEVICE_CALIBRATION_IN_PROGRESS = -1003,
    DEVICE_CALIBRATION_REQUIRED = -1004,
    DEVICE_NO_RESOURCES = -1005,
    DEVICE_BUSY = -1006,
    DEVICE_CANCELLED = -1007,
    DEVICE_I2C_ERROR = -1010,
    DEVICE_SERIAL_IN_USE = -1011,
    DEVICE_NO_DATA = -1012,
    DEVICE_NOT_IMPLEMENTED = -1013,
    DEVICE_SPI_ERROR = -1014,
    DEVICE_OOM = 20,
    DEVICE_HEAP_ERROR = 30,
    DEVICE_NULL_DEREFERENCE = 40,
    DEVICE_USB_ERROR = 50,
    // built/codal/libraries/codal-core/inc/core/NotifyEvents.h
    DISPLAY_EVT_FREE = 1,
    CODAL_SERIAL_EVT_TX_EMPTY = 2,
    BLE_EVT_SERIAL_TX_EMPTY = 3,
    DEVICE_NOTIFY_USER_EVENT_BASE = 1024,
    // built/codal/libraries/codal-core/inc/driver-models/AbstractButton.h
    DEVICE_BUTTON_EVT_DOWN = 1,
    DEVICE_BUTTON_EVT_UP = 2,
    DEVICE_BUTTON_EVT_CLICK = 3,
    DEVICE_BUTTON_EVT_LONG_CLICK = 4,
    DEVICE_BUTTON_EVT_HOLD = 5,
    DEVICE_BUTTON_EVT_DOUBLE_CLICK = 6,
    DEVICE_BUTTON_LONG_CLICK_TIME = 1000,
    DEVICE_BUTTON_HOLD_TIME = 1500,
    DEVICE_BUTTON_STATE = 1,
    DEVICE_BUTTON_STATE_HOLD_TRIGGERED = 2,
    DEVICE_BUTTON_STATE_CLICK = 4,
    DEVICE_BUTTON_STATE_LONG_CLICK = 8,
    DEVICE_BUTTON_SIGMA_MIN = 0,
    DEVICE_BUTTON_SIGMA_MAX = 12,
    DEVICE_BUTTON_SIGMA_THRESH_HI = 8,
    DEVICE_BUTTON_SIGMA_THRESH_LO = 2,
    DEVICE_BUTTON_DOUBLE_CLICK_THRESH = 50,
    DEVICE_BUTTON_SIMPLE_EVENTS = 0,
    DEVICE_BUTTON_ALL_EVENTS = 1,
    ACTIVE_LOW = 0,
    ACTIVE_HIGH = 1,
    // built/codal/libraries/codal-core/inc/driver-models/Accelerometer.h
    ACCELEROMETER_IMU_DATA_VALID = 2,
    ACCELEROMETER_EVT_DATA_UPDATE = 1,
    ACCELEROMETER_EVT_NONE = 0,
    ACCELEROMETER_EVT_TILT_UP = 1,
    ACCELEROMETER_EVT_TILT_DOWN = 2,
    ACCELEROMETER_EVT_TILT_LEFT = 3,
    ACCELEROMETER_EVT_TILT_RIGHT = 4,
    ACCELEROMETER_EVT_FACE_UP = 5,
    ACCELEROMETER_EVT_FACE_DOWN = 6,
    ACCELEROMETER_EVT_FREEFALL = 7,
    ACCELEROMETER_EVT_3G = 8,
    ACCELEROMETER_EVT_6G = 9,
    ACCELEROMETER_EVT_8G = 10,
    ACCELEROMETER_EVT_SHAKE = 11,
    ACCELEROMETER_REST_TOLERANCE = 200,
    ACCELEROMETER_TILT_TOLERANCE = 200,
    ACCELEROMETER_FREEFALL_TOLERANCE = 400,
    ACCELEROMETER_SHAKE_TOLERANCE = 400,
    ACCELEROMETER_3G_TOLERANCE = 3072,
    ACCELEROMETER_6G_TOLERANCE = 6144,
    ACCELEROMETER_8G_TOLERANCE = 8192,
    ACCELEROMETER_GESTURE_DAMPING = 5,
    ACCELEROMETER_SHAKE_DAMPING = 10,
    ACCELEROMETER_SHAKE_RTX = 30,
    ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4,
    // built/codal/libraries/codal-core/inc/driver-models/Compass.h
    COMPASS_STATUS_RUNNING = 1,
    COMPASS_STATUS_CALIBRATED = 2,
    COMPASS_STATUS_CALIBRATING = 4,
    COMPASS_STATUS_ADDED_TO_IDLE = 8,
    COMPASS_EVT_DATA_UPDATE = 1,
    COMPASS_EVT_CONFIG_NEEDED = 2,
    COMPASS_EVT_CALIBRATE = 3,
    COMPASS_EVT_CALIBRATION_NEEDED = 4,
    // built/codal/libraries/codal-core/inc/driver-models/Pin.h
    IO_STATUS_DIGITAL_IN = 1,
    IO_STATUS_DIGITAL_OUT = 2,
    IO_STATUS_ANALOG_IN = 4,
    IO_STATUS_ANALOG_OUT = 8,
    IO_STATUS_TOUCH_IN = 16,
    IO_STATUS_EVENT_ON_EDGE = 32,
    IO_STATUS_EVENT_PULSE_ON_EDGE = 64,
    DEVICE_PIN_MAX_OUTPUT = 1023,
    DEVICE_PIN_MAX_SERVO_RANGE = 180,
    DEVICE_PIN_DEFAULT_SERVO_RANGE = 2000,
    DEVICE_PIN_DEFAULT_SERVO_CENTER = 1500,
    DEVICE_PIN_EVENT_NONE = 0,
    DEVICE_PIN_EVENT_ON_EDGE = 1,
    DEVICE_PIN_EVENT_ON_PULSE = 2,
    DEVICE_PIN_EVENT_ON_TOUCH = 3,
    DEVICE_PIN_EVT_RISE = 2,
    DEVICE_PIN_EVT_FALL = 3,
    DEVICE_PIN_EVT_PULSE_HI = 4,
    DEVICE_PIN_EVT_PULSE_LO = 5,
    PIN_CAPABILITY_DIGITAL = 1,
    PIN_CAPABILITY_ANALOG = 2,
    PIN_CAPABILITY_AD = 3,
    PIN_CAPABILITY_ALL = 3,
    None = 0,
    Down = 1,
    Up = 2,
    // built/codal/libraries/codal-core/inc/driver-models/SPIFlash.h
    SPIFLASH_PAGE_SIZE = 256,
    SPIFLASH_SMALL_ROW_PAGES = 16,
    SPIFLASH_BIG_ROW_PAGES = 256,
    // /libraries/codal-core/inc/driver-models/Serial.h
    CODAL_SERIAL_DEFAULT_BAUD_RATE = 115200,
    CODAL_SERIAL_DEFAULT_BUFFER_SIZE = 20,
    CODAL_SERIAL_EVT_DELIM_MATCH = 1,
    CODAL_SERIAL_EVT_HEAD_MATCH = 2,
    CODAL_SERIAL_EVT_RX_FULL = 3,
    CODAL_SERIAL_EVT_DATA_RECEIVED = 4,
    CODAL_SERIAL_STATUS_RX_IN_USE = 1,
    CODAL_SERIAL_STATUS_TX_IN_USE = 2,
    CODAL_SERIAL_STATUS_RX_BUFF_INIT = 4,
    CODAL_SERIAL_STATUS_TX_BUFF_INIT = 8,
    CODAL_SERIAL_STATUS_RXD = 16,
    ASYNC = 0,
    SYNC_SPINWAIT = 1,
    SYNC_SLEEP = 2,
    RxInterrupt = 0,
    TxInterrupt = 1,
    // built/codal/libraries/codal-core/inc/driver-models/Timer.h
    CODAL_TIMER_DEFAULT_EVENT_LIST_SIZE = 10,
    // built/codal/libraries/codal-core/inc/drivers/AnalogSensor.h
    ANALOG_THRESHOLD_LOW = 1,
    ANALOG_THRESHOLD_HIGH = 2,
    ANALOG_SENSOR_UPDATE_NEEDED = 3,
    ANALOG_SENSOR_INITIALISED = 1,
    ANALOG_SENSOR_HIGH_THRESHOLD_PASSED = 2,
    ANALOG_SENSOR_LOW_THRESHOLD_PASSED = 4,
    ANALOG_SENSOR_LOW_THRESHOLD_ENABLED = 8,
    ANALOG_SENSOR_HIGH_THRESHOLD_ENABLED = 16,
    // built/codal/libraries/codal-core/inc/drivers/AnimatedDisplay.h
    DISPLAY_EVT_ANIMATION_COMPLETE = 1,
    DISPLAY_DEFAULT_AUTOCLEAR = 1,
    DISPLAY_SPACING = 1,
    DISPLAY_ANIMATE_DEFAULT_POS = -255,
    DISPLAY_DEFAULT_SCROLL_SPEED = 120,
    DISPLAY_DEFAULT_SCROLL_STRIDE = -1,
    DISPLAY_DEFAULT_PRINT_SPEED = 400,
    ANIMATION_MODE_NONE = 0,
    ANIMATION_MODE_STOPPED = 1,
    ANIMATION_MODE_SCROLL_TEXT = 2,
    ANIMATION_MODE_PRINT_TEXT = 3,
    ANIMATION_MODE_SCROLL_IMAGE = 4,
    ANIMATION_MODE_ANIMATE_IMAGE = 5,
    ANIMATION_MODE_ANIMATE_IMAGE_WITH_CLEAR = 6,
    ANIMATION_MODE_PRINT_CHARACTER = 7,
    // built/codal/libraries/codal-core/inc/drivers/FAT.h
    FAT_RESERVED_SECTORS = 1,
    FAT_ROOT_DIR_SECTORS = 4,
    // built/codal/libraries/codal-core/inc/drivers/HID.h
    HID_REQUEST_GET_REPORT = 1,
    HID_REQUEST_GET_IDLE = 2,
    HID_REQUEST_GET_PROTOCOL = 3,
    HID_REQUEST_SET_REPORT = 9,
    HID_REQUEST_SET_IDLE = 10,
    HID_REQUEST_SET_PROTOCOL = 11,
    // built/codal/libraries/codal-core/inc/drivers/HIDKeyboard.h
    HID_KEYBOARD_NUM_REPORTS = 3,
    HID_KEYBOARD_REPORT_GENERIC = 1,
    HID_KEYBOARD_REPORT_CONSUMER = 2,
    HID_KEYBOARD_KEYSTATE_SIZE_GENERIC = 8,
    HID_KEYBOARD_KEYSTATE_SIZE_CONSUMER = 2,
    HID_KEYBOARD_MODIFIER_OFFSET = 2,
    HID_KEYBOARD_DELAY_DEFAULT = 10,
    PressKey = 0,
    ReleaseKey = 1,
    // built/codal/libraries/codal-core/inc/drivers/KeyMap.h
    KEYMAP_ALL_KEYS_UP_Val = 1,
    KEYMAP_ALL_KEYS_UP_POS = 28,
    KEYMAP_NORMAL_KEY_Val = 0,
    KEYMAP_MODIFIER_KEY_Val = 1,
    KEYMAP_MODIFIER_POS = 29,
    KEYMAP_MEDIA_KEY_Val = 1,
    KEYMAP_MEDIA_POS = 30,
    KEYMAP_KEY_UP_Val = 0,
    KEYMAP_KEY_DOWN_Val = 1,
    KEYMAP_KEY_DOWN_POS = 31,
    // built/codal/libraries/codal-core/inc/drivers/LEDMatrix.h
    LED_MATRIX_GREYSCALE_BIT_DEPTH = 8,
    LED_MATRIX_EVT_LIGHT_SENSE = 2,
    LED_MATRIX_EVT_FRAME_TIMEOUT = 3,
    LED_MATRIX_MINIMUM_BRIGHTNESS = 1,
    LED_MATRIX_MAXIMUM_BRIGHTNESS = 255,
    LED_MATRIX_DEFAULT_BRIGHTNESS = 255,
    DISPLAY_MODE_BLACK_AND_WHITE = 0,
    DISPLAY_MODE_GREYSCALE = 1,
    DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE = 2,
    MATRIX_DISPLAY_ROTATION_0 = 0,
    MATRIX_DISPLAY_ROTATION_90 = 1,
    MATRIX_DISPLAY_ROTATION_180 = 2,
    MATRIX_DISPLAY_ROTATION_270 = 3,
    NO_CONN = 0,
    // built/codal/libraries/codal-core/inc/drivers/MultiButton.h
    MULTI_BUTTON_STATE_1 = 1,
    MULTI_BUTTON_STATE_2 = 2,
    MULTI_BUTTON_HOLD_TRIGGERED_1 = 4,
    MULTI_BUTTON_HOLD_TRIGGERED_2 = 8,
    MULTI_BUTTON_SUPRESSED_1 = 16,
    MULTI_BUTTON_SUPRESSED_2 = 32,
    MULTI_BUTTON_ATTACHED = 64,
    // built/codal/libraries/codal-core/inc/drivers/ST7735.h
    MADCTL_MY = 128,
    MADCTL_MX = 64,
    MADCTL_MV = 32,
    MADCTL_ML = 16,
    MADCTL_RGB = 0,
    MADCTL_BGR = 8,
    MADCTL_MH = 4,
    // built/codal/libraries/codal-core/inc/drivers/TouchButton.h
    TOUCH_BUTTON_CALIBRATION_PERIOD = 10,
    TOUCH_BUTTON_CALIBRATION_LINEAR_OFFSET = 2,
    TOUCH_BUTTON_CALIBRATION_PERCENTAGE_OFFSET = 5,
    TOUCH_BUTTON_CALIBRATING = 16,
    // built/codal/libraries/codal-core/inc/drivers/TouchSensor.h
    TOUCH_SENSOR_MAX_BUTTONS = 10,
    TOUCH_SENSOR_SAMPLE_PERIOD = 50,
    TOUCH_SENSE_SAMPLE_MAX = 1000,
    TOUCH_SENSOR_UPDATE_NEEDED = 1,
    // built/codal/libraries/codal-core/inc/drivers/USB_HID_Keys.h
    KEY_MOD_LCTRL = 1,
    KEY_MOD_LSHIFT = 2,
    KEY_MOD_LALT = 4,
    KEY_MOD_LMETA = 8,
    KEY_MOD_RCTRL = 16,
    KEY_MOD_RSHIFT = 32,
    KEY_MOD_RALT = 64,
    KEY_MOD_RMETA = 128,
    KEY_NONE = 0,
    KEY_ERR_OVF = 1,
    KEY_A = 4,
    KEY_B = 5,
    KEY_C = 6,
    KEY_D = 7,
    KEY_E = 8,
    KEY_F = 9,
    KEY_G = 10,
    KEY_H = 11,
    KEY_I = 12,
    KEY_J = 13,
    KEY_K = 14,
    KEY_L = 15,
    KEY_M = 16,
    KEY_N = 17,
    KEY_O = 18,
    KEY_P = 19,
    KEY_Q = 20,
    KEY_R = 21,
    KEY_S = 22,
    KEY_T = 23,
    KEY_U = 24,
    KEY_V = 25,
    KEY_W = 26,
    KEY_X = 27,
    KEY_Y = 28,
    KEY_Z = 29,
    KEY_1 = 30,
    KEY_2 = 31,
    KEY_3 = 32,
    KEY_4 = 33,
    KEY_5 = 34,
    KEY_6 = 35,
    KEY_7 = 36,
    KEY_8 = 37,
    KEY_9 = 38,
    KEY_0 = 39,
    KEY_ENTER = 40,
    KEY_ESC = 41,
    KEY_BACKSPACE = 42,
    KEY_TAB = 43,
    KEY_SPACE = 44,
    KEY_MINUS = 45,
    KEY_EQUAL = 46,
    KEY_LEFTBRACE = 47,
    KEY_RIGHTBRACE = 48,
    KEY_BACKSLASH = 49,
    KEY_HASHTILDE = 50,
    KEY_SEMICOLON = 51,
    KEY_APOSTROPHE = 52,
    KEY_GRAVE = 53,
    KEY_COMMA = 54,
    KEY_DOT = 55,
    KEY_SLASH = 56,
    KEY_CAPSLOCK = 57,
    KEY_F1 = 58,
    KEY_F2 = 59,
    KEY_F3 = 60,
    KEY_F4 = 61,
    KEY_F5 = 62,
    KEY_F6 = 63,
    KEY_F7 = 64,
    KEY_F8 = 65,
    KEY_F9 = 66,
    KEY_F10 = 67,
    KEY_F11 = 68,
    KEY_F12 = 69,
    KEY_SYSRQ = 70,
    KEY_SCROLLLOCK = 71,
    KEY_PAUSE = 72,
    KEY_INSERT = 73,
    KEY_HOME = 74,
    KEY_PAGEUP = 75,
    KEY_DELETE = 76,
    KEY_END = 77,
    KEY_PAGEDOWN = 78,
    KEY_RIGHT = 79,
    KEY_LEFT = 80,
    KEY_DOWN = 81,
    KEY_UP = 82,
    KEY_NUMLOCK = 83,
    KEY_KPSLASH = 84,
    KEY_KPASTERISK = 85,
    KEY_KPMINUS = 86,
    KEY_KPPLUS = 87,
    KEY_KPENTER = 88,
    KEY_KP1 = 89,
    KEY_KP2 = 90,
    KEY_KP3 = 91,
    KEY_KP4 = 92,
    KEY_KP5 = 93,
    KEY_KP6 = 94,
    KEY_KP7 = 95,
    KEY_KP8 = 96,
    KEY_KP9 = 97,
    KEY_KP0 = 98,
    KEY_KPDOT = 99,
    KEY_102ND = 100,
    KEY_COMPOSE = 101,
    KEY_POWER = 102,
    KEY_KPEQUAL = 103,
    KEY_F13 = 104,
    KEY_F14 = 105,
    KEY_F15 = 106,
    KEY_F16 = 107,
    KEY_F17 = 108,
    KEY_F18 = 109,
    KEY_F19 = 110,
    KEY_F20 = 111,
    KEY_F21 = 112,
    KEY_F22 = 113,
    KEY_F23 = 114,
    KEY_F24 = 115,
    KEY_OPEN = 116,
    KEY_HELP = 117,
    KEY_PROPS = 118,
    KEY_FRONT = 119,
    KEY_STOP = 120,
    KEY_AGAIN = 121,
    KEY_UNDO = 122,
    KEY_CUT = 123,
    KEY_COPY = 124,
    KEY_PASTE = 125,
    KEY_FIND = 126,
    KEY_MUTE = 127,
    KEY_VOLUMEUP = 128,
    KEY_VOLUMEDOWN = 129,
    KEY_KPCOMMA = 133,
    KEY_RO = 135,
    KEY_KATAKANAHIRAGANA = 136,
    KEY_YEN = 137,
    KEY_HENKAN = 138,
    KEY_MUHENKAN = 139,
    KEY_KPJPCOMMA = 140,
    KEY_HANGEUL = 144,
    KEY_HANJA = 145,
    KEY_KATAKANA = 146,
    KEY_HIRAGANA = 147,
    KEY_ZENKAKUHANKAKU = 148,
    KEY_KPLEFTPAREN = 182,
    KEY_KPRIGHTPAREN = 183,
    KEY_LEFTCTRL = 224,
    KEY_LEFTSHIFT = 225,
    KEY_LEFTALT = 226,
    KEY_LEFTMETA = 227,
    KEY_RIGHTCTRL = 228,
    KEY_RIGHTSHIFT = 229,
    KEY_RIGHTALT = 230,
    KEY_RIGHTMETA = 231,
    KEY_MEDIA_PLAYPAUSE = 232,
    KEY_MEDIA_STOPCD = 233,
    KEY_MEDIA_PREVIOUSSONG = 234,
    KEY_MEDIA_NEXTSONG = 235,
    KEY_MEDIA_EJECTCD = 236,
    KEY_MEDIA_VOLUMEUP = 237,
    KEY_MEDIA_VOLUMEDOWN = 238,
    KEY_MEDIA_MUTE = 239,
    KEY_MEDIA_WWW = 240,
    KEY_MEDIA_BACK = 241,
    KEY_MEDIA_FORWARD = 242,
    KEY_MEDIA_STOP = 243,
    KEY_MEDIA_FIND = 244,
    KEY_MEDIA_SCROLLUP = 245,
    KEY_MEDIA_SCROLLDOWN = 246,
    KEY_MEDIA_EDIT = 247,
    KEY_MEDIA_SLEEP = 248,
    KEY_MEDIA_COFFEE = 249,
    KEY_MEDIA_REFRESH = 250,
    KEY_MEDIA_CALC = 251,
    // built/codal/libraries/codal-core/inc/drivers/uf2format.h
    UF2FORMAT_H = 1,
    APP_START_ADDRESS = 8192,
    UF2_FLAG_NOFLASH = 1,
    // built/codal/libraries/codal-core/inc/streams/DataStream.h
    DATASTREAM_MAXIMUM_BUFFERS = 1,
    // built/codal/libraries/codal-core/inc/streams/LevelDetector.h
    LEVEL_THRESHOLD_LOW = 1,
    LEVEL_THRESHOLD_HIGH = 2,
    LEVEL_DETECTOR_INITIALISED = 1,
    LEVEL_DETECTOR_HIGH_THRESHOLD_PASSED = 2,
    LEVEL_DETECTOR_LOW_THRESHOLD_PASSED = 4,
    LEVEL_DETECTOR_DEFAULT_WINDOW_SIZE = 128,
    // built/codal/libraries/codal-core/inc/streams/LevelDetectorSPL.h
    LEVEL_DETECTOR_SPL_INITIALISED = 1,
    LEVEL_DETECTOR_SPL_HIGH_THRESHOLD_PASSED = 2,
    LEVEL_DETECTOR_SPL_LOW_THRESHOLD_PASSED = 4,
    LEVEL_DETECTOR_SPL_DEFAULT_WINDOW_SIZE = 128,
    // built/codal/libraries/codal-core/inc/streams/Synthesizer.h
    SYNTHESIZER_SAMPLE_RATE = 44100,
    TONE_WIDTH = 1024,
    // built/codal/libraries/codal-core/inc/types/BitmapFont.h
    BITMAP_FONT_WIDTH = 5,
    BITMAP_FONT_HEIGHT = 5,
    BITMAP_FONT_ASCII_START = 32,
    BITMAP_FONT_ASCII_END = 126,
    // built/codal/libraries/codal-core/inc/types/CoordinateSystem.h
    COORDINATE_SPACE_ROTATED_0 = 0,
    COORDINATE_SPACE_ROTATED_90 = 1,
    COORDINATE_SPACE_ROTATED_180 = 2,
    COORDINATE_SPACE_ROTATED_270 = 3,
    RAW = 0,
    SIMPLE_CARTESIAN = 1,
    NORTH_EAST_DOWN = 2,
    NORTH_EAST_UP = 3,
    // built/codal/libraries/codal-core/inc/types/Event.h
    DEVICE_ID_ANY = 0,
    DEVICE_EVT_ANY = 0,
    CREATE_ONLY = 0,
    CREATE_AND_FIRE = 1,
    DEVICE_EVENT_DEFAULT_LAUNCH_MODE = 1,
    // built/codal/libraries/codal-core/inc/types/RefCounted.h
    REF_TAG_STRING = 1,
    REF_TAG_BUFFER = 2,
    REF_TAG_IMAGE = 3,
    REF_TAG_USER = 32,
    // built/codal/pxtapp/core---stm32f401re/hf2dbg.h
    HF2DBG_H = 1,
    // built/codal/pxtapp/core---stm32f401re/pins.h
    CFG_PIN_ACCELEROMETER_INT = 1,
    CFG_PIN_ACCELEROMETER_SCL = 2,
    CFG_PIN_ACCELEROMETER_SDA = 3,
    CFG_PIN_BTN_A = 4,
    CFG_PIN_BTN_B = 5,
    CFG_PIN_BTN_SLIDE = 6,
    CFG_PIN_DOTSTAR_CLOCK = 7,
    CFG_PIN_DOTSTAR_DATA = 8,
    CFG_PIN_FLASH_CS = 9,
    CFG_PIN_FLASH_MISO = 10,
    CFG_PIN_FLASH_MOSI = 11,
    CFG_PIN_FLASH_SCK = 12,
    CFG_PIN_LED = 13,
    CFG_PIN_LIGHT = 14,
    CFG_PIN_MICROPHONE = 15,
    CFG_PIN_MIC_CLOCK = 16,
    CFG_PIN_MIC_DATA = 17,
    CFG_PIN_MISO = 18,
    CFG_PIN_MOSI = 19,
    CFG_PIN_NEOPIXEL = 20,
    CFG_PIN_RX = 21,
    CFG_PIN_RXLED = 22,
    CFG_PIN_SCK = 23,
    CFG_PIN_SCL = 24,
    CFG_PIN_SDA = 25,
    CFG_PIN_SPEAKER_AMP = 26,
    CFG_PIN_TEMPERATURE = 27,
    CFG_PIN_TX = 28,
    CFG_PIN_TXLED = 29,
    CFG_PIN_IR_OUT = 30,
    CFG_PIN_IR_IN = 31,
    CFG_PIN_DISPLAY_SCK = 32,
    CFG_PIN_DISPLAY_MISO = 33,
    CFG_PIN_DISPLAY_MOSI = 34,
    CFG_PIN_DISPLAY_CS = 35,
    CFG_PIN_DISPLAY_DC = 36,
    CFG_DISPLAY_WIDTH = 37,
    CFG_DISPLAY_HEIGHT = 38,
    CFG_DISPLAY_CFG0 = 39,
    CFG_DISPLAY_CFG1 = 40,
    CFG_DISPLAY_CFG2 = 41,
    CFG_DISPLAY_CFG3 = 42,
    CFG_PIN_DISPLAY_RST = 43,
    CFG_PIN_DISPLAY_BL = 44,
    CFG_PIN_SERVO_1 = 45,
    CFG_PIN_SERVO_2 = 46,
    CFG_PIN_BTN_LEFT = 47,
    CFG_PIN_BTN_RIGHT = 48,
    CFG_PIN_BTN_UP = 49,
    CFG_PIN_BTN_DOWN = 50,
    CFG_PIN_BTN_MENU = 51,
    CFG_PIN_LED_R = 52,
    CFG_PIN_LED_G = 53,
    CFG_PIN_LED_B = 54,
    CFG_PIN_LED1 = 55,
    CFG_PIN_LED2 = 56,
    CFG_PIN_LED3 = 57,
    CFG_PIN_LED4 = 58,
    CFG_SPEAKER_VOLUME = 59,
    CFG_PIN_A0 = 100,
    CFG_PIN_A1 = 101,
    CFG_PIN_A2 = 102,
    CFG_PIN_A3 = 103,
    CFG_PIN_A4 = 104,
    CFG_PIN_A5 = 105,
    CFG_PIN_A6 = 106,
    CFG_PIN_A7 = 107,
    CFG_PIN_A8 = 108,
    CFG_PIN_A9 = 109,
    CFG_PIN_A10 = 110,
    CFG_PIN_A11 = 111,
    CFG_PIN_A12 = 112,
    CFG_PIN_A13 = 113,
    CFG_PIN_A14 = 114,
    CFG_PIN_A15 = 115,
    CFG_PIN_D0 = 150,
    CFG_PIN_D1 = 151,
    CFG_PIN_D2 = 152,
    CFG_PIN_D3 = 153,
    CFG_PIN_D4 = 154,
    CFG_PIN_D5 = 155,
    CFG_PIN_D6 = 156,
    CFG_PIN_D7 = 157,
    CFG_PIN_D8 = 158,
    CFG_PIN_D9 = 159,
    CFG_PIN_D10 = 160,
    CFG_PIN_D11 = 161,
    CFG_PIN_D12 = 162,
    CFG_PIN_D13 = 163,
    CFG_PIN_D14 = 164,
    CFG_PIN_D15 = 165,
    CFG_NUM_NEOPIXELS = 200,
    CFG_NUM_DOTSTARS = 201,
    CFG_DEFAULT_BUTTON_MODE = 202,
    CFG_SWD_ENABLED = 203,
    CFG_FLASH_BYTES = 204,
    CFG_RAM_BYTES = 205,
    CFG_POWER_DEEPSLEEP_TIMEOUT = 212,
    CFG_USER_CFG_0 = 2000,
    CFG_USER_CFG_1 = 2001,
    CFG_USER_CFG_2 = 2002,
    CFG_USER_CFG_3 = 2003,
    CFG_USER_CFG_4 = 2004,
    CFG_USER_CFG_5 = 2005,
    CFG_USER_CFG_6 = 2006,
    CFG_USER_CFG_7 = 2007,
    CFG_USER_CFG_8 = 2008,
    CFG_USER_CFG_9 = 2009,
    CFG_ARCADE_CFG_0 = 2100,
    CFG_ARCADE_CFG_1 = 2101,
    CFG_ARCADE_SCREEN_WIDTH = 2102,
    CFG_ARCADE_SCREEN_HEIGHT = 2103,
    BUTTON_ACTIVE_HIGH_PULL_DOWN = 17,
    BUTTON_ACTIVE_HIGH_PULL_UP = 33,
    BUTTON_ACTIVE_HIGH_PULL_NONE = 49,
    BUTTON_ACTIVE_LOW_PULL_DOWN = 16,
    BUTTON_ACTIVE_LOW_PULL_UP = 32,
    BUTTON_ACTIVE_LOW_PULL_NONE = 48,
    // built/codal/pxtapp/core---stm32f401re/platform.h
    PXT_BOOTLOADER_CFG_ADDR = 134234056,
    PAGE_SIZE = 1024,
    DEV_NUM_PINS = 64,
    IMAGE_BITS = 4,
    PA_0 = 0,
    PA_1 = 1,
    PA_2 = 2,
    PA_3 = 3,
    PA_4 = 4,
    PA_5 = 5,
    PA_6 = 6,
    PA_7 = 7,
    PA_8 = 8,
    PA_9 = 9,
    PA_10 = 10,
    PA_11 = 11,
    PA_12 = 12,
    PA_13 = 13,
    PA_14 = 14,
    PA_15 = 15,
    PB_0 = 16,
    PB_1 = 17,
    PB_2 = 18,
    PB_3 = 19,
    PB_4 = 20,
    PB_5 = 21,
    PB_6 = 22,
    PB_7 = 23,
    PB_8 = 24,
    PB_9 = 25,
    PB_10 = 26,
    PB_11 = 27,
    PB_12 = 28,
    PB_13 = 29,
    PB_14 = 30,
    PB_15 = 31,
    PC_0 = 32,
    PC_1 = 33,
    PC_2 = 34,
    PC_3 = 35,
    PC_4 = 36,
    PC_5 = 37,
    PC_6 = 38,
    PC_7 = 39,
    PC_8 = 40,
    PC_9 = 41,
    PC_10 = 42,
    PC_11 = 43,
    PC_12 = 44,
    PC_13 = 45,
    PC_14 = 46,
    PC_15 = 47,
    // built/codal/pxtapp/core---stm32f401re/pxt.h
    DEVICE_ID_BUTTON_SLIDE = 3000,
    DEVICE_ID_MICROPHONE = 3001,
    DEVICE_ID_FIRST_BUTTON = 4000,
    DEVICE_ID_FIRST_TOUCHBUTTON = 4100,
    // built/codal/pxtapp/core---stm32f401re/uf2hid.h
    UF2_HID_H = 1,
    // built/codal/pxtapp/pxtbase.h
    MEMDBG_ENABLED = 0,
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,
    UInt32LE = 11,
    UInt32BE = 12,
    Float32LE = 13,
    Float64LE = 14,
    Float32BE = 15,
    Float64BE = 16,
    Undefined = 0,
    Boolean = 1,
    Number = 2,
    String = 3,
    Object = 4,
    Function = 5,
    // built/codal/pxtapp/pxtconfig.h
    PXT_VM = 0,
}
