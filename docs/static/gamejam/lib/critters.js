(function () {
    "use strict";

    var scriptElement = document.currentScript;
    var SCREEN_WIDTH = 320;
    var SCREEN_HEIGHT = 240;
    var FRAME_DURATION = 1000 / 30;
    var MOVE_SPEED = 10;
    var AVOIDANCE_PADDING = 8;
    var WANDER_TURN_RATE = 0.03;
    var AVOIDANCE_TURN_RATE = 0.08;
    var TARGET_TURN_RATE = 2;
    var TURN_DETECTION_ANGLE = 0.1;
    var TURN_MOVE_SPEED = 5;
    var TURN_STEP_DISTANCE = 1.5;
    var SPAWN_CANDIDATE_COUNT = 20;
    var TWO_PI = Math.PI * 2;
    var PALETTE = [
        "#000000",
        "#FDFFCD",
        "#FF384E",
        "#FF7F38",
        "#FFB838",
        "#D6FF5D",
        "#41736E",
        "#47DF6F",
        "#4886BE",
        "#4BB1D3",
        "#8C1E4E",
        "#D7DFE2",
        "#8C9193",
        "#4E585B",
        "#2E3948",
        "#0E1132"
    ];

    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function percentChance(percent) {
        return Math.random() * 100 < percent;
    }

    function clampRadians(angle) {
        return ((angle % TWO_PI) + TWO_PI) % TWO_PI;
    }

    function angleDifference(angle1, angle2) {
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

    function turnAngleTowards(angleFrom, angleTo, delta) {
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
        if (angleFrom > angleTo) {
            return clampRadians(Math.max(angleFrom - delta, angleTo));
        }
        return angleTo;
    }

    function distanceBetween(pos1, pos2) {
        var dx = pos2.x - pos1.x;
        var dy = pos2.y - pos1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function Position(x, y) {
        this.x = x;
        this.y = y;
    }

    Position.prototype.project = function (angle, distance) {
        return new Position(
            this.x + distance * Math.cos(angle),
            this.y + distance * Math.sin(angle)
        );
    };

    Position.prototype.clone = function () {
        return new Position(this.x, this.y);
    };

    function Leg(position) {
        this.position = position;
        this.moveStart = null;
        this.moveEnd = null;
        this.moveStartTime = 0;
        this.moveDuration = 0;
    }

    Leg.prototype.moveTo = function (position, time, currentTime) {
        this.moveStart = this.position.clone();
        this.moveEnd = position.clone();
        this.moveDuration = time;
        this.moveStartTime = currentTime;
    };

    Leg.prototype.update = function (currentTime) {
        if (!this.moveStart || !this.moveEnd) {
            return;
        }

        var elapsed = (currentTime - this.moveStartTime) * 1000;
        if (elapsed >= this.moveDuration) {
            this.position = this.moveEnd.clone();
            this.moveStart = null;
            this.moveEnd = null;
        }
        else {
            var progress = elapsed / this.moveDuration;
            this.position.x = this.moveStart.x + (this.moveEnd.x - this.moveStart.x) * progress;
            this.position.y = this.moveStart.y + (this.moveEnd.y - this.moveStart.y) * progress;
        }
    };

    function moveLeg(teleport, leg, position, time, currentTime) {
        if (teleport) {
            leg.position = position.clone();
            leg.moveStart = null;
            leg.moveEnd = null;
        }
        else {
            leg.moveTo(position, time, currentTime);
        }
    }

    function Bug(currentTime) {
        this.lastStepLeft = false;
        this.legsReset = false;
        this.bodyRadius = 5;
        this.legLength = 10;
        this.legPositions = [];
        this.turnRate = TARGET_TURN_RATE;
        this.speed = MOVE_SPEED;
        this.bodyColor = 4;
        this.eyeColor = 15;
        this.legColor = 14;
        this.noseColor = 2;
        this.stepDistance = 4;
        this.noseRadius = 2;
        this.data = {};
        this.heading = 0;
        this.previousHeading = undefined;
        this.targetHeading = undefined;
        this.position = new Position(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);

        for (var i = 0; i <= 5; i++) {
            this.legPositions.push(new Leg(new Position(0, 0)));
        }

        this.positionLegs(true, true, true, currentTime);
        this.positionLegs(false, true, true, currentTime);
        this.lastStepPosition = this.position.clone();
        this.lastStepHeading = this.heading;
    }

    Bug.prototype.positionLegs = function (left, close, teleport, currentTime) {
        var positions;

        if (close) {
            positions = left
                ? [
                    this.position.project(this.heading - (Math.PI / 2 - 0.8), this.legLength - 2),
                    this.position.project(this.heading + Math.PI / 2, this.legLength - 2),
                    this.position.project(this.heading - (Math.PI / 2 + 0.8), this.legLength - 2)
                ]
                : [
                    this.position.project(this.heading + (Math.PI / 2 - 0.8), this.legLength - 2),
                    this.position.project(this.heading - Math.PI / 2, this.legLength - 2),
                    this.position.project(this.heading + (Math.PI / 2 + 0.8), this.legLength - 2)
                ];
        }
        else {
            positions = left
                ? [
                    this.position.project(this.heading - Math.PI * 0.2, this.legLength + 2),
                    this.position.project(this.heading + Math.PI * 0.3, this.legLength),
                    this.position.project(this.heading - Math.PI * 0.4, this.legLength - 4)
                ]
                : [
                    this.position.project(this.heading + Math.PI * 0.2, this.legLength + 2),
                    this.position.project(this.heading - Math.PI * 0.3, this.legLength),
                    this.position.project(this.heading + Math.PI * 0.4, this.legLength - 4)
                ];
        }

        var offset = left ? 0 : 3;
        for (var i = 0; i < positions.length; i++) {
            moveLeg(
                teleport,
                this.legPositions[offset + i],
                positions[i],
                200,
                currentTime
            );
        }
    };

    Bug.prototype.update = function (timeStep, currentTime) {
        var isTurning = this.previousHeading !== undefined &&
            Math.abs(angleDifference(this.heading, this.previousHeading)) >
            TURN_DETECTION_ANGLE;
        var isMoving = this.targetHeading === undefined;
        if (this.targetHeading !== undefined) {
            this.heading = clampRadians(turnAngleTowards(
                this.heading,
                this.targetHeading,
                this.turnRate * timeStep
            ));

            if (Math.abs(angleDifference(this.heading, this.targetHeading)) < 0.001) {
                this.heading = this.targetHeading;
                this.targetHeading = undefined;
            }
        }

        if (isMoving) {
            var moveSpeed = isTurning ? TURN_MOVE_SPEED : this.speed;
            this.position.x += Math.cos(this.heading) * moveSpeed * timeStep;
            this.position.y += Math.sin(this.heading) * moveSpeed * timeStep;
            this.legsReset = false;
        }
        else if (Math.abs(angleDifference(this.heading, this.lastStepHeading)) > 0.5) {
            this.lastStepHeading = this.heading;
            this.lastStepLeft = !this.lastStepLeft;
            this.positionLegs(this.lastStepLeft, true, false, currentTime);
            this.legsReset = false;
        }

        var stepDistance = isTurning ? TURN_STEP_DISTANCE : this.stepDistance;
        if (distanceBetween(this.lastStepPosition, this.position) > stepDistance) {
            this.lastStepPosition = this.position.clone();
            this.lastStepLeft = !this.lastStepLeft;
            this.positionLegs(this.lastStepLeft, false, false, currentTime);
            this.legsReset = false;
        }

        for (var i = 0; i < this.legPositions.length; i++) {
            this.legPositions[i].update(currentTime);
        }

        this.previousHeading = this.heading;
    };

    function PixelScreen(context) {
        this.context = context;
        this.imageData = context.createImageData(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.pixels = new Uint32Array(this.imageData.data.buffer);
        this.colors = [];

        var colorProbe = document.createElement("canvas").getContext("2d");
        for (var i = 0; i < PALETTE.length; i++) {
            colorProbe.fillStyle = PALETTE[i];
            colorProbe.fillRect(0, 0, 1, 1);
            this.colors.push(new Uint32Array(colorProbe.getImageData(0, 0, 1, 1).data.buffer)[0]);
        }
    }

    PixelScreen.prototype.clear = function (color) {
        this.pixels.fill(this.colors[color]);
    };

    PixelScreen.prototype.setPixel = function (x, y, color) {
        x |= 0;
        y |= 0;
        if (x >= 0 && x < SCREEN_WIDTH && y >= 0 && y < SCREEN_HEIGHT) {
            this.pixels[y * SCREEN_WIDTH + x] = this.colors[color];
        }
    };

    PixelScreen.prototype.drawLine = function (x0, y0, x1, y1, color) {
        x0 |= 0;
        y0 |= 0;
        x1 |= 0;
        y1 |= 0;

        if (x1 < x0) {
            this.drawLine(x1, y1, x0, y0, color);
            return;
        }

        var width = x1 - x0;
        var height = y1 - y0;
        var x;
        var y;

        if (!height) {
            for (x = x0; x <= x1; x++) {
                this.setPixel(x, y0, color);
            }
            return;
        }
        if (!width) {
            var yStart = Math.min(y0, y1);
            var yEnd = Math.max(y0, y1);
            for (y = yStart; y <= yEnd; y++) {
                this.setPixel(x0, y, color);
            }
            return;
        }

        if (x1 < 0 || x0 >= SCREEN_WIDTH) {
            return;
        }
        if (x0 < 0) {
            y0 -= (height * x0 / width) | 0;
            x0 = 0;
        }
        if (x1 >= SCREEN_WIDTH) {
            var rightDelta = SCREEN_WIDTH - 1 - x1;
            y1 += (height * rightDelta / width) | 0;
            x1 = SCREEN_WIDTH - 1;
        }

        if (y0 < y1) {
            if (y0 >= SCREEN_HEIGHT || y1 < 0) {
                return;
            }
            if (y0 < 0) {
                x0 -= (width * y0 / height) | 0;
                y0 = 0;
            }
            if (y1 >= SCREEN_HEIGHT) {
                var bottomDelta = SCREEN_HEIGHT - 1 - y1;
                x1 += (width * bottomDelta / height) | 0;
                y1 = SCREEN_HEIGHT;
            }
        }
        else {
            if (y1 >= SCREEN_HEIGHT || y0 < 0) {
                return;
            }
            if (y1 < 0) {
                x1 -= (width * y1 / height) | 0;
                y1 = 0;
            }
            if (y0 >= SCREEN_HEIGHT) {
                var topDelta = SCREEN_HEIGHT - 1 - y0;
                x0 += (width * topDelta / height) | 0;
                y0 = SCREEN_HEIGHT;
            }
        }

        var dx;
        var dy;
        var direction;
        var decision;

        if (Math.abs(height) < width) {
            dx = x1 - x0;
            dy = y1 - y0;
            direction = 1;
            if (dy < 0) {
                direction = -1;
                dy = -dy;
            }
            decision = 2 * dy - dx;
            for (x = x0, y = y0; x <= x1; x++) {
                this.setPixel(x, y, color);
                if (decision > 0) {
                    y += direction;
                    decision -= 2 * dx;
                }
                decision += 2 * dy;
            }
        }
        else {
            if (height < 0) {
                var swapX = x0;
                var swapY = y0;
                x0 = x1;
                y0 = y1;
                x1 = swapX;
                y1 = swapY;
            }
            dx = x1 - x0;
            dy = y1 - y0;
            direction = 1;
            if (dx < 0) {
                direction = -1;
                dx = -dx;
            }
            decision = 2 * dx - dy;
            for (x = x0, y = y0; y <= y1; y++) {
                this.setPixel(x, y, color);
                if (decision > 0) {
                    x += direction;
                    decision -= 2 * dy;
                }
                decision += 2 * dx;
            }
        }
    };

    PixelScreen.prototype.fillCircle = function (centerX, centerY, radius, color) {
        centerX = centerX | 0;
        centerY = centerY | 0;
        radius = radius | 0;

        var x = radius - 1;
        var y = 0;
        var dx = 1;
        var dy = 1;
        var error = dx - (radius << 1);

        while (x >= y) {
            for (var yOffset = -y; yOffset <= y; yOffset++) {
                this.setPixel(centerX + x, centerY + yOffset, color);
                this.setPixel(centerX - x, centerY + yOffset, color);
            }
            for (var xOffset = -x; xOffset <= x; xOffset++) {
                this.setPixel(centerX + y, centerY + xOffset, color);
                this.setPixel(centerX - y, centerY + xOffset, color);
            }

            if (error <= 0) {
                y++;
                error += dy;
                dy += 2;
            }
            if (error > 0) {
                x--;
                dx += 2;
                error += dx - (radius << 1);
            }
        }
    };

    PixelScreen.prototype.present = function () {
        this.context.putImageData(this.imageData, 0, 0);
    };

    function drawBug(screen, bug) {
        for (var i = 0; i < bug.legPositions.length; i++) {
            var leg = bug.legPositions[i];
            screen.fillCircle(leg.position.x, leg.position.y, 2, bug.legColor);
            screen.drawLine(
                leg.position.x,
                leg.position.y,
                bug.position.x,
                bug.position.y,
                bug.legColor
            );
        }

        screen.fillCircle(
            bug.position.x + Math.round(bug.bodyRadius * Math.cos(bug.heading)),
            bug.position.y + Math.round(bug.bodyRadius * Math.sin(bug.heading)),
            bug.noseRadius,
            bug.noseColor
        );
        screen.fillCircle(bug.position.x, bug.position.y, bug.bodyRadius, bug.bodyColor);
        screen.setPixel(
            bug.position.x + Math.round((bug.bodyRadius - 2) * Math.cos(bug.heading - 0.5)),
            bug.position.y + Math.round((bug.bodyRadius - 2) * Math.sin(bug.heading - 0.5)),
            bug.eyeColor
        );
        screen.setPixel(
            bug.position.x + Math.round((bug.bodyRadius - 2) * Math.cos(bug.heading + 0.5)),
            bug.position.y + Math.round((bug.bodyRadius - 2) * Math.sin(bug.heading + 0.5)),
            bug.eyeColor
        );
    }

    function Critters(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d", { alpha: false });
        this.screen = new PixelScreen(this.context);
        this.bugs = [];
        this.currentTime = 0;
        this.accumulator = 0;
        this.lastTimestamp = 0;
        this.running = true;

        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        canvas.style.imageRendering = "pixelated";

        for (var i = 0; i < 40; i++) {
            this.spawnNewBug(percentChance(50));
        }
    }

    Critters.prototype.randomSpawnPosition = function (onScreen) {
        if (onScreen) {
            var horizontalMargin = Math.min(20, Math.floor(SCREEN_WIDTH / 2));
            var verticalMargin = Math.min(20, Math.floor(SCREEN_HEIGHT / 2));
            return new Position(
                randint(horizontalMargin, SCREEN_WIDTH - horizontalMargin),
                randint(verticalMargin, SCREEN_HEIGHT - verticalMargin)
            );
        }

        if (percentChance(50)) {
            return percentChance(50)
                ? new Position(-10, randint(0, SCREEN_HEIGHT))
                : new Position(SCREEN_WIDTH + 10, randint(0, SCREEN_HEIGHT));
        }

        return percentChance(50)
            ? new Position(randint(0, SCREEN_WIDTH), -10)
            : new Position(randint(0, SCREEN_WIDTH), SCREEN_HEIGHT + 10);
    };

    Critters.prototype.findSpawnPosition = function (onScreen, bugRadius) {
        var bestPosition;
        var bestDistance = -Infinity;

        for (var candidateIndex = 0;
            candidateIndex < SPAWN_CANDIDATE_COUNT;
            candidateIndex++) {
            var candidate = this.randomSpawnPosition(onScreen);
            var nearestBugDistance = Infinity;

            for (var bugIndex = 0; bugIndex < this.bugs.length; bugIndex++) {
                var otherBug = this.bugs[bugIndex];
                var edgeDistance = distanceBetween(candidate, otherBug.position) -
                    bugRadius - otherBug.bodyRadius;
                nearestBugDistance = Math.min(nearestBugDistance, edgeDistance);
            }

            if (nearestBugDistance > bestDistance) {
                bestDistance = nearestBugDistance;
                bestPosition = candidate;
            }
        }

        return bestPosition;
    };

    Critters.prototype.spawnNewBug = function (onScreen) {
        var bug = new Bug(this.currentTime);
        var centerX = SCREEN_WIDTH / 2;
        var centerY = SCREEN_HEIGHT / 2;

        bug.bodyRadius = randint(4, 8);
        bug.legLength = Math.round(bug.bodyRadius * 1.6);
        bug.position = this.findSpawnPosition(onScreen, bug.bodyRadius);

        if (onScreen) {
            bug.heading = randint(0, 360) * Math.PI / 180;
        }
        else {
            bug.heading = clampRadians(Math.atan2(
                centerY - bug.position.y,
                centerX - bug.position.x
            ));
        }

        var palettes = [
            [4, 15, 2],
            [7, 15, 8],
            [2, 15, 4],
            [9, 15, 8],
            [10, 15, 2],
            [5, 15, 4]
        ];
        var palette = palettes[randint(0, palettes.length - 1)];
        bug.bodyColor = palette[0];
        bug.eyeColor = palette[1];
        bug.noseColor = palette[2];
        bug.positionLegs(true, true, true, this.currentTime);
        bug.positionLegs(false, true, true, this.currentTime);
        this.bugs.push(bug);
    };

    Critters.prototype.avoidOtherBugs = function (bug, bugIndex) {
        var avoidanceX = 0;
        var avoidanceY = 0;

        for (var i = 0; i < this.bugs.length; i++) {
            if (i === bugIndex) {
                continue;
            }

            var otherBug = this.bugs[i];
            var dx = bug.position.x - otherBug.position.x;
            var dy = bug.position.y - otherBug.position.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            var minimumDistance = bug.bodyRadius + otherBug.bodyRadius;
            var avoidanceDistance = minimumDistance + AVOIDANCE_PADDING;

            if (distance >= avoidanceDistance) {
                continue;
            }

            if (!distance) {
                var separationAngle = bugIndex < i ? 0 : Math.PI;
                dx = Math.cos(separationAngle);
                dy = Math.sin(separationAngle);
                distance = 1;
            }

            var strength = (avoidanceDistance - distance) / avoidanceDistance;
            avoidanceX += dx / distance * strength;
            avoidanceY += dy / distance * strength;

        }

        if (avoidanceX || avoidanceY) {
            bug.heading = turnAngleTowards(
                bug.heading,
                Math.atan2(avoidanceY, avoidanceX),
                AVOIDANCE_TURN_RATE
            );
        }
    };

    Critters.prototype.resolveOverlaps = function () {
        for (var i = 0; i < this.bugs.length; i++) {
            for (var j = i + 1; j < this.bugs.length; j++) {
                var bug = this.bugs[i];
                var otherBug = this.bugs[j];
                var dx = otherBug.position.x - bug.position.x;
                var dy = otherBug.position.y - bug.position.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                var minimumDistance = bug.bodyRadius + otherBug.bodyRadius;

                if (distance >= minimumDistance) {
                    continue;
                }

                if (!distance) {
                    dx = 1;
                    dy = 0;
                    var exactOverlapOffset = minimumDistance / 2;
                    bug.position.x -= exactOverlapOffset;
                    otherBug.position.x += exactOverlapOffset;
                    continue;
                }

                var offset = (minimumDistance - distance) / 2;
                var offsetX = dx / distance * offset;
                var offsetY = dy / distance * offset;
                bug.position.x -= offsetX;
                bug.position.y -= offsetY;
                otherBug.position.x += offsetX;
                otherBug.position.y += offsetY;
            }
        }
    };

    Critters.prototype.update = function () {
        var timeStep = 1 / 30;
        this.currentTime += timeStep;
        this.screen.clear(6);

        for (var i = 0; i < this.bugs.length; i++) {
            var bug = this.bugs[i];
            this.avoidOtherBugs(bug, i);
            bug.update(timeStep, this.currentTime);
        }

        this.resolveOverlaps();

        for (var i = 0; i < this.bugs.length; i++) {
            var bug = this.bugs[i];
            drawBug(this.screen, bug);

            if (bug.position.x < -20 || bug.position.x > SCREEN_WIDTH + 20 ||
                bug.position.y < -20 || bug.position.y > SCREEN_HEIGHT + 20) {
                if (bug.data.onScreen) {
                    bug.data.onScreen = false;
                    this.spawnNewBug(false);
                }
            }
            else {
                bug.data.onScreen = true;
            }

            if (bug.data.onScreen) {
                if (percentChance(10)) {
                    bug.data.turning = true;
                    bug.data.targetHeading = bug.heading + randint(-50, 50) * Math.PI / 180;
                }
                else if (bug.data.turning) {
                    bug.heading = turnAngleTowards(
                        bug.heading,
                        bug.data.targetHeading,
                        WANDER_TURN_RATE
                    );
                }
            }
        }

        this.bugs = this.bugs.filter(function (bug) {
            return bug.data.onScreen;
        });
        this.screen.present();
    };

    Critters.prototype.frame = function (timestamp) {
        if (!this.running) {
            return;
        }

        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
        }

        this.accumulator += Math.min(timestamp - this.lastTimestamp, 250);
        this.lastTimestamp = timestamp;

        while (this.accumulator >= FRAME_DURATION) {
            this.update();
            this.accumulator -= FRAME_DURATION;
        }

        requestAnimationFrame(this.frame.bind(this));
    };

    Critters.prototype.start = function () {
        this.update();
        requestAnimationFrame(this.frame.bind(this));
    };

    Critters.prototype.stop = function () {
        this.running = false;
    };

    function findOrCreateCanvas() {
        var selector = scriptElement && scriptElement.getAttribute("data-canvas");
        var canvas = selector && document.querySelector(selector);

        if (!canvas) {
            canvas = document.querySelector("canvas[data-critters], canvas#critters, canvas#critters-canvas");
        }

        if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.id = "critters-canvas";
            canvas.setAttribute("aria-label", "Colorful bugs walking around");

            if (scriptElement && scriptElement.parentNode) {
                scriptElement.parentNode.insertBefore(canvas, scriptElement);
            }
            else {
                document.body.appendChild(canvas);
            }
        }

        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error("The critters canvas target must be a canvas element.");
        }

        return canvas;
    }

    function start() {
        var canvas = findOrCreateCanvas();
        var critters = new Critters(canvas);
        critters.start();
        window.critters = critters;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    }
    else {
        start();
    }
}());
