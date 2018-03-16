
/** 
 * Head-up display
 * 
*/
//% color=#AA5585 weight=80 icon="\uf2bb"
namespace player {
    let _score: number = null;
    let _highScore: number = null;
    let _life: number = null;
    let _hud: boolean = false;
    /**
     * Color of the HUD display
     */
    let color = 15;

    function initHUD() {
        if (_hud) return;
        _hud = true;

        const font = image.font5;
        const maxW = 8;
        control.addFrameHandler(95, () => {
            // show score
            if (_score !== null) {
                let s = ""
                if (_highScore)
                    s += "HI" + _highScore + "  ";
                s += _score + ""
                while (s.length < maxW) s = " " + s
                screen.print(s, screen.width - font.charWidth * maxW - 10, font.charHeight, color, font)    
            }
            // show life
            if (_life !== null) {
                let s = _life + ""
                screen.print(s, 10, font.charHeight, color, font)
                if (_life == 0)
                    game.over();
            }
        })
    }

    function initScore() {
        if (_score !== null) return
        _score = 0;
        _highScore = updateHighScore(_score);
        initHUD();
    }

    function initLife() {
        if (_life !== null) return
        _life = 3;
        initHUD();
    }

    /**
     * Gets the current score if any
     */
    //% weight=95 blockGap=8
    //% blockId=hudScore block="score"
    export function score() {
        initScore()
        return _score || 0;
    }

    //%
    export function hasScore() {
        return _score !== null
    }

    /**
     * Gets the last recorded high score
     */
    //% weight=60
    //% blockId=highScore block="high score"
    export function highScore(): number {
        initScore();
        return _highScore || 0;
    }

    /**
     * Sets the score
     */
    //% weight=94 blockGap=8
    //% blockId=hudsetScore block="set score to %value"
    export function setScore(value: number) {
        initScore()
        _score = value | 0
    }

    /**
     * Changes the score by the given amount
     * @param value the amount of change, eg: 1
     */
    //% weight=93
    //% blockId=hudChangeScoreBy block="change score by %value"
    export function changeScoreBy(value: number) {
        initScore();
        setScore(_score + value)
    }

    /**
     * Gets the number of lives
     */
    //% weight=85 blockGap=8
    //% blockId=hudLife block="life"
    export function life() {
        initLife()
        return _life
    }

    //%
    export function hasLife() {
        return _life !== null
    }

    /**
     * Sets the number of lives
     * @param value the number of lives, eg: 3
     */
    //% weight=84 blockGap=8
    //% blockId=hudSetLife block="set life to %value"
    export function setLife(value: number) {
        initLife()
        _life = value | 0
    }

    /**
     * Changes the lives by the given amount
     * @param value the change of lives, eg: -1
     */
    //% weight=83
    //% blockId=hudChangeLifeBy block="change life by %value"
    export function changeLifeBy(value: number) {
        initLife();
        setLife(_life + value)
    }

    /**
     * Updates the high score based on the current score
     */
    export function saveHighScore() {
        if (_score) {
            updateHighScore(_score);
        }
    }
}

declare namespace player {
    /**
     * Sends the current score and the new high score
     */
    //% shim=hud::updateHighScore
    function updateHighScore(score: number): number;
}
