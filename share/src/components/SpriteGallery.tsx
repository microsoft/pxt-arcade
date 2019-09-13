import React, { CSSProperties } from 'react';

import '../css/SpriteGallery.css';
import { Bitmap } from '../sprite-editor/bitmap';
import { bitmapToUrl } from '../bitmap_helpers';

export interface SpriteGalleryProps {
    height: number,
    options: Bitmap[],
    onClick: (b: Bitmap, idx?: number) => void,
}
interface SpriteGalleryState {
}

interface ItemProps {
    onClick: () => void,
    img: Bitmap
}
const Item: React.FC<ItemProps> = (props: ItemProps) => {
    let style: CSSProperties = {
        backgroundColor: "blue"
    }
    let classes = `item`
    let data = bitmapToUrl(props.img)
    return (
        <div className={classes} style={style} onClick={props.onClick}>
            <img src={data}>
            </img>
        </div>
    );
}
export class SpriteGallery extends React.Component<SpriteGalleryProps, SpriteGalleryState>
{
    private spriteGallery: HTMLDivElement | undefined;

    constructor(props: SpriteGalleryProps) {
        super(props);

        this.state = {
        }

    }

    componentDidMount() {
        this.spriteGallery = this.refs["sprite-gallery"] as HTMLDivElement

        // this.spriteGallery.setAttribute("style", `height:${this.props.height}px`)
    }
    componentWillUnmount() {
        this.spriteGallery = undefined
    }

    clickHandler(idx: number) {
        this.props.onClick(this.props.options[idx], idx)
    }

    render() {
        let items = this.props.options
            .map((c, i) =>
                <Item
                    key={c.buf.toString()}
                    img={c}
                    onClick={this.clickHandler.bind(this, i)}></Item>
            )

        return (
            <div ref="sprite-gallery"
                className="sprite-gallery">
                {items}
            </div>
        );
    }
}

export default SpriteGallery;

