const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

function hexToRGBA(hex) {
    // Remove the '#' if it's present
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values from the hex code
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);
    let a = parseInt(hex.slice(6, 8), 16);

    // Normalize each value by dividing by 255
    return {
        r: r / 255,
        g: g / 255,
        b: b / 255,
        a: a / 255
    };
}

function arrHash(arr) {
    if (arr.length !== 16) {
        throw new Error('Array must contain exactly 16 integers');
    }

    let hashLow = 0;
    let hashHigh = 0;
    const primes = [
        31, 37, 41, 43, 47, 53, 59, 61,
        67, 71, 73, 79, 83, 89, 97, 101
    ]; // 16 distinct prime numbers

    // Helper to rotate bits for better mixing.
    function rotateLeft(value, shift) {
        return (value << shift) | (value >>> (32 - shift));
    }

    for (let i = 0; i < 16; i++) {
        const prime = primes[i];
        const value = arr[i] * prime;

        // Mix into the low 32 bits
        hashLow ^= value;
        hashLow = rotateLeft(hashLow, (i + 1) % 32);

        // Mix into the high 32 bits
        hashHigh ^= value;
        hashHigh = rotateLeft(hashHigh, (i + 5) % 32);  // Rotate differently to mix better
    }

    // Combine high and low 32-bit values into a single 53-bit number.
    // This ensures that we use more of the available number space in JavaScript.
    const combinedHash = ((hashHigh >>> 0) * Math.pow(2, 21)) + (hashLow >>> 0);

    return combinedHash;
}

// Arcade palette
const palette = [
    hexToRGBA("#00000000"),
    hexToRGBA("#ffffffff"),
    hexToRGBA("#ff2121ff"),
    hexToRGBA("#ff93c4ff"),
    hexToRGBA("#ff8135ff"),
    hexToRGBA("#fff609ff"),
    hexToRGBA("#249ca3ff"),
    hexToRGBA("#78dc52ff"),
    hexToRGBA("#003fadff"),
    hexToRGBA("#87f2ffff"),
    hexToRGBA("#8e2ec4ff"),
    hexToRGBA("#a4839fff"),
    hexToRGBA("#5c406cff"),
    hexToRGBA("#e5cdc4ff"),
    hexToRGBA("#91463dff"),
    hexToRGBA("#000000ff"),
];

function generatePermutations(sides, diceCount) {
    const results = [];

    function backtrack(currentRoll) {
        if (currentRoll.length === diceCount) {
            results.push([...currentRoll]);
            return;
        }

        for (let i = 0; i < sides; i++) {
            currentRoll.push(i);
            backtrack(currentRoll);
            currentRoll.pop();
        }
    }

    backtrack([]);
    return results;
}

// Usage: 16-sided dice, 4 dice
const permutations = generatePermutations(16, 4);

console.log(`Total permutations: ${permutations.length}`);
//console.log(permutations);

// Loop over all permutations and generate images. Each image is 2x2 pixels.
const outputBase = path.join(__dirname, "./");
const rpDir = path.join(outputBase, "resource_packs/quadpixel");
const bpDir = path.join(outputBase, "behavior_packs/quadpixel");
if (!fs.existsSync(outputBase)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(rpDir)) {
    fs.mkdirSync(rpDir, { recursive: true });
}
if (!fs.existsSync(bpDir)) {
    fs.mkdirSync(bpDir, { recursive: true });
}

const hashes = new Set();

const blocks_json = {
	"format_version": "1.20.20",
    "minecraft:block": {
        "description": {
            "identifier": "makecode:quadpixel",
            "menu_category": {
				"category": "construction"
			},
            "states": {
                "makecode:quadpixel": {
                    "values": {
                        "min": 0,
                        "max": 0
                    }
                }
            }
        },
        "components": {
			"minecraft:collision_box": true,
			"minecraft:selection_box": true,
			"minecraft:destructible_by_mining": {
				"seconds_to_destroy": 1
			},
			"minecraft:destructible_by_explosion": {
				"explosion_resistance": 30
			},
            "minecraft:material_instances": {
                "*": {
                    "texture": "tex_quadpixel_239005307228421",
                    "render_method": "opaque"
                }
            }
        },
        "permutations": [
        ]
    }
}

