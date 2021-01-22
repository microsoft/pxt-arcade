# Five Second Games

Here is the final mashup of the first ever MakeCode Arcade Game Jam hosted on [itch.io](https://itch.io/jam/makecode-game-jam). This is a collection of a whole
bunch of individual games that are intended to be played in just 5 seconds! This is now "one" whole game that plays all of the 5 second games, one after the other.

Thanks again to all participants who contributed! Now, are you ready to jam?!?!

```typescript
// dogs
gamejam.register("crossroad", _crossroad.main);
gamejam.register("avoid", _dogdodge.main);
gamejam.register("catch", _catchdog.main);
gamejam.register("pet", _petdog.main);

// underwater
gamejam.register("conch", _conch.main);
gamejam.register("guppy", _guppy.main);

// race
gamejam.register("duckrace", _duckrace.main);
gamejam.register("sunrun", _sunrun.main);
gamejam.register("race", _race.main);

// survive
gamejam.register("dac", _dac.main);
gamejam.register("survival", _survival.main);
gamejam.register("dodge", _dodge.main);

// party
gamejam.register("balloon", _balloon.main);
gamejam.register("juggle", _juggle.main);
gamejam.register("balloondart", _balloondart.main);

// date
gamejam.register("brush", _brush.main);
gamejam.register("date", _date.main);

// ?
gamejam.register("spell", _spell.main);

// forest
gamejam.register("chop", _chop.main);
gamejam.register("chop2", _chop2.main);
gamejam.register("tap", _tap.main);
gamejam.register("mice", _mice.main);

// maze
gamejam.register("maze", _maze.main);


gamejam.init()

namespace _dogdodge {
    export function main() {
        let evil: Sprite = null
        let hit = 0
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
            otherSprite.destroy()
            hit = 1
        })
        scene.setBackgroundColor(7)
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("AVOID", 500)
        let goodBoi = sprites.create(img`
            . . 4 4 4 . . . . 4 4 4 . . . .
            . 4 5 5 5 e . . e 5 5 5 4 . . .
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
            . e e 5 5 5 5 5 5 5 5 e e . . .
            . . e 5 f 5 5 5 5 f 5 e . . . .
            . . f 5 5 5 4 4 5 5 5 f . . f f
            . . f 4 5 5 f f 5 5 6 f . f 5 f
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f
            . . . f 4 5 5 5 5 5 5 4 4 5 f .
            . . . f 5 5 5 5 5 4 5 5 f f . .
            . . . f 5 f f f 5 f f 5 f . . .
            . . . f f . . f f . . f f . . .
        `, SpriteKind.Player)
        goodBoi.setPosition(80, 120)
        controller.moveSprite(goodBoi)
        goodBoi.setStayInScreen(true)
        game.onUpdateInterval(300, function () {
            evil = sprites.create(img`
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . f f f f . . . . . . . . . . . . . .
                . . . . f f f 2 2 f f f . . . . . . . . . . . .
                . . . f f f 2 2 2 2 f f f . . . . . . . . . . .
                . . f f f e e e e e e f f f . . . . . . . . . .
                . . f f e 2 2 2 2 2 2 e e f . . . . . . . . . .
                . . f e 2 f f f f f f 2 e f . . . . . . . . . .
                . . f f f f e e e e f f f f . . . . . . . . . .
                . f f e f b f 4 4 f b f e f f . . . . . . . . .
                . f e e 4 1 f d d f 1 4 e e f . . . . . . . . .
                f d f e e d d d d d 4 e f f . . . . . . . . . .
                f b f f e e 4 4 4 e d d 4 e . . . . . . . . . .
                f b f 4 f 2 2 2 2 e d d e . . . . . . . . . . .
                f c f . f 2 2 c c c e e . . . . . . . . . . . .
                . f f . f 4 4 c d c 4 f . . . . . . . . . . . .
                . . . . f f f d d c f f . . . . . . . . . . . .
                . . . . . f d d c f f . . . . . . . . . . . . .
                . . . . c d d c . . . . . . . . . . . . . . . .
                . . . . c d c . . . . . . . . . . . . . . . . .
                . . . . c c . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
            `, SpriteKind.Enemy)
            evil.setPosition(randint(10, 150), 0)
            evil.setVelocity(0, randint(80, 130))
            evil.setFlag(SpriteFlag.DestroyOnWall, true)
        })
        game.onUpdate(function () {
            if (hit == 0) {
                gamejam.win(true)
            } else {
                gamejam.win(false)
            }
        })
    }
}


namespace SpriteKind {
    export const Dog = SpriteKind.create()
    export const Tree = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
namespace _petdog {
    export function main() {
        let cloud: Sprite = null
        let tree: Sprite = null
        let gameWon = false
        let person: Sprite = null
        let dog: Sprite = null
        function makeDog() {
            dog = sprites.create(img`
                . . 4 4 4 . . . . 4 4 4 . . . .
                . 4 5 5 5 e . . e 5 5 5 4 . . .
                4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
                4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
                e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
                . e e 5 5 5 5 5 5 5 5 e e . . .
                . . e 5 f 5 5 5 5 f 5 e . . . .
                . . f 5 5 5 4 4 5 5 5 f . . f f
                . . f 4 5 5 f f 5 5 6 f . f 5 f
                . . . f 6 6 6 6 6 6 4 4 f 5 5 f
                . . . f 4 5 5 5 5 5 5 4 4 5 f .
                . . . f 5 5 5 5 5 4 5 5 f f . .
                . . . f 5 f f f 5 f f 5 f . . .
                . . . f f . . f f . . f f . . .
            `, SpriteKind.Dog)
            animation.runImageAnimation(
                dog,
                [img`
                    . . 4 4 4 . . . . 4 4 4 . . . .
                    . 4 5 5 5 e . . e 5 5 5 4 . . .
                    4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
                    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
                    e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
                    . e e 5 5 5 5 5 5 5 5 e e . . .
                    . . e 5 f 5 5 5 5 f 5 e . . . .
                    . . f 5 5 5 4 4 5 5 5 f . . f f
                    . . f 4 5 5 f f 5 5 6 f . f 5 f
                    . . . f 6 6 6 6 6 6 4 4 f 5 5 f
                    . . . f 4 5 5 5 5 5 5 4 4 5 f .
                    . . . f 5 5 5 5 5 4 5 5 f f . .
                    . . . f 5 f f f 5 f f 5 f . . .
                    . . . f f . . f f . . f f . . .
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . 4 4 4 . . . . 4 4 4 . . . .
                    . 4 5 5 5 e . . e 5 5 5 4 . . .
                    4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
                    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
                    e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
                    . e e 5 5 5 5 5 5 5 5 e e . . .
                    . . e 5 f 5 5 5 5 f 5 e . . . .
                    . . f 5 5 5 4 4 5 5 5 f . f f .
                    . . . 4 5 5 f f 5 5 6 f f 5 f .
                    . . . f 6 6 6 6 6 6 4 4 4 5 f .
                    . . . f 5 5 5 5 5 5 5 f f f . .
                    . . . f 5 4 5 f f f 5 f . . . .
                    . . . f f f f f . . f f . . . .
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . 4 4 4 . . . . 4 4 4 . . . .
                    . 4 5 5 5 e . . e 5 5 5 4 . . .
                    4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
                    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
                    e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
                    . e e 5 5 5 5 5 5 5 5 e e . . .
                    . . e 5 f 5 5 5 5 f 5 e . . . .
                    . . f 5 5 5 4 4 5 5 5 f . f f .
                    . . . 4 5 5 f f 5 5 6 f f 5 f .
                    . . . f 6 6 6 6 6 6 4 f 5 5 f .
                    . . . f 5 5 5 5 5 5 5 4 5 f . .
                    . . . . f 5 4 5 f 5 f f f . . .
                    . . . . . f f f f f f f . . . .
                `],
                100,
                true
            )
            dog.setPosition(scene.screenWidth(), scene.screenHeight() - 20)
            dog.z = 15
            dog.vx = -30
        }
        controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
            if (dog && dog.overlapsWith(person)) {
                if (gameWon) {
                    happyDog(dog)
                    pause(250)
                } else {
                    gamejam.win(true)
                    dog.setVelocity(0, 0)
                    person.setVelocity(0, 0)
                    gameWon = true
                    dog.say("<3")
                    happyDog(dog)
                    pause(250)
                    happyDog(dog)
                    pause(250)
                    gamejam.showInstruction("DOG PETTED!", 500)
                }
            }
        })
        function happyDog(myDog: Sprite) {
            animation.runMovementAnimation(
                myDog,
                "c 0 -10 0 0 0 0",
                200,
                false
            )
        }
        function makePerson() {
            person = sprites.create(img`
                . . . . . . . . . . . . .
                . . . f f f f f f . . . .
                . f f f f f f f f f . . .
                . f f f f f f c f f f . .
                f f f f c f f f c f f f .
                f c f f c c f f f c c f f
                f c c f f f f e f f f f f
                f f f f f f f e e f f f .
                f f e e f b f e e f f f .
                f f e 4 e 1 f 4 4 f f . .
                . f f f e 4 4 4 4 f . . .
                . 4 4 4 e e e e f f . . .
                . e 4 4 e 7 7 7 7 f . . .
                . f e e f 6 6 6 6 f f . .
                . f f f f f f f f f f . .
                . . f f . . . f f f . . .
            `, SpriteKind.Player)
            animation.runImageAnimation(
                person,
                [img`
                    . . . . . . . . . . . . .
                    . . . f f f f f f . . . .
                    . f f f f f f f f f . . .
                    . f f f f f f c f f f . .
                    f f f f c f f f c f f f .
                    f c f f c c f f f c c f f
                    f c c f f f f e f f f f f
                    f f f f f f f e e f f f .
                    f f e e f b f e e f f f .
                    f f e 4 e 1 f 4 4 f f . .
                    . f f f e 4 4 4 4 f . . .
                    . 4 4 4 e e e e f f . . .
                    . e 4 4 e 7 7 7 7 f . . .
                    . f e e f 6 6 6 6 f f . .
                    . f f f f f f f f f f . .
                    . . f f . . . f f f . . .
                `, img`
                    . . . . . . . . . . . . .
                    . . . f f f f f f . . . .
                    . f f f f f f f f f . . .
                    . f f f f f f c f f f . .
                    f f f f c f f f c f f f .
                    f c f f c c f f f c c f f
                    f c c f f f f e f f f f f
                    f f f f f f f e e f f f .
                    f f e e f b f e e f f . .
                    . f e 4 e 1 f 4 4 f f . .
                    . f f f e e 4 4 4 f . . .
                    . . f e 4 4 e e f f . . .
                    . . f e 4 4 e 7 7 f . . .
                    . f f f e e f 6 6 f f . .
                    . f f f f f f f f f f . .
                    . . f f . . . f f f . . .
                `, img`
                    . . . f f f f f . . . . .
                    . f f f f f f f f f . . .
                    . f f f f f f c f f f . .
                    f f f f c f f f c f f . .
                    f c f f c c f f f c c f f
                    f c c f f f f e f f f f f
                    f f f f f f f e e f f f .
                    f f e e f b f e e f f . .
                    . f e 4 e 1 f 4 4 f . . .
                    . f f f e 4 4 4 4 f . . .
                    . . f e e e e e f f . . .
                    . . e 4 4 e 7 7 7 f . . .
                    . . e 4 4 e 7 7 7 f . . .
                    . . f e e f 6 6 6 f . . .
                    . . . f f f f f f . . . .
                    . . . . f f f . . . . . .
                `],
                150,
                true
            )
            person.setPosition(0, scene.screenHeight() - 20)
            person.z = 10
            person.vx = 30
        }
        function makeBackground() {
            scene.setBackgroundColor(9)
            scene.setTileMap(img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                6 6 6 6 6 6 6 6 6 6
                d d d d d d d d d d
                f f f f f f f f f f
            `)
            scene.setTile(13, img`
                c c c c c c c c c c c c c c c c
                b b b b b b b b b b b b b b b b
                d d d d d d d d d d d d d d d d
                b b b b b b b b b b b b b b b b
                b b b b b b b b b b b b b b b b
                b b b b b b b b b b b b b b b b
                b b b b b b b b b b b b b b b b
                b 1 1 1 1 d b b b 1 1 1 1 d b b
                b d 1 1 1 1 b b b d 1 1 1 1 b b
                b b b b b b b b b b b b b b b b
                b b b b b b b b b b b b b b b b
                b b b b b b b b b b b b b b b b
                b b b b b b b b b b b b b b b b
                d d d d d d d d d d d d d d d d
                b b b b b b b b b b b b b b b b
                c c c c c c c c c c c c c c c c
            `, false)
            scene.setTile(15, img`
                5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7
                7 7 7 5 7 5 5 7 7 7 7 7 5 7 7 7
                7 7 6 5 5 7 5 7 5 5 7 7 7 7 7 7
                7 7 7 6 5 7 7 5 5 6 7 7 7 7 7 7
                7 7 7 7 6 7 7 5 6 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7
                7 7 7 7 7 7 7 7 7 7 5 5 6 7 7 7
                7 7 7 7 7 7 7 7 5 5 7 6 7 7 7 7
                7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5
                7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 5
            `, false)
            scene.setTile(6, img`
                c c c c c c c c c c c c c c c c
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 5 5 7 7 7 7 7 7 7 7 7
                7 7 6 5 7 7 5 7 5 5 7 7 7 7 7 7
                7 7 7 6 5 7 7 7 5 6 7 7 7 7 7 7
                7 7 7 7 6 7 7 5 6 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7
                7 7 7 7 7 7 7 7 7 7 5 7 6 7 7 7
                7 7 7 7 7 7 7 7 5 7 7 6 7 7 7 7
                7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5
                7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 5
            `, false)
        }
        function makeTree(xPos: number) {
            tree = sprites.create(img`
                . . . . . . . . . . . . . . . c c . . . . . . . . . . . . . . .
                . . . . . . . . . . . . c c c 6 5 c 6 6 . . . . . . . . . . . .
                . . . . . . . . . . . . c 6 c 5 5 c 7 6 . . . . . . . . . . . .
                . . . . . . . . . . . 6 c c 7 5 5 7 c 6 6 . . . . . . . . . . .
                . . . . . . . . . . c c 7 7 7 7 7 5 7 7 c 6 . . . . . . . . . .
                . . . . . . . . . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . . . . . . . . .
                . . . . . . . . c 7 7 7 6 c 7 c 6 7 6 5 7 5 7 6 . . . . . . . .
                . . . . . . . . c c c 6 6 6 c 6 6 6 6 5 5 6 6 6 . . . . . . . .
                . . . . . . c 6 6 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 6 6 . . . . . .
                . . . . . c 7 7 7 c 7 7 6 6 7 6 6 7 7 6 7 7 6 7 7 7 6 . . . . .
                . . . . . c c 6 6 c c c c 7 7 c 6 7 7 c c 6 6 6 6 6 6 . . . . .
                . . . . c 6 7 6 6 6 6 6 c 7 c 6 7 6 7 6 7 7 7 7 7 7 6 6 . . . .
                . . . c c 7 7 7 6 6 6 6 6 6 6 7 7 7 6 7 7 7 7 6 6 7 c 6 6 . . .
                . 6 6 6 c c 6 6 7 7 6 6 6 6 6 7 7 7 7 7 7 7 7 7 6 6 7 7 6 6 6 .
                . 6 7 7 7 6 6 7 7 c 6 7 6 6 7 7 7 7 7 7 7 6 6 7 7 6 7 7 7 7 6 .
                c c 6 6 6 6 c c c 6 7 7 6 7 7 7 6 7 7 7 7 7 6 c c 7 7 6 7 6 6 6
                c 6 6 6 7 7 7 6 6 7 7 6 6 7 7 6 c 7 7 6 7 7 7 c 6 7 7 7 6 c 6 6
                . c 6 7 7 7 6 6 6 c c c 6 6 7 c 6 7 6 c c 6 6 6 6 6 7 7 7 6 c .
                . c c 6 6 6 6 7 6 6 6 6 6 c c 6 6 6 6 6 6 6 6 7 7 6 c c 6 6 6 .
                . . . 6 6 7 7 6 c 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 6 6 c c c c .
                . . . c c 7 6 c 6 6 7 6 6 6 6 6 6 6 7 6 7 7 6 6 7 7 7 6 c . . .
                . . . 6 c c c c 6 7 7 6 6 6 6 6 6 7 7 6 7 7 7 c 7 7 6 6 6 . . .
                . . . . . . 6 c c c 7 c 6 7 7 6 7 7 7 6 c 7 7 6 c c . . . . . .
                . . . . . . . . c c c 6 7 7 7 c 6 7 7 7 6 c c 6 . . . . . . . .
                . . . . . . . . . . . c c 7 7 c 6 7 7 6 6 . . . . . . . . . . .
                . . . . . . . . . . . . . 6 c 6 6 6 6 . . . . . . . . . . . . .
                . . . . . . . . . . . . f f e e e e f . . . . . . . . . . . . .
                . . . . . . . . . . f f e e e e e e e e f . . . . . . . . . . .
                . . . . . . . . . . . . . f e e e f f e . . . . . . . . . . . .
                . . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . .
            `, SpriteKind.Tree)
            tree.setPosition(xPos, 78)
        }
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Dog, function (sprite, otherSprite) {
            if (!(gameWon)) {
                gamejam.showInstruction("A!", 500)
            }
        })
        function makeCloud(xPos: number) {
            cloud = sprites.create([img`
                . c c c c c c c c . . . . . . . . . . . .
                c c 1 1 1 1 1 c c c c c c c c c c c . . .
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . . .
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . . . .
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . . . .
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c .
                . c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c .
                . c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c
                . . c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c
                . . . c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c
                . . . . . c c 1 1 1 1 1 1 1 1 1 c c 1 1 c
                . . . . . . c c c 1 1 1 1 c c c . c c c c
                . . . . . . . . c c c c c . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . c c c c c c c .
                . . . . . . . . . . . . . . . c 1 1 1 1 1 c c
                . . . . . . . . . . . . . . . c 1 1 1 1 1 1 c
                . . . . . . . . . . . . . . c 1 1 1 1 1 1 1 c
                . . . . . . . . . . . . . . c 1 1 1 1 1 1 1 c
                . c c c c c c c c . . . . . c 1 1 1 1 1 1 1 c
                c c 1 1 1 1 1 c c c c c c c 1 1 1 1 1 1 1 1 c
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c .
                . c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                . c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                . . c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                . . . c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                . . c c 1 1 1 1 1 1 1 1 1 1 1 1 c c 1 1 c . .
                . c 1 1 1 1 1 1 1 1 1 1 1 1 c c . c c c c . .
                . c 1 1 1 1 1 1 1 1 1 1 1 c c . . . . . . . .
                . c 1 1 1 1 1 1 1 1 1 1 1 c . . . . . . . . .
                . c 1 1 1 1 1 1 1 1 1 1 c c . . . . . . . . .
                . c 1 1 1 1 1 1 1 c c c c . . . . . . . . . .
                . c c c 1 1 1 1 c c . . . . . . . . . . . . .
                . . . c c c c c c . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . c c c c c . . . . . . . . . . . . .
                . . . . . . . . c c c c 1 1 1 c c . . . c c c c c . . . .
                . . . . . . . c 1 1 1 1 1 1 1 1 1 c c c c 1 1 1 c c c . .
                . . . . . c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                . c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . .
                c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c .
                c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c .
                . . . c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c
                . . . . . c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c
                . . . . . . c c 1 1 1 1 c c c c 1 1 1 1 1 1 1 1 1 1 1 1 c
                . . . . . . . c c c c c c . . . c c c c 1 1 1 1 1 1 1 c .
                . . . . . . . . . . . . . . . . . . . c c c c c c c c . .
            `][randint(0, 2)], SpriteKind.Cloud)
            cloud.setPosition(xPos, randint(10, 90))
            cloud.z = -5
            cloud.vx = -5
            cloud.setFlag(SpriteFlag.Ghost, true)
        }
        makeBackground()
        makeDog()
        makePerson()
        makeTree(40)
        makeTree(130)
        for (let index = 0; index <= 3; index++) {
            makeCloud(20 + index * 50)
        }
        gamejam.showInstruction("PET!", 500)
    }
}

