import React from 'react';
import { Bitmap } from '../sprite-editor/bitmap';
import * as SE from '../sprite-editor/spriteEditor'
import { SpriteEditor } from '../sprite-editor/spriteEditor';

interface SpriteEditorProps {
    onPlay: () => void;
    scale: number;
    startImage: Bitmap;
}
interface SpriteEditorState {
    image: Bitmap
}

export class SpriteEditorComp extends React.Component<SpriteEditorProps, SpriteEditorState>
{
    protected spriteEditorHolder: HTMLDivElement | undefined;
    public editor: SpriteEditor | undefined;

    constructor(props: SpriteEditorProps) {
        super(props);

        this.state = {
            image: this.props.startImage
        }

    }

    componentDidMount() {
        this.spriteEditorHolder = this.refs['sprite-editor-holder'] as HTMLDivElement;
        this.renderSpriteEditor()
    }
    componentWillUnmount() {
        this.spriteEditorHolder = undefined;
    }

    renderSpriteEditor() {
        if (!this.spriteEditorHolder)
            return;

        // const { value } = this.props;
        // const stateSprite = value && this.stripImageLiteralTags(value)

        console.log(`Sprite editor scale: ${this.props.scale}`)
        let htmlEl = document.getElementsByTagName('html')[0]
        // htmlEl.setAttribute("style", `font-size: ${scale}px`)

        let currImg = this.state.image
        let spriteEditor = this.editor = new SpriteEditor(currImg, null, false, this.props.scale);
        spriteEditor.render(this.spriteEditorHolder);
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
            let newW = (oldW - fudge) / this.props.scale
            let newH = (oldH - fudge) / this.props.scale
            c.setAttribute("viewBox", `${fudge} ${fudge} ${newW} ${newH}`)
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

        this.spriteEditorHolder.style.height = (spriteEditor.outerHeight()) + "px";
        this.spriteEditorHolder.style.width = (spriteEditor.outerWidth()) + "px";
        this.spriteEditorHolder.style.overflow = "hidden";
        this.spriteEditorHolder.className += ' sprite-editor-container sprite-editor-dropdown-bg sprite-editor-dropdown';
        spriteEditor.addKeyListeners();
        spriteEditor.onClose(() => {
            console.log("Closing sprite editor!")
            this.props.onPlay()
        });
    }

    render() {
        return (
            <div ref="sprite-editor-holder">
            </div>
        );
    }
}

export default SpriteEditor;