const terrain_texture_json = {
	"resource_pack_name": "vanilla",
	"texture_name": "atlas.terrain",
    "padding": 0,
    "num_mip_levels": 4,
    "texture_data": {}
}


// Create a single texture, a "texture atlas", that will contain all permutations
// Each permutation will be a 2x2 pixel block
// The size of texture atlas must be a power of 2 and large enough to contain all permutations

const TEXTURE_ATLAS_WIDTH = 512;
const TEXTURE_ATLAS_HEIGHT = 512;
const textureAtlas = new Uint8Array(TEXTURE_ATLAS_WIDTH * TEXTURE_ATLAS_HEIGHT * 4);
const blockPermutations = [];
const textureData = {};

let currX = 0;
let currY = 0;
let minHash = Number.MAX_SAFE_INTEGER;
let maxHash = Number.MIN_SAFE_INTEGER;

permutations.forEach(async (permutation, index) => {
    //console.log(`${index}: ${permutation}@${currX},${currY}`);
    const pixels = new Uint8Array(2 * 2 * 4);
    for (let i = 0; i < 4; i++) {
        const color = palette[permutation[i]];
        const r = Math.round(color.r * 255);
        const g = Math.round(color.g * 255);
        const b = Math.round(color.b * 255);
        const a = Math.round(color.a * 255);
        pixels[i * 4 + 0] = r;
        pixels[i * 4 + 1] = g;
        pixels[i * 4 + 2] = b;
        pixels[i * 4 + 3] = a;
    }

    const hash = arrHash(pixels);
    if (hashes.has(hash)) {
        console.error(`Hash collision detected: ${hash} after ${hashes.size} entries. Pick another algorithm.`);
        process.exit(1);
    }
    hashes.add(hash);
    if (hash < minHash) {
        minHash = hash;
    }
    if (hash > maxHash) {
        maxHash = hash;
    }

    // Write to texture atlas pixel buffer
    const idx = (currY * TEXTURE_ATLAS_WIDTH + currX) * 4;
    for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 2; y++) {
            const srcIdx = (y * 2 + x) * 4;
            const dstIdx = idx + (y * TEXTURE_ATLAS_WIDTH + x) * 4;
            textureAtlas[dstIdx + 0] = pixels[srcIdx + 0];
            textureAtlas[dstIdx + 1] = pixels[srcIdx + 1];
            textureAtlas[dstIdx + 2] = pixels[srcIdx + 2];
            textureAtlas[dstIdx + 3] = pixels[srcIdx + 3];
        }
    }

    blockPermutations.push({
        "condition": `query.block_state('makecode:quadpixel') == ${hash}`,
        "components": {
            "minecraft:material_instances": {
                "*": {
                    "texture": `tex_quadpixel_${ hash }`,
                }
            }
        }
    })

    textureData[`tex_quadpixel_${ hash }`] = {
        "textures": `textures/blocks/quadpixel_${hash}`,
    }

    // Write this quad to a file
    const filename = `quadpixel_${hash}.png`;
    await sharp(Buffer.from(pixels), {
        raw: {
            width: 2,
            height: 2,
            channels: 4
        }
    }).png().toFile(path.join(rpDir, "textures", "blocks", filename));

    currX += 2;
    if (currX >= TEXTURE_ATLAS_WIDTH) {
        currX = 0;
        currY += 2;
    }
});

// Write the texture atlas
const textureAtlasFilename = "quadpixel_atlas.png";
sharp(Buffer.from(textureAtlas), {
    raw: {
        width: TEXTURE_ATLAS_WIDTH,
        height: TEXTURE_ATLAS_HEIGHT,
        channels: 4
    }
}).png().toFile(path.join(rpDir, "textures", "blocks", textureAtlasFilename));

// Write blocks.json
blocks_json["minecraft:block"].description.states["makecode:quadpixel"].values.max = minHash;
blocks_json["minecraft:block"].description.states["makecode:quadpixel"].values.max = maxHash;
blocks_json["minecraft:block"].permutations = blockPermutations;
fs.writeFileSync(path.join(bpDir, "blocks", "quadpixel.block.json"), JSON.stringify(blocks_json, null, 4));

// Write terrain_texture.json
terrain_texture_json.texture_data = textureData;
fs.writeFileSync(path.join(rpDir, "textures", "terrain_texture.json"), JSON.stringify(terrain_texture_json, null, 4));