namespace _balloon {
    export function main() {
        let pumped = 0
        let balloon: Sprite = null
        let balloonImages: Image[] = []
        let pump: Sprite = null
        let gameStart = 0
        controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
            if (gameStart == 1) {
                pump.setImage(img`
                    . f f f f f f f f f f f f f f .
                    . f 4 4 4 4 4 4 4 4 4 4 4 4 f .
                    . f f f f f f f f f f f f f f .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . f f f f f f f f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    f f f f f e e e e e e f f f f f
                    f e e e e e e e e e e e e e e f
                    f e e e e e e e e e e e e e e f
                    f f f f f f f f f f f f f f f f
                `)
            }
        })
        // gane.onUpdate
        function initBalloon() {
            balloonImages = [img`
                . . f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 9 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                f f 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 9 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 9 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f f 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f f 8 8 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f f 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f f 8 8 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . f 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . f f 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . f f 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . f f 8 8 8 8 8 8 8 8 c c f f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . f f 8 8 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . f 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . f f 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f f 8 8 8 8 8 8 8 8 8 8 c c f f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . f f 8 8 8 8 8 8 c c f f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . f f 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . f f 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . .
                . . f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . f f 8 8 8 8 8 8 8 8 8 8 c c f f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . f f 8 8 8 8 8 8 c c f f . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . f f 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . f f f 8 8 8 8 8 8 8 8 f f f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . . . .
                . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . .
                . . f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . .
                . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f f . . . . . . . . . . . . . . . . . . . .
                . . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 c c c f f . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . f f f 8 8 8 8 8 8 c c f f f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . f f 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . f f f 8 8 8 8 8 8 8 8 f f f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . .
                . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . . .
                . . . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                . . . . f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . .
                . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . .
                . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . .
                . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . .
                . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . . .
                . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c f f . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 c c c f f . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . f f f 8 8 8 8 8 8 c c f f f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . f f 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `, img`
                . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . f f f 8 8 8 8 8 8 8 8 8 8 f f f . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . . .
                . . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . .
                . . . . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . .
                . . . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . . .
                . . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . . .
                . . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                . . . f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                . . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . .
                . . f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . .
                . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . .
                . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . .
                . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . .
                . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . .
                . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . .
                . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . .
                . . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . .
                . . . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c f . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c f f . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . f f 8 8 8 8 8 8 8 8 8 8 8 c c c f f . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . f f f 8 8 8 8 8 8 c c f f f . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . f f 8 8 8 c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
            `]
            balloon = sprites.create(balloonImages[0], SpriteKind.Player)
        }
        controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
            if (gameStart == 1) {
                music.playTone(659, music.beat(BeatFraction.Sixteenth))
                pump.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . f f f f f f f f f f f f f f .
                    . f 4 4 4 4 4 4 4 4 4 4 4 4 f .
                    . f f f f f f f f f f f f f f .
                    . . . . . . f 4 4 f . . . . . .
                    . . . . f f f f f f f f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 5 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    . . . . f 2 2 2 2 e e f . . . .
                    f f f f f e e e e e e f f f f f
                    f e e e e e e e e e e e e e e f
                    f e e e e e e e e e e e e e e f
                    f f f f f f f f f f f f f f f f
                `)
                pumped += 1
            }
        })
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("PUMP!", 500)
        gameStart = 0
        scene.setBackgroundColor(13)
        initBalloon()
        pump = sprites.create(img`
            . f f f f f f f f f f f f f f .
            . f 4 4 4 4 4 4 4 4 4 4 4 4 f .
            . f f f f f f f f f f f f f f .
            . . . . . . f 4 4 f . . . . . .
            . . . . . . f 4 4 f . . . . . .
            . . . . . . f 4 4 f . . . . . .
            . . . . . . f 4 4 f . . . . . .
            . . . . . . f 4 4 f . . . . . .
            . . . . . . f 4 4 f . . . . . .
            . . . . . . f 4 4 f . . . . . .
            . . . . . . f 4 4 f . . . . . .
            . . . . . . f 4 4 f . . . . . .
            . . . . f f f f f f f f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 5 2 2 2 e e f . . . .
            . . . . f 2 2 2 2 e e f . . . .
            . . . . f 2 2 2 2 e e f . . . .
            . . . . f 2 2 2 2 e e f . . . .
            . . . . f 2 2 2 2 e e f . . . .
            . . . . f 2 2 2 2 e e f . . . .
            f f f f f e e e e e e f f f f f
            f e e e e e e e e e e e e e e f
            f e e e e e e e e e e e e e e f
            f f f f f f f f f f f f f f f f
        `, SpriteKind.Player)
        pump.setPosition(100, 89)
        gameStart = 1
        game.onUpdate(function () {
            balloon.right = 94;
            balloon.bottom = 104;
            if (pumped < 20) {
                balloon.setImage(balloonImages[Math.floor(pumped / 2)])
                balloon.right = 94;
                balloon.bottom = 104;
                animation.runImageAnimation(
                    balloon,
                    [img`
                        . . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . f . . 8 . f . f f . 8 8 . . . . f . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . f f . 8 f 8 f 8 8 8 8 8 8 8 8 8 8 . f . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . f f . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 f . . . . . . . . . . . . . . . . . . . .
                        . . . . . f . . f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f . . . . . . . . . . . . . . . . .
                        . . . . f . . . . 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 f f . . . . . . . . . . . . . . . .
                        . . . . f f . . 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . .
                        . . . . . f f 8 f 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . . . .
                        . . . . . f f 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . . . . . . . . . .
                        . . . . . . 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . . .
                        . . . . 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 f . . . . . . . . . . . . .
                        . . f f f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 . . . . . . . . . . . . .
                        . . . f 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . .
                        . . . f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . f 8 . . . . . . . . . . . .
                        . f 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . f . . . . . . . . . . .
                        . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . f . . . . . . . . . .
                        f . . 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . f . . . . . . . . .
                        . . 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f . . . . . . . . .
                        f 8 f 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . f f f . . . . . . . . .
                        . . 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . f . . . . . . . . . .
                        . 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 8 8 . . . . . . . . .
                        . . 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . .
                        . f 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . .
                        f . 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . .
                        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 . . . . . . . . . .
                        f . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 8 8 . . . . . . . . . .
                        . f . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c 8 . . . . . . . . . . .
                        . . f . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 . . . . . . . . . . . .
                        . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 8 8 . . . . . . . . . . .
                        . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 c 8 . . . . . . . . . . .
                        . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 8 8 . . . . . . . . . . . .
                        . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . .
                        . . . f 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 . . . . . . . . . . . . .
                        . . . . . 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c . . 8 . . . . . . . . . . . . . .
                        . . . . . . . 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c 8 8 . . . . . . . . . . . . . .
                        . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c . f f . . . . . . . . . . . . . .
                        . . . . . . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c . c c f f . . . . . . . . . . . . . .
                        . . . . . . . . f 8 . f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . c c c c . . c . . . . . . . . . . . . . . . .
                        . . . . . . . . . f . f f 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . 8 c c . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . f . f . 8 f 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 c c 8 . . . . . . 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . f 8 f f 8 8 8 c f f . . c . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
                    `, img`
                        . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . 8 . . . . 8 . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 . 8 . . . . . . 8 8 . . 8 8 . . 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . 8 . 8 8 8 . . . . 8 8 8 8 8 . . . 8 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 8 8 8 . . . . 8 8 8 8 8 . . 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . f . . . . . 8 8 8 . 8 . . . . 8 8 8 8 8 . 8 8 8 . . 8 . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . f . . . 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 8 . 8 8 . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . 8 . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 . f . f f . . . . . . . . . . . . . . . . .
                        . . . . . . . . . 8 8 8 . 8 8 8 . 8 8 8 8 8 . 8 8 8 8 8 . . 8 . 8 . f f . f . . . . . . . . . . . . . . . .
                        . . . . . . . . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 . 8 8 f 8 8 8 . . . . . . . . . . . . . . .
                        . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . 8 8 . . . . . . . . . . . . . .
                        . . . . 8 8 . 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 f . 8 8 8 . 8 8 . 8 . . . . . . . . . . . . . .
                        . . . . 8 8 8 . 8 8 8 . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . .
                        . . . . . 8 . 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 f . . . . . . . . . . . .
                        . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . . . . . . . .
                        . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 . 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 . . . . . . . . . . . . .
                        . . . . 8 8 . 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . .
                        . 8 9 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . .
                        . 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 . . . . . . . . . . . .
                        8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 . 8 8 . . . . . . . . . . . . .
                        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . .
                        . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 . 8 . . . . . . . . . . .
                        . . 8 . 8 8 8 . 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 . . . . 8 . . . . . . .
                        . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 . 8 . 8 . . . . . . . .
                        . . . 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . . . . . . . . .
                        . . . 9 9 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . . . . . . . . . .
                        8 . 8 . 8 8 8 8 8 8 8 8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 . 8 . . . . . . . . . . . . .
                        . 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 . . . . . . . . . . . . . .
                        . . f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . .
                        . 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . . . . . . . . . . . . .
                        . 8 8 8 8 8 8 8 . 8 8 8 8 8 . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 . 8 8 . . . . . . . . . . . . .
                        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 . 8 8 . . 8 8 . . . . . . . . . . . . .
                        . . 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 . . . . . . . . . . . . .
                        . 8 . 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 . . . . . . . . . . . . .
                        . . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . 8 . . . . . . . . . . . . . .
                        8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 . 8 8 8 8 8 8 . 8 8 8 8 . 8 8 . 8 8 8 8 c . . . . . . . . . . . . . . . . . .
                        . . 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 . . . 8 . . . . . . . . . . . . . .
                        . . 8 . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 . . . . 8 . . . . . . . . . . . . .
                        . . . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . c . . . . . . . . . . . . . .
                        . . . . . 8 8 8 . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . 8 . . . 8 . . . . . . . . . . . . . . . . . .
                        . . . 8 . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 . 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . 8 . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . . 8 . 8 . . . 8 c c . . . . . . . . . . . . . .
                        . . . 8 . . . . . . 8 . 8 8 8 8 . . 8 8 8 8 8 8 8 8 8 . . . . 8 . . . . 8 8 . . . . . . . . . . . . . . . .
                        . . . . . . . . 8 . . 8 8 8 8 8 8 8 f 8 8 8 8 8 c c 8 . . . . 8 . 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 c f f . . c . . . . . 8 . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . 8 . 8 8 8 8 8 8 . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 . 8 . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
                    `, img`
                        . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . 8 . . . 8 . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . 8 . 8 8 8 . . 8 . 8 . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 . . . . . 8 8 8 8 8 . 8 8 8 . . . . . . . 8 . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 8 . . 8 8 8 8 8 8 . 8 . 8 8 8 . . . . . . . . 8 . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . 8 . . 8 8 8 8 8 8 . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . 8 8 . . . . 8 8 . 8 8 8 . . . 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 . 8 8 8 8 . 8 . . . . . . 8 8 8 . . . . . 8 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 8 8 8 8 8 . . 8 8 . . . . 8 8 . . 8 . . . . . . . . . . . 8 . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 8 . 8 8 8 8 8 . . . . . . . 8 . . 8 . . . . . . . . . . . 8 . 8 . . . . . . . . . . .
                        . . . . . . . . . . . 8 . 8 . 8 8 8 8 8 8 8 . . . . . 8 8 . . . . 8 8 . . . . . . . 8 8 . . . . . . . . . . . .
                        . . . . . 8 . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . 8 . . . . 8 . . . . . . 8 8 . 8 . . . . . . . . . . . .
                        . . . . . . 8 8 . 8 . . 8 8 . 8 8 8 8 8 8 8 . 8 . . 8 . . . . . . . . . 8 . . 8 8 8 8 . . 8 . . . . . . . . . .
                        . . . . . 8 8 . 8 8 . 8 . . . 8 8 8 8 8 8 8 . . 8 8 8 8 . 8 . . . . 8 . 8 8 . . 8 8 8 8 8 . . 8 . . . . . . . .
                        . . . . . . . 8 8 8 . . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 . 8 . . . 8 . . . . 8 8 8 . . 8 8 8 8 8 . . . . . . . . . .
                        . . . . 8 . 8 . 8 . 8 8 8 8 8 . . 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 . . 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . .
                        8 . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . .
                        . . 8 . . . 8 8 8 8 8 8 . . 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . .
                        8 . . . 8 8 8 8 8 8 8 . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . . . . . . . .
                        . . . . 8 8 8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . 8 8 8 8 8 8 . 8 8 8 . . . . . . .
                        . . . 8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . 8 . . . . . . .
                        . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 . . . . . 8 8 . . . . . .
                        . . . 8 . 8 8 8 8 8 8 8 8 8 . 8 . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 8 8 8 8 . 8 8 8 . . . . 8 . . 8 . . . . . .
                        . 8 . 8 . 8 8 8 8 8 8 8 8 8 . 8 . 8 8 8 8 . 8 8 8 . 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 . . . . . 8 . . . . . .
                        . 8 8 8 8 . . 8 8 8 . 8 8 8 8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . . . 8 . . . . . 8 8 8 . . . . .
                        . . . 8 8 8 8 8 8 . 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 . 8 . 8 . . . . . 8 8 . . . . .
                        . 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 8 . . . . 8 . . . . . . .
                        . . . 8 8 8 8 8 . 8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 8 . . . . . . . 8 . . . . . .
                        . . . . 8 8 . 8 . . . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 8 8 . . . . . . . . . . . . .
                        . . . . 8 . . . . 8 . . 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . 8 . . . .
                        . 8 8 8 8 . 8 8 . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 . . . . . . . . . . . . . . .
                        8 8 8 8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . .
                        8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 . . 8 8 8 8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . 8 . . . . . . . . .
                        . . 8 . 8 . 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 8 . . . . . . . . . . .
                        . 8 . 8 . . 8 8 8 8 . 8 8 . 8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 . 8 . . . 8 8 . . . . . . . . . .
                        8 8 8 . . . 8 8 8 8 8 . . 8 8 8 . . 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 . . 8 8 . . 8 . 8 . . . . . . . . . . .
                        . . . 8 . 8 8 8 8 8 8 . 8 8 8 . . 8 8 8 8 8 8 8 8 . 8 8 8 8 8 . 8 8 8 8 8 . . . . . . . 8 8 8 . . 8 . . . . . .
                        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 . 8 8 8 8 . 8 . . . . . . . . . . . . . . . . . . . .
                        8 8 . 8 8 8 8 . 8 8 8 8 8 8 . 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 . . 8 8 . . . . . . . . . . . . . . . . . . . . .
                        . 8 8 8 8 8 . 8 8 8 8 8 . 8 8 . 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 . 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . 8 8 8 8 . 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . .
                        . . 8 8 . . . 8 8 8 8 8 . . 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 . 8 . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . 8 8 . . 8 . 8 8 8 8 8 . . 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 c . 8 . . . . . . 8 . . . . . . . . . . . . . . . .
                        . 8 8 . . 8 8 8 8 8 8 8 8 . 8 8 . 8 . . 8 f 8 8 8 8 8 8 8 . 8 c 8 8 . . . . 8 8 . . . . . . . . . . . . . . . .
                        . . . . . 8 8 8 8 8 8 . . 8 . 8 8 8 8 8 f 8 8 8 8 8 c c 8 . . . 8 8 8 . 8 . . . 8 . . . . . . . . . . . . . . .
                        . . . . . . . . 8 8 . . . . . 8 8 8 8 8 8 f 8 8 8 c f f . . c c 8 . . . 8 8 8 . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 . . 8 8 8 8 . . . f 8 c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . 8 . . 8 8 8 . . 8 . . . f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . 8 . . . 8 8 8 . 8 8 . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . 8 8 . . 8 8 . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e
                    `, img`
                        . . . . . . . . . . . . . 8 . . . . . 8 . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . 8 8 8 8 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . 8 8 8 8 8 . 8 . 8 8 8 8 . . . 8 8 . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 8 . 8 . . 8 8 8 8 8 8 8 . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . 8 . . 8 . . . 8 8 8 8 8 8 8 . . 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 . . 8 . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 8 . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . 8 . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 8 . . 8 . 8 . 8 . . 8 . . 8 . . . . . . . . . . . .
                        . . . . . . . . . 8 8 . . . 8 . 8 8 8 8 8 8 8 8 8 8 . 8 . 8 8 . . . 8 . 8 . 8 . 8 8 8 . . 8 . . . . . . . . . .
                        . . . 8 . . . . . . . 8 . . . 8 . 8 8 8 8 8 . . . . . . . 8 . . . 8 . 8 . 8 8 . 8 . . 8 8 . . . . . . . . . . .
                        . . . . 8 . . . . 8 8 8 8 . . . . 8 8 8 8 8 8 8 . . . 8 8 . 8 8 8 . 8 8 8 . 8 . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . 8 . 8 . . . . 8 8 8 8 8 . . . . . 8 8 . 8 . 8 8 . 8 . . 8 . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 . 8 8 8 8 8 8 8 8 8 8 8 . . . 8 8 8 8 8 8 8 . . . . 8 . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . 8 8 8 8 8 . 8 8 8 . 8 . 8 8 8 . 8 . . . 8 . . . 8 . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . 8 8 8 8 . . . 8 . . . . . 8 8 8 8 . . 8 8 8 . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . 8 8 . 8 . . 8 8 8 . . . . . . . 8 . 8 8 8 . 8 8 8 . . . . . 8 8 . . . . . . . . . . . . .
                        . . . . . . . 8 . 8 8 8 . 8 8 . . . 8 8 8 . . . . . . . . 8 . . . . . . 8 8 . . 8 8 8 8 8 8 . . . . . . . . . .
                        . . . . . . . . 8 . 8 8 8 . . . 8 8 8 8 . . 8 . 8 . 8 . 8 8 8 . . . . . 8 8 8 . . . 8 8 8 8 . . . . . 8 . . . .
                        . . . . . 8 . . 8 8 . . 8 . . . 8 . 8 8 8 8 8 8 . 8 . 8 8 8 . . . 8 8 . . 8 8 . . 8 . . 8 8 8 8 8 . 8 . . . . .
                        . . 8 8 8 . 8 . 8 . 8 . 8 8 . 8 8 8 8 . 8 8 . . 8 8 8 8 8 8 8 . . 8 8 8 8 8 . 8 . 8 8 . . . 8 8 8 8 . . . . . .
                        . 8 8 8 8 8 8 8 8 8 . 8 8 . . 8 8 8 8 . 8 8 8 8 8 8 8 8 . . 8 . 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 . 8 8 . . . . .
                        . . 8 . 8 8 8 8 . . . 8 . 8 . 8 8 8 8 8 . 8 8 8 8 8 . . . . . . 8 8 . 8 8 8 8 8 . 8 8 . 8 8 . . 8 . . . . 8 . .
                        . 8 . 8 8 8 8 8 . 8 8 8 8 . 8 8 8 8 8 8 . . 8 8 8 8 8 . . 8 8 . . . 8 . 8 8 8 8 8 8 . . 8 . . . . . . . . . . .
                        . . . 8 . 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 . . 8 8 8 8 . 8 8 . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . .
                        . . 8 8 8 8 8 8 8 8 8 8 . . 8 8 . . 8 8 8 . . 8 8 8 8 . 8 8 . . . . . . . 8 8 . . 8 8 . 8 . . . . . . . . . . .
                        . . 8 . 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 . . . 8 8 8 . 8 . . . . . . . . . 8 . 8 8 . . . . 8 . . . . . . .
                        . . . . . 8 8 8 8 8 8 8 . . 8 . 8 8 8 8 . 8 8 . . . 8 8 . 8 8 8 8 8 . . . . . . . . . . . . . 8 8 8 . . . . . .
                        . . 8 . 8 8 8 8 8 8 8 . . 8 8 8 8 8 8 8 8 8 8 . . 8 . . 8 . . 8 8 . . . . 8 . 8 . . . 8 . . . . . . . . . . . .
                        . . 8 8 8 8 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 8 8 . 8 . . . . 8 . . . . . . . . . . . .
                        . 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 8 . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . .
                        . . 8 . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 8 . 8 . . . . . . . . . . . . . . 8 8 . . . . . 8 . . . . . . .
                        . 8 . . . 8 8 8 8 8 8 8 . . 8 8 8 8 8 8 8 8 8 8 8 8 . 8 . . . . . . . . . . . . 8 . . . . . . . 8 . . . . . . .
                        8 8 8 . . . 8 8 8 8 8 8 . 8 . 8 8 8 8 . 8 8 8 8 8 . 8 8 . 8 . . . . . . 8 . 8 . . . . . . 8 . . . . . . . . . .
                        . 8 8 8 8 8 . 8 8 8 . 8 8 . . 8 8 8 . . . . 8 8 8 8 . 8 8 8 . 8 . . . . 8 8 8 8 . . . . . . . . . . . . . . . .
                        . 8 8 8 8 8 . . 8 8 8 . . . 8 . 8 . . . . 8 . 8 8 8 . . 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . .
                        . 8 8 8 8 8 . . . . . . . 8 8 . 8 8 . . 8 . . 8 . . 8 . 8 . 8 . 8 . . . . . . . . . . . . . . . . . . . . . . .
                        8 8 8 . . 8 . . . 8 8 . . . 8 . 8 8 8 . 8 . . . 8 . 8 8 8 8 8 8 . c . . 8 . 8 . . . . . . . . . . . . . . . . .
                        . 8 8 8 . . . . 8 . . . 8 . . 8 8 8 . 8 . . . . 8 8 8 8 . 8 8 8 8 c c 8 8 8 8 8 . . . . . . . . . . . . . . . .
                        8 8 8 8 . 8 8 . . . . . 8 8 8 8 8 . . 8 . . 8 8 . 8 8 8 8 8 8 8 c c 8 c 8 8 8 . . . . . . . . . . . . . . . . .
                        8 . 8 8 . 8 8 . . . . . 8 8 8 8 8 . . . . . 8 8 8 8 8 8 8 8 8 c c 8 8 c . 8 8 . . . . . 8 . . . . . . . . . . .
                        8 . . 8 8 . 8 8 . 8 . . 8 8 8 8 8 . . . 8 8 8 8 8 . 8 8 . . . 8 8 c 8 . . 8 8 8 . . . . 8 . . . . . . . . . . .
                        8 . 8 8 . 8 . 8 8 8 . . 8 8 8 8 8 . 8 . 8 8 8 . . . . 8 8 . . . 8 . . 8 8 . 8 . . . . 8 . . . . . . . . . . . .
                        8 . . . 8 8 8 8 . . 8 . 8 8 8 8 . . . 8 8 8 8 . . . 8 . 8 . . . . 8 . . 8 . . 8 8 . . . . . . . . . . . . . . .
                        . . . . . . . . 8 . 8 8 . 8 . . 8 8 8 8 8 8 . 8 . . . . . 8 . 8 c . . . . 8 8 . . . . . . . . . . . . . . . . .
                        . . 8 8 . . 8 8 . . 8 8 . 8 8 8 8 8 8 8 . 8 . . . f . . 8 . 8 8 8 c . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . 8 . . . 8 8 . . . . . 8 . . . . . . . f . . 8 . . . 8 8 . . . . . . . . . . . . . . . . . . . . .
                        . . . . 8 . . . . . . 8 8 8 . . . . . . . . . . . f . . 8 8 8 c . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e e e
                    `, img`
                        . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 8 8 . . . . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . 8 . 8 . . . . . . . 8 . 8 8 8 . . . . . . . . . . . . 8 8 . . . . . 8 . 8 . . . . . . . . . . . . . . .
                        . . . . . . 8 . . . . . . . . . 8 8 8 . . 8 8 8 8 8 8 . . . . . . 8 . 8 . . . . 8 8 . 8 . 8 . . . . . . . . . . . .
                        . . . . . 8 8 8 . . . . . . . . . 8 8 8 . . 8 8 . 8 8 . . . . . . . . 8 8 8 . 8 . . 8 . 8 . 8 . . . . . . . . . . .
                        . . . . 8 8 8 . 8 8 8 . . . . . 8 . 8 8 8 . 8 . 8 8 . 8 . . . . . . 8 8 8 . 8 8 . . 8 8 8 8 8 . . . . . . . . . . .
                        . . . . . . . . 8 . . . . 8 . . . 8 8 . . 8 . 8 8 8 . . 8 . . . 8 8 8 8 8 . 8 8 8 8 . 8 8 8 . 8 . . . . . . . . . .
                        . . . . . . . 8 8 . . . . 8 . 8 8 . 8 8 . . . . 8 8 8 8 8 8 . . . . . 8 . 8 8 8 8 8 8 . . . 8 . . . . . . . . . . .
                        . . . . . . . 8 . 8 . . . 8 8 8 8 8 . 8 8 8 8 8 8 8 8 8 8 8 8 . . 8 . 8 . 8 8 8 . 8 8 8 . . 8 . . . . . . . . . . .
                        . . . 8 8 . 8 8 8 . . . . . 8 8 8 8 8 8 8 8 8 8 8 . 8 8 8 8 . 8 8 . 8 8 . . 8 8 . 8 . . . . . . . 8 . . . . . . . .
                        . . . 8 . . . 8 8 . . 8 . . 8 8 8 8 8 8 . 8 8 8 . 8 . 8 8 8 8 . 8 8 8 8 . . . 8 8 . . . . . . . . . . . . . . . . .
                        . . . . 8 . 8 8 8 8 8 . 8 . 8 8 8 8 8 8 8 8 8 . . . . . 8 8 8 . 8 . . . . . 8 8 8 . 8 8 8 . 8 8 . . . . . 8 . . . .
                        . . . 8 . 8 8 8 8 . 8 . . 8 . . 8 8 8 8 8 . 8 8 . . . . 8 8 . 8 . . 8 8 . . 8 . . 8 8 8 . 8 8 8 . . . . . 8 8 8 . .
                        . . . . . 8 8 8 8 8 . . 8 8 8 8 . . 8 8 8 . . . . 8 8 8 8 8 8 . . . . 8 8 8 . . . . . 8 8 8 8 . 8 . . 8 8 . . . . .
                        . . . . . . 8 . 8 8 . 8 8 . 8 8 8 8 8 8 8 . . 8 . 8 8 . 8 . . . . 8 . . 8 8 . . . . . . 8 8 8 . . . . . . . . . . .
                        . . . . . . 8 . 8 8 8 . . . 8 8 8 8 8 8 . . . 8 8 . . 8 . . 8 . 8 8 . . 8 8 . . . 8 . . . 8 8 . . . 8 . . . . . . .
                        . . . 8 . 8 . 8 . . . . . . 8 . 8 . 8 . 8 . 8 8 8 . . . 8 8 8 . 8 . . 8 . . . . . 8 8 8 . 8 8 8 . . . . . . . . . .
                        8 . . . . 8 . 8 8 . . . . . . . 8 . 8 8 . 8 . 8 . . . 8 8 . . 8 . . . . 8 . . . . 8 8 8 8 . . . . . . . . . . . . .
                        8 . 8 . 8 8 . 8 8 . . 8 . . . . 8 . . . . . . . 8 . 8 . . . . . . . . . . . . . . 8 8 . . 8 . . . . . . . . . . . .
                        8 . . 8 8 8 8 8 8 . . 8 . . . . . . . 8 8 . . 8 . 8 8 8 . . . . . . . . . . 8 . 8 8 8 . 8 8 . 8 8 8 . . . . . . . .
                        . . 8 . . 8 8 8 . 8 . . . . . . . . . . 8 . . . 8 . . . . . . . . . . . . 8 . . . . . . . . 8 8 . . 8 . . . . . . .
                        . . . . . . 8 8 8 8 . . . . . . . . . 8 8 . 8 . 8 . 8 . . 8 8 . . . . . 8 . 8 8 . 8 8 8 8 8 8 8 . . 8 . . . . . . .
                        . . . . . 8 8 8 . 8 8 8 . . . . . 8 . 8 . 8 8 . 8 . . . . . 8 . 8 . 8 . . . . . 8 . . 8 . 8 8 . 8 . . . . . . . . .
                        8 8 8 . . 8 . 8 8 8 . 8 . 8 . . . . 8 . . . . . . . . . . 8 8 8 8 8 8 . . 8 . 8 . 8 8 8 . . . 8 . . . . . . . . . .
                        . 8 8 8 . . 8 . . . . . 8 . . . . . 8 . 8 . 8 . . . . 8 8 . 8 8 . . 8 . . . . 8 8 . . . 8 8 . . . . . . . . . . . .
                        . 8 . . 8 . . . . . . . . 8 . . . . 8 8 8 8 . . . . . 8 . . 8 8 . . . . 8 8 8 . . 8 . . 8 8 . 8 . . . . . . . . . .
                        . 8 8 8 . . . 8 . 8 . . . . . . 8 . 8 8 8 8 8 8 8 8 8 . 8 8 8 . . . . . . . 8 . 8 . 8 . . . . . . . . . . . . . . .
                        8 . . 8 . . 8 . . . . . . . . . 8 8 8 8 8 . . 8 . 8 8 8 8 8 8 8 8 . . . . . 8 . . . . . . 8 . . . . . . . . . . . .
                        . . . . . 8 . 8 . 8 . 8 . . . . . . 8 8 8 . . 8 . 8 . 8 8 . 8 . 8 . . . . . . . . 8 . . . . . . . . . . . . . . . .
                        . . . . . . 8 8 . 8 . . 8 8 8 8 . . 8 8 8 8 8 8 . . 8 8 . 8 . . . . . . . . . . 8 8 8 . . . . . . . . . . . . . . .
                        . . . . . . 8 . 8 8 . . . 8 . 8 8 8 . 8 8 8 . 8 . . . . . . . . 8 . . . . . . . . . . 8 8 . 8 . . . . . . . . . . .
                        . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . 8 8 8 8 8 8 . . 8 . . 8 . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . .
                        . . . . . 8 . . . 8 8 8 8 8 8 8 8 . . . . . 8 . . 8 . . . . . . . . . . 8 . . . . . 8 8 . . . . . . . . . . . . . .
                        . . . . . . . . 8 . . . 8 8 . 8 8 . . . 8 . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . .
                        . . . . . . . . 8 . . . 8 8 . 8 . . . . 8 . . . 8 8 . . . 8 . 8 . . . . . . . 8 8 . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 . . 8 8 . . . . . . . . . . . . 8 . . . . . . . 8 8 8 . . 8 . . . . . . . . . . . . . . .
                        . . . . . . . 8 . . . . . . . 8 . 8 . . . . . 8 8 . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . .
                        . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . 8 . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . 8 . . 8 . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e
                    `, img`
                        . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . 8 8 8 . . . . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 . . . . . . 8 . . . . . . . . . . . . . . .
                        . . . . . 8 . 8 . . . . . . . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . 8 . . . . . . . . . . . . . . .
                        . . . . . 8 . . . . . . . . . . . . . . . . . 8 8 8 . . . . . . . 8 8 . 8 8 8 . 8 8 8 . . . . . . . . . . . . . .
                        . . . . 8 8 8 . . . . . . . . . . 8 . 8 . . . 8 . 8 . . . . . . . 8 . 8 8 8 . . . . 8 8 . 8 . . . . . . . . . . .
                        . . . 8 8 8 . 8 . . . . . . . . . . . . . . 8 . . . 8 . . . . . . . . 8 . 8 8 . . . 8 8 . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . 8 . 8 . . . . . . . . . . . . . . . . . . . . . . 8 . . 8 8 8 8 . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . 8 . 8 . . . . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . .
                        . . . . . . . . 8 . . . . . . . 8 . 8 8 . . . . . . . . . . . . . . . . . . 8 . 8 8 . . . . . . . . . . . . . . .
                        . . 8 8 . 8 . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . . 8 8 . . . . . 8 . . . . . . . . .
                        . . 8 . . . . . . . . . . . . . 8 . 8 . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . 8 . . . . . . . .
                        . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 . . . . . . 8 . . . .
                        . . 8 . 8 . . . . . . . . 8 8 . . . . . . . . . . . . . . . 8 . . . . . . . . . . . 8 . 8 8 8 . . . . . 8 8 8 . .
                        . . . . . . . . . . . . . 8 . 8 . . . . . . . . . . . . 8 8 . . . . . . . . . . . . 8 . 8 8 8 . . . . . . . . . .
                        . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . 8 8 . . . . . 8 . . . . . .
                        . . . . . . . 8 8 8 . . . 8 . . . . . . . . . . . . . . . 8 . 8 8 . . . . . . . . . . 8 8 . 8 8 . . . . . . . . .
                        . . 8 . . . . . 8 8 . . . 8 . . . . . . . . . . . . . . 8 8 . 8 . . . . . . . . . . . 8 . . 8 . . . 8 . . . . . .
                        . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 . 8 . . . . . . . . .
                        . . 8 . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . 8 . 8 . 8 . . . . . . .
                        . 8 . 8 . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 . . 8 . . . . . . . .
                        . . 8 8 . . . 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . 8 . . . 8 8 . . . . . .
                        . . . . . . 8 . 8 . . 8 . . . . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . 8 8 . 8 . . . . . . . . . .
                        . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . 8 . 8 . . . . . . . . . . .
                        . . . . 8 8 . . 8 . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . 8 . 8 . 8 8 . . . . . . . . . .
                        . . . . . . 8 . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . 8 . 8 . 8 . . . . . . . . . . . .
                        . . . . . . . 8 . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . 8 . . 8 . 8 . . . 8 . . . . . . . . .
                        . . . . . . . . 8 . . . . . . . . . 8 . . . . . . . . . . . . . . . . . 8 . . 8 8 . . . . 8 . . . . . . . . . . .
                        . . . . . . . 8 . . . . 8 8 . . . . . . . 8 . . . . . . . . 8 8 . . . . 8 . 8 . . . 8 . . . . . . . . . . . . . .
                        . 8 . . . . 8 . 8 . . . . 8 8 . . . . . . . . . . . . . . 8 . . . . . . . . . . . 8 8 . . . . . . . . . . . . . .
                        . . . . . . 8 . 8 8 . . 8 . . 8 . . . 8 . 8 8 . . . . 8 . 8 . . 8 . . . . . . . . . 8 8 . . . . . . . . . . . . .
                        . . . . 8 . . . . . . . . 8 . . . . . . 8 8 8 . . . . . . . . . . . . . . . . . 8 . . . 8 . . . . . . . . . . . .
                        . . . . . . . 8 . 8 8 8 . 8 8 . . 8 . . . 8 8 . 8 . . . . 8 . . . . 8 . . . . . . 8 8 8 8 . . . . . . . . . . . .
                        . . . . 8 . 8 8 8 . 8 8 . . 8 . . . . 8 8 8 . . . 8 . . . . . . . . 8 8 . . . . . . 8 . . . . . . . . . . . . . .
                        . . . . 8 . 8 8 8 . . . . 8 8 8 8 . . . . . . 8 . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . .
                        . . . . . . . 8 . . . 8 8 8 8 . 8 . . . 8 . . . 8 . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . 8 . 8 . . . . . . 8 8 . . . . . . . . . . . . . . 8 8 . 8 . . . . . . . . . . . . . . .
                        . . . . 8 8 . 8 . . . . . 8 . . . . . . . . 8 . . . . 8 . . . . . . . . 8 . 8 . . . . . . . . . . . . . . . . . .
                        . . . . . . 8 8 . . . . . 8 8 . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . 8 . . . . . . . . . . . . 8 8 . . . . . 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
                    `, img`
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . .
                        8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . .
                        8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 . . . .
                        . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . .
                        . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . 8 8 . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . 8 . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . 8 . 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . 8 . 8 8 . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . 8 . . . . . . . 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . 8 . . 8 . 8 . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . 8 . 8 8 . . . . 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . 8 8 8 . 8 . . . . . 8 . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . .
                        8 8 . 8 8 8 8 . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . .
                        . 8 . . . 8 8 . . 8 8 . . . 8 . 8 8 . . 8 8 . . . . . . . . . . . . . . . . . . .
                        . . . 8 8 . . 8 . . . . . . . 8 8 . . 8 8 8 . . . . . . . . . . . . . . . . . . .
                        . . . 8 8 8 . . . . . . . . . 8 . . 8 . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . 8 . 8 . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . .
                        . . . . . . . 8 . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
                    `, img`
                        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
                    `],
                    50,
                    false
                )
            } else {
                // Sets the win state. After five seconds, if this
                // block is not called, the player loses.
                gamejam.win(true)
            }
        })

    }
}

namespace SpriteKind {
    export const Balloon = SpriteKind.create()
}
namespace _balloondart {
    let projectile: Sprite = null
    let Dart: Sprite = null
    export function main() {
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . 5 .
                . 5 .
                . 2 .
                . 2 .
                . 2 .
                . 2 .
                4 2 4
                4 2 4
                4 2 4
                4 2 4
                4 2 4
                4 2 4
                4 2 4
                4 2 4
                4 2 4
            `, Dart, 0, -200)
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Balloon, function (sprite, otherSprite) {
            sprite.destroy(effects.confetti, 500)
            otherSprite.destroy()
            music.pewPew.play()
            info.changeScoreBy(1)
            if (info.score() == 7) {
                music.jumpUp.playUntilDone()
                // Sets the win state. After five seconds, if this
                // block is not called, the player loses.
                gamejam.win(true)
            }
        })
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("POP ALL THE", 500)
        // Splash instruction text for the player.
        gamejam.showInstruction("BALLOONS!", 500)
        scene.setBackgroundColor(0xd);
        scene.createRenderable(0, (t, c) => {
            t.fillRect(7, 6, 148, 70, 0x5);
            t.fillRect(9, 8, 144, 66, 0xe);
            t.fillRect(11, 10, 140, 62, 0x9);
            t.fillRect(13, 12, 136, 58, 0xd);
        });
        const bImage = img`
            . . . . . b 3 3 3 b . . . . . .
            . . . . b 3 3 3 3 3 b . . . . .
            . . . b 3 1 3 3 3 3 3 b . . . .
            . . . b 1 3 3 3 3 3 3 b . . . .
            . . b 3 3 3 3 3 3 3 3 3 b . . .
            . b 3 3 3 3 3 3 3 3 3 3 3 b . .
            . b 3 3 3 3 3 3 3 3 3 3 3 b . .
            . b 3 3 3 3 3 3 3 3 3 3 3 b . .
            . . b 3 3 3 3 3 3 3 3 3 b . . .
            . . . b 3 3 3 3 3 3 3 b . . . .
            . . . b 3 3 3 3 3 3 b . . . . .
            . . . . b 3 3 3 3 3 b . . . . .
            . . . . b 3 3 3 3 b . . . . . .
            . . . . . 3 3 3 3 . . . . . . .
            . . . . . . 3 3 . . . . . . . .
            . . . . . 3 3 3 3 . . . . . . .
        `
        let Balloon1 = sprites.create(bImage, SpriteKind.Balloon)
        Balloon1.setPosition(30, 30)
        let Balloon2 = sprites.create(bImage.clone(), SpriteKind.Balloon)
        Balloon2.image.replace(3, 5)
        Balloon2.setPosition(60, 30)
        let Balloon3 = sprites.create(bImage.clone(), SpriteKind.Balloon)
        Balloon3.image.replace(3, 6)
        Balloon3.setPosition(90, 30)
        let Balloon4 = sprites.create(bImage.clone(), SpriteKind.Balloon)
        Balloon4.image.replace(3, 8)
        Balloon4.setPosition(120, 30)
        let Balloon5 = sprites.create(bImage.clone(), SpriteKind.Balloon)
        Balloon5.image.replace(3, 4)
        Balloon5.setPosition(50, 60)
        let Balloon6 = sprites.create(bImage.clone(), SpriteKind.Balloon)
        Balloon6.image.replace(3, 2)
        Balloon6.setPosition(80, 60)
        let Balloon7 = sprites.create(bImage.clone(), SpriteKind.Balloon)
        Balloon7.image.replace(3, 7)
        Balloon7.setPosition(110, 60)
        Dart = sprites.create(img`
            . . . . . . c . . . . .
            . . . . . . c . . . . .
            . . . . . c c . . . . .
            . . . . . c c . . . . .
            . . . . . c c . . . . .
            . . . . . c c . . . . .
            . . . . . c c . . . . .
            . . . . . c c . . . . .
            . . . . . c c . . . . .
            . . . . . c c . . . . .
            . . . . . c f . . . . .
            . . . . . c f . . . . .
            . . . 6 c c f c 6 . . .
            . . 6 c c c f c c 6 . .
            . 6 c c c c c f c c 6 .
            6 c c c 6 c 6 6 f c c 6
        `, SpriteKind.Player)
        Dart.bottom = 120
        Dart.setStayInScreen(true)
        controller.moveSprite(Dart, 150, 0)

    }
}

