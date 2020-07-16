# Planet Putt Putt

```typescript
namespace music {
    // Golf sound effects
    export const golferSwing = new music.Melody("~3, C4:0-400, E4:0-400, G4:0-400, R:0, C6:0-30")
    export const golfBallLand = new music.Melody("~3, B3:0")
    //Angle moving up and down
    export const angleUp = new music.Melody("D4:0-400")
    export const angleDown = new music.Melody("B3:0-400")
}

namespace customArt {
    export const stars = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . 9 1 d . . . . . . .
        . . . . . . c 1 c . . . . . . .
        . . . . . c a 1 a c . . . . . .
        . . . 9 c a 1 1 1 a c d . . . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . . d c a 1 1 1 a c 9 . . . .
        . . . . . c a 1 a c . . . . . .
        . . . . . . c 1 c . . . . . . .
        . . . . . . d 1 9 . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const ufo = img`
        . . . . . 7 7 7 7 6 6 . . . . .
        . . . . 7 7 8 7 7 7 6 6 . . . .
        . . . . 7 8 7 7 7 7 6 6 . . . .
        . . . . 7 8 7 7 7 7 6 6 . . . .
        . . . . 6 7 7 7 7 6 6 6 . . . .
        . . . . 6 6 6 6 6 6 6 6 . . . .
        . . . 1 b b b b b b b b a . . .
        . . 1 8 7 b b 8 7 b b 8 7 a . .
        1 1 b 7 7 b b 7 7 b b 7 7 b a a
        b b b b b b b b b b b b a a a a
        . c a a a a a a a a a a a c c .
        . . c c c c c c c c c c c c . .
        . . 3 3 5 5 3 3 5 5 3 3 5 5 . .
        . . . 3 5 . . 3 5 . . 3 5 . . .
        . . . 2 4 . . 2 4 . . 2 4 . . .
        . . . . 2 . . . 2 . . . 2 . . .
    `
    export const black_hole_up = img`
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 8 8 0 0 0
        0 0 8 0 8 0 0 0 0 0 0 0 0 8 0 0
        0 0 0 1 0 0 0 0 0 0 0 0 0 8 8 0
        0 0 8 0 8 0 0 0 0 8 8 8 8 7 8 0
        0 0 0 0 0 0 0 8 8 8 7 7 7 7 8 0
        0 0 0 0 0 0 8 8 7 7 7 7 8 8 0 0
        0 0 0 0 0 8 8 7 7 7 7 8 8 0 0 0
        0 0 0 0 8 8 7 8 2 7 8 8 0 0 0 0
        0 0 0 0 8 7 7 8 2 2 2 0 0 0 0 1
        0 0 0 8 8 7 7 8 2 2 2 2 2 0 0 0
        0 0 0 8 7 7 7 8 2 2 2 2 2 2 0 0
        0 0 8 8 7 7 7 8 2 2 2 2 2 2 2 0
        0 8 8 8 7 7 7 8 2 2 2 2 2 2 0 0
        0 8 8 8 7 7 8 8 2 2 2 2 2 8 0 0
        8 8 7 7 7 8 8 8 2 2 8 7 7 8 8 0
        `;
    export const black_hole_left = img`
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 8
        0 0 0 0 0 0 0 0 0 0 1 0 0 0 8 8
        0 0 0 0 0 0 0 0 0 1 0 0 0 0 8 7
        0 0 0 0 0 0 0 0 0 0 0 0 0 8 8 7
        0 0 0 0 0 0 0 0 0 0 0 8 8 8 7 7
        0 0 0 0 0 0 0 0 8 8 8 8 8 7 7 8
        0 0 0 0 8 8 8 8 8 8 8 8 8 7 7 8
        0 8 8 8 8 7 7 7 7 7 7 7 7 7 7 8
        0 0 0 0 8 8 8 8 8 8 8 8 8 7 7 8
        0 0 0 0 0 0 0 0 8 8 8 8 8 7 7 8
        0 0 1 0 0 0 0 0 0 0 0 8 8 8 7 7
        0 0 0 0 0 0 0 0 0 0 0 0 0 8 8 7
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 8 7
        0 0 0 0 0 0 0 0 0 0 8 0 0 0 8 8
        0 0 0 0 0 0 0 0 0 8 1 8 0 0 0 8
        0 0 0 0 0 0 0 0 0 0 8 0 0 0 0 0
    `;
    export const black_hole_down = img`
        0 8 8 7 7 7 8 8 8 7 7 7 8 8 0 0
        0 0 8 8 7 7 7 7 7 7 7 8 8 0 0 0
        0 0 0 8 8 7 7 7 7 7 7 8 0 0 0 0
        0 0 0 8 8 7 7 7 7 7 7 8 0 0 0 0
        0 0 0 0 8 8 7 7 7 7 8 8 0 0 0 0
        0 0 0 0 8 8 7 7 7 7 8 0 0 0 0 0
        0 0 0 8 8 7 7 7 7 8 8 0 0 0 0 0
        0 0 8 8 7 7 7 7 8 8 0 0 0 0 0 0
        0 8 8 7 7 7 7 8 8 0 0 0 0 0 0 0
        8 7 7 7 7 8 8 8 0 0 0 8 0 8 0 0
        8 7 8 8 8 8 0 0 0 0 0 0 1 0 0 0
        8 8 0 0 0 0 0 0 0 0 0 8 0 8 0 0
        0 8 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 8 8 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0
    `;
    export const black_hole_center = img`
        8 7 7 8 8 8 1 8 1 1 8 8 7 7 8 8
        7 7 8 8 1 1 1 8 1 1 1 8 8 7 7 8
        7 8 8 1 1 1 1 8 1 1 1 1 8 8 7 7
        8 8 1 1 1 1 1 8 1 1 1 1 1 8 8 7
        8 1 1 1 1 1 c 8 c 1 1 1 1 1 8 7
        8 1 1 1 1 c c 8 c c 1 1 1 1 8 8
        1 1 1 1 c c f 8 f c c 1 1 1 1 8
        1 1 1 1 c f f 8 f f c 1 1 1 1 8
        1 1 1 1 c c f f f c c 1 1 1 1 8
        8 1 1 1 1 c c f c c 1 1 1 1 8 8
        8 1 1 1 1 1 c c c 1 1 1 1 1 8 7
        8 8 8 1 1 1 1 1 1 1 1 1 1 8 8 7
        7 8 8 1 1 1 1 1 1 1 1 1 8 8 7 7
        7 7 8 8 1 1 1 1 1 1 1 8 8 7 7 8
        8 7 7 8 8 8 1 1 1 8 8 8 7 7 8 8
        8 8 7 7 7 8 8 1 8 8 7 7 7 8 8 0
    `;
    export const black_hole_right = img`
        0 0 0 0 0 0 0 0 0 8 0 0 0 0 0 0
        8 0 0 0 0 0 0 0 8 1 8 0 0 0 0 0
        8 0 0 0 0 0 0 0 0 8 0 0 0 0 0 0
        8 8 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        7 8 8 8 0 0 0 0 0 0 0 0 0 0 0 0
        7 7 8 8 8 8 8 8 0 0 0 0 0 0 0 0
        7 7 8 8 8 8 8 8 8 8 8 8 0 0 0 0
        7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 0
        7 7 8 8 8 8 8 8 8 8 8 8 0 0 0 0
        7 7 8 8 8 8 8 8 0 0 0 0 0 0 0 0
        7 8 8 8 0 0 0 0 0 0 0 0 0 0 0 0
        8 8 0 0 0 0 0 0 0 0 0 1 0 0 0 0
        8 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        8 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    `;
    export const floor_inner = img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 4 4 5 5 5 5 4 4 5 5 5 5
        5 5 5 4 3 3 4 5 5 4 3 3 4 5 5 4
        4 4 4 3 3 3 3 4 4 3 5 3 3 4 4 3
        5 5 5 3 3 3 3 3 3 3 5 5 5 3 3 3
        3 3 5 5 3 d 3 5 5 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 d 9 9 3 3 3 e
        3 3 3 5 3 3 3 3 d d d d d 3 3 3
        3 5 3 3 5 3 3 3 5 e e e 3 3 3 3
        3 3 5 3 5 5 5 5 3 3 3 3 3 5 3 5
        3 e 3 3 3 d d 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 e e 3 3 3 3 3 3 3 3 3
        3 3 3 3 5 3 3 3 3 5 3 3 3 5 5 5
        5 3 3 3 5 5 5 3 3 3 5 3 3 3 3 5
        3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        d d 3 3 3 5 3 3 5 5 3 3 3 3 3 d
    `
    export const meteor_front = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 . . .
        4 4 4 4 4 4 4 4 4 4 4 4 2 2 . .
        4 3 3 3 3 5 3 5 3 5 5 4 4 2 2 .
        b b b b b b b b b b 3 5 4 4 2 2
        b 1 1 1 1 1 1 1 1 1 b 3 5 4 4 2
        1 1 1 1 1 1 1 1 1 1 1 b b 5 4 2
        b 1 1 1 1 1 1 1 1 1 1 1 b 5 4 2
        1 1 1 1 1 1 1 1 1 1 1 1 b 5 4 2
        b 1 1 1 1 1 1 1 1 1 1 1 b 5 4 2
        1 1 1 1 1 1 1 1 1 1 1 1 b 5 4 2
        b 1 1 1 1 1 1 1 1 1 1 b b 5 4 2
        1 1 1 1 1 1 1 1 1 1 b 3 5 4 4 2
        b b b b b b b b b b 3 5 4 4 2 2
        4 3 3 3 3 5 3 5 3 5 5 4 4 2 2 .
        4 4 4 4 4 4 4 4 4 4 4 4 2 2 . .
        2 2 2 2 2 2 2 2 2 2 2 2 2 . . .
    `
    export const meteor_middle = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        1 2 4 4 b b b b 4 4 4 b b b 2 b
        3 3 2 2 2 5 5 5 2 3 3 3 3 5 5 5
        1 1 1 4 4 4 4 b 5 5 2 2 4 4 4 1
        b b 5 b b b 2 2 b b b 3 3 3 b b
        1 3 4 4 4 4 4 5 5 5 5 1 1 1 1 1
        b b b b 2 2 b b b 4 4 4 4 b b b
        5 5 5 3 3 3 3 3 3 2 2 2 2 2 5 5
        b 2 2 2 b b 4 4 4 4 4 b b b b b
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `
    export const meteor_back = img`
        . . . . 2 2 2 2 2 2 2 2 2 2 2 2
        . . 5 2 5 5 4 5 4 5 5 2 3 3 4 4
        4 4 4 4 3 4 4 4 4 4 3 4 4 4 5 5
        . . 2 2 2 3 2 3 2 3 2 2 2 3 2 2
        . 5 5 5 3 4 5 5 5 4 b b b b b b
        2 2 2 5 5 5 3 2 5 3 2 b 3 2 2 b
        4 4 3 4 3 3 4 3 b b b b 4 4 1 b
        . 2 2 2 2 3 2 5 5 5 5 b 5 5 5 2
        4 4 3 4 3 4 b b b 4 b 4 4 1 1 1
        . 4 4 3 5 5 3 5 b b b b 5 5 5 1
        2 2 2 3 3 2 2 b 2 3 2 b b b 2 2
        . 5 5 5 5 3 3 5 b b 5 1 5 1 5 5
        4 4 4 . 4 3 2 4 3 2 4 3 4 2 4 1
        . . 5 4 3 4 4 4 4 3 3 3 3 3 5 5
        . 4 4 2 5 5 5 2 5 4 5 4 5 5 5 4
        . . . . 2 2 2 2 2 2 2 2 2 2 2 2
    `
    export const satellite_top = img`
        . . . . . . b 1 b . . . . . . .
        . a a a a a a b a a a a a a a .
        a a b b b 1 1 a 1 1 1 b b b a a
        a b b 1 1 1 1 a 1 1 1 1 1 b b a
        c a a a b b b c b b b b a a a c
        . c a a a a a a a a a a a a c .
        . . c c a a a a a a a a c c . .
        . . . . c c c c c c c c . . . .
        . . . . . a b c b . . . . . . .
        . . 2 . a b b c b . . a b . . .
        . . . b b b . a b b . a b a b .
        . . c b b . . a a b . a b a b .
        . c b b . b . . a b b b b b b b
        c b b . . . b c b b . c b c b .
        . . . . . . c b b . . c b c b .
        . . . . c b b b . . . c b . . .
    `
    export const satellite_front = img`
        . . . . . a a a a a a 8 7 3 4 a
        . . . b b b b b b b b 8 7 3 4 b
        . . 1 1 1 1 1 1 1 1 1 7 6 4 2 1
        . . 1 1 1 1 1 1 1 1 1 6 6 2 2 1
        . 1 1 1 1 1 1 1 1 1 1 6 6 2 2 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        b b b b b b b b b b b b b b b b
        . a a a a a a a a a a a a a a a
        . . a a a a a a a a a a a a a a
        . . c c c c c c c c c c c c c c
        . . . c c c c c c c c c c c c c
        . . . . . a a a a a a a a a a a
        . . . . . . . . . . . . . . . .
    `
    export const satellite_middle = img`
        a a a a a a a a a c c a a a a a
        b b b b b b b b b c c b b b b b
        1 1 1 1 1 1 1 1 1 c c 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 c c 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 c c 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        b b b b b b b b b b b b b b b b
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        a a a a a a a a a a a a a a a a
        . . . . . . . . . . . . . . . .
    `
    export const satellite_back = img`
        a a a . . . . . . a a . . . . .
        b b b b . . . a a c a a . . . .
        1 1 1 1 1 . a c a a c a a . . .
        1 1 1 1 1 1 a a c a a c a a . .
        1 1 1 1 1 1 1 a c a a c a a . .
        1 1 1 1 1 1 1 a c a a c a a . .
        1 1 1 1 1 1 1 a c a a c a a . .
        1 1 1 1 1 1 1 a c a a c a a . .
        1 1 1 1 1 1 1 a c a a c a a . .
        b b b b b b b a c a a c a a . .
        a a a a a a a a c a a c a a . .
        a a a a a . a c a a c a a . . .
        c c c c c . . a a c a a . . . .
        c c c c . . . . . a a . . . . .
        a a a a . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}

namespace customImages {
    //% fixedInstance
    export const titleScreen = img`
        b c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c b
        b c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c a b a c c c c c c c c c c b
        b c c c c c c c c c c a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a b d b a c c c c c c c c c b
        b c c c c c c c c c a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c a d d b a c c c c c c c c c b
        b c c a c c c c c c c a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a b a c c c c c c c c c c c c c c c c c c c c c c c c c c c a b a c c c c c c c c c c b
        b c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c a d d b a c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b d b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a d d b a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b d d d b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a b a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b d b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a d a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c d d c c c a a a c c c c c c c c c c c c c c d c c d d c c c c c c c c c c c c c c c c c d c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c b
        d a c c c c c c c c c c c c c d d c c c d d d d c c c c c c c c c c c c c c c c c c c c d d c c c c c c c c c c c c c c c d d d c c c a c c c c c c c c c c c c c c c c c c d d d c c c c c c c c c c c c c c c c d c c c d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c b
        d d a c c c c c c c c c c c c d d c c c c c c c d d d c c c c c c c c c c c c c c c c d c d c c c c c c c c c c c c c c c d d d d c c c c c c c c c c c c c c c c c c c c c d d d c c c c c c c c c c c c c c c d d c c c d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c b
        d a c c c c c c c c c c c c c d d c c c c c c c c c c d d d c c c c c c c c c c c c d d c d c c c c c c c c c c c c c c c d d c d c c c c c c c c c c c c c c c c c c c c c d d c d c c c c c c c c c c c c c c d d c c c d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c b
        b c c c c c c c c c c c c c c d d c c c c c c c c c c c c c d d d d c c c c c c c d d c c d c c c c c c d c c c c c c c c d d c d d c c c c c c c c c c c c c c c c c c c c d d c c d c c c c c c c c c c c c c d d c c c d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c b
        b c c c c c c c c c c c c c c d d c c c c c c c c c c c c c c c c c d d c c c c d d c c c d c c c c c c c c c c c c c c c d d c c d c c c c c c c c c c c c c c c c c c c c d d c c d c c c c c c c c c c c c d c d c c c d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c d d c c c c c c c c c c c c c c c c c c d c c c d d c c c c d c c c c c c c c c c c c c c c d d c c d d c c c c c c c c c c c c c c c c c c c d d c c c d c c c c c c c c c c c d c d c c c d d c c c c c c d d d d d d d d d d d d d d d c c c c c d d d d d d d d d d c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c d d c c c c c d c c c c c c c c c c c c d c c c d d c c c c d c c c c c c c c c c c c c c c d d c c c d c c c c c c c c c c c c c c c c c c c d d c c c d c c c c c c c c c c c d c d c c c d d c c c c c c d c c c c c c c c c c c c d d c c c c c d c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c d d c c c c c d d d c c c c c c c c c c d c c c d d c c c c d c c c c c c c c c c c c c c c d d c c c d d c c c c c c c c c c c c c c c c c c d d c c c c d c c c c c c a c c d c c d c c c d d c c c c c c d c c c c c c c c c c c c d d c c c c c d c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c d d c c c c c d c c d d d d c c c c c c d c c c d d c c c c d c c c c c c c c c c c c c c c d d c c c c d c c c c c c c c c c c c c c c c c c d d c c c c c d c c c c c c c c d c c d c c c d d c c c c c c d c c c c c c c c c c c c d d c c c c c d c c c c c c c c c c c c c c c c c c c c c b
        b a c a c a c a c a c a c a c d d c c c c c d a c a c a c d d c c c c d c a c d d c c c c d c a c a c a c a c a c a c a c d d c c c c d d a c a c a c a c a c a c a c a c a d d c c c c c d c a c a c a c a d c c d c a c d d c c c c c c d c a c a c a c a c a c a d d c c c c c d c a c a c a c a c a c a c a c a c a c a c b
        b a a a a a a a a a a a a a a d d c c c c c d a a a a a a a d c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a a d d c c c c c c d a a a a a a a d c c d a a a d d c c c c c c d a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a a a a a a b
        b a a a a a a a a a a a a a a d d c c c c c d a a a a a a a d c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c c c d d a a a a a a a a a a a a a a a a d d c c c c c c c d a a a a a d c c c d a a a d d c c c c c d a a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a a a a a a b
        b a a a a a a a a a a a a a a d d c c c c c d a a a a a a a d c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c c c c d d a a a a a a a a a a a a a a a d d c c c c c c c d a a a a a d c c c d a a a d d c c c c c d a a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a a a a a a b
        b a a a a a a a a a a a a a b d d c c c c c d a a a a a a a d c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c c c c c d a a a a a a a a a a a a a a a d d c c c c c c c c d a a a a d c c c d a a a d d c c c c c d a a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a a a a a a b
        b a a a a a a a a a a a a b b d d c c c c c d a a a a a a a d c c c c d b a a d d c c c c d a a a a a a a a a a a a a a a d d c c c d c c c d d a a a a a a a a a a a a a a d d c c c c c c c c d a a a d c c c c d a a a d d c c c c c d a a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a a a a a a b
        b a a a a a a a a a a a a b b d d c c c c c d a a a d d d d d c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c d d c c c d a a a a a a a a a a a a a a d d c c c c c c c c c d a a d c c c c d a a a d d c c c c c d d d d d d d d d d a a a a d d c c c c c d a a a a a a a a a a a a a a a a a a a a a b
        b a a a a a a a a a a a a a b d d c c c c c d d d d c c c c c c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c d d c c c d d a a a a a a a a a a a a a d d c c c c c c c c c c d a d c c c c d a a a d d c c c c c c c c c c c c c d a a a a a d d c c c c c d a a a a a a a a a a a a a a a a b a a a a b
        b a a a a a a a a a a a a a a d d c c c c c c c c c c c c c c c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c d a d c c c d a a a a a a a a a a a a a d d c c c c c c c c c c d d c c c c c d a a a d d c c c c c c c c c c c c d a a a a a a d d c c c c c d a a a a a a a a a a a a a a a b b b a a a b
        b a a a a a a a a a a a a a a d d c c c c c c c c c c c c c c c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c d a d c c c d d a a a a a a a a a a a a d d c c c c d c c c c c c d c c c c c d a a a d d c c c c c c c c c c c d a a a a a a a d d c c c c c d a a a a a a a a a a a a a a b b d b b a a b
        b a a a a a a a a a a a a a a d d c c c c c c c c c c c c c c c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c d a a d c c c d a a a a a a a a a a a a d d c c c c d d c c c c c c c c c c c d a a a d d c c c c c c c c c c d a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a b b d b b a a b
        b a a a a a a a a a a a a a a d d c c c c c c c c c c c c c c c c c c d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c d d d d c c c d d a a a a a a a a a a a d d c c c c d d d c c c c c c c c c c d a a a d d c c c c c c c c c c d a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a b b b a a a b
        b a a a a a a a a a a a a a a d d c c c c c c c c c c c c d d d d d d d a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c c c c c c c c c d a a a a a a a a a a a d d c c c c d d d c c c c c c c c c c d a a a d d c c c c c d d d d d a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a b a a a a b
        b a a a a a a a a a a a a a a d d c c c c c d d d d d d d d a a a a a a a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c c c c c c c c c d d a a a a a a a a a a d d c c c c d a d d c c c c c c c c c d a a a d d c c c c c d a a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a a a a a a b
        b a a a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a d d c c c c d a a a a a a a a a a a a a a a d d c c c c c c c c c c c c d a a a a a a b a a a d d c c c c d a d d d c c c c c c c c d a a a d d c c c c c d a a a a a a a a a a a a a d d c c c c c d a a a a a a a a a a a a a a a a a a a a a b
        b a a a a a a a a a a a a a a d d a a a a a d a a a a a a a a a a a a a a a a d d a a a a d a a a a a a a a a a a a a a a d d a a a a d d a a a a a a a d a a a a b d b a a d d a a a a d a a d d d a a a a a a a d a a a d d a a a a a d a a a a a a a a a a a a a d d a a a a a d a a a a a a a a a a a a a a a a a a a a a b
        b b a b a b a b a b a b a b a d d a a a a a d b a b a b a b a b a b a b a b a d d a a a a d a b a b a b a b a b a b a b a d d a a a a d a d a a a a a a d d a a b d d d b b d d a a a a d b a b d d a a a a a a a d a b a d d a a a a a d b a b a b a b a b a b a b d d a a a a a d a b a b a b a b a b a b a b a b a b a b a b
        b b b b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b d d a a a a d b b b b b a a a b b b b b b b d d a a a a d b d a a a a a a a d a b b d d d b b d d a a a a d b b b b d d a a a a a a d b b b d d a a a a a a d b b b b b b b b b b b b d d a a a a a d b b b b b d b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b d d a a a a d b b b b b b a b b b b b b b b d d a a a a d b b d a a a a a a d d b b b d b b b d d a a a a d b b b b d d d a a a a a d b b b d d a a a a a a d b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b d d a a a a d d d d d d d d b b b b b b b b d d a a a a d b b b d a a a a a a d b b b b b b b d d a a a a d b b b b b d d d a a a a d b b b d d a a a a a a d b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b d d a a a a a a a a a a a a d b b b b b b b d d a a a a d b b b d a a a a a a d d b b b b b b d d a a a a d b b b b b b d d a a a a d b b b d d a a a a a a d b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b d d a a a a a a a a a a a a a d b b b b b b d d a a a a d b b b b d a a a a a a d b b b b b b d d a a a a d b b b b b b b d d a a a d b b b d d a a a a a a d d d d d d b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b a d d a a a a a d b b b b b b b b b b b b b b b b d d a a a a a a a a a a a a a d b b b b b b d d a a a a d b b b b b d a a a a a d d b b b b b d d a a a a d b b b b b b b d d d a a d b b b d d a a a a a a a a a a a a d b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b b b b b b b
        b b b d b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b d d a a a a a a a a a a a a a a d b b b b b d d a a a a d b b b b b d a a a a a a d b b b b b d d a a a a d b b b b b b b b d d d a d b b b d d a a a a a a a a a a a a d b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b b b b b b b
        b b d d d b d b d b d b d b d d d a a a a a d b d b d b d b d b d b d b d b d d d a a a a a a a a a a a a a a a d b d b d d d a a a a d d b d b d b d a a a a a d d d b d b d d a a a a d b d b d b d b d b d d a d d b d d d a a a a a a a a a a a a a d b d b d b d d a a a a a d d b d b d b d b d b d b d b d b d b d b d b
        b b b d b b b b b b b b b b b d d a a a a a d b b b b b b b b d b b b b b b b d d a a a a a a a a a a a a a a a a d b b b d d a a a a d b b b b b b b d a a a a a d b b b b d d a a a a d b b b b b b b b b b d d d b b b d d a a a a a a a a a a a a a a d b b b b d d a a a a a d b b b b b b b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b d d a a a a a d b b b b b b b b b b b b b b b b d d a a a a a a a a a a a a a a a a d b b b d d a a a a d b b b b b b b d a a a a a d d b b b d d a a a a d b b b b b b b b b b d d d b b b d d a a a a a a a a a a a a a a d b b b b d d a a a a a d b b b b b b b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b d d d d d d d d b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d b b b d d d d d d d b b b b b b b b d d d d d d d b b b d d d d d d d b b b b b b b b b b b d d b b b d d d d d d d d d d d d d d d d d d b b b d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a b b b b b b b b
        b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a b b b b b b b
        b b b b d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b d b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a b b b b b b b b
        b a b a d d 6 6 6 d d d d a b a b a b a b a b a b a b a b a b a b d d a b a b a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d b a b a b a b a b a b a b a b a b a b a b a b a b a b a b a b a b a b a b a b a b a b b b b b b b a b a b a b a b a b a b a b a b a b a b a b a b a b b
        b a a a d d 6 6 6 6 6 6 6 d d d a a a a a a a a a a a a a a a a d 6 d a a a a a d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 6 6 6 6 6 d d d a a a a a a a a a a a a a d 6 d a a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d a a a a a a a a d 6 6 d a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d a a a a a d 6 6 6 d a a a d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a a d 6 6 6 6 d a a d d d d d d d d d d d d d d d d d 6 6 6 6 6 d d d d d d d 6 6 6 6 6 d d d d d d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 d 6 6 6 6 6 6 6 6 6 6 6 6 d a a a d d 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 d d d 6 6 6 6 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 d a a d d d d 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d d d d a a a a a a a a a a a a a a a a a a a a a a a a a d a a a a a a d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d a b
        b a a a d d 6 6 6 6 6 d a a a a a a d d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 d d d d a a a a a a a a a a a a a a a a a a a a d d a a a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a b
        b a a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 6 6 d d d a a a a a a a a a a a a a a a a d 6 d a a a a a d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a b
        b a a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 6 6 6 6 6 d d d a a a a a a a a a a a a a d 6 d a a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a b
        b a a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d a a a a a a a a d 6 6 d a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a a b
        b a a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d a a a a a d 6 6 6 d a a a d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a a a b
        b a a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a a a d 6 6 6 6 d a a d d d d d d d d d d d d d d d d d 6 6 6 6 6 d d d d d d d 6 6 6 6 6 d d d d d d d d d d a a a b a b
        b a a a d d 6 6 6 6 6 d a a a d d d d d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 d 6 6 6 6 6 6 6 6 6 6 6 6 d a a a d d 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a a a a a a a b b b b
        b a a a d d 6 6 6 6 6 d d d d 6 6 6 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 d d d 6 6 6 6 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a a a a a a a a b a b
        b a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 d a a d d d d 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 d a a a a a a d d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a a a a a a a a a a b
        b a a a d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a a d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 d a a d d 6 6 6 6 6 d a a a a a a a d 6 6 6 6 6 d a a b d d 6 6 6 6 6 d a a a a d d 6 6 6 6 6 d a a a a a a a a a a a a a a b
        b a c a d d 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d a c d d 6 6 6 6 6 d a c a c a c a d 6 6 6 6 6 d a c a d d 6 6 6 6 6 d c a c a d d 6 6 6 6 6 d c a c a c d d 6 6 6 6 6 d a d a c a c a d 6 6 6 6 d c a d d 6 6 6 6 6 d c a c a c a c d 6 6 6 6 6 d c a a d d 6 6 6 6 6 d a c a c d d 6 6 6 6 6 d a c a c a c a c a c a c a c b
        b c c c d d 6 6 6 6 6 d d d d d d d d c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c d d 6 6 6 6 6 d c c c d d d d d 6 6 6 6 d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c d d 6 6 6 6 6 d d d d 6 6 6 6 6 6 6 6 6 d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c d 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c d 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c d 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 6 d c c c c c d 7 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 d d d d d 7 7 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c a c c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 d d d d d d d d c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d a a a c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d b d a a c c c c c c c a c c b
        b c c c d d 7 7 7 7 7 d c c c c c c a c c c c c c c c d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d a a a c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c a c c c c c c c c c c c c b
        b c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c c c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c c d d 6 6 6 6 6 d c c c c c c c d 6 6 6 6 6 d c c c d d 6 6 6 6 6 d c c c c d d 6 6 6 6 6 d c c c c c c c c c c c c c c b
        b c c c d d d d d d d d c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d c c c c c c d d d d d d d d c c c c d d d d d d d d c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c d 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c d 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 d c c c c c d 7 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 d d d d d 7 7 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c c c c d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c c c c c d d 7 7 7 7 7 d c c c c d d 7 7 7 7 7 d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d c c c c c c c c c c c c c c c c c a d d d d d d d d d d d d d d d d c c c c c c d d d d d d d d c c c c d d d d d d d d c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c d c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c a c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a b b b b a b a a b b b b b b b a a b a c a c a a a c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c a a d a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a b d b a b a a b a a b a b a a a b b b b a a a a a c c c c c a a c c c c c c c c c c a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c b
        b c c c a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a 3 b d b b d b b b b a a a a a d b b b b b b b a a a a a a a a a b d b b c c c c c c c a b b a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a c c c c c c c c c b
        b c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a b d d d d a b a b a a b b b 3 b b b b b b b b b a a a a a d b b d d b a a c c c c a b b b d a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c a b b a a a a b d d d d d d b b a b b a d d d d b d b b b b b a a a b a a a a a a b b d d b b a a c c a b b a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a b a c c c c c c c c c c c b b a a a a b b b b b b d d d b b b a b d b b d d b b d d d b b b a b b b a a a b b b b a b b b b b b a c a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a b b b a c c c c c c c c d d b b a a b b a a a a b b 3 b b d d d d d b b b 3 b b b b b b b b b b a a b b a b a b a 3 d b b b b b b b b a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
        b c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c a b b b a c c c c c c d d d d b b b b a a a a a a a a a b b d b a b b b b b b b b b b b 3 b a b b a b a a a a a b b b d d d b b b b b b b b a c c c c c c c c c c c c c c c c c a c c c c c c c c c c c c c c c c c c c c c c c c c c c c b
    `;
    export const instructions = img`
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c
        c c c c a 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a c c c c
        c c c c a 5 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 c c 5 5 c 5 5 5 5 5 5 c 5 5 c c c c c c 5 5 c c c c c c c c 5 5 5 5 5 5 c 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 5 5 c 5 5 5 5 5 5 c 5 5 c c c c c 5 5 5 5 5 5 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 c c 5 5 c 5 5 5 5 5 5 c 5 5 c c c c c c 5 5 c c c c c c c c 5 5 5 5 5 5 c 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 5 5 c 5 5 5 5 5 5 c 5 5 c c c c c 5 5 5 5 5 5 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 c c 5 5 c 5 5 c c 5 5 c 5 5 c c c c c c 5 5 c c c c c c c c c c 5 5 c c c 5 5 c c 5 5 c c c c c c c c 5 5 c c c c c 5 5 c c 5 5 c 5 5 c c c c c 5 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 c c 5 5 c 5 5 c c 5 5 c 5 5 c c c c c c 5 5 c c c c c c c c c c 5 5 c c c 5 5 c c 5 5 c c c c c c c c 5 5 c c c c c 5 5 c c 5 5 c 5 5 c c c c c 5 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 5 5 5 5 c 5 5 c c 5 5 c 5 5 c c c c c c 5 5 c c c c c c c c c c 5 5 c c c 5 5 c c 5 5 c c c c c c c c 5 5 c c c c c 5 5 c c 5 5 c 5 5 c c c c c 5 5 5 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 5 5 5 5 c 5 5 c c 5 5 c 5 5 c c c c c c 5 5 c c c c c c c c c c 5 5 c c c 5 5 c c 5 5 c c c c c c c c 5 5 c c c c c 5 5 c c 5 5 c 5 5 c c c c c 5 5 5 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 c c 5 5 c 5 5 c c 5 5 c 5 5 c c 5 5 c c 5 5 c c c c c c c c c c 5 5 c c c 5 5 c c 5 5 c c c c c c c c 5 5 c c 5 5 c 5 5 c c 5 5 c 5 5 c c c c c 5 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 c c 5 5 c 5 5 c c 5 5 c 5 5 c c 5 5 c c 5 5 c c c c c c c c c c 5 5 c c c 5 5 c c 5 5 c c c c c c c c 5 5 c c 5 5 c 5 5 c c 5 5 c 5 5 c c c c c 5 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 c c 5 5 c 5 5 5 5 5 5 c c c 5 5 c c 5 5 c c c c c c c c c c c c 5 5 c c c 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 5 5 c 5 5 5 5 5 5 c 5 5 5 5 5 5 c 5 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 5 5 c c 5 5 c 5 5 5 5 5 5 c c c 5 5 c c 5 5 c c c c c c c c c c c c 5 5 c c c 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 5 5 c 5 5 5 5 5 5 c 5 5 5 5 5 5 c 5 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 c c 1 1 c c c 1 1 1 1 1 c 1 c 1 1 c 1 1 c c c 1 c c c c c 1 1 1 1 1 1 1 c c 1 1 c 1 1 c 1 1 c c 1 1 c 1 1 1 1 c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 c 1 1 c 1 c 1 1 c 1 1 1 1 c 1 c 1 1 c 1 c 1 1 1 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c 1 c c 1 c 1 c 1 1 1 1 c 1 1 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c 1 c 1 1 c 1 1 1 1 c 1 c 1 1 c 1 1 c c 1 1 1 1 c 1 1 1 1 1 1 1 1 c c c c 1 c 1 c c 1 c 1 c c 1 c 1 1 1 1 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 c 1 1 c 1 c 1 1 c 1 c 1 1 c 1 c 1 1 c 1 1 1 1 c 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c 1 c 1 1 c 1 c 1 1 c 1 c 1 1 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 c 1 1 c 1 c c c 1 1 1 c c 1 1 1 c c 1 1 c c c 1 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c 1 c 1 1 c 1 1 c c 1 1 c c c c 1 c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 1 5 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c 1 5 c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c 1 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c 1 5 c c c c 1 1 1 1 1 1 1 1 1 1 c c c 1 c c c c 1 c c c c c 1 1 1 1 1 1 c c c 1 1 c c c 1 c c c 1 1 c c c c 1 1 c c 1 1 c c c c c 1 c c c 1 1 c c 1 1 c 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c 1 5 c c c c c 1 1 1 1 1 1 1 1 c 1 1 1 1 c 1 1 1 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c 1 1 c 1 1 c 1 1 c 1 c 1 1 1 1 c 1 1 c 1 1 1 c 1 1 1 1 c 1 1 c 1 1 c 1 c c 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c 1 5 c c c c c c 1 1 1 1 1 1 1 1 c c 1 1 c c c 1 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c 1 1 c 1 1 c c c 1 1 c c c 1 1 c 1 1 1 1 1 1 c 1 1 1 1 c 1 1 c 1 1 c 1 c 1 c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c 1 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 c 1 c 1 1 1 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c 1 1 c 1 1 c 1 c 1 1 c 1 1 1 1 c 1 1 c 1 1 1 c 1 1 1 1 c 1 1 c 1 1 c 1 c 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c 1 5 c c c c 1 1 1 1 1 1 1 1 1 c c c 1 1 c c c c 1 1 1 c 1 1 1 1 1 1 1 1 c c c 1 1 c c c 1 c 1 1 c 1 c c c c 1 1 c c 1 1 1 1 c 1 1 1 c c c 1 1 c c 1 1 c 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 1 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c 1 5 c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c 1 5 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 5 5 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c 5 c 5 c c c c 1 1 1 1 1 1 1 1 1 c c c 1 c c c c 1 c c c c c 1 1 1 1 1 1 c c c 1 1 1 c c 1 1 c 1 1 1 c 1 c c c c 1 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 5 c c c 5 c c c 1 1 1 1 1 1 1 1 c 1 1 1 1 c 1 1 1 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c 1 c 1 1 c 1 c 1 1 1 c 1 c 1 1 1 1 c 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 5 5 5 5 5 c c c 1 1 1 1 1 1 1 1 1 c c 1 1 c c c 1 1 1 1 c 1 1 1 1 1 1 1 1 c c c 1 1 c 1 1 c 1 c 1 c 1 c 1 c c c 1 1 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c 5 c c c c c 5 c c 1 1 1 1 1 1 1 1 1 1 1 c 1 c 1 1 1 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 1 1 c 1 1 c 1 c c 1 c c 1 c 1 1 1 1 c 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c 5 c c c c c 5 c c 1 1 1 1 1 1 1 1 c c c 1 1 c c c c 1 1 1 c 1 1 1 1 1 1 1 1 c 1 1 1 1 1 c c 1 1 c 1 1 1 c 1 c c c c 1 c 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 c c c c c c c 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 c c c c c 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c 5 5 5 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 5 c c c 5 c c c 1 1 1 1 1 1 1 1 c 1 1 1 c 1 c c c 1 c c c c 1 c 1 1 1 c 1 1 1 1 1 1 c 1 1 1 c 1 1 c c 1 1 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 5 c c c 5 c c c 1 1 1 1 1 1 1 1 c 1 1 1 c 1 1 c 1 1 c 1 1 1 1 c 1 1 1 c 1 1 1 1 1 1 c c 1 c c 1 c 1 1 c 1 c 1 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 5 5 5 5 c c c c 1 1 1 1 1 1 1 1 1 c 1 c 1 1 1 c 1 1 c c c 1 1 c 1 c 1 c 1 1 1 1 1 1 c 1 c 1 c 1 c c c c 1 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 5 c c c 5 c c c 1 1 1 1 1 1 1 1 1 c 1 c 1 1 1 c 1 1 c 1 1 1 1 c c 1 c c 1 1 1 1 1 1 c 1 1 1 c 1 c 1 1 c 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 c c c 5 c c c 5 c c c 1 1 1 1 1 1 1 1 1 1 c 1 1 1 c c c 1 c c c c 1 c 1 1 1 c 1 1 1 1 1 1 c 1 1 1 c 1 c 1 1 c 1 c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 c c 5 5 5 5 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 c c c c c c c 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 c c c c c 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 5 a c c c c
        c c c c a 5 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 5 a c c c c
        c c c c a 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a c c c c
        c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    `
    export const levelOne_bg = img`
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `
    export const levelTwo_bg = img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    `
}

