import React from 'react';
import { SpriteEditor } from '../sprite-editor/spriteEditor'

import '../css/GameModder.css';
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

function closestColor(buf: Uint8Array, pix: number, palette: number[][], alpha = true) {
    if (alpha && buf[pix + 3] < 100)
        return 0 // transparent
    let mindelta = 0
    let idx = -1
    for (let i = alpha ? 1 : 0; i < palette.length; ++i) {
        let delta = scale_color(palette[i][0] - buf[pix + 0]) + scale_color(palette[i][1] - buf[pix + 1]) + scale_color(palette[i][2] - buf[pix + 2])
        if (idx < 0 || delta < mindelta) {
            idx = i
            mindelta = delta
        }
    }
    return idx
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
        let header = document.getElementById('header')
        const MARGIN = 2
        let actualWidth = body.clientWidth - MARGIN
        // const BANNER_H = 40 + 21 + 21
        let actualHeight = body.clientHeight - header.clientHeight - MARGIN
        let refWidth = 539.0
        let refHeight = 500.0
        let wScale = actualWidth / refWidth
        let hScale = actualHeight / refHeight
        let scale = Math.min(wScale, hScale)
        // let scale = 1.5; // TODO: compute from client width/height
        // let width = 
        // 
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
            let newW = oldW / scale
            let newH = oldH / scale
            c.setAttribute("viewBox", `0 0 ${newW} ${newH}`)
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

        this.spriteEditorHolder.style.height = (this.spriteEditor.outerHeight() + 3) + "px";
        this.spriteEditorHolder.style.width = (this.spriteEditor.outerWidth() + 3) + "px";
        this.spriteEditorHolder.style.overflow = "hidden";
        this.spriteEditorHolder.className = 'sprite-editor-container sprite-editor-dropdown-bg sprite-editor-dropdown';
        this.spriteEditor.addKeyListeners();
        this.spriteEditor.onClose(() => {
            console.log("Closing sprite editor!")
            this.onPlay()
        });


    }

    render() {
        return (
            <div className="game-modder">
                {/* <div className="grid"> */}
                {/* <div className="questions"> */}
                {/* <h1>Mod your game!</h1>
                        <p>Fill in the questions to create your very own game.</p> */}
                <h1 id="header">Draw your hero!</h1>
                {/* <input placeholder="purple dragon">
                        </input>
                        <button ref="play-btn">
                            Play
                        </button>
                        <button ref="play-btn2">
                            Play2
                        </button> */}
                <div ref="sprite-editor-holder">

                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.playBtn = this.refs["play-btn"] as HTMLButtonElement;
        this.spriteEditorHolder = this.refs['sprite-editor-holder'] as HTMLDivElement;

        // events
        let that = this
        // this.playBtn.addEventListener('click', that.props.playHandler)

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
