namespace SpriteKind {
    export const _TileSprite = SpriteKind.create()
}

//% color=#84b89f icon="\uf279"
//% block="Tilemaps"
//% groups='["Sprites", "Cover", "Tiles", "Location", "Camera"]'
namespace tiles {
    //
    // Cover
    //

    /**
     * Cover the tile at a given location with a sprite of a tile image.
     * This sprite is of kind "_TileSprite" and will be automatically removed when
     * loading to a new tilemap. Further, it has the "ghost" property enabled and
     * will not collide with other sprites.
     */

    /**
     * Cover the tile at a given location with a sprite of a tile image.
     * This sprite is of kind "_TileSprite" and will be automatically removed when
     * loading to a new tilemap. Further, it has the "ghost" property enabled and
     * will not collide with other sprites.
     */
    export function createTileSprite(location: tiles.Location, cover: Image): Sprite {
        // NOTE: This block has been disabled because it was deemed too confusing
        //% block="sprite from tile $cover at $location"
        //% cover.shadow=tileset_tile_picker
        //% cover.decompileIndirectFixedInstances=true
        //% group="Cover" weight=50 blockGap=8
        //% location.shadow=mapgettile
        //% blockSetVariable=myTileSprite

        const coverSprite = sprites.create(cover, SpriteKind._TileSprite);
        coverSprite.setFlag(SpriteFlag.Ghost, true);
        coverSprite.z = -1;
        tiles.placeOnTile(coverSprite, location);
        return coverSprite
    }

    /**
     * Cover all tiles of a given kind with a sprite of a tile image.
     * These sprites are of kind "_TileSprite" and will be automatically removed when
     * loading to a new tilemap. Further, they have the "ghost" property enabled and
     * will not collide with other sprites.
     */
    //% block="cover all $tileKind tiles with $cover"
    //% blockId=tilemap_coverAllTiles
    //% tileKind.shadow=tileset_tile_picker
    //% tileKind.decompileIndirectFixedInstances=true
    //% cover.shadow=tileset_tile_picker
    //% cover.decompileIndirectFixedInstances=true
    //% group="Cover" weight=40 blockGap=8
    export function coverAllTiles(tileKind: Image, cover: Image) {
        forEachTileOfKind(tileKind, loc => createTileSprite(loc, cover));
    }

    //
    // Sprites
    //

    /**
     * On each tile of a given kind, create a sprite of a given SpriteKind. 
     * Useful to use with the "on created [...]" sprite block.
     */
    //% block="on each $tileKind tile create sprite of kind $spriteKind"
    //% blockId=tilemap_createSpritesOnTiles
    //% tileKind.shadow=tileset_tile_picker
    //% tileKind.decompileIndirectFixedInstances=true
    //% spriteKind.shadow=spritekind
    //% group="Sprites" weight=30 blockGap=8
    export function createSpritesOnTiles(tileKind: Image, spriteKind: number) {
        const scene = game.currentScene();

        const createdHandlers = scene.createdHandlers
            .filter(h => h.kind == spriteKind);

        forEachTileOfKind(tileKind, loc => {
            const sprite = new Sprite(img`.`)
            sprite.setKind(spriteKind);
            scene.physicsEngine.addSprite(sprite);

            // Place on tile so that it can be used in the created
            // handlers
            tiles.placeOnTile(sprite, loc);

            for (const cb of createdHandlers) cb.handler(sprite)

            // The sprite image might have been set by the handler,
            // causing the sprite to change dimensions and be
            // off-center. Place it a second time to correct that
            tiles.placeOnTile(sprite, loc);
        });
    }

    /**
     * Destroy all sprites of a given kind. Useful when switching
     * between tilemaps.
     */
    //% block="destroy all sprites of kind $spriteKind"
    //% blockId=tilemap_destorySpritesOfKind
    //% spriteKind.shadow=spritekind
    //% group="Sprites" weight=9 blockGap=8
    export function destroySpritesOfKind(spriteKind: number) {
        sprites.allOfKind(spriteKind).forEach(s => s.destroy());
    }

    //
    // Tiles
    //

    /**
     * Determines if the tile in the loaded tilemap at the given location
     * is of a particular kind.
     */
    //% block="tile at $location is $tile"
    //% blockId=tilemap_tileIs
    //% location.shadow=mapgettile
    //% tile.shadow=tileset_tile_picker
    //% tile.decompileIndirectFixedInstances=true
    //% group="Tiles" weight=80
    export function tileIs(location: tiles.Location, tile: Image): boolean {
        return tileIsCore(locationColumn(location), locationRow(location), tile);
    }

    /**
     * Determines if the tile in the loaded tilemap at the given location
     * is a wall.
     */
    //% block="tile at $location is wall"
    //% blockId=tilemap_tileIsWall
    //% location.shadow=mapgettile
    //% group="Tiles" weight=79
    export function tileIsWall(location: tiles.Location): boolean {
        const tm = game.currentScene().tileMap;

        return tm ? tm.isObstacle(locationColumn(location), locationRow(location)) : false;
    }

