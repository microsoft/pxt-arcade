/// <reference path="./palette.ts" />

namespace emitter {
    import escapeIdentifier = util.escapeIdentifier;

    export function emitProjectAsync(project: Project) {
        let outScript = libTS;
        for (const map of project.tileMaps) {
            outScript += emitTilemapHEX(map);
        }

        for (const sheet of project.tileSets) {
            outScript += emitTilesheetHEX(sheet);
        }

        for (const p of project.palettes) {
            outScript += emitPalette(paletteName(p), palette.encodePalette(p.colors));
        }

        return outScript;
    }

    function emitTilemapLoad(map: Tilemap) {
        return `
        export function build_${escapeIdentifier(map.name)}() {
            const layer = new TileMapLayer();
            layer.map = tilemaps.${layerName(map, 0)};
            layer.tileset = [${map.tileset.images.map((t, i) => "tilesheets." + tileName(map.tileset, i)).join(",")}];
            layer.palette = palettes.${paletteName(map.tileset.info.palette)};
            return layer;
        }
        `;
    }

    function emitTilesheetHEX(sheet: SpriteSheet) {
        return `
        namespace tilesheets {
            ${sheet.images.map((i, index) => emitImageHex(tileName(sheet, index), i.hex)).join("")}
        }`
    }

    function emitTilemapHEX(map: Tilemap) {
        return `
        namespace tilemaps {
            ${map.layers.map((l, index) => emitImageHex(layerName(map, index), l)).join("")}
            ${emitTilemapLoad(map)}
        }`
    }

    function emitImageHex(varName: string, encoded: string) {
        return `
        //% fixedInstance
        export const ${escapeIdentifier(varName)} = image.ofBuffer(hex\`${encoded}\`);`
    }

    function emitPalette(varName: string, encoded: string) {
        return `
        namespace palettes {
            //% fixedInstance
            export const ${escapeIdentifier(varName)} = hex\`${encoded}\`;
        }
        `
    }

    function layerName(map: Tilemap, index: number) {
        return escapeIdentifier(`${map.name}_layer_${index}`);
    }

    function tileName(sheet: SpriteSheet, index: number) {
        return escapeIdentifier(`${sheet.info.name}_tile_${index}`);
    }

    function paletteName(palette: Palette) {
        return escapeIdentifier(`palette_${palette.name}`);
    }

    const libTS = `
    class TileMapLayer {
        map: Image;
        tileset: Image[];
        palette: Buffer;
    }

    function loadTileMap(layer: TileMapLayer) {
        scene.setTileMap(layer.map);
        image.setPalette(layer.palette);
        for (let i = 1; i < Math.min(layer.tileset.length, 16); i++) {
            scene.setTile(i, layer.tileset[i - 1]);
        }
    }
    `;
}