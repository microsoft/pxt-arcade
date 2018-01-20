/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim {

    /**
     * Represents an indexed-color image
     */
    //%
    export class Image {
        _width: number;
        _height: number;
        data: Uint8Array;


        constructor(w: number, h: number) {
            this.data = new Uint8Array(w * h)
            this._width = w
            this._height = h
        }

        /**
         * Get the width of the image
         */
        //%
        width() { return this._width }

        /**
         * Get the height of the image
         */
        //%
        height() { return this._height }

        /**
         * Set pixel color
         */
        //%
        set(x: int, y: int, c: color) {
            if (this.inRange(x, y))
                this.data[this.pix(x, y)] = this.color(c)
        }

        /**
         * Get a pixel color
         */
        //%
        get(x: int, y: int) {
            if (this.inRange(x, y))
                return this.data[this.pix(x, y)]
            return 0
        }

        /**
         * Fill entire image with a given color
         */
        //%
        fill(c: color) {
            this.data.fill(this.color(c))
        }

        /**
         * Fill a rectangle
         */
        //%
        fillRect(x: int, y: int, w: int, h: int, c: color) {
            let [x2, y2] = this.clamp(x + w - 1, y + h - 1);
            [x, y] = this.clamp(x, y)
            let p = this.pix(x, y)
            let d = this._width - w
            c = this.color(c)
            while (h-- > 0) {
                for (let i = 0; i < w; ++i)
                    this.data[p++] = c
                p += d
            }
        }

        /**
         * Return a copy of the current image
         */
        //%
        clone() {
            let r = new Image(this._width, this._height)
            r.data.set(this.data)
            return r
        }

        /**
         * Flips (mirrors) pixels horizontally in the current image
         */
        //%
        flipX() {
            const w = this._width
            const h = this._height
            for (let i = 0; i < h; ++i) {
                this.data.subarray(i * w, (i + 1) * w).reverse()
            }
        }


        /**
         * Flips (mirrors) pixels vertically in the current image
         */
        //%
        flipY() {
            const w = this._width
            const h = this._height
            const d = this.data
            for (let i = 0; i < w; ++i) {
                let top = i
                let bot = i + (h - 1) * w
                while (top < bot) {
                    let c = d[top]
                    d[top] = d[bot]
                    d[bot] = c
                    top += w
                    bot -= w
                }
            }
        }

        /**
         * Stretches the image horizontally by 100%
         */
        //%
        doubleX() {
            const w = this._width
            const h = this._height
            const d = this.data
            const n = new Uint8Array(w * h * 2)
            let dst = 0

            for (let src = 0; src < d.length; ++src) {
                let c = d[src]
                n[dst++] = c
                n[dst++] = c
            }

            this._width = w * 2
            this.data = n
        }

        /**
         * Stretches the image vertically by 100%
         */
        //%
        doubleY() {
            const w = this._width
            const h = this._height
            const d = this.data
            const n = new Uint8Array(w * h * 2)
            let src = 0
            let dst0 = 0
            let dst1 = w
            for (let i = 0; i < h; ++i) {
                for (let j = 0; j < w; ++j) {
                    let c = d[src++]
                    n[dst0++] = c
                    n[dst1++] = c
                }
                dst0 += w
                dst1 += w
            }
            this._height = h * 2
            this.data = n
        }


        /**
         * Stretches the image in both directions by 100%
         */
        //%
        double() {
            this.doubleX()
            this.doubleY()
        }

        /**
         * Draw given image on the current image
         */
        //%
        drawImage(from: Image, x: int, y: int) {
            x |= 0
            y |= 0

            const w = from._width
            let h = from._height
            const sh = this._height
            const sw = this._width

            if (x + w <= 0) return
            if (x >= sw) return
            if (y + h <= 0) return
            if (y >= sh) return

            const len = x < 0 ? Math.min(sw, w + x) : Math.min(sw - x, w)
            const fdata = from.data
            const tdata = this.data

            for (let p = 0; h--; y++ , p += w) {
                if (0 <= y && y < sh) {
                    let dst = y * sw
                    let src = p
                    if (x < 0)
                        src += -x
                    else
                        dst += x
                    for (let i = 0; i < len; ++i) {
                        const v = fdata[src++]
                        if (v)
                            tdata[dst] = v
                        dst++
                    }
                }
            }
        }

        /**
         * Check if the current image "collides" with another
         */
        //%
        overlapsWith(other: Image, x: int, y: int) {
            x |= 0
            y |= 0

            const w = other._width
            let h = other._height
            const sh = this._height
            const sw = this._width

            if (x + w <= 0) return false
            if (x >= sw) return false
            if (y + h <= 0) return false
            if (y >= sh) return false

            const len = x < 0 ? Math.min(sw, w + x) : Math.min(sw - x, w)
            const fdata = other.data
            const tdata = this.data

            for (let p = 0; h--; y++ , p += w) {
                if (0 <= y && y < sh) {
                    let dst = y * sw
                    let src = p
                    if (x < 0)
                        src += -x
                    else
                        dst += x
                    for (let i = 0; i < len; ++i) {
                        const v = fdata[src++]
                        if (v && tdata[dst])
                            return true
                        dst++
                    }
                }
            }

            return false
        }


        // Image format:
        //  byte 0: magic 0xf4 - 4 bit color; 0xf0 is monochromatic
        //  byte 1: width in pixels
        //  byte 2...N: data 4 bits per pixels, high order nibble printed first, lines aligned to byte
        //  byte 2...N: data 1 bit per pixels, low order bit printed first, lines aligned to byte

        /**
         * Draw an icon (monochromatic image) using given color
         */
        //%
        drawIcon(icon: RefBuffer, x: int, y: int, color: color) {
            const img = icon.data
            if (!img || img.length < 3 || img[0] != 0xf0)
                return
            let w = img[1]
            let byteW = (w + 7) >> 3
            let h = ((img.length - 2) / byteW) | 0
            if (h == 0)
                return

            x |= 0
            y |= 0
            const sh = this._height
            const sw = this._width

            if (x + w <= 0) return
            if (x >= sw) return
            if (y + h <= 0) return
            if (y >= sh) return

            let p = 2
            color = this.color(color)
            const screen = this.data

            for (let i = 0; i < h; ++i) {
                let yy = y + i
                if (0 <= yy && yy < sh) {
                    let dst = yy * sw
                    let src = p
                    let xx = x
                    let end = Math.min(sw, w + x)
                    if (x < 0) {
                        src += ((-x) >> 3)
                        xx += ((-x) >> 3) * 8
                    }
                    dst += xx
                    let mask = 0x01
                    let v = img[src++]
                    while (xx < end) {
                        if (xx >= 0 && (v & mask)) {
                            screen[dst] = color
                        }
                        mask <<= 1
                        if (mask & 0x100) {
                            mask = 0x01
                            v = img[src++]
                        }
                        dst++
                        xx++
                    }
                }
                p += byteW
            }
        }


        pix(x: int, y: int) {
            return (x | 0) + (y | 0) * this._width
        }

        inRange(x: int, y: int) {
            return 0 <= (x | 0) && (x | 0) < this._width &&
                0 <= (y | 0) && (y | 0) < this._height;
        }

        color(c: color): int {
            return c & 0xff
        }

        clamp(x: int, y: int) {
            x |= 0
            y |= 0

            if (x < 0) x = 0
            else if (x >= this._width)
                x = this._width - 1

            if (y < 0) y = 0
            else if (y >= this._height)
                y = this._height - 1

            return [x, y]
        }

    }
}

