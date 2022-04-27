enum SegmentStyle {
    //% block="blank"
    Blank = 0,
    //% block="thin"
    Thin = 1,
    //% block="narrow"
    Narrow = 2,
    //% block="medium"
    Medium = 3,
    //% block="thick"
    Thick = 4
}

enum DigitRadix {
    //% block="decimal"
    Decimal = 10,
    //% block="hex"
    Hex = 16,
    //% block="octal"
    Octal = 8,
    //% block="alpha"
    Alpha = 26
}

enum SegmentScale {
    //% block="full"
    Full,
    //% block="half"
    Half
}

// "0123456789ABCDEFHJLoPrUY-°"
enum SegmentCharacter {
    //% block="0"
    ZERO,
    //% block="1"
    ONE,
    //% block="2"
    TWO,
    //% block="3"
    THREE,
    //% block="4"
    FOUR,
    //% block="5"
    FIVE,
    //% block="6"
    SIX,
    //% block="7"
    SEVEN,
    //% block="8"
    EIGHT,
    //% block="9"
    NINE,
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="C"
    C,
    //% block="D"
    D,
    //% block="E"
    E,
    //% block="F"
    F,
    //% block="H"
    H,
    //% block="J"
    J,
    //% block="L"
    L,
    //% block="o"
    o,
    //% block="P"
    P,
    //% block="r"
    r,
    //% block="U"
    U,
    //% block="Y"
    Y,
    //% block="-"
    Hyphen,
    //% block="°"
    Degree
}

/**
* Seven segment display digits and gizmos
*/
//% icon="\uf2a1" color="#4682B4" blockGap=8
//% groups='["Create", "Counter", "Digits"]'
namespace sevenseg {

    // Copy these array sets along with the array mapping string into Node to get the
    // formatting of the segment buffer data.

    /*
    var fullSegment: number[][] = [
        [1, 0, 14, 0, 2, 1, 13, 1, 3, 2, 12, 2, 4, 3, 11, 3],
        [15, 2, 15, 14, 14, 3, 14, 13, 13, 4, 13, 12, 12, 5, 12, 11],
        [15, 17, 15, 29, 14, 18, 14, 28, 13, 19, 13, 27, 12, 20, 12, 26],
        [1, 31, 14, 31, 2, 30, 13, 30, 3, 29, 12, 29, 4, 28, 11, 28],
        [0, 17, 0, 29, 1, 18, 1, 28, 2, 19, 2, 27, 3, 20, 3, 26],
        [0, 2, 0, 14, 1, 3, 1, 13, 2, 4, 2, 12, 3, 5, 3, 11],
        [2, 15, 13, 15, 2, 16, 13, 16, 3, 14, 12, 14, 3, 17, 12, 17]
    ];
    "hex`" + fullSegment.map(n => n.toString(16)).map(n => n.length < 2 ? "0" + n : n).join("") + "`"
    */

    // packed metrics of pixel drawing for full size digit segments
    const fullSegment: Buffer[] = [
        hex`01000e0002010d0103020c0204030b03`,
        hex`0f020f0e0e030e0d0d040d0c0c050c0b`,
        hex`0f110f1d0e120e1c0d130d1b0c140c1a`,
        hex`011f0e1f021e0d1e031d0c1d041c0b1c`,
        hex`0011001d0112011c0213021b0314031a`,
        hex`0002000e0103010d0204020c0305030b`,
        hex`020f0d0f02100d10030e0c0e03110c11`
    ];

    /*
    var halfSegment: number[][] = [
        [1, 0, 6, 0, 2, 1, 5, 1],
        [7, 2, 7, 6, 6, 3, 6, 5],
        [7, 8, 7, 13, 6, 9, 6, 12],
        [1, 15, 6, 15, 2, 14, 5, 14],
        [0, 8, 0, 13, 1, 9, 1, 12],
        [0, 2, 0, 6, 1, 3, 1, 5],
        [2, 7, 5, 7, 2, 7, 5, 7]
    ];
    "hex`" + halfSegment.map(n => n.toString(16)).map(n => n.length < 2 ? "0" + n : n).join("") + "`"
    */

    // packed metrics of pixel drawing for half size digit segments
    const halfSegment: Buffer[] = [
        hex`0100060002010501`,
        hex`0702070606030605`,
        hex`0708070d0609060c`,
        hex`010f060f020e050e`,
        hex`0008000d0109010c`,
        hex`0002000601030105`,
        hex`0207050702070507`
    ];

    // Seven segment layout and id assignments
    //
    //          a
    //      =========
    //     ||       ||
    //   f ||       || b
    //     ||   g   ||
    //      =========
    //     ||       ||
    //   e ||       || c
    //     ||   d   ||
    //      =========