namespace _brush {
    export function main() {
        /**
 * A 5-second game where you brush all the gunk out of your teeth.
 */
        let gunk: Sprite = null
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
            otherSprite.destroy(effects.rings, 500)
            info.changeScoreBy(1)
            if (info.score() == 4) {
                // Sets the win state. After five seconds, if this
                // block is not called, the player loses.
                gamejam.win(true)
            }
        })
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("BRUSH", 500)
        const smile = img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 1
            . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 . . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1
            . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 b
            . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 b
            . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 b
            . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 b
            . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 b b
            . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 b .
            . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 b b .
            . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 b . .
            . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 b b . .
            . . . . . . . . . . . . . . . . . . b b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b b b 1 1 b . . . .
            . . . . . . . . . . . . . . . . . . . b b 1 1 1 1 b b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b . . b b b . . . .
            . . . . . . . . . . . . . . . . . . . . b b 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . b b 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . b b 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . b b b b 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 b b . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 b b b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 1 1 b b . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . b b 1 1 b b b f b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 b b f f b 1 1 1 b . . . b b b b b . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b f f f b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 b f f f b b b 1 b . b b b 1 1 1 b . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b f f f f f f b b 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 1 1 1 1 1 1 1 b f f f f f b b b b 1 1 1 1 1 1 b . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b f f f f f b b b 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b f b 1 1 1 1 1 1 1 1 1 b f f f f f f f b 1 1 1 1 1 1 1 . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 b f f f f f f f b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b f b b b 1 1 1 b b b b b f f f f f f b 1 1 1 1 1 1 1 1 . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 b f f b b b b b f f f f f f b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b f f f f b b b b b f f f f f f f f f b b 1 1 1 1 1 1 1 . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 b b b b 1 1 1 b b b f f f f b b b b b b b b b b b b b b b b b b b b b b 1 b b b b b b b 1 1 1 1 1 1 b b b b b f f f f f f f f f f b b b b b f f f b 1 1 1 1 1 1 1 1 . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 b 1 1 1 1 1 1 1 b b b b b b b 1 1 1 b b f b b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 b b b b b b b b 1 1 b b b b b f f f f f b b b 1 1 1 b b b f b 1 1 1 1 1 1 . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 b b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 b b b 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 b f b 1 1 1 1 1 1 1 b b b f f b b 1 1 1 1 1 1 1 b b b 1 1 1 1 1 1 . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 b 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 b b b b 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 b b 1 . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 b . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 b . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 . . . b . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `
        scene.createRenderable(-1, (t) => {
            t.drawTransparentImage(smile, 27, 32)
        })
        for (let i = 0; i < 4; i++) {
            gunk = sprites.create(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . 7 7 6 . . . . . . 7 6 . . . .
                . 7 5 7 6 6 . . 7 7 7 6 . . . .
                . 7 7 7 7 7 6 . 5 7 6 . . . . .
                . . . . 7 7 7 . 7 7 . . . . . .
                . . . . . 7 7 7 7 7 . 6 . . . .
                . . 7 6 . 5 7 7 7 7 7 6 . . . .
                . . 7 7 7 7 7 7 5 7 7 . . . . .
                . . . . 7 7 7 7 7 7 7 . . . . .
                . . . . 7 6 . . 7 7 7 7 . . . .
                . . . 7 7 6 . . 7 7 7 7 7 6 . .
                . . . 7 6 . . . . . 7 7 5 6 . .
                . . 7 7 6 . . . . . . 7 7 6 . .
                . . 7 6 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, SpriteKind.Food)
            gunk.setPosition(randint(30, 130), randint(40, 80))
        }
        let brush = sprites.create(img`
            . . . . . . . . 2 2 2 3 . . . .
            . . . . . . . 2 2 2 2 2 3 1 1 .
            . . . . . . . 2 2 2 2 2 3 1 b 1
            . . . . . . . 2 2 2 2 2 3 1 1 .
            . . . . . . . 2 2 2 2 2 3 b 1 1
            . . . . . . . 2 2 2 2 2 3 1 1 .
            . . . . . . . 2 2 2 2 2 3 1 b 1
            . . . . . . . . 2 2 2 2 . . . .
            . . . . . . . . 2 2 3 . . . . .
            . . . . . . . . 2 2 3 . . . . .
            . . . . . . . . 2 2 3 . . . . .
            . . . . . . . 2 2 2 3 . . . . .
            . . . . . . . 2 2 2 3 . . . . .
            . . . . . . . 2 2 3 . . . . . .
            . . . . . . . 2 2 3 . . . . . .
            . . . . . . 2 2 2 3 . . . . . .
            . . . . . . 2 2 2 3 . . . . . .
            . . . . . . 2 2 2 3 . . . . . .
            . . . . . . 2 2 2 3 . . . . . .
            . . . . . . 2 2 2 2 3 . . . . .
            . . . . . . 2 2 2 2 3 . . . . .
            . . . . . 2 2 2 2 2 3 . . . . .
            . . . . . 2 2 2 2 2 3 . . . . .
            . . . . . 2 2 2 2 2 3 . . . . .
            . . . . . 2 2 2 2 2 3 . . . . .
            . . . . . 2 2 2 2 2 3 . . . . .
            . . . . . 2 2 2 2 2 3 . . . . .
            . . . . . 2 2 2 2 2 3 . . . . .
            . . . . . 2 2 2 2 3 . . . . . .
            . . . . . 2 2 2 2 3 . . . . . .
            . . . . . 2 2 2 2 3 . . . . . .
            . . . . . . 2 2 3 . . . . . . .
        `, SpriteKind.Player)
        brush.setPosition(5, 100)
        controller.moveSprite(brush)

    }
}


namespace SpriteKind {
    export const tool = SpriteKind.create()
}
namespace _chop {
    export function main() {
        /**
         * Grab the axe and chop the tree twice before time is up!
         */
        let treeY = 0
        let treeX = 0
        let axeY = 0
        let axeX = 0
        let materials = 0
        let chopper: Sprite = null
        let tree: Sprite = null
        let axe: Sprite = null
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("CHOP", 500)
        scene.setBackgroundColor(6);
        axe = sprites.create(img`
            . . . . . . . .
            . . e 2 2 1 . .
            . . e 2 2 1 . .
            . . e . . . . .
            . . e . . . . .
            . . e . . . . .
            . . e . . . . .
            . . e . . . . .
        `, SpriteKind.tool)
        tree = sprites.create(img`
            .
        `, SpriteKind.Food)
        chopper = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . .
            . . . . . f 5 5 5 f f . . . . .
            . . . . f 1 5 2 5 1 6 f . . . .
            . . . f 1 6 6 6 6 6 1 6 f . . .
            . . . f 6 6 f f f f 6 1 f . . .
            . . . f 6 f f d d f f 6 f . . .
            . . f 6 f d f d d f d f 6 f . .
            . . f 6 f d 3 d d 3 d f 6 f . .
            . . f 6 6 f d d d d f 6 6 f . .
            . f 6 6 f 3 f f f f 3 f 6 6 f .
            . . f f d 3 5 3 3 5 3 d f f . .
            . . f d d f 3 5 5 3 f d d f . .
            . . . f f 3 3 3 3 3 3 f f . . .
            . . . f 3 3 5 3 3 5 3 3 f . . .
            . . . f f f f f f f f f f . . .
            . . . . . f f . . f f . . . . .
        `, SpriteKind.Player)
        chopper.setStayInScreen(true)
        controller.moveSprite(chopper)
        materials = 0


        sprites.onOverlap(SpriteKind.Player, SpriteKind.tool, function (sprite, otherSprite) {

            tree.setImage(img`
                . . . . . . . . . . . . . . . . 8 6 . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . 6 6 8 8 8 6 7 8 8 6 . . . . . . . . . . . . . . .
                . . . . . . . . . . . 8 6 6 6 8 7 7 6 8 8 8 6 8 . . . . . . . . . . . .
                . . . . . . . . . . . . 8 6 8 7 7 7 7 6 7 7 6 8 . . . . . . . . . . . .
                . . . . . . . . . 6 8 8 6 6 7 7 7 7 7 7 6 6 8 8 . . . . . . . . . . . .
                . . . . . . . . 6 7 7 6 7 7 7 7 7 7 7 7 7 8 6 6 6 . . . . . . . . . . .
                . . . . . . . . . 6 7 7 6 6 6 7 7 6 7 6 6 6 8 6 8 . . . . . . . . . . .
                . . . . . . . . . . 8 6 6 6 6 7 6 6 7 6 7 7 6 8 8 . . . . . . . . . . .
                . . . . . . . . . 8 6 6 6 6 6 6 6 6 6 6 6 7 7 7 8 . . . . . . . . . . .
                . . . . . . . . 6 6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 7 6 . . . . . . . . . .
                . . . . . . . 6 7 7 6 6 6 6 7 6 6 6 7 7 6 6 6 7 7 7 6 . . . . . . . . .
                . . . . . . 8 8 6 6 6 7 7 7 6 6 7 6 7 7 7 6 6 6 6 8 8 . . . . . . . . .
                . . . . . 6 7 7 6 6 7 7 7 6 6 7 7 6 7 7 7 7 6 6 6 7 6 8 . . . . . . . .
                . . . . 6 7 7 6 6 6 6 6 6 6 7 7 7 6 6 7 7 7 6 6 6 6 7 7 6 . . . . . . .
                . . . . . 8 6 6 7 7 7 6 6 6 7 7 6 6 6 7 6 6 7 7 7 7 6 7 7 6 . . . . . .
                . . . . . . 8 7 7 7 6 6 6 6 6 6 6 6 7 7 7 6 7 7 7 7 7 6 6 8 8 . . . . .
                . . . . 6 8 8 7 7 6 6 7 7 6 6 7 7 6 7 7 7 7 7 7 7 7 7 7 6 7 7 6 . . . .
                . . 8 8 6 6 6 6 6 6 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 7 7 8 . . .
                . 8 6 6 6 6 6 6 6 7 7 7 6 6 7 7 6 7 7 7 7 7 6 6 6 6 6 7 7 6 6 6 8 . . .
                . . 8 8 6 7 7 6 6 6 6 6 6 7 7 7 6 7 7 6 7 7 6 6 6 6 6 7 7 7 6 6 6 8 . .
                . . 8 6 7 7 6 6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 7 7 6 6 6 6 6 6 8 . .
                8 8 6 6 6 6 6 7 7 7 6 6 6 6 7 6 6 6 6 6 6 7 7 6 6 7 7 7 6 6 6 6 8 . . .
                6 6 6 8 6 6 6 6 7 6 6 6 7 7 6 6 7 6 7 7 6 7 7 6 6 6 7 7 6 6 6 6 6 8 . .
                8 8 8 6 6 6 6 6 6 6 6 7 7 7 6 7 7 6 7 7 6 6 7 6 6 6 6 6 6 7 7 6 6 6 8 .
                . 8 6 6 6 8 8 6 6 6 6 6 7 6 6 7 7 6 7 7 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 8
                . 8 6 6 8 8 6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 7 6 6 7 7 7 6 6 6 6 6 8 8
                . 6 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 8 8 . .
                . . 8 8 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 7 6 6 6 6 6 6 8 . . .
                . . . 8 6 6 8 8 6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 7 6 6 6 6 6 6 8 . . .
                . . . 8 6 8 8 6 6 6 8 6 6 6 6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 8 8 8 . . . .
                . . . . 8 8 8 6 6 8 8 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . .
                . . . . . . 8 6 8 8 6 6 6 8 6 6 6 8 6 6 6 6 8 6 6 6 8 6 8 . . . . . . .
                . . . . . . 8 8 8 6 6 6 8 8 6 6 8 8 6 6 6 8 8 8 6 6 8 8 8 . . . . . . .
                . . . . . . . . 8 8 8 8 8 8 8 6 8 8 8 8 8 c e 8 6 8 . . . . . . . . . .
                . . . . . . . . . . . . . . e 8 8 e 8 8 . e c . 8 . . . . . . . . . . .
                . . . . . . . . . . . . . . . e e e e . . e . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . c e e f . c e . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . c e e f c e c . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f e e f c e . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f c e e e c . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . f f c e e c . . . . . . . . . . . . . . .
            `)
            let x = 0;
            let y = 0;
            if (randint(0, 10) > 5) {
                x = randint(90, 130)
            } else {
                x = randint(30, 50)
            }
            if (randint(0, 10) > 5) {
                y = randint(70, 90)
            } else {
                y = randint(30, 50)
            }
            tree.setPosition(x, y)
            otherSprite.destroy()
            materials += 1
            chopper.setImage(img`
                . . . . . . 5 . 5 . . . . . . .
                . . . . . f 5 5 5 f f . . . . .
                . . . . f 1 5 2 5 1 6 f . . . .
                . . . f 1 6 6 6 6 6 1 6 f . . .
                . . . f 6 6 f f f f 6 1 f . . .
                . . . f 6 f f d d f f 6 e 2 2 1
                . . f 6 f d f d d f d f e 2 2 1
                . . f 6 f d 3 d d 3 d f e f . .
                . . f 6 6 f d d d d f 6 e f . .
                . f 6 6 f 3 f f f f 3 f e 6 f .
                . . f f d 3 5 3 3 5 3 d e f . .
                . . f d d f 3 5 5 3 f d e f . .
                . . . f f 3 3 3 3 3 3 f f . . .
                . . . f 3 3 5 3 3 5 3 3 f . . .
                . . . f f f f f f f f f f . . .
                . . . . . f f . . f f . . . . .
            `)
            chopper.say("An Axe!", 500)
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            if (materials >= 1) {
                chopper.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . 5 . 5 . . . . . .
                    . . . . . . f 5 5 5 f . . . . .
                    . . . . . f 6 2 5 5 6 f . . . .
                    . . . . f 6 6 6 6 1 6 6 f . . .
                    . . . . f 6 6 6 6 6 1 6 f . . .
                    1 2 2 e f d f d 6 6 6 1 f . . .
                    1 2 2 e f d f d 6 6 6 6 f f . .
                    . . . e f d 3 d d 6 6 6 f 6 f .
                    . . . e . f d d d f f 6 f f . .
                    . . . e f f f f 3 3 f f 6 6 f .
                    . . . e d d d d d d f f f f . .
                    . . . e d d d d d f 3 f . . . .
                    . . . . f f f f f d 5 3 f . . .
                    . . . . . f f f 3 3 f f . . . .
                    . . . . . f f f f f f f . . . .
                `)
            } else {
                chopper.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . 5 . 5 . . . . . .
                    . . . . . . f 5 5 5 f . . . . .
                    . . . . . f 6 2 5 5 6 f . . . .
                    . . . . f 6 6 6 6 1 6 6 f . . .
                    . . . . f 6 6 6 6 6 1 6 f . . .
                    . . . . f d f d 6 6 6 1 f . . .
                    . . . . f d f d 6 6 6 6 f f . .
                    . . . . f d 3 d d 6 6 6 f 6 f .
                    . . . . . f d d d f f 6 f f . .
                    . . . . . . f f 3 3 f f 6 6 f .
                    . . . . . f d d d d f f f f . .
                    . . . . . f d d d f 3 f . . . .
                    . . . . . . f f f d 5 3 f . . .
                    . . . . . f f f 3 3 f f . . . .
                    . . . . . f f f f f f f . . . .
                `)
            }
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
            if (materials == 1) {
                if (treeX < 90) {
                    treeX = randint(90, 130)
                } else {
                    treeX = randint(30, 50)
                }
                if (treeY < 70) {
                    treeY = randint(70, 90)
                } else {
                    treeY = randint(30, 50)
                }
                tree.setPosition(treeX, treeY)
                tree.setImage(img`
                    . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . b b b b . . . . . . . . . .
                    . . . . . . . . b b d d d d b b . . . . . . . .
                    . . . . . . . b d d b b b b d d b . . . . . . .
                    . . . . . . b d b b d d d d b b d b . . . . . .
                    . . . . . b d b b d b b b b d b b d b . . . . .
                    . . . . . b d b d b d d d d b d b d b . . . . .
                    . . . . . c d b b d b b b b d b b d c . . . . .
                    . . . . . c b d b b d d d d b b d b c . . . . .
                    . . . . . e f b d d b b b b d d b c e . . . . .
                    . . . . . e e f f b d d d d b c c e e . . . . .
                    . . . . . e e e e f f c c c c e e e . . . . . .
                    . . . . . c e e e e e e e e e e e e . . . . . .
                    . . . . . c e e e e e e e e e e e e . . . . . .
                    . . . . . f e e e e e e e e e e e e . . . . . .
                    . . . . . c c e e e e e e e e e e e . . . . . .
                    . . . . . . f e e e e e e e e e e e . . . . . .
                    . . . . . 6 f c e e e e e e e e e e 6 . . . . .
                    . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
                    . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
                    . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
                    . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
                    . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
                    . . . . . . e e 6 e e e e e e 6 e e f . . . . .
                    . . . . . . e e e e e e e e e e e e f . . . . .
                    . . . . . . e e e e e e e e e e e e f . . . . .
                    . . . . . . e e e e e e e e e e e c f . . . . .
                    . . . . . . c e e e e e e e e e e c f . . . . .
                    . . . . . . c e e e e e e e e e e f f . . . . .
                    . . . . . . f e e e e e e e e e e f e . . . . .
                    . . . . . 6 f e e e e e e e e e e f 6 . . . . .
                    . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
                    . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
                    . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
                    . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
                    . . . . . . e e 7 7 e e e e 6 7 e e . . . . . .
                    . . . . . . e e 6 e e e e e e 6 c e . . . . . .
                    . . . . . . e e f e e e e e e e c e . . . . . .
                    . . . . . . e e c e e e e e e e c e . . . . . .
                    . . . . . . e e c e e e e e e e f e . . . . . .
                    . . . . . . e e c e e e e e e e f e . . . . . .
                    . . . . . . e e e e e e e e e e f e . . . . . .
                    . . . . . . e e e e e e e e e e c e . . . . . .
                    . . . . . 6 e e e e e e e e e e c e 6 . . . . .
                    . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
                    . . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . .
                    . . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
                    . . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
                    . . . . . . c e 7 7 e e e e 6 7 e e . . . . . .
                    . . . . . . c e 6 e e e e e e 6 e e . . . . . .
                `)
                materials += 1
                chopper.say("One Chop!", 500)
            } else if (materials == 2) {
                materials += 1
                tree.setImage(img`
                    . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . b b b b . . . . . . . . . .
                    . . . . . . . . b b d d d d b b . . . . . . . .
                    . . . . . . . b d d b b b b d d b . . . . . . .
                    . . . . . . b d b b d d d d b b d b . . . . . .
                    . . . . . b d b b d b b b b d b b d b . . . . .
                    . . . . . b d b d b d d d d b d b d b . . . . .
                    . . . . . c d b b d b b b b d b b d c . . . . .
                    . . . . . c b d b b d d d d b b d b c . . . . .
                    . . . . . e f b d d b b b b d d b c e . . . . .
                    . . . . . e e f f b d d d d b c c e e . . . . .
                    . . . . . e e e e f f c c c c e e e . . . . . .
                    . . . . . c e e e e e e e e e e e e . . . . . .
                    . . . . . c e e e e e e e e e e e e . . . . . .
                    . . . . . f e e e e e e e e e e e e . . . . . .
                    . . . . . c c e e e e e e e e e e e . . . . . .
                    . . . . . . f e e e e e e e e e e e . . . . . .
                    . . . . . 6 f c e e e e e e e e e e 6 . . . . .
                    . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
                    . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
                    . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
                    . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
                    . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
                    . . . . . . e e 6 e e e e e e 6 e e f . . . . .
                `)
                // Sets the win state. After five seconds, if this
                // block is not called, the player loses.
                gamejam.win(true)
                chopper.say("Two Chops!", 500)
                music.playMelody("C D E F G A B C5 ", 400)
            }
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            if (materials >= 1) {
                chopper.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . 5 . 5 . . . . . . .
                    . . . . . f 5 5 5 f . . . . . .
                    . . . . f 6 5 5 2 6 f . . . . .
                    . . . f 6 6 1 6 6 6 6 f . . . .
                    . . . f 6 1 6 6 6 6 6 f . . . .
                    . . . f 1 6 6 6 d f d f e 2 2 1
                    . . f f 6 6 6 6 d f d f e 2 2 1
                    . f 6 f 6 6 6 d d 3 d f e . . .
                    . . f f 6 f f d d d f . e . . .
                    . f 6 6 f f 3 3 f f f f e . . .
                    . . f f f f d d d d d f e . . .
                    . . . . f 3 f d d d d f e . . .
                    . . . f 3 5 d f f f f f . . . .
                    . . . . f f 3 3 f f f . . . . .
                    . . . . f f f f f f f . . . . .
                `)
            } else {
                chopper.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . 5 . 5 . . . . . . .
                    . . . . . f 5 5 5 f . . . . . .
                    . . . . f 6 5 5 2 6 f . . . . .
                    . . . f 6 6 1 6 6 6 6 f . . . .
                    . . . f 6 1 6 6 6 6 6 f . . . .
                    . . . f 1 6 6 6 d f d f . . . .
                    . . f f 6 6 6 6 d f d f . . . .
                    . f 6 f 6 6 6 d d 3 d f . . . .
                    . . f f 6 f f d d d f . . . . .
                    . f 6 6 f f 3 3 f f . . . . . .
                    . . f f f f d d d d f . . . . .
                    . . . . f 3 f d d d f . . . . .
                    . . . f 3 5 d f f f . . . . . .
                    . . . . f f 3 3 f f f . . . . .
                    . . . . f f f f f f f . . . . .
                `)
            }
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            if (materials >= 1) {
                chopper.setImage(img`
                    . . . . . . 5 . 5 . . . . . . .
                    . . . . . f 5 5 5 f f . . . . .
                    . . . . f 1 5 2 5 1 6 f . . . .
                    . . . f 1 6 6 6 6 6 1 6 f . . .
                    . . . f 6 6 f f f f 6 1 f . . .
                    . . . f 6 f f d d f f 6 e 2 2 1
                    . . f 6 f d f d d f d f e 2 2 1
                    . . f 6 f d 3 d d 3 d f e f . .
                    . . f 6 6 f d d d d f 6 e f . .
                    . f 6 6 f 3 f f f f 3 f e 6 f .
                    . . f f d 3 5 3 3 5 3 d e f . .
                    . . f d d f 3 5 5 3 f d e f . .
                    . . . f f 3 3 3 3 3 3 f f . . .
                    . . . f 3 3 5 3 3 5 3 3 f . . .
                    . . . f f f f f f f f f f . . .
                    . . . . . f f . . f f . . . . .
                `)
            } else {
                chopper.setImage(img`
                    . . . . . . 5 . 5 . . . . . . .
                    . . . . . f 5 5 5 f f . . . . .
                    . . . . f 1 5 2 5 1 6 f . . . .
                    . . . f 1 6 6 6 6 6 1 6 f . . .
                    . . . f 6 6 f f f f 6 1 f . . .
                    . . . f 6 f f d d f f 6 f . . .
                    . . f 6 f d f d d f d f 6 f . .
                    . . f 6 f d 3 d d 3 d f 6 f . .
                    . . f 6 6 f d d d d f 6 6 f . .
                    . f 6 6 f 3 f f f f 3 f 6 6 f .
                    . . f f d 3 5 3 3 5 3 d f f . .
                    . . f d d f 3 5 5 3 f d d f . .
                    . . . f f 3 3 3 3 3 3 f f . . .
                    . . . f 3 3 5 3 3 5 3 3 f . . .
                    . . . f f f f f f f f f f . . .
                    . . . . . f f . . f f . . . . .
                `)
            }
        })
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            if (materials >= 1) {
                chopper.setImage(img`
                    . . . . . . 5 5 . . . . . . . .
                    . . . . f 5 5 5 5 f . . . . . .
                    . . . f 6 6 6 6 6 6 f . . . . .
                    . . f 6 1 1 1 6 1 6 6 f . . . .
                    . . f 6 6 6 6 6 6 6 6 f . . . .
                    . . f 6 6 6 6 6 6 6 6 f e 2 2 1
                    . . f 6 6 6 6 6 6 6 6 f e 2 2 1
                    . f f 6 6 6 6 6 6 6 6 f f . . .
                    f 6 6 6 f 6 6 6 6 f 6 6 6 f . .
                    . f f f 3 f f f f 3 f f f . . .
                    . . f d 5 3 3 3 3 5 d f e . . .
                    . f d d f 3 3 3 3 f d d e . . .
                    . . f f f 5 3 3 5 f f f . . . .
                    . . . f 3 3 5 5 3 3 f . . . . .
                    . . . f 3 3 3 3 3 3 f . . . . .
                    . . . . f f f f f f . . . . . .
                `)
            } else {
                chopper.setImage(img`
                    . . . . . . . 5 5 . . . . . . .
                    . . . . . f 5 5 5 5 f . . . . .
                    . . . . f 6 6 6 6 6 6 f . . . .
                    . . . f 6 1 1 1 6 1 6 6 f . . .
                    . . . f 6 6 6 6 6 6 6 6 f . . .
                    . . . f 6 6 6 6 6 6 6 6 f . . .
                    . . . f 6 6 6 6 6 6 6 6 f . . .
                    . . f f 6 6 6 6 6 6 6 6 f f . .
                    . f 6 6 6 f 6 6 6 6 f 6 6 6 f .
                    . . f f f 3 f f f f 3 f f f . .
                    . . . f d 5 3 3 3 3 5 d f . . .
                    . . f d d f 3 3 3 3 f d d f . .
                    . . . f f f 5 3 3 5 f f f . . .
                    . . . . f 3 3 5 5 3 3 f . . . .
                    . . . . f 3 3 3 3 3 3 f . . . .
                    . . . . . f f f f f f . . . . .
                `)
            }
        })
        // The axe will show up near the border of the screen.
        function setAxeLocation() {
            if (randint(0, 10) > 5) {
                axeX = randint(10, 30)
            } else {
                axeX = randint(130, 150)
            }
            if (randint(0, 10) > 5) {
                axeY = randint(10, 30)
            } else {
                axeY = randint(90, 110)
            }
            axe.setPosition(axeX, axeY)
        }

        setAxeLocation()
    }
}

