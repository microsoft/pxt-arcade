/// <reference path="./bitmap.ts" />
/// <reference path="./grid.ts" />
/// <reference path="./tools.ts" />
/// <reference path="./util.ts" />


namespace mkcd {
    export class BitmapImage extends Grid {
        protected state: Bitmap;
        protected palette: string[];

        constructor(props: Partial<GridStyleProps>, img: Bitmap, palette: string[]) {
            super(bitmapImageProps(props, img));
            
            this.state = img;
            this.palette = palette;
            this.repaint();
        }

        repaint() {
            for (let c = 0; c < this.state.width; c++) {
                for (let r = 0; r < this.state.height; r++) {
                    this.setCellColor(c, r, this.palette[this.state.get(c, r)])
                }
            }
        }

        writeColor(col: number, row: number, color: number) {
            this.state.set(col, row, color);
            this.setCellColor(col, row, this.palette[color]);
        }

        restore(bitmap: Bitmap, repaint = false) {
            this.state.apply(bitmap);

            if (repaint) {
                this.repaint();
            }
        }

        applyEdit(edit: Edit) {
            edit.doEdit(this.state);
            this.repaint();
        }

        bitmap() {
            return this.state;
        }
    }

    function bitmapImageProps(props: Partial<GridStyleProps>, bitmap: Bitmap): GridProps {
        const defaultProps = defaultGridProps();
        defaultProps.rowLength = bitmap.width;
        defaultProps.numCells = bitmap.width * bitmap.height;

        return mergeProps<GridProps>(defaultProps, props);
    }
}