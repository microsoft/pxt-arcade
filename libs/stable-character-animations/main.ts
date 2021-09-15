
/**
 * Rules used to dictate when animations should be looped on
 * a sprite.
 *
 * These are redundant on purpose. We need to preserve the
 * number of predicates in a rule, so every predicate needs
 * to be unique. We favor rules that use more predicates
 */
enum Predicate {
    //% block="not moving"
    NotMoving = 1,
    //% block="moving"
    Moving = 1 << 1,
    //% block="facing up"
    FacingUp = 1 << 2,
    //% block="facing right"
    FacingRight = 1 << 3,
    //% block="facing down"
    FacingDown = 1 << 4,
    //% block="facing left"
    FacingLeft = 1 << 5,
    //% block="moving up"
    MovingUp = 1 << 6,
    //% block="moving right"
    MovingRight = 1 << 7,
    //% block="moving down"
    MovingDown = 1 << 8,
    //% block="moving left"
    MovingLeft = 1 << 9,
    //% block="hitting wall up"
    HittingWallUp = 1 << 10,
    //% block="hitting wall right"
    HittingWallRight = 1 << 11,
    //% block="hitting wall down"
    HittingWallDown = 1 << 12,
    //% block="hitting wall left"
    HittingWallLeft = 1 << 13,
}

//% color="#7d6282" icon="\uf03d" block="Character"
namespace characterAnimations {
    export type Rule = number;

    const FACING = Predicate.FacingUp | Predicate.FacingRight | Predicate.FacingDown | Predicate.FacingLeft;
    const MOVING = Predicate.MovingUp | Predicate.MovingRight | Predicate.MovingDown | Predicate.MovingLeft | Predicate.Moving;

    let sceneStack: CharacterAnimationSceneState[];

    class CharacterAnimationSceneState {
        public characters: CharacterState[];

        constructor() {
            this.characters = [];
        }

        update() {
            const dt = game.currentScene().eventContext.deltaTimeMillis;

            let cleanup = false;
            for (const character of this.characters) {
                if (character.sprite.flags & sprites.Flag.Destroyed) cleanup = true;
                character.update(dt);
            }

            if (cleanup) {
                this.characters = this.characters.filter(character => !(character.sprite.flags & sprites.Flag.Destroyed))
            }
        }
    }

    class CharacterAnimation {
        startFrames: Image[];
        loopFrames: Image[];
        startInterval: number;
        loopInterval: number;

        constructor(public rule: Rule) {
        }
    }

     class CharacterState {
        protected animations: CharacterAnimation[];
        protected lastState: number;
        protected current: CharacterAnimation;
        protected possibleFacingDirections: number;
        protected enabled: boolean;

        protected lastX: number;
        protected lastY: number;

        protected runningStartFrames: boolean;

        protected timer: number;
        protected frame: number;

        protected manualFlags: number;

        constructor(public sprite: Sprite) {
            this.animations = [];
            this.timer = 0;
            this.frame = 0;
            this.lastState = Predicate.FacingRight;
            this.possibleFacingDirections = 0;
            this.enabled = true;
            this.lastX = sprite.x;
            this.lastY = sprite.y;
            this.manualFlags = 0;
        }

        setFrames(loop: boolean, frames: Image[], interval: number, rule: Rule) {
            this.possibleFacingDirections |= (rule & FACING);
            for (const animation of this.animations) {
                if (animation.rule === rule) {
                    if (loop) {
                        animation.loopFrames = frames;
                        animation.loopInterval = interval;
                    }
                    else {
                        animation.startFrames = frames;
                        animation.startInterval = interval;
                    }
                    return;
                }
            }

            const anim = new CharacterAnimation(rule);

            if (loop) {
                anim.loopFrames = frames;
                anim.loopInterval = interval;
            }
            else {
                anim.startFrames = frames;
                anim.startInterval = interval;
            }

            this.animations.push(anim);
        }

        setLoopFrames(frames: Image[], interval: number, rule: Rule) {
            this.setFrames(true, frames, interval, rule);
        }

        setStartFrames(frames: Image[], interval: number, rule: Rule) {
            this.setFrames(false, frames, interval, rule);
        }