namespace _chop2 {
    export function main() {
        let projectile: Sprite = null
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
            otherSprite.destroy(effects.spray, 500)
            info.changeScoreBy(1)
            // Sets the win state. After five seconds, if this
            // block is not called, the player loses.
            gamejam.win(true)
        })
        /**
         * A demo game: chop the trees to win. Ensure that you're calling the "win game" block somewhere in the code.
         */
        info.setScore(0)
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("chop", 500)
        scene.setBackgroundColor(7)
        let person = sprites.create(img`
            . . . . f f f f . . . . .
            . . f f f f f f f f . . .
            . f f f f f f c f f f . .
            f f f f f f c c f f f c .
            f f f c f f f f f f f c .
            c c c f f f e e f f c c .
            f f f f f e e f f c c f .
            f f f b f e e f b f f f .
            . f 4 1 f 4 4 f 1 4 f . .
            . f e 4 4 4 4 4 4 e f . .
            . f f f e e e e f f f . .
            f e f b 7 7 7 7 b f e f .
            e 4 f 7 7 7 7 7 7 f 4 e .
            e e f 6 6 6 6 6 6 f e e .
            . . . f f f f f f . . . .
            . . . f f . . f f . . . .
        `, SpriteKind.Player)
        controller.moveSprite(person)
        game.onUpdateInterval(500, function () {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . b b b b . . . . . . . . . .
                . . . . . . . . b b d d d d b b . . . . . . . .
                . . . . . . . b d d b b b b d d b . . . . . . .
                . . . . . . b d b b d d d d b b d b . . . . . .
                . . . . . b d b b d b b b b d b b d b . . . . .
                . . . . . b d b d b d d d d b d b d b . . . . .
                . . . . . c d b b d b b b b d b b d c . . . . .
                . . . . . c b d b b d d d d b b d b c . . . . .
                . . . . . e f b d d b b b b d d b c e . . . . .
                . . . . . e e f f b d d d d b c c e e . . . . .
                . . . . . e e e e f f c c c c e e e . . . . . .
                . . . . . c e e e e e e e e e e e e . . . . . .
                . . . . . c e e e e e e e e e e e e . . . . . .
                . . . . . f e e e e e e e e e e e e . . . . . .
                . . . . . c c e e e e e e e e e e e . . . . . .
                . . . . . . f e e e e e e e e e e e . . . . . .
                . . . . . 6 f c e e e e e e e e e e 6 . . . . .
                . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
                . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
                . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
                . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
                . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
                . . . . . . e e 6 e e e e e e 6 e e f . . . . .
            `, randint(0, 100), randint(0, 99))
        })

    }
}

namespace _conch {
    export function main() {
        let Conch: Sprite = null
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
            music.baDing.play()
            Conch.setPosition(randint(50, 160), 112)
            info.changeScoreBy(1)
            if (info.score() >= 5) {
                game.over(true)
            }
        })
        info.onCountdownEnd(function () {
            game.over(false)
        })
        info.setScore(0)
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("GRAB SHELLS!", 500)
        let DiverJoe = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . f f . . . . . . . . 4 . 4 . .
            . 4 f f . . . . . . . . 4 4 4 .
            4 . f f f . 5 c 5 c 5 4 4 4 . .
            f f . f f f 5 c 5 c 5 b 9 9 . .
            f f f . f f c c c c c f d c . .
            4 f f f . f 5 c 5 c 5 b d c c .
            4 . f f f f 5 c 5 c 5 f f f f d
            4 . . f f f f c c f f f . f f d
            4 . . . . . . b b . f f f . . .
            . . . . . . . . . . . f f f d d
            . . . . . . . . . . . . f f f d
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
        controller.moveSprite(DiverJoe)
        DiverJoe.setPosition(15, 12)
        DiverJoe.setStayInScreen(true)
        scene.setTileMap(img`
            8 8 8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8 8 8
            8 e 8 8 8 8 8 8 8 8
            e e 8 8 8 8 8 8 e 8
            e e e 8 8 8 8 e 8 8
            e e e 8 8 8 e e e 8
            7 e 7 8 7 8 e 7 e 7
        `)
        Conch = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . c . . .
            . . . . . . . . . . . c a . . .
            . . . . . . . . . . c a c . . .
            . . . . . . . . c c c b c . . .
            . . . . . . . c b a a c c . . .
            . . . . . . c c c c c b c . . .
            . . . . . c a c a a c a c . . .
            . . . . c a a b c a c a c . . .
            . . . c a c c c c a c c c . . .
            . . a a b a a a a a b a c . . .
            . c c c c c c c c c a c c c . .
        `, SpriteKind.Food)
        Conch.setStayInScreen(true)
        Conch.setPosition(randint(0, 160), 112)
        game.onUpdate(function () {
            if (DiverJoe.vx < 0) {
                DiverJoe.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . 4 . 4 . . . . . . . . f f .
                    . 4 4 4 . . . . . . . . f f 4 .
                    . . 4 4 4 5 c 5 c 5 . f f f . 4
                    . . 9 9 b 5 c 5 c 5 f f f . f f
                    . . c d f c c c c c f f . f f f
                    . c c d b 5 c 5 c 5 f . f f f 4
                    d f f f f 5 c 5 c 5 f f f f . 4
                    d f f . f f f c c f f f f . . 4
                    . . . f f f . b b . . . . . . 4
                    d d f f f . . . . . . . . . . .
                    d f f f . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `)
            } else if (DiverJoe.vy < 0) {
                DiverJoe.setImage(img`
                    . . d d . . 4 4 4 4 . . d d . .
                    . . d d . . . 4 4 4 4 . d d . .
                    . . f f . . 4 4 4 4 . . f f . .
                    . . f f . . . b 4 b . . f f . .
                    . . f f f f 5 5 c 5 5 f f f . .
                    . . . . f f c c c c c f f . . .
                    . . . . . f 5 5 c 5 5 f . . . .
                    . . . . . . 5 5 c 5 5 . . . . .
                    . . . . . . c c c c c . . . . .
                    . . . . . . f 5 c 5 f . . . . .
                    . . . . . f f f f f f . . . . .
                    . . . . . f f . . f f . . . . .
                    . . . . f f . . . . f f . . . .
                    . . . . f 4 . . . . 4 f . . . .
                    . . . . 4 4 . . . . 4 4 . . . .
                    . . . 4 4 . . . . . . 4 4 . . .
                `)
            } else if (DiverJoe.vy > 0) {
                DiverJoe.setImage(img`
                    . . . 4 4 . . . . . . 4 4 . . .
                    . . . . 4 4 . . . . 4 4 . . . .
                    . . . . f 4 . . . . 4 f . . . .
                    . . . . f f . . . . f f . . . .
                    . . . . . f f . . f f . . . . .
                    . . . . . f f f f f f . . . . .
                    . . . . . . f 5 c 5 f . . . . .
                    . . . . . . c c c c c . . . . .
                    . . . . . . 5 5 c 5 5 . . . . .
                    . . . . . f 5 5 c 5 5 f . . . .
                    . . . . f f c c c c c f f . . .
                    . . . f f f 5 5 c 5 5 f f f . .
                    . . . f f . . b 4 b . . f f . .
                    . . . f f . 4 4 4 4 . . f f . .
                    . . . d d . . 4 4 4 4 . d d . .
                    . . . d d . 4 4 4 4 . . d d . .
                `)
            } else {
                DiverJoe.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . f f . . . . . . . . 4 . 4 . .
                    . 4 f f . . . . . . . . 4 4 4 .
                    4 . f f f . 5 c 5 c 5 4 4 4 . .
                    f f . f f f 5 c 5 c 5 b 9 9 . .
                    f f f . f f c c c c c f d c . .
                    4 f f f . f 5 c 5 c 5 b d c c .
                    4 . f f f f 5 c 5 c 5 f f f f d
                    4 . . f f f f c c f f f . f f d
                    4 . . . . . . b b . f f f . . .
                    . . . . . . . . . . . f f f d d
                    . . . . . . . . . . . . f f f d
                    . . . . . . . . . . . . . . . .
                `)
            }
        })

    }

}

namespace _crossroad {
    export function main() {
        let projectile: Sprite = null
        let vehicle = 0
        let crossy: Sprite = null
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
            otherSprite.destroy()
            // Sets the win state. After five seconds, if this
            // block is not called, the player loses.
            gamejam.win(true)
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
            crossy.destroy(effects.spray, 500)
            // Sets the win state. After five seconds, if this
            // block is not called, the player loses.
            gamejam.win(false)
        })
        /**
         * A 5-second game where the goal is to safely cross the road and get the food
         */
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("CROSS", 500)
        crossy = sprites.create(img`
            . . 4 4 4 . . . . 4 4 4 . . . .
            . 4 5 5 5 e . . e 5 5 5 4 . . .
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
            . e e 5 5 5 5 5 5 5 5 e e . . .
            . . e 5 f 5 5 5 5 f 5 e . . . .
            . . f 5 5 5 4 4 5 5 5 f . . f f
            . . f 4 5 5 f f 5 5 6 f . f 5 f
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f
            . . . f 4 5 5 5 5 5 5 4 4 5 f .
            . . . f 5 5 5 5 5 4 5 5 f f . .
            . . . f 5 f f f 5 f f 5 f . . .
            . . . f f . . f f . . f f . . .
        `, SpriteKind.Player)
        crossy.setStayInScreen(true)
        crossy.setPosition(0, 60)
        controller.moveSprite(crossy)
        let goal = sprites.create(img`
            . . 2 2 b b b b b . . . . . . .
            . 2 b 4 4 4 4 4 4 b . . . . . .
            2 2 4 4 4 4 d d 4 4 b . . . . .
            2 b 4 4 4 4 4 4 d 4 b . . . . .
            2 b 4 4 4 4 4 4 4 d 4 b . . . .
            2 b 4 4 4 4 4 4 4 4 4 b . . . .
            2 b 4 4 4 4 4 4 4 4 4 e . . . .
            2 2 b 4 4 4 4 4 4 4 b e . . . .
            . 2 b b b 4 4 4 b b b e . . . .
            . . e b b b b b b b e e . . . .
            . . . e e b 4 4 b e e e b . . .
            . . . . . e e e e e e b d b b .
            . . . . . . . . . . . b 1 1 1 b
            . . . . . . . . . . . c 1 d d b
            . . . . . . . . . . . c 1 b c .
            . . . . . . . . . . . . c c . .
        `, SpriteKind.Food)
        goal.setPosition(150, 60)
        game.onUpdateInterval(500, function () {
            vehicle = randint(1, 3)
            if (vehicle == 1) {
                projectile = sprites.createProjectileFromSide(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . 2 2 2 2 2 2 . . . .
                    . . . . . 2 2 4 4 2 2 2 2 . . .
                    . . . . . c 4 2 2 2 2 2 c . . .
                    . . . . 2 c 4 2 2 2 2 2 c 2 . .
                    . . . e 2 c 4 2 2 2 2 2 c 2 e .
                    . . . f 2 c 4 2 2 2 2 2 c 2 f .
                    . . . f e c 2 2 2 2 2 2 c e f .
                    . . . f 2 c 2 b b b b 2 c 2 f .
                    . . . e 2 2 b c c c c b 2 2 e .
                    . . . e e b c c c c c c b e e .
                    . . . f e 4 4 4 4 4 4 4 4 e f .
                    . . . f e d 2 2 2 2 2 2 d e f .
                    . . . . 2 d d 2 2 2 2 d d 2 f .
                    . . . . f 2 d 2 2 2 2 d 2 f . .
                    . . . . . e 2 2 2 2 2 2 e . . .
                `, 0, 60)
                projectile.x = 40
            } else if (vehicle == 2) {
                projectile = sprites.createProjectileFromSide(img`
                    . . . . . . 8 8 c c 8 8 . . . .
                    . . . . . 8 6 6 6 6 6 6 8 . . .
                    . . . . 6 c 6 6 6 6 6 6 c 6 . .
                    . . . 8 6 c 9 6 6 6 6 6 c 6 8 .
                    . . . f 6 6 9 6 6 6 6 6 c 6 f .
                    . . . f 6 6 9 6 6 6 6 6 6 6 f .
                    . . . f 6 6 9 6 6 6 6 6 6 6 f .
                    . . . f 6 c 6 9 9 6 6 6 c 6 f .
                    . . . 8 6 c 8 c c c c 8 c 6 8 .
                    . . . 8 6 8 c b b b b c 8 6 8 .
                    . . . 8 6 8 b b b b b b 8 6 8 .
                    . . . 8 8 8 8 8 8 8 8 8 8 8 8 .
                    . . . f 8 d 8 8 8 8 8 8 d 8 f .
                    . . . f 8 6 d 8 8 8 8 d 6 8 f .
                    . . . f f 8 8 8 8 8 8 8 8 f f .
                    . . . . f f . . . . . . f f . .
                `, 0, -80)
                projectile.x = 75
            } else {
                projectile = sprites.createProjectileFromSide(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . 3 3 3 3 3 3 . . . .
                    . . . . . 3 3 d d 3 3 3 3 . . .
                    . . . . . c d 3 3 3 3 3 c . . .
                    . . . . 3 c d 3 3 3 3 3 c 3 . .
                    . . . a 3 c d 3 3 3 3 3 c 3 a .
                    . . . f 3 c d 3 3 3 3 3 c 3 f .
                    . . . f a c 3 3 3 3 3 3 c a f .
                    . . . f 3 c 3 b b b b 3 c 3 f .
                    . . . a 3 3 b c c c c b 3 3 a .
                    . . . a a b c c c c c c b a a .
                    . . . f a d d d d d d d d a f .
                    . . . f a d 3 3 3 3 3 3 d a f .
                    . . . . 3 d d 3 3 3 3 d d 3 f .
                    . . . . f 3 d 3 3 3 3 d 3 f . .
                    . . . . . a 3 3 3 3 3 3 a . . .
                `, 0, 43)
                projectile.x = 110
            }
        })

    }
}


