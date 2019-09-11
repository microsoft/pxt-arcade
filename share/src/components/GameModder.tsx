import React from 'react';
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
import { SpriteEditorComp } from './SpriteEditor';
import * as SE from '../sprite-editor/spriteEditor'
import SpriteGallery from './SpriteGallery';
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
    currentBackground: number,
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
    . . . d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d . . .
    . . d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d . .
    . d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d .
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d b b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d b b b d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d b b b b d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d b b b b b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d b b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d b b b b d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d b b b b d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d b b b b b d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d b b b b b b b d d d d d d d d d d d d d
    d d d d d d d d d d d d d d b b b b b b b b b b d d d d d d d d d d d d
    d d d d d d d d d d d d b b b b d d b b b b b b b d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d b b b b d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d b b b b d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d b b b b b b d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d b b b b b b d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d b b b b b b b b d d d d d d d d d d d d d
    d d d d d d d d d d d d b b b b b b b b b b b b b d d d d d d d d d d d
    d d d d d d d d b b b b b b b b b b b b b b b b b b b b d d d d d d d d
    d d d d d d d d d d d b b b b b b b b b b b b b b b b d d d d d d d d d
    d d d d d d d d d d d d d d d d b b b b b b b d b d d d d d d d d d d d
    d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b d d d d d d
    d d d d d d d d d d d b b b b b b b b b b b b b b b b b b d d d d d d d
    d d d d d d d d b b b b b b b b b b b b b b b b b b b d d d d d d d d d
    d d d d d d d d d d b b b b b d d d b b b b d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d b b b d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d b d b d d d d d d d d d d d d d d d
    . d d d d d d d d d d d d d d d d d b d b d d d d d d d d d d d d d d .
    . . d d d d d d d d d d d d d d d d b b b d d d d d d d d d d d d d . .
    . . . d d d d d d d d d d d d d d d b b b d d d d d d d d d d d d . . .
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
    protected spriteEditor: SpriteEditorComp;
    protected header: HTMLHeadingElement | undefined;
    private tabImages: Bitmap[];
    private scale: number = 1.0;

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
                currentImg: 0,
                currentBackground: 12
            }
            Object.assign(gameModderState, this.state)
        }

        this.tabImages = Object.keys(moddableImages)
            .map(k => moddableImages[k])
            .map(textToBitmap)
    }


    // async renderExperiments() {
    //     let tabBar = this.refs["tab-bar"] as TabBar
    //     let dummyImg = createPngImg(20, 20, 64, 64)
    //     tabBar.TabBarSvg.appendChild(dummyImg)
    //     setInterval(() => {
    //         updatePngImg(dummyImg, this.spriteEditor.bitmap().image)
    //     }, 500)

    //     function getImages(ts: string) {
    //         let imgRegex = /img`([\d\s\.a-f]*)`/gm
    //         let match = imgRegex.exec(ts);
    //         let res: string[] = []
    //         while (match != null) {
    //             res.push(match[1])
    //             match = imgRegex.exec(ts);
    //         }
    //         return res
    //     }

    //     // HACK:
    //     let mainTs = bunny_hop_main_ts;
    //     // let mainTs = await getTxtFile("games/bunny_hop/main.ts")

    //     // TODO: find images
    //     let imgs = getImages(mainTs)
    //     // console.dir(imgs)

    //     let imgsAsBmps = imgs.map(textToBitmap)
    //     // console.dir(imgsAsBmps)
    // }

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
        if (this.spriteEditor) {
            let newState = {
                userImages: this.state.userImages.map((m, i) =>
                    i === this.state.currentImg
                        ? updateUserImage(m, this.spriteEditor.editor.bitmap().image) //.copy()
                        : m)
            }
            this.setState(newState)
            Object.assign(gameModderState, newState)
        }
    }
    load(idx: number) {
        let currImg = this.state.userImages[idx].data
        if (this.spriteEditor) {
            this.spriteEditor.editor.bitmap().image = currImg
            this.spriteEditor.editor.rePaint()
        }
    }

    onTabChange(idx: number) {
        this.save()
        this.setState({ currentImg: idx })
        if (IsGameModderState(gameModderState))
            gameModderState.currentImg = idx
        this.load(idx)
        tickEvent("shareExperiment.mod.tabChange");
    }

    onBackgroundColorChanged(idx: number) {
        this.setState({ currentBackground: idx })
        if (IsGameModderState(gameModderState))
            gameModderState.currentBackground = idx
    }

    render() {
        let currImg = this.state.userImages[this.state.currentImg]
        let isBackgroundTab = this.state.currentImg === 3

        let body = document.getElementsByTagName('body')[0]
        // const MARGIN = 20
        const HEADER_HEIGHT = 50
        let actualWidth = body.clientWidth
        let actualHeight = body.clientHeight - HEADER_HEIGHT
        let refWidth = 539.0
        let refHeight = SE.TOTAL_HEIGHT
        let wScale = actualWidth / refWidth
        let hScale = actualHeight / refHeight
        this.scale = Math.min(wScale, hScale)

        const SPRITE_GALLERY_HEIGHT = 100
        let spriteGalleryHeight = SPRITE_GALLERY_HEIGHT * this.scale
        let colorPickerHeight = (SE.TOTAL_HEIGHT + SPRITE_GALLERY_HEIGHT) * this.scale

        // TODO
        let spriteGalleryOptions =
            Object.keys(moddableImages)
                .map(k => moddableImages[k])
                .map(i => imageLiteralToBitmap(i))

        return (
            <div className="game-modder">
                <h1 ref="header">{currImg.callToAction}</h1>
                <TabBar ref="tab-bar" tabImages={this.tabImages}
                    tabChange={this.onTabChange.bind(this)} startTab={this.state.currentImg} />
                {isBackgroundTab
                    ?
                    <ColorPicker selectionChanged={this.onBackgroundColorChanged.bind(this)}
                        selected={this.state.currentBackground} colors={SE.COLORS}
                        height={colorPickerHeight}></ColorPicker>
                    :
                    [
                        <SpriteEditorComp ref="sprite-editor" startImage={this.state.userImages[this.state.currentImg].data}
                            onPlay={this.onPlay} scale={this.scale}></SpriteEditorComp>,
                        <SpriteGallery height={spriteGalleryHeight}
                            options={spriteGalleryOptions}
                        ></SpriteGallery>
                    ]}
                {/* <div ref="sprite-gallery" className="sprite-gallery">
                </div> */}
                <button ref="play-btn" className="play-btn">Play!</button>
            </div>
        )
    }

    async componentDidMount() {
        this.playBtn = this.refs["play-btn"] as HTMLButtonElement;
        this.spriteEditor = this.refs["sprite-editor"] as SpriteEditorComp;
        this.header = this.refs['header'] as HTMLHeadingElement

        // events
        this.playBtn.addEventListener('click', this.onPlay.bind(this))

        // TODO(dz):
        // await this.renderGallery();
        // await this.renderExperiments();

        // HACK: scaling
        this.header.setAttribute("style", `transform: scale(${this.scale})`);

        // HACK: Disable scrolling in iOS
        document.ontouchmove = function (e) {
            e.preventDefault();
        }
    }

    componentWillUnmount() {
        this.playBtn = undefined;
        this.spriteEditor = undefined;
    }

    async onPlay() {
        this.save()

        function modBackground(bin: string, newColor: number): string {
            const originalColor = 13
            const template = (color: number) => `scene_setBackgroundColor__P12360_mk(s);s.tmp_0.arg0=${color}`
            let old = template(originalColor)
            let newIdx = newColor + 1 // arcade function is 1-based b/c 0 is transparent
            let nw = template(newIdx)
            return bin.replace(old, nw)
        }

        function modImg(bin: string, img: UserImage): string {
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
            if (oldStartIncl < 0)
                return bin;
            let oldEndExcl = bin.indexOf(`"`, oldStartIncl)
            let oldHex = bin.slice(oldStartIncl, oldEndExcl)

            return bin.replace(oldHex, newHex)
        }

        // HACK:
        let gameBinJs = bunny_hop_bin_js;
        for (let i of this.state.userImages) {
            gameBinJs = modImg(gameBinJs, i)
        }
        gameBinJs = modBackground(gameBinJs, this.state.currentBackground)

        this.props.playHandler(gameBinJs)
    }
}

export default GameModder;