        update(dt: number) {
            let state = 0;

            if (this.sprite.vx | this.sprite.vy) {
                state |= Predicate.Moving;

                if (this.sprite.vx > 0) {
                    state |= (Predicate.FacingRight & this.possibleFacingDirections) | Predicate.MovingRight;
                }
                else if (this.sprite.vx < 0) {
                    state |= (Predicate.FacingLeft & this.possibleFacingDirections) | Predicate.MovingLeft
                }

                if (this.sprite.vy > 0) {
                    state |= (Predicate.FacingDown & this.possibleFacingDirections) | Predicate.MovingDown;
                }
                else if (this.sprite.vy < 0) {
                    state |= (Predicate.FacingUp & this.possibleFacingDirections) | Predicate.MovingUp
                }

                if (!(state & FACING)) {
                    state |= (this.lastState & FACING)
                }
            }
            else if (this.sprite.x != this.lastX || this.sprite.y != this.lastY) {
                state |= Predicate.Moving;

                if (this.sprite.x > this.lastX) {
                    state |= (Predicate.FacingRight & this.possibleFacingDirections) | Predicate.MovingRight;
                }
                else if (this.sprite.x < this.lastX) {
                    state |= (Predicate.FacingLeft & this.possibleFacingDirections) | Predicate.MovingLeft
                }

                if (this.sprite.y > this.lastY) {
                    state |= (Predicate.FacingDown & this.possibleFacingDirections) | Predicate.MovingDown;
                }
                else if (this.sprite.y < this.lastY) {
                    state |= (Predicate.FacingUp & this.possibleFacingDirections) | Predicate.MovingUp
                }

                if (!(state & FACING)) {
                    state |= (this.lastState & FACING)
                }
            }
            else {
                state |= Predicate.NotMoving;
                state |= (this.lastState & FACING);
            }

            if (this.sprite.isHittingTile(CollisionDirection.Bottom)) {
                state |= Predicate.HittingWallDown;
            }
            if (this.sprite.isHittingTile(CollisionDirection.Top)) {
                state |= Predicate.HittingWallUp;
            }
            if (this.sprite.isHittingTile(CollisionDirection.Right)) {
                state |= Predicate.HittingWallRight;
            }
            if (this.sprite.isHittingTile(CollisionDirection.Left)) {
                state |= Predicate.HittingWallLeft;
            }

            this.lastX = this.sprite.x;
            this.lastY = this.sprite.y;



            const newAnimation = this.pickRule(this.manualFlags || state);
            if (newAnimation !== this.current) {
                this.frame = 0;
                this.timer = 0;

                this.runningStartFrames = !!(newAnimation && newAnimation.startFrames);

                this.current = newAnimation;

                if (this.current && this.enabled) {
                    if (this.runningStartFrames) {
                        this.sprite.setImage((this.current.startFrames[0]))
                    }
                    else {
                        this.sprite.setImage((this.current.loopFrames[0]))
                    }
                }
            }

            if (!this.current || !this.enabled) return;

            this.timer += dt;

            if (this.runningStartFrames) {
                while (this.timer >= this.current.startInterval && this.runningStartFrames) {
                    this.timer -= this.current.startInterval;
                    this.frame++;

                    if (this.frame >= this.current.startFrames.length) {
                        this.runningStartFrames = false;
                        if (this.current.loopFrames) {
                            this.sprite.setImage(this.current.loopFrames[0]);
                            this.timer = 0;
                            this.frame = 0;
                        }
                    }
                    else {
                        this.sprite.setImage(this.current.startFrames[this.frame])
                    }
                }
            }
            else if (this.current.loopFrames) {
                while (this.timer >= this.current.loopInterval) {
                    this.timer -= this.current.loopInterval;
                    this.frame = (this.frame + 1) % this.current.loopFrames.length;

                    this.sprite.setImage(this.current.loopFrames[this.frame])
                }
            }
        }

        matchesRule(rule: Rule) {
            return !(((this.manualFlags || this.lastState) & rule) ^ rule);
        }