namespace SpriteKind {
    export const UI = SpriteKind.create()
    export const Button = SpriteKind.create()
}
namespace _date {
    let velocity = 0
    let velMult = 0
    let senpaiNoo: Sprite = null
    let cursor: Sprite = null
    let no: Sprite = null
    let yes: Sprite = null
    export function main() {
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        music.jumpUp.play()
        scene.setBackgroundColor(12)
        gamejam.showInstruction("GO ON A DATE", 700)
        velMult = 15
        let senpai = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . d d d d . . . . d d d d . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . d d d d . . . . d d d d . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . d . d . . d d d d d . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . d . d d d d d d d . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . d . d d d d . d d d . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . d d d d d d d . d d . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . d . d d d d d . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . d d d d d . d d . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . d d d d d . d d d . d d d d . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . d d d d d d . d . d . d d d d d . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . d . d . d d d . d . d d d d d . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . d d d . d d d d . d . d d d d . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . d d d d d d d d d d d . d d . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . d d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . d f f f f f f f d d . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . d d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
            . . . . . d d d d d d d d d d d b c d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
            . . . . d d d b b d d d d d d d c c d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
            . . . . d d d c b d d d d d d d d d c c c d d d d d f f f . . . . . . . . . . . . . . . . . . . . .
            . . . d d d c d d d d d d d d d d d d d d c c c c d d f f f . . . . . . . . . . . . . . . . . . . .
            . . . d c c d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
            . . . d d d d d d d d d d d d d b b b c c c c c b d d f f f f f f f f f f f . . . . . . . . . . . .
            . . d d d b c c c d d d d d d d d d c f f f d d c b d f f f f 8 8 8 8 8 f 8 f . . . . . . . . . . .
            . . d d b c f f d c d d d d d d d c b f f f d d d c d f f f f 8 8 8 8 8 f 8 8 f . . . . . . . . . .
            . . d d c b f f d d d d 3 3 d d d d d 1 1 d d d 1 d d f f f f 8 5 5 5 5 f 8 8 8 f . . . . . . . . .
            . . d d d d 1 1 d 3 d 3 3 3 d d d d b d 3 3 d 3 3 d d f f f f 8 5 f f 5 f 8 8 8 8 f . . . . . . . .
            . . d d d d 3 3 d 3 3 d d d 3 d d d 3 3 d 3 3 d 3 d d f f f f 8 5 f f 5 f 8 8 8 8 8 f . . . . . . .
            . . d 3 3 3 d 3 3 d 3 d d d d 3 d d 3 3 3 d 3 3 d 3 d f f f f 8 5 5 5 5 f 8 8 8 8 8 8 f . . . . . .
            . . d 3 3 3 d d 3 d d d d d d d d d d d 3 d d 3 d d d f f f 8 8 8 8 8 8 f 8 f 8 8 8 8 8 f . . . . .
            . . . d 3 d 3 d 3 3 d d d d d d d d d d d d d d d d f f f f 8 8 8 8 8 8 f 8 f f 8 8 8 8 8 f . . . .
            . . . d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f 8 8 f 8 f f f 8 8 8 8 8 f . . .
            . . . . d d d d d c d d b d d d c d d d d d d d d f f f f 8 8 8 8 f f f f 8 f f f 8 8 8 8 8 8 f . .
            . . . . . d d d d d b b d b b b d d d d d d d d f f f f f 8 8 8 8 8 8 f f 8 8 f f 8 8 f 8 8 8 8 f .
            . . . . . . d d d d d d d d d d d d d d d d f f f f f f 8 8 8 8 8 8 8 f f 8 8 8 f 8 8 f f 8 8 8 8 f
            . . . . . . . d d d d b b b d d d d d d d f f f f f f 8 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 f f f 8 8 8 f
            . . . . . . . 8 d d d d d d d d d d d f f f f f 8 8 8 8 8 8 d 8 d d 8 f 8 8 8 8 8 8 8 f f f 8 8 8 f
            . . d d d d d 8 8 8 d d d d d d d f f f f 8 8 8 8 8 8 8 8 8 d d d d d d 8 8 8 8 8 8 8 8 f f 8 f 8 f
            . d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 2 2 2 2 d d d d d 8 8 8 8 8 8 8 f 8 f f f
            . d d d d d d 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 f f f f f 2 2 2 2 2 2 2 d d d d 8 8 8 8 8 8 8 8 f f f
            . d f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 2 2 2 2 d d d d 8 8 8 8 8 8 8 f f f
            2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 2 2 2 2 2 d d d d 8 8 8 8 8 8 8 f f
            2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 d d d d 8 8 8 8 8 8 8 f
            2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 2 2 2 2 2 2 d d d 8 8 8 8 8 8 8 f
            2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f 2 2 2 2 2 d d 8 8 8 8 8 8 8 f
            2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f 2 2 2 2 2 d 8 8 8 8 8 8 8 f
            2 c c c c f f f f f f f f f f f f f f f f f f f f f f f d 8 8 8 8 8 8 f f 2 2 2 2 2 8 8 8 8 8 8 8 f
            . 2 c c f f f f f f f f f f f f f f f f f f f f f f f d d 8 8 8 d 8 8 f f f 2 2 2 2 2 8 8 8 8 8 8 f
            . d d d 8 8 8 f f f f f f f f f f f f f f f f f f f f d d 8 8 8 d d 8 f f f f 2 2 2 2 2 8 8 8 8 8 f
            . d d 8 8 8 8 c c f f f f f f f f f f f f f f f f f f d d 8 8 8 8 d 8 f f d d f 2 2 2 2 2 8 8 8 8 f
            d d d 8 8 8 8 8 c c c c f f f f f f f f f f f f f f f d d 8 8 8 8 8 d f d d 8 8 8 2 2 2 2 2 8 8 8 f
            d d d 8 8 8 8 8 . d d d 8 8 8 f f f f f f f f f f f f d d 8 8 8 8 8 d f d d 8 8 8 8 2 2 2 2 2 8 8 f
            d d d 8 8 8 8 8 . d d 8 8 8 8 c c f f f f f f f f f f f d d 8 8 8 8 8 d d d 8 8 8 8 8 2 2 2 2 2 8 f
            d d d 8 8 8 8 8 . d d 8 8 8 8 c c c f f f f f f f f f f d d 8 8 8 8 f d d 8 8 8 8 8 8 d 2 2 2 2 2 f
            . d d 8 8 8 8 8 . d d 8 8 8 8 . d d 8 8 8 8 8 f f f f f f d d 8 8 f f d d 8 8 8 8 8 8 d d 2 2 2 2 f
            . d d d 8 8 8 . . d d 8 8 8 8 . d d 8 8 8 8 8 f f f f f f f f f f f f d d d 8 8 8 8 8 d 8 8 2 2 2 f
            . . . . . . . . . d d 8 8 8 8 . d d 8 8 8 8 8 . . . . . . . . . . . . d d d d 8 8 8 8 d 8 8 8 2 2 .
            . . . . . . . . . d d d 8 8 8 . d d 8 8 8 8 8 . . . . . . . . . . . . d d 8 d 8 8 8 8 d 8 8 8 8 8 .
            . . . . . . . . . . d d 8 8 . . . d d 8 8 8 . . . . . . . . . . . . . d d 8 8 8 8 8 d d 8 8 8 8 8 .
            . . . . . . . . . . . . . . . . . d d 8 8 . . . . . . . . . . . . . . . d d 8 8 8 . d d 8 8 8 8 8 .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d d d 8 8 8 8 .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d d d 8 8 . .
        `, SpriteKind.UI)
        let date = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . 1 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . 1 . b b 1 . . . . . . . . . . . . . . . . . . 1 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . 1 . b . . . b . 1 . 1 . 1 . . 1 . . . 1 1 1 . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . 1 b . . . . . . 1 1 . b 1 b . 1 b . 1 . b b b . 1 b b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . 1 b . . . . . . 1 b b . 1 b . 1 b . . 1 1 . . . 1 b . 1 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . 1 . . . 1 . . 1 b . . 1 b . 1 b . . . b 1 . . 1 b . 1 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . 1 1 1 . b . 1 b . . . 1 1 1 b . 1 1 1 . b . 1 b . 1 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . b b b . . . b . . . . b b b . . b b b . . . b . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
            . . . . . 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 . . . . .
            . . . . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . . . .
            . . . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . . .
            . . 1 3 3 3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . .
            . 1 3 3 3 3 3 3 3 3 3 1 b b b 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 .
            . 1 3 3 3 3 3 3 3 3 3 1 b 3 3 3 1 3 3 3 1 1 3 3 3 3 3 3 1 3 3 1 3 3 3 1 1 3 3 3 1 3 3 1 3 3 3 3 3 1 3 3 3 1 3 3 3 1 1 3 3 3 1 1 1 3 3 3 1 1 1 3 3 3 3 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 1 1 3 3 3 3 3 3 3 1 1 3 3 3 1 1 1 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 .
            1 3 3 3 3 3 3 3 3 3 3 1 b 3 3 3 1 b 3 1 3 b 1 3 3 3 3 3 1 b 3 1 b 3 1 3 b 1 3 3 1 b 3 1 b 3 3 3 3 1 b 1 3 1 b 3 3 3 b 1 3 3 1 b b 1 3 3 1 b b 1 3 3 3 3 b 1 3 3 3 3 3 1 3 b 1 b 3 1 3 b 1 3 3 3 3 3 1 3 b 1 3 3 1 b b 1 3 3 3 3 3 3 3 b 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 3 3 1 b 3 3 3 1 b 3 1 b 3 1 b 3 3 3 3 1 b 3 1 b 3 1 b 3 1 b 3 1 b 3 1 b 3 3 3 3 1 b 1 b 1 b 3 3 1 1 1 b 3 1 b 3 1 b 3 1 b 3 1 b 3 3 1 1 1 b 3 3 3 3 1 b 3 1 b 3 1 b 3 1 b 3 3 3 3 1 b 3 1 b 3 1 b 3 1 b 3 3 3 3 3 1 1 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 3 3 1 b 3 3 1 3 b 3 1 b 3 1 b 3 3 3 3 3 1 1 3 b 3 1 b 3 1 b 3 1 b 3 1 b 3 3 3 3 3 1 3 1 3 b 3 1 3 b 1 b 3 1 b 3 1 b 3 1 b 3 1 b 3 1 3 b 1 b 3 3 3 3 1 b 3 1 b 3 1 b 3 1 b 3 3 3 3 1 b 3 1 b 3 1 b 3 1 b 3 3 3 3 1 3 b 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 3 3 1 1 1 1 3 b 3 3 3 1 1 3 b 3 3 3 3 3 3 1 b 3 3 3 1 1 3 b 3 3 1 1 1 b 3 3 3 3 3 1 b 1 b 3 3 3 1 1 1 b 3 1 b 3 1 b 3 1 b 3 1 b 3 3 1 1 1 b 3 3 3 3 3 1 1 1 b 3 3 1 1 3 b 3 3 3 3 3 1 1 3 b 3 1 b 3 1 b 3 3 3 3 3 1 1 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 3 3 3 b b b b 3 3 3 3 3 b b 3 3 3 3 3 3 1 3 b 3 3 3 3 b b 3 3 3 3 b b b 3 3 3 3 3 3 b 3 b 3 3 3 3 b b b 3 3 b 3 3 b 3 3 b 3 3 b 3 3 3 b b b 3 3 3 3 3 3 b 1 b 3 3 3 b b 3 3 3 3 3 3 3 b b 3 3 3 b 3 3 b 3 3 3 3 3 3 b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            d 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d
            b 3 3 3 3 3 3 3 3 3 3 3 3 3 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 3 3 3 3 1 b 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 b b 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 3 3 1 1 1 b 3 3 1 1 3 3 1 1 1 1 3 3 1 1 3 3 3 3 3 3 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 3 1 3 b 1 b 3 3 3 b 1 3 3 1 b b b 1 3 b 1 3 3 3 3 1 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 3 1 b 3 1 b 3 3 1 1 1 b 3 1 b 3 3 1 1 1 1 b 3 3 1 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 3 1 b 3 1 b 3 1 3 b 1 b 3 1 b 3 3 1 b b b b 3 3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b
            . b 3 3 3 3 3 3 3 3 3 3 1 1 1 b 3 3 1 1 1 b 3 3 1 1 3 3 1 1 1 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b .
            . b 3 3 3 3 3 3 3 3 3 3 3 b b b 3 3 3 b b b 3 3 3 b b 3 3 b b b 3 3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b .
            . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . .
            . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . . .
            . . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . . . .
            . . . . . b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b . . . . .
            . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.UI)
        yes = sprites.create(img`
            . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
            . . . . . 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 . . . . .
            . . . . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . . . .
            . . . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . . .
            . . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . .
            . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 .
            . 1 3 3 3 3 3 1 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 .
            1 3 3 3 3 3 3 b 1 3 3 3 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 1 3 3 3 1 3 3 3 1 1 1 1 3 3 3 3 1 1 1 1 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 b 1 3 1 b 3 3 1 b b b b 1 3 3 1 b b b b 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 b 1 b 3 3 3 1 3 3 3 3 1 3 3 1 3 3 3 3 3 3 3 3 3 3 1
            b 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 1 1 1 1 1 3 3 b 1 1 1 3 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 b b b b b 3 3 3 b b b 1 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 3 3 b
            . b 3 3 3 3 3 3 3 3 1 3 3 3 3 b 1 1 1 1 b 3 3 1 1 1 1 b 3 3 3 3 3 b .
            . b 3 3 3 3 3 3 3 3 b 3 3 3 3 3 b b b b 3 3 3 b b b b 3 3 3 3 3 3 b .
            . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . .
            . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . . .
            . . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . . . .
            . . . . . b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b . . . . .
            . . . . . . . b b b b b b b b b b b b b b b b b b b b b . . . . . . .
        `, SpriteKind.Button)
        no = sprites.create(img`
            . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
            . . . . . 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 . . . . .
            . . . . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . . . .
            . . . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . . .
            . . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 . .
            . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 .
            . 1 3 3 3 3 3 3 3 3 1 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 .
            1 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 3 1 b 1 3 3 3 1 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 3 1 3 1 3 3 3 1 3 3 1 b b b b 1 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 3 3 3 3 3 1 3 b 1 3 3 1 3 3 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1
            b 3 3 3 3 3 3 3 3 3 1 3 3 b 1 3 1 3 3 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 1 3 3 3 1 3 1 3 3 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 b
            b 3 3 3 3 3 3 3 3 3 1 3 3 3 b 1 1 3 3 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 b
            . b 3 3 3 3 3 3 3 3 1 3 3 3 3 1 1 3 3 b 1 1 1 1 b 3 3 3 3 3 3 3 3 b .
            . b 3 3 3 3 3 3 3 3 b 3 3 3 3 b b 3 3 3 b b b b 3 3 3 3 3 3 3 3 3 b .
            . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . .
            . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . . .
            . . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . . . .
            . . . . . b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b . . . . .
            . . . . . . . b b b b b b b b b b b b b b b b b b b b b . . . . . . .
        `, SpriteKind.Button)
        let clicker = sprites.create(img`
            . . . . . . . .
            . . . . . . . .
            . . 7 7 7 7 . .
            . . 7 7 7 7 . .
            . . 7 7 7 7 . .
            . . 7 7 7 7 . .
            . . . . . . . .
            . . . . . . . .
        `, SpriteKind.Player)
        cursor = sprites.create(img`
            . . . . . f f c . . . . . . . . . .
            . . . . f 1 1 f c . . . . . . . . .
            . . . . f 1 1 f c . . . . . . . . .
            . . . . f 1 1 f c . . . . . . . . .
            . . . . f 1 1 f c c . . . . . . . .
            . . . . f 1 1 f f f c c . . . . . .
            . . . . f 1 1 f 1 1 f f f c c . . .
            . . . . f 1 1 f 1 1 f 1 1 f f c . .
            . . . . f 1 1 f 1 1 f 1 1 f 1 f c .
            f f f . f 1 1 1 1 1 f 1 1 f 1 1 f c
            f 1 1 f f 1 1 1 1 1 1 1 1 f 1 1 f c
            f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f c
            . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f c
            . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f c
            . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f c
            . . . f 1 1 1 1 1 1 1 1 1 1 1 1 f c
            . . . f 1 1 1 1 1 1 1 1 1 1 1 f c .
            . . . . f 1 1 1 1 1 1 1 1 1 1 f c .
            . . . . f 1 1 1 1 1 1 1 1 1 f c . .
            . . . . . f 1 1 1 1 1 1 1 1 f c . .
            . . . . . f 1 1 1 1 1 1 1 1 f c . .
            . . . . . f f f f f f f f f f c . .
            . . . . . . c c c c c c c c c . . .
        `, SpriteKind.Player)
        senpai.setPosition(120, 40)
        date.setPosition(80, 98)
        cursor.setPosition(80, 60)
        clicker.setPosition(70, 47)
        no.setPosition(33, 28)
        yes.setPosition(24, 55)
        controller.moveSprite(cursor, 100, 100)
        randomizeVel()
        game.onUpdate(function () {
            clicker.setPosition(cursor.x - 10, cursor.y - 13)
            checkCollision()
            bumpEdge(yes)
            bumpEdge(no)
            if (clicker.overlapsWith(yes)) {
                if (controller.A.isPressed()) {
                    stopVel()
                    scene.setBackgroundColor(11)
                    gamejam.win()
                    music.magicWand.play()
                }
            }
            if (clicker.overlapsWith(no)) {
                if (controller.A.isPressed()) {
                    stopVel()
                    music.jumpDown.play()
                    senpai.setPosition(-300, -300)
                    senpaiNoo = sprites.create(img`
                        . . . . . . . . . . . . . . . . . . . . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . d d d d . . . . d d d d . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . d d d d . . . . d d d d . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . d . d . . d d d d d . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . d . d d d d d d d . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . d . d d d d . d d d . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . d d d d d d d . d d . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . d . d d d d d . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . d d d d d . d d . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . d d d d d . d d d . d d d d . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . d d d d d d . d . d . d d d d d . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . d . d . d d d . d . d d d d d . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . d d d . d d d d . d . d d d d . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . d d d d d d d d d d d . d d . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . d d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . d f f f f f f f d d . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . d d d d d d d d d d f f f f f f f f . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . d d d d d d d d d d d d d d f f f f f f . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . d d d d d d d d d d d d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . d d b b d d d d d d d b c d d d d d d d f f f f . . . . . . . . . . . . . . . . . . . . .
                        . . . . d d d c b d d d d d d d d d c c c c b d d d f f f . . . . . . . . . . . . . . . . . . . . .
                        . . . . d d c d d d d d d d d d d d d d d d c c c b f f f . . . . . . . . . . . . . . . . . . . . .
                        . . . d b c d d d d d d d d d d d d d d d d d d d d d f f f . . . . . . . . . . . . . . . . . . . .
                        . . . d d d d d d d d d d d d d d d d c c c c c d d d f f f . . . . . . . . . . . . . . . . . . . .
                        . . . d d c c c c d d d d d d d b b c b b b b b b d d f f f f f f f f f f f . . . . . . . . . . . .
                        . . d d c b b b b c d d d d d d d c b f f f b b c b d f f f f 8 8 8 8 8 f 8 f . . . . . . . . . . .
                        . . d c b f f f b b c d d d d d d c b f f c d d 1 c d f f f f 8 8 8 8 8 f 8 8 f . . . . . . . . . .
                        . . d c d f f c d 1 d d d d d d d d d f c c d 1 1 d d f f f f 8 5 5 5 5 f 8 8 8 f . . . . . . . . .
                        . . d d 1 f c c d 3 d d d d d d d d d d 3 3 d 3 3 d d f f f f 8 5 f f 5 f 8 8 8 8 f . . . . . . . .
                        . . d d d d 3 3 3 3 d d d d d d d d 3 d d 3 3 d 3 d d f f f f 8 5 f f 5 f 8 8 8 8 8 f . . . . . . .
                        . . d 3 3 3 d 3 d d d d d d d d d d 3 3 3 d 3 3 d 3 d f f f f 8 5 5 5 5 f 8 8 8 8 8 8 f . . . . . .
                        . . d 3 3 3 3 3 d d d d d d d d d d d 3 3 d d 3 d d d f f f 8 8 8 8 8 8 f 8 f 8 8 8 8 8 f . . . . .
                        . . . d 3 d d d d d d d d d d d d d d d d d d d d d f f f f 8 8 8 8 8 8 f 8 f f 8 8 8 8 8 f . . . .
                        . . . d d d d d d d d f f f d d d d d d d d d d d f f f f f f f f f 8 8 f 8 f f f 8 8 8 8 8 f . . .
                        . . . . d d d d d d d f f f f d d d d d d d d d d f f f f 8 8 8 8 f f f f 8 f f f 8 8 8 8 8 8 f . .
                        . . . . . d d d d d d f c c c d d d d d d d d d f f f f f 8 8 8 8 8 8 f f 8 8 f f 8 8 f 8 8 8 8 f .
                        . . . . . . d d d d d d d d d d d d d d d d f f f f f f 8 8 8 8 8 8 8 f f 8 8 8 f 8 8 f f 8 8 8 8 f
                        . . . . . . . d d d d d d d d d d d d d d f f f f f f 8 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 f f f 8 8 8 f
                        . . . . . . . 8 d d d d d d d d d d d f f f f f 8 8 8 8 8 8 d 8 d d 8 f 8 8 8 8 8 8 8 f f f 8 8 8 f
                        . . d d d d d 8 8 8 d d d d d d d f f f f 8 8 8 8 8 8 8 8 8 d d d d d d 8 8 8 8 8 8 8 8 f f 8 f 8 f
                        . d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 2 2 2 2 d d d d d 8 8 8 8 8 8 8 f 8 f f f
                        . d d d d d d 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 f f f f f 2 2 2 2 2 2 2 d d d d 8 8 8 8 8 8 8 8 f f f
                        . d f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 2 2 2 2 d d d d 8 8 8 8 8 8 8 f f f
                        2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 2 2 2 2 2 d d d d 8 8 8 8 8 8 8 f f
                        2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 d d d d 8 8 8 8 8 8 8 f
                        2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 2 2 2 2 2 2 d d d 8 8 8 8 8 8 8 f
                        2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f 2 2 2 2 2 d d 8 8 8 8 8 8 8 f
                        2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f 2 2 2 2 2 d 8 8 8 8 8 8 8 f
                        2 c c c c f f f f f f f f f f f f f f f f f f f f f f f d 8 8 8 8 8 8 f f 2 2 2 2 2 8 8 8 8 8 8 8 f
                        . 2 c c f f f f f f f f f f f f f f f f f f f f f f f d d 8 8 8 d 8 8 f f f 2 2 2 2 2 8 8 8 8 8 8 f
                        . d d d 8 8 8 f f f f f f f f f f f f f f f f f f f f d d 8 8 8 d d 8 f f f f 2 2 2 2 2 8 8 8 8 8 f
                        . d d 8 8 8 8 c c f f f f f f f f f f f f f f f f f f d d 8 8 8 8 d 8 f f d d f 2 2 2 2 2 8 8 8 8 f
                        d d d 8 8 8 8 8 c c c c f f f f f f f f f f f f f f f d d 8 8 8 8 8 d f d d 8 8 8 2 2 2 2 2 8 8 8 f
                        d d d 8 8 8 8 8 . d d d 8 8 8 f f f f f f f f f f f f d d 8 8 8 8 8 d f d d 8 8 8 8 2 2 2 2 2 8 8 f
                        d d d 8 8 8 8 8 . d d 8 8 8 8 c c f f f f f f f f f f f d d 8 8 8 8 8 d d d 8 8 8 8 8 2 2 2 2 2 8 f
                        d d d 8 8 8 8 8 . d d 8 8 8 8 c c c f f f f f f f f f f d d 8 8 8 8 f d d 8 8 8 8 8 8 d 2 2 2 2 2 f
                        . d d 8 8 8 8 8 . d d 8 8 8 8 . d d 8 8 8 8 8 f f f f f f d d 8 8 f f d d 8 8 8 8 8 8 d d 2 2 2 2 f
                        . d d d 8 8 8 . . d d 8 8 8 8 . d d 8 8 8 8 8 f f f f f f f f f f f f d d d 8 8 8 8 8 d 8 8 2 2 2 f
                        . . . . . . . . . d d 8 8 8 8 . d d 8 8 8 8 8 . . . . . . . . . . . . d d d d 8 8 8 8 d 8 8 8 2 2 .
                        . . . . . . . . . d d d 8 8 8 . d d 8 8 8 8 8 . . . . . . . . . . . . d d 8 d 8 8 8 8 d 8 8 8 8 8 .
                        . . . . . . . . . . d d 8 8 . . . d d 8 8 8 . . . . . . . . . . . . . d d 8 8 8 8 8 d d 8 8 8 8 8 .
                        . . . . . . . . . . . . . . . . . d d 8 8 . . . . . . . . . . . . . . . d d 8 8 8 . d d 8 8 8 8 8 .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d d d 8 8 8 8 .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d d d 8 8 . .
                    `, SpriteKind.UI)
                    senpaiNoo.setPosition(120, 40)
                    scene.setBackgroundColor(14)
                }
            }

            function stopVel() {
                velocity = 0
                yes.vx = velocity
                yes.vy = velocity
                no.vx = velocity
                no.vy = velocity
                controller.moveSprite(cursor, 0, 0)
            }
            function bumpEdge(mySprite: Sprite) {
                if (mySprite.left < 0) {
                    mySprite.vx = velMult
                }
                if (mySprite.right > scene.screenWidth()) {
                    mySprite.vx = velMult * -1
                }
                if (mySprite.top < 0) {
                    mySprite.vy = velMult
                }
                if (mySprite.bottom > scene.screenHeight()) {
                    mySprite.vy = velMult * -1
                }
            }
            function checkCollision() {
                if (cursor.x < 16) {
                    cursor.setPosition(cursor.x + 2, cursor.y)
                }
                if (cursor.x > 156) {
                    cursor.setPosition(cursor.x - 2, cursor.y)
                }
                if (cursor.y < 16) {
                    cursor.setPosition(cursor.x, cursor.y + 2)
                }
                if (cursor.y > 112) {
                    cursor.setPosition(cursor.x, cursor.y - 2)
                }
            }
        })

        function randomizeVel() {
            _date.eitherOr()
            yes.vx = velocity
            _date.eitherOr()
            yes.vy = velocity
            _date.eitherOr()
            no.vx = velocity
            _date.eitherOr()
            no.vy = velocity

        }
    }

    export function eitherOr() {
        if (randint(0, 1) == 0) {
            velocity = velMult * -1
        } else {
            velocity = velMult
        }
    }
}

namespace SpriteKind {
    export const Destroy = SpriteKind.create()
    export const Avoid = SpriteKind.create()
    export const Collect = SpriteKind.create()
}
namespace _dac {
    export function main() {

        let projectile: Sprite = null
        let squareship: Sprite = null
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . d d d d d d . . . . .
                . . . . . d d d d d d . . . . .
                . . . . . d d . . d d . . . . .
                . . . . . d d . . d d . . . . .
                . . . . . d d d d d d . . . . .
                . . . . . d d d d d d . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, squareship, 1000, 0)
        })
        gamejam.win(false)
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Destroy, function (sprite, otherSprite) {
            gamejam.win(false)
            sprite.destroy()
            otherSprite.destroy()
            scene.cameraShake(4, 500)
        })

        let destroyed = false;
        let collected = false;
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Destroy, function (sprite, otherSprite) {
            sprite.destroy()
            otherSprite.destroy()
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Avoid, function (sprite, otherSprite) {
            gamejam.win(false)
            sprite.destroy()
            otherSprite.destroy()
            scene.cameraShake(4, 500)
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Avoid, function (sprite, otherSprite) {
            gamejam.win(false)
            sprite.destroy()
            otherSprite.destroy()
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Collect, function (sprite, otherSprite) {
            otherSprite.destroy()
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Collect, function (sprite, otherSprite) {
            gamejam.win(false)
            sprite.destroy()
            otherSprite.destroy()
        })
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        scene.setBackgroundColor(2)
        // Splash instruction text for the player.
        gamejam.showInstruction("DESTROY", 800)
        scene.setBackgroundColor(5)
        // Splash instruction text for the player.
        gamejam.showInstruction("AVOID", 800)
        scene.setBackgroundColor(7)
        // Splash instruction text for the player.
        gamejam.showInstruction("COLLECT", 800)
        scene.setBackgroundColor(15)
        effects.blizzard.startScreenEffect(5000)
        squareship = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 . . . . . . . . . . . . 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        `, SpriteKind.Player)
        squareship.setPosition(12, 60)
        controller.moveSprite(squareship)
        let destroyMe = sprites.create(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 . . . . . . . . . . . . 2 2
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        `, SpriteKind.Destroy)
        let avoidMe = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        `, SpriteKind.Avoid)
        let collectMe = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 . . . . . . . . . . . . 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        `, SpriteKind.Collect)
        let squaredron = [destroyMe, avoidMe, collectMe]
        let random = squaredron.removeAt(randint(0, 2))
        random.setPosition(200, randint(16, 104))
        random.setVelocity(-160, 0)
        random = squaredron.removeAt(randint(0, 1))
        random.setPosition(280, randint(16, 104))
        random.setVelocity(-160, 0)
        random = squaredron.removeAt(0)
        random.setPosition(360, randint(16, 104))
        random.setVelocity(-160, 0)


        sprites.onDestroyed(SpriteKind.Destroy, function (sprite: Sprite) {
            if (destroyMe.x > 10) {
                destroyed = true;
                if (collected) {
                    gamejam.win(true);
                }
            }
        })
        sprites.onDestroyed(SpriteKind.Collect, function (sprite: Sprite) {
            if (collectMe.x > 10) {
                collected = true;
                if (destroyed) {
                    gamejam.win(true);
                }
            }
        })
    }
}


namespace SpriteKind {
    export const Effect = SpriteKind.create()
}
namespace _dodge {
    let RandomNum = 0
    let MissleSpeed = 0
    let Missle: Sprite = null
    let Explosion: Sprite = null
    let GameActive = false
    let MissleList: Sprite[] = []
    let PlaneSpeed = 0
    let Plane: Sprite = null
    let MisslePictureN: Image = null
    let PlanePictureS: Image = null
    let PlanePictureW: Image = null
    let PlanePictureE: Image = null
    let PlanePictureN: Image = null
    export function SpawnMissle(x: number, y: number) {
        Missle = sprites.create(MisslePictureN, SpriteKind.Enemy)
        music.pewPew.play()
        MissleSpeed = 100
        Missle.follow(Plane, MissleSpeed)
        Missle.setPosition(x, y)
        MissleList.push(Missle)
    }
    export function main() {
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            Plane.vx = 0 - PlaneSpeed
            Plane.setImage(PlanePictureW)
        })
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            Plane.vy = 0 - PlaneSpeed
            Plane.setImage(PlanePictureN)
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            Plane.vx = PlaneSpeed
            Plane.setImage(PlanePictureE)
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
            scene.setBackgroundColor(2)
            Explosion = sprites.create(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . 5 5 5 5 5 . . . . . .
                . . . . 5 4 4 4 4 4 5 . . . . .
                . . . 5 4 4 4 4 4 4 4 5 . . . .
                . . 5 4 4 4 4 2 4 4 4 4 5 . . .
                . 5 4 4 4 4 2 2 2 4 4 4 4 5 . .
                . 5 4 4 4 2 2 2 2 2 4 4 4 5 . .
                . 5 4 4 2 2 2 2 2 2 2 4 4 5 . .
                . 5 4 4 4 2 2 2 2 2 4 4 4 5 . .
                . 5 4 4 4 4 2 2 2 4 4 4 4 5 . .
                . . 5 4 4 4 4 2 4 4 4 4 5 . . .
                . . . 5 4 4 4 4 4 4 4 5 . . . .
                . . . . 5 4 4 4 4 4 5 . . . . .
                . . . . . 5 5 5 5 5 . . . . . .
                . . . . . . . . . . . . . . . .
            `, SpriteKind.Effect)
            Explosion.setPosition(Plane.x, Plane.y)
            Plane.destroy()
            scene.cameraShake(10, 500)
            gamejam.win(false)
            music.playTone(100, music.beat(BeatFraction.Quarter))
            music.playTone(90, music.beat(BeatFraction.Half))
            GameActive = false
            music.playMelody("C5 F C - - - - - ", 150)
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            Plane.vy = PlaneSpeed
            Plane.setImage(PlanePictureS)
        })
        scene.setBackgroundColor(9)
        gamejam.setDebug(true)
        gamejam.showInstruction("DODGE", 500)
        PlanePictureN = img`
            . . . . 9 . . . .
            . . . . d . . . .
            . . . d d d . . .
            . . d d d d d . .
            . d d d d d d d .
            d d d d d d d d d
            . d . . d . . d .
            . . . . d . . . .
            . . 7 7 d 7 7 . .
            . . . . d . . . .
        `
        PlanePictureE = img`
            . . . . . d . . . .
            . . . . d d d . . .
            . . . d d d . . 7 .
            . . d d d d . . 7 .
            9 d d d d d d d d d
            . . d d d d . . 7 .
            . . . d d d . . 7 .
            . . . . d d d . . .
            . . . . . d . . . .
        `
        PlanePictureW = img`
            . . . . . d . . . .
            . . . . d d d . . .
            . . . d d d . . 7 .
            . . d d d d . . 7 .
            9 d d d d d d d d d
            . . d d d d . . 7 .
            . . . d d d . . 7 .
            . . . . d d d . . .
            . . . . . d . . . .
        `
        PlanePictureS = img`
            . . . . 9 . . . .
            . . . . d . . . .
            . . . d d d . . .
            . . d d d d d . .
            . d d d d d d d .
            d d d d d d d d d
            . d . . d . . d .
            . . . . d . . . .
            . . 7 7 d 7 7 . .
            . . . . d . . . .
        `
        let MisslePictureW = img`
            . . . . . 2 . . .
            . . . . . 2 2 . .
            f 5 2 2 2 2 2 4 5
            . . . . . 2 2 . .
            . . . . . 2 . . .
        `
        let MisslePictureS = img`
            . . f . .
            . . 5 . .
            . . 2 . .
            . . 2 . .
            . . 2 . .
            2 2 2 2 2
            . 2 2 2 .
            . . 4 . .
            . . 5 . .
        `
        let MisslePictureE = img`
            . . . . . 2 . . .
            . . . . . 2 2 . .
            f 5 2 2 2 2 2 4 5
            . . . . . 2 2 . .
            . . . . . 2 . . .
        `
        MisslePictureN = img`
            . . f . .
            . . 5 . .
            . . 2 . .
            . . 2 . .
            . . 2 . .
            2 2 2 2 2
            . 2 2 2 .
            . . 4 . .
            . . 5 . .
        `
        PlanePictureE.flipX()
        PlanePictureS.flipY()
        MisslePictureW.flipX()
        MisslePictureS.flipY()
        Plane = sprites.create(PlanePictureE, SpriteKind.Player)
        PlaneSpeed = 100
        MissleList = sprites.allOfKind(SpriteKind.Enemy)
        GameActive = true
        Plane.setStayInScreen(true)
        gamejam.win(true)
        game.onUpdateInterval(1000, function () {
            if (GameActive) {
                RandomNum = randint(0, 3)
                if (RandomNum == 0) {
                    SpawnMissle(0, 0)
                }
                if (RandomNum == 1) {
                    SpawnMissle(160, 0)
                }
                if (RandomNum == 2) {
                    SpawnMissle(0, 160)
                }
                if (RandomNum == 3) {
                    SpawnMissle(160, 160)
                }
            }
        })
        game.onUpdate(function () {
            for (let value of MissleList) {
                if (Math.abs(value.vx) > Math.abs(value.vy)) {
                    if (value.vx > 0) {
                        value.setImage(MisslePictureW)
                    } else {
                        value.setImage(MisslePictureE)
                    }
                } else {
                    if (value.vy > 0) {
                        value.setImage(MisslePictureS)
                    } else {
                        value.setImage(MisslePictureN)
                    }
                }
            }
        })

    }
}


