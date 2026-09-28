//% color="#e88b00"
//% block="BUG PRESIDENT"
namespace hourOfAi {
    const MOVE_SPEED = 10;
    export const AGENT_RADIUS = 5;

    export let currentTime_ = 0;

    export function advanceTime(timeStep: number) {
        currentTime_ += timeStep;
    }

    export function containInArena(position: Position) {
        position.x = Math.constrain(position.x, AGENT_RADIUS, screen.width - AGENT_RADIUS);
        position.y = Math.constrain(position.y, AGENT_RADIUS, screen.height - AGENT_RADIUS);
    }

    export class BugPresident {
        lastStepLeft = false;
        legsReset = false;
        bodyRadius = 5;
        legLength = 10;
        legPositions: Leg[] = [];
        turnRate = 4;
        speed = MOVE_SPEED;
        footSpeed = 100;
        hitboxRadius = 10;
        bodyColor = 4;
        eyeColor = 15;
        legColor = 14;
        noseColor = 2;
        stepDistance = 4;
        fillColor = 3
        noseRadius = 2;

        data: any;

        renderable: scene.Renderable;

        heading = 0;
        targetHeading: number;

        position: Position;
        lastStepPosition: Position;
        lastStepHeading: number;

        legsInit = false

        constructor() {
            // init();
            this.data = {};

            this.position = new Position(80, 60);

            for (let i = 0; i <= 5; i++) {
                this.legPositions.push(new Leg(new Position(0, 0)));
            }

            this.positionLegs(true, true, true)
            this.positionLegs(false, true, true)


            this.lastStepPosition = this.position.clone();
            this.lastStepHeading = this.heading;


            // all.push(this);

            this.renderable = scene.createRenderable(10, () => {
                this.draw();
            })
        }

        positionLegs(left: boolean, close: boolean, teleport: boolean) {
            if (close) {
                if (left) {
                    moveLeg(
                        teleport,
                        this.legPositions[0],
                        this.position.project(this.heading - (Math.PI / 2 - 0.8), this.legLength - 2),
                        200,
                        this.stepDistance
                    );
                    moveLeg(
                        teleport,
                        this.legPositions[1],
                        this.position.project(this.heading + Math.PI / 2, this.legLength - 2),
                        200,
                        this.stepDistance
                    );
                    moveLeg(
                        teleport,
                        this.legPositions[2],
                        this.position.project(this.heading - (Math.PI / 2 + 0.8), this.legLength - 2),
                        200,
                        this.stepDistance
                    );
                } else {
                    moveLeg(
                        teleport,
                        this.legPositions[3],
                        this.position.project(this.heading + (Math.PI / 2 - 0.8), this.legLength - 2),
                        200,
                        this.stepDistance
                    );
                    moveLeg(
                        teleport,
                        this.legPositions[4],
                        this.position.project(this.heading - Math.PI / 2, this.legLength - 2),
                        200,
                        this.stepDistance
                    );
                    moveLeg(
                        teleport,
                        this.legPositions[5],
                        this.position.project(this.heading + (Math.PI / 2 + 0.8), this.legLength - 2),
                        200,
                        this.stepDistance
                    );
                }
            } else {
                if (left) {
                    moveLeg(
                        teleport,
                        this.legPositions[0],
                        this.position.project(this.heading - Math.PI * 0.2, this.legLength + 2),
                        200,
                        this.stepDistance
                    );
                    moveLeg(
                        teleport,
                        this.legPositions[1],
                        this.position.project(this.heading + Math.PI * 0.3, this.legLength),
                        200,
                        this.stepDistance
                    );
                    moveLeg(
                        teleport,
                        this.legPositions[2],
                        this.position.project(this.heading - Math.PI * 0.4, this.legLength - 4),
                        200,
                        this.stepDistance
                    );
                } else {
                    moveLeg(
                        teleport,
                        this.legPositions[3],
                        this.position.project(this.heading + Math.PI * 0.2, this.legLength + 2),
                        200,
                        this.stepDistance
                    );
                    moveLeg(
                        teleport,
                        this.legPositions[4],
                        this.position.project(this.heading - Math.PI * 0.3, this.legLength),
                        200,
                        this.stepDistance
                    );
                    moveLeg(
                        teleport,
                        this.legPositions[5],
                        this.position.project(this.heading + Math.PI * 0.4, this.legLength - 4),
                        200,
                        this.stepDistance
                    );
                }
            }
        }

        resetLegs() {
            if (!(this.legsReset)) {
                this.legsReset = true
                this.positionLegs(true, true, false)
                this.positionLegs(false, true, false)
            }
        }

