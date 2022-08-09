#!/usr/bin/env node
"use strict";

const UF2_MAGIC_START0 = 0x0A324655 // "UF2\n"
const UF2_MAGIC_START1 = 0x9E5D5157 // Randomly selected
const UF2_MAGIC_END = 0x0AB16F30   // Ditto

const fs = require("fs")
const fn = process.argv[2]
if (!fn)
    throw "USAGE: node empty-rp2040-cfg.js output.uf2"

const familyID = 0xe48bff56
const flags = 0x00002000  // familyID present

const cfgSize = 4096
const offsets = [
    1 * 1024 * 1024,
    2 * 1024 * 1024,
    4 * 1024 * 1024,
    8 * 1024 * 1024,
    16 * 1024 * 1024,
    32 * 1024 * 1024,
]

const dataSize = offsets.length * cfgSize
const numBlocks = dataSize >> 8
const outp = []

const CFG_MAGIC0 = 0x1e9e10f1
const CFG_MAGIC1 = 0x20227a79

function addBlock(pos, buf) {
    const bl = Buffer.alloc(512)
    bl.writeUInt32LE(UF2_MAGIC_START0, 0)
    bl.writeUInt32LE(UF2_MAGIC_START1, 4)
    bl.writeUInt32LE(flags, 8)
    bl.writeUInt32LE(pos, 12)
    bl.writeUInt32LE(256, 16)
    bl.writeUInt32LE(outp.length, 20)
    bl.writeUInt32LE(numBlocks, 24)
    bl.writeUInt32LE(familyID, 28) // reserved
    for (let i = 0; i < 256; ++i)
        bl[i + 32] = buf ? (buf[i] || 0x00) : 0x00
    bl.writeUInt32LE(UF2_MAGIC_END, 512 - 4)
    outp.push(bl)
}


const hdBlock = Buffer.alloc(256)
hdBlock.writeUInt32LE(CFG_MAGIC0, 0)
hdBlock.writeUInt32LE(CFG_MAGIC1, 4)
hdBlock.writeUInt32LE(0, 8)
hdBlock.writeUInt32LE((cfgSize / 4 / 2) - 6, 12)

const XIP_BASE = 0x10000000
for (const off of offsets) {
    for (let x = 0; x < cfgSize; x += 256) {
        addBlock(XIP_BASE + off - cfgSize + x, x == 0 ? hdBlock : null)
    }
}

if (numBlocks != outp.length) throw "oops";

fs.writeFileSync(fn, Buffer.concat(outp))
console.log(`Wrote ${numBlocks} blocks to ${fn}`)