namespace _catchdog {
    export function main() {
        let bad_guy: Sprite = null
        let doggie: Sprite = null
        let hit: boolean = false;
        let Daiana = sprites.create(img`
            . . . . . f f 4 4 f f . . . . .
            . . . . f 5 4 5 5 4 5 f . . . .
            . . . f e 4 5 5 5 5 4 e f . . .
            . . f b 3 e 4 4 4 4 e 3 b f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . f 3 3 e b 3 e e 3 b e 3 3 f .
            . f 3 3 f f e e e e f f 3 3 f .
            . f b b f b f e e f b f b b f .
            . f b b e 1 f 4 4 f 1 e b b f .
            f f b b f 4 4 4 4 4 4 f b b f f
            f b b f f f e e e e f f f b b f
            . f e e f b d d d d b f e e f .
            . . e 4 c d d d d d d c 4 e . .
            . . e f b d b d b d b b f e . .
            . . . f f 1 d 1 d 1 d f f . . .
            . . . . . f f b b f f . . . . .
        `, SpriteKind.Player)
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
            doggie.setPosition(randint(10, 160), randint(10, 120))
            info.changeScoreBy(1)
            if (info.score() >= 4 && !hit) {
                gamejam.win(true)
            }
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
            hit = true;
            scene.cameraShake(2)
            otherSprite.destroy();
        })
        scene.setBackgroundColor(3)
        effects.smiles.startScreenEffect(5000)
        controller.moveSprite(Daiana)
        doggie = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . 4 4 4 . . . . 4 4 4 . . . .
            . 4 5 5 5 e . . e 5 5 5 4 . . .
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
            . e e 5 5 5 5 5 5 5 5 e e . . .
            . . e 5 f 5 5 5 5 f 5 e . . . .
            . . f 5 5 5 4 4 5 5 5 f . f f .
            . . . 4 5 5 f f 5 5 6 f f 5 f .
            . . . f 6 6 6 6 6 6 4 f 5 5 f .
            . . . f 5 5 5 5 5 5 5 4 5 f . .
            . . . . f 5 4 5 f 5 f f f . . .
            . . . . . f f f f f f f . . . .
        `, SpriteKind.Food)

        game.onUpdateInterval(1000, function () {
            bad_guy = sprites.create(img`
                . . . . . . . . . . . . . . f f f . . . . . . .
                . . . . . . . . . . . . . f 2 f f f f f . . . .
                . . . . . . . . . . . f f 2 2 e e e e e f f . .
                . . . . . . . . . . f f 2 2 2 e e e e e e f f .
                . . . . . . . . . . f e e e e f f f e e e e f .
                . . . . . . . . . f e 2 2 2 2 e e e f f f f f .
                . . . . . . . . . f 2 e f f f f f 2 2 2 e f f f
                . . c c . . . . . f f f e e e f f f f f f f f f
                . . c d c c . . . f e e 4 4 f b b e 4 4 e f e f
                . . c c d d c c . . f e d d f b b 4 d 4 e e f .
                . . . . c d d d c e e f d d d d d 4 e e e f . .
                . . . . . c c d c d d e e 2 2 2 2 2 2 2 f . . .
                . . . . . . c c c d d 4 4 e 5 4 4 4 4 4 f . . .
                . . . . . . . . . e e e e f f f f f f f f . . .
                . . . . . . . . . . . . . f f . . . f f f . . .
            `, SpriteKind.Enemy)
            bad_guy.setPosition(randint(10, 160), randint(10, 120))
        })
    }
}

namespace SpriteKind {
    export const MedFood = SpriteKind.create()
    export const SmolFood = SpriteKind.create()
    export const BigFood = SpriteKind.create()
}
namespace _guppy {
    export function main() {

        let FishSize = 0
        let nomnoms = 0
        let BigFish: Sprite = null
        let MedFish: Sprite = null
        let yVel = 0
        let xVel = 0
        let SmolFish: Sprite = null
        let yPos = 0
        let xPos = 0
        let fishsetup = 0
        /**
         * A demo game: eat the donuts to win. Ensure that you're calling the "win game" block somewhere in the code.
         */
        sprites.onOverlap(SpriteKind.Player, SpriteKind.SmolFood, function (sprite, otherSprite) {
            music.pewPew.play()
            otherSprite.destroy()
            nomnoms += 1
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.MedFood, function (sprite, otherSprite) {
            if (FishSize >= 1) {
                music.pewPew.play()
                otherSprite.destroy()
                nomnoms += 1
            } else {
                controller.moveSprite(null, 0, 0)
                sprite.startEffect(effects.disintegrate)
                sprite.vx = 0
                sprite.vy = 0
                sprite.destroy(effects.bubbles, 500)
                music.wawawawaa.play()
            }
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.BigFood, function (sprite, otherSprite) {
            if (FishSize >= 2) {
                music.pewPew.play()
                otherSprite.destroy()
                nomnoms += 1
            } else {
                sprite.startEffect(effects.disintegrate)
                controller.moveSprite(sprite, 0, 0)
                sprite.vx = 0
                sprite.vy = 0
                sprite.destroy(effects.bubbles, 500)
                music.wawawawaa.play()
            }
        })
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        scene.setBackgroundColor(9)
        effects.bubbles.startScreenEffect(2000)
        let hongryFish = sprites.create(img`
            . . . . . . . .
            . . . . . . . .
            4 4 . 4 4 4 4 .
            4 4 4 4 4 4 f 4
            . 4 4 4 4 4 4 4
            4 4 4 4 4 4 f f
            4 4 . 4 4 4 4 .
            . . . . . . . .
        `, SpriteKind.Player)
        hongryFish.startEffect(effects.bubbles, 500)
        controller.moveSprite(hongryFish, 125, 100)
        hongryFish.setStayInScreen(true)
        let fish = Math.floor(randint(3, 5))
        let LimitMed = Math.floor(fish / 2)
        let LimitBig = fish - 1
        while (fishsetup < fish) {
            xPos = randint(10, 150)
            yPos = randint(20, 110)
            while (xPos >= 60 && xPos <= 100) {
                xPos = randint(10, 150)
            }
            while (yPos >= 40 && yPos <= 80) {
                yPos = randint(20, 110)
            }
            if (fishsetup < fish) {
                if (fishsetup < LimitBig) {
                    if (fishsetup < LimitMed) {
                        SmolFish = sprites.create(img`
                            . . . . . . . .
                            . . . . . . . .
                            . . . . . . . .
                            . 8 . 8 8 8 . .
                            . . 8 8 8 8 8 .
                            . 8 . 8 8 8 . .
                            . . . . . . . .
                            . . . . . . . .
                        `, SpriteKind.SmolFood)
                        xVel = randint(-30, 30)
                        yVel = randint(-10, 10)
                        SmolFish.setPosition(xPos, yPos)
                        SmolFish.setVelocity(xVel, yVel)
                        SmolFish.setBounceOnWall(true)
                        if (xVel < 0) {
                            SmolFish.setImage(img`
                                . . . . . . . .
                                . . . . . . . .
                                . . . . . . . .
                                . . 8 8 8 . 8 .
                                . 8 8 8 8 8 . .
                                . . 8 8 8 . 8 .
                                . . . . . . . .
                                . . . . . . . .
                            `)
                        }
                    } else {
                        MedFish = sprites.create(img`
                            . . . . . . . .
                            . . . . . . . .
                            8 8 . 8 8 8 8 .
                            8 8 8 8 8 8 1 8
                            . 8 8 8 8 8 8 8
                            8 8 8 8 8 8 1 1
                            8 8 . 8 8 8 8 .
                            . . . . . . . .
                        `, SpriteKind.MedFood)
                        xVel = randint(-15, 15)
                        yVel = randint(-10, 10)
                        MedFish.setPosition(xPos, yPos)
                        MedFish.setVelocity(xVel, yVel)
                        MedFish.setBounceOnWall(true)
                        if (xVel < 0) {
                            MedFish.setImage(img`
                                . . . . . . . .
                                . . . . . . . .
                                . 8 8 8 8 . 8 8
                                8 1 8 8 8 8 8 8
                                8 8 8 8 8 8 8 .
                                1 1 8 8 8 8 8 8
                                . 8 8 8 8 . 8 8
                                . . . . . . . .
                            `)
                        }
                    }
                } else {
                    BigFish = sprites.create(img`
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . 8 8 8 8 . . . . . .
                        8 8 . . . . . 8 8 8 8 . . . . .
                        8 8 8 . . 8 8 8 8 8 8 8 8 . . .
                        8 8 8 8 8 8 8 8 8 8 8 1 8 8 . .
                        . 8 8 8 8 8 8 8 8 8 8 1 8 8 8 .
                        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 .
                        . 8 8 8 8 8 8 8 8 8 8 1 1 1 1 .
                        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
                        8 8 8 . . 8 8 8 8 8 8 8 8 8 . .
                        8 8 . . . . . 8 8 8 8 . . . . .
                        . . . . . . 8 8 8 8 . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                    `, SpriteKind.BigFood)
                    xVel = randint(-8, 8)
                    yVel = randint(-5, 5)
                    BigFish.setPosition(xPos, yPos)
                    BigFish.setVelocity(xVel, yVel)
                    BigFish.setBounceOnWall(true)
                    if (xVel < 0) {
                        BigFish.setImage(img`
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . 8 8 8 8 . . . . . .
                            . . . . . 8 8 8 8 . . . . . 8 8
                            . . . 8 8 8 8 8 8 8 8 . . 8 8 8
                            . . 8 8 1 8 8 8 8 8 8 8 8 8 8 8
                            . 8 8 8 1 8 8 8 8 8 8 8 8 8 8 .
                            . 8 8 8 8 8 8 8 8 8 8 8 8 8 . .
                            . 1 1 1 1 8 8 8 8 8 8 8 8 8 8 .
                            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
                            . . 8 8 8 8 8 8 8 8 8 . . 8 8 8
                            . . . . . 8 8 8 8 . . . . . 8 8
                            . . . . . . 8 8 8 8 . . . . . .
                            . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . .
                        `)
                    }
                }
                fishsetup += 1
            }
        }
        // Splash instruction text for the player.
        gamejam.showInstruction("EAT & GROW", 500)
        game.onUpdate(function () {
            if (SmolFish.vx <= 0) {
                SmolFish.setImage(img`
                    . . . . . . . .
                    . . . . . . . .
                    . . . . . . . .
                    . . 8 8 8 . 8 .
                    . 8 8 8 8 8 . .
                    . . 8 8 8 . 8 .
                    . . . . . . . .
                    . . . . . . . .
                `)
            } else {
                SmolFish.setImage(img`
                    . . . . . . . .
                    . . . . . . . .
                    . . . . . . . .
                    . 8 . 8 8 8 . .
                    . . 8 8 8 8 8 .
                    . 8 . 8 8 8 . .
                    . . . . . . . .
                    . . . . . . . .
                `)
            }
            if (MedFish.vx <= 0) {
                MedFish.setImage(img`
                    . . . . . . . .
                    . . . . . . . .
                    . 8 8 8 8 . 8 8
                    8 1 8 8 8 8 8 8
                    8 8 8 8 8 8 8 .
                    1 1 8 8 8 8 8 8
                    . 8 8 8 8 . 8 8
                    . . . . . . . .
                `)
            } else {
                MedFish.setImage(img`
                    . . . . . . . .
                    . . . . . . . .
                    8 8 . 8 8 8 8 .
                    8 8 8 8 8 8 1 8
                    . 8 8 8 8 8 8 8
                    8 8 8 8 8 8 1 1
                    8 8 . 8 8 8 8 .
                    . . . . . . . .
                `)
            }
            if (BigFish.vx <= 0) {
                BigFish.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . 8 8 8 8 . . . . . .
                    . . . . . 8 8 8 8 . . . . . 8 8
                    . . . 8 8 8 8 8 8 8 8 . . 8 8 8
                    . . 8 8 1 8 8 8 8 8 8 8 8 8 8 8
                    . 8 8 8 1 8 8 8 8 8 8 8 8 8 8 .
                    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . .
                    . 1 1 1 1 8 8 8 8 8 8 8 8 8 8 .
                    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
                    . . 8 8 8 8 8 8 8 8 8 . . 8 8 8
                    . . . . . 8 8 8 8 . . . . . 8 8
                    . . . . . . 8 8 8 8 . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `)
            } else {
                BigFish.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . 8 8 8 8 . . . . . .
                    8 8 . . . . . 8 8 8 8 . . . . .
                    8 8 8 . . 8 8 8 8 8 8 8 8 . . .
                    8 8 8 8 8 8 8 8 8 8 8 1 8 8 . .
                    . 8 8 8 8 8 8 8 8 8 8 1 8 8 8 .
                    . . 8 8 8 8 8 8 8 8 8 8 8 8 8 .
                    . 8 8 8 8 8 8 8 8 8 8 1 1 1 1 .
                    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
                    8 8 8 . . 8 8 8 8 8 8 8 8 8 . .
                    8 8 . . . . . 8 8 8 8 . . . . .
                    . . . . . . 8 8 8 8 . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `)
            }
        })
        game.onUpdate(function () {
            if (nomnoms < LimitMed) {
                if (hongryFish.vx < 0) {
                    hongryFish.setImage(img`
                        . . . . . . . .
                        . . . . . . . .
                        . 4 4 4 4 . 4 4
                        4 f 4 4 4 4 4 4
                        4 4 4 4 4 4 4 .
                        f f 4 4 4 4 4 4
                        . 4 4 4 4 . 4 4
                        . . . . . . . .
                    `)
                } else {
                    hongryFish.setImage(img`
                        . . . . . . . .
                        . . . . . . . .
                        4 4 . 4 4 4 4 .
                        4 4 4 4 4 4 f 4
                        . 4 4 4 4 4 4 4
                        4 4 4 4 4 4 f f
                        4 4 . 4 4 4 4 .
                        . . . . . . . .
                    `)
                }
            }
            if (nomnoms >= LimitMed && nomnoms < LimitBig) {
                if (FishSize != 1) {
                    music.jumpUp.play()
                    FishSize = 1
                }
                if (hongryFish.vx < 0) {
                    hongryFish.setImage(img`
                        . . . . . 4 4 4 4 . . . . . . .
                        . . . . 4 4 4 4 . . . . . . 4 4
                        . . 4 4 4 4 4 4 4 4 . . . 4 4 4
                        . 4 4 f 4 4 4 4 4 4 4 . 4 4 4 4
                        4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 . .
                        f f f f 4 4 4 4 4 4 4 4 4 4 4 .
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                        . 4 4 4 4 4 4 4 4 4 4 . 4 4 4 4
                        . . 4 4 4 4 4 4 4 4 . . . 4 4 4
                        . . . . 4 4 4 4 . . . . . . 4 4
                        . . . . . 4 4 4 4 . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                    `)
                } else {
                    hongryFish.setImage(img`
                        . . . . . . . 4 4 4 4 . . . . .
                        4 4 . . . . . . 4 4 4 4 . . . .
                        4 4 4 . . . 4 4 4 4 4 4 4 4 . .
                        4 4 4 4 . 4 4 4 4 4 4 4 f 4 4 .
                        4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 4
                        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                        . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                        . 4 4 4 4 4 4 4 4 4 4 4 f f f f
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                        4 4 4 4 . 4 4 4 4 4 4 4 4 4 4 .
                        4 4 4 . . . 4 4 4 4 4 4 4 4 . .
                        4 4 . . . . . . 4 4 4 4 . . . .
                        . . . . . . . 4 4 4 4 . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                    `)
                }
            }
            if (nomnoms >= LimitBig && nomnoms < fish) {
                if (FishSize != 2) {
                    music.jumpUp.play()
                    FishSize = 2
                }
                if (hongryFish.vx < 0) {
                    hongryFish.setImage(img`
                        . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . 4 4 4 . . .
                        . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . 4 4 4 4 . . .
                        . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . 4 4 4 4 4 . . .
                        . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 4 4 4 4 4 4 . . .
                        . . . 4 4 1 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 . 4 4 4 4 4 4 4 . . .
                        . . 4 4 4 1 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . .
                        . 4 4 4 4 f 1 1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . .
                        4 4 4 4 4 f 1 1 4 4 4 f 4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4 . . . .
                        4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 4 f 4 4 4 4 4 4 4 4 4 4 . . . . .
                        4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 4 f 4 4 4 4 4 4 4 4 4 4 . . . . .
                        4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 . . . .
                        f f f f f f 4 4 4 4 4 4 f 4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4 . . .
                        . 4 4 4 4 4 4 4 4 4 4 f 4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4 4 . . .
                        . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 4 4 4 4 4 4 4 . . .
                        . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . 4 4 4 4 4 4 . . .
                        . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 4 4 4 4 4 . . .
                        . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . 4 4 4 4 . . .
                        . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . . 4 4 4 . . .
                        . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    `)
                } else {
                    hongryFish.setImage(img`
                        . . . 4 4 4 . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . .
                        . . . 4 4 4 4 . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . .
                        . . . 4 4 4 4 4 . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . .
                        . . . 4 4 4 4 4 4 . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . .
                        . . . 4 4 4 4 4 4 4 . 4 4 4 4 4 4 4 4 4 4 4 4 4 1 1 1 4 4 . . .
                        . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 1 1 4 4 4 . .
                        . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 1 f 4 4 4 4 .
                        . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 1 1 f 4 4 4 4 4
                        . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 4 4 4 4 4
                        . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 4 4 4 4 4
                        . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 4 4 4 4 4
                        . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 f f f f f f
                        . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
                        . . . 4 4 4 4 4 4 4 . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . .
                        . . . 4 4 4 4 4 4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . .
                        . . . 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . .
                        . . . 4 4 4 4 . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . .
                        . . . 4 4 4 . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . .
                        . . . . . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    `)
                }
            }
            if (nomnoms >= fish) {
                if (FishSize != 3) {
                    music.powerUp.play()
                    FishSize = 3
                    controller.moveSprite(hongryFish, 0, 0)
                    hongryFish.setImage(img`
                        . . . . . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . . . . . .
                        . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . .
                        4 4 4 4 . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . .
                        4 4 4 4 4 . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . .
                        4 4 4 4 4 4 . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . .
                        4 4 4 4 4 4 4 . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . .
                        4 4 4 4 4 4 4 4 . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . .
                        4 4 4 4 4 4 4 4 4 . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . .
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 4 . .
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 f 4 4 4 .
                        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 f 4 4 4 f 4 4 4
                        . . 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4 4
                        . . . 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 4 4 4 4 4 4 4
                        . . . 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 4 4 4 2 2 4 4
                        . . 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 f 4 2 2 2 2 4
                        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 f f 2 2 2 2 f
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 f f f f f f f
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f .
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . .
                        4 4 4 4 4 4 4 4 4 . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . .
                        4 4 4 4 4 4 4 4 . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . .
                        4 4 4 4 4 4 4 . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . .
                        4 4 4 4 4 4 . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 . . . . . . .
                        4 4 4 4 4 . . . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . . .
                        . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . . . .
                        . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . . . . .
                        . . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    `)
                    hongryFish.say("Yum!")
                    FishSize = 3
                    effects.confetti.startScreenEffect()
                    // Sets the win state. After five seconds, if this
                    // block is not called, the player loses.
                    gamejam.win()
                }
            }
        })
    }
}

namespace SpriteKind {
    export const Arm = SpriteKind.create()
    export const Person = SpriteKind.create()
    export const MovingArm = SpriteKind.create()
    export const MovingRightArm = SpriteKind.create()
    export const wall = SpriteKind.create()
    export const otherWall = SpriteKind.create()
    export const otherOtherWall = SpriteKind.create()
}
namespace _juggle {
    export function main() {

        let raisedRightArm: Sprite = null
        let raisedLeftArm: Sprite = null
        let ball1: Sprite = null
        let leftArm: Sprite = null
        let rightArm: Sprite = null
        let jugglerMan: Sprite = null
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            leftArm.destroy()
            raisedLeftArm = sprites.create(img`
                4 4 4 . . . . . . .
                4 4 4 4 . . . . . .
                4 4 4 4 . . . . . .
                4 4 4 4 4 . . . . .
                . . 4 4 4 4 . . . .
                . . . 4 4 4 4 4 . .
                . . . . 4 4 4 4 4 .
                . . . . . . 4 4 4 4
                . . . . . . . . 4 4
            `, SpriteKind.MovingArm)
            raisedLeftArm.x -= 11;
        })
        controller.left.onEvent(ControllerButtonEvent.Released, function () {
            raisedLeftArm.destroy()
            leftArm = sprites.create(img`
                . . . . . . . 4 4 4
                . . . . . . . 4 4 4
                4 4 . . . . 4 4 4 .
                4 4 4 . . 4 4 4 4 .
                4 4 4 4 4 4 4 4 . .
                4 4 4 4 4 4 4 4 . .
                . 4 4 4 4 4 . . . .
            `, SpriteKind.Arm)
            leftArm.x -= 11
            leftArm.y += 6

        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            rightArm.destroy()
            raisedRightArm = sprites.create(img`
                . . . . . . . 4 4 4
                . . . . . . 4 4 4 4
                . . . . . . 4 4 4 4
                . . . . . 4 4 4 4 4
                . . . . 4 4 4 4 . .
                . . . 4 4 4 4 . . .
                . 4 4 4 4 4 . . . .
                4 4 4 4 4 . . . . .
                4 4 4 . . . . . . .
            `, SpriteKind.MovingRightArm)
            raisedRightArm.x += 9;
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.MovingArm, function (sprite, otherSprite) {
            ball1.setVelocity(12, -60)
            info.changeScoreBy(1)
            info.startCountdown(0.2)
            gamejam.win()
            music.magicWand.play()
        })
        controller.right.onEvent(ControllerButtonEvent.Released, function () {
            raisedRightArm.destroy()
            rightArm = sprites.create(img`
                4 4 . . . . . . . .
                4 4 4 . . . . . . .
                4 4 4 4 . . . . 4 4
                . 4 4 4 4 . . 4 4 4
                . . 4 4 4 4 4 4 4 4
                . . . 4 4 4 4 4 4 4
                . . . . 4 4 4 4 4 .
            `, SpriteKind.Arm)
            rightArm.x += 9;
            rightArm.y += 6
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.otherWall, function (sprite, otherSprite) {
            ball1.setVelocity(15, 50)
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.MovingRightArm, function (sprite, otherSprite) {
            ball1.setVelocity(-12, -60)
            info.changeScoreBy(1)
            music.baDing.play()
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.otherOtherWall, function (sprite, otherSprite) {
            ball1.destroy()
            jugglerMan.say("You lost :(")
            music.siren.play()
        })
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.wall, function (sprite, otherSprite) {
            ball1.setVelocity(-15, 50)
        })
        scene.setBackgroundColor(3)
        jugglerMan = sprites.create(img`
            . . . . a a f . f a a f . f a a . . . .
            . . . a a 2 2 f a a a a f 2 2 a a . . .
            . . . 2 2 2 a b c c c c b a 2 2 2 . . .
            . . . 2 a a c 3 a c c a 3 c a a 2 . . .
            . . . a f 3 3 c a c c a c 3 3 f a . . .
            . . . 5 f a a c c 4 4 c c a a f 5 . . .
            . . . . f a a a 4 4 4 4 a a a f . . . .
            . . . . f a f b f 4 4 f b f a f . . . .
            . . . . f a 4 1 f 4 4 f 1 4 a f . . . .
            . . . . . f f 4 4 2 2 4 4 f f . . . . .
            . . . . . e f e 4 2 2 4 e f e . . . . .
            . . . . e d f b 3 a a 3 b f d e . . . .
            . . . d d d f a a a a a a f d d d . . .
            . . . . . d f a f a a f a f d . . . . .
            . . . . . d f a a a a a a f d . . . . .
            . . . . . . f a f a a f a f . . . . . .
            . . . . . f a 2 2 2 2 2 2 a f . . . . .
            . . . . . f f a a a a a a f f . . . . .
            . . . . . . f f f f f f f f . . . . . .
            . . . . . . c c c c c c c c . . . . . .
            . . . . . . c c c c c c c c . . . . . .
            . . . . . . c c c f f c c c . . . . . .
            . . . . . . c c c . . c c c . . . . . .
            . . f . . . c c c . . c c c . . . f . .
            2 2 f f f . c c c . . c c c . f f f 2 2
            2 2 2 2 f 2 2 2 2 . . 2 2 2 2 f 2 2 2 2
            2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2
        `, SpriteKind.Person)
        jugglerMan.y += 3;
        jugglerMan.x -= 1;
        rightArm = sprites.create(img`
            4 4 . . . . . . . .
            4 4 4 . . . . . . .
            4 4 4 4 . . . . 4 4
            . 4 4 4 4 . . 4 4 4
            . . 4 4 4 4 4 4 4 4
            . . . 4 4 4 4 4 4 4
            . . . . 4 4 4 4 4 .
        `, SpriteKind.Arm)

        leftArm = sprites.create(img`
            . . . . . . . 4 4 4
            . . . . . . . 4 4 4
            4 4 . . . . 4 4 4 .
            4 4 4 . . 4 4 4 4 .
            4 4 4 4 4 4 4 4 . .
            4 4 4 4 4 4 4 4 . .
            . 4 4 4 4 4 . . . .
        `, SpriteKind.Arm)

        leftArm.x -= 11
        leftArm.y += 6
        rightArm.x += 9;
        rightArm.y += 6
        ball1 = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . e e e e . . . . . .
            . . . . e e e e e e 2 2 . . . .
            . . . e e e e e e e e 2 2 . . .
            . . e e e 2 e e e 2 4 5 4 2 . .
            . . e e 2 2 2 2 2 2 4 5 5 2 . .
            . e e 2 2 2 2 2 2 2 2 4 4 2 2 .
            . e e 2 2 2 2 2 2 2 2 2 2 2 2 .
            . e e 2 2 2 2 2 2 2 2 2 2 2 2 .
            . e e 2 2 2 2 2 2 2 2 2 2 2 2 .
            . e e 2 2 2 2 2 2 2 2 2 2 4 2 .
            . . e e 2 2 2 2 2 2 2 2 2 4 . .
            . . e e 2 2 2 2 2 2 2 2 4 2 . .
            . . . e e 2 2 2 2 2 4 4 2 . . .
            . . . . . e e 4 4 4 2 . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        ball1.setPosition(94, 10)
        ball1.setVelocity(0, 50)
        let bumper = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.wall)
        bumper.setPosition(88, 8)
        let bumper2 = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.otherWall)
        bumper2.setPosition(72, 8)
        scene.setBackgroundColor(7)
        let wall2 = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . .
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.otherOtherWall)
        wall2.setPosition(94, 90)
        let wall3 = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . .
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.otherOtherWall)
        wall3.setPosition(78, 90)
        info.setScore(0)
        game.splash("Right and left arrows", "move right and left arms")

    }
}

namespace _maze {
    let lastDirection = 0
    let removedCell = ""
    let lastCElls: string[] = []
    let directions: number[] = []
    let curRow = 0
    let curCol = 0
    let mazeRow: number[] = []
    let direction = 0
    let maze: number[][] = []
    let myPlayerCol = 0
    let myTile: tiles.Tile = null
    let myPlayerRow = 0
    let gameOver = false
    let activateKeys = false
    let mySprite: Sprite = null

    export function generateMaze() {
        direction = -1
        maze = []
        for (let i = 0; i < 8; i++) {
            mazeRow = []
            for (let i = 0; i < 10; i++) {
                mazeRow.push(0)
            }
            maze.push(mazeRow)
        }
        maze[7][5] = 1
        scene.setTileAt(scene.getTile(5, 7), 12)
        curCol = 5
        curRow = 6
        directions = [-1, 1]
        maze[6][5] = 1
        lastCElls = ["r", "r"]
        while (curRow >= 1) {
            scene.setTileAt(scene.getTile(curCol, curRow), 12)
            if (randint(0, 2) == 0) {
                curRow = curRow - 1
                maze[curRow][curCol] = 1
                removedCell = lastCElls.shift()
                lastCElls.push("r")
            } else {
                if (lastCElls.indexOf("c") == -1) {
                    direction = directions[randint(0, 1)]
                    lastDirection = direction
                } else {
                    direction = lastDirection
                }
                if (curCol + direction >= 0 && curCol + direction <= 9) {
                    curCol = curCol + direction
                    maze[curRow][curCol] = 1
                    removedCell = lastCElls.shift()
                    lastCElls.push("c")
                }
            }
        }
        scene.setTileAt(scene.getTile(curCol, 0), 12)
        maze[0][curCol] = 1
        myTile = scene.getTile(5, 7)
        myTile.place(mySprite)
        myPlayerCol = 5
        myPlayerRow = 7
    }
    export function main() {

        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            if (activateKeys) {
                music.playTone(262, music.beat(BeatFraction.Sixteenth))
                if (myPlayerRow < 6) {
                    myPlayerRow = myPlayerRow + 1
                    myTile = scene.getTile(myPlayerCol, myPlayerRow)
                    myTile.place(mySprite)
                    if (maze[myPlayerRow][myPlayerCol] == 0) {
                        gameOver = true
                        activateKeys = false
                        scene.setTile(12, img`
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                        `, false)
                        music.wawawawaa.playUntilDone()
                        gamejam.win(false)
                    }
                }
            }
        })
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            if (activateKeys) {
                music.playTone(262, music.beat(BeatFraction.Sixteenth))
                if (myPlayerRow > 0) {
                    myPlayerRow = myPlayerRow - 1
                    myTile = scene.getTile(myPlayerCol, myPlayerRow)
                    myTile.place(mySprite)
                    if (maze[myPlayerRow][myPlayerCol] == 0) {
                        gameOver = true
                        activateKeys = false
                        scene.setTile(12, img`
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                        `, false)
                        music.wawawawaa.playUntilDone()
                        gamejam.win(false)
                    }
                } else if (myPlayerRow == 0) {
                    gamejam.win(true)
                    music.powerUp.playUntilDone()
                }
            }
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            if (activateKeys) {
                music.playTone(262, music.beat(BeatFraction.Sixteenth))
                if (myPlayerCol < 9) {
                    myPlayerCol = myPlayerCol + 1
                    myTile = scene.getTile(myPlayerCol, myPlayerRow)
                    myTile.place(mySprite)
                    if (maze[myPlayerRow][myPlayerCol] == 0) {
                        gameOver = true
                        activateKeys = false
                        scene.setTile(12, img`
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                        `, false)
                        music.wawawawaa.playUntilDone()
                        gamejam.win(false)
                    }
                }
            }
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            if (activateKeys) {
                music.playTone(262, music.beat(BeatFraction.Sixteenth))
                if (myPlayerCol > 0) {
                    myPlayerCol = myPlayerCol - 1
                    myTile = scene.getTile(myPlayerCol, myPlayerRow)
                    myTile.place(mySprite)
                    if (maze[myPlayerRow][myPlayerCol] == 0) {
                        gameOver = true
                        activateKeys = false
                        scene.setTile(12, img`
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                            c c c c c c c c c c c c c c c c
                        `, false)
                        music.wawawawaa.playUntilDone()
                        gamejam.win(false)
                    }
                }
            }
        })
        // The debug loop block will automatically loop the
        // game after five seconds.
        scene.setTile(2, img`
            b d d d d d d d d d d d d d d c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            c c c c c c c c c c c c c c c a
        `, false)
        scene.setTile(3, img`
            . . . . . . . . . . . . . . . .
            . . . c c c c c c c . . . . . .
            . . . c c c c c c c c . . . . .
            . . . c c . . . . c c c . . . .
            . . . c c . . . . . c c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . c c c . . .
            . . . c c . . . . c c c . . . .
            . . . c c c c c c c c . . . . .
            . . . c c c c c c c . . . . . .
            . . . . . . . . . . . . . . . .
        `, false)
        scene.setTile(4, img`
            . . . . . . . . . . . . . . . .
            . . . . . . c c c c . . . . . .
            . . . . . c c c c c c . . . . .
            . . . . c c c . . c c c . . . .
            . . . c c c . . . . c c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c c c c c c c c c . . .
            . . . c c c c c c c c c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . . . . . . . . . . . . . .
        `, false)
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . .
            . . . c c c c c c c c . . . . .
            . . . c c c c c c c c c . . . .
            . . . c c . . . . . c c . . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . c c c . . .
            . . . c c c c c c c c c . . . .
            . . . c c c c c c c c . . . . .
            . . . c c . . c c . . . . . . .
            . . . c c . . c c c . . . . . .
            . . . c c . . . c c c . . . . .
            . . . c c . . . . c c c . . . .
            . . . c c . . . . . c c c . . .
            . . . c c . . . . . . c c . . .
            . . . . . . . . . . . . . . . .
        `, false)
        scene.setTile(6, img`
            . . . . . . . . . . . . . . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . c c c . . .
            . . . c c . . . . c c c . . . .
            . . . c c . . . c c c . . . . .
            . . . c c . . c c c . . . . . .
            . . . c c . c c c . . . . . . .
            . . . c c c c . . . . . . . . .
            . . . c c c c . . . . . . . . .
            . . . c c . c c c . . . . . . .
            . . . c c . . c c c . . . . . .
            . . . c c . . . c c c . . . . .
            . . . c c . . . . c c c . . . .
            . . . c c . . . . . c c c . . .
            . . . c c . . . . . . c c . . .
            . . . . . . . . . . . . . . . .
        `, false)
        scene.setTile(7, img`
            . . . . . . . . . . . . . . . .
            . . . c c . . . . . . c c . . .
            . . . c c c . . . . c c c . . .
            . . . c c c c . . c c c c . . .
            . . . c c c c . . c c c c . . .
            . . . c c c c c c c c c c . . .
            . . . c c . c c c c . c c . . .
            . . . c c . c c c c . c c . . .
            . . . c c . . c c . . c c . . .
            . . . c c . . c c . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . c c . . . . . . c c . . .
            . . . . . . . . . . . . . . . .
        `, false)
        scene.setTile(8, img`
            . . . . . . . . . . . . . . . .
            . . . c c c c c c c c c c . . .
            . . . c c c c c c c c c c . . .
            . . . . . . . . . . . c c . . .
            . . . . . . . . . . c c c . . .
            . . . . . . . . . c c c . . . .
            . . . . . . . . c c c . . . . .
            . . . . . . . c c c . . . . . .
            . . . . . . c c c . . . . . . .
            . . . . . c c c . . . . . . . .
            . . . . c c c . . . . . . . . .
            . . . c c c . . . . . . . . . .
            . . . c c . . . . . . . . . . .
            . . . c c c c c c c c c c . . .
            . . . c c c c c c c c c c . . .
            . . . . . . . . . . . . . . . .
        `, false)
        scene.setTile(9, img`
            . . . . . . . . . . . . . . . .
            . . . c c c c c c c c c c . . .
            . . . c c c c c c c c c c . . .
            . . . c c . . . . . . . . . . .
            . . . c c . . . . . . . . . . .
            . . . c c . . . . . . . . . . .
            . . . c c . . . . . . . . . . .
            . . . c c c c c c c c c c . . .
            . . . c c c c c c c c c c . . .
            . . . c c . . . . . . . . . . .
            . . . c c . . . . . . . . . . .
            . . . c c . . . . . . . . . . .
            . . . c c . . . . . . . . . . .
            . . . c c c c c c c c c c . . .
            . . . c c c c c c c c c c . . .
            . . . . . . . . . . . . . . . .
        `, false)
        scene.setTileMap(img`
            2 2 2 2 2 2 2 2 2 2
            2 2 2 3 4 5 6 2 2 2
            2 2 2 2 2 2 2 2 2 2
            2 2 2 7 4 8 9 2 2 2
            2 2 2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2 2 2
        `)
        game.showLongText("Memorize the path and exit at the top of the screen.", DialogLayout.Bottom)
        mySprite = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . .
            . . . . . f 5 5 5 f f . . . . .
            . . . . f 1 5 2 5 1 6 f . . . .
            . . . f 1 6 6 6 6 6 1 6 f . . .
            . . . f 6 6 f f f f 6 1 f . . .
            . . . f 6 f f d d f f 6 f . . .
            . . f 6 f d f d d f d f 6 f . .
            . . f 6 f d 3 d d 3 d f 6 f . .
            . . f 6 6 f d d d d f 6 6 f . .
            . f 6 6 f 3 f f f f 3 f 6 6 f .
            . . f f d 3 5 3 3 5 3 d f f . .
            . . f d d f 3 5 5 3 f d d f . .
            . . . f f 3 3 3 3 3 3 f f . . .
            . . . f 3 3 5 3 3 5 3 3 f . . .
            . . . f f f f f f f f f f . . .
            . . . . . f f . . f f . . . . .
        `, SpriteKind.Player)
        scene.setTile(10, img`
            b d d d d d d d d d d d d d d c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            d b b b b b b b b b b b b b b c
            c c c c c c c c c c c c c c c a
        `, false)
        scene.setTile(12, img`
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
        `, false)
        scene.setTileMap(img`
            a a a a a a a a a a
            a a a a a a a a a a
            a a a a a a a a a a
            a a a a a a a a a a
            a a a a a a a a a a
            a a a a a a a a a a
            a a a a a a a a a a
            a a a a a a a a a a
        `)
        activateKeys = false
        gameOver = false
        generateMaze()
        game.onUpdateInterval(200, function () {
            if (game.runtime() > 1000 && !(gameOver)) {
                scene.setTile(12, img`
                    b d d d d d d d d d d d d d d c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    d b b b b b b b b b b b b b b c
                    c c c c c c c c c c c c c c c a
                `, false)
                activateKeys = true
            }
        })

    }
}

namespace _mice {
    export function main() {
        let projectile: Sprite = null
        let hungry: Sprite = null
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
            otherSprite.destroy()
            info.changeScoreBy(1)
            hungry.say("nom")
            // Sets the win state. After five seconds, if this
            // block is not called, the player loses.
            gamejam.win(true)
        })
        controller.moveSprite(hungry, controller.dy(), controller.dx())
        info.setScore(0)
        effects.blizzard.startScreenEffect(5000)
        scene.setTileMap(scene.backgroundImage(), TileScale.Eight)
        scene.setBackgroundColor(9)
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("Catch!   ", 500)
        hungry = sprites.create(img`
            . f f . . . . f f . . . . .
            f f f f . . f f f f . . . .
            f d f f f f f f d f . . . .
            f 3 d f f f f d 3 f . . . .
            f d 3 f f f f 3 d f . . . .
            f f 1 1 f f 1 1 f f . . 1 .
            f f 1 6 f f 6 1 f f . 1 f 1
            f f f f f f f f f f . f f f
            f f f f 3 3 f f f b . f f f
            . b b b b b b b b f f f f f
            . f f 1 1 1 1 f f f f f f f
            . f f f 1 1 f f f f f f f .
            . f f f f f f f f f f . . .
            . f f . . f f . . f f . . .
        `, SpriteKind.Player)
        controller.moveSprite(hungry)
        game.onUpdateInterval(350, function () {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . d d . . . . . . . . . . . .
                . d . d . . d d d d d . . . . .
                . d . d . d d d d d d d . . . .
                . d . . . d d d d d f d . . . .
                . . d . . d d d d d d d 3 . . .
                . . d d d d d d d d d d . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `, randint(0, 100), randint(0, 100))
        })

    }
}

