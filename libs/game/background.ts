enum BackgroundAlignment {
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="top"
    Top,
    //% block="bottom"
    Bottom,
    //% block="center"
    Center
}

namespace game {
    export class Background {
        color: number;
        viewX: number;
        viewY: number;
        private _layers: BackgroundLayer[];

        constructor() {
            this.color = 0;
            this.viewX = 0;
            this.viewY = 0;
            this._layers = [];
        }

        public addLayer(distance: number, alignment: BackgroundAlignment, pic: Image) {
            const layer = new BackgroundLayer(distance, alignment, pic);
            this._layers.push(layer);
            this._layers.sort((a, b) => b.distance - a.distance);
            return layer;
        }

        render() {
            screen.fill(this.color);
            this._layers.forEach(layer => {
                // compute displacement based on distance
                const ox = Math.round(this.viewX / (1 + layer.distance));
                const oy = Math.round(this.viewY / (1 + layer.distance));

                layer.render(ox, oy);
            });
        }
    }


    export class BackgroundLayer {
        distance: number;
        img: Image;
        repeatX: boolean;
        repeatY: boolean;
        alignX: BackgroundAlignment;
        alignY: BackgroundAlignment;

        constructor(distance: number, alignment: BackgroundAlignment, img: Image) {
            this.distance = Math.max(1, distance);
            this.img = img;
            switch (alignment) {
                case BackgroundAlignment.Center:
                    this.repeatX = true;
                    this.repeatY = true;
                    this.alignX = BackgroundAlignment.Center;
                    this.alignY = BackgroundAlignment.Center;
                    break;
                case BackgroundAlignment.Left:
                case BackgroundAlignment.Right:
                    this.repeatX = false;
                    this.repeatY = true;
                    this.alignX = alignment;
                    this.alignY = BackgroundAlignment.Center;
                    break;
                case BackgroundAlignment.Top:
                case BackgroundAlignment.Bottom:
                    this.repeatX = true;
                    this.repeatY = false;
                    this.alignX = BackgroundAlignment.Center;
                    this.alignY = alignment;
                    break;
            }
        }

        render(offsetX: number, offsetY: number) {
            const w = screen.width;
            const h = screen.height;
            const pw = this.img.width;
            const ph = this.img.height;

            if (!pw || !ph) return; // empty image.

            // left, top aligned
            let rx = -offsetX;
            let ry = -offsetY;

            switch (this.alignX) {
                case BackgroundAlignment.Right: rx -= (w + pw); break;
                case BackgroundAlignment.Center: rx -= (w + pw) / 2; break;
            }
            switch (this.alignY) {
                case BackgroundAlignment.Bottom: ry -= (h + ph); break;
                case BackgroundAlignment.Center: ry -= (h + ph) / 2; break;
            }

            rx %= w; if (rx < 0) rx += w;
            ry %= h; if (ry < 0) ry += h;

            // avoid subpixel aliasing
            rx = Math.floor(rx);
            ry = Math.floor(ry);

            let y = 0;
            let py = 0;
            while (y < h) {
                py = y % ph;
                let dh = Math.min(ph - py, h - ry);
                let x = 0;
                let rxl = rx;
                while (x < w) {
                    let px = x % pw;
                    let dw = Math.min(pw - px, w - rxl);
                    screen.drawImage(this.img, rxl, ry);
                    rxl = (rxl + dw) % w;
                    x += this.repeatX ? dw : w;
                }
                ry = (ry + dh) % h;
                y += this.repeatY ? dh : h;
            }
        }
    }
}