namespace customPalettes {
    export const titlePalette = hex`000000
    d7baf5
    55139b
    350583
    40028c
    490493
    34e24e
    77ff8c
    5b1c9b
    6624a8
    836ff2
    b189d3
    55139b
    ffffff
    a076cb
    77ff8c`
    export const inGamePalette = hex`000000
    ffffff
    ff2121
    ffd982
    fc922f
    fcc92f
    34e24e
    77ff8c
    c9ffd1
    bc1c7c
    d1d1d1
    efefef
    716a75
    961c96
    531a68
    000000`
}

namespace level {
    export class Layout {
        // The background color for the mini map
        public mapBackgroundColor: number;

        // The type is the index of the tilemap that should be rendered on the mini map.
        // This can exclude things like stars/clouds. The color is the single pixel color
        // that is used in the map to show the usually 16x16 tile. This can be different than
        // the index used in the tilemap, and multiple maptiles can have the same color.
        public mapTilesToRender: Array<{ type: number, color: number }>;

        // This represents the index of the goal/hole(s) of the map. Note, if we decide to stop
        // using the tilemap to track the hole and want to use a sprite instead, then we would
        // need to change the map code.
        public holeIndex: number;

        // These are the width and height of the tilemap used for this level. Used to center the map
        // on the screen, and possibly to scale the map to the size of the screen.
        public height: number;
        public width: number;

