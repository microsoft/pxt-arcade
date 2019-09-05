import React from 'react';
import { SpriteEditor } from '../sprite-editor/spriteEditor'

import '../css/GameModder.css';
import '../css/icons.css';
import '../css/SpriteEditor.css';
import { imageLiteralToBitmap, bitmapToImageLiteral, Bitmap } from '../sprite-editor/bitmap';
// import { bunnyHopBinJs } from '../../public/games/bunny_hop/bunny_hop_min.js.js';

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

// TODO: either we need binHexToBitmap or we need the original source code
function bitmapToBinHex(bitmap: Bitmap): string {
    return f4EncodeImg(bitmap.width, bitmap.height, 4, bitmap.get.bind(bitmap))
}
function bitmapToText(bmp: Bitmap): string {
    return bitmapToImageLiteral(bmp);
}
function textToBitmap(text: string): Bitmap {
    const bmp = imageLiteralToBitmap(text);

    // Ignore invalid bitmaps
    if (bmp && bmp.width && bmp.height) {
        return bmp
    } else {
        return null;
    }
}
function bitmapToSvgEl(bmp: Bitmap): SVGForeignObjectElement {
    let canv = bitmapToCanvas(bmp)
    const fe = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    fe.appendChild(canv)
    return fe
    // let fe =
}
function bitmapToSquareCanvas(bmp: Bitmap) {
    const WIDTH = 32;

    const colors = defaultPalletColors.slice(1)
    // const canvas = document.createElementNS("http://www.w3.org/2000/svg", "canvas");
    const canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = WIDTH;

    // Works well for all of our default sizes, does not work well if the size is not
    // a multiple of 2 or is greater than 32 (i.e. from the decompiler)
    const cellSize = Math.min(WIDTH / bmp.width, WIDTH / bmp.height);

    // Center the image if it isn't square
    const xOffset = Math.max(Math.floor((WIDTH * (1 - (bmp.width / bmp.height))) / 2), 0);
    const yOffset = Math.max(Math.floor((WIDTH * (1 - (bmp.height / bmp.width))) / 2), 0);

    let context: CanvasRenderingContext2D;
    context = canvas.getContext("2d");

    for (let c = 0; c < bmp.width; c++) {
        for (let r = 0; r < bmp.height; r++) {
            const color = bmp.get(c, r);

            if (color) {
                context.fillStyle = colors[color - 1];
                context.fillRect(xOffset + c * cellSize, yOffset + r * cellSize, cellSize, cellSize);
            }
        }
    }

    return canvas;
}
function bitmapToCanvas(bmp: Bitmap, scale: number = 4) {
    const colors = defaultPalletColors.slice(1)
    // const canvas = document.createElementNS("http://www.w3.org/2000/svg", "canvas");
    const canvas = document.createElement("canvas");
    let width = canvas.width = bmp.width * scale;
    let height = canvas.height = bmp.height * scale;

    let cellSize = scale

    // TODO: Center the image if it isn't square
    const xOffset = 0
    const yOffset = 0

    let context: CanvasRenderingContext2D;
    context = canvas.getContext("2d");

    for (let c = 0; c < bmp.width; c++) {
        for (let r = 0; r < bmp.height; r++) {
            const color = bmp.get(c, r);

            if (color) {
                context.fillStyle = colors[color - 1];
                context.fillRect(xOffset + c * cellSize, yOffset + r * cellSize, cellSize, cellSize);
            }
        }
    }

    return canvas;
}
function bitmapToUrl(bmp: Bitmap): string {
    return bitmapToCanvas(bmp).toDataURL();
}

function mkPxtJson(): string {
    let json = {
        "name": "SampleIMages",
        "dependencies": {
            "device": "*"
        },
        "description": "",
        "files": [
            "main.blocks",
            "main.ts",
            "README.md"
        ],
        "preferredEditor": "blocksprj"
    }
    return JSON.stringify(json)
}

async function getTxtFile(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.response);
            } else {
                const err = new Error(`Error response (${status}) from '${url}'; content: ${xhr.response}`);
                reject(err)
            }
        };
        xhr.send();
    });
};

function createPngImg(x: number, y: number, w: number, h: number, bmp?: Bitmap): SVGImageElement {
    let img = document.createElementNS("http://www.w3.org/2000/svg", "image")
    img.setAttribute("x", `${x}`)
    img.setAttribute("y", `${y}`)
    img.setAttribute("width", `${w}px`)
    img.setAttribute("height", `${h}px`)
    if (bmp) {
        updatePngImg(img, bmp)
    }
    return img
}