        draw() {
            const camera = game.currentScene().camera;

            for (let leg of this.legPositions) {
                fillCircle(
                    leg.position.x - camera.drawOffsetX,
                    leg.position.y - camera.drawOffsetY,
                    2,
                    this.legColor
                )
                screen.drawLine(
                    leg.position.x - camera.drawOffsetX,
                    leg.position.y - camera.drawOffsetY,
                    this.position.x - camera.drawOffsetX,
                    this.position.y - camera.drawOffsetY,
                    this.legColor
                )
            }
            fillCircle(
                this.position.x + Math.round(this.bodyRadius * Math.cos(this.heading)) - camera.drawOffsetX,
                this.position.y + Math.round(this.bodyRadius * Math.sin(this.heading)) - camera.drawOffsetY,
                this.noseRadius,
                this.noseColor
            )
            fillCircle(
                this.position.x - camera.drawOffsetX,
                this.position.y - camera.drawOffsetY,
                this.bodyRadius,
                this.bodyColor
            )
            screen.setPixel(
                (this.position.x + Math.round((this.bodyRadius - 2) * Math.cos(this.heading - 0.5)) - camera.drawOffsetX),
                (this.position.y + Math.round((this.bodyRadius - 2) * Math.sin(this.heading - 0.5)) - camera.drawOffsetY),
                this.eyeColor
            )
            screen.setPixel(
                this.position.x + Math.round((this.bodyRadius - 2) * Math.cos(this.heading + 0.5)) - camera.drawOffsetX,
                this.position.y + Math.round((this.bodyRadius - 2) * Math.sin(this.heading + 0.5)) - camera.drawOffsetY,
                this.eyeColor
            )
        }

        update(timestep: number) {
            let isMoving = this.targetHeading === undefined;
            if (this.targetHeading !== undefined) {
                this.heading = angleutil.clampRadians(angleutil.turnAngleTowards(this.heading, this.targetHeading, this.turnRate * timestep));
                if (Math.abs(angleutil.angleDifference(this.heading, this.targetHeading)) < 0.001) {
                    this.heading = this.targetHeading;
                    this.targetHeading = undefined;
                }
            }


            const dx = Math.cos(this.heading);
            const dy = Math.sin(this.heading);

            if (isMoving) {
                this.position.x += dx * this.speed * timestep;
                this.position.y += dy * this.speed * timestep;
                this.legsReset = false
            }
            else {
                if (Math.abs(angleutil.angleDifference(this.heading, this.lastStepHeading)) > 0.5) {
                    this.lastStepHeading = this.heading
                    this.lastStepLeft = !(this.lastStepLeft)
                    this.positionLegs(this.lastStepLeft, true, false)
                    this.legsReset = false
                }
            }

            const distance = distanceBetween(this.lastStepPosition, this.position);
            if (distance > this.stepDistance) {
                this.lastStepPosition = this.position.clone();
                this.lastStepLeft = !(this.lastStepLeft)
                this.positionLegs(this.lastStepLeft, false, false)
                this.legsReset = false
            }

            for (const leg of this.legPositions) {
                leg.update();
            }
        }

        postUpdate() {
            if (this.legsInit) return;
            this.legsInit = true;

            this.positionLegs(true, true, true)
            this.positionLegs(false, true, true)
        }

        public turnTowards(angle: number) {
            this.targetHeading = angleutil.clampRadians(angle);
            pauseUntil(() => this.targetHeading === undefined);
        }

        public pause(time: number) {
            const startTime = currentTime();
            pauseUntil(() => currentTime() - startTime >= time / 1000);
        }

        public distanceToWall() {
            const dx = Math.cos(this.heading);
            const dy = Math.sin(this.heading);

            let distance = 0;
            while (true) {
                const nextX = this.position.x + dx * distance;
                const nextY = this.position.y + dy * distance;

                if (isWall(nextX, nextY)) {
                    return distance;
                }

                distance += 1;
            }
        }
    }

    export function create() {
        return new BugPresident();
    }


    export function turnTowardsDirection(pres: BugPresident, angle: number) {
        pres.targetHeading = angleutil.clampRadians(angle);
    }

    export function setDirection(pres: BugPresident, angle: number) {
        pres.heading = angleutil.clampRadians(angle);
    }

    export function resetLegs(pres: BugPresident) {
        pres.resetLegs();
    }

