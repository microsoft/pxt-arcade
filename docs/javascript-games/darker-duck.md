# Darker Duck

It's night time, and the duck is still falling!

Uses a custom lighting effect to give the right aesthetic to a candle lit adventure.

```typescript
namespace projectImages {
    //% fixedInstance
    export const stalagmite_small = image.ofBuffer(hex`e418180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0ee000000000000000000e0eedd0000000000000000eededddd000000000000e0eedddddd1d0000000000e0deddd11ddd1d000000e0eedd11dd11dd111d00e0eede1dd111d111dd111ddddddddd11d111d111d111dd001011d111d111d111dd11d1000000dd11dd11dd11d111d100000000001011dd11dd11dd00000000000000ddd11d111d0000000000000000001d111d00000000000000000000dd1d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    //% fixedInstance
    export const stalagmite_med = image.ofBuffer(hex`e41824000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeee00000000000000000000000000000000eeeeeeee0000000000000000000000000000eeeeeeeededd000000000000000000000000e0eeeedddddddddd0000000000000000000000eeeeddddddddddddd1000000000000000000e0eedddddddd11dd1ddd110000000000000000eeddddddd111dd11dd1ddd11000000000000e0eede1dd11dd111d111dd11d1110000000000eedd11dd1dd11dd111d11dd111d11d000000e0dedd1d11d11111ddd111d11dd111d11d0000dd1d11111d11dd1111ddd11dd11dd111d11d0000000010111d111d1111dd111dd11dd11dd11d0000000000001d11dd1111dd111dd11dd11dd1110000000000000010d11111ddd11ddd11d111d11100000000000000000011d11dd111dd11d111d11100000000000000000000d011dd11dd11d111dd1100000000000000000000000010dd1d11d111dd1100000000000000000000000000101111dd11dd11000000000000000000000000000000111dd1dd110000000000000000000000000000000010dd1d11000000000000000000000000000000000000101100000000000000000000000000000000000000000000`);
    //% fixedInstance
    export const stalagmite_large = image.ofBuffer(hex`e4183000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeee00000000000000000000000000000000000000eeeeeeeede0000000000000000000000000000000000eeeeeede1dd1dd0000000000000000000000000000eeeeeededddddd1d11dd0000000000000000000000e0eeeeeededd1d1111dddd11dd000000000000000000eeeeeededddddddddd1d11d1dd11d1000000000000e0eeeededddddd1dd1dd1ddd1d11d1dd11d100000000eeeeeeeedddddd11dddd11dd1d11dd1111dd11d100e0eeeeeeddddd1dd1dd11d11dd1dd1dd11d11111dd1111ddeed1d11dd11d11d11d111d11d11d11d111d11111d11111001111111d11dd11d11d111d1111dd11d111d11111d11111000000d11d11d111dd1111dd1111d111d111d11111d11111000000000011dd11dd1111dd1111d111d111d11111d11111000000000000d011dd11d1dd1111dd11d111d11111d11d1100000000000000000011d11111111d11d111d11111d11d1100000000000000000000001111dd1d11dd11dd1111d11111000000000000000000000000001d11d11d11dd1111d11111000000000000000000000000000000d111d1dd1111d111110000000000000000000000000000000000dd1d1111dd1111000000000000000000000000000000000000000011dd11d10000000000000000000000000000000000000000001011dd00000000000000000000000000000000000000000000001d000000000000000000000000000000000000000000000000`);
    //% fixedInstance
    export const stalagmite_xlarge = image.ofBuffer(hex`e41840000000000000000000000000000000000000000000000000000000000000e0eeee000000000000000000000000000000000000000000000000000000e0eeeedddd00000000000000000000000000000000000000000000000000eeeeeeddd1dddd00000000000000000000000000000000000000000000e0eeeededddddd11dddd0000000000000000000000000000000000000000eeeeeedddd11d1dddd1111dd0000000000000000000000000000000000e0eeeedd1dddddd11111dddd1111dd000000000000000000000000000000eeeeee1dd11d1111dd111d1111dd1d11d1000000000000000000000000eeeeeedddddd1d111d1111d11ddd1111dd1d11d100000000000000000000eeeedddddddd1d11dd11d11111d11ddd1111dd1d11d100000000000000e0eeeeddd1dd1d1d11dd11d111d11111d11ddd1111dd1d11d10000000000eeeede11d11d11dd11dd11d111d11dd11111d11ddd1111dd1d11d10000e0eeee1d11111d11dd11d111d111d111111dd11111111ddd1111d11d1111dddddd1111d11d111d11d111d111d111d11d111dd11d11d111dd1111d11d11110000000010111dd11d11d111dd11d111111d111d111d11d111dd1111d11d1111000000000000dd111111dd111d11dd11111d111d111d11d111dd1111d11d1111000000000000000000d011d111111d11d111111d111d11d111dd1111d11d111100000000000000000000000011d11d11d111d11d111d11d111dd1111d11d111100000000000000000000000000dd1d11dd11d111111d11d111dd1111dd1d1111000000000000000000000000000000000011dd11111d11dd11dd1111dd1d11110000000000000000000000000000000000000010dd1dd11dd11d1111dd1d11d100000000000000000000000000000000000000000000d111d1111111dd1111d1000000000000000000000000000000000000000000000000dd1111d11d1111dd000000000000000000000000000000000000000000000000000000d11111111d000000000000000000000000000000000000000000000000000000000010d11d`);
    //% fixedInstance
    export const stalagtite_small = image.ofBuffer(hex`e4181800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ee0e00000000000000000000ddee0e000000000000000000ddddedee0000000000000000d1ddddddee0e000000000000d1ddd11ddded0e0000000000d111dd11dd11ddee0e000000d111dd111d111dd1edee0e00dd111d111d111d11dddddddd1d11dd111d111d111d1101001d111d11dd11dd11dd000000dd11dd11dd11010000000000d111d11ddd00000000000000d111d1000000000000000000d1dd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    //% fixedInstance
    export const stalagtite_med = image.ofBuffer(hex`e418240000000000000000000000000000000000000000000000000000000000000000000000000000000000eeee000000000000000000000000000000000000eeeeeeee00000000000000000000000000000000ddedeeeeeeee0000000000000000000000000000ddddddddddeeee0e0000000000000000000000001dddddddddddddeeee000000000000000000000011ddd1dd11ddddddddee0e00000000000000000011ddd1dd11dd111dddddddee0000000000000000111d11dd111d111dd11dd1edee0e000000000000d11d111dd11d111dd11dd1dd11ddee0000000000d11d111dd11d111ddd11111d11d1dded0e000000d11d111dd11dd11ddd1111dd11d11111d1dd0000d11dd11dd11dd111dd1111d111d1110100000000111dd11dd11dd111dd1111dd11d1000000000000111d111d11ddd11ddd11111d0100000000000000111d111d11dd111dd11d1100000000000000000011dd111d11dd11dd110d0000000000000000000011dd111d11d1dd0100000000000000000000000011dd11dd1111010000000000000000000000000011dd1dd11100000000000000000000000000000011d1dd010000000000000000000000000000000011010000000000000000000000000000000000000000000000000000000000000000000000000000`);
    //% fixedInstance
    export const stalagtite_large = image.ofBuffer(hex`e4183000000000000000000000000000000000000000000000000000eeee0e000000000000000000000000000000000000000000edeeeeeeee00000000000000000000000000000000000000dd1dd1edeeeeee0000000000000000000000000000000000dd11d1ddddddedeeeeee0000000000000000000000000000dd11dddd1111d1ddedeeeeee0e00000000000000000000001d11dd1d11d1ddddddddddedeeeeee0000000000000000001d11dd1d11d1ddd1dd1dd1ddddddedeeee0e0000000000001d11dd1111dd11d1dd11dddd11ddddddeeeeeeee000000001111dd11111d11dd1dd1dd11d11dd1dd1dddddeeeeee0e0011111d11111d111d11d11d11d111d11d11d11dd11d1deedd11111d11111d111d11dd1111d111d11d11dd11d11111110011111d11111d111d111d1111dd1111dd111d11d11d00000011111d11111d111d111d1111dd1111dd11dd11000000000011d11d11111d111d11dd1111dd1d11dd110d00000000000011d11d11111d111d11d11111111d1100000000000000000011111d1111dd11dd11d1dd1111000000000000000000000011111d1111dd11d11d11d10000000000000000000000000011111d1111dd1d111d0000000000000000000000000000001111dd1111d1dd00000000000000000000000000000000001d11dd110000000000000000000000000000000000000000dd1101000000000000000000000000000000000000000000d10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    //% fixedInstance
    export const stalagtite_xlarge = image.ofBuffer(hex`e4184000eeee0e0000000000000000000000000000000000000000000000000000000000ddddeeee0e000000000000000000000000000000000000000000000000000000dddd1dddeeeeee00000000000000000000000000000000000000000000000000dddd11ddddddedeeee0e00000000000000000000000000000000000000000000dd1111dddd1d11ddddeeeeee0000000000000000000000000000000000000000dd1111dddd11111dddddd1ddeeee0e00000000000000000000000000000000001d11d1dd1111d111dd1111d11dd1eeeeee0000000000000000000000000000001d11d1dd1111ddd11d1111d111d1ddddddeeeeee0000000000000000000000001d11d1dd1111ddd11d11111d11dd11d1ddddddddeeee000000000000000000001d11d1dd1111ddd11d11111d111d11dd11d1d1dd1dddeeee0e000000000000001d11d1dd1111ddd11d11111dd11d111d11dd11dd11d11d11edeeee00000000001111d11d1111ddd11111111dd111111d111d111d11dd11d11111d1eeee0e00001111d11d1111dd111d11d11dd111d11d111d111d111d11d111d11d1111dddddd1111d11d1111dd111d11d111d111d111111d11dd111d11d11dd11101000000001111d11d1111dd111d11d111d111d11111dd11d111dd111111dd0000000000001111d11d1111dd111d11d111d111111d11d111111d110d0000000000000000001111d11d1111dd111d11d111d11d111d11d11d110000000000000000000000001111d1dd1111dd111d11d111111d11dd11d1dd000000000000000000000000001111d1dd1111dd11dd11d11111dd1100000000000000000000000000000000001d11d1dd1111d11dd11dd1dd01000000000000000000000000000000000000001d1111dd1111111d111d00000000000000000000000000000000000000000000dd1111d11d1111dd000000000000000000000000000000000000000000000000d11111111d000000000000000000000000000000000000000000000000000000d11d010000000000000000000000000000000000000000000000000000000000`);
}

