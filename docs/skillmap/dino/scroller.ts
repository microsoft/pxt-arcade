namespace collectorTutorial {
    let init = false;
    let offset: number;
    let currentSpeed: number;
    export function startBackgroundScrolling(speed: number) {
        currentSpeed = speed;
        if (!init) {
            offset = 0;
            init = true;
            let bg: Image;
            game.onUpdate(() => {
                bg = scene.backgroundImage();
                offset += currentSpeed * game.currentScene().eventContext.deltaTime;
                while (offset >= bg.width) {
                    offset -= bg.width;
                }
                while (offset < 0) {
                    offset += bg.width;
                }
            });
            scene.createRenderable(-2, function(target: Image, camera: scene.Camera) {
                target.drawTransparentImage(bg, (offset | 0), 0);
                target.drawTransparentImage(bg, (offset | 0) - bg.width, 0);
            })
        }
    }
    /**
     * Makes the current background scroll in the negative x direction
     */
    //% block="scroll background"
    //% blockNamespace=scene
    //% blockId=collectorTutorial_scrollBackgroun
    //% group="Scrolling"
    //% weight=2
    //% blockGap=8
    export function scrollBackground() {
        scrollBackgroundWithSpeed(-90);
    }
    /**
     * Make the current background image scroll in the x direction at the given speed
     * 
     * @param speed The speed to scroll in pixels per second
     */
    //% block="scroll background with speed $speed"
    //% blockNamespace=scene
    //% blockId=collectorTutorial_scrollBackgroundWithSpeed
    //% speed.defl=-90
    //% group="Scrolling"
    //% weight=0
    //% blockGap=8
    export function scrollBackgroundWithSpeed(speed: number) {
        startBackgroundScrolling(speed)
    }
}