        setEnabled(enabled: boolean) {
            this.enabled = enabled;
            if (enabled && this.current) {
                if (this.runningStartFrames) {
                    this.sprite.setImage(this.current.startFrames[this.frame])
                }
                else {
                    this.sprite.setImage(this.current.loopFrames[this.frame])
                }
            }
        }

        setManualFlags(flags: Rule) {
            // Check if invalid
            flags = rule(flags);
            if (!flags) return;

            this.manualFlags = flags;
        }

        clearState() {
            this.manualFlags = 0;
            this.lastState = 0;
        }

        protected pickRule(state: number) {
            this.lastState = state;

            // If we have multiple animations with the same best score, we
            // want to prioritize the current animation and then the rest
            // by the order they were added
            let best = this.current;
            let bestScore = this.current && score(state, best.rule);
            let currentScore: number;

            for (const animation of this.animations) {
                currentScore = score(state, animation.rule);
                if (currentScore > bestScore) {
                    bestScore = currentScore;
                    best = animation;
                }
            }

            if (bestScore === 0 || bestScore == undefined) return null;

            return best;
        }
    }

     function init() {
         if (sceneStack) {
             if (!sceneStack.length) {
                 initScene();
             }
             return;
         }
         sceneStack = [];

         game.addScenePushHandler(initScene);

         game.addScenePopHandler(function (oldScene: scene.Scene) {
             sceneStack.pop();
         });

         initScene();
     }

     function initScene() {
         sceneStack.push(new CharacterAnimationSceneState());
         const sceneState = sceneStack[sceneStack.length - 1];

         game.currentScene().eventContext.registerFrameHandler(scene.ANIMATION_UPDATE_PRIORITY, function() {
             if (sceneState) {
                 sceneState.update();
             }
         });
     }

    function score(state: number, rule: Rule) {
        let res = 0;
        let check = state & rule;

        if (check ^ rule) return 0;

        while (check) {
            if (check & 1) ++res;
            check >>= 1;
        }

        return res;
    }

    function getStateForSprite(sprite: Sprite, createIfNotFound: boolean) {
        init();

        if (!sprite) return undefined;

        const sceneState = sceneStack[sceneStack.length - 1];
        for (const state of sceneState.characters) {
            if (state.sprite === sprite) {
                return state;
            }
        }

        if (createIfNotFound) {
            const newState = new CharacterState(sprite);
            sceneState.characters.push(newState);
            return newState;
        }
        return undefined;
    }

    export function ruleToString(rule: Rule) {
        let out = "";
        if (rule & Predicate.NotMoving) {
            out += "not-moving "
        }
        if (rule & Predicate.Moving) {
            out += "moving "
        }
        if (rule & Predicate.FacingUp) {
            out += "facing-up "
        }
        if (rule & Predicate.FacingRight) {
            out += "facing-right "
        }
        if (rule & Predicate.FacingDown) {
            out += "facing-down "
        }
        if (rule & Predicate.FacingLeft) {
            out += "facing-left "
        }
        if (rule & Predicate.MovingUp) {
            out += "moving-up "
        }
        if (rule & Predicate.MovingRight) {
            out += "moving-right "
        }
        if (rule & Predicate.MovingDown) {
            out += "moving-down "
        }
        if (rule & Predicate.MovingLeft) {
            out += "moving-left "
        }
        if (rule & Predicate.HittingWallUp) {
            out += "hitting-wall-up "
        }
        if (rule & Predicate.HittingWallRight) {
            out += "hitting-wall-right "
        }
        if (rule & Predicate.HittingWallDown) {
            out += "hitting-wall-down "
        }
        if (rule & Predicate.HittingWallLeft) {
            out += "hitting-wall-left "
        }

        return out.trim();
    }

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
     * @param frameInterval the amount of time to spend on each frame in milliseconds
     * @param rule      the rule that decides when this animation will play
     */
    //% blockId=arcade_character_loop_frames
    //% block="$sprite loop frames $frames $frameInterval when $rule"
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    //% frames.shadow=animation_editor
    //% frameInterval.shadow=timePicker
    //% rule.shadow=arcade_character_make_rule
    //% weight=100
    //% blockGap=8
    //% help=github:arcade-character-animations/docs/loop-character-animation
    export function loopFrames(sprite: Sprite, frames: Image[], frameInterval: number, rule: Rule) {
        init();
        if (!sprite || !frames || !frames.length || !rule) return;
        if (Number.isNaN(frameInterval) || frameInterval < 5) frameInterval = 5;

        const state = getStateForSprite(sprite, true);
        state.setLoopFrames(frames, frameInterval, rule);
    }

