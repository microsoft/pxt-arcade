
enum Choice {
    //% block="Xialing"
    xialing,
    //% block="Shang-Chi"
    shang
}

namespace sprites {

     /**
     * Allow your sprite to jump and come back to the ground
     * before jumping again
     */
    //% block="make $thisSprite=variables_get(mySprite) gravity jump"
    export function gravity_jump (thisSprite: Sprite) {
        if (thisSprite.isHittingTile(CollisionDirection.Bottom)) {
            thisSprite.vy = -200
        }
    }

    /**
     * Direct sprite to automatically jump only when hitting
     * a wall to the right or left
     */
    //% block="make $thisSprite=variables_get(mySprite) hurdle side wall"
    export function wall_jump (thisSprite: Sprite) {
        if (thisSprite.isHittingTile(CollisionDirection.Left) || thisSprite.isHittingTile(CollisionDirection.Right)) {
            sprites.gravity_jump(thisSprite)
        }
    }

    /**
     * Set a profile pic and name for your hero in the
     * upper-left hand corner of the screen
     */
    //% block="add corner profile for $choice"
    export function add_profile (choice:Choice) {
        if (choice == Choice.xialing){
            profilelife.setProfileImage(assets.image`Xialing profile`)
            profilelife.setName("Xialing")
        }
        else {
            profilelife.setProfileImage(assets.image`Shang-Chi profile`)
            profilelife.setName("Shang-Chi")
        }
    }
}

namespace animation {
    /**
     * Loops the passed frames on the sprite at the given interval whenever
     * the specified rule is true for that sprite.
     *
     * If more than one rule applies, the most specific rule will be used.
     * If multiple rules are equally specific, the currently executing rule
     * is favored (or one is chosen at random).
     *
     * @param sprite    the sprite to animate
     * @param frames    the images that make up that animation
     * @param frame     Interval the amount of time to spend on each frame in milliseconds
     * @param rule      the rule that decides when this animation will play
     */
    //% blockId=arcade_character_loop_frames2
    //% block="animate $sprite loop frames $frames interval (ms) $frameInterval when $rule"
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    //% frames.shadow=animation_editor
    //% frameInterval.shadow=timePicker
    //% rule.shadow=arcade_character_make_rule
    //% weight=100
    //% blockGap=8
    //% help=github:arcade-character-animations/docs/loop-character-animation
    export function loopFrames2(sprite: Sprite, frames: Image[], frameInterval: number, rule: number) {
        characterAnimations.loopFrames(sprite, frames, frameInterval, rule);
    }
}

namespace game {
    //% block="display level number $num"
    export function level_num (num: number) {
        game.splash("Level ", num)
    }
}