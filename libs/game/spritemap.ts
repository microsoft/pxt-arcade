namespace sprites {
    export class SpriteMap {
        private cellWidth: number;
        private cellHeight: number;
        private rowCount: number;
        private columnCount: number;
        private buckets: Sprite[][];
        sprites: Sprite[];

        constructor() {
            this.buckets = [];
            this.sprites = [];
            this.update();
        }

        /**
         * Inserts a sprite in the map
         */
        insert(sprite: Sprite): void {
            if (this.sprites.indexOf(sprite) < 0) {
                this.insertAABB(sprite);
                this.sprites.push(sprite);
            }
        }

        /**
         * Removes the sprite from any bucket
         */
        remove(sprite: Sprite): void {
            if (this.sprites.removeElement(sprite)) {
                const l = this.buckets.length;
                for (let i = 0; i < l; ++i)
                    if (this.buckets[i])
                        this.buckets[i].removeElement(sprite);
            }
        }

        /**
         * Returns a potential list of neighbors
         */
        neighbors(sprite: Sprite): Sprite[] {
            if (this.isOob(sprite)) return [];

            const n: Sprite[] = [];
            this.mergeAtKey(sprite.left, sprite.top, n)
            this.mergeAtKey(sprite.left, sprite.bottom, n)
            this.mergeAtKey(sprite.right, sprite.top, n)
            this.mergeAtKey(sprite.right, sprite.bottom, n)
            n.removeElement(sprite);
            return n;
        }

        /**
         * Gets the overlaping sprites if any
         * @param sprite 
         */
        overlaps(sprite: Sprite): Sprite[] {
            const n = this.neighbors(sprite);
            const o = n.filter(neighbor => sprite.collidesWith(neighbor));
            console.log(`overlaps ${sprite} -> ${n.length} -> ${o.length}`)
            return o;
        }

        draw() {
            console.log(`sprites draw`)
            for(let x = 0; x < this.columnCount; ++x) {
                for(let y = 0; y < this.rowCount; ++y) {
                    const left = x * this.cellWidth;
                    const top = y * this.cellHeight;
                    const k = this.key(left, top);
                    const b = this.buckets[k];
                    if (b && b.length)
                        screen.drawRect(left, top, this.cellWidth, this.cellHeight, 5);
                }
            }
        }

        /**
         * Clears the map
         */
        clear() {
            this.clearBuckets();
            this.sprites.length = 0;
        }

        /**
         * Recompute hashes for all objects
         */
        update() {
            this.clearBuckets();

            // rescale buckets
            let maxWidth = 0;
            let maxHeight = 0;
            for (const sprite of this.sprites) {
                if (sprite.width > maxWidth) maxWidth = sprite.width;
                if (sprite.height > maxHeight) maxHeight = sprite.height;
            }
            this.cellWidth = Math.clamp(8, screen.width / 4, maxWidth);
            this.cellHeight = Math.clamp(8, screen.height / 4, maxHeight);
            this.rowCount = (screen.height / this.cellHeight) >> 0
            this.columnCount = (screen.width / this.cellWidth) >> 0;


            for (const sprite of this.sprites)
                this.insertAABB(sprite);

            console.log(`${this}, ${this.cellWidth}, ${this.cellHeight}, ${this.columnCount}, ${this.rowCount}`)
        }

        private clearBuckets() {
            this.buckets = [];
        }

        private key(x: number, y: number): number {
            const xi = Math.clamp(0, this.columnCount, (x / this.cellWidth) >> 0);
            const yi = Math.clamp(0, this.rowCount, (y / this.cellHeight) >> 0);
            return xi + yi * this.columnCount;
        }

        private insertAtKey(x: number, y: number, sprite: Sprite) {
            const k = this.key(x, y);
            let bucket = this.buckets[k];
            if (!bucket)
                bucket = this.buckets[k] = [];
            if (bucket.indexOf(sprite) < 0)
                bucket.push(sprite);
        }

        private isOob(sprite: Sprite): boolean {
            return sprite.right < 0 || sprite.left > screen.width || sprite.bottom < 0 || sprite.top > screen.height;
        }

        private insertAABB(sprite: Sprite) {
            // is object completely out of space?
            if (this.isOob(sprite))
                return;

            const left = sprite.left;
            const top = sprite.top;
            for(let x = 0; x <= sprite.width; x += this.cellWidth)
                for(let y = 0; y <= sprite.height; y += this.cellHeight)
                    this.insertAtKey(left + x, top + y, sprite);
        }

        private mergeAtKey(x: number, y: number, n: Sprite[]) {
            const k = this.key(x, y);
            const bucket = this.buckets[k];
            if (bucket) {
                for (const sprite of bucket)
                    if (n.indexOf(sprite) < 0)
                        n.push(sprite);
            }
        }

        toString() {
            return `${this.sprites.length} sprites in ${this.buckets.length}/${this.buckets.filter(b => !!b).length} buckets`;
        }
    }
}