        // The tile where the golfer will be placed when starting the level
        private startTileX: number;
        private startTileY: number;

        constructor(startTileX: number, startTileY: number) {
            this.startTileX = startTileX;
            this.startTileY = startTileY;
        }

        public getStartingBallPosition(): { x: number, y: number } {
            // Ball size is 4x4, so for setPosition we need center, so add 2 to both x & y
            // we want the ball at the bottom of the tile asked, so we add 16 and then subtract 2 given ball size
            return { x: (this.startTileX << 4) + 2, y: (this.startTileY << 4) + 14 };
        }
    }

    export function showMap(ballLocationX: number, ballLocationY: number, layout: level.Layout): void {
        const map = image.create(scene.screenWidth(), scene.screenHeight());

        const scale = Math.floor(Math.min(scene.screenWidth() / layout.width, scene.screenHeight() / layout.height));

        const offsetX = (scene.screenWidth() - layout.width * scale) / 2;
        const offsetY = (scene.screenHeight() - layout.height * scale) / 2;

        map.fillRect(offsetX, offsetY, layout.width * scale, layout.height * scale, 14);

        for (let mapTile of layout.mapTilesToRender) {
            const tiles = scene.getTilesByType(mapTile.type);

            for (let tile of tiles) {
                const x = ((tile.x - 8) >> 4) * scale + offsetX;
                const y = ((tile.y - 8) >> 4) * scale + offsetY;

                for (let row = y; row < y + scale; row++) {
                    for (let col = x; col < x + scale; col++) {
                        map.setPixel(col, row, mapTile.color);
                    }
                }
            }
        }

        const flags = scene.getTilesByType(layout.holeIndex);
        const flagPositions = [];

        for (let flag of flags) {
            const x = ((flag.x - 8) >> 4) * scale + offsetX + scale / 2;
            const y = ((flag.y - 8) >> 4) * scale + offsetY + scale / 2;

            flagPositions.push({ x: x, y: y });
        }

        game.pushScene();

        const smallFlag = sprites.create(img`
            . . 2 1
            . 2 2 1
            2 2 2 1
            2 2 2 1
            . 2 2 1
            . . 2 1
            . . . 1
            . . . 1
        `);

        for (let flagPosition of flagPositions) {
            smallFlag.setPosition(flagPosition.x, flagPosition.y);
        }

        const smallGolfer = sprites.create(img`
            . 1 1 .
            1 f f 1
            1 f f 1
            . 1 1 .
            . 2 2 .
            1 1 1 1
            . 1 1 .
            1 . . 1
        `);

        const golferLocationX = (ballLocationX >> 4) * scale + offsetX + scale / 2;
        const golferLocationY = (ballLocationY >> 4) * scale + offsetY + scale / 2;

        smallGolfer.setPosition(golferLocationX, golferLocationY);

        scene.setBackgroundImage(map);

        controller.pauseUntilAnyButtonIsPressed();

        smallFlag.destroy();
        smallGolfer.destroy();

        game.popScene();
    }

