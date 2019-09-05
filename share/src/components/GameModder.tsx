import React from 'react';
import { SpriteEditor } from '../sprite-editor/spriteEditor'

import '../css/GameModder.css';
import '../css/icons.css';
import '../css/SpriteEditor.css';
import { imageLiteralToBitmap, bitmapToImageLiteral, Bitmap } from '../sprite-editor/bitmap';
import { bunnyHopBinJs } from '../games/bunny_hop_min.js';

export interface GameModderProps {
    playHandler: (binJs: string) => void
}
export interface GameModderState {
}

const DEFAULT_SPRITE_STATE = `
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
`;

export function f4EncodeImg(w: number, h: number, bpp: number, getPix: (x: number, y: number) => number) {
    let r = hex2(0xe0 | bpp) + hex2(w) + hex2(h) + "00"
    let ptr = 4
    let curr = 0
    let shift = 0

    let pushBits = (n: number) => {
        curr |= n << shift
        if (shift == 8 - bpp) {
            r += hex2(curr)
            ptr++
            curr = 0
            shift = 0
        } else {
            shift += bpp
        }
    }

    for (let i = 0; i < w; ++i) {
        for (let j = 0; j < h; ++j)
            pushBits(getPix(i, j))
        while (shift != 0)
            pushBits(0)
        if (bpp > 1) {
            while (ptr & 3)
                pushBits(0)
        }
    }

    return r

    function hex2(n: number) {
        return ("0" + n.toString(16)).slice(-2)
    }
}

export function toNumbers(colors: string[]): number[][] {
    const res: number[][] = [];
    for (let i = 0; i < colors.length; i++) {
        const color = parseColorString(colors[i]);
        res.push([_r(color), _g(color), _b(color)]);
    }
    return res;
}

function parseColorString(color: string) {
    if (color) {
        if (color.length === 6) {
            return parseInt("0x" + color);
        }
        else if (color.length === 7) {
            return parseInt("0x" + color.substr(1));
        }
    }
    return 0;
}

function _r(color: number) { return (color >> 16) & 0xff }
function _g(color: number) { return (color >> 8) & 0xff }
function _b(color: number) { return color & 0xff }

const defaultPalletColors = [
    "#000000",
    "#ffffff",
    "#ff2121",
    "#ff93c4",
    "#ff8135",
    "#fff609",
    "#249ca3",
    "#78dc52",
    "#003fad",
    "#87f2ff",
    "#8e2ec4",
    "#a4839f",
    "#5c406c",
    "#e5cdc4",
    "#91463d",
    "#000000"
]
const defaultColorArray = toNumbers(defaultPalletColors);

function scale_color(v: number) {
    return v * v
}

function encodeImage(bitmap: Bitmap): string {
    return f4EncodeImg(bitmap.width, bitmap.height, 4, bitmap.get.bind(bitmap))
}

export class GameModder extends React.Component<GameModderProps, GameModderState> {
    protected playBtn: HTMLButtonElement | undefined;
    protected spriteEditorHolder: HTMLDivElement | undefined;
    protected spriteEditor: SpriteEditor;

    constructor(props: GameModderProps) {
        super(props);
        this.state = {
        }
    }

    renderSpriteEditor() {
        if (!this.spriteEditorHolder)
            return;

        // const { value } = this.props;
        // const stateSprite = value && this.stripImageLiteralTags(value)
        const state = imageLiteralToBitmap('', DEFAULT_SPRITE_STATE);

        let body = document.getElementsByTagName('body')[0]
        let header = this.refs['header'] as HTMLDivElement
        header.textContent = "Draw your character!"
        // const MARGIN = 20
        const MARGIN = 2
        let actualWidth = body.clientWidth - MARGIN
        let actualHeight = body.clientHeight - header.clientHeight - MARGIN
        let refWidth = 539.0
        let refHeight = 500.0
        let wScale = actualWidth / refWidth
        let hScale = actualHeight / refHeight
        let scale = Math.min(wScale, hScale)
        console.log(`Sprite editor scale: ${scale}`)
        let htmlEl = document.getElementsByTagName('html')[0]
        htmlEl.setAttribute("style", `font-size: ${scale}px`)

        this.spriteEditor = new SpriteEditor(state, null, false, scale);
        this.spriteEditor.render(this.spriteEditorHolder);
        // HACK: scaling
        function scaleAtt(el: Element, attName: string, scale: number) {
            let oldW = parseInt(el.getAttribute(attName))
            let newW = oldW * scale
            el.setAttribute(attName, newW.toString())
        }
        let canvases = document.getElementsByClassName("sprite-editor-canvas")
        for (let c of canvases) {
            // scaleAtt(c, "width", scale)
            // scaleAtt(c, "height", scale)
        }
        let controls = document.getElementsByClassName("sprite-canvas-controls")
        for (let c of controls) {
            let oldW = parseInt(c.getAttribute("width").replace("px", ""))
            let oldH = parseInt(c.getAttribute("height").replace("px", ""))
            // fudge of 5 for scale 1.892
            const fudge = 0 // 5 * scale
            let newW = (oldW - fudge) / scale
            let newH = (oldH - fudge) / scale
            c.setAttribute("viewBox", `${fudge} ${fudge} ${newW} ${newH}`)
        }
        // END HACK

        this.spriteEditor.rePaint();
        this.spriteEditor.setActiveColor(1, true);
        this.spriteEditor.setSizePresets([
            [8, 8],
            [16, 16],
            [32, 32],
            [10, 8]
        ]);

        this.spriteEditorHolder.style.height = (this.spriteEditor.outerHeight()) + "px";
        this.spriteEditorHolder.style.width = (this.spriteEditor.outerWidth()) + "px";
        this.spriteEditorHolder.style.overflow = "hidden";
        this.spriteEditorHolder.className = 'sprite-editor-container sprite-editor-dropdown-bg sprite-editor-dropdown';
        this.spriteEditor.addKeyListeners();
        this.spriteEditor.onClose(() => {
            console.log("Closing sprite editor!")
            this.onPlay()
        });

        // canvas start is 10rem + 65rem + 10rem
        this.renderTopBar();
    }