    export function drawBug(
        x: number,
        y: number,
        camera: scene.Camera,
        bodyRadius: number,
        heading: number,
        bodyColor: number,
        eyeColor: number,
        legColor: number,
        noseColor: number,
        noseRadius: number,
        legLength: number
    ) {
        const legAngles = [
            -(Math.PI / 2 - 0.8),
            Math.PI / 2,
            -(Math.PI / 2 + 0.8),
            (Math.PI / 2 - 0.8),
            -Math.PI / 2,
            (Math.PI / 2 + 0.8),
        ]


        for (const angle of legAngles) {
            fillCircle(
                x + (legLength - 2) * Math.cos(angle) - camera.drawOffsetX,
                y + (legLength - 2) * Math.sin(angle) - camera.drawOffsetY,
                2,
                legColor
            )
            screen.drawLine(
                x + (legLength - 2) * Math.cos(angle) - camera.drawOffsetX,
                y + (legLength - 2) * Math.sin(angle) - camera.drawOffsetY,
                x - camera.drawOffsetX,
                y - camera.drawOffsetY,
                legColor
            )
        }
        fillCircle(
            x + Math.round(bodyRadius * Math.cos(heading)) - camera.drawOffsetX,
            y + Math.round(bodyRadius * Math.sin(heading)) - camera.drawOffsetY,
            noseRadius,
            noseColor
        )
        fillCircle(
            x - camera.drawOffsetX,
            y - camera.drawOffsetY,
            bodyRadius,
            bodyColor
        )
        screen.setPixel(
            (x + Math.round((bodyRadius - 2) * Math.cos(heading - 0.5)) - camera.drawOffsetX),
            (y + Math.round((bodyRadius - 2) * Math.sin(heading - 0.5)) - camera.drawOffsetY),
            eyeColor
        )
        screen.setPixel(
            x + Math.round((bodyRadius - 2) * Math.cos(heading + 0.5)) - camera.drawOffsetX,
            y + Math.round((bodyRadius - 2) * Math.sin(heading + 0.5)) - camera.drawOffsetY,
            eyeColor
        )
    }

    function moveLeg(teleport: boolean, leg: Leg, pos: Position, time: number, stepDistance: number) {
        if (teleport) {
            leg.position = pos.clone();
            leg.moveStart = null;
            leg.moveEnd = null;
        }
        else {
            leg.moveTo(pos, time);
        }
    }

    export class Position {
        constructor(public x: number, public y: number) { }

        project(angle: number, distance: number): Position {
            return new Position(
                this.x + distance * Math.cos(angle),
                this.y + distance * Math.sin(angle)
            );
        }

        moveTo(position: Position, time: number) {
            const dx = position.x - this.x;
            const dy = position.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = distance / time;

            this.x += (dx / distance) * speed;
            this.y += (dy / distance) * speed;
        }

        clone(): Position {
            return new Position(this.x, this.y);
        }
    }

    class Leg {
        moveStart: Position;
        moveEnd: Position;
        moveStartTime: number;
        moveDuration: number;

        constructor(
            public position: Position,
        ) {

        }

        moveTo(position: Position, time: number) {
            this.moveStart = this.position.clone();
            this.moveEnd = position.clone();
            this.moveDuration = time;
            this.moveStartTime = currentTime();
        }

        update() {
            if (!this.moveStart || !this.moveEnd) return;

            const elapsed = (currentTime() - this.moveStartTime) * 1000;
            if (elapsed >= this.moveDuration) {
                this.position = this.moveEnd.clone();
                this.moveStart = null;
                this.moveEnd = null;
            }
            else {
                const progress = elapsed / this.moveDuration;
                this.position.x = this.moveStart.x + (this.moveEnd.x - this.moveStart.x) * progress;
                this.position.y = this.moveStart.y + (this.moveEnd.y - this.moveStart.y) * progress;
            }
        }
    }

    function pos(x: number, y: number): Position {
        return new Position(x, y);
    }

    export function distanceBetween(pos1: Position | Sprite, pos2: Position | Sprite): number {
        const dx = pos2.x - pos1.x;
        const dy = pos2.y - pos1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function currentTime() {
        return currentTime_;
    }

    function isWall(x: number, y: number): boolean {
        return x < 0 || x >= screen.width || y < 0 || y >= screen.height;
    }
}

function fillCircle(x: number, y: number, radius: number, color: number) {
    screen.fillCircle(x | 0, y | 0, radius | 0, color | 0);
}

function drawRibbon(x: number, y: number, angle: number, size: number, color: number) {
    x |= 0;
    y |= 0;

    screen.fillRect(
        x,
        y,
        (size) | 0,
        (size) | 0,
        color
    )

    x += size / 2;
    y += size / 2;
    x |= 0;
    y |= 0;

    screen.fillTriangle(
        x,
        y,
        x + (size) * Math.cos(angle - Math.PI / 2) + size / 2 * Math.cos(angle - Math.PI / 2 + Math.PI / 3),
        y + (size) * Math.sin(angle - Math.PI / 2) + size / 2 * Math.sin(angle - Math.PI / 2 + Math.PI / 3),
        x + (size) * Math.cos(angle - Math.PI / 2) + size / 2 * Math.cos(angle - Math.PI / 2 - Math.PI / 3),
        y + (size) * Math.sin(angle - Math.PI / 2) + size / 2 * Math.sin(angle - Math.PI / 2 - Math.PI / 3),
        color
    )
    screen.fillTriangle(
        x,
        y,
        x + (size) * Math.cos(angle + Math.PI / 2) + size / 2 * Math.cos(angle + Math.PI / 2 + Math.PI / 3),
        y + (size) * Math.sin(angle + Math.PI / 2) + size / 2 * Math.sin(angle + Math.PI / 2 + Math.PI / 3),
        x + (size) * Math.cos(angle + Math.PI / 2) + size / 2 * Math.cos(angle + Math.PI / 2 - Math.PI / 3),
        y + (size) * Math.sin(angle + Math.PI / 2) + size / 2 * Math.sin(angle + Math.PI / 2 - Math.PI / 3),
        color
    )
}


//% color=#0fbc11 icon="" block="Angle Utils" groups='["Math","Sprites","Draw"]'
namespace angleutil {
    const TWO_PI = Math.PI * 2;

