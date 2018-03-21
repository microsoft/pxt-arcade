/// <reference path="./bitmap.ts" />
/// <reference path="./grid.ts" />
/// <reference path="./tools.ts" />
/// <reference path="./util.ts" />


namespace mkcd {
    import svg = svgUtil;
    export class BitmapImage extends Grid {
        public image: Bitmap;
        protected palette: string[];
        protected overlay: svg.Group;

        constructor(props: Partial<GridStyleProps>, img: Bitmap, palette: string[]) {
            super(bitmapImageProps(props, img));

            this.image = img;
            this.palette = palette;
            this.repaint();
        }

        repaint() {
            for (let c = 0; c < this.image.width; c++) {
                for (let r = 0; r < this.image.height; r++) {
                    this.setCellColor(c, r, this.palette[this.image.get(c, r)])
                }
            }
        }

        writeColor(col: number, row: number, color: number) {
            this.image.set(col, row, color);
            this.setCellColor(col, row, this.palette[color]);
        }

        restore(bitmap: Bitmap, repaint = false) {
            if (bitmap.height != this.image.height || bitmap.width != this.image.width) {
                this.image = bitmap.copy();
                this.resizeGrid(bitmap.width, bitmap.width * bitmap.height);
            }
            else {
                this.image.apply(bitmap);
            }

            if (repaint) {
                this.repaint();
            }
        }

        applyEdit(edit: Edit) {
            edit.doEdit(this.image);
            this.repaint();
        }

        bitmap() {
            return this.image;
        }

        showOverlay() {
            if (!this.overlay) {
                this.overlay = new svg.Group;
                if (this.dragSurface) {
                    this.group.el.insertBefore(this.overlay.el, this.dragSurface.el);
                }
                else {
                    this.group.appendChild(this.overlay);
                }
            }
            else {
                this.overlay.el.innerHTML = "";
            }

            const width = this.outerWidth();
            const height = this.outerHeight();

            this.overlay.draw("rect")
                .fill("#dedede")
                .size(width, height);

            for (let c = 0; c < this.columns; c++) {
                const [x, ] = this.cellToCoord(c, 0);
                this.overlay.draw("line")
                    .stroke("#898989")
                    .strokeWidth(1)
                    .at(x, 0, x, height);
            }

            for (let r = 0; r < this.rows; r++) {
                const [, y] = this.cellToCoord(0, r);
                this.overlay.draw("line")
                    .stroke("#898989")
                    .strokeWidth(1)
                    .at(0, y, width, y);
            }

            fade(this.overlay, 500, 500);
        }
    }

    function bitmapImageProps(props: Partial<GridStyleProps>, bitmap: Bitmap): GridProps {
        const defaultProps = defaultGridProps();
        defaultProps.rowLength = bitmap.width;
        defaultProps.numCells = bitmap.width * bitmap.height;

        return mergeProps<GridProps>(defaultProps, props);
    }

    function fade(target: svg.Group, delay: number, duration: number) {
        const start = Date.now() + delay;
        const end = start + duration;
        const slope = 1 / duration;

        const frame = () => {
            const now = Date.now();
            if (now < end) {
                const v = 1 - (slope * (now - start));
                target.setAttribute("fill-opacity", v);
                target.setAttribute("stroke-opacity", v);
                requestAnimationFrame(frame);
            }
            else {
                target.setAttribute("fill-opacity", 0)
                target.setAttribute("stroke-opacity", 0)
            }
        }

        target.setAttribute("fill-opacity", 1)
        target.setAttribute("stroke-opacity", 1)

        setTimeout(() => requestAnimationFrame(frame), delay);
    }
}