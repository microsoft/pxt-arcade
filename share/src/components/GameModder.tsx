import React from 'react';
import { SpriteEditor } from '../sprite-editor/spriteEditor'
import * as SE from '../sprite-editor/spriteEditor'
import TabBar from './TabBar'

import '../css/GameModder.css';
import '../css/icons.css';
import '../css/SpriteEditor.css';
import { imageLiteralToBitmap, Bitmap } from '../sprite-editor/bitmap';
import { textToBitmap, createPngImg, updatePngImg, bitmapToBinHex } from '../bitmap_helpers';
// import { bunnyHopBinJs } from '../../public/games/bunny_hop/bunny_hop_min.js.js';

export interface GameModderProps {
    playHandler: (binJs: string) => void
}

export interface UserImage {
    data: Bitmap,
    name: string,
    callToAction: string,
}
export interface GameModderState {
    userImages: UserImage[]
    currentImg: number,
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
   `
}
const CALL_TO_ACTION: { [k: string]: string } = {
    "character": "Draw your character!",
    "obstacle1": "Draw an obstacle!",
    "obstacle2": "Draw another obstacle!"
}

export class GameModder extends React.Component<GameModderProps, GameModderState> {
    protected playBtn: HTMLButtonElement | undefined;
    protected spriteEditorHolder: HTMLDivElement | undefined;
    protected spriteEditor: SpriteEditor;
    private tabImages: Bitmap[];

    constructor(props: GameModderProps) {
        super(props);

        const mkBlank = () => imageLiteralToBitmap('', DEFAULT_SPRITE_STATE);
        let imgs = Object.keys(moddableImages)
            .map((name) => {
                return {
                    data: mkBlank(),
                    name: name,
                    callToAction: CALL_TO_ACTION[name]
                } as UserImage;
            })

        this.state = {
            userImages: imgs,
            currentImg: 0
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
        this.spriteEditorHolder.className = 'sprite-editor-container sprite-editor-dropdown-bg sprite-editor-dropdown';
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

        let mainTs = await getTxtFile("/games/bunny_hop/main.ts")
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
            return {
                data: nw,
                name: old.name,
                callToAction: old.callToAction
            }
        }
        this.setState({
            userImages: this.state.userImages.map((m, i) =>
                i === this.state.currentImg
                    ? updateUserImage(m, this.spriteEditor.bitmap().image) //.copy()
                    : m)
        })
        console.log('save')
        console.dir(this.state.userImages)
    }
    load(idx: number) {
        console.log(`load: ${idx}`)
        let currImg = this.state.userImages[idx].data
        console.dir(currImg)
        this.spriteEditor.bitmap().image = currImg // .copy()
        this.spriteEditor.rePaint()
    }

    onTabChange(idx: number) {
        console.log(`TAB: ${idx}`)
        this.save()
        this.setState({ currentImg: idx })
        this.load(idx)
    }

    render() {
        let currImg = this.state.userImages[this.state.currentImg]
        return (
            <div className="game-modder">
                <h1 ref="header">{currImg.callToAction}</h1>
                <TabBar ref="tab-bar" tabImages={this.tabImages} tabChange={this.onTabChange.bind(this)} />
                <div ref="sprite-editor-holder" className="sprite-editor-holder">
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
    }

    componentWillUnmount() {
        this.playBtn = undefined;
        this.spriteEditorHolder = undefined;
    }

    async onPlay() {
        this.save()
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
