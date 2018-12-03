/// <reference path="./palette.ts" />

namespace assets {
    export async function importAsset(file: File) {
        if (file.type === "image/png") {
            const res = await importPNGAsync(file);
            console.log(JSON.stringify(res));
        }
    }

    async function importPNGAsync(file: File) {
        const contents = await util.fileReadAsBufferAsync(file);
        const encoded = btoa(util.uint8ArrayToString(contents));
        return await parseImageAsync(encoded);
    }

    async function loadImageAsync(encoded: string): Promise<HTMLImageElement> {
        return new Promise<HTMLImageElement>(resolve => {
            const el = document.createElement("img");
            el.src = "data:image/png;base64," + encoded;
            el.onload = () => {
                resolve(el)
            };
        })
    }

    async function parseImageAsync(encoded: string, colors = palette.DefaultPalette.colors): Promise<ParsedImage> {
        const loaded = await loadImageAsync(encoded);
        const canvas = document.createElement("canvas");
        canvas.width = loaded.width;
        canvas.height = loaded.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(loaded, 0, 0);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);

        return {
            hex: encodeImage(data.width, data.height, data.data),
            source: data.data
        };
    }

    function encodeImage(width: number, height: number, data: Uint8ClampedArray, colors = palette.DefaultPalette.colors): string {
        const colorArray = palette.toNumbers(colors);

        return f4EncodeImg(width, height, 4, (x, y) => {
            const index = y * width + x;
            return closestColor(data, index << 2, colorArray);
        });
    }


    // use geometric distance on colors
    function scale(v: number) {
        return v * v
    }

    function closestColor(buf: Uint8ClampedArray, pix: number, palette: number[][], alpha = true) {
        if (alpha && buf[pix + 3] < 100)
            return 0 // transparent
        let mindelta = 0
        let idx = -1
        for (let i = alpha ? 1 : 0; i < palette.length; ++i) {
            let delta = scale(palette[i][0] - buf[pix + 0]) + scale(palette[i][1] - buf[pix + 1]) + scale(palette[i][2] - buf[pix + 2])
            if (idx < 0 || delta < mindelta) {
                idx = i
                mindelta = delta
            }
        }
        return idx
    }

    export function f4EncodeImg(w: number, h: number, bpp: number, getPix: (x: number, y: number) => number) {
        let r = hex2(0xe0 | bpp) + hex2(w) + hex2(h) + "00"
        let ptr = 4
        let curr = 0
        let shift = 0

        let pushBits = (n: number) => {
            curr |= n << shift
            if (shift == 8 - bpp) {
                r += hex2(curr)
                ptr++
                curr = 0
                shift = 0
            } else {
                shift += bpp
            }
        }

        for (let i = 0; i < w; ++i) {
            for (let j = 0; j < h; ++j)
                pushBits(getPix(i, j))
            while (shift != 0)
                pushBits(0)
            if (bpp > 1) {
                while (ptr & 3)
                    pushBits(0)
            }
        }

        return r

        function hex2(n: number) {
            return ("0" + n.toString(16)).slice(-2)
        }
    }
}