    function setupScene(): void {
        scene.setBackgroundImage(customImages.levelTwo_bg);
        scene.setTile(1, customArt.stars, false);
        scene.setTile(2, customArt.ufo, true);
        scene.setTile(3, customArt.black_hole_center, true);
        scene.setTile(4, customArt.black_hole_up, false);
        scene.setTile(5, customArt.black_hole_down, false);
        scene.setTile(6, customArt.black_hole_left, false);
        scene.setTile(7, customArt.black_hole_right, false);
        scene.setTile(8, customArt.floor_inner, true);
        scene.setTile(9, customArt.meteor_front, true);
        scene.setTile(10, customArt.meteor_middle, true);
        scene.setTile(11, customArt.meteor_back, true);
        scene.setTile(12, customArt.satellite_top, true);
        scene.setTile(13, customArt.satellite_front, true);
        scene.setTile(14, customArt.satellite_middle, true);
        scene.setTile(15, customArt.satellite_back, true);
    }

    function loadLevelOne(): level.Layout {
        setupScene();
        scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . .
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . .
            . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . .
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . .
            . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 3 7 . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        `)

        const layout = new level.Layout(1, 22);

        layout.height = 24;
        layout.width = 64;
        layout.holeIndex = 3;
        layout.mapTilesToRender = [
            { type: 7, color: 7 },
            { type: 8, color: 5 },
            { type: 9, color: 5 },
            { type: 10, color: 5 },
            { type: 11, color: 5 },
            { type: 12, color: 10 },
            { type: 13, color: 10 },
            { type: 14, color: 10 },
            { type: 15, color: 10 },
        ];

        return layout;
    }

    function loadLevelTwo(): level.Layout {
        setupScene();
        scene.setTileMap(img`
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . .
            . . . 1 . . . . . . . . . . . . . . . . . . . . . . 4 . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . 6 3 7 . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . . . .
            . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . .
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . .
            . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . b a a 9 . . .
            . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . 8
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 8 8
            . . . . . 8 8 8 . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
            . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        `)

        const layout = new level.Layout(1, 25);

        layout.height = 27;
        layout.width = 32;
        layout.holeIndex = 3;
        layout.mapTilesToRender = [
            { type: 7, color: 7 },
            { type: 8, color: 5 },
            { type: 9, color: 5 },
            { type: 10, color: 5 },
            { type: 11, color: 5 },
            { type: 12, color: 10 },
            { type: 13, color: 10 },
            { type: 14, color: 10 },
            { type: 15, color: 10 },
        ];

        return layout;
    }

    function loadLevelThree(): level.Layout {
        setupScene();
        scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . 4 . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            6 3 7 . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . .
            . 5 . . 1 . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . 1 . . . . . 2 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . .
            . . . . . . . . . . 1 . . . . . . . . . . . c . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . .
            . . . 1 . . . . . . . . . . . . . . . . . . d e f . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . b a a a 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . c . . . . . . . . . . . . . . . . . . . 2 . . . . . . .
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . d e e e f . . . 1 . . . . . . . . . . . . . . . . . . . . .
            . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . b a a 9 . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . .
            . . . c . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . . . d e e f . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . .
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . c . . .
            . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . d e e e f . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . b a a a a a 9 . . . . . . 1 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . .
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . .
            . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . b a a 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . .
            . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 .
            . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . .
            . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . c . . . . . . . . . . . . . . . . . . . . . . . .
            . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d e e e e e f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8
            . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 . 8 8 8 8
            . . . . . 8 8 8 . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
            . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        `)

