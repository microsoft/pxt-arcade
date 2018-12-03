interface SpriteSheetInfo {
    name: string;
    spriteWidth: number;
    spriteHeight: number;
    palette: Palette;
}

interface ParsedImage {
    source: Uint8Array;
    hex: string;
}

interface SpriteSheet {
    source: string;
    info: SpriteSheetInfo;
    images: ParsedImage[];
}

interface Palette {
    name: string;
    colors: string[];
}

interface Project {
    defaultPalette: Palette;
    palettes: Palette[];
    tileSets: SpriteSheet[];
    tileMaps: Tilemap[];
}

interface Tilemap {
    name: string;
    tileset: SpriteSheet;
    width: number;
    height: number;
    layers: string[];
}