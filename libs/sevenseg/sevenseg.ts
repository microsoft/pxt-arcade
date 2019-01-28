enum SegmentStyle {
    //% block="thin"
    Thin = 1,
    //% block="narrow"
    Narrow = 2,
    //% block="medium"
    Medium = 3,
    //% block="thick"
    Thick = 4
}

/**
* Seven segment display digits and gizmos
*/
//% weight=100 color=#ffb266 icon="\uf2a1"
//% groups='["Create, "Digits", "Position", "Timer", "Clock"]'
namespace sevenseg {
    
    let segmentA = [1, 0, 14, 0, 2, 1, 13, 1, 3, 2, 12, 2, 4, 3, 11, 3];
    let segmentB = [15, 2, 15, 14, 14, 3, 14, 13, 13, 4, 13, 12, 12, 5, 12, 11];
    let segmentC = [15, 17, 15, 29, 14, 18, 14, 28, 13, 19, 13, 27, 12, 20, 12, 26];
    let segmentD = [1, 31, 14, 31, 2, 30, 13, 30, 3, 29, 12, 29, 4, 28, 11, 28];
    let segmentE = [0, 17, 0, 29, 1, 18, 1, 28, 2, 19, 2, 27, 3, 20, 3, 26];
    let segmentF = [0, 2, 0, 14, 1, 3, 1, 13, 2, 4, 2, 12, 3, 5, 3, 11]
    let segmentG = [2, 15, 13, 15, 2, 16, 13, 16, 3, 14, 12, 14, 3, 17, 12, 17];
    
    let segmap = ["abcdef", "bc", "abdeg", "abcdg", "bcfg", "acdfg", "acdefg", "abc", "abcdefg", "abcdfg"];
    
    export function drawSegment(digit: Image, segment: number[], thickness: SegmentStyle, color: number) {
        let x0 = 0;
        let y0 = 1;
        let x1 = 2;
        let y1 = 3;
    
        if (segment.length >= thickness * 4) {
            for (let i = 0; i < thickness; i++) {
                digit.drawLine(segment[x0], segment[y0], segment[x1], segment[y1], color);
                x0 += 4;
                y0 += 4;
                x1 += 4;
                y1 += 4;
            }
        }
    }
    
    export function drawDigit(digit: Image, value: number, thickness: SegmentStyle, color: number) {
        let segment: number[] = null;
        digit.fill(0);
        for (let seg of segmap[value]) {
            switch (seg) {
                case 'a': segment = segmentA; break;
                case 'b': segment = segmentB; break;
                case 'c': segment = segmentC; break;
                case 'd': segment = segmentD; break;
                case 'e': segment = segmentE; break;
                case 'f': segment = segmentF; break;
                case 'g': segment = segmentG; break;
            }
            drawSegment(digit, segment, thickness, color)
        }
    }
    
    /**
     * Create a seven segment display digit
     * @param thickness the width of the segements, eg: SegmentStyle.Thick
     * @param value optional initial display value, eg: 0
     */
    //% group="Create"
    //% blockId=sevenseg_create block="create seven segment digit || of %thickness with value %value"
    //% expandableArgumentMode=toggle
    //% blockSetVariable=myDigit
    export function createDigit(thickness: SegmentStyle = SegmentStyle.Thick, value: number = 0): SevenSegDigit {
        return new SevenSegDigit(thickness, value)
    }

    /**
     * Create a seven segment counter display
     * @param thickness the width of the segements, eg: SegmentStyle.Thick
     * @param numDigits the number of digits displayed, eg: 1
     */
    //% group="Create"
    //% blockId=sevenseg_createcounter block="create seven segment counter || of %thickness with %numDigits digits"
    //% expandableArgumentMode=toggle
    //% blockSetVariable=myCounter
    export function createCounter(thickness: SegmentStyle = SegmentStyle.Thick, numDigits: number = 1): DigitCounter {
        return new DigitCounter(thickness, numDigits)
    }
}

//% blockNamespace=sevenseg color="#ffb266" blockGap=8
class SevenSegDigit {
    private digit: Image;
    private digitSprite: Sprite;
    private value: number;
    private letter: string;
    private thickness: SegmentStyle;
    private color: number;
    private numDigits: number;
    
    constructor(thickness: SegmentStyle = SegmentStyle.Thick, value: number = 0) {
        this.value = value;
        this.letter = "0";
        this.digit = image.create(16, 32);
        this.digitSprite = sprites.create(this.digit, 0);
        this.thickness = thickness;
        this.color = 2
        sevenseg.drawDigit(this.digit, this.value, thickness, this.color);
    }

    /**
     * Set the display value to a number: 0 - 9
     * @param value the display value, eg: 0
     */
    //% group="Digits"
    //% blockId=sevenseg_setvalue block="set %sevenseg(myDigit) display value to %value"
    setDigitValue(value: number): void {
        value = value | 0;
        if (value != this.value) {
            if (value >= 0 && value < 10) {
                this.value = value;
                sevenseg.drawDigit(this.digit, value, this.thickness, this.color);
            }
        }
    }