namespace _race {
    let car: Sprite = null
    export function main() {
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            car.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . 6 6 6 6 6 6 6 6 . .
                . . . . . 6 c 6 6 6 6 6 6 9 6 .
                . . . . 6 c c 6 6 6 6 6 6 9 c 6
                . . d 6 9 c c 6 9 9 9 9 9 9 c c
                . d 6 6 9 c b 8 8 8 8 8 8 8 6 c
                . 6 6 6 9 b 8 8 b b b 8 b b 8 6
                . 6 6 6 6 6 8 b b b b 8 b b b 8
                . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8
                . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8
                . d d 6 8 8 8 f 8 8 f 8 8 8 8 8
                . 8 8 8 8 8 8 8 f f f 8 8 8 8 8
                . 8 8 8 8 f f f 8 8 8 8 f f f f
                . . . 8 f f f f f 8 8 f f f f f
                . . . . f f f f . . . . f f f .
                . . . . . . . . . . . . . . . .
            `)
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            car.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . 6 6 6 6 6 6 6 6 . . . .
                . . . 6 9 6 6 6 6 6 6 c 6 . . .
                . . 6 c 9 6 6 6 6 6 6 c c 6 . .
                . 6 c c 9 9 9 9 9 9 6 c c 9 6 d
                . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6
                . 6 6 8 b b 8 b b b 8 8 b 9 6 6
                . 6 8 b b b 8 b b b b 8 6 6 6 6
                . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6
                . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d
                . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d
                . 8 8 8 8 8 8 f f f 8 8 8 8 8 8
                . 8 f f f f 8 8 8 8 f f f 8 8 8
                . . f f f f f 8 8 f f f f f 8 .
                . . . f f f . . . . f f f f . .
                . . . . . . . . . . . . . . . .
            `)
        })
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            car.setImage(img`
                . . . . . . 8 8 c c 8 8 . . . .
                . . . . . 8 6 6 6 6 6 6 8 . . .
                . . . . 6 c 6 6 6 6 6 6 c 6 . .
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 .
                . . . f 6 6 9 6 6 6 6 6 c 6 f .
                . . . f 6 6 9 6 6 6 6 6 6 6 f .
                . . . f 6 6 9 6 6 6 6 6 6 6 f .
                . . . f 6 c 6 9 9 6 6 6 c 6 f .
                . . . 8 6 c 8 c c c c 8 c 6 8 .
                . . . 8 6 8 c b b b b c 8 6 8 .
                . . . 8 6 8 b b b b b b 8 6 8 .
                . . . 8 8 8 8 8 8 8 8 8 8 8 8 .
                . . . f 8 d 8 8 8 8 8 8 d 8 f .
                . . . f 8 6 d 8 8 8 8 d 6 8 f .
                . . . f f 8 8 8 8 8 8 8 8 f f .
                . . . . f f . . . . . . f f . .
            `)
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            car.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . 6 6 6 6 6 6 . . . .
                . . . . . 6 6 9 9 6 6 6 6 . . .
                . . . . . c 9 6 6 6 6 6 c . . .
                . . . . 6 c 9 6 6 6 6 6 c 6 . .
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 .
                . . . f 6 c 9 6 6 6 6 6 c 6 f .
                . . . f 8 c 6 6 6 6 6 6 c 8 f .
                . . . f 6 c 6 b b b b 6 c 6 f .
                . . . 8 6 6 b c c c c b 6 6 8 .
                . . . 8 8 b c c c c c c b 8 8 .
                . . . f 8 9 9 9 9 9 9 9 9 8 f .
                . . . f 8 d 6 6 6 6 6 6 d 8 f .
                . . . . 6 d d 6 6 6 6 d d 6 f .
                . . . . f 6 d 6 6 6 6 d 6 f . .
                . . . . . 8 6 6 6 6 6 6 8 . . .
            `)
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
            otherSprite.destroy()
            music.baDing.play()
            if (sprites.allOfKind(SpriteKind.Enemy).length == 0) {
                gamejam.win()
                effects.confetti.startScreenEffect(2000)
            }
        })

        car = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . 6 6 6 6 6 6 6 6 . . . .
            . . . 6 9 6 6 6 6 6 6 c 6 . . .
            . . 6 c 9 6 6 6 6 6 6 c c 6 . .
            . 6 c c 9 9 9 9 9 9 6 c c 9 6 d
            . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6
            . 6 6 8 b b 8 b b b 8 8 b 9 6 6
            . 6 8 b b b 8 b b b b 8 6 6 6 6
            . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6
            . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d
            . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d
            . 8 8 8 8 8 8 f f f 8 8 8 8 8 8
            . 8 f f f f 8 8 8 8 f f f 8 8 8
            . . f f f f f 8 8 f f f f f 8 .
            . . . f f f . . . . f f f f . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
        let flag1 = sprites.create(img`
            5 5 d d d d d d d d d d d d d d
            5 5 d d d d d d d d d d d d d d
            4 4 f f 1 1 f f 1 1 f f 1 1 d d
            4 4 f f 1 1 f f 1 1 f f 1 1 d d
            4 4 1 1 f f 1 1 f f 1 1 f f d d
            4 4 1 1 f f 1 1 f f 1 1 f f d d
            4 4 f f 1 1 f f 1 1 f f 1 1 d d
            4 4 f f 1 1 f f 1 1 f f 1 1 d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
        `, SpriteKind.Enemy)
        let flag2 = sprites.create(img`
            5 5 d d d d d d d d d d d d d d
            5 5 d d d d d d d d d d d d d d
            4 4 f f 1 1 f f 1 1 f f 1 1 d d
            4 4 f f 1 1 f f 1 1 f f 1 1 d d
            4 4 1 1 f f 1 1 f f 1 1 f f d d
            4 4 1 1 f f 1 1 f f 1 1 f f d d
            4 4 f f 1 1 f f 1 1 f f 1 1 d d
            4 4 f f 1 1 f f 1 1 f f 1 1 d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
            4 4 d d d d d d d d d d d d d d
        `, SpriteKind.Enemy)
        controller.moveSprite(car)
        scene.setTileMap(img`
            f 8 8 8 f f 8 8 8 f
            2 8 8 8 f f 8 8 8 4
            2 8 8 8 8 8 8 8 8 4
            2 f f f 8 8 f f f 4
            2 f f f 6 8 f f f 4
            2 8 8 8 8 8 8 8 8 4
            2 8 8 8 f f 8 8 8 4
            f 8 8 8 f f 8 8 8 f
        `)
        scene.setBackgroundColor(14)
        scene.setTile(15, img`
            b d d d d d d c b d d d d d d c
            d b b b b b b c d b b b b b b c
            d b b b b b b c d b b b b b b c
            d b b b b b b c d b b b b b b c
            d b b b b b b c d b b b b b b c
            d b b b b b b c d b b b b b b c
            d b b b b b b b d b b b b b b b
            c c c c c c b a c c c c c c b a
            b d d d d d d c b d d d d d d c
            d b b b b b b c d b b b b b b c
            d b b b b b b c d b b b b b b c
            d b b b b b b c d b b b b b b c
            d b b b b b b c d b b b b b b c
            d b b b b b b c d b b b b b b c
            d b b b b b b b d b b b b b b b
            c c c c c c b a b c c c c c c a
        `, true)
        scene.setTile(6, img`
            d d d d d d d d d d d d d d d d
            d d d 1 1 d d d d d d d d b d d
            d d d 1 1 d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d b d d d d d d b b d d d d d
            d d d d d d d d d b b d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d b d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            1 1 d d d d d d d d d d d d d d
            1 1 d d d d d d d d d d b d d d
            d d d d d d 1 d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d b d
        `, false)
        scene.setTile(8, img`
            d d d d d d d d d d d d d d d d
            d d d 1 1 d d d d d d d d b d d
            d d d 1 1 d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d b d d d d d d b b d d d d d
            d d d d d d d d d b b d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d b d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            1 1 d d d d d d d d d d d d d d
            1 1 d d d d d d d d d d b d d d
            d d d d d d 1 d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d b d
        `, false)
        scene.setTile(2, img`
            d d d d d d d d d d d d d d d d
            d d d 1 1 d d d d d d d d b d d
            d d d 1 1 d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d b d d d d d d b b d d d d d
            d d d d d d d d d b b d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d b d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            1 1 d d d d d d d d d d d d d d
            1 1 d d d d d d d d d d b d d d
            d d d d d d 1 d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d b d
        `, false)
        scene.setTile(4, img`
            d d d d d d d d d d d d d d d d
            d d d 1 1 d d d d d d d d b d d
            d d d 1 1 d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d b d d d d d d b b d d d d d
            d d d d d d d d d b b d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d b d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d d d
            1 1 d d d d d d d d d d d d d d
            1 1 d d d d d d d d d d b d d d
            d d d d d d 1 d d d d d d d d d
            d d d d d d d d d d d d d d d d
            d d d d d d d d d d d d d d b d
        `, false)
        scene.placeOnRandomTile(car, 6)
        scene.placeOnRandomTile(flag1, 2)
        scene.placeOnRandomTile(flag2, 4)

        // Splash instruction text for the player.
        gamejam.showInstruction("Get 2 flags", 1000)
    }
}

namespace _duckrace {
    export function main() {
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
            otherSprite.destroy()
            // Sets the win state. After five seconds, if this
            // block is not called, the player loses.
            gamejam.win()
        })
        scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
            gamejam.win()
        })
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.showInstruction("Go!", 500)
        let mySprite = sprites.create(img`
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
        `, SpriteKind.Player)
        controller.moveSprite(mySprite, 300, 300)
        scene.setBackgroundColor(9)
        scene.setTileMap(img`
            1 1 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . f . . . . . . . . . . . . . . . . . . . . . . e e
            1 1 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . f . . . . . . . . . . . . . . . . . . . . . . e e
            1 1 5 . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . f . . . . f . . . . . . . . . . . . . . . . . . . . . . e e
            1 1 5 . . . . . . . . . . . . . f . . . . . . . 8 . . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . e e
            1 1 5 . . . . . . . . . . . . . f . . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . e e
            1 1 5 . . . . . . . . . . . . . f . . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . . . e e
            1 1 5 . . . . . . . . . . . . . f . . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . . . e e
            1 1 5 . . . . . . . . . . . . . f . . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . . . e e
        `)
        scene.setTile(15, img`
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
        `, true)
        scene.setTile(8, img`
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
            5 5 5 5 7 7 7 7 7 7 7 7 5 5 5 5
            5 5 5 7 7 7 7 7 7 7 7 7 7 5 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
        `, true)
        scene.setTile(2, img`
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5
            5 5 5 7 7 7 7 7 7 7 7 7 7 5 5 5
            5 5 5 5 7 7 7 7 7 7 7 7 5 5 5 5
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
        `, true)
        scene.setTile(14, img`
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            f f f f f 1 1 1 1 1 1 f f f f f
            f f f f f 1 1 1 1 1 1 f f f f f
            f f f f f 1 1 1 1 1 1 f f f f f
            f f f f f 1 1 1 1 1 1 f f f f f
            f f f f f 1 1 1 1 1 1 f f f f f
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
            1 1 1 1 1 f f f f f f 1 1 1 1 1
        `, true)
        scene.setTile(5, img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
            1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2
        `, false)
        scene.setTile(1, img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        `, false)
        scene.cameraFollowSprite(mySprite)
        scene.placeOnRandomTile(mySprite, 1)
    }
}

namespace _spell {
    export function main() {
        let currLetter = 0
        let letters: Image[] = []
        let letter: Sprite = null
        let hungry: Sprite = null
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(false)
        // Splash instruction text for the player.
        gamejam.showInstruction("Spell Jam!", 750)
        scene.setBackgroundColor(8)
        hungry = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . 5 f 5 f 5 . . f . . . f
            . . . f 5 f 5 f 5 f . . f . f .
            . . 5 f 5 f 5 f 5 f 5 . . f . .
            . f 5 f 5 f 5 f 5 f 5 . 5 5 5 .
            . f 5 f 5 f 5 f 5 f 5 5 5 5 8 5
            f f 5 f 5 f 5 f 5 f 5 5 5 5 5 5
            f f 5 f 5 f 5 f 5 f 5 5 5 5 5 5
            . f 5 f 5 f 5 f 5 f 5 5 2 5 5 5
            . f 5 f 5 f 5 f 5 f 5 5 5 2 2 5
            . . 5 f 5 f 5 f 5 f 5 . 5 5 5 .
            . . . f 5 f 5 f 5 f . . . . . .
            . . . . 5 f 5 f 5 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
        letter = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Food)
        controller.moveSprite(hungry)
        letters = [img`
            . . . . . . . . . . . . . . 5 5
            . . . . . . . . . . . . . . 5 5
            . . . . . . . . . . . . . . 5 5
            . . . . . . . . . . . . . . 5 5
            . . . . . . . . . . . . . . 5 5
            . . . . . . . . . . . . . . 5 5
            . . . . . . . . . . . . . . 5 5
            . . . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        `, img`
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
        `, img`
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 5 5 . . . . . . . . 5 5 5 5
            5 5 5 5 . . . . . . . . 5 5 5 5
            5 5 . . 5 5 . . . . 5 5 . . 5 5
            5 5 . . 5 5 . . . . 5 5 . . 5 5
            5 5 . . . . 5 5 5 5 . . . . 5 5
            5 5 . . . . 5 5 5 5 . . . . 5 5
            5 5 . . . . . 5 5 . . . . . 5 5
            5 5 . . . . . 5 5 . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
            5 5 . . . . . . . . . . . . 5 5
        `, img`
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
            . . . . . . 5 5 5 . . . . . . .
        `]
        currLetter = 0
        letter.setImage(letters[currLetter])
        letter.setPosition(randint(8, 152), randint(8, 112))

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
            music.baDing.play()
            currLetter += 1
            if (currLetter >= letters.length) {
                currLetter = 0
                effects.confetti.startScreenEffect(3000)
                // Sets the win state. After five seconds, if this
                // block is not called, the player loses.
                gamejam.win()
            }
            letter.setImage(letters[currLetter])
            letter.setPosition(randint(8, 152), randint(8, 112))
        })
    }

}

namespace _sunrun {
    export function main() {
        sprites.onDestroyed(SpriteKind.Player, function (sprite) {
            scene.setTileMap(img`
                1 1 1 d d f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
                1 1 d 1 1 d f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
                d 1 1 1 1 1 d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e
                d 1 1 d d 1 d f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e 6 6 2
                e e e d 1 1 1 d f f f f 1 f f f f f e e e e e e e f f f f f f f f f e e e e e e f f f f f f f f f e e e e e 6 6 6 6 6 6 6 6 6 6
                6 6 6 e e e e e f f f f f f f f e e 6 6 6 6 9 6 6 e e e e e e e e e 6 6 6 6 6 6 e e e e e e e e e 6 6 6 6 6 6 6 6 6 2 6 3 6 6 6
                6 6 6 9 6 6 6 6 e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 3 6 6 2 6 6 6 6 6 2 6 6 6 6 6 6 6 2 6 6
                6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 3 2 6 6 6 6 6 6 6 6 6 6 6 3 6 6 6 6 6 6 6 6 6
            `)
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
            game.over(false)
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
            gamejam.win(true)
        })
        let projectile: Sprite = null
        scene.setTileMap(img`
            1 3 1 f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5
            d 1 d f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5
            c . b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 5 5 5 5
            f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 9 9 9 9 9 9 9 9 4 5 5 5
            e e e f f f f f f f f f 1 f f f f f e e e e e e e f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a
            6 6 6 e e e e e f f f f f f f f e e 6 6 6 6 8 6 6 e e e e e e e e e a a a a a a 9 9 9 9 9 9 9 9 9 a a a a a 7 7 7 7 2 7 7 7 7 7
            6 6 6 8 6 6 6 6 e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 7 2 7 7 7 7 a a a a a a a a a 7 7 7 7 2 7 7 7 7 7 7 7 2 7 7
            6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 2 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        `)
        let dude = sprites.create(img`
            . . . f f 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . .
            . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . .
            . . f 5 5 5 5 5 d d d d d d d d d d 5 5 . .
            . f 5 5 5 5 d e e e e d e e e e d d d 5 . .
            . f 5 5 d d d d d d e d e d d d d d d 5 . .
            . f 5 5 d d d f f f d d d f f f d d d 5 . .
            . f 5 f d d d d f f d d d d f f d d d . . .
            . . f f d d d d d d d d d d d d d d d . . .
            . . . f d d d d d d d d d d d d d d d . . .
            . . . f d f d d e e e d e e e d d e d . . .
            . . . . f d f e e e 2 2 2 e e e e d . . . .
            . . . . . f f f e e e e e e e e d . . . . .
            . . f f f 8 8 f f e e e e e e 8 8 8 8 8 . .
            . f 8 8 8 8 8 8 8 f e e e e 8 8 8 8 8 8 8 .
            f 8 8 8 8 f 8 8 8 f e e e e 8 8 8 f 8 8 8 8
            f 8 8 8 8 8 f 8 8 f e e e e 8 8 f 8 8 8 8 8
            f 8 8 8 8 8 f 8 8 8 f e e 8 8 8 f 8 8 8 8 8
            f 8 8 f 8 8 f f f f f e e f f f f 8 8 f 8 8
            f 8 f 8 8 f 8 8 8 f 8 f 8 f 8 8 8 f f 8 8 8
            f 8 f 8 8 8 f 8 f 8 f f f 8 f 8 f 8 f 8 8 8
            f 8 f 8 8 8 8 8 f f 8 f 8 f f 8 8 8 f 8 8 8
            . d b d d f 8 f f 8 f f f 8 f f 8 8 d d b d
            . d d b d f 8 8 f f 8 f 8 f f 8 8 8 d b d d
            . b d d d f 8 8 f 8 f f f 8 f 8 8 8 d d d b
            . d b d d f 8 8 8 f 8 8 8 f 8 8 . . d d b d
            . d b d d . f 7 7 7 7 7 7 7 7 7 . . d d b d
            . d d d d . f 7 7 7 7 f 7 7 7 7 . . d d d d
            . b b b b . f 7 7 7 7 f 7 7 7 7 . . b b b b
            . . . . . . f 7 7 7 7 f 7 7 7 7 . . . . . .
            . . . . . . f 7 7 7 7 f 7 7 7 7 . . . . . .
            . . . . . . f 7 e e e f 7 e e e . . . . . .
            . . . . . . f e e e e f e e e e . . . . . .
        `, SpriteKind.Player)
        let Sun = sprites.create(img`
            . . . . . . f f f f f f . . . . . . .
            . . . . f f f f f f f f f f . . . . .
            . . . f f f f f f f f f f f f . . . .
            . . . f f . . . . . . . . . f f . . .
            . . f f . . . . . . . . . . . f f . .
            . . f . . . . . . . . . . . . . f . .
            . f f . . . . . . . . . . . . . f f .
            . f . . . . . . . . . . . . . . . f .
            f f . . . . . . . . . . . . . . . f f
            f f . . . . . . . . . . . . . . . f f
            f . . . . . . . . . . . . . . . . . f
            f . . . . . . . . . . . . . . . . . f
            f . . . . . . . . . . . . . . . . . f
            f . . . . . . . . . . . . . . . . . f
            . . . . . . . . . . . . . . . . . . f
        `, SpriteKind.Player)
        let sun2 = sprites.create(Sun.image.clone(), SpriteKind.Player)
        let sun3 = sprites.create(img`
            . f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . f .
            . . f f . . . . . . . . . . . . . . . . . . . . . . . . . f f .
            . . . f f f . . . . . . . . . . . . . . . . . . . . . f f f . .
            . . . . . . f f f f f . . . . . . . . . . . . . f f f . . . . .
            . . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . .
        `, SpriteKind.Player)
        let mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . c . . . .
            . . . . . . . . . 2 2 2 2 2 1 1 1 1 1 2 2 . . . . . b b b b . .
            . . . . . . . 2 2 2 2 2 2 1 1 1 d d 1 1 1 2 . . . . . b b b b .
            . . . . . . 2 2 2 2 2 2 2 1 f 1 1 1 d 1 d 2 . . . . . b b b b .
            . . . . . 2 2 2 2 2 2 2 2 2 1 f f f 1 1 1 f 2 . . . . b b b b b
            . . . . 2 2 2 2 2 2 2 2 2 2 1 1 f f f 1 f f 2 . . . . b b b b b
            . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 1 f f 1 f f 2 . . . . c b b b b
            . . . 2 2 2 2 . . . 2 2 2 2 2 2 1 1 1 1 1 1 2 . . . . c . b b b
            . . . 2 2 2 . . . . . 2 2 2 2 2 2 d 1 d 1 d 2 . . . . c . . b b
            . . 2 2 2 . . . . . . . 2 2 2 2 2 d 2 d 2 d 2 . . . . c . . b b
            . . 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . d d 1 . . b
            . . 2 2 . . . . . . . . . 2 2 2 2 2 2 2 . . . . . 1 1 d 1 . . b
            . . 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 . . . . 1 1 1 d 1 . . b
            . . 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . 1 1 1 . c . . . b
            . . 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 1 d 1 1 . . c . . . b
            . . 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 d 1 1 d . . . c . . . .
            . . . . . . . . . . 2 2 2 2 2 2 2 2 d d . d . . . . . c . . . .
            . . . . . . . . . . 2 2 2 d d d d d d 1 d . . . . . . c . . . .
            . . . . . . . . . 2 2 2 1 1 d . . . . 1 . d . . . . . c . . . .
            . . . . . . . . . 2 2 2 1 d . . . . 1 1 d . . . . . . c . . . .
            . . . . . . . . 2 2 2 2 1 1 d 1 1 1 . 1 . d . . . . . c . . . .
            . . . . . . . . 2 2 2 2 1 d . . . . 1 1 d . . . . . . c . . . .
            . . . . . . . . 2 2 2 2 1 1 d 1 1 1 . 1 . . . . . . . c . . . .
            . . . . . . . . 2 2 2 2 1 d . . . . 1 . . . . . . . . c . . . .
            . . . . . . . 2 2 2 2 2 1 . d 1 1 1 2 . . . . . . . . c . . . .
            . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . c . . . .
            . . . . . . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 . . . . . . . c . . . .
            . . . . . . 2 . 2 2 2 2 2 2 2 . . . . 2 2 2 . . . . c c c . . .
            . . . . . 2 . 2 2 . 2 . 2 2 2 2 2 . . . . 2 . . . . c c c . . .
            . . . . 2 2 . 2 . . 2 . . . . . 2 2 2 . . . 2 . . . . c . . . .
            . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . .
        `, SpriteKind.Enemy)
        mySprite2.follow(dude)
        dude.setPosition(110, 79)
        Sun.setPosition(1015, 30)
        sun2.setPosition(980, 30)
        sun3.setPosition(998, 50)
        mySprite2.setPosition(15, 65)
        controller.moveSprite(dude, 200, 100)
        controller.moveSprite(mySprite2, 200, 150)
        scene.cameraFollowSprite(dude)
        scene.setTile(14, img`
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
            f 6 f f f f f 6 f f 6 f f f f f
            f 6 f f 6 f f 6 f f 6 f f f 6 f
            6 6 f f 6 f 6 6 f f 6 6 f f 6 f
            6 6 6 6 6 6 6 6 6 6 6 6 f 6 6 6
        `, false)
        scene.setTile(10, img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            9 7 9 9 9 9 9 7 9 9 7 9 9 9 9 9
            9 7 9 9 7 9 9 7 9 9 7 9 9 9 7 9
            7 7 9 9 7 9 7 7 9 9 7 7 9 9 7 9
            7 7 7 7 7 7 7 7 7 7 7 7 9 7 7 7
        `, false)
        scene.setTile(11, img`
            1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1
            1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 .
            1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 .
            1 1 1 1 1 1 1 1 f f 1 1 1 1 . .
            1 1 1 1 1 1 f f f 1 1 1 1 1 . .
            f 1 1 1 f f f f f 1 1 1 1 . . .
            f f 1 f f f f f 1 1 1 1 1 . . .
            f f f f f f f f 1 1 1 1 . . . .
            f f f f f f f 1 1 1 1 . . . . .
            f f f f f f f 1 1 1 . . . . . .
            f f f f f 1 1 1 1 . . . . . . .
            1 1 1 1 1 1 1 1 . . . . . . . .
            1 1 1 1 1 1 . . . . . . . . . .
            1 1 1 1 . . . . . . . . . . . .
            1 1 . . . . . . . . . . . . . .
        `, false)
        scene.setTile(3, img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            d d d 1 1 1 1 1 1 1 1 1 1 d d d
            1 1 d d 1 1 1 1 1 1 1 1 d d 1 1
            1 1 1 d d d 1 1 1 1 1 d d 1 1 1
            1 1 1 1 1 d 1 1 1 1 d 1 1 1 1 1
            1 1 1 1 1 1 d 1 1 d 1 1 1 1 1 1
        `, false)
        scene.setTile(13, img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 d d f f f 1 1 1 1 1 1 1
            1 1 1 d f f f f f f f 1 1 1 1 1
            1 1 d f f f f f f f f f 1 1 1 1
            1 1 d f f f f f f f f f 1 1 1 1
            1 d f f f f f f f f f f f 1 1 1
            1 d f f f f f f f f f f f 1 1 1
            1 d f f f f f f f f f f f 1 1 1
            1 d f f f f f f f f f f f 1 1 1
            1 d f f f f f f f f f f f 1 1 1
            1 d f f f f f f f f f f f 1 1 1
            1 d f f f f f f f f f f f 1 1 1
            1 1 d f f f f f f f f f 1 1 1 1
            1 1 1 d f f f f f f f 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        `, false)
        scene.setTile(12, img`
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 f f f 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 f f f f f 1 1 1 f 1 1 1
            1 1 1 1 f f f f f f 1 f f f 1 f
            1 1 1 1 1 f f f f f f f f f f f
            1 1 1 1 1 1 f f f f f f f f f f
            1 1 1 1 1 1 1 f f f f f f f f f
            1 1 1 1 1 1 1 1 1 f f f f f f f
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        `, false)
        scene.setTile(0, img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            f 1 1 1 f 1 1 1 f 1 1 1 f 1 1 1
            f f 1 f f f 1 f f f 1 f f f 1 f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        `, false)
        scene.setTile(8, img`
            6 6 8 6 6 6 6 6 6 6 6 6 8 6 6 6
            6 6 8 6 6 6 9 9 9 6 6 6 8 6 6 6
            6 6 6 6 6 9 a a a 9 6 6 6 6 6 6
            6 6 6 6 9 a a 8 a a 9 6 6 6 6 6
            6 8 6 6 6 9 a a a 9 6 6 6 6 6 6
            6 8 6 6 6 6 9 9 9 6 6 6 6 6 8 6
            6 8 6 6 6 6 6 c 6 6 6 6 6 8 6 6
            6 8 6 6 6 6 6 c 6 8 6 6 6 8 6 6
            6 6 6 6 6 6 6 c 6 8 6 6 6 8 6 6
            6 6 6 6 6 6 6 c 6 6 6 6 6 8 6 6
            6 6 8 6 6 6 8 c 8 6 6 6 6 6 6 6
            6 6 8 6 8 6 6 c 6 6 8 6 6 6 6 6
            6 8 6 6 6 8 6 c 6 8 6 6 6 6 6 6
            6 8 6 8 6 6 8 c 8 6 6 8 6 8 6 6
            6 8 6 6 8 8 6 6 6 8 8 6 6 8 6 6
            6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6
        `, true)
        scene.setTile(2, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 6 7 7 7 2 2 2 7 7 7 7 7 7 7
            7 7 6 7 7 2 5 5 5 2 7 7 7 7 7 7
            6 7 7 7 2 5 5 4 5 5 2 7 7 6 7 7
            7 6 7 7 7 2 5 5 5 2 7 7 6 7 7 7
            7 6 7 7 7 7 2 2 2 7 7 7 6 7 7 7
            7 6 7 7 7 7 7 c 7 7 7 7 6 7 7 7
            7 7 7 7 6 7 7 c 7 7 7 7 7 7 7 7
            7 7 6 7 6 7 7 c 7 7 6 7 7 7 7 7
            7 6 7 7 6 7 7 c 7 7 6 7 7 7 7 7
            7 6 7 7 7 7 6 c 6 7 7 7 7 7 7 7
            7 6 7 7 6 7 7 c 7 7 6 7 7 6 7 7
            7 6 7 7 7 6 7 c 7 6 7 7 7 7 6 7
            7 7 7 6 7 7 6 c 6 7 7 6 7 7 6 7
            7 7 7 7 6 6 7 7 7 6 6 7 7 7 6 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7
        `, true)
        scene.setTile(4, img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5
            9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5
            9 9 9 9 5 5 5 5 5 5 5 5 5 5 5 5
            9 9 9 9 9 5 5 5 5 5 5 5 5 5 5 5
            9 9 9 9 9 9 5 5 5 5 5 5 5 5 5 5
            9 9 9 9 9 9 9 9 5 5 5 5 5 5 5 5
            9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 5
        `, false)
        scene.setTile(6, img`
            6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6
            6 6 8 6 6 6 6 6 6 6 8 6 6 6 6 6
            6 6 8 6 6 6 6 6 6 6 8 6 6 6 6 8
            6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8
            6 8 6 6 8 6 6 6 8 6 6 6 8 6 6 8
            6 8 6 6 8 6 6 6 6 8 6 6 8 6 6 6
            6 8 6 6 6 6 6 6 6 8 6 6 8 6 6 6
            6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6
            8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
            8 6 6 6 6 8 6 8 6 6 6 6 6 6 6 6
            6 8 6 6 8 6 6 8 6 6 6 6 8 6 8 6
            6 8 6 6 8 6 6 8 6 6 6 8 6 6 8 6
            6 8 6 6 8 6 6 6 6 8 6 8 6 6 8 6
            6 8 6 6 8 6 6 6 6 8 6 8 6 6 8 6
            6 6 6 6 8 6 6 8 6 8 6 8 6 6 8 6
            6 6 6 6 6 6 6 8 6 8 6 6 6 6 6 6
        `, true)
        scene.setTile(7, img`
            7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 6 7 7 7 7 7 7 7 6 7 7 7 7 7
            7 7 6 7 7 7 7 7 7 7 6 7 7 7 7 6
            7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 6
            7 6 7 7 6 7 7 7 6 7 7 7 6 7 7 6
            7 6 7 7 6 7 7 7 7 6 7 7 6 7 7 7
            7 6 7 7 7 7 7 7 7 6 7 7 6 7 7 7
            7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            6 7 7 7 7 6 7 6 7 7 7 7 7 7 7 7
            7 6 7 7 6 7 7 6 7 7 7 7 6 7 6 7
            7 6 7 7 6 7 7 6 7 7 7 6 7 7 6 7
            7 6 7 7 6 7 7 7 7 6 7 6 7 7 6 7
            7 6 7 7 6 7 7 7 7 6 7 6 7 7 6 7
            7 7 7 7 6 7 7 6 7 6 7 6 7 7 6 7
            7 7 7 7 7 7 7 6 7 6 7 7 7 7 7 7
        `, true)
        game.onUpdateInterval(500, function () {
            if (game.runtime() >= 1000) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . 1 1 1 1 . . . . . . . .
                    . . . . . . . . 1 1 1 . . . . .
                    1 1 1 1 1 1 1 1 . . . 1 1 . . .
                    . . . . . . . 1 1 1 . . 1 1 . .
                    . . . . . . . . . 1 1 . . 1 . .
                    . . . . . . . . . . 1 . . 1 . .
                    . . . . . . . . . 1 1 . 1 . . .
                    . . . . . . . . 1 1 . . 1 . . .
                    . . . 1 1 1 1 1 . . . 1 . . . .
                    . . . . . . . . . 1 1 . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `, mySprite2, 210, 0)
            }
        })
    }
}

namespace _survival {
    export function main() {
        let projectile: Sprite = null
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
            otherSprite.destroy()
            music.jumpDown.play()
            info.changeLifeBy(-1)
        })
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        // Splash instruction text for the player.
        gamejam.showInstruction("SURVIVE", 500)
        info.setLife(3)
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7
        `)
        let PC = sprites.create(img`
            . 2 . . . . 2 .
            . . 2 2 2 2 . .
            . . 2 5 5 2 . .
            . . 2 5 5 2 . .
            . . 2 2 2 2 . .
            . 2 . . . . 2 .
            2 . . . . . . 2
            2 . . . . . . 2
        `, SpriteKind.Player)
        controller.moveSprite(PC)
        scene.cameraFollowSprite(PC)
        let NPC1 = sprites.create(img`
            f f f f f 8 8 8 8 8 8 f f f f f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f f f f f 8 8 8 8 8 8 f f f f f
            8 8 8 8 8 f f f f f f 8 8 8 8 8
            8 f f f 8 f d d d d f 8 f f f 8
            8 f f f 8 f d f f d f 8 f f f 8
            8 f f f 8 f d f f d f 8 f f f 8
            8 f f f 8 f d d d d f 8 f f f 8
            8 8 8 8 8 f f f f f f 8 8 8 8 8
            f f f f f 8 8 8 8 8 8 f f f f f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f f f f f 8 8 8 8 8 8 f f f f f
        `, SpriteKind.Enemy)
        let NPC2 = sprites.create(img`
            f f f f f 8 8 8 8 8 8 f f f f f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f f f f f 8 8 8 8 8 8 f f f f f
            8 8 8 8 8 f f f f f f 8 8 8 8 8
            8 f f f 8 f d d d d f 8 f f f 8
            8 f f f 8 f d f f d f 8 f f f 8
            8 f f f 8 f d f f d f 8 f f f 8
            8 f f f 8 f d d d d f 8 f f f 8
            8 8 8 8 8 f f f f f f 8 8 8 8 8
            f f f f f 8 8 8 8 8 8 f f f f f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f f f f f 8 8 8 8 8 8 f f f f f
        `, SpriteKind.Enemy)
        let NPC3 = sprites.create(img`
            f f f f f 8 8 8 8 8 8 f f f f f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f f f f f 8 8 8 8 8 8 f f f f f
            8 8 8 8 8 f f f f f f 8 8 8 8 8
            8 f f f 8 f d d d d f 8 f f f 8
            8 f f f 8 f d f f d f 8 f f f 8
            8 f f f 8 f d f f d f 8 f f f 8
            8 f f f 8 f d d d d f 8 f f f 8
            8 8 8 8 8 f f f f f f 8 8 8 8 8
            f f f f f 8 8 8 8 8 8 f f f f f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f f f f f 8 8 8 8 8 8 f f f f f
        `, SpriteKind.Enemy)
        let NPC4 = sprites.create(img`
            f f f f f 8 8 8 8 8 8 f f f f f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f f f f f 8 8 8 8 8 8 f f f f f
            8 8 8 8 8 f f f f f f 8 8 8 8 8
            8 f f f 8 f d d d d f 8 f f f 8
            8 f f f 8 f d f f d f 8 f f f 8
            8 f f f 8 f d f f d f 8 f f f 8
            8 f f f 8 f d d d d f 8 f f f 8
            8 8 8 8 8 f f f f f f 8 8 8 8 8
            f f f f f 8 8 8 8 8 8 f f f f f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f d d d f 8 f f f f 8 f d d d f
            f f f f f 8 8 8 8 8 8 f f f f f
        `, SpriteKind.Enemy)
        NPC1.setPosition(22, 100)
        NPC2.setPosition(25, 20)
        NPC3.setPosition(136, 23)
        NPC4.setPosition(137, 99)
        game.onUpdateInterval(5000, function () {
            gamejam.win(true)
        })
        game.onUpdateInterval(1000, function () {
            music.pewPew.play()
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . .
                . . . . . . . .
                . . . 2 2 . . .
                . . 2 2 2 2 . .
                . . 2 2 2 2 . .
                . . . 2 2 . . .
                . . . . . . . .
                . . . . . . . .
            `, NPC1, 50, 50)
            projectile.follow(PC)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . .
                . . . . . . . .
                . . . 2 2 . . .
                . . 2 2 2 2 . .
                . . 2 2 2 2 . .
                . . . 2 2 . . .
                . . . . . . . .
                . . . . . . . .
            `, NPC2, 50, 50)
            projectile.follow(PC)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . .
                . . . . . . . .
                . . . 2 2 . . .
                . . 2 2 2 2 . .
                . . 2 2 2 2 . .
                . . . 2 2 . . .
                . . . . . . . .
                . . . . . . . .
            `, NPC3, 50, 50)
            projectile.follow(PC)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . .
                . . . . . . . .
                . . . 2 2 . . .
                . . 2 2 2 2 . .
                . . 2 2 2 2 . .
                . . . 2 2 . . .
                . . . . . . . .
                . . . . . . . .
            `, NPC4, 50, 50)
            projectile.follow(PC)
        })

    }
}

