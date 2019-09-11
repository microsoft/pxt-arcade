import React, { CSSProperties } from 'react';

import '../css/ColorPicker.css';

interface ColorPickerProps {
    height: number,
    colors: string[],
    selected: number,
    selectionChanged: (idx: number) => void,
}
interface ColorPickerState {
    selection: number
}

function range(len: number): number[] {
    return new Array(len)
        .fill(undefined)
        .map((_, i) => i)
}

interface SwatchProps {
    color: string,
    selected: boolean,
    onClick: () => void
}
const Swatch: React.FC<SwatchProps> = (props: SwatchProps) => {
    let style: CSSProperties = {
        backgroundColor: props.color
    }
    let classes = `swatch ${props.selected ? "selected" : ""}`
    return (
        <div className={classes} style={style} onClick={props.onClick}>
        </div>
    );
}
export class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState>
{
    private colorPicker: HTMLDivElement | undefined;

    constructor(props: ColorPickerProps) {
        super(props);

        this.state = {
            selection: this.props.selected
        }

    }

    componentDidMount() {
        this.colorPicker = this.refs["color-picker"] as HTMLDivElement

        this.colorPicker.setAttribute("style", `height:${this.props.height}px`)
    }
    componentWillUnmount() {
        this.colorPicker = undefined
    }

    clickHandler(idx: number) {
        this.props.selectionChanged(idx)
        this.setState({ selection: idx })
    }

    render() {
        let swatchs = this.props.colors
            .map((c, i) =>
                <Swatch key={`swatch-${i}`} color={c} selected={i == this.state.selection}
                    onClick={this.clickHandler.bind(this, i)}></Swatch>
            )

        return (
            <div ref="color-picker"
                className="color-picker">
                {swatchs}
            </div>
        );
    }
}

export default ColorPicker;

// TODO: show trees & cloud over background tiles?
function img(str: TemplateStringsArray): string {
    return str[0]
}
let trees = [img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b . . b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . b b b . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b . b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . b b b b . b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . b b b b b . . b b b b b . b b b b . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . b b b . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b . b b . . . . . . . . . . . . .
        . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . b b b b b b . . b b b b . b b b . . . . . . . . . . .
        . . . . . . . . . . b b b b b . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . .
        . . . . . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . . .
        . . . . . . . . . b b b b . b b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . b b . . . . b b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . b b b b b b b b b b b b b b b b b b b b . . . . . . . .
        . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b . . . . . .
        . . . . . . b b b b b b b b . . . b b b b b b b b b . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . b b b b . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b . b b b b . . . . . . . . . . .
        . . . . . . . . . . . . b b b b b . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . b b b . . b b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . b b b b . b b b b b b b b . b . . . . . . . . . .
        . . . . . . . . . . . . b . . . b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b b b b . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b . b b b b . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b b b b b b b b b . . . . . . . .
        . . . . . . . . . . . b b b b . b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b . b b . . . . . . . . . . . .
        . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . . b b b b b b b b b b b b b b . . . . . . . . . .
        . . . . . . . . . . . . b b b b b b b b b b . . b b b . . . . . . . . .
        . . . . . . . . . b b b b b b b b b b b b b b . . b b b b . . . . . . .
        . . . . . . . . b b . . . b b b b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . . b b b b . b b b b b b b b . . . . . . . . . . .
        . . . . . . . . b b b b . b . . . b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b . . b b b b . . . . . . . . .
        . . . . . . . . . . . . . b b b b b . b b b b b b b b . . . . . . . . .
        . . . . . . . . . b b b b b b . . b b b b . . b b b b b . . . . . . . .
        . . . . . . . . b b . b . . . . b b b b b . . . . . b b b . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b b b . . . . . . . . . . . .
        . . . . . . . . . . . . b b b b . . b b b b b b b . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . .
        . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . .
        . . . . . . . . b b b b b b b b b b b b b b b b b b b b . . . . . . . .
        . . . . . . . . . . . b b b b b b b b b b b b b b b b . . . . . . . . .
        . . . . . . . . . . . . . . . . b b b b b b b . b . . . . . . . . . . .
        . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b . . . . . .
        . . . . . . . . . . . b b b b b b b b b b b b b b b b b b . . . . . . .
        . . . . . . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . .
        . . . . . . . . . . b b b b b . . . b b b b . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b . b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b . b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . .
    `]
let cloud = [
]