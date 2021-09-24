namespace overworld {
    export class Point {
        constructor(public x: number, public y: number) {}
    }

    export class Bitmask {
        protected mask: Buffer;

        constructor(public width: number, public height: number) {
            this.mask = control.createBuffer(Math.ceil(width * height / 8));
        }

        set(col: number, row: number) {
            const cellIndex = col + this.width * row;
            const index = cellIndex >> 3;
            const offset = cellIndex & 7;
            this.mask[index] |= (1 << offset);
        }

        get(col: number, row: number) {
            const cellIndex = col + this.width * row;
            const index = cellIndex >> 3;
            const offset = cellIndex & 7;
            return (this.mask[index] >> offset) & 1;
        }
    }

    export class Region {
        protected mask: Bitmask;

        constructor(public left: number, public top: number, width: number, height: number) {
            this.mask = new Bitmask(width, height);
        }

        inRegion(col: number, row: number): boolean {
            if (this.outOfBounds(col, row)) return false;
            return !!this.mask.get(col - this.left, row - this.top);
        }

        addToRegion(col: number, row: number) {
            if (this.outOfBounds(col, row)) return;
            this.mask.set(col - this.left, row - this.top);
        }

        get width() {
            return this.mask.width;
        }

        get height() {
            return this.mask.height;
        }

        protected outOfBounds(col: number, row: number) {
            return col < this.left || col > this.left + this.width || row < this.top || row > this.top + this.height;
        }
    }

    export function tilesInRange(data: tiles.TileMapData, col: number, row: number, range: number): Region {
        const visited = new Region(col - range, row - range, (range << 1) + 1, (range << 1) + 1);
        const out = new Region(visited.left, visited.top, visited.width, visited.height);

        let queue: Point[] = [];
        let next: Point[] = [];
        let distance = 0;
        let current: Point;

        // BFS
        const minX = col - range;
        const minY = row - range;
        const maxX = col + range;
        const maxY = row + range;

        out.addToRegion(col, row);
        visited.addToRegion(col, row);
        queue.push(new Point(col, row));

        while (queue.length && distance < range) {
            current = queue.shift();

            if (current.x > minX && !visited.inRegion(current.x - 1, current.y)) {
                visited.addToRegion(current.x - 1, current.y)
                if (!data.isWall(current.x - 1, current.y)) {
                    out.addToRegion(current.x - 1, current.y)
                    next.push(new Point(current.x - 1, current.y))
                }
            }
            if (current.x < maxX && !visited.inRegion(current.x + 1, current.y)) {
                visited.addToRegion(current.x + 1, current.y)
                if (!data.isWall(current.x + 1, current.y)) {
                    out.addToRegion(current.x + 1, current.y)
                    next.push(new Point(current.x + 1, current.y))
                }
            }
            if (current.y > minY && !visited.inRegion(current.x, current.y - 1)) {
                visited.addToRegion(current.x, current.y - 1)
                if (!data.isWall(current.x, current.y - 1)) {
                    out.addToRegion(current.x, current.y - 1)
                    next.push(new Point(current.x, current.y - 1))
                }
            }
            if (current.y < maxY && !visited.inRegion(current.x, current.y + 1)) {
                visited.addToRegion(current.x, current.y + 1)
                if (!data.isWall(current.x, current.y + 1)) {
                    out.addToRegion(current.x, current.y + 1)
                    next.push(new Point(current.x, current.y + 1))
                }
            }

            if (!queue.length && next.length) {
                queue = next;
                next = [];
                distance ++;
            }
        }

        return out;
    }
}