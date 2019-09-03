import React from 'react';
import { SpriteEditor } from '../sprite-editor/spriteEditor'

import '../css/GameModder.css';
import '../css/SpriteEditor.css';
import { imageLiteralToBitmap } from '../sprite-editor/bitmap';

export interface GameModderProps {
    playHandler: () => void
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

const SPRITE_EDITOR_ASPECT_RATIO = 539.0 / 500.0;

export class GameModder extends React.Component<GameModderProps, GameModderState> {
    protected playBtn: HTMLButtonElement | undefined;
    protected spriteEditorHolder: HTMLDivElement | undefined;

    constructor(props: GameModderProps) {
        super(props);
        this.state = {
        }
    }

    renderSpriteEditor() {
        if (!this.spriteEditorHolder)
            return;

        let scale = 1.5; // TODO: compute from client width/height

        // const { value } = this.props;
        // const stateSprite = value && this.stripImageLiteralTags(value)
        const state = imageLiteralToBitmap('', DEFAULT_SPRITE_STATE);

        let body = document.getElementsByTagName('body')[0]
        let actualWidth = body.clientWidth
        let actualHeight = body.clientHeight
        // let width = 
        // 
        let spriteEditor = new SpriteEditor(state, null, false, scale);
        spriteEditor.render(this.spriteEditorHolder);
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

        spriteEditor.rePaint();
        spriteEditor.setActiveColor(1, true);
        spriteEditor.setSizePresets([
            [8, 8],
            [16, 16],
            [32, 32],
            [10, 8]
        ]);

        this.spriteEditorHolder.style.height = (spriteEditor.outerHeight() + 3) + "px";
        this.spriteEditorHolder.style.width = (spriteEditor.outerWidth() + 3) + "px";
        this.spriteEditorHolder.style.overflow = "hidden";
        this.spriteEditorHolder.className = 'sprite-editor-container sprite-editor-dropdown-bg sprite-editor-dropdown';
        spriteEditor.addKeyListeners();
        spriteEditor.onClose(() => {
            console.log("Closing sprite editor!")
            this.props.playHandler()
            // const newSpriteState = pxtsprite
            //     .bitmapToImageLiteral(spriteEditor.bitmap().image);
            // this.setState({
            //     open: false,
            // });
            // spriteEditor.removeKeyListeners();
            // this.props.onChange(newSpriteState);
            // spriteEditor = undefined;
        });


    }

    render() {
        return (
            <div className="game-modder">
                <div className="grid">
                    <div className="questions">
                        {/* <h1>Mod your game!</h1>
                        <p>Fill in the questions to create your very own game.</p> */}
                        <h1>Draw your hero!</h1>
                        {/* <input placeholder="purple dragon">
                        </input>
                        <button ref="play-btn">
                            Play
                        </button>
                        <button ref="play-btn2">
                            Play2
                        </button> */}
                        <div ref="sprite-editor-holder">

                        </div>
                    </div>
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
}

export default GameModder;
