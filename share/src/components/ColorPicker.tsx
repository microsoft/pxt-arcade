import React, { CSSProperties } from 'react';

import '../css/ColorPicker.css';

interface ColorPickerProps {
    height: number,
    colors: string[]
}
interface ColorPickerState {
}

function range(len: number): number[] {
    return new Array(len)
        .fill(undefined)
        .map((_, i) => i)
}

interface SwatchProps {
    color: string,
    selected: boolean
}
const Swatch: React.FC<SwatchProps> = (props: SwatchProps) => {
    let style: CSSProperties = {
        backgroundColor: props.color
    }
    let classes = `swatch ${props.selected ? "selected" : ""}`
    return (
        <div className={classes} style={style}>
        </div>
    );
}
export class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState>
{
    private colorPicker: HTMLDivElement | undefined;

    constructor(props: ColorPickerProps) {
        super(props);

        this.state = {
        }

    }

    componentDidMount() {
        this.colorPicker = this.refs["color-picker"] as HTMLDivElement

        this.colorPicker.setAttribute("style", `height:${this.props.height}px`)
    }
    componentWillUnmount() {
        this.colorPicker = undefined
    }

    render() {
        let swatchs = this.props.colors
            .map((c, i) =>
                <Swatch key={`swatch-${i}`} color={c} selected={i == 0}></Swatch>
            )

        return (
            <div ref="color-picker" className="color-picker">
                {swatchs}
            </div>
        );
    }
}

export default ColorPicker;
