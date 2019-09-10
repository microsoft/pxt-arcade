import React from 'react';

import '../css/ColorPicker.css';

interface ColorPickerProps {
    height: number
}
interface ColorPickerState {
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

        return (
            <div ref="color-picker" className="color-picker">
                TODO: color swatches
                {/* <svg ref="color-picker-svg" viewBox={viewBox}>
                </svg> */}
            </div>
        );
    }
}

export default ColorPicker;