    export enum Property {
        //% block=heading
        Heading,
        //% block=speed
        Speed,
        //% block=acceleration
        Acceleration,
        //% block=friction
        Friction,
        //% block="rotation speed"
        RotationSpeed
    }

    export enum DrawStyle {
        //% block=outline
        Outline,
        //% block=fill
        Fill
    }

    class ExtensionState {
        trackedSprites: Sprite[];
        constructor() {
            this.trackedSprites = [];

            game.currentScene().eventContext.registerFrameHandler(scene.PHYSICS_PRIORITY - 1, () => {
                this.update();
            });

            game.currentScene().eventContext.registerFrameHandler(scene.RENDER_SPRITES_PRIORITY - 1, () => {
                for (const sprite of this.trackedSprites) {
                    getSpriteState(sprite).updateZ();
                }
            });
        }

        update() {
            const dt = game.currentScene().eventContext.deltaTime;

            let needsPruning = false;
            for (const sprite of this.trackedSprites) {
                if (sprite.flags & sprites.Flag.Destroyed) {
                    needsPruning = true;
                    getSpriteState(sprite).destroy();
                }
                else {
                    applyPhysics(sprite, dt);
                }
            }

            if (needsPruning) {
                this.trackedSprites = this.trackedSprites.filter(s => !(s.flags & sprites.Flag.Destroyed));
            }
        }
    }

    function _createState() {
        return new ExtensionState();
    }

    function state() {
        return __util.getState(_createState);
    }

    class DirectionSpriteState {
        heading: number;
        speed: number;
        acceleration: number;
        friction: number;
        rotationSpeed: number;
        protected renderable: scene.Renderable;
        protected shapes: DrawnShape[];

        constructor(protected sprite: Sprite) {
            this.heading = 0;
            this.speed = 0;
            this.acceleration = 0;
            this.friction = 0;
            this.rotationSpeed = 0;
            state().trackedSprites.push(sprite);
        }

        destroy() {
            if (this.renderable) {
                this.renderable.destroy();
            }
        }

        addShape(shape: DrawnShape) {
            if (!this.shapes) {
                this.shapes = [shape];
                this.renderable = scene.createRenderable(this.sprite.z + 0.1, (target, camera) => {
                    this.draw(target, camera);
                });
            }
            else {
                this.shapes.push(shape);
            }
        }

        draw(target: Image, camera: scene.Camera) {
            for (const shape of this.shapes) {
                shape.draw(this.sprite, target, camera);
            }
        }

        updateZ() {
            if (this.renderable) {
                this.renderable.z = this.sprite.z + 0.1;
            }
        }

        removeShapes() {
            this.shapes = undefined;
            this.renderable.destroy();
            this.renderable = undefined;
        }
    }

    class DrawnShape {
        constructor(protected color: number, protected length: number, protected sidewaysOffset: number, protected forwardOffset: number, protected angleOffset: number) {
        }

        draw(anchor: Sprite, target: Image, camera: scene.Camera) {
            const cx = anchor.x - camera.drawOffsetX;
            const cy = anchor.y - camera.drawOffsetY;
            const heading = getSpriteState(anchor).heading;

            this.drawCore(
                target,
                cx + Math.cos(heading) * this.forwardOffset + Math.cos(heading + Math.PI / 2) * this.sidewaysOffset,
                cy + Math.sin(heading) * this.forwardOffset + Math.sin(heading + Math.PI / 2) * this.sidewaysOffset,
                heading + this.angleOffset
            );
        }

        protected drawCore(target: Image, x: number, y: number, angle: number) {
            target.drawLine(
                x - Math.cos(angle) * this.length / 2,
                y - Math.sin(angle) * this.length / 2,
                x + Math.cos(angle) * this.length / 2,
                y + Math.sin(angle) * this.length / 2,
                this.color
            );
        }
    }

