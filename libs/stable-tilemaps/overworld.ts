namespace ConnectionKind {
    /**
     * Gets the "kind" of tilemap connection
     */
    //% shim=KIND_GET
    //% blockId="connection_kind" block="$kind"
    //% kindNamespace=ConnectionKind kindMemberName=kind kindPromptHint="e.g. Door1, Tunnel1, ..."
    //% blockHidden=true
    export function _connectionKind(kind: number): number {
        return kind;
    }

    let nextKind: number
    export function create() {
        if (nextKind === undefined) nextKind = 1;
        return nextKind++;
    }

    //% isKind
    export const Door1 = create();

    //% isKind
    export const Door2 = create();

    //% isKind
    export const Ladder1 = create();

    //% isKind
    export const Pipe1 = create();
}

//% color=#84b89f icon="\uf279"
//% groups='["Sprites", "Cover", "Tiles", "Creation", "Connections", "Location", "Camera"]'
namespace tiles {
    export const OVERWORLD_MAP_ID = 7686;
    export const MAP_LOADED_EVENT = 7687;

    export class WorldMap {
        tilemap: tiles.TileMapData;
        connections: WorldMapConnection[];

        constructor(tilemap: tiles.TileMapData) {
            this.tilemap = tilemap;
            this.connections = [];
        }
    }

    export class WorldMapConnection {
        constructor(public readonly id: number, public map: WorldMap) {
        }
    }

    class OverWorldState {
        protected static instance: OverWorldState;

        static getInstance(): OverWorldState {
            if (!OverWorldState.instance) OverWorldState.instance = new OverWorldState();
            return OverWorldState.instance;
        }

        static callUnloadListeners() {
            const state = OverWorldState.getInstance();

            for (const listener of state.getUnloadListeners())
                listener(getLoadedMap());
        }

        public loadedColumn: number;
        public loadedRow: number;
        public loadedMap: WorldMap;
        public locations: WorldMap[][];

        protected listeners: ((map: WorldMap) => void)[];

        protected constructor() {
            this.listeners = [];
            this.locations = [];
            this.loadedColumn = -1;
            this.loadedRow = -1;
        }

        getUnloadListeners() {
            return this.listeners;
        }

        addUnloadListener(cb: (map: WorldMap) => void) {
            this.listeners.push(cb);
        }

        setMapAtLocation(worldColumn: number, worldRow: number, map: WorldMap) {
            if (!this.locations[worldColumn]) this.locations[worldColumn] = [];

            this.locations[worldColumn][worldRow] = map;
        }

        getMapAtLocation(worldColumn: number, worldRow: number) {
            if (worldColumn < 0 || worldRow < 0 || !this.locations[worldColumn]) return undefined;
            return this.locations[worldColumn][worldRow];
        }
    }

    //
    // Creation
    //

    /**
     * Creates a tilemap that can be connected to other tilemaps through the overworld.
     */
    //% blockId=create_overworld_map
    //% block="tilemap $tilemap"
    //% tilemap.fieldEditor="tilemap"
    //% tilemap.fieldOptions.decompileArgumentAsString="true"
    //% tilemap.fieldOptions.filter="tile"
    //% tilemap.fieldOptions.taggedTemplate="tilemap"
    //% group="Creation" weight=50 blockGap=8
    //% duplicateShadowOnDrag
    export function createMap(tilemap: tiles.TileMapData): WorldMap {
        return new WorldMap(tilemap);
    }

    /**
     * Creates a tilemap with 8x8 tiles that can be connected to other tilemaps through the overworld.
     */
    //% blockId=create_small_overworld_map
    //% block="8x8 tilemap $tilemap"
    //% tilemap.fieldEditor="tilemap"
    //% tilemap.fieldOptions.decompileArgumentAsString="true"
    //% tilemap.fieldOptions.filter="tile"
    //% tilemap.fieldOptions.taggedTemplate="tilemap"
    //% tilemap.fieldOptions.tileWidth=8
    //% tilemap.fieldOptions.initWidth=20
    //% tilemap.fieldOptions.initHeight=15
    //% group="Creation" weight=49 blockGap=8
    //% duplicateShadowOnDrag
    export function createSmallMap(tilemap: tiles.TileMapData): WorldMap {
        return createMap(tilemap);
    }

    /**
     * Copy an existing tilemap but without the connections.
     */
    //% block="copy $map"
    //% blockId=tilemap_copyMap
    //% map.shadow=variables_get
    //% map.defl=tilemap
    //% group="Creation" weight=25 blockGap=8
    export function copyMap(map: WorldMap): WorldMap {
        let newData = tiles.createTilemap(
            (map.tilemap as any).data,
            (map.tilemap as any).layers,
            (map.tilemap as any).tileset,
            map.tilemap.scale);
        return new WorldMap(newData);
    }

    /**
     * Sets the current overworld tilemap.
     */
    //% block="set current tilemap to $map"
    //% blockId=tilemap_loadMap
    //% map.shadow=create_overworld_map
    //% group="Creation" weight=40 blockGap=8
    export function loadMap(map: WorldMap) {
        const loaded = getLoadedMap();

        tiles.destroySpritesOfKind(SpriteKind._TileSprite)

        if (loaded) {
            OverWorldState.callUnloadListeners();
        }

        OverWorldState.getInstance().loadedMap = map;

        if (map) {
            scene.setTileMapLevel(map.tilemap);
            control.raiseEvent(OVERWORLD_MAP_ID, MAP_LOADED_EVENT)
        }
        else {
            game.currentScene().tileMap = null;
        }
    }

    /**
     * Returns the loaded overworld tilemap.
     */
    //% block="current tilemap"
    //% blockId=tilemap_getLoadedMap
    //% group="Creation" weight=30
    export function getLoadedMap(): WorldMap {
        return OverWorldState.getInstance().loadedMap
    }