namespace lighting {
    let bandPalettes: Buffer[];

    // The top row is just the palette, each row gets darker
    const palette_ramps = image.ofBuffer(hex`e4100400ffff0000d1cb0000a2ff0000b3fc0000e4fc000045ce000086fc000067c80000c8ff000069c80000bafc0000cbff0000fcff0000bdfc0000ceff0000ffff0000`);

    export interface LightAnchor {
        x: number;
        y: number;
    }

    export class LightSource {
        anchor: LightAnchor;
        offsetTable: Buffer;
        width: number;
        height: number;

        constructor(public rings: number, public bandWidth: number, public centerRadius: number) {
            const halfh = centerRadius + rings * bandWidth;
            this.offsetTable = control.createBuffer((rings + 1) * halfh);

            // Approach is roughly based on https://hackernoon.com/pico-8-lighting-part-1-thin-dark-line-8ea15d21fed7
            let x: number;
            let band: number;
            let y2: number;
            for (let y = 0; y < halfh; y++) {
                y2 = Math.pow(y, 2);
                // Store the offsets where the bands switch light levels for each row. We only need to
                // do one quadrant which we can mirror in x/y
                for (band = 0; band < rings; band++) {
                    x = Math.sqrt(Math.pow(centerRadius + bandWidth * (band + 1), 2) - y2) | 0;
                    this.offsetTable[y * rings + band] = x;
                }
            }

            this.width = halfh;
            this.height = halfh;
        }

