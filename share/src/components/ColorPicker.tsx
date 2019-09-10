import React from 'react';

import '../css/ColorPicker.css';

interface ColorPickerProps {
}
interface ColorPickerState {
}

export class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState>
{
    constructor(props: ColorPickerProps) {
        super(props);

        this.state = {
        }

    }

    componentDidMount() {
        // this.ColorPickerSvg = this.refs["color-picker-svg"] as SVGSVGElement
    }
    componentWillUnmount() {
        // this.ColorPickerSvg = undefined
    }

    render() {

        return (
            <div ref="color-picker" className="color-picker">
                Hi
                {/* <svg ref="color-picker-svg" viewBox={viewBox}>
                </svg> */}
            </div>
        );
    }
}

export default ColorPicker;