    /**
     * Runs the passed frames on the sprite at the given interval whenever
     * the specified rule begins to be true for that sprite. If there are loop
     * frames for a rule, they will take effect after the run is complete.
     *
     * If more than one rule applies, the most specific rule will be used.
     * If multiple rules are equally specific, the currently executing rule
     * is favored (or one is chosen at random).
     *
     * @param sprite    the sprite to animate
     * @param frames    the images that make up that animation
     * @param frameInterval the amount of time to spend on each frame in milliseconds
     * @param rule      the rule that decides when this animation will play
     */
    //% blockId=arcade_character_run_frames
    //% block="$sprite run frames $frames $frameInterval when $rule becomes true"
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    //% frames.shadow=animation_editor
    //% frameInterval.shadow=timePicker
    //% rule.shadow=arcade_character_make_rule
    //% weight=90
    //% help=github:arcade-character-animations/docs/run-character-animation
    export function runFrames(sprite: Sprite, frames: Image[], frameInterval: number, rule: Rule) {
        init();
        if (!sprite || !frames || !frames.length || !rule) return;
        if (Number.isNaN(frameInterval) || frameInterval < 5) frameInterval = 5;

        const state = getStateForSprite(sprite, true);
        state.setStartFrames(frames, frameInterval, rule);
    }

    /**
     * Use to check the current state of a sprite. Be careful, sprites
     * will only be facing a direction if they have an animation
     * that uses the one of the facing direction rules (e.g. FacingLeft, FacingUp, etc.).
     *
     * @param sprite    The sprite to check the state of
     * @param rule      The rule to check
     */
    //% blockId=arcade_character_is_facing
    //% block="$sprite is $rule"
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    //% rule.shadow=arcade_character_make_rule
    //% weight=80
    //% help=github:arcade-character-animations/docs/matches-rule
    export function matchesRule(sprite: Sprite, rule: Rule): boolean {
        const existing = getStateForSprite(sprite, false);
        if (existing) return existing.matchesRule(rule);

        // If this sprite isn't in the system, then do the best we can. Note that this
        // logic is slightly different than the logic above because we do not have a list
        // of possible facing directions to narrow by or a reliable last x/y or an existing
        let state = 0;
        if (sprite.vx | sprite.vy) {
                state |= Predicate.Moving;

                if (sprite.vx > 0) {
                    state |= Predicate.FacingRight | Predicate.MovingRight;
                }
                else if (sprite.vx < 0) {
                    state |= Predicate.FacingLeft | Predicate.MovingLeft
                }

                if (sprite.vy > 0) {
                    state |= Predicate.FacingDown | Predicate.MovingDown;
                }
                else if (sprite.vy < 0) {
                    state |= Predicate.FacingUp | Predicate.MovingUp
                }
            }
            else {
                state |= Predicate.NotMoving;
            }

            if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                state |= Predicate.HittingWallDown;
            }
            if (sprite.isHittingTile(CollisionDirection.Top)) {
                state |= Predicate.HittingWallUp;
            }
            if (sprite.isHittingTile(CollisionDirection.Right)) {
                state |= Predicate.HittingWallRight;
            }
            if (sprite.isHittingTile(CollisionDirection.Left)) {
                state |= Predicate.HittingWallLeft;
            }

