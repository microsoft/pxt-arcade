
/** 
 * Head-up display
 * 
*/
//% color=#430054 weight=80
namespace hud {
    let _score: number = null
    let _life: number = null
    let _hud: boolean = false;

    function initHUD() {
        if (_hud) return;
        _hud = true;

        let font = image.font5
        let color = 15
        let maxW = 8
        control.addFrameHandler(95, () => {
            // show score
            if (_score !== null) {
                let s = _score + ""
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
        _score = 0
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
    //%
    export function score() {
        initScore()
        return _score || 0;
    }

    //%
    export function hasScore() {
        return _score !== null
    }

    //%
    export function setScore(score: number) {
        initScore()
        _score = score | 0
    }

    //%
    export function changeScoreBy(points: number) {
        initScore();
        setScore(_score + points)
    }

    //%
    export function life() {
        initLife()
        return _life
    }

    //%
    export function hasLife() {
        return _life !== null
    }

    //%
    export function setLife(life: number) {
        initLife()
        _life = life | 0
    }

    //%
    export function changeLifeBy(life: number) {
        initLife();
        setLife(_life + life)
    }
}
