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
    //% blockId=dartsCreate block="dart %img=screen_image_picker of kind %kind=spritekind || at x %x y %y"
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
class Dart extends sprites.ExtendableSprite {
    private renderable: scene.Renderable;

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
        super(img);
        this.setKind(kind);
        this.x = x;
        this.y = y;

        this.gravity = 20;
        this.pow = 50;
        this.angle = 10;
        this.angleRate = 1;
        this.powerRate = 1;
        this.iter = 3;
        this.wind = 0;

        this.renderable = scene.createRenderable(-0.5, (target, camera) => {
            let xComp = darts.xComponent(this.angle, this.pow);
            let yComp = darts.yComponent(this.angle, this.pow);
            let xOffset = camera.offsetX;
            let yOffset = camera.offsetY;

            for (let i: number = 0.1; i < this.iter; i += i / 5) {
                let x = this.x + i * xComp + (i ** 2) * this.wind / 2;
                let y = this.y + i * yComp + (i ** 2) * this.gravity / 2;
                target.setPixel(
                    x - xOffset,
                    y - yOffset,
                    this.traceColor
                );
            }
        }, () => !this.ay && this.trace);

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
        return this;
    }

    /**
     * Set whether to show the trace for the estimated path
     * @param on whether to turn on or off this feature, eg: true
     */
    //% blockId=setTrace block="trace %dart(myDart) path estimate || %on=toggleOnOff"
    //% weight=50
    //% group="Actions"
    public setTrace(on: boolean = true): void {
        this.trace = on;
    }

    /**
     * Throw the dart with the current settings
     */
    //% blockId=throwDart block="throw %dart(myDart)"
    //% weight=50
    //% group="Actions"
    public throwDart(): void {
        this.vx = darts.xComponent(this.angle, this.pow);
        this.vy = darts.yComponent(this.angle, this.pow);
        this.ay = this.gravity;
        this.ax = this.wind;
    }

    /**
     * Stop the dart at the current location
     */
    //% blockId=stopDart block="stop %dart(myDart)"
    //% weight=50
    //% group="Actions"
    public stopDart(): void {
        this.ay = 0;
        this.ax = 0;
        this.vx = 0;
        this.vy = 0;
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
        this.controlKeys = on;

        game.onUpdate(() => {
            if (this.controlKeys) {
                this.angle -= controller.dx() * this.angleRate / 5;
                this.pow -= controller.dy() * this.powerRate / 5;
            }
        })
    }

    destroy(effect?: effects.ParticleEffect, duration?: number) {
        super.destroy(effect, duration);
        this.renderable.destroy();
    }

    /**
     * NO LONGER NECESSARY as this uses renderables now to draw onto the background.
     */
    //% blockId=updateBackground block="change %dart(myDart) background to image %img=background_image_picker"
    //% weight=15
    //% group="Properties"
    //% deprecated=true
    public updateBackground(img: Image): void {
        scene.setBackgroundImage(img);
    }
}