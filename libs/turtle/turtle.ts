enum TurtlePenMode {
    //% block="down"
    Down,
    //% block="up"
    Up,
    //% block="erase"
    Erase
}
/**
 * Turtle graphics blocks
 */
//% weight=100 color=#0f9c11 icon="\uf188"
namespace turtle {
    let _bkg: Sprite;
    let _sprite: Sprite;
    let _color: number = 2;
    let _direction: number = 90; // degrees
    let _penMode: TurtlePenMode = TurtlePenMode.Down;
    let _delay = 10;
    let _templateImg = img`
. . . a . . .            
. . a a a . .            
. a . a . a .            
. . . a . . .            
. . . a . . .            
`;

    function init() {
        if (!_sprite) {
            _bkg = sprites.create(image.create(screen.width, screen.height));
            _bkg.left = 0;
            _bkg.top = 0;
            _sprite = sprites.create(_templateImg)
        }
    }

    /**
     * Moves the turtle for the given amount of pixels
     * @param steps number of steps, eg: 1
     */
    //% blockId=turtleForward block="forward %steps|steps"
    //% weight=99 blockGap=8
    export function forward(steps: number): void {
        init();
        if (!steps) return;

        const drad = _direction / 180 * Math.PI;
        const dx = Math.cos(drad)
        const dy = - Math.sin(drad);
        const n = Math.abs(steps);
        const c = _penMode == TurtlePenMode.Down ? _color : 0;

        let firstX = _sprite.x;
        let firstY = _sprite.y;

        // animating move...
        let oldX = _sprite.x;
        let oldY = _sprite.y;
        for (let i = 0; i < n; ++i) {
            // paint if pen down
            if (_penMode == TurtlePenMode.Down || _penMode == TurtlePenMode.Erase)
                _bkg.image.drawLine(oldX, oldY, _sprite.x, _sprite.y, c)
            // paint and update
            setPosition(_sprite.x + dx, _sprite.y + dy);
            // and wait
            pause(_delay);

            oldX = _sprite.x;
            oldY = _sprite.y;
        }

        // adjust final position
        _sprite.x = firstX + dx * steps;
        _sprite.y = firstY + dy * steps;
        // paint if pen down
        if (_penMode == TurtlePenMode.Down || _penMode == TurtlePenMode.Erase)
            _bkg.image.drawLine(firstX, firstY, _sprite.x, _sprite.y, c)
        // and wait
        pause(_delay);
    }

    /**
     * Moves back by the given number of steps
     * @param steps number of steps to move, eg: 1
     */
    //% blockId=turtleBack block="back %steps|steps"
    //% weight=98 blockGap=8
    export function back(steps: number): void {
        forward(-steps);
    }

    /**
     * Turns the turtle
     */
    //% blockId=turtleturn block="turn %degrees"
    //% degress.min=-180 degrees.max=180
    export function turn(degrees: number): void {
        init();
        _direction = (_direction + degrees) % 360;
    }

    /**
     * Sets the turtle position
     * @param x the horizontal position from 0 (left) to 4 (right), eg: 2
     * @param y the vertical position from 0 (top) to 4 (bottom), eg: 2
     */
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    //% blockId=turtleSetPosition block="set position x: %x|y: %y"
    //% weight=87
    export function setPosition(x: number, y: number): void {
        init();
        _sprite.x = x % screen.width; if (_sprite.x < 0) _sprite.x += screen.width;
        _sprite.y = y % screen.height; if (_sprite.y < 0) _sprite.y += screen.height;
        pause(1);
    }

    /**
     * Puts the pen down or up
     */
    //% blockGap=8
    //% blockId=turtlePen block="pen %mode"
    //% weight=65
    export function pen(mode: TurtlePenMode): void {
        init();
        _penMode = mode;
        pause(1);
    }

    /**
     * Moves the turtle to the center of the screen 
     */
    //% blockGap=8
    //% blockId=turtleHome block="home"
    export function home(): void {
        setPosition(2, 2);
        _direction = 90;
        pause(1);
    }

    /**
     * Sets the pen color
     */
    //% blockGap=8
    //% blockId=turtlesetpencolor block="set pen color to %color"
    export function setPenColor(color: number) {
        _color = color;
    }

    /**
     * Define the steps per second
     * @param stepsPerSecond steps per second, eg: 25
     */
    //% blockGap=8
    //% blockId=turtleSetSpeed block="set speed %speed"
    //% stepsPerSecond.min=1 stepsPerSecond.max=50
    //% weight=10
    export function setSpeed(stepsPerSecond: number): void {
        if (stepsPerSecond <= 0) return;

        _delay = Math.max(1, Math.min(50, 1000 / stepsPerSecond));
    }
}