namespace pxsim.image {
    /**
     * Internal
     */
    //%
    export function _show(img: Image) {
        board().showImage(img)
    }

    /**
     * Internal
     */
    //%
    export function _stats(s: string) {
        board().stats.textContent = s
    }

    /**
     * Create new empty (transparent) image
     */
    //%
    export function create(w: int, h: int) {
        return new Image(w, h)
    }

    /**
     * Create image of 0xF4 buffer.
     */
    //%
    export function ofBuffer(buf: RefBuffer): Image {
        if (!buf)
            return null
        const src = buf.data
        if (src.length < 3 || src[0] != 0xf4)
            return null
        const w = src[1]
        const h = ((src.length - 2) / ((w + 1) >> 1)) | 0
        if (w == 0 || h == 0)
            return null
        const r = new Image(w, h)
        const dst = r.data

        let dstP = 0
        let srcP = 2

        for (let i = 0; i < h; ++i) {
            for (let j = 0; j < w >> 1; ++j) {
                const v = src[srcP++]
                dst[dstP++] = v >> 4
                dst[dstP++] = v & 0xf
            }
            if (w & 1)
                dst[dstP++] = src[srcP++] >> 4
        }

        return r
    }


    function isValidImage(buf: RefBuffer) {
        return buf.data.length >= 3 && (buf.data[0] == 0xf0 || buf.data[0] == 0xf4);
    }

    function bytes(x: number, isMono: boolean) {
        if (isMono)
            return ((x + 7) >> 3)
        else
            return ((x + 1) >> 1)
    }

    const bitdouble = [
        0x00, 0x03, 0x0c, 0x0f, 0x30, 0x33, 0x3c, 0x3f, 0xc0, 0xc3, 0xcc, 0xcf, 0xf0, 0xf3, 0xfc, 0xff,
    ]


    /**
     * Return the image (mono or color) where each pixel is replaced by 4
     * @param buf 
     */
    //%
    export function doubledImage(buf: RefBuffer): RefBuffer {
        if (!isValidImage(buf))
            return null;
        const w = buf.data[1];
        if (w > 126)
            return null;
        const isMono = buf.data[0] == 0xf0
        const bw = bytes(w, isMono);
        const h = ((buf.data.length - 2) / bw) | 0;
        const bw2 = bytes(w * 2, isMono);
        const out = pxsim.BufferMethods.createBuffer(2 + bw2 * h * 2)
        out.data[0] = buf.data[0];
        out.data[1] = w * 2;
        let src = 2
        let dst = 2
        for (let i = 0; i < h; ++i) {
            for (let jj = 0; jj < 2; ++jj) {
                let p = src;
                for (let j = 0; j < bw; ++j) {
                    const v = buf.data[p++]
                    if (isMono) {
                        out.data[dst++] = bitdouble[v & 0xf];
                        out.data[dst++] = bitdouble[v >> 4];
                    } else {
                        out.data[dst++] = 0x11 * (v >> 4);
                        out.data[dst++] = 0x11 * (v & 0xf);
                    }
                }
                if (!isMono && (w & 1)) dst--
            }
            src += bw;
        }
        return out;
    }
}