    /*
    const segmapIds = ["abcdef", "bc", "abdeg", "abcdg", "bcfg", "acdfg", "acdefg", "abc", "abcdefg", "abcdfg"];
    var segmap = [
        0b11111100, // '0' digit maps "abcdef.."
        0b01100000, // '1' digit maps ".bc....."
        0b11011010, // '2' digit maps "ab.de.g."
        0b11110010, // '3' digit maps "abcd..g."
        0b01100110, // '4' digit maps ".bc..fg."
        0b10110110, // '5' digit maps "a.cd.fg."
        0b10111110, // '6' digit maps "a.cdefg."
        0b11100000, // '7' digit maps "abc....."
        0b11111110, // '8' digit maps "abcdefg."
        0b11110110, // '9' digit maps "abcd.fg."
        0b11101110, // 'A' digit maps "abc.efg."
        0b00111110, // 'b' digit maps "..cdefg."
        0b10011100, // 'C' digit maps "a..def.."
        0b01111010, // 'd' digit maps ".bcde.g."
        0b10011110, // 'E' digit maps "a..defg."
        0b10001110, // 'F' digit maps "a...efg."
        0b01101110, // 'H' digit maps ".bc.efg."
        0b01111000, // 'J' digit maps ".bcde..."
        0b00011100, // 'L' digit maps "...def.."
        0b00111010, // 'o' digit maps "..cde.g."
        0b11001110, // 'P' digit maps "ab..efg."
        0b00001010, // 'r' digit maps "....e.g."
        0b01111100, // 'U' digit maps ".bcdef.."
        0b01110110, // 'Y' digit maps ".bcd.fg."
        0b00000010, // '-' digit maps "......g."
        0b11000110  // '°' digit maps "ab...fg."
    ];
    "hex`" + segmap.map(n => n.toString(16)).map(n => n.length < 2 ? "0" + n : n).join("") + "`"
    */
    
    const segmap: Buffer = hex`fc60daf266b6bee0fef6ee3e9c7a9e8e6e781c3ace0a7c7602c6`;

    export function drawSegment(digit: Image, segment: Buffer, thickness: SegmentStyle, color: number) {
        let offset = 0;
        let x, y, w, h = 0;
        if (segment.length >= thickness * 4) {
            for (let i = 0; i < thickness; i++) {
                x = segment.getNumber(NumberFormat.Int8LE, offset + 0);
                y = segment.getNumber(NumberFormat.Int8LE, offset + 1);
                w = segment.getNumber(NumberFormat.Int8LE, offset + 2) - x + 1;
                h = segment.getNumber(NumberFormat.Int8LE, offset + 3) - y + 1;
                digit.fillRect(x, y, w, h, color);
                offset += 4;
            }
        }
    }
    
    export function drawDigit(digit: Image, value: number, thickness: SegmentStyle, scale: SegmentScale, color: number) {
        let segment: Buffer = null;
        let digitMap = segmap.getNumber(NumberFormat.Int8LE, value)

        digit.fill(0);
        for (let i = 0; digitMap != 0; i++) {
            if ((digitMap & 0x80) != 0) {
                segment = scale == SegmentScale.Full ? fullSegment[i] : halfSegment[i];
                if (scale == SegmentScale.Half && thickness > SegmentStyle.Narrow) {
                    thickness = SegmentStyle.Narrow;
                }
                drawSegment(digit, segment, thickness, color)
            }
            digitMap = digitMap << 1;
        }
    }
    
    /**
     * Create a seven segment display digit
     * @param thickness the width of the segments, eg: SegmentStyle.Thick
     * @param value optional initial display value, eg: 0
     */
    //% group="Create"
    //% blockId=sevenseg_create block="seven segment digit || of %thickness with value %value"
    //% expandableArgumentMode=toggle
    //% blockSetVariable=myDigit
    //% value.min=0 value.max=9 value.defl=0
    //% weight=99
    //% help=sevenseg/create-digit
    export function createDigit(thickness: SegmentStyle = SegmentStyle.Thick, value: number = 0): SevenSegDigit {
        return new SevenSegDigit(thickness, value)
    }

    /**
     * Create a seven segment counter display
     * @param thickness the width of the segments, eg: SegmentStyle.Thick
     * @param scale the size of the segments, eg: SegmentScale.Full
     * @param numDigits the number of digits displayed, eg: 1
     */
    //% group="Create"
    //% blockId=sevenseg_createcounter block="counter || of %thickness segments at %scale size with %numDigits digits"
    //% expandableArgumentMode=toggle
    //% blockSetVariable=myCounter
    //% numDigits.min=1 numDigits.max=5 numDigits.defl=1
    //% weight=100
    //% help=sevenseg/create-counter
    export function createCounter(thickness: SegmentStyle = SegmentStyle.Thick, scale: SegmentScale = SegmentScale.Full, numDigits: number = 1): DigitCounter {
        return new DigitCounter(thickness, scale, numDigits)
    }
}