    class DrawnIsoTriangleOutline extends DrawnShape {
        constructor(color: number, length: number, protected baseWidth: number, sidewaysOffset: number, forwardOffset: number, angleOffset: number) {
            super(color, length, sidewaysOffset, forwardOffset, angleOffset);
        }

        protected drawCore(target: Image, x: number, y: number, angle: number) {
            const xForwardOffset = Math.cos(angle) * this.length / 2;
            const yForwardOffset = Math.sin(angle) * this.length / 2;
            const xSidewaysOffset = Math.cos(angle + Math.PI / 2) * this.baseWidth / 2;
            const ySidewaysOffset = Math.sin(angle + Math.PI / 2) * this.baseWidth / 2;
            this.drawTriangle(
                target,
                x + xForwardOffset,
                y + yForwardOffset,
                x - xForwardOffset + xSidewaysOffset,
                y - yForwardOffset + ySidewaysOffset,
                x - xForwardOffset - xSidewaysOffset,
                y - yForwardOffset - ySidewaysOffset,
            )
        }

        protected drawTriangle(
            target: Image,
            x0: number,
            y0: number,
            x1: number,
            y1: number,
            x2: number,
            y2: number
        ) {
            target.drawLine(x0, y0, x1, y1, this.color);
            target.drawLine(x1, y1, x2, y2, this.color);
            target.drawLine(x2, y2, x0, y0, this.color);
        }
    }

    class DrawnIsoTriangleFill extends DrawnIsoTriangleOutline {
        protected drawTriangle(
            target: Image,
            x0: number,
            y0: number,
            x1: number,
            y1: number,
            x2: number,
            y2: number
        ) {
            target.fillTriangle(
                x0, y0,
                x1, y1,
                x2, y2,
                this.color
            );
        }
    }

    class DrawnTriangleOutline extends DrawnShape {
        protected drawCore(target: Image, x: number, y: number, angle: number) {
            // height of triangle = (tan(60 degrees) / 2) * side length
            // (tan(60 degrees) / 2) / 2 = 0.433
            const halfHeight = 0.433 * this.length;

            this.drawTriangle(
                target,
                x + halfHeight * Math.cos(angle),
                y + halfHeight * Math.sin(angle),
                x + halfHeight * Math.cos(angle + 2 * Math.PI / 3),
                y + halfHeight * Math.sin(angle + 2 * Math.PI / 3),
                x + halfHeight * Math.cos(angle + 4 * Math.PI / 3),
                y + halfHeight * Math.sin(angle + 4 * Math.PI / 3),
            )
        }

        protected drawTriangle(
            target: Image,
            x0: number,
            y0: number,
            x1: number,
            y1: number,
            x2: number,
            y2: number
        ) {
            target.drawLine(x0, y0, x1, y1, this.color);
            target.drawLine(x1, y1, x2, y2, this.color);
            target.drawLine(x2, y2, x0, y0, this.color);
        }
    }

    class DrawnTriangleFill extends DrawnShape {
        protected drawTriangle(
            target: Image,
            x0: number,
            y0: number,
            x1: number,
            y1: number,
            x2: number,
            y2: number
        ) {
            target.fillTriangle(
                x0, y0,
                x1, y1,
                x2, y2,
                this.color
            );
        }
    }

    class DrawnRectangleOutline extends DrawnShape {
        constructor(color: number, length: number, protected baseWidth: number, sidewaysOffset: number, forwardOffset: number, angleOffset: number) {
            super(color, length, sidewaysOffset, forwardOffset, angleOffset);
        }

        protected drawCore(target: Image, x: number, y: number, angle: number) {
            const xForwardOffset = Math.cos(angle) * this.length / 2;
            const yForwardOffset = Math.sin(angle) * this.length / 2;
            const xSidewaysOffset = Math.cos(angle + Math.PI / 2) * this.baseWidth / 2;
            const ySidewaysOffset = Math.sin(angle + Math.PI / 2) * this.baseWidth / 2;
            this.drawRectangle(
                target,
                x + xForwardOffset + xSidewaysOffset,
                y + yForwardOffset + ySidewaysOffset,
                x + xForwardOffset - xSidewaysOffset,
                y + yForwardOffset - ySidewaysOffset,
                x - xForwardOffset - xSidewaysOffset,
                y - yForwardOffset - ySidewaysOffset,
                x - xForwardOffset + xSidewaysOffset,
                y - yForwardOffset + ySidewaysOffset,
            )
        }

        protected drawRectangle(
            target: Image,
            x0: number,
            y0: number,
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x3: number,
            y3: number,
        ) {
            target.drawLine(x0, y0, x1, y1, this.color);
            target.drawLine(x1, y1, x2, y2, this.color);
            target.drawLine(x2, y2, x3, y3, this.color);
            target.drawLine(x3, y3, x0, y0, this.color);
        }
    }