    function tileIsCore(col: number, row: number, tile: Image): boolean {
        return tile.equals(tiles.getTileAt(col, row));
    }

    /**
     * Gets the image of the current tile at a location.
     */
    //% block="tile at $location"
    //% blockId=tilemap_tileAtLocation
    //% location.shadow=mapgettile
    //% group="Tiles" weight=80
    export function getTileAtLocation(location: tiles.Location): Image {
        return tiles.getTileAt(locationColumn(location), locationRow(location))
    }

    /**
     * Executes a piece of code for every tile of a given kind in the loaded
     * tilemap.
     */
    export function forEachTileOfKind(tileKind: Image, cb: (location: tiles.Location) => void) {
        // TODO: handlerStatement does not work right due to a bug in pxt-core
        // block="for each $tileKind tile at $location"
        // draggableParameters="reporter" handlerStatement
        // tileKind.shadow=tileset_tile_picker
        // tileKind.decompileIndirectFixedInstances=true
        // group="Tiles" weight=70 blockGap=8
        const height = tilemapRows();
        const width = tilemapColumns();

        for (let c = 0; c < width; c++) {
            for (let r = 0; r < height; r++) {
                if (tileIsCore(c, r, tileKind)) cb(tiles.getTileLocation(c, r));
            }
        }
    }

    /**
     * Executes a piece of code for every tile in the loaded tilemap
     */
    export function forEachTileOfMap(cb: (location: tiles.Location, tile: Image) => void) {
        // TODO: handlerStatement does not work right due to a bug in pxt-core
        // block="for each tile at $location with image $tile"
        // draggableParameters="reporter" handlerStatement
        // group="Tiles" weight=60
        const height = tilemapRows();
        const width = tilemapColumns();

        for (let c = 0; c < width; c++) {
            for (let r = 0; r < height; r++) {
                cb(tiles.getTileLocation(c, r), tiles.getTileAt(c, r));
            }
        }
    }

    /**
     * Replace all tiles of a given kind in the loaded tilemap with
     * another tile.
     */
    //% block="replace all $from tiles with $to"
    //% blockId=tilemap_replaceAllTiles
    //% from.shadow=tileset_tile_picker
    //% from.decompileIndirectFixedInstances=true
    //% to.shadow=tileset_tile_picker
    //% to.decompileIndirectFixedInstances=true
    //% group="Tiles" weight=20
    export function replaceAllTiles(from: Image, to: Image) {
        forEachTileOfKind(from, loc =>
            tiles.setTileAt(loc, to)
        );
    }

    /**
     * Gets the neighboring column in the given direction.
     */
    export function columnInDirection(column: number, direction: number) {
        if (direction === CollisionDirection.Right) return column + 1;
        else if (direction === CollisionDirection.Left) return column - 1;
        else return column;
    }

    /**
     * Gets the neighboring row in the given direction.
     */
    export function rowInDirection(row: number, direction: number) {
        if (direction === CollisionDirection.Top) return row - 1;
        else if (direction === CollisionDirection.Bottom) return row + 1;
        else return row;
    }

    /**
     * Executes a piece of code for each direction of Top, Right, Bottom, Left starting at Top
     * and going clockwise.
     */
    export function forEachDirection(cb: (direction: CollisionDirection) => void) {
        // TODO: handlerStatement does not work right due to a bug in pxt-core
        // block="for each direction $direction"
        // draggableParameters="reporter" handlerStatement
        // group="Tiles" weight=20
        cb(CollisionDirection.Top);
        cb(CollisionDirection.Right);
        cb(CollisionDirection.Bottom);
        cb(CollisionDirection.Left);
    }

    //
    // Camera
    //

    /**
     * Center the camera on a given tile location.
     */
    //% block="center camera on $location"
    //% blockId=tilemap_createCameraOnTile
    //% group="Camera" weight=10 blockGap=8
    //% location.shadow=mapgettile
    export function centerCameraOnTile(location: tiles.Location) {
        scene.centerCameraAt(location.x, location.y);
    }

    //
    // Location
    //

    /**
     * Gets the tile location of a sprite.
     */
    //% block="location of $s"
    //% blockId=tilemap_locationOfSprite
    //% s.shadow=variables_get
    //% s.defl=mySprite
    //% group="Location" weight=90 blockGap=8
    export function locationOfSprite(s: Sprite): tiles.Location {
        return tiles.getTileLocation(screenCoordinateToTile(s.x), screenCoordinateToTile(s.y));
    }

    export enum RowCol {
        column,
        row,
    }

    /**
     * Gets a sprite's row or column.
     */
    export function spriteRowCol(sprite: Sprite, rowCol: RowCol) {
        // NOTE: This block has been disabled because it was deemed redundant
        //% block="$sprite $rowCol"
        //% sprite.shadow=variables_get
        //% sprite.defl=mySprite
        //% group="Location" weight=80
        return screenCoordinateToTile(rowCol === RowCol.row ? sprite.x : sprite.y)
    }