function updatePngImg(img: SVGImageElement, bmp: Bitmap) {
    let imgData = bitmapToUrl(bmp)
    img.setAttributeNS("http://www.w3.org/1999/xlink", "href", `${imgData}`)
}

function createSvgImg(x: number, y: number, bmp: Bitmap) {
    let el = bitmapToSvgEl(bmp)
    el.setAttribute("x", `${x}`)
    el.setAttribute("y", `${y}`)
    const w = 32
    el.setAttribute("width", `${w}px`)
    el.setAttribute("height", `${w}px`)
    return el
}

const moddableImages: { [k: string]: string } = {
    "character": `
        . . . . . . . . . . . .
        . . . 1 1 . 1 1 . . . .
        . . . 1 3 . 1 3 . . . .
        . . . . 1 3 . 1 3 . . .
        . . . . 1 3 . 1 3 . . .
        . . . 1 1 1 1 1 1 . . .
        . . 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 f 1 1 f 1 . .
        . . 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 1 f f 1 1 . .
        . . . 1 1 1 1 1 1 . . .
        . 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 .
        . . . . 1 1 1 1 . . . .
        . . . . 1 1 1 1 . . . .
        . . . . 1 1 1 1 . . . .
        . . . . 1 1 1 1 . . . .
        . . . . . 1 1 . . . . .
        . . . . . . 1 . . . . .
        . . . . . . . . . . . .
        . . . . . . . . . . . .
    `,
    "obstacle1": `
        . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 7 . . . . . . . . . . .
        . . . . . . . . . . 7 7 . . . . . . . . . .
        . . . . . . . . . 6 7 7 . . . . . . . . . .
        . . . . . . . . 6 6 7 7 7 . . . . . . . . .
        . . . . . . . . 6 6 7 7 7 . . . . . . . . .
        . . . . . . . . 6 6 7 7 7 7 . . . . . . . .
        . . . . . . . 6 6 7 7 7 7 7 . . . . . . . .
        . . . . . . 6 6 6 7 7 7 7 7 . . . . . . . .
        . . . . . . . . 6 6 6 6 6 . . . . . . . . .
        . . . . . . . . 6 6 6 6 . . . . . . . . . .
        . . . . . . . 6 6 6 6 6 7 7 . . . . . . . .
        . . . . . . 6 6 6 7 7 7 7 7 7 . . . . . . .
        . . . . . . 6 6 6 7 7 7 7 7 7 7 . . . . . .
        . . . . . . 6 6 7 7 7 7 7 7 7 7 7 . . . . .
        . . 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 . . .
        . . . 6 6 6 6 6 7 7 7 7 7 6 6 6 6 6 . . . .
        . . . . . . . . 6 6 6 6 7 7 . . . . . . . .
        . . . . . . . . 6 6 6 7 7 7 . . . . . . . .
        . . . . . . 6 6 7 7 7 7 7 7 7 . . . . . . .
        . . . 6 6 6 7 7 7 7 7 7 7 7 7 7 7 . . . . .
        6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . .
        6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6
        . . . 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 6 .
        . . . . . 6 6 6 6 e e e e 7 7 7 7 7 6 6 6 .
        . . . . . . . . . e e e e . . . . . . . . .
        . . . . . . . . . e e e e . . . . . . . . .
        . . . . . . . . . e e e e . . . . . . . . .
        . . . . . . . 6 . e e e e . . 6 . . . . . .
        . . . 6 6 6 . . . e e e e . 6 . . . . . . .
        . . . 6 . 6 . . . e e e e . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . .
   `,
    "obstacle2": `
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . e e e e e . . . . .
        . . . . e e b b b e e . . . .
        . . . e e b e e e b e e . . .
        . . . e e b e e b b e e . . .
        . . . . e e b b e e e . . . .
        . . . e b e e e e b b e . . .
        . . . e e b b b b e e e . . e
        . . . e e e e e e e e . . e .
        . . . e b e e b e b e . e . e
        . . . e b e e e e b e e . . .
        . . . e e e b e e e e . . . .
        . . e e b e b e b e e e . . .
        . e e e e e e e e e e e e . .
        . . . . . . e e . . . . . . .
   `
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
        // htmlEl.setAttribute("style", `font-size: ${scale}px`)

        this.spriteEditor = new SpriteEditor(state, null, false, scale);
        this.spriteEditor.render(this.spriteEditorHolder);
        // HACK: scaling
        header.setAttribute("style", `transform: scale(${scale})`);
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

    async renderTopBar() {
        //
        // TOP SPRITE PICKER BAR
        //
        let topBarHolder = this.refs["sprite-picker"] as HTMLDivElement
        let topBarSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")// as unknown as SVGSVGElement;
        // topBarSvg.setAttribute("width", `500px`)
        // topBarSvg.setAttribute("height", `100px`)
        let tabEl = document.createElementNS("http://www.w3.org/2000/svg", "path")// as unknown as SVGPathElement
        const R = 10
        const ICON_H = 64
        const ICON_W = 64
        const TAB_MARGIN = 20
        const SVG_W = 541
        const SVG_H = R * 2 + ICON_H + TAB_MARGIN * 2
        const IMG_SPACE = R * 2 + ICON_W
        const TOTAL_IMG_SPACE = IMG_SPACE * Object.keys(moddableImages).length
        const LEFT_SPACE = (SVG_W - TOTAL_IMG_SPACE) / 2
        topBarSvg.setAttribute('viewBox', `0 0 ${SVG_W} ${SVG_H}`)
        let tabStart = LEFT_SPACE - R
        const TOTAL_TAB_W = R * 4 + ICON_W
        let tabFinish = SVG_W - (tabStart + TOTAL_TAB_W)
        let tabPath = `M 0,${SVG_H - TAB_MARGIN} h ${tabStart} q ${R},0 ${R},-${R} v -${ICON_H} q 0,-${R} ${R},-${R} h ${ICON_W} q ${R},0 ${R},${R} v ${ICON_H} q 0,${R} ${R},${R} h ${tabFinish}`
        tabEl.setAttribute("d", tabPath)
        topBarSvg.appendChild(tabEl)
        let body = document.getElementsByTagName("body")[0]
        topBarHolder.appendChild(topBarSvg)

        let dummyImg = createPngImg(R, TAB_MARGIN + R, ICON_W, ICON_W)
        topBarSvg.appendChild(dummyImg)
        setInterval(() => {
            updatePngImg(dummyImg, this.spriteEditor.bitmap().image)
        }, 500)

        function getImages(ts: string) {
            let imgRegex = /img`([\d\s\.a-f]*)`/gm
            let match = imgRegex.exec(ts);
            let res: string[] = []
            while (match != null) {
                res.push(match[1])
                match = imgRegex.exec(ts);
            }
            return res
        }

        let mainTs = await getTxtFile("/games/bunny_hop/main.ts")
        // TODO: find images
        let imgs = getImages(mainTs)
        // console.dir(imgs)

        let imgsAsBmps = imgs.map(textToBitmap)
        // console.dir(imgsAsBmps)

        let targetImgs = Object.keys(moddableImages)
            .map(k => moddableImages[k])
            .map(textToBitmap)

        targetImgs.forEach(b => console.log(`(${b.width},${b.height})`));

        imgsAsBmps
            .filter(i1 => targetImgs.some(i2 => i1.equals(i2)))
            .forEach((img, i) => {
                let x = tabStart + R + R + i * IMG_SPACE
                let y = TAB_MARGIN + R
                // let imgSvg = createSvgImg(x, y, img)
                let imgSvg = createPngImg(x, y, ICON_W, ICON_W, img)
                topBarSvg.appendChild(imgSvg)
            })
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

    async onPlay() {
        // const newSpriteState = bitmapToImageLiteral(.image);
        // let newHexString =
        const gameBinJs = await getTxtFile("/games/bunny_hop/bin.js");
        const newHexImg = bitmapToBinHex(this.spriteEditor.bitmap().image)
        let oldImageBin = "87040c0015000000000000000000000000000000000000000010010000000000000000111110010000000000100110111111010000000000101311111111111101000000003013f1111111111100000010011011f11111111101000010131111f111111101000000003013f11111010000000000000000111110010000000000000000000010010000000000000000000000000000000000"
        console.log(oldImageBin)
        console.log("==>")
        console.log(newHexImg)

        const newGameBinJs = gameBinJs.replace(oldImageBin, newHexImg)

        this.props.playHandler(newGameBinJs)
    }
}

export default GameModder;