        const layout = new level.Layout(1, 54);

        layout.height = 56;
        layout.width = 64;
        layout.holeIndex = 3;
        layout.mapTilesToRender = [
            { type: 7, color: 7 },
            { type: 8, color: 5 },
            { type: 9, color: 5 },
            { type: 10, color: 5 },
            { type: 11, color: 5 },
            { type: 12, color: 10 },
            { type: 13, color: 10 },
            { type: 14, color: 10 },
            { type: 15, color: 10 },
        ];

        return layout;
    }


    export function loadLevel(index: number): level.Layout {
        switch (index) {
            case 1: return loadLevelOne();
            case 2: return loadLevelTwo();
            case 3: return loadLevelThree();
        }

        return null;
    }

    export const MAX_LEVEL = 3;
}


/*
   Animation library for sprites
*/
namespace animation {
    let onAnimationUpdate: (() => void)[] = null;
    let onSpriteUpdate: (() => void)[] = null;

    // Only a single animation is active within an AnimationGroup at a time.
    // This allows transitioning from animations smoothly, resetting each to its initial
    // frame before starting.
    export class SpriteAnimationGroup {
        private activeAnimationIndex: number;
        private animations: Animation[];
        private _sprite: Sprite;

        constructor() {
            this.init();
            this.animations = [];
            this.activeAnimationIndex = -1;
        }