    /**
     * Runs code when an overworld tilemap is loaded.
     */
    //% block="on tilemap loaded $tilemap"
    //% blockId=tilemap_onMapLoaded
    //% draggableParameters="reporter"
    //% group="Creation" weight=20 blockGap=8
    export function onMapLoaded(cb: (tilemap: WorldMap) => void) {
        control.onEvent(OVERWORLD_MAP_ID, MAP_LOADED_EVENT, function () {
            cb(getLoadedMap());
        });
    }

    /**
     * Runs code when an overworld tilemap is unloaded.
     */
    //% block="on tilemap unloaded $tilemap"
    //% blockId=tilemap_onMapUnloaded
    //% draggableParameters="reporter"
    //% group="Creation" weight=10 blockGap=8
    export function onMapUnloaded(cb: (tilemap: WorldMap) => void) {
        OverWorldState.getInstance().addUnloadListener(cb);
    }

    //
    // Connections
    //

    function connectMapByIdCore(sourceMap: WorldMap, destination: WorldMap, connectionID: number) {
        if (!sourceMap) return;

        for (const connection of sourceMap.connections) {
            if (connection.id === connectionID) {
                connection.map = destination;
                return;
            }
        }
        sourceMap.connections.push(new WorldMapConnection(connectionID, destination));
    }

    /**
     * Connects two tilemaps with a connection name or number.
     * Connections work in both ways and are remembered by both tilemaps.
     */
    //% block="connect $tilemap1 and $tilemap2 by $connection"
    //% blockId=tilemap_connectMapById
    //% tilemap1.shadow=variables_get
    //% tilemap1.defl=tilemap1
    //% tilemap2.shadow=variables_get
    //% tilemap2.defl=tilemap2
    //% connection.shadow=connection_kind
    //% group="Connections" weight=40 blockGap=8
    export function connectMapById(tilemap1: WorldMap, tilemap2: WorldMap, connection: number) {
        connectMapByIdCore(tilemap1, tilemap2, connection);
        connectMapByIdCore(tilemap2, tilemap1, connection);
    }

    /**
     * Loads the overworld tilemap connected to the current tilemap by the
     * given connection name or number.
     */
    //% block="load tilemap connected by $connection"
    //% blockId=tilemap_loadConnectedMap
    //% connection.shadow=connection_kind
    //% group="Connections" weight=30 blockGap=8
    export function loadConnectedMap(connection: number) {
        const nextMap = getConnectedMap(getLoadedMap(), connection)
        if (nextMap) {
            loadMap(nextMap);
        }
    }


    /**
     * Gets the destination tilemap connected to the source tilemap by the given connection name or number.
     */
    //% block="get tilemap connected to $tilemap by $connection"
    //% blockId=tilemap_getConnectedMap
    //% tilemap.shadow=variables_get
    //% tilemap.defl=tilemap
    //% connection.shadow=connection_kind
    //% group="Connections" weight=10 blockGap=8
    export function getConnectedMap(tilemap: WorldMap, connection: number): WorldMap {
        if (!tilemap) return null;

        for (const other of tilemap.connections) {
            if (other.id === connection) return other.map;
        }

        return null;
    }

    //
    // Overworld Grid
    // NOTE: All of these blocks have been disabled because they were deemed too confusing
    //

    /**
     * Assign the tilemap to the specified column and row in the overworld grid.
     */
    export function setWorldLocationToMap(worldColumn: number, worldRow: number, map: WorldMap) {
        //% block="set tilemap at overworld col $worldColumn row $worldRow to $map"
        //% map.shadow=create_overworld_map
        //% group="Overworld Grid" weight=60 blockGap=8
        OverWorldState.getInstance().setMapAtLocation(worldColumn, worldRow, map);
    }

    /**
     * Loads the tilemap at a given column and row from the
     * overworld grid.
     */
    export function loadMapAt(worldColumn: number, worldRow: number) {
        //% block="load tilemap at overworld col $worldColumn row $worldRow"
        //% group="Overworld Grid" weight=50 blockGap=8
        loadMap(getMapAtWorldLocation(worldColumn, worldRow));
        OverWorldState.getInstance().loadedColumn = worldColumn;
        OverWorldState.getInstance().loadedRow = worldRow;
    }

    /**
     * Get the tilemap at the given column and row from the overworld grid.
     */
    export function getMapAtWorldLocation(worldColumn: number, worldRow: number): WorldMap {
        //% block="get tilemap at overworld col $worldColumn row $worldRow"
        //% group="Overworld Grid" weight=30 blockGap=8
        return OverWorldState.getInstance().getMapAtLocation(worldColumn, worldRow);
    }

    /**
     * Loads the tilemap adjacent to the loaded tilemap in the
     * given direction from the overworld.
     */
    export function loadMapInDirection(direction: number) {
        //% block="load tilemap in direction $direction"
        //% direction.shadow=direction_editor
        //% group="Overworld Grid" weight=40
        loadMapAt(
            tiles.columnInDirection(loadedWorldColumn(), direction),
            tiles.rowInDirection(loadedWorldRow(), direction)
        );
    }

    /**
     * Get the column of the loaded tilemap in the overworld.
     */
    export function loadedWorldColumn() {
        //% block="loaded overworld column"
        //% group="Overworld Grid" weight=20 blockGap=8
        return OverWorldState.getInstance().loadedColumn;
    }

    /**
     * Get the row of the loaded tilemap in the overworld.
     */
    export function loadedWorldRow() {
        //% block="loaded overworld row"
        //% group="Overworld Grid" weight=10 blockGap=8
        return OverWorldState.getInstance().loadedRow;
    }
}
