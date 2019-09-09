import { Bitmap, bitmapToImageLiteral, imageLiteralToBitmap } from "./sprite-editor/bitmap";

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

export function f4PreProcess(s: string) {
    let matrix: number[][] = []
    let line: number[] = []
    let tbl: { [k: string]: number } = {}
    let maxLen = 0
    // attrs.groups.forEach((str, n) => {
    //     for (let c of str) tbl[c] = n
    // })
    s += "\n"
    for (let i = 0; i < s.length; ++i) {
        let c = s[i]
        switch (c) {
            case ' ':
            case '\t':
                break
            case '\n':
                if (line.length > 0) {
                    matrix.push(line)
                    maxLen = Math.max(line.length, maxLen)
                    line = []
                }
                break
            default:
                let v = tbl[c] // U.lookup(tbl, c) //TODO(dz):
                if (v == null) {
                    //     if (attrs.groups.length == 2)
                    // v = 1 // default anything non-zero to one
                    //     else
                    //         throw unhandled(node, lf("invalid character in image literal: '{0}'", v), 9273)
                }
                line.push(v)
                break
        }
    }

    let bpp = 8
    // if (attrs.groups.length <= 2) {
    //     bpp = 1
    // } else if (attrs.groups.length <= 16) {
    bpp = 4 // TODO:
    // }
    return f4EncodeImg(maxLen, matrix.length, bpp, (x, y) => matrix[y][x] || 0)
}

export function toNumbers(colors: string[]): number[][] {
    const res: number[][] = [];
    for (let i = 0; i < colors.length; i++) {
        const color = parseColorString(colors[i]);
        res.push([_r(color), _g(color), _b(color)]);
    }
    return res;
}

function parseColorString(color: string) {
    if (color) {
        if (color.length === 6) {
            return parseInt("0x" + color);
        }
        else if (color.length === 7) {
            return parseInt("0x" + color.substr(1));
        }
    }
    return 0;
}

function _r(color: number) { return (color >> 16) & 0xff }
function _g(color: number) { return (color >> 8) & 0xff }
function _b(color: number) { return color & 0xff }

const defaultPalletColors = [
    "#000000",
    "#ffffff",
    "#ff2121",
    "#ff93c4",
    "#ff8135",
    "#fff609",
    "#249ca3",
    "#78dc52",
    "#003fad",
    "#87f2ff",
    "#8e2ec4",
    "#a4839f",
    "#5c406c",
    "#e5cdc4",
    "#91463d",
    "#000000"
]
export const defaultColorArray = toNumbers(defaultPalletColors);

function scale_color(v: number) {
    return v * v
}
export function textToBinHex(text: string): string {
    // TODO(dz): does this behave different than a roundtrip through Bitmap?
    return f4PreProcess(text)
}
export function bitmapToBinHex(bitmap: Bitmap): string {
    // return f4PreProcess(
    return f4EncodeImg(bitmap.width, bitmap.height, 4, bitmap.get.bind(bitmap))
}
export function bitmapToText(bmp: Bitmap): string {
    return bitmapToImageLiteral(bmp);
}
export function textToBitmap(text: string): Bitmap {
    const bmp = imageLiteralToBitmap(text);

    // Ignore invalid bitmaps
    if (bmp && bmp.width && bmp.height) {
        return bmp
    } else {
        return null;
    }
}

export function bitmapToCanvas(bmp: Bitmap, scale: number = 4) {
    const colors = defaultPalletColors.slice(1)
    // const canvas = document.createElementNS("http://www.w3.org/2000/svg", "canvas");
    const canvas = document.createElement("canvas");
    let width = canvas.width = bmp.width * scale;
    let height = canvas.height = bmp.height * scale;

    let cellSize = scale

    // TODO: Center the image if it isn't square
    const xOffset = 0
    const yOffset = 0

    let context: CanvasRenderingContext2D;
    context = canvas.getContext("2d");

    for (let c = 0; c < bmp.width; c++) {
        for (let r = 0; r < bmp.height; r++) {
            const color = bmp.get(c, r);

            if (color) {
                context.fillStyle = colors[color - 1];
                context.fillRect(xOffset + c * cellSize, yOffset + r * cellSize, cellSize, cellSize);
            }
        }
    }

    return canvas;
}
export function bitmapToUrl(bmp: Bitmap): string {
    return bitmapToCanvas(bmp).toDataURL();
}

export function createPngImg(x: number, y: number, w: number, h: number, bmp?: Bitmap): SVGImageElement {
    let img = document.createElementNS("http://www.w3.org/2000/svg", "image")
    img.setAttribute("x", `${x}`)
    img.setAttribute("y", `${y}`)
    img.setAttribute("width", `${w}px`)
    img.setAttribute("height", `${h}px`)
    if (bmp) {
        updatePngImg(img, bmp)
    }
    return img
}

export function updatePngImg(img: SVGImageElement, bmp: Bitmap) {
    let imgData = bitmapToUrl(bmp)
    img.setAttributeNS("http://www.w3.org/1999/xlink", "href", `${imgData}`)
}

export function isEmptyBitmap(bmp: Bitmap) {
    for (let x = 0; x < bmp.width; x++) {
        for (let y = 0; y < bmp.height; y++) {
            if (bmp.get(x, y)) return false;
        }
    }
    return true;
}