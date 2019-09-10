import React from 'react';
import { SpriteEditor } from '../sprite-editor/spriteEditor'
import * as SE from '../sprite-editor/spriteEditor'
import TabBar from './TabBar'
import ColorPicker from './ColorPicker'

import '../css/GameModder.css';
import '../css/icons.css';
import '../css/SpriteEditor.css';
import { imageLiteralToBitmap, Bitmap } from '../sprite-editor/bitmap';
import { textToBitmap, createPngImg, updatePngImg, bitmapToBinHex, textToBinHex } from '../bitmap_helpers';
import { tickEvent } from '../telemetry/appinsights';
import { bunny_hop_bin_js } from '../games/bunny_hop/bin.js';
import { bunny_hop_main_ts } from '../games/bunny_hop/main.ts';
import { gameModderState } from '../App';
// import { bunnyHopBinJs } from '../../public/games/bunny_hop/bunny_hop_min.js.js';

export interface GameModderProps {
    playHandler: (binJs: string) => void;
    changeMode: (mode: "play" | "share" | "mod") => void;
}

export interface UserImage {
    default: Bitmap,
    data: Bitmap,
    name: string,
    callToAction: string,
}
export interface GameModderState {
    userImages: UserImage[]
    currentImg: number,
}
function IsGameModderState(s: any): s is GameModderState {
    return !!(s as GameModderState).userImages
}

function CreateEmptyImageText(w: number, h: number) {
    let res = "\n"
    for (let i = 0; i < h; i++)
        res += ".".repeat(w) + "\n"
    return res
}
function GetImageTextDimensions(s: string): { w: number, h: number } {
    s = s.trim()
    let lns = s.split("\n")
    let ln1 = lns[0].replace(/\s/g, "")
    return {
        w: ln1.length,
        h: lns.length
    }
}

