/**
* A dart with path prediction
*/
//% weight=100 color=#6699CC icon="\uf140"
//% groups='["Create", "Actions", "Properties"]'
namespace darts {
    /**
     * Creates a new dart from an image and kind
     * @param img the image for the sprite
     * @param kind the kind to make the dart
     * @param x optional initial x position, eg: 10
     * @param y optional initial y position, eg: 110
     */
    //% blockId=dartsCreate block="dart %img=screen_image_picker of kind %kind=spritetype || at x %x y %y"
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% blockSetVariable=myDart
    //% weight=100
    //% group="Create"
    export function create(img: Image,
                            kind: number,
                            x: number = 10,
                            y: number = 110): Dart {
        return new Dart(img, kind, x, y);
    }

    /**
     * Convert degrees to radians
     * @param degree to convert
     * @return converted value in radians
     */
    export function degreeToRadian(degree: number): number {
        return degree * Math.PI / 180;
    }

    /**
     * Evaluate the x component of a given vector
     * @param degree angle of vector
     * @param magnitude magnitude of vector
     * @return x component of vector
     */
    export function xComponent(degree: number, magnitude: number): number {
        return magnitude * Math.cos(degreeToRadian(degree));
    }

    /**
     * Evaluate the y component of a given vector
     * @param degree angle of vector
     * @param magnitude magnitude of vector
     * @return y component of vector
     */
    export function yComponent(degree: number, magnitude: number): number {
        return -magnitude * Math.sin(degreeToRadian(degree));
    }
}

/**
 * A dart
 **/
//% blockNamespace=darts color="#6699CC" blockGap=8
class Dart {
    private dart: Sprite;
    private bkgd: Image;

    private controlKeys: boolean;
    private trace: boolean;

    //% group="Properties" blockSetVariable="myDart"
    //% blockCombine block="angle"
    //% weight=8
    public angle: number;
    //% group="Properties" blockSetVariable="myDart"
    //% blockCombine block="power"
    //% weight=8
    public pow: number;
    //% group="Properties" blockSetVariable="myDart"
    //% blockCombine block="tracing time (seconds)"
    //% weight=8
    public iter: number;
    //% group="Properties" blockSetVariable="myDart"
    //% blockCombine block="trace color"
    //% weight=8
    public traceColor: number;
    //% group="Properties" blockSetVariable="myDart"
    //% blockCombine block="gravity"
    //% weight=8
    public gravity: number;
    //% group="Properties" blockSetVariable="myDart"
    //% blockCombine block="wind"
    //% weight=8
    public wind: number;
    //% group="Properties" blockSetVariable="myDart"
    //% blockCombine block="angle adjust rate"
    //% weight=8
    public angleRate: number;
    //% group="Properties" blockSetVariable="myDart"
    //% blockCombine block="wind"
    //% weight=8
    public powerRate: number;

    public constructor(img: Image,
                        kind: number,
                        x: number,
                        y: number) {
        this.dart = sprites.create(img, kind);
        this.dart.x = x;
        this.dart.y = y;

        this.gravity = 20;
        this.pow = 50;
        this.angle = 10;
        this.angleRate = 1;
        this.powerRate = 1;
        this.iter = 3;
        this.wind = 0;
        this.bkgd = scene.backgroundImage();

        this.controlKeys = false;
        this.trace = false;
        this.traceColor = 1;
    }

    /**
     * Gets the dart's sprite
     */
    //% group="Properties"
    //% blockId=dartSprite block="%dart(myDart) sprite"
    //% weight=8
    get sprite(): Sprite {
        return this.dart;
    }

    /**
     * Set whether to show the trace for the estimated path
     * @param on whether to turn on or off this feature, eg: true
     */
    //% blockId=setTrace block="trace %dart(myDart) path estimate || %on=toggleOnOff"
    //% weight=50
    //% group="Actions"
    public setTrace(on: boolean = true): void {
        let __this: Dart = this;
        this.trace = on;

        game.onUpdateInterval(50, function () {
            let newBkgd: Image = __this.bkgd.clone();
            scene.setBackgroundImage(newBkgd);
            if (!__this.dart.ay && __this.trace) {
                let xComp = darts.xComponent(__this.angle, __this.pow);
                let yComp = darts.yComponent(__this.angle, __this.pow);
                let camera = game.currentScene().camera
                let xOffset = camera.offsetX;
                let yOffset = camera.offsetY;

                for (let i: number = 0.1; i < __this.iter; i += i / 5) {
                    let x = __this.dart.x + i * xComp + (i ** 2) * __this.wind / 2;
                    let y = __this.dart.y + i * yComp + (i ** 2) * __this.gravity / 2;
                    newBkgd.setPixel(x - xOffset,
                                    y - yOffset,
                                    __this.traceColor);
                }
            }
        })
    }

    /**
     * Throw the dart with the current settings
     */
    //% blockId=throwDart block="throw %dart(myDart)"
    //% weight=50
    //% group="Actions"
    public throwDart(): void {
        this.dart.vx = darts.xComponent(this.angle, this.pow);
        this.dart.vy = darts.yComponent(this.angle, this.pow);
        this.dart.ay = this.gravity;
        this.dart.ax = this.wind;
    }

    /**
     * Stop the dart at the current location
     */
    //% blockId=stopDart block="stop %dart(myDart)"
    //% weight=50
    //% group="Actions"
    public stopDart(): void {
        this.dart.ay = 0;
        this.dart.ax = 0;
        this.dart.vx = 0;
        this.dart.vy = 0;
    }

    /**
     * Set whether to control the dart with the arrow keys; left and right
     * to adjust the angle, and up and down to increase / decrease power
     * @param on whether to turn on or off this feature, eg: true
     */
    //% blockId=controlKeys block="control %dart(myDart) with arrow keys || %on=toggleOnOff"
    //% weight=50
    //% group="Actions"
    public controlWithArrowKeys(on: boolean = true): void {
        let __this: Dart = this;
        this.controlKeys = on;

        game.onUpdate(function () {
            if (__this.controlKeys) {
                __this.angle -= controller.dx() * __this.angleRate / 5;
                __this.pow -= controller.dy() * __this.powerRate / 5;
            }
        })
    }

    /**
     * Update background image to new image so dart can continue to trace
     */
    //% blockId=updateBackground block="change %dart(myDart) background to image %img=background_image_picker"
    //% weight=15
    //% group="Properties"
    public updateBackground(img: Image): void {
        this.bkgd = img;
    }
}