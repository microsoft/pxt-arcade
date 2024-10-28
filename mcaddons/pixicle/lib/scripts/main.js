import { world, system, MolangVariableMap, MinecraftDimensionTypes } from "@minecraft/server";
const vars = new MolangVariableMap();
const overworld = world.getDimension(MinecraftDimensionTypes.overworld);
let pos;
const width = 160;
const height = 120;
const scale = 20;
let time = 0;
const step = 2 / 128;
const ONE_SECOND = 20;
const FPS = 0.5;
const animdt = Math.floor(ONE_SECOND / FPS);
const dt = animdt * 0.01;
// Perlin Noise Utilities
function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10); // Smoothing function
}
function lerp(t, a, b) {
    return a + t * (b - a); // Linear interpolation
}
function grad(hash, x, y, z) {
    // Calculate gradient based on hash value
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
    return (h & 1 ? -u : u) + (h & 2 ? -v : v);
}
function perlinNoise(x, y) {
    // Determine grid cell coordinates
    const xi = Math.floor(x) & 255;
    const yi = Math.floor(y) & 255;
    const zi = Math.floor(time) & 255; // Use `time` as the third dimension for animation
    // Local coordinates inside the grid cell
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const zf = time - Math.floor(time); // Fractional part of time
    // Smooth the local coordinates
    const u = fade(xf);
    const v = fade(yf);
    const w = fade(zf);
    // Hash the coordinates of the cube corners
    const aaa = perm[perm[perm[xi] + yi] + zi];
    const aba = perm[perm[perm[xi] + yi + 1] + zi];
    const aab = perm[perm[perm[xi] + yi] + zi + 1];
    const abb = perm[perm[perm[xi] + yi + 1] + zi + 1];
    const baa = perm[perm[perm[xi + 1] + yi] + zi];
    const bba = perm[perm[perm[xi + 1] + yi + 1] + zi];
    const bab = perm[perm[perm[xi + 1] + yi] + zi + 1];
    const bbb = perm[perm[perm[xi + 1] + yi + 1] + zi + 1];
    // Compute the dot products of the gradients
    const gradAAA = grad(aaa, xf, yf, zf);
    const gradBAA = grad(baa, xf - 1, yf, zf);
    const gradABA = grad(aba, xf, yf - 1, zf);
    const gradBBA = grad(bba, xf - 1, yf - 1, zf);
    const gradAAB = grad(aab, xf, yf, zf - 1);
    const gradBAB = grad(bab, xf - 1, yf, zf - 1);
    const gradABB = grad(abb, xf, yf - 1, zf - 1);
    const gradBBB = grad(bbb, xf - 1, yf - 1, zf - 1);
    // Interpolate between dot products
    const x1 = lerp(u, gradAAA, gradBAA);
    const x2 = lerp(u, gradABA, gradBBA);
    const y1 = lerp(v, x1, x2);
    const x3 = lerp(u, gradAAB, gradBAB);
    const x4 = lerp(u, gradABB, gradBBB);
    const y2 = lerp(v, x3, x4);
    return lerp(w, y1, y2);
}
// Generate a permutation table for pseudo-randomness
function generatePermutationTable() {
    const perm = new Array(512);
    const p = [];
    for (let i = 0; i < 256; i++) {
        p.push(i);
    }
    for (let i = 255; i > 0; i--) {
        const n = Math.floor(Math.random() * (i + 1));
        const temp = p[i];
        p[i] = p[n];
        p[n] = temp;
    }
    for (let i = 0; i < 512; i++) {
        perm[i] = p[i & 255];
    }
    return perm;
}
const noiseArray = new Array(width * height); // 1D array for 160x120 grid
// Generate the Perlin noise for a given time value
function generatePerlinNoise() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // Apply scaling and time to create smooth animation
            const nx = x / scale;
            const ny = y / scale;
            // Use time as the z-axis to animate the noise
            const value = (perlinNoise(nx, ny) + 1) / 2;
            // Store the value in the array
            noiseArray[y * width + x] = value;
        }
    }
    return noiseArray;
}
const perm = generatePermutationTable();
// Function to spawn the 100x100 grid of particles
function spawnParticleGrid() {
    var _a;
    if (!pos) {
        pos = (_a = world.getAllPlayers().shift()) === null || _a === void 0 ? void 0 : _a.getHeadLocation();
    }
    if (pos) {
        let errorCount = 0;
        try {
            for (let y = 0, i = 0; y < height; y++) {
                for (let x = 0; x < width; x++, i++) {
                    const position = {
                        x: pos.x - (width * step / 2) + x * step,
                        y: pos.y + (height * step / 3) + y * step,
                        z: pos.z + 1,
                    };
                    const r = noiseArray[i];
                    const g = noiseArray[i];
                    const b = noiseArray[i];
                    // Get a random color for each particle
                    //vars.setFloat("variable.r", Math.random());
                    //vars.setFloat("variable.g", Math.random());
                    //vars.setFloat("variable.b", Math.random());
                    vars.setColorRGB("color", { red: r, green: g, blue: b, r, g, b });
                    // Spawn the particle at the current grid position with the random color
                    try {
                        overworld.spawnParticle("makecode:pixel", position, vars);
                    }
                    catch (_b) {
                        errorCount++;
                    }
                }
            }
            if (errorCount > 0) {
                world.sendMessage(`Error count: ${errorCount}`);
            }
        }
        catch (e) {
            world.sendMessage(`Error: ${e}`);
        }
    }
}
function animate() {
    // Generate Perlin noise for the current time
    generatePerlinNoise();
    // Draw the noise to the canvas
    spawnParticleGrid();
    // Increment time to animate
    time += dt;
    // Loop the animation
    system.runTimeout(animate, animdt);
}
system.runTimeout(() => {
    //world.sendMessage("Hello, Minecraft!");
    system.run(animate);
}, 10);
//# sourceMappingURL=main.js.map