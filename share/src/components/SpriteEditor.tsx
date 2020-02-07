import React from 'react';
import { Bitmap } from '../sprite-editor/bitmap';
import * as SE from '../sprite-editor/spriteEditor'
import { SpriteEditor } from '../sprite-editor/spriteEditor';
import SpriteGallery, { SpriteGalleryProps } from './SpriteGallery';
import { TOOLBAR_WIDTH, TOOLBAR_HEIGHT } from '../sprite-editor/sidebar';

interface SpriteEditorProps {
    onPlay: () => void;
    scale: number;
    startImage: Bitmap;
    galleryProps: SpriteGalleryProps;
}
interface SpriteEditorState {
}

export class SpriteEditorComp extends React.Component<SpriteEditorProps, SpriteEditorState>
{
    protected spriteEditorHolder: HTMLDivElement | undefined;
    public editor: SpriteEditor | undefined;

    constructor(props: SpriteEditorProps) {
        super(props);

        this.state = {
        }

    }

    componentDidMount() {
        this.spriteEditorHolder = this.refs['sprite-editor-holder'] as HTMLDivElement;
        this.renderSpriteEditor()
    }
    componentWillUnmount() {
        this.removeSpriteEditor();
        this.spriteEditorHolder = undefined;
    }
    componentDidUpdate() {
        this.editor.logEvents();
        this.editor.cleanupInterval();
        this.removeSpriteEditor()
        this.renderSpriteEditor()
    }

    // resize() {
    //     this.spriteEditorHolder.style.transform = `scale(${this.props.scale})`;
    // }

    removeSpriteEditor() {
        let toRemove: Element[] = []
        for (let r of this.spriteEditorHolder.children)
            toRemove.push(r)
        toRemove
            .filter(r => r.className !== "sprite-gallery")
            .forEach(r =>
                this.spriteEditorHolder.removeChild(r));
        this.editor = null
    }

    renderSpriteEditor() {
        let currImg = this.props.startImage
        let spriteEditor = this.editor = new SpriteEditor(currImg, null, false, this.props.scale);
        spriteEditor.render(this.spriteEditorHolder);
        let controls = document.getElementsByClassName("sprite-canvas-controls")[0]
        controls.setAttribute("viewBox", `${0} ${0} ${TOOLBAR_WIDTH} ${TOOLBAR_HEIGHT}`)

        spriteEditor.rePaint();
        spriteEditor.setActiveColor(1, true);
        spriteEditor.setSizePresets([
            [8, 8],
            [16, 16],
            [32, 32],
            [10, 8]
        ]);

        this.spriteEditorHolder.className = ' sprite-editor-container sprite-editor-dropdown-bg sprite-editor-dropdown';
        spriteEditor.addKeyListeners();
        spriteEditor.onClose(() => {
            this.props.onPlay()
        });
    }

    render() {
        let gp = this.props.galleryProps
        return (
            <div ref="sprite-editor-holder">
                <SpriteGallery options={gp.options} onClick={gp.onClick} height={gp.height} >

                </SpriteGallery>
            </div>
        );
    }
}

export default SpriteEditor;
