import { Bitmap } from '../sprite-editor/bitmap';
import { COLORS } from '../sprite-editor/spriteEditor';

const base = "data:image/png;base64,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";
const defaultBackground = 13;
const colors = [null].concat(COLORS)


export async function mkScreenshotAsync(bgColor: number, images: Bitmap[]): Promise<string> {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const background = await loadImageAsync(base);

    canvas.width = background.width;
    canvas.height = background.height;

    context.drawImage(background, 0, 0);

    if (bgColor != defaultBackground) {
        const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const toReplace = colorToArray(colors[defaultBackground]);
        const replace = colorToArray(colors[bgColor]);

        for (let index = 0; index < data.length; index += 4) {
            if (data[index] === toReplace[0] && data[index + 1] === toReplace[1] && data[index + 2] === toReplace[2]) {
                data[index] = replace[0];
                data[index + 1] = replace[1];
                data[index + 2] = replace[2];
            }
        }

        context.putImageData(imgData, 0, 0);
    }

    drawImage(images[0], context, 25, 85 - images[0].height);
    drawImage(images[1], context, 10, 105 - images[1].height);
    drawImage(images[2], context, 110, 105 - images[2].height);

    return canvas.toDataURL();
}

function drawImage(image: Bitmap, context: CanvasRenderingContext2D, left: number, top: number) {
    let current: number;
    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            current = image.get(x, y);

            if (current) {
                context.fillStyle = colors[current];
                context.fillRect(left + x, top + y, 1, 1);
            }
        }
    }
}


export async function loadImageAsync(uri: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const el = document.createElement("img");

        el.onload = () => resolve(el);
        el.onerror = (e) => reject(e);

        el.src = uri;
    });
}

function colorToArray(color: string) {
    return [
        parseInt(color.substr(1, 2), 16),
        parseInt(color.substr(3, 2), 16),
        parseInt(color.substr(5, 2), 16)
    ];
}