    class DrawnRectangleFill extends DrawnRectangleOutline {
        protected drawRectangle(
            target: Image,
            x0: number,
            y0: number,
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x3: number,
            y3: number,
        ) {
            target.fillPolygon4(
                x0, y0,
                x1, y1,
                x2, y2,
                x3, y3,
                this.color
            );
        }
    }

    class DrawnCircleOutline extends DrawnShape {
        protected drawCore(target: Image, x: number, y: number, angle: number) {
            target.drawCircle(x, y, this.length / 2, this.color);
        }
    }

    class DrawnCircleFill extends DrawnShape {
        protected drawCore(target: Image, x: number, y: number, angle: number) {
            target.fillCircle(x, y, this.length / 2, this.color);
        }
    }

    function getSpriteState(sprite: Sprite): DirectionSpriteState {
        const KEY = "$dir_sprite_state";

        let spriteState: DirectionSpriteState = sprite.data[KEY];

        if (!spriteState) {
            spriteState = new DirectionSpriteState(sprite);
            sprite.data[KEY] = spriteState;
        }

        return spriteState;
    }

    function applyPhysics(sprite: Sprite, dt: number) {
        const spriteState = getSpriteState(sprite);

        spriteState.speed += spriteState.acceleration * dt;

        if (spriteState.friction) {
            if (spriteState.speed > 0) {
                spriteState.speed = Math.max(spriteState.speed - spriteState.friction * dt, 0);
            }
            else if (spriteState.speed < 0) {
                spriteState.speed = Math.min(spriteState.speed + spriteState.friction * dt, 0);
            }
        }

        if (spriteState.rotationSpeed) {
            spriteState.heading = clampRadians(spriteState.heading + spriteState.rotationSpeed * dt);
        }

        sprite.vx = spriteState.speed * Math.cos(spriteState.heading);
        sprite.vy = spriteState.speed * Math.sin(spriteState.heading);
        sprite.ax = 0;
        sprite.ay = 0;
        sprite.fx = 0;
        sprite.fy = 0;
    }

    //% blockId=angleutils_setProperty
    //% block="$sprite set $property to $value"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% weight=100
    //% blockGap=8
    //% group=Sprites
    export function setProperty(sprite: Sprite, property: Property, value: number) {
        const spriteState = getSpriteState(sprite);

        switch (property) {
            case Property.Heading:
                spriteState.heading = value;
                break;
            case Property.Speed:
                spriteState.speed = value;
                break;
            case Property.Acceleration:
                spriteState.acceleration = value;
                break;
            case Property.Friction:
                spriteState.friction = value;
                break;
            case Property.RotationSpeed:
                spriteState.rotationSpeed = value;
                break;
        }
    }

    //% blockId=angleutils_getProperty
    //% block="$sprite $property"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% weight=90
    //% blockGap=8
    //% group=Sprites
    export function getProperty(sprite: Sprite, property: Property) {
        const spriteState = getSpriteState(sprite);

        switch (property) {
            case Property.Heading:
                return spriteState.heading;
            case Property.Speed:
                return spriteState.speed;
            case Property.Acceleration:
                return spriteState.acceleration;
            case Property.Friction:
                return spriteState.friction;
            case Property.RotationSpeed:
                return spriteState.rotationSpeed;
        }
    }

    //% blockId=angleutils_turnSpriteTowards
    //% block="turn $sprite towards $target by $delta"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% target.shadow=variables_get
    //% target.defl=otherSprite
    //% weight=80
    //% blockGap=8
    //% group=Sprites
    export function turnSpriteTowards(sprite: Sprite, target: Sprite | tiles.Location | hourOfAi.Position, delta: number) {
        const targetAngle = Math.atan2(target.y - sprite.y, target.x - sprite.x);
        const state = getSpriteState(sprite);

        state.heading = turnAngleTowards(state.heading, targetAngle, delta);
    }

    //% blockId=angleutils_drawLineAbove
    //% block="draw line above $sprite length $length color $color||front offset $forwardOffset side offset $sidewaysOffset angle offset $angleOffset"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% color.shadow=colorindexpicker
    //% weight=100
    //% blockGap=8
    //% group=Draw
    export function drawLineAbove(sprite: Sprite, length: number, color: number, forwardOffset?: number, sidewaysOffset?: number, angleOffset?: number) {
        getSpriteState(sprite).addShape(new DrawnShape(
            color,
            length,
            sidewaysOffset || 0,
            forwardOffset || 0,
            angleOffset || 0
        ))
    }