    /**
     * Change the display value by some amount 0 - 9
     * @param value the display value, eg: 0
    */
    //% group="Digits"
    //% blockId=sevenseg_changevalue block="change %sevenseg(myDigit) display value by %value"
    changeDigitValue(value: number): void {
        value = value | 0;
        if (value > -10 && value < 10) {
            this.value += value;
            if (this.value < 0) {
                this.value = 0;
            } else if (this.value > 9) {
                this.value = this.value - 10;
            }
            sevenseg.drawDigit(this.digit, value, this.thickness, this.color);
        }
    }

    /**
     * Set the display value to a digit character: '0'- '9'
     * @param alphaChar the display value, eg: "0"
     */
    //% group="Digits"
    //% blockId=sevenseg_setalpha block="set %sevenseg(myDigit) display value to %alphaChar"
    setDigitAlpha(alphaChar: string) {
        const matchChars = "0123456789";
        let value = 0;

        if (alphaChar.length > 0) {
            for (let i = 0; i < matchChars.length; i++) {
                if (matchChars[i] == alphaChar[0]) {
                    value = i;
                    break;
                }
            }
            sevenseg.drawDigit(this.digit, value, this.thickness, this.color);
        }
    }
    
    /**
     * Get the display value of the digit
     */
    //% group="Digits"
    //% blockId=sevenseg_getvalue block="get display value of %sevenseg(myDigit)"
    getDigitValue(): number {
        return this.value;
    }

    /**
     * Set the display digit color
     * @param color of the digit display, eg: 2
     */
    //% group="Digits"
    //% blockId=sevenseg_setcolor block="set %sevenseg(myDigit) display color to %color=colorindexpicker"
    setDigitColor(color: number): void {
        this.color = color;
        sevenseg.drawDigit(this.digit, this.value, this.thickness, this.color);
    }

    //% group="Position" blockSetVariable="myDigit"
    //% blockCombine block="x"
    get x(): number {
        return this.digitSprite.x;
    }

    //% group="Position" blockSetVariable="myDigit"
    //% blockCombine block="x"
    set x(v: number) {
        this.digitSprite.x = v;
    }

    //% group="Position" blockSetVariable="myDigit"
    //% blockCombine block="y"
    get y(): number {
        return this.digitSprite.y;
    }
    //% group="Position" blockSetVariable="myDigit"
    //% blockCombine block="y"
    set y(v: number) {
        this.digitSprite.y = v;
    }

    //% group="Position" blockSetVariable="myDigit"
    //% blockCombine block="height"
    get width(): number {
        return this.digitSprite.width;
    }

    //% group="Position" blockSetVariable="myDigit"
    //% blockCombine block="height"
    get height(): number {
        return this.digitSprite.height;
    }

    /**
     * Destroy the seven segment display
     */
    destroy() {
        this.digitSprite.destroy();
    }
}

//% blockNamespace=sevenseg color="#ffb266" blockGap=8
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
    
    constructor(thickness: SegmentStyle = SegmentStyle.Thick, numDigits: number = 1) {
        this._count = 0;
        this.maxDigits = 5;
        this.color = 2
        numDigits = Math.clamp(1, this.maxDigits, numDigits);

        this.thickness = thickness;
        this.digits = [];
        this.digits.push(new SevenSegDigit(this.thickness, 0));
        this.digits[0].setDigitColor(this.color)
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
    //% group="Counter"
    //% blockId=sevenseg_adddigit block="add digit to %sevenseg(myCounter)"
    addDigit() {
        let newDigit: SevenSegDigit = null
        if (this.numDigits < this.maxDigits) {
            newDigit = new SevenSegDigit(this.thickness, 0);
            newDigit.setDigitColor(this.color)
            this.digits.push(newDigit);
            this.numDigits += 1;
            this.limit = this.limit * 10;
            this.adjustDigitPositions();
        }
    }

    /**
     * Add a one to the counter's count value
     */
    //% group="Counter"
    //% blockId=sevenseg_increment block="add one to %sevenseg(myCounter)"
    increment() {
        if (this._count < this.limit) {
            this._count++;
        } else {
            this._count = 0;
        }
        this.updateDisplayValue()
    }

    private updateDisplayValue()
    {
        let decimator = 1;
        let updateValue = 0;
        for (let i = 0; i < this.digits.length; i++) {
            updateValue = this._count / decimator % 10;
            this.digits[i].setDigitValue(updateValue);
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
    setDigitColor(color: number): void {
        this.color = color;
        for (let i = 0; i < this.numDigits; i++) {
            this.digits[i].setDigitColor(color);
        }
    }

    //% group="Position" blockSetVariable="myCounter"
    //% blockCombine block="x"
    get x(): number {
        return this._x;
    }

    //% group="Position" blockSetVariable="myCounter"
    //% blockCombine block="x"
    set x(v: number) {
        this.digits[0].x += v - this._x;
        this.moveDigits()
    }

    //% group="Position" blockSetVariable="myCounter"
    //% blockCombine block="y"
    get y(): number {
        return this._y;
    }

    //% group="Position" blockSetVariable="myCounter"
    //% blockCombine block="y"
    set y(v: number) {
        this.digits[0].y = v;
        this.moveDigits()
    }
}