        apply() {
            const camera = game.currentScene().camera;
            const halfh = this.width;
            const cx = this.anchor.x | 0;
            const cy = this.anchor.y | 0;

            let prev: number;
            let offset: number;
            let band: number;

            // First, black out the completely dark areas of the screen
            screen.fillRect(0, 0, screen.width, cy - halfh + 1, 15)
            screen.fillRect(0, cy - halfh + 1, cx - halfh, halfh << 1, 15)
            screen.fillRect(cx + halfh, cy - halfh + 1, screen.width - cx - halfh, halfh << 1, 15)
            screen.fillRect(0, cy + halfh, screen.width, screen.height - (cy + halfh), 15)

            // Go over each row and darken the colors
            for (let y = 0; y < halfh; y++) {
                band = this.rings;
                prev = 0;
                offset = this.offsetTable[y * this.rings + band - 1]

                // Black out the region outside the darkest light band
                screen.mapRect(cx - halfh, cy + y + 1, halfh - offset, 1, bandPalettes[bandPalettes.length - 1])
                screen.mapRect(cx - halfh, cy - y, halfh - offset, 1, bandPalettes[bandPalettes.length - 1])
                screen.mapRect(cx + offset, cy + y + 1, halfh - offset, 1, bandPalettes[bandPalettes.length - 1])
                screen.mapRect(cx + offset, cy - y, halfh - offset, 1, bandPalettes[bandPalettes.length - 1])

                // Darken each concentric circle by remapping the colors
                while (band > 0) {
                    offset = this.offsetTable[y * this.rings + band - 1]
                    if (offset) {
                        offset += (Math.idiv(randint(0, 11), 5))
                    }

                    // We reflect the circle-quadrant horizontally and vertically
                    screen.mapRect(cx + offset, cy + y + 1, prev - offset, 1, bandPalettes[band - 1])
                    screen.mapRect(cx - prev, cy + y + 1, prev - offset, 1, bandPalettes[band - 1])
                    screen.mapRect(cx + offset, cy - y, prev - offset, 1, bandPalettes[band - 1])
                    screen.mapRect(cx - prev, cy - y, prev - offset, 1, bandPalettes[band - 1])

                    prev = offset;
                    band--;
                }
            }
        }
    }