    //% blockId=angleutils_drawIsoscelesTriangleAbove
    //% block="draw isosceles triangle $style above $sprite height $height base width $baseWidth color $color||front offset $forwardOffset side offset $sidewaysOffset angle offset $angleOffset"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% color.shadow=colorindexpicker
    //% weight=80
    //% blockGap=8
    //% group=Draw
    export function drawIsoscelesTriangleAbove(sprite: Sprite, style: DrawStyle, height: number, baseWidth: number, color: number, forwardOffset?: number, sidewaysOffset?: number, angleOffset?: number) {
        let shape: DrawnShape;

        if (style === DrawStyle.Outline) {
            shape = new DrawnIsoTriangleOutline(
                color,
                height,
                baseWidth,
                sidewaysOffset || 0,
                forwardOffset || 0,
                angleOffset || 0
            );
        }
        else {
            shape = new DrawnIsoTriangleFill(
                color,
                height,
                baseWidth,
                sidewaysOffset || 0,
                forwardOffset || 0,
                angleOffset || 0
            );
        }

        getSpriteState(sprite).addShape(shape);
    }

    //% blockId=angleutils_drawTriangleAbove
    //% block="draw triangle $style above $sprite side length $sideLength color $color||front offset $forwardOffset side offset $sidewaysOffset angle offset $angleOffset"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% color.shadow=colorindexpicker
    //% weight=90
    //% blockGap=8
    //% group=Draw
    export function drawTriangleAbove(sprite: Sprite, style: DrawStyle, sideLength: number, color: number, forwardOffset?: number, sidewaysOffset?: number, angleOffset?: number) {
        let shape: DrawnShape;

        if (style === DrawStyle.Outline) {
            shape = new DrawnTriangleOutline(
                color,
                sideLength,
                sidewaysOffset || 0,
                forwardOffset || 0,
                angleOffset || 0
            );
        }
        else {
            shape = new DrawnTriangleFill(
                color,
                sideLength,
                sidewaysOffset || 0,
                forwardOffset || 0,
                angleOffset || 0
            );
        }

        getSpriteState(sprite).addShape(shape);
    }

    //% blockId=angleutils_drawRectangleAbove
    //% block="draw rectangle $style above $sprite width $width height $height color $color||front offset $forwardOffset side offset $sidewaysOffset angle offset $angleOffset"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% color.shadow=colorindexpicker
    //% weight=70
    //% blockGap=8
    //% group=Draw
    export function drawRectangleAbove(sprite: Sprite, style: DrawStyle, width: number, height: number, color: number, forwardOffset?: number, sidewaysOffset?: number, angleOffset?: number) {
        let shape: DrawnShape;

        if (style === DrawStyle.Outline) {
            shape = new DrawnRectangleOutline(
                color,
                height,
                width,
                sidewaysOffset || 0,
                forwardOffset || 0,
                angleOffset || 0
            );
        }
        else {
            shape = new DrawnRectangleFill(
                color,
                height,
                width,
                sidewaysOffset || 0,
                forwardOffset || 0,
                angleOffset || 0
            );
        }

        getSpriteState(sprite).addShape(shape);
    }

    //% blockId=angleutils_drawCircleAbove
    //% block="draw circle $style above $sprite radius $radius color $color||front offset $forwardOffset side offset $sidewaysOffset"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% color.shadow=colorindexpicker
    //% weight=60
    //% group=Draw
    export function drawCircleAbove(sprite: Sprite, style: DrawStyle, radius: number, color: number, forwardOffset?: number, sidewaysOffset?: number) {
        let shape: DrawnShape;

        if (style === DrawStyle.Outline) {
            shape = new DrawnCircleOutline(
                color,
                radius * 2,
                sidewaysOffset || 0,
                forwardOffset || 0,
                0
            );
        }
        else {
            shape = new DrawnCircleFill(
                color,
                radius * 2,
                sidewaysOffset || 0,
                forwardOffset || 0,
                0
            );
        }

        getSpriteState(sprite).addShape(shape);
    }

    //% blockId=angleutils_removeShapes
    //% block="remove shapes from $sprite"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% weight=0
    //% group=Draw
    export function removeShapes(sprite: Sprite) {
        getSpriteState(sprite).removeShapes();
    }

    //% blockId=angleutils_turnAngleTowards
    //% block="turn angle $angleFrom towards angle $angleTo by $delta"
    //% group=Math
    //% blockGap=8
    //% weight=70
    export function turnAngleTowards(angleFrom: number, angleTo: number, delta: number) {
        angleFrom = clampRadians(angleFrom);
        angleTo = clampRadians(angleTo);

        if (Math.abs(angleFrom - angleTo) > Math.PI) {
            if (angleFrom < angleTo) {
                angleFrom += TWO_PI;
            }
            else {
                angleTo += TWO_PI;
            }
        }

        if (angleFrom < angleTo) {
            return clampRadians(Math.min(angleFrom + delta, angleTo));
        }
        else if (angleFrom > angleTo) {
            return clampRadians(Math.max(angleFrom - delta, angleTo));
        }
        return angleTo;
    }