//% blockNamespace=sevenseg color="#4682B4" blockGap=8
class SevenSegDigit {
    private digit: Image;
    private digitSprite: Sprite;
    private _value: number;
    private thickness: SegmentStyle;
    private color: number;
    private scale: SegmentScale;
    private _x: number;
    private _y: number;
    private _radix: number;
    
    constructor(thickness: SegmentStyle = SegmentStyle.Thick, value: number = 0) {
        this._value = value;
        this.digit = image.create(16, 32);
        this.digitSprite = sprites.create(this.digit, 0);
        this._x = this.digitSprite.x
        this._y = this.digitSprite.y
        this.thickness = thickness;
        this.color = 2;
        this.scale = SegmentScale.Full;
        this._radix = DigitRadix.Decimal;
        sevenseg.drawDigit(this.digit, this.value, thickness, this.scale, this.color);
    }

    /**
     * Set the display value to a digit character: '0'- '9'
     * @param alphaChar the display value, eg: "0"
     */
    //% group="Digits"
    //% blockId=sevenseg_setalpha block="set %sevenseg(myDigit) display value to %alphaChar"
    //% weight=40
    setDigitAlpha(alphaChar: SegmentCharacter) {
        const matchChars = "0123456789ABCDEFHJLoPrUY-°";
        if (alphaChar == this.value || alphaChar < 0 || alphaChar >= matchChars.length)
            return;
        this._value = alphaChar;
        sevenseg.drawDigit(this.digit, this.value, this.thickness, this.scale, this.color);
    }

    //% group="Digits" blockSetVariable="myDigit"
    //% blockCombine block="value" weight=90
    get value(): number {
        return this._value;
    }

    //% group="Digits" blockSetVariable="myDigit"
    //% blockCombine block="value" weight=90
    set value(value: number) {
        value = value | 0;
        if (value != this.value) {
            if (value >= 0 && value < this._radix) {
                this._value = value;
            } else {
                this._value = value % this._radix;
            }
            sevenseg.drawDigit(this.digit, this._value, this.thickness, this.scale, this.color);
        }
    }

    /**
     * Set the display digit color
     * @param color of the digit display, eg: 2
     */
    //% group="Digits"
    //% blockId=sevenseg_setcolor block="set %sevenseg(myDigit) display color to %color=colorindexpicker"
    //% weight=35
    //% help=sevenseg/sevensegdigit/set-digit-color
    setDigitColor(color: number): void {
        this.color = color;
        sevenseg.drawDigit(this.digit, this.value, this.thickness, this.scale, this.color);
    }

    //% group="Digits" blockSetVariable="myDigit"
    //% blockCombine block="x"
    get x(): number {
        return this.digitSprite.x;
    }

    //% group="Digits" blockSetVariable="myDigit"
    //% blockCombine block="x"
    set x(v: number) {
        this._x = v;
        this.digitSprite.x = v;
    }

    //% group="Digits" blockSetVariable="myDigit"
    //% blockCombine block="y"
    get y(): number {
        return this.digitSprite.y;
    }

    //% group="Digits" blockSetVariable="myDigit"
    //% blockCombine block="y"
    set y(v: number) {
        this._y = v;
        this.digitSprite.y = v;
    }

    //% group="Digits" blockSetVariable="myDigit"
    //% blockCombine block="width"
    get width(): number {
        return this.digitSprite.width;
    }

    //% group="Digits" blockSetVariable="myDigit"
    //% blockCombine block="height"
    get height(): number {
        return this.digitSprite.height;
    }

    /**
     * Set the display radix of the digit
     * @param radix of the digit display, eg: DigitRadix.Decimal
     */
    //% blockId=sevenseg_setradix block="set display radix of %sevenseg(myDigit) to %radix"
    //% group="Digits" weight=30
    //% help=sevenseg/sevensegdigit/set-radix
    setRadix(radix: DigitRadix) {
        this._radix = radix;
        sevenseg.drawDigit(this.digit, this.value, this.thickness, this.scale, this.color);
    }