        return !((state & rule) ^ rule);
    }

    /**
     * Enable or disable all rule animations on the specified sprite.
     * This is useful for temporarily turning off animations while
     * another animation plays (e.g. an attack animation)
     *
     * @param sprite    The sprite to enable/disable animations on
     * @param enabled   True to enable, false to disable
     */
    //% blockId=arcade_character_animation_enabled
    //% block="$sprite enable character animations $enabled"
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    //% weight=70
    //% blockGap=8
    //% help=github:arcade-character-animations/docs/set-character-animations-enabled
    export function setCharacterAnimationsEnabled(sprite: Sprite, enabled: boolean) {
        const state = getStateForSprite(sprite, false);
        if (!state) return;

        state.setEnabled(enabled);
    }

    /**
     * Manually set the state of a sprite. This state will remain in
     * effect until you call clear state or set the state to something else.
     * Invalid states (i.e. "moving" and "not moving") are ignored.
     *
     * @param sprite    The sprite to set the state of
     * @param rule      The state to set on the sprite
     */
    //% blockId=arcade_character_animation_set_state
    //% block="$sprite set state to $rule"
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    //% rule.shadow=arcade_character_make_rule
    //% weight=60
    //% blockGap=8
    //% help=github:arcade-character-animations/docs/set-character-state
    export function setCharacterState(sprite: Sprite, rule: Rule) {
        const state = getStateForSprite(sprite, true);
        state.setManualFlags(rule);
    }

    /**
     * Clear the current state of the sprite. This will also disable any
     * manually set state and re-enable automatic state tracking.
     *
     * @param sprite    The sprite to clear the state of
     */
    //% blockId=arcade_character_animation_clear_state
    //% block="$sprite clear state"
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    //% weight=50
    //% help=github:arcade-character-animations/docs/clear-character-state
    export function clearCharacterState(sprite: Sprite) {
        const state = getStateForSprite(sprite, false);
        if (state) state.clearState();
    }

    /**
     * Constructs a rule for checking the state of a sprite. Rules
     * with more clauses will override rules with fewer clauses. Invalid
     * rules (e.g. "moving left AND moving right") are ignored.
     */
    //% blockId=arcade_character_make_rule
    //% block="$p1||and $p2 and $p3 and $p4 and $p5"
    //% inlineInputMode=inline
    //% p1.shadow=arcade_character_predicate
    //% p2.shadow=arcade_character_predicate
    //% p3.shadow=arcade_character_predicate
    //% p4.shadow=arcade_character_predicate
    //% p5.shadow=arcade_character_predicate
    //% weight=40
    //% blockGap=8
    //% help=github:arcade-character-animations/docs/rule
    export function rule(p1: number, p2?: number, p3?: number, p4?: number, p5?: number): Rule {
        let rule = p1;
        if (p2) rule |= p2;
        if (p3) rule |= p3;
        if (p4) rule |= p4;

        // Check for invalid rules
        if (
            // Moving and not moving
            (rule & Predicate.NotMoving) && (rule & MOVING) ||
            // moving/facing left and right
            (rule & (Predicate.MovingLeft | Predicate.FacingLeft)) && (rule & (Predicate.MovingRight | Predicate.FacingRight)) ||
            // moving/facing up and down
            (rule & (Predicate.MovingUp | Predicate.FacingUp)) && (rule & (Predicate.MovingDown | Predicate.FacingDown)) ||

            // moving down and on ground
            (rule & Predicate.MovingDown) && (rule & Predicate.HittingWallDown) ||
            // moving up and on ceiling
            (rule & Predicate.MovingUp) && (rule & Predicate.HittingWallUp) ||
            // moving right and on right wall
            (rule & Predicate.MovingRight) && (rule & Predicate.HittingWallRight) ||
            // moving left and on left wall
            (rule & Predicate.MovingLeft) && (rule & Predicate.HittingWallLeft)
        ) {
            return 0;
        }

        return rule;
    }

    /**
     * A series of images that make up an animation.
     *
     * @frames  An array of images
     */
    //% blockId=arcade_character_animation_editor block="$frames"
    //% shim=TD_ID
    //% frames.fieldEditor="animation"
    //% frames.fieldOptions.decompileLiterals="true"
    //% frames.fieldOptions.filter="!tile !dialog !background"
    //% duplicateShadowOnDrag
    //% weight=30
    //% deprecated=1
    //% blockGap=8
    export function _animationFrames(frames: Image[]) {
        return frames
    }

    /**
     * A clause for a sprite animation rule.
     */
    //% blockId=arcade_character_predicate block="$predicate"
    //% shim=TD_ID
    //% weight=20
    //% help=github:arcade-character-animations/docs/predicate
    export function _predicate(predicate: Predicate): number {
        return predicate
    }
}