        public get activeAnimation(): Animation {
            return this.animations[this.activeAnimationIndex];
        }

        public get sprite(): Sprite {
            return this._sprite;
        }

        public set sprite(sprite: Sprite) {
            this._sprite = sprite;
        }

        /**
         * Adds an animation to the group and returns the active animation index to set to start the animation
         */
        public addAnimation(animation: Animation): number {
            this.animations.push(animation);
            return this.animations.length - 1;
        }

        /**
         * Sets the active animation and resets that animation to its initial frame. Allows
         * passing in a callback that gets invoked any time the frame of the animation changes to
         * allow coordination between sprites.
         */
        public setActiveAnimation(animationIndex: number, frameChangeCallback: (frame: number) => void = null): void {
            this.activeAnimationIndex = animationIndex;
            this.activeAnimation.reset(frameChangeCallback);
        }

        public stopActiveAnimation(): void {
            this.activeAnimationIndex = -1;
        }

        public update(): void {
            if (this.activeAnimationIndex < 0) {
                return;
            }

            let newImage = this.activeAnimation.image;

            if (this._sprite.image !== newImage) {
                this._sprite.setImage(newImage)
            }
        }

        private init(): void {
            if (!onAnimationUpdate) {
                onAnimationUpdate = [];
                game.eventContext().registerFrameHandler(15, () => {
                    onAnimationUpdate.forEach(element => {
                        element();
                    });
                });
            }

            onAnimationUpdate.push(() => this.activeAnimationIndex > -1 && this.activeAnimation.update());
        }
    }

    export class Animation {
        private animationComplete: boolean;
        private frameChangeCallback: (frame: number) => void;
        private frames: Image[];
        private lastTime: number;
        private loop: boolean;

        // property backing fields
        private _index: number;
        private _interval: number;

        constructor(interval: number, loop: boolean = true) {
            this.reset();
            this._interval = interval;
            this.frames = [];
            this.loop = loop;
        }

        public get image(): Image {
            return this.frames[this._index];
        }

        public get interval(): number {
            return this._interval;
        }

        public set interval(interval: number) {
            this._interval = interval;
        }

        public get index(): number {
            return this._index;
        }

        /**
         * Add an image frame to an animation
        */
        public addAnimationFrame(frame: Image): void {
            this.frames.push(frame);
        }

        public reset(frameChangeCallback: (frame: number) => void = null): void {
            this.frameChangeCallback = frameChangeCallback;
            this._index = -1;
            this.lastTime = control.millis();
            this.animationComplete = false;
        }

        public update(): void {
            if (this.animationComplete) {
                return;
            }

            let currentTime = control.millis();
            let dt = currentTime - this.lastTime;

            if (dt >= this.interval && this.frames.length) {
                this._index++;

                if (!this.loop && this.frames.length > 1 && this._index === this.frames.length) {
                    this.animationComplete = true;
                    return;
                }

                this._index = this._index % this.frames.length;
                this.frameChangeCallback && this.frameChangeCallback(this._index);
                this.lastTime = currentTime;
            }
        }
    }

    /**
     * Attach an animation group to a sprite
     */
    export function attachAnimation(sprite: Sprite, group: SpriteAnimationGroup) {
        if (!onSpriteUpdate) {
            // First attach register the update call back.
            // Priority 16 is slightly lower than 15 for animation update loop.
            // This is allow the animation to complete, so we have the new display ready to go.
            onSpriteUpdate = [];

            game.eventContext().registerFrameHandler(16, () => {
                onSpriteUpdate.forEach(element => {
                    element();
                });
            });
        }

        group.sprite = sprite;

        onSpriteUpdate.push(() => group.update());
    }
}

class DirectionIndicator {
    private color: number;
    private image: Image;
    private midpoint: number;
    private pointerSize: number;
    private points: Array<{ x: number, y: number }>;
    private size: number;
    private sprite: Sprite;

    constructor(size: number, pointerSize: number, color: number) {
        this.size = size;
        this.midpoint = this.size / 2;
        this.pointerSize = pointerSize;
        this.color = color;
        this.image = image.create(this.size, this.size);

        this.points = [
            { x: -this.midpoint, y: 0 },
            { x: -this.midpoint + this.pointerSize, y: this.pointerSize },
            { x: -this.midpoint + this.pointerSize, y: -this.pointerSize }
        ];
    }

    public hide(): void {
        this.sprite.destroy();
    }

    public rotate(degrees: number): void {
        const radians = angle * Math.PI / 180;
        let x, y;
        const rotatedPoints = [];

        for (let localPoint of this.points) {
            // rotate points
            x = localPoint.x * Math.cos(radians) - localPoint.y * Math.sin(radians);
            y = localPoint.y * Math.cos(radians) + localPoint.x * Math.sin(radians);

            // translate into image coordinates
            x += this.midpoint;
            y += this.midpoint;

            rotatedPoints.push({ x: x, y: y });
        }

        this.image.fill(0);

        // Draw the 4 lines of the direction indicator
        this.image.drawLine(this.midpoint, this.midpoint, rotatedPoints[1].x, rotatedPoints[1].y, this.color);
        this.image.drawLine(this.midpoint, this.midpoint, rotatedPoints[2].x, rotatedPoints[2].y, this.color);
        this.image.drawLine(rotatedPoints[1].x, rotatedPoints[1].y, rotatedPoints[0].x, rotatedPoints[0].y, this.color);
        this.image.drawLine(rotatedPoints[2].x, rotatedPoints[2].y, rotatedPoints[0].x, rotatedPoints[0].y, this.color);
    }

    public show(x: number, y: number): void {
        this.sprite = sprites.create(this.image);
        this.sprite.z = 2;
        this.sprite.setPosition(x, y);
    }
}
enum GolferOrientation {
    Left,
    Right
}

class Golfer {
    private leftStandingFrame: Image = null;
    private rightStandingFrame: Image = null;
    private sprite: Sprite = null;
    private spriteAnimations: animation.SpriteAnimationGroup = null;
    private swingingLeftAnimationIndex: number = -1;
    private swingingRightAnimationIndex: number = -1;

    // Backing fields for properties
    private _orientation: GolferOrientation = GolferOrientation.Right;