// TODO: either we need binHexToBitmap or we need the original source code

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
   `,
    "background": `
   . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . .
   . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . .
   . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . .
   . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
   . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . .
   . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
   . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
   . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
   . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
   . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
   . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
   `
}
const CALL_TO_ACTION: { [k: string]: string } = {
    "character": "Draw your character!",
    "obstacle1": "Draw an obstacle!",
    "obstacle2": "Draw another obstacle!",
    "background": "Choose your background!"
}
// TODO:
// 15x32 stump
// 22x32 tree

export class GameModder extends React.Component<GameModderProps, GameModderState> {
    protected playBtn: HTMLButtonElement | undefined;
    protected spriteEditorHolder: HTMLDivElement | undefined;
    protected spriteEditor: SpriteEditor;
    private tabImages: Bitmap[];

    constructor(props: GameModderProps) {
        super(props);

        if (IsGameModderState(gameModderState)) {
            // Loading previous modder state
            this.state = gameModderState
        } else {
            // Creating new modder state
            let imgs = Object.keys(moddableImages)
                .map((name) => {
                    let def = moddableImages[name]
                    // TODO: match the original dimensions? One difficulty with this
                    // is the sprite editor canvas can't handle this
                    // let { w, h } = GetImageTextDimensions(moddableImages[name])
                    let [w, h] = [16, 16]
                    let blank = CreateEmptyImageText(w, h);
                    return {
                        data: imageLiteralToBitmap(blank),
                        name: name,
                        callToAction: CALL_TO_ACTION[name],
                        default: textToBitmap(def)
                    };
                })

            this.state = {
                userImages: imgs,
                currentImg: 0
            }
            Object.assign(gameModderState, this.state)
        }

        this.tabImages = Object.keys(moddableImages)
            .map(k => moddableImages[k])
            .map(textToBitmap)
    }

    renderSpriteEditor() {
        if (!this.spriteEditorHolder)
            return;

        // const { value } = this.props;
        // const stateSprite = value && this.stripImageLiteralTags(value)

        let body = document.getElementsByTagName('body')[0]
        let header = this.refs['header'] as HTMLDivElement
        // const MARGIN = 20
        const MARGIN = 0
        let actualWidth = body.clientWidth - MARGIN
        let actualHeight = body.clientHeight - header.clientHeight - MARGIN
        let refWidth = 539.0
        let refHeight = SE.TOTAL_HEIGHT
        let wScale = actualWidth / refWidth
        let hScale = actualHeight / refHeight
        let scale = Math.min(wScale, hScale)
        console.log(`Sprite editor scale: ${scale}`)
        let htmlEl = document.getElementsByTagName('html')[0]
        // htmlEl.setAttribute("style", `font-size: ${scale}px`)

        let currImg = this.state.userImages[this.state.currentImg].data
        this.spriteEditor = new SpriteEditor(currImg, null, false, scale);
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
        this.spriteEditorHolder.className += ' sprite-editor-container sprite-editor-dropdown-bg sprite-editor-dropdown';
        this.spriteEditor.addKeyListeners();
        this.spriteEditor.onClose(() => {
            console.log("Closing sprite editor!")
            this.onPlay()
        });
    }

    async renderExperiments() {
        let tabBar = this.refs["tab-bar"] as TabBar
        let dummyImg = createPngImg(20, 20, 64, 64)
        tabBar.TabBarSvg.appendChild(dummyImg)
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

        // HACK:
        let mainTs = bunny_hop_main_ts;
        // let mainTs = await getTxtFile("games/bunny_hop/main.ts")

        // TODO: find images
        let imgs = getImages(mainTs)
        // console.dir(imgs)

        let imgsAsBmps = imgs.map(textToBitmap)
        // console.dir(imgsAsBmps)
    }

    async renderGallery() {
        // TODO: move to seperate component
        const SVG_W = 541
        const OUT = 40
        const GAL_MARGIN_B = 50
        const GAL_SVG_H = 10 + GAL_MARGIN_B
        // const GAL_MARGIN_B = 20
        // const GAL_SVG_H = 40
        let galleryHolder = this.refs["sprite-gallery"] as HTMLDivElement
        let gallerySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")// as unknown as SVGSVGElement;
        let galleryEnd = document.createElementNS("http://www.w3.org/2000/svg", "path")
        let galleryEndPath = `M -${OUT},-${OUT} l 0,${OUT} l 0,${GAL_SVG_H - GAL_MARGIN_B} l ${OUT},0 h ${SVG_W} l ${OUT},0 l 0,-${GAL_SVG_H - GAL_MARGIN_B} l 0,-${OUT} z`
        galleryEnd.setAttribute("d", galleryEndPath)
        gallerySvg.setAttribute('viewBox', `0 0 ${SVG_W} ${GAL_SVG_H}`)
        gallerySvg.appendChild(galleryEnd)
        galleryHolder.appendChild(gallerySvg)
    }

    save() {
        function updateUserImage(old: UserImage, nw: Bitmap): UserImage {
            tickEvent("shareExperiment.mod.image");
            return {
                data: nw,
                name: old.name,
                callToAction: old.callToAction,
                default: old.default
            }
        }
        let newState = {
            userImages: this.state.userImages.map((m, i) =>
                i === this.state.currentImg
                    ? updateUserImage(m, this.spriteEditor.bitmap().image) //.copy()
                    : m)
        }
        this.setState(newState)
        Object.assign(gameModderState, newState)
    }
    load(idx: number) {
        let currImg = this.state.userImages[idx].data
        this.spriteEditor.bitmap().image = currImg
        this.spriteEditor.rePaint()
    }

    onTabChange(idx: number) {
        this.save()
        this.setState({ currentImg: idx })
        if (IsGameModderState(gameModderState))
            gameModderState.currentImg = idx
        this.load(idx)
        tickEvent("shareExperiment.mod.tabChange");
    }

    render() {
        let currImg = this.state.userImages[this.state.currentImg]
        let isBackgroundTab = this.state.currentImg === 3
        let spriteEditorClass = "sprite-editor-holder"
        if (isBackgroundTab)
            spriteEditorClass += ` hidden`
        return (
            <div className="game-modder">
                <h1 ref="header">{currImg.callToAction}</h1>
                <TabBar ref="tab-bar" tabImages={this.tabImages}
                    tabChange={this.onTabChange.bind(this)} startTab={this.state.currentImg} />
                {isBackgroundTab ? <ColorPicker></ColorPicker> : <></>}
                <div ref="sprite-editor-holder">
                </div>
                <div ref="sprite-gallery" className="sprite-gallery">
                </div>
                <button ref="play-btn">Play!</button>
            </div>
        )
    }

    async componentDidMount() {
        this.playBtn = this.refs["play-btn"] as HTMLButtonElement;
        this.spriteEditorHolder = this.refs['sprite-editor-holder'] as HTMLDivElement;

        // events
        this.playBtn.addEventListener('click', this.onPlay.bind(this))

        // TODO(dz):
        this.renderSpriteEditor()
        await this.renderGallery();
        // await this.renderExperiments();

        // HACK: Disable scrolling in iOS
        document.ontouchmove = function (e) {
            e.preventDefault();
        }
    }

    componentWillUnmount() {
        this.playBtn = undefined;
        this.spriteEditorHolder = undefined;
    }

    async onPlay() {
        this.save()

        function modImg(bin: string, img: UserImage) {
            // HACK: for some reason the compiler emits image prefixes that look like:
            // 8704100010000000
            // whereas ours look like:
            // e4101000
            const MOD_PREFIX_LEN = "e4101000".length
            const BIN_PREFIX_LEN = "8704100010000000".length

            let newHex = bitmapToBinHex(img.data)
            let newIsBlank = newHex.slice(MOD_PREFIX_LEN).replace(/0/g, "").length == 0
            if (newIsBlank)
                newHex = bitmapToBinHex(img.default)

            const oldToFind = bitmapToBinHex(img.default)
                .slice(MOD_PREFIX_LEN)
            let oldStartIncl = bin.indexOf(oldToFind) - BIN_PREFIX_LEN
            let oldEndExcl = bin.indexOf(`"`, oldStartIncl)
            let oldHex = bin.slice(oldStartIncl, oldEndExcl)

            return bin.replace(oldHex, newHex)
        }

        // HACK:
        let gameBinJs = bunny_hop_bin_js;
        for (let i of this.state.userImages) {
            gameBinJs = modImg(gameBinJs, i)
        }

        this.props.playHandler(gameBinJs)
    }
}

export default GameModder;
