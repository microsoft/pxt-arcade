//% color=#70acb4
declare namespace video {
    //% shim=video::getCurrentFrame
    //% blockId=videostream_getCurrentFrame
    //% block="latest frame from stream $stream"
    function getCurrentFrame(stream: int32): Image;

    //% shim=video::setPaletteFromStream
    //% blockId=videostream_setPaletteFromStream
    //% block="set palette from stream $stream"
    function setPaletteFromStream(stream: int32): void;

    //% shim=video::getStreamCount
    //% blockId=videostream_getStreamCount
    //% block="stream count"
    function getStreamCount(): int32;

    //% shim=video::getStreamName
    //% blockId=videostream_getStreamName
    //% block="name of stream $stream"
    function getStreamName(stream: int32): string;

    //% shim=video::getStreamName
    //% blockId=videostream_getDeviceId
    //% block="deviceId of stream $stream"
    function getDeviceId(stream: int32): string;
}