    constructor() {
        const frameRight1 = img`
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 1 c c c . . . . .
            . . . . c c 1 1 1 c c c c c c 1 1 1 c c . . . .
            . . . c c 1 1 c c c c c c c c c c 1 1 c c . . .
            . . . c 1 1 c c c 1 c c c c c c c c 1 1 c . . .
            . . c c 1 c c c 1 1 c c c c c c c c c 1 c c . .
            . . c 1 c c c 1 1 c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . . c c 1 c c c c c c c c c c c c c c c 1 c . .
            . . . c 1 c c c c c c c c c c c c c c 1 c . . .
            . . . c c 1 1 c c c c c c c c c c 1 1 c c . . .
            . . . . c c 1 1 1 c c c c c c 1 1 1 c c . . . .
            . . . . . c c b 1 1 1 1 1 1 1 1 1 c c . . . . .
            . . . . . . c c c c 1 1 1 1 c c c c . . . . . .
            . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 1 1 c c . . . . .
            . . . . . c 1 1 1 1 1 1 1 1 1 1 1 1 c . . . . .
            . . . . c c 1 1 1 1 1 1 1 1 1 1 1 1 c c . . . .
            . . . . c 1 c 1 1 1 1 1 1 1 1 1 1 c 1 c . . . .
            . . . . c 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c . . . .
            . . . . . c 1 c c 1 1 1 1 1 1 c c 1 c . . . . .
            . . . . . . c c 1 c 1 f 1 c c 1 c c . . . . . .
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . . . c 1 c c c c c 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 f c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 f c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 c f . c 1 1 c . . . . . . .
            . . . . . . . c 1 1 c f . c 1 1 c . . . . . . .
            . . . . . . c c 1 c . f . . c 1 c c . . . . . .
            . . . . . . c 1 1 f f f . . c 1 1 c . . . . . .
        `;

        const frameRight2 = img`
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 1 c c c . . . . .
            . . . . c c 1 1 1 c c c c c c 1 1 1 c c . . . .
            . . . c c 1 1 c c c c c c c c c c 1 1 c c . . .
            . . . c 1 1 c c c 1 c c c c c c c c 1 1 c . . .
            . . c c 1 c c c 1 1 c c c c c c c c c 1 c c . .
            . . c 1 c c c 1 1 c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . . c c 1 c c c c c c c c c c c c c c c 1 c . .
            . . . c 1 c c c c c c c c c c c c c c 1 c . . .
            . . . c c 1 1 c c c c c c c c c c 1 1 c c . . .
            . . . . c c 1 1 1 c c c c c c 1 1 1 c c . . . .
            . . . . . c c 1 1 1 1 1 1 1 1 1 1 c c . . . . .
            . . . . . . c c c c 1 1 1 1 c c c c . . . . . .
            . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 1 1 c c . . . . .
            . . . . . c 1 1 c 1 1 1 1 1 1 1 c 1 c . . . . .
            . . . . . c c 1 1 c 1 1 1 1 1 c 1 1 c . . . . .
            . . . . . . c c 1 1 c 1 1 1 c 1 1 c . . . . . .
            . . . . . . . c c 1 1 c 1 c 1 1 c . . . . . . .
            . . . . . . . c 1 c 1 1 c 1 1 c c . . . . . . .
            . f f f f f f f f f c c c c c 1 c . . . . . . .
            . f . . . . . c c c c c c c c c c . . . . . . .
            . . . . . . . c 1 c c 1 1 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 c c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 c c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 c . . c 1 1 c . . . . . . .
            . . . . . . . c 1 1 c . . c 1 1 c . . . . . . .
            . . . . . . c c 1 c . . . . c 1 c c . . . . . .
            . . . . . . c 1 1 c . . . . c 1 1 c . . . . . .
        `
        const frameRight3 = img`
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 1 c c c . . . . .
            . . . . c c 1 1 1 c c c c c c 1 1 1 c c . . . .
            . . . c c 1 1 c c c c c c c c c c 1 1 c c . . .
            . . . c 1 1 c c c 1 c c c c c c c c 1 1 c . . .
            . . c c 1 c c c 1 1 c c c c c c c c c 1 c c . .
            . . c 1 c c c 1 1 c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . . c 1 c c c c c c c c c c c c c c c c 1 c . .
            . f c c 1 c c c c c c c c c c c c c c c 1 c . .
            f . c c 1 c c c c c c c c c c c c c c 1 c . . .
            . f . c c 1 1 c c c c c c c c c c 1 1 c c . . .
            . . f . c c 1 1 1 c c c c c c 1 1 1 c c . . . .
            . . . f . c c 1 1 1 1 1 1 1 1 1 1 c c . . . . .
            . . . . f . c c c c 1 1 1 1 c c c c . . . . . .
            . . . . . f 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . .
            . . . . . c f c 1 1 1 1 1 1 1 1 c c c . . . . .
            . . . . . c 1 c c 1 c c c c c c c 1 c . . . . .
            . . . . . c 1 1 1 c c 1 1 1 1 1 1 1 c . . . . .
            . . . . . . c 1 1 c 1 c c c c c c c . . . . . .
            . . . . . . . c 1 c 1 1 1 1 1 1 c . . . . . . .
            . . . . . . . c c c 1 1 1 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 1 1 1 1 1 c . . . . . . .
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . . . c 1 1 1 1 1 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 c c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 c c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 c . . c 1 1 c . . . . . . .
            . . . . . . . c 1 1 c . . c 1 1 c . . . . . . .
            . . . . . . c c 1 c . . . . c 1 c c . . . . . .
            . . . . . . c 1 1 c . . . . c 1 1 c . . . . . .
        `
        const frameRight4 = img`
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 1 c c c . . . . .
            . . . . c c 1 1 1 c c c c c c 1 1 1 c c . . . .
            . . . c c 1 1 1 c c c 1 c c c c c 1 1 c c . . .
            . . . c 1 1 1 1 c c 1 1 c c c c c c 1 1 c . . .
            . . c c 1 1 1 1 c 1 1 c c c c c c c c 1 c c . .
            . . c 1 1 1 1 1 c c c c c c c c c c c c 1 c . .
            . . c 1 1 1 1 1 c c c c c c c c c c c c 1 c . .
            . . c 1 1 1 1 1 c c c c c c c c c c c c 1 c . .
            . . c 1 1 1 1 1 c c c c c c c c c c c c 1 c . .
            . . c c 1 1 1 1 c c c c c c c c c c c c 1 c . .
            . . . c 1 1 1 1 c c c c c c c c c c c 1 c . . .
            . . . c c 1 1 1 c c c c c c c c c 1 1 c c . . .
            . . . . c c 1 1 1 c c c c c c 1 1 1 c c . . . .
            . . . . . c c 1 1 1 1 1 1 1 1 1 1 c c . . . . .
            . . . . . . c c c c 1 1 1 1 c c c c . . . . . .
            . . . . . . 2 2 2 2 2 2 2 2 2 2 c c c . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 1 c c c . . . . .
            . . . . . c 1 1 c 1 1 1 1 1 1 1 c 1 c . . . . .
            . . . . . c c 1 1 c 1 1 1 1 1 c 1 1 c . . . . .
            . . . . . . c c 1 1 c 1 1 1 c 1 1 c . . . . . .
            . . . . . . . c c 1 1 c 1 c 1 1 c . . . . . . .
            . . . . . . . c 1 c 1 1 c 1 1 c c . . . . . . f
            . . . . . . . c 1 1 c c f f f f f f f f f f f f
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . . . c 1 c c 1 1 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 c c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 c c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 c . . c 1 1 c . . . . . . .
            . . . . . . . c 1 1 c . . c 1 1 c . . . . . . .
            . . . . . . . c 1 c . . . . c 1 c c . . . . . .
            . . . . . . . c 1 c . . . . c 1 1 c . . . . . .
        `
        const frameRight5 = img`
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 1 c c c . . . . .
            . . . . c c 1 1 1 1 1 c c c c 1 1 1 c c . . . .
            . . . c c 1 1 1 1 1 1 c c 1 c c c 1 1 c c . . .
            . . . c 1 1 1 1 1 1 1 c 1 c c c c c 1 1 c . . .
            . . c c 1 1 1 1 1 1 1 c c c c c c c c 1 c c . .
            . . c 1 1 1 1 1 1 1 1 c c c c c c c c c 1 c . .
            . . c 1 1 1 1 1 1 1 1 c c c c c c c c c 1 c . .
            . . c 1 1 1 1 1 1 1 1 c c c c c c c c c 1 c . .
            . . c 1 1 1 1 1 1 1 1 c c c c c c c c c 1 f . .
            . . c c 1 1 1 1 1 1 1 c c c c c c c c c 1 c f .
            . . . c 1 1 1 1 1 1 1 c c c c c c c c 1 c f . .
            . . . c c 1 1 1 1 1 1 c c c c c c 1 1 c f . . .
            . . . . c c 1 1 1 1 1 c c c c 1 1 1 c f . . . .
            . . . . . c c 1 1 1 1 1 1 1 1 1 1 c f . . . . .
            . . . . . . c c c c 1 1 1 1 c c c f . . . . . .
            . . . . . . 2 2 2 2 2 2 2 2 2 2 f c . . . . . .
            . . . . . c c c 1 1 1 1 1 1 1 f 1 c c . . . . .
            . . . . . c 1 c c c c c c c f 1 1 1 c . . . . .
            . . . . . c 1 1 1 1 1 1 1 c c 1 1 1 c . . . . .
            . . . . . . c c c c c c c 1 c 1 1 c . . . . . .
            . . . . . . . c 1 1 1 1 1 1 c 1 c . . . . . . .
            . . . . . . . c 1 1 1 1 1 1 c c c . . . . . . .
            . . . . . . . c 1 1 1 1 1 1 1 1 c . . . . . . .
            . . . . . . . c c c c c c c c c c . . . . . . .
            . . . . . . . c 1 c c 1 1 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 c c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 1 c c 1 1 1 c . . . . . . .
            . . . . . . . c 1 1 c . . c 1 1 c . . . . . . .
            . . . . . . . c 1 1 c . . c 1 1 c . . . . . . .
            . . . . . . . c 1 c . . . . c 1 c c . . . . . .
            . . . . . . . c 1 c . . . . c 1 1 c . . . . . .
        `

        const swingingRight = new animation.Animation(100, false);
        swingingRight.addAnimationFrame(frameRight1);
        swingingRight.addAnimationFrame(frameRight2);
        swingingRight.addAnimationFrame(frameRight3);
        swingingRight.addAnimationFrame(frameRight2);
        swingingRight.addAnimationFrame(frameRight1);
        swingingRight.addAnimationFrame(frameRight4);
        swingingRight.addAnimationFrame(frameRight5);
        this.spriteAnimations = new animation.SpriteAnimationGroup();
        this.swingingRightAnimationIndex = this.spriteAnimations.addAnimation(swingingRight);

        const frameLeft1 = frameRight1.clone();
        const frameLeft2 = frameRight2.clone();
        const frameLeft3 = frameRight3.clone();
        const frameLeft4 = frameRight4.clone();
        const frameLeft5 = frameRight5.clone();
        frameLeft1.flipX();
        frameLeft2.flipX();
        frameLeft3.flipX();
        frameLeft4.flipX();
        frameLeft5.flipX();
        const swingingLeft = new animation.Animation(100, false);
        swingingLeft.addAnimationFrame(frameLeft1);
        swingingLeft.addAnimationFrame(frameLeft2);
        swingingLeft.addAnimationFrame(frameLeft3);
        swingingLeft.addAnimationFrame(frameLeft2);
        swingingLeft.addAnimationFrame(frameLeft1);
        swingingLeft.addAnimationFrame(frameLeft4);
        swingingLeft.addAnimationFrame(frameLeft5);
        this.swingingLeftAnimationIndex = this.spriteAnimations.addAnimation(swingingLeft);

        this.leftStandingFrame = frameLeft1;
        this.rightStandingFrame = frameRight1;

        this.sprite = sprites.create(this.rightStandingFrame, SpriteKind.Player);
        this.sprite.setFlag(SpriteFlag.Ghost, true);
        animation.attachAnimation(this.sprite, this.spriteAnimations);
    }

    public get bottom(): number {
        return this.sprite.bottom;
    }

    public set bottom(value: number) {
        this.sprite.bottom = value;
    }

    public get left(): number {
        return this.sprite.left;
    }

    public set left(value: number) {
        this.sprite.left = value;
    }

    public get right(): number {
        return this.sprite.right;
    }

    public set right(value: number) {
        this.sprite.right = value;
    }

    public get top(): number {
        return this.sprite.top;
    }

    public set top(value: number) {
        this.sprite.top = value;
    }

    public get orientation() {
        return this._orientation;
    }

    public set orientation(value: GolferOrientation) {
        if (value !== this._orientation) {
            this._orientation = value;
            const standingImage: Image = value === GolferOrientation.Left ? this.leftStandingFrame : this.rightStandingFrame;
            this.sprite.setImage(standingImage);
        }
    }

