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

        // const { value } = this.props;
        // const stateSprite = value && this.stripImageLiteralTags(value)
        const state = imageLiteralToBitmap('', DEFAULT_SPRITE_STATE);

        let spriteEditor = new SpriteEditor(state, null, false);
        spriteEditor.render(this.spriteEditorHolder);
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
                        <h1>Mod your game!</h1>
                        <p>Fill in the questions to create your very own game.</p>
                        <h2>Name your hero:</h2>
                        <input placeholder="purple dragon">
                        </input>
                        <button ref="play-btn">
                            Play
                        </button>
                        <button ref="play-btn2">
                            Play2
                        </button>
                        <div ref="sprite-editor-holder">

                        </div>
                        <p>(Sprite Editor here)</p>
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
        this.playBtn.addEventListener('click', that.props.playHandler)

        // TODO(dz):
        this.renderSpriteEditor()
    }

    componentWillUnmount() {
        this.playBtn = undefined;
        this.spriteEditorHolder = undefined;
    }
}

export default GameModder;