    /**
     * Set the display digit size
     * @param scale of the digit display, eg: SegmentScale.Full
     */
    //% group="Digits"
    //% blockId=sevenseg_setdigitscale block="set %sevenseg(myDigit) to %scale size"
    //% weight=25 
    //% help=sevenseg/sevensegdigit/set-scale
    setScale(scale: SegmentScale): void {
        if (scale != this.scale) {
            this.scale = scale;
            if (scale == SegmentScale.Full) {
                this.digit = image.create(16, 32)
           } else {
                this.digit = image.create(8, 16)
           }
           this.digitSprite.setImage(this.digit);
           this.digitSprite.x = this._x;
           this.digitSprite.y = this._y;
           sevenseg.drawDigit(this.digit, this.value, this.thickness,this.scale, this.color);
        }
    }
}

//% blockNamespace=sevenseg color="#4682B4" blockGap=8
class DigitCounter {
    private _count: number;
    private limit: number
    private _x: number;
    private _y: number;
    private numDigits: number;
    private maxDigits: number
    private digits: SevenSegDigit[];
    private thickness: SegmentStyle;
    private color: number;
    private scale: SegmentScale;

    constructor(thickness: SegmentStyle = SegmentStyle.Thick, scale: SegmentScale = SegmentScale.Full, numDigits: number = 3) {
        this._count = 0;
        this.maxDigits = 5;
        this.color = 2
        this.scale = scale;
        numDigits = Math.clamp(1, this.maxDigits, numDigits);

        this.thickness = thickness;
        this.digits = [];
        this.digits.push(new SevenSegDigit(this.thickness, 0));
        this.digits[0].setScale(this.scale);
        this.digits[0].setDigitColor(this.color);
        this.numDigits = 1;
        this.limit = 10;
        this._x = this.digits[0].x;
        this._y = this.digits[0].y;

        for (let i = 1; i < numDigits; i++) {
            this.addDigit();
        }
    }

    /**
     * Add a digit to the counter
     */
    addDigit() {
        let newDigit: SevenSegDigit = null
        if (this.numDigits < this.maxDigits) {
            newDigit = new SevenSegDigit(this.thickness, 0);
            newDigit.setScale(this.scale)
            newDigit.setDigitColor(this.color)
            this.digits.push(newDigit);
            this.numDigits += 1;
            this.limit = this.limit * 10;
            this.adjustDigitPositions();
        }
    }

    //% group="Counter" blockSetVariable="myCounter"
    //% blockCombine block="count"
    get count() {
        return this._count;
    }

    //% group="Counter" blockSetVariable="myCounter"
    //% blockCombine block="count"
    set count(value: number) {
        if (value >= 0 && value < this.limit) {
            this._count = value;
            this.updateDisplayValue()
        }
    }

    private updateDisplayValue()
    {
        let decimator = 1;
        let updateValue = 0;
        for (let i = 0; i < this.digits.length; i++) {
            updateValue = this._count / decimator % 10;
            this.digits[i].value = updateValue;
            decimator = decimator * 10;
        }
    }

    private adjustDigitPositions() {
        let spacing = this.digits[0].width * 4 / 3;
        let offset = this.digits[0].x + spacing / 2;
        for (let i = 0; i < this.numDigits; i++) {
            this.digits[i].x = offset;
            offset -= spacing;
        }
    }

    private moveDigits() {
        let spacing = this.digits[0].width * 4 / 3;
        for (let i = 1; i < this.numDigits; i++) {
            this.digits[i].x = this.digits[i - 1].x - spacing;
            this.digits[i].y = this.digits[0].y;
        }
        this._x = (this.digits[0].x + this.digits[this.numDigits - 1].x) / 2;
        this._y = this.digits[0].y;
    }
    
    /**
     * Set the counter display digit color
     * @param color of the digit display, eg: 2
     */
    //% group="Counter"
    //% blockId=sevenseg_setcountercolor block="set %sevenseg(myCounter) display color to %color=colorindexpicker"
    //% weight=86
    //% help=sevenseg/digitcounter/set-digit-color
    setDigitColor(color: number): void {
        this.color = color;
        for (let i = 0; i < this.numDigits; i++) {
            this.digits[i].setDigitColor(color);
        }
    }

    //% group="Counter" blockSetVariable="myCounter"
    //% blockCombine block="x"
    get x(): number {
        return this._x;
    }

    //% group="Counter" blockSetVariable="myCounter"
    //% blockCombine block="x"
    set x(v: number) {
        this.digits[0].x += v - this._x;
        this.moveDigits()
    }

    //% group="Counter" blockSetVariable="myCounter"
    //% blockCombine block="y"
    get y(): number {
        return this._y;
    }

    //% group="Counter" blockSetVariable="myCounter"
    //% blockCombine block="y"
    set y(v: number) {
        this.digits[0].y = v;
        this.moveDigits()
    }
}