    export class LanternEffect implements effects.BackgroundEffect {
        protected sources: LightSource[];
        protected static instance: LanternEffect;
        protected anchor: LightAnchor;
        protected init: boolean;

        public static getInstance() {
            if (!LanternEffect.instance) LanternEffect.instance = new LanternEffect();
            return LanternEffect.instance;
        }

        private constructor() {
            bandPalettes = [];
            for (let band = 0; band < 6; band++) {
                const buffer = control.createBuffer(16);
                for (let i = 0; i < 16; i++) {
                    buffer[i] = palette_ramps.getPixel(i, band + 1);
                }
                bandPalettes.push(buffer);
            }

            this.sources = [];
            this.sources.push(new LightSource(4, 12, 2))
            this.sources.push(new LightSource(4, 13, 1))
            this.sources.push(new LightSource(4, 13, 2))

            this.setAnchor({ x: screen.width >> 1, y: screen.height >> 1 });
        }

        startScreenEffect() {
            if (this.init) return;
            this.init = true;

            let index = 0;
            game.onShade(() => {
                this.sources[index].apply();
            })

            let up = true;

            game.onUpdateInterval(1000, () => {
                if (up) index++;
                else index--;

                if (index < 0) {
                    index = 1;
                    up = true;
                }
                else if (index >= this.sources.length) {
                    index = this.sources.length - 2;
                    up = false;
                }
            })
        };

        setAnchor(anchor: LightAnchor) {
            this.anchor = anchor;
            this.sources.forEach(function (value: LightSource, index: number) {
                value.anchor = this.anchor;
            });
        }
    }
}


enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let anim: animation.Animation = null
let bottomImage: Image = null
let projectile: Sprite = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.setAction(mySprite, ActionKind.Jumping)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over()
})
scene.setBackgroundColor(9)
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
mySprite.ay = 300
anim = animation.createAnimation(ActionKind.Jumping, 25)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 4 b
    b d d c d 5 5 b 5 4 4 4 4 4 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 d 4 c . .
    . . . . b 5 5 1 f f d d 4 4 4 b
    . . . . b 5 5 d f b 4 4 4 4 b .
    . . . b d 5 5 5 5 4 4 4 4 b . .
    . . b d d 5 5 5 5 5 5 5 5 b . .
    . b d d d d 5 5 5 5 5 5 5 5 b .
    b d d d b b b 5 5 5 5 5 5 5 b .
    c d d b 5 5 d c 5 5 5 5 5 5 b .
    c b b d 5 d c d 5 5 5 5 5 5 b .
    . b 5 5 b c d d 5 5 5 5 5 d b .
    b b c c c d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 d 4 c . .
    . . . . b 5 5 1 f f d d 4 4 4 b
    . . . . b 5 5 d f b 4 4 4 4 b .
    . . . b d 5 5 5 5 4 4 4 4 b . .
    . b b d d d 5 5 5 5 5 5 5 b . .
    b d d d b b b 5 5 5 5 5 5 5 b .
    c d d b 5 5 d c 5 5 5 5 5 5 b .
    c b b d 5 d c d 5 5 5 5 5 5 b .
    c b 5 5 b c d d 5 5 5 5 5 5 b .
    b b c c c d d d 5 5 5 5 5 d b .
    . . . . c c d d d 5 5 5 b b . .
    . . . . . . c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    . b b b d 5 5 5 5 5 4 4 4 4 4 b
    b d d d b b d 5 5 4 4 4 4 4 b .
    b b d 5 5 5 b 5 5 5 5 5 5 b . .
    c d c 5 5 5 5 d 5 5 5 5 5 5 b .
    c b d c d 5 5 b 5 5 5 5 5 5 b .
    . c d d c c b d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
    . . . . . . . . . . . . . . . .
`)
animation.attachAnimation(mySprite, anim)
game.onUpdateInterval(1500, function () {
    info.changeScoreBy(1)
    gap = randint(0, 3)
    if (gap == 0) {
        topImage = projectImages.stalagtite_small
        bottomImage = projectImages.stalagmite_xlarge
    } else if (gap == 1) {
        topImage = projectImages.stalagtite_med
        bottomImage = projectImages.stalagmite_large
    } else if (gap == 2) {
        topImage = projectImages.stalagtite_large
        bottomImage = projectImages.stalagmite_med
    } else {
        topImage = projectImages.stalagtite_xlarge
        bottomImage = projectImages.stalagmite_small
    }
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
game.onUpdate(function () {
    if (mySprite.vy > 0) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over()
    }
})

scene.setBackgroundColor(3)
const effect = lighting.LanternEffect.getInstance();
effect.setAnchor(mySprite);
effect.startScreenEffect();
```

```package
animation
```