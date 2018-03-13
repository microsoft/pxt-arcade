/// <reference path="./grid.ts" />
/// <reference path="./svg.ts" />


namespace mkcd {
    export interface ColorPaletteProps extends GridStyleProps {
        colors: string[];
        rowLength: number;
        emptySwatchDisabled: boolean;
        emptySwatchFill: string;
        selectBorderWidth: number;
        selectBorderColor: string;
        selectBorderOpacity: number;
    }

    export class ColorPalette extends Grid {
        selected: number;
        private props: ColorPaletteProps;

        constructor(props: Partial<ColorPaletteProps>) {
            super(toGridProps(mergeProps(defaultPaletteProps(), props)));

            this.props = mergeProps(defaultPaletteProps(), props);
            this.selected = 0;

            this.initColors();
        }
        
        colorForIndex(index: number) {
            if (this.props.emptySwatchDisabled) {
                return this.props.colors[index];
            }
            else if (index === 0) {
                return this.props.emptySwatchFill;
            }
            else {
                return this.props.colors[index - 1];
            }
        }

        setSelected(index: number) {
            this.setCellHighlighted(this.selected, false);
            this.selected = index;
            this.setCellHighlighted(this.selected, true);
        }

        selectedColor() {
            return this.colorForIndex(this.selected);
        }

        setCellHighlighted(index: number, highlighted: boolean)  {
            const cell = this.getCell(index);
            if (highlighted) {
                cell.stroke(this.props.selectBorderColor, this.props.selectBorderWidth);
                cell.strokeOpacity(this.props.selectBorderOpacity);
            }
            else {
                cell.stroke(this.props.selectBorderColor, 0);
                cell.strokeOpacity(0);
            }
        }

        protected initColors() {
            for (let i = 0; i < this.gridProps.numCells; i++) {
                const cell = this.getCell(i);
                cell.fill(this.colorForIndex(i));
                cell.onDown(() => this.setSelected(i));
            }
            this.setSelected(0);
        }
    }

    function defaultPaletteProps(): ColorPaletteProps {
        return {
            colors: ["red", "green", "blue"],
            rowLength: 4,
            emptySwatchDisabled: false,
            emptySwatchFill: "lightgrey",
            selectBorderWidth: 2,
            selectBorderColor: "black",
            selectBorderOpacity: 0.5,
            cellWidth: 10,
            cellHeight: 10,
            columnMargin: 2,
            rowMargin: 2,
            cornerRadius: 4,
            defaultColor: "#ffffff",
        };
    }

    function toGridProps(props: Partial<ColorPaletteProps>) {
        const res = mergeProps(defaultGridProps(), props);
        res.numCells = props.colors.length + (props.emptySwatchDisabled ? 0 : 1);
        return res;
    }
}