    export function anglesEqual(angle1: number, angle2: number) {
        angle1 = clampRadians(angle1);
        angle2 = clampRadians(angle2);
        return angle1 === angle2;
    }

    //% blockId=angleutils_angleDifference
    //% block="difference from angle $angle1 to angle $angle2"
    //% group=Math
    //% blockGap=8
    //% weight=80
    export function angleDifference(angle1: number, angle2: number) {
        angle1 = clampRadians(angle1);
        angle2 = clampRadians(angle2);

        if (Math.abs(angle1 - angle2) > Math.PI) {
            if (angle1 < angle2) {
                angle1 += TWO_PI;
            }
            else {
                angle2 += TWO_PI;
            }
        }

        return angle1 - angle2;
    }

    //% blockId=angleutils_clampRadians
    //% block="wrap radians $angle between 0-2π"
    //% group=Math
    //% weight=90
    export function clampRadians(angle: number) {
        return ((angle % TWO_PI) + TWO_PI) % TWO_PI;
    }

    //% blockId=angleutils_clampDegrees
    //% block="wrap degrees $angle between 0-360"
    //% group=Math
    //% weight=100
    //% blockGap=8
    export function clampDegrees(angle: number) {
        return ((angle % 360) + 360) % 360;
    }
}


// game.stats = true
let bugs : hourOfAi.BugPresident[] = [];

function getColorPalettes(): number[][] {
    return [
        [4, 15, 2],     // normal
        [7, 15, 8],     // green
        [2, 15, 4],     // red
        [9, 15, 8],     // blue
        [10, 15, 2],    // dark red
        [5, 15, 4],     // yellow
        // [15, 11, 2]     // black
    ];
}

const spawnNewBug = (onScreen: boolean) => {
    const newBug = new hourOfAi.BugPresident();

    if (onScreen) {
        newBug.position = new hourOfAi.Position(randint(20, 140), randint(20, 100));
        newBug.heading = randint(0, 360) * Math.PI / 180;
    }
    else {
        if (Math.percentChance(50)) {
            // Left or right
            if (Math.percentChance(50)) {
                newBug.position = new hourOfAi.Position(-10, randint(0, 120));
            }
            else {
                newBug.position = new hourOfAi.Position(170, randint(0, 120));
            }
        }
        else {
            // Top or bottom
            if (Math.percentChance(50)) {
                newBug.position = new hourOfAi.Position(randint(0, 160), -10);
            }
            else {
                newBug.position = new hourOfAi.Position(randint(0, 160), 130);
            }
        }

        newBug.heading = angleutil.clampRadians(Math.atan2(60 - newBug.position.y, 80 - newBug.position.x));
    }

    newBug.bodyRadius = randint(4, 8);
    newBug.legLength = Math.round(newBug.bodyRadius * 1.6);

    const colorPalettes = getColorPalettes();
    const palette = colorPalettes[randint(0, colorPalettes.length - 1)];
    newBug.bodyColor = palette[0];
    newBug.eyeColor = palette[1];
    newBug.noseColor = palette[2];

    newBug.positionLegs(true, true, true)
    newBug.positionLegs(false, true, true)
    newBug.renderable.destroy();
    bugs.push(newBug);
}



const numBugs = 10;
for (let i = 0; i < numBugs; i++) {
    spawnNewBug(Math.percentChance(50));
}


const r = scene.createRenderable(0, () => {
    screen.fill(6);
    hourOfAi.advanceTime(1 / 30)
    for (const activeBug of bugs) {
        activeBug.update(1 / 30);
        activeBug.draw();

        if (activeBug.position.x < -20 || activeBug.position.x > 180 || activeBug.position.y < -20 || activeBug.position.y > 140) {
            if (activeBug.data["onScreen"]) {
                activeBug.data["onScreen"] = false;
                // bugs.removeElement(activeBug);
                spawnNewBug(false);
            }
        }
        else {
            activeBug.data["onScreen"] = true;
        }

        if (activeBug.data["onScreen"]) {
            if (Math.percentChance(10)) {
                activeBug.data["turning"] = true;
                activeBug.data["targetHeading"] = activeBug.heading + randint(-50, 50) * Math.PI / 180;
            }
            else if (activeBug.data["turning"]) {
                activeBug.heading = angleutil.turnAngleTowards(activeBug.heading, activeBug.data["targetHeading"], 0.05);
            }
        }
    }

    bugs = bugs.filter(b => b.data["onScreen"])
});