namespace _tap {
    export function main() {

        let projectile: Sprite = null
        let beer: Sprite = null
        let tapper: Sprite = null
        controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
            animation.runImageAnimation(
                tapper,
                [img`
                    . . . . 4 4 4 4 . . . . . .
                    . . . . 4 2 2 4 . . . . . .
                    . . . . 4 4 4 4 . . . . . .
                    . . . . . 4 4 4 4 . . . . .
                    . . . . . . 4 4 4 4 . . . .
                    . . . . . . . 4 4 4 4 . . .
                    b b b . . . . . 4 4 4 4 4 .
                    b b b . . . . . . 4 4 4 4 .
                    b b b . . . . . . 8 8 8 8 8
                    b b b . . . . . . 8 8 8 8 8
                    b b b b b b b b b 8 8 8 8 8
                    b b b b b b b b b 8 8 8 8 8
                    b b b . . . . . . . . . . .
                    b b b . . . . . . . . . . .
                    b b b . . . . . . . . . . .
                    b b b . . . . . . . . . . .
               `, img`
                    . . . . . . . . . 4 4 4 4 .
                    . . . . . . . . . 4 2 2 4 .
                    . . . . . . . . . 4 4 4 4 .
                    . . . . . . . . . 4 4 4 4 .
                    . . . . . . . . . . 4 4 4 .
                    . . . . . . . . . . 4 4 4 .
                    b b b . . . . . . . 4 4 4 .
                    b b b . . . . . . . 4 4 4 .
                    b b b . . . . . . 8 8 8 8 8
                    b b b . . . . . . 8 8 8 8 8
                    b b b b b b b b b 8 8 8 8 8
                    b b b b b b b b b 8 8 8 8 8
                    b b b . . . . . . . . . . .
                    b b b . . . . . . . . . . .
                    b b b . . . . . . . . . . .
                    b b b . . . . . . . . . . .
                `],
                100,
                false
            )
            animation.runImageAnimation(
                beer,
                [img`
                    f . . . . . . f
                    f . . . 1 . . f
                    f . 1 1 1 1 1 f
                    f 1 1 1 8 1 1 f
                    f 5 5 5 5 5 5 f
                    f 5 5 5 2 f 5 f
                    f 5 5 5 5 5 5 f
                    . f f f f f f .
               `, img`
                    . . 1 1 1 1 1 1
                    . 1 9 9 1 1 9 1
                    f 5 5 5 5 5 9 f
                    f 5 5 5 5 5 5 f
                    f 5 f 5 5 5 5 f
                    f 5 2 f 2 5 5 f
                    f 5 5 2 f 2 5 f
                    f 5 5 5 5 f 5 f
                    f 5 5 5 5 5 5 f
                    . f f f f f f .
               `, img`
                    f . . . . . . f
                    f . . . . . . f
                    f . . . . . . f
                    f . . . . . . f
                    f . . . . . . f
                    f . . . . . . f
                    f . . . . . . f
                    . f f f f f f .
                `],
                100,
                false
            )
            projectile = sprites.createProjectileFromSprite(img`
                . . 1 1 1 1 1 1
                . 1 9 9 1 1 9 1
                f 5 5 5 5 5 9 f
                f 5 5 5 5 5 5 f
                f 5 f 5 5 5 5 f
                f 5 2 f 2 5 5 f
                f 5 5 2 f 2 5 f
                f 5 5 5 5 f 5 f
                f 5 5 5 5 5 5 f
                . f f f f f f .
            `, beer, 50, 0)
        })
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
            otherSprite.destroy()
            info.changeScoreBy(1)
            if (info.score() == 10) {
                // Sets the win state. After five seconds, if this
                // block is not called, the player loses.
                gamejam.win(true)
            }
        })
        scene.setBackgroundColor(13)
        // The debug loop block will automatically loop the
        // game after five seconds.
        gamejam.setDebug(true)
        let thirsty = sprites.create(img`
            . . . . . . . . . . . . . . f f f . . . . . . .
            . . . . . . . . . . . . . f 2 f f f f f . . . .
            . . . . . . . . . . . f f 2 2 e e e e e f f . .
            . . . . . . . . . . f f 2 2 2 e e e e e e f f .
            . . . . . . . . . . f e e e e f f f e e e e f .
            . . . . . . . . . f e 2 2 2 2 e e e f f f f f .
            . . . . . . . . . f 2 e f f f f f 2 2 2 e f f f
            . . c c . . . . . f f f e e e f f f f f f f f f
            . . c d c c . . . f e e 4 4 f b b e 4 4 e f e f
            . . c c d d c c . . f e d d f b b 4 d 4 e e f .
            . . . . c d d d c e e f d d d d d 4 e e e f . .
            . . . . . c c d c d d e e 2 2 2 2 2 2 2 f . . .
            . . . . . . c c c d d 4 4 e 5 4 4 4 4 4 f . . .
            . . . . . . . . . e e e e f f f f f f f f . . .
            . . . . . . . . . . . . . f f . . . f f f . . .
        `, SpriteKind.Player)
        thirsty.setPosition(130, 61)
        info.setScore(0)
        tapper = sprites.create(img`
            . . . . . . . . . 4 4 4 4 .
            . . . . . . . . . 4 4 4 4 .
            . . . . . . . . . 4 4 4 4 .
            . . . . . . . . . 4 4 4 4 .
            . . . . . . . . . . 4 4 4 .
            . . . . . . . . . . 4 4 4 .
            b b b . . . . . . . 4 4 4 .
            b b b . . . . . . . 4 4 4 .
            b b b . . . . . . 8 8 8 8 8
            b b b . . . . . . 8 8 8 8 8
            b b b b b b b b b 8 8 8 8 8
            b b b b b b b b b 8 8 8 8 8
            b b b . . . . . . . . . . .
            b b b . . . . . . . . . . .
            b b b . . . . . . . . . . .
            b b b . . . . . . . . . . .
        `, SpriteKind.Food)
        tapper.setPosition(18, 47)
        beer = sprites.create(img`
            f . . . . . . f
            f . . . . . . f
            f . . . . . . f
            f . . . . . . f
            f . . . . . . f
            f . . . . . . f
            f . . . . . . f
            . f f f f f f .
        `, SpriteKind.Food)
        beer.setPosition(23, 60)
        // Splash instruction text for the player.
        gamejam.showInstruction("TAP", 500)

    }
}
```

```package
animation
pxt-gamejam-timer=github:shakao/pxt-gamejam-timer#v0.0.22
color-coded-tilemap
```