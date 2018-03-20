/// <reference path="../sim/svg.ts" />
/// <reference path="./util.ts" />


namespace mkcd {
    import svg = svgUtil;

    export interface GridStyleProps {
        cellWidth: number;
        cellHeight: number;
        columnMargin: number;
        outerMargin: number;
        rowMargin: number;
        cornerRadius: number;
        defaultColor: string;
        cellIdPrefix: string;
        backgroundFill?: string;
        cellClass?: string;
    }

    export interface GridProps extends GridStyleProps {
        rowLength: number;
        numCells: number;
    }

    /**
     * An SVG grid of pixels
     */
    export class Grid {
        protected group: svg.Group;
        protected cells: svg.Rect[][];
        protected gridProps: GridProps;
        protected dragHandler: (col: number, row: number) => void;
        protected downHandler: (col: number, row: number) => void;
        protected upHandler: (col: number, row: number) => void;
        protected dragSurface: svg.Rect;
        protected rows: number;
        protected columns: number;


        constructor(props: Partial<GridProps>) {
            this.gridProps = mkcd.mergeProps(defaultGridProps(), props);
            this.columns = this.gridProps.rowLength;
            this.rows = Math.ceil(this.gridProps.numCells / this.columns);
            this.group = new svg.Group();
            this.buildDom();
        }

        outerWidth(): number {
            const x = this.cellToCoord(this.columns - 1, 0)[0];
            return x + this.gridProps.cellWidth + this.gridProps.outerMargin;
        }

        outerHeight(): number {
            const y = this.cellToCoord(0, this.rows - 1)[1];
            return y + this.gridProps.cellHeight + this.gridProps.outerMargin;
        }

        getView() {
            return this.group;
        }

        translate(x: number, y: number) {
            this.group.translate(x, y);
        }

        scale(ratio: number) {
            this.group.scale(ratio);
        }

        setCellColor(column: number, row: number, color: string, opacity?: number): void {
            if (column < 0 || row < 0 || column >= this.columns || row >= this.rows) {
                return;
            }
            column = Math.floor(column);
            row = Math.floor(row);
            this.cells[column][row].fill(color, opacity);
        }

        down(handler: (col: number, row: number) => void): void {
            this.initDragSurface();
            this.downHandler = handler;
        }

        up(handler: (col: number, row: number) => void): void {
            this.initDragSurface();
            this.upHandler = handler;
        }

        drag(handler: (col: number, row: number) => void): void {
            this.initDragSurface();
            this.dragHandler = handler;
        }

        protected cellToCoord(column: number, row: number): Coord {
            const x = this.gridProps.outerMargin + column * (this.gridProps.cellWidth + this.gridProps.columnMargin);
            const y = this.gridProps.outerMargin + row * (this.gridProps.cellHeight + this.gridProps.rowMargin);
            return [x, y];
        }

        protected coordToCell(x: number, y: number): Coord {
            const column = Math.floor((x - this.gridProps.outerMargin) / (this.gridProps.cellWidth + this.gridProps.columnMargin));
            const row = Math.floor((y - this.gridProps.outerMargin) / (this.gridProps.cellHeight + this.gridProps.rowMargin));
            return [column, row];
        }

        protected indexToCell(index: number): Coord {
            const col = index % this.gridProps.rowLength;
            const row = Math.floor(index / this.gridProps.rowLength);
            return [col, row];
        }

        protected cellToIndex(col: number, row: number): number {
            return row * this.gridProps.rowLength + col;
        }

        protected buildDom() {
            this.cells = [];
            if (this.gridProps.backgroundFill) {
                this.group.draw("rect")
                    .size(this.outerWidth(), this.outerHeight())
                    .fill(this.gridProps.backgroundFill);
            }
            let count = 0;
            for (let col = 0; col < this.columns; col++) {
                this.cells.push([]);
                for (let row = 0; row < this.rows; row++) {
                    this.cells[col].push(this.buildCell(col, row));
                    count++;
                    if (count > this.gridProps.numCells) {
                        return;
                    }
                }
            }
        }

        protected buildCell(col: number, row: number): svg.Rect {
            const [x, y] = this.cellToCoord(col, row);

            const index = this.cellToIndex(col, row);
            const cell = this.group.draw("rect")
                .id(this.gridProps.cellIdPrefix + "-" + index)
                .at(x, y)
                .size(this.gridProps.cellWidth, this.gridProps.cellHeight)
                .fill(this.gridProps.defaultColor)
                .attr({ "data-grid-index": index });

            if (this.gridProps.cornerRadius) {
                cell.corner(this.gridProps.cornerRadius)
            }

            if (this.gridProps.cellClass) {
                cell.setAttribute("class", this.gridProps.cellClass);
            }

            return cell;
        }

        protected getCell(index: number): svg.Rect {
            const [col, row] = this.indexToCell(index);
            return this.cells[col][row];
        }

        private initDragSurface() {
            if (!this.dragSurface) {
                let lastCol = -1;
                let lastRow = -1;
                let inGesture = false;
                this.dragSurface = this.group.draw("rect")
                    .opacity(0)
                    .width(this.outerWidth())
                    .height(this.outerHeight());
                const mHandler = (ev: MouseEvent) => {
                    if (ev.buttons & 1) {
                        let start = false;
                        if (!inGesture) {
                            inGesture = true;
                            lastCol = -1;
                            lastRow = -1;
                            start = true;
                        }
                        const elts = document.elementsFromPoint(ev.pageX, ev.pageY);
                        elts.forEach((el) => {
                            if (el.hasAttribute("data-grid-index")) {
                                const [col, row] = this.indexToCell(Number(el.getAttribute("data-grid-index")));
                                if (lastCol != col || lastRow != row) {
                                    lastCol = col;
                                    lastRow = row;
                                    if (start) {
                                        this.downCore(col, row);
                                    }
                                    else {
                                        this.moveCore(col, row);
                                    }
                                }
                            }
                        });
                    }
                    else if (inGesture) {
                        this.upCore(lastCol, lastRow);
                        lastCol = -1;
                        lastRow = -1;
                        inGesture = false;
                    }
                };
                this.dragSurface.el.addEventListener("pointermove", mHandler);
                this.dragSurface.el.addEventListener("pointerdown", mHandler);
                this.dragSurface.el.addEventListener("pointerclick", mHandler);
                this.dragSurface.el.addEventListener("pointerleave", ev => {
                    if (inGesture) {
                        this.upCore(lastCol, lastRow);
                        lastCol = -1;
                        lastRow = -1;
                        inGesture = false;
                    }
                });
            }
        }

        private upCore(col: number, row: number) {
            if (this.upHandler) {
                this.upHandler(col, row);
            }
        }

        private downCore(col: number, row: number) {
            if (this.downHandler) {
                this.downHandler(col, row);
            }
        }

        private moveCore(col: number, row: number) {
            if (this.dragHandler) {
                this.dragHandler(col, row);
            }
        }
    }

    export function defaultGridProps(): GridProps {
        return {
            rowLength: 16,
            numCells: 16 * 16,
            cellWidth: 10,
            cellHeight: 10,
            outerMargin: 0,
            columnMargin: 0,
            rowMargin: 0,
            cornerRadius: 0,
            defaultColor: "#ffffff",
            cellIdPrefix: uniquePrefix()
        };
    }

    let current = 0;
    export function uniquePrefix() {
        return "grid" + current++;
    }
}