    renderTopBar() {
        //
        // TOP SPRITE PICKER BAR
        //
        let topBarHolder = this.refs["sprite-picker"] as HTMLDivElement
        let topBarSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")// as unknown as SVGSVGElement;
        // topBarSvg.setAttribute("width", `500px`)
        // topBarSvg.setAttribute("height", `100px`)
        let tabEl = document.createElementNS("http://www.w3.org/2000/svg", "path")// as unknown as SVGPathElement
        const R = 20
        const ICON_H = 50
        const ICON_W = 50
        const TAB_MARGIN = 20
        const SVG_W = 541
        const SVG_H = R * 2 + ICON_H + TAB_MARGIN * 2
        topBarSvg.setAttribute('viewBox', `0 0 ${SVG_W} ${SVG_H}`)
        let tabStart = 100
        const TOTAL_TAB_W = R * 4 + ICON_W
        let tabFinish = SVG_W - (tabStart + TOTAL_TAB_W)
        let tabPath = `M 0,${SVG_H - TAB_MARGIN} h ${tabStart} q ${R},0 ${R},-${R} v -${ICON_H} q 0,-${R} ${R},-${R} h ${ICON_W} q ${R},0 ${R},${R} v ${ICON_H} q 0,${R} ${R},${R} h ${tabFinish}`
        tabEl.setAttribute("d", tabPath)
        topBarSvg.appendChild(tabEl)
        let body = document.getElementsByTagName("body")[0]
        topBarHolder.appendChild(topBarSvg)

        // <image xlink:href=""
        // x="9" y="9" width="32px" height="32px"></image>
        let img = document.createElementNS("http://www.w3.org/2000/svg", "image")
        let imgData = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABiklEQVRYR2P832j6nwELYKw/zYgsjEsdulZ0fdjMRhZjHDwOKL2C6thuHVQ+ujwur6HpIxQiiBAYKAcsaZ4PTgPR/6ZB/ITuEM5vEPHvXBAaxkcPAZg8ujg0RHCFBOOAOwDmYLhDirPwJ1z0EED3OS55HCEBz2qDxgGOXqrgEJDSdCWUhckLKbSQwAgBujuAYCKkLBwQuQaWVtBDYMAdEOOQAy4HOnsjqBP3xIYYLCQGnwO2FGIvEYn1GS516CUqzhAYKAcsdjyJ1+fPru+mbhpBD4FB44BnPv2oPoXV79BakmohgSsE6O4AWKKFZUdCUQFTDwsJ9ERPbB2ytBfS/oDXBYPOAURHBSzbQoMCQx+OFlLsfnP8IUB3B+BMC+g+Q/MxroIP5gGYPCxtwNJOefEK1BAYNA4g5BCSqwRc/QlYOYDLQIxcQbLNUA3kOgA9JGB8D2djMBPej0Bz2FIm1FY1Rn8DvedEyGOwkBgwB6A7EN1BhDwACzGYOliIwHpKKF1wQoaB5KntAAAGmCxGspzgrwAAAABJRU5ErkJggg=='
        img.setAttributeNS("http://www.w3.org/1999/xlink", "href", `data:image/png;base64,${imgData}`)
        img.setAttribute("x", `${9}`)
        img.setAttribute("y", `${9}`)
        img.setAttribute("width", `${ICON_W}px`)
        img.setAttribute("height", `${ICON_W}px`)
        topBarSvg.appendChild(img)
    }

    render() {
        return (
            <div className="game-modder">
                <h1 ref="header">Mod your game!</h1>

                <div ref="sprite-picker" className="sprite-picker">
                    {/* <div className="sprite-tab-spacer">
                    </div> */}
                    {/* <div className="sprite-tab">
                    </div>
                    <div className="sprite-tab">
                    </div>
                    <div className="sprite-tab">
                    </div>
                    <div className="sprite-tab">
                    </div> */}
                </div>
                <div ref="sprite-editor-holder" className="sprite-editor-holder">
                </div>
                <button ref="play-btn">Play!</button>
            </div>
        )
    }

    componentDidMount() {
        this.playBtn = this.refs["play-btn"] as HTMLButtonElement;
        this.spriteEditorHolder = this.refs['sprite-editor-holder'] as HTMLDivElement;

        // events
        this.playBtn.addEventListener('click', this.onPlay.bind(this))

        // TODO(dz):
        this.renderSpriteEditor()
    }

    componentWillUnmount() {
        this.playBtn = undefined;
        this.spriteEditorHolder = undefined;
    }

    onPlay() {
        // const newSpriteState = bitmapToImageLiteral(.image);
        // let newHexString = 
        const gameBinJs = bunnyHopBinJs;
        const newHexImg = encodeImage(this.spriteEditor.bitmap().image)
        let oldImageBin = "87040c0015000000000000000000000000000000000000000010010000000000000000111110010000000000100110111111010000000000101311111111111101000000003013f1111111111100000010011011f11111111101000010131111f111111101000000003013f11111010000000000000000111110010000000000000000000010010000000000000000000000000000000000"
        console.log(oldImageBin)
        console.log("==>")
        console.log(newHexImg)

        const newGameBinJs = gameBinJs.replace(oldImageBin, newHexImg)

        this.props.playHandler(newGameBinJs)
    }
}

export default GameModder;
