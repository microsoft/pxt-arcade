namespace palette {
    export const DefaultPalette: Palette = {
        name: "default",
        colors: [
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
    };

    export function parseGPLAsync(text: string): Palette {
        const lines = text.split(/\n/);
        let name: string;
        const colors: string[] = ["#000000"];

        for (const line of lines) {
            if (line.indexOf("#Palette Name:") === 0) {
                name = line.substr(14).trim();
            }
            else if (startsWith(line, "GIMP") || startsWith(line, "#") || !line.trim()) {
                continue;
            }
            else {
                const color = line.split(/\s+/).filter(c => startsWith(c, "#"));
                if (color.length === 1) {
                    colors.push(color[0].toLowerCase());
                }
            }
        }

        return {
            name: name,
            colors
        };
    }

    export function parseHEXAsync(text: string): Palette {
        const lines = text.split(/\n/);
        const colors: string[] = ["#000000"];

        for (let line of lines) {
            if (/[A-Fa-f0-9]{6}/.test(line)) {
                colors.push("#" + line.toLowerCase());
            }
        }

        return {
            name: "hex",
            colors
        };
    }

    export function parseTXTAsync(text: string): Palette {
        const lines = text.split(/\n/);
        let name: string;
        const colors: string[] = ["#000000"];

        for (let line of lines) {
            line = line.trim();
            if (startsWith(line, ";Palette Name:")) {
                name = line.substr(14);
            }
            else if (/[A-Fa-f0-9]{6}/.test(line)) {
                colors.push("#" + line.toLowerCase());
            }
            else if (/[A-Fa-f0-9]{8}/.test(line)) {
                // First two characters are alpha, just strip it out
                colors.push("#" + line.substr(2).toLowerCase());
            }
        }

        return {
            name: name,
            colors
        };
    }

    export function encodePalette(colors: string[]) {
        const buf = new Uint8Array(colors.length * 3);
        for (let i = 0; i < colors.length; i++) {
            const color = parseColorString(colors[i]);
            const start = i * 3;
            buf[start] = _r(color);
            buf[start + 1] = _g(color);
            buf[start + 2] = _b(color);
        }
        return util.toHex(buf);
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

    function startsWith(str: string, prefix: string) { return str.indexOf(prefix) === 0 }
}