    /**
     * Gets the tilemap column of a tile location
     */
    export function locationColumn(location: tiles.Location): number {
        // NOTE: This block has been disabled because it was deemed too confusing
        //% block="$location column"
        //% location.shadow=variables_get
        //% location.defl=location
        //% group="Location" weight=50 blockGap=8
        return screenCoordinateToTile(location.x);
    }

    /**
     * Gets the tilemap row of a tile location
     */
    export function locationRow(location: tiles.Location): number {
        // NOTE: This block has been disabled because it was deemed too confusing
        //% block="$location row"
        //% location.shadow=variables_get
        //% location.defl=location
        //% group="Location" weight=50 blockGap=8
        return screenCoordinateToTile(location.y);
    }

    export enum XY {
        column,
        row,
        x,
        y,
        top,
        left,
        right,
        bottom,
    }

    /**
     * Get's the world x or y position from a tile row column location.
     */
    //% block="$location $xy"
    //% blockId=tilemap_locationXY
    //% location.shadow=variables_get
    //% location.defl=location
    //% group="Location" weight=45 blockGap=8
    export function locationXY(location: tiles.Location, xy: XY) {
        if (xy === XY.row)
            return screenCoordinateToTile(location.y)
        else if (xy === XY.column)
            return screenCoordinateToTile(location.x)

        switch (xy) {
            case XY.x:
                return location.x
            case XY.y:
                return location.y
            case XY.left:
                return location.x - tileWidth() / 2
            case XY.right:
                return location.x + tileWidth() / 2
            case XY.top:
                return location.y - tileWidth() / 2
            case XY.bottom:
                return location.y + tileWidth() / 2
        }
        return undefined
    }

    /**
     * Starting from a tile location, get the neighboring tile location in the given direction.
     */
    //% block="location $direction of $location"
    //% blockId=tilemap_locationInDirection
    //% direction.shadow=direction_editor
    //% location.shadow=variables_get
    //% location.defl=location
    //% group="Location" weight=40
    export function locationInDirection(location: tiles.Location, direction: number) {
        return tiles.getTileLocation(
            columnInDirection(locationColumn(location), direction),
            rowInDirection(locationRow(location), direction)
        );
    }

    //% blockId=direction_editor shim=TD_ID
    //% block="$direction"
    //% group="Location" weight=10
    export function _directionEditor(direction: CollisionDirection): CollisionDirection {
        return direction;
    }

    /**
     * Returns the width of tiles in the loaded tilemap.
     */
    //% block="tile width"
    //% blockId=tilemap_tileWidth
    //% group="Location" weight=15
    export function tileWidth(): number {
        const tm = game.currentScene().tileMap;

        if (!tm) return 0;
        return 1 << tm.scale;
    }

    /**
     * Returns the number of columns in the currently loaded tilemap.
     */
    //% block="total tilemap columns"
    //% blockId=tilemap_tilemapColumns
    //% group="Location" weight=16 blockGap=8
    export function tilemapColumns(): number {
        const tm = game.currentScene().tileMap;

        if (!tm) return 0;
        const height = tm.areaHeight() >> tm.scale;
        return tm.areaWidth() >> tm.scale;
    }

    /**
     * Returns the number of rows in the currently loaded tilemap.
     */
    //% block="total tilemap rows"
    //% blockId=tilemap_tilemapRows
    //% group="Location" weight=17 blockGap=8
    export function tilemapRows(): number {
        const tm = game.currentScene().tileMap;

        if (!tm) return 0;
        return tm.areaHeight() >> tm.scale;
    }

    /**
     * Converts a screen coordinate to a tilemap location.
     */
    export function screenCoordinateToTile(value: number) {
        // NOTE: This block has been disabled because it was deemed too confusing
        //% block="screen coordinate $value to tile location"
        //% group="Location" weight=30 blockGap=8
        const tm = game.currentScene().tileMap;
        if (!tm) return value >> 4;
        return value >> tm.scale;
    }

    /**
     * Converts a tilemap location to a screen coordinate.
     */
    export function tileCoordinateToScreen(value: number) {
        // NOTE: This block has been disabled because it was deemed too confusing
        //% block="tile coordinate $value to screen coordinate"
        //% group="Location" weight=20 blockGap=8
        const tm = game.currentScene().tileMap;
        if (!tm) return value << 4;
        return value << tm.scale;
    }

    /**
     * Converts a tilemap coordinate to a screen coordinate and
     * adds half a tile width.
     */
    export function centeredTileCoordinateToScreen(value: number) {
        // NOTE: This block has been disabled because it was deemed too confusing
        //% block="centered tile coordinate $value to screen coordinate"
        //% group="Location" weight=10 blockGap=8
        const tm = game.currentScene().tileMap;
        if (!tm) return (value << 4) + 8;
        return (value << tm.scale) + (1 << (tm.scale - 1));
    }
}