    public setPosition(x: number, y: number): void {
        this.sprite.setPosition(x, y);
        this.spriteAnimations.stopActiveAnimation();
        const standingImage: Image = this.orientation === GolferOrientation.Left ? this.leftStandingFrame : this.rightStandingFrame;
        this.sprite.setImage(standingImage);
    }

    public swing(hitBallCallback: () => void) {
        const animationIndex = this.orientation === GolferOrientation.Left ? this.swingingLeftAnimationIndex : this.swingingRightAnimationIndex;
        this.spriteAnimations.setActiveAnimation(animationIndex, (frame) => frame === 4 && hitBallCallback());
    }

    public say(text: string, timeOnScreen: number): void {
        this.sprite.say(text, timeOnScreen)
    }
}

class PowerMeter {
    private image: Image;
    private width: number;
    private height: number;
    private fillColor: number;
    private outlineColor: number;
    private power: number;
    private powerIncrement: number;
    private sprite: Sprite;

    // property backing fields
    private _isRunning: boolean;

    constructor(width: number, height: number, outlineColor: number, fillColor: number) {
        this.width = width;
        this.height = height;
        this.outlineColor = outlineColor;
        this.fillColor = fillColor;
        this._isRunning = false;

        this.image = image.create(width, height);

        game.currentScene().eventContext.registerFrameHandler(20, () => {
            if (this._isRunning) {
                this.power += this.powerIncrement;
                if (this.power === 1 || this.power === width - 1) {
                    this.powerIncrement = -this.powerIncrement;
                }
                this.image.fill(0);
                this.image.drawRect(0, 0, this.width, this.height, this.outlineColor);
                this.image.fillRect(1, 1, this.power, this.height - 2, this.fillColor);
            }
        })
    }

    public get isRunning(): boolean {
        return this._isRunning;
    }

    public start(x: number, y: number): void {
        this.sprite = sprites.create(this.image);
        this.sprite.z = 2;
        this.sprite.setPosition(x, y);

        this._isRunning = true;
        this.power = 1;
        this.powerIncrement = 1;
    }

    public stop(): number {
        this.sprite.destroy();
        this.sprite = null;

        this._isRunning = false;
        return this.power;
    }
}

// A little bit of a hack as we want things to move faster than they would based on the default
// time slices of the ArcadePhysicsEngine, so we override and set it to the max time slice it supports
class GolfPhysicsEngine extends ArcadePhysicsEngine {
    move(dt: number) {
        super.move(0.1);
    }
}

const physicsEngine = new GolfPhysicsEngine();
game.currentScene().physicsEngine = physicsEngine;

namespace SpriteKind {
    export const Goal = SpriteKind.create();
}

let levelInProgress = false;
let angle = 180;

// The number of frames the ball must remain still before moving the golfer
const QUIESCENT_FRAMES_BEFORE_MOVE = 5;

let golfBallSprite: Sprite = null;

const powerMeter = new PowerMeter(32, 8, 15, 4);
const directionIndicator = new DirectionIndicator(48, 2, 4);

let ballInFlight = false;
let swingStarted = false;
let quiescentFrames = 0;
let loadedLevel = 1;

let layout = level.loadLevel(0);
const golfer = new Golfer();
golfer.setPosition(190, 190);

function showSplash(): void {
    image.setPalette(customPalettes.titlePalette);
    scene.setBackgroundImage(customImages.titleScreen);
    waitForInput(false);
}

function showInstructions(): void {
    image.setPalette(customPalettes.inGamePalette);
    scene.setBackgroundImage(customImages.instructions);
    waitForInput(false);
}

function setupLevel(levelToLoad: number): void {
    layout = level.loadLevel(levelToLoad);
    loadedLevel == 1 && info.setScore(0);
    info.setBackgroundColor(13);

    golfBallSprite = sprites.create(img`
        . f .
        f f f
        . f .
    `, SpriteKind.Projectile)

    let startingPosition = layout.getStartingBallPosition();
    golfBallSprite.setPosition(startingPosition.x, startingPosition.y)
    golfBallSprite.z = 1;
    scene.cameraFollowSprite(golfBallSprite);

    golfer.setPosition(golfBallSprite.x - 1, golfBallSprite.y - 14);
    levelInProgress = true;
}

controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
    if (levelInProgress && !ballInFlight && !swingStarted) {
        if (powerMeter.isRunning) {
            directionIndicator.hide();
            let power = powerMeter.stop() * 2.4;
            const radians = angle * Math.PI / 180;

            info.changeScoreBy(1);
            swingStarted = true;

            golfer.swing(() => {
                swingStarted = false;
                ballInFlight = true;
                golfer.say("fore!", 900)
                golfBallSprite.vx = -Math.cos(radians) * power;
                golfBallSprite.vy = -Math.sin(radians) * power;
                golfBallSprite.ay = 9.81;
                golfBallSprite.ax = 0;
            });
        } else {
            directionIndicator.rotate(angle);
            directionIndicator.show(golfBallSprite.x, golfBallSprite.y);
            powerMeter.start(golfBallSprite.x + 3, golfer.top - 8);
        }
    }
});

function waitForInput(resetGame: boolean): void {
    pause(500); // wait for users to stop pressing keys
    game.waitAnyButton();
    resetGame && game.reset();
}

controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
    if (levelInProgress) {
        level.showMap(golfBallSprite.x, golfBallSprite.y, layout);
    }
});

game.currentScene().eventContext.registerFrameHandler(31, () => {
    if (ballInFlight) {
        if (Math.abs(golfBallSprite.vx) < 1 && Math.abs(golfBallSprite.vy) < 1) {
            quiescentFrames++;
        } else {
            quiescentFrames = 0;
        }

        if (quiescentFrames === QUIESCENT_FRAMES_BEFORE_MOVE) {
            quiescentFrames = 0;
            golfBallSprite.vx = 0;
            golfBallSprite.vy = 0;
            golfBallSprite.ay = 0;
            ballInFlight = false;
            golfer.setPosition(golfBallSprite.x - 1, golfBallSprite.y - 14);
        }
    }
    if (powerMeter.isRunning) {
        if (controller.left.isPressed() || controller.right.isPressed()) {
            const targetOrientation = controller.left.isPressed() ? GolferOrientation.Left : GolferOrientation.Right;

            if (golfer.orientation !== targetOrientation) {
                golfer.orientation = targetOrientation;
                angle = 180 - angle;
                directionIndicator.rotate(angle);
            }
        }

        if (controller.up.isPressed() || controller.down.isPressed()) {
            const extents = golfer.orientation === GolferOrientation.Right ? { bottom: 180, top: 90, increment: -1 } : { bottom: 0, top: 90, increment: 1 };

            if (controller.up.isPressed() && angle !== extents.top) {
                angle += extents.increment;
            } else if (controller.down.isPressed() && angle !== extents.bottom) {
                angle -= extents.increment;
            }

            directionIndicator.rotate(angle);
        }
    }
});

scene.onHitTile(SpriteKind.Projectile, 3, (sprite: Sprite) => {
    golfBallSprite.destroy();
    levelInProgress = false;
    let top = (screen.height - 72) >> 1;
    screen.fillRect(0, top, screen.width, 55, 14)
    screen.fillRect(0, top - 4, screen.width, top - 20, 3)
    screen.fillRect(0, top + 55, screen.width, top - 20, 3)

    let header = image.create(80, 8)
    header.printCenter(loadedLevel == level.MAX_LEVEL ? "GAME OVER!" : "NICE JOB!", 0, screen.isMono ? 1 : 3, image.font8)
    screen.drawTransparentImage(header.doubled(), 0, top + 7);
    if (info.hasScore()) {
        screen.printCenter("Score:" + info.score(), top + 31, screen.isMono ? 1 : 9, image.font8)
        if (loadedLevel === level.MAX_LEVEL) {
            if (info.score() < info.highScore()) {
                info.saveHighScore();
                screen.printCenter("New Best Score!", top + 24, screen.isMono ? 1 : 9, image.font5);
            }
            screen.printCenter("Best: " + info.highScore(), top + 42, screen.isMono ? 1 : 9, image.font8);
            waitForInput(true);
        } else {
            loadedLevel++;
            waitForInput(false);
            setupLevel(loadedLevel);
        }
    }
});

// coefficient of restituion for grass
const grassSurfaceCOR = 0.5;

function collision(sprite: Sprite) {
    sprite.vx *= grassSurfaceCOR;
    sprite.vy *= grassSurfaceCOR;

    if (sprite.isHittingTile(CollisionDirection.Left) || sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -sprite.vx;
    }

    if (sprite.isHittingTile(CollisionDirection.Top) || sprite.isHittingTile(CollisionDirection.Bottom)) {
        sprite.vy = -sprite.vy;
    }
}

scene.onHitTile(SpriteKind.Projectile, 8, (sprite: Sprite) => {
    collision(sprite)
});
scene.onHitTile(SpriteKind.Projectile, 9, (sprite: Sprite) => {
    collision(sprite)
});
scene.onHitTile(SpriteKind.Projectile, 10, (sprite: Sprite) => {
    collision(sprite)
});
scene.onHitTile(SpriteKind.Projectile, 11, (sprite: Sprite) => {
    collision(sprite)
});
scene.onHitTile(SpriteKind.Projectile, 12, (sprite: Sprite) => {
    collision(sprite)
});
scene.onHitTile(SpriteKind.Projectile, 13, (sprite: Sprite) => {
    collision(sprite)
});
scene.onHitTile(SpriteKind.Projectile, 14, (sprite: Sprite) => {
    collision(sprite)
});
scene.onHitTile(SpriteKind.Projectile, 15, (sprite: Sprite) => {
    collision(sprite)
});

showSplash();
showInstructions();
setupLevel(loadedLevel);
```

```package
color-coded-tilemap
```