// scripts/main.ts
import { world, system, MolangVariableMap, MinecraftDimensionTypes } from "@minecraft/server";
var vars = new MolangVariableMap();
var overworld = world.getDimension(MinecraftDimensionTypes.overworld);
var pos;
var width = 160;
var height = 120;
var scale = 20;
var time = 0;
var step = 2 / 128;
var ONE_SECOND = 20;
var FPS = 0.5;
var animdt = Math.floor(ONE_SECOND / FPS);
var dt = animdt * 0.01;
function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(t, a, b) {
  return a + t * (b - a);
}
function grad(hash, x, y, z) {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return (h & 1 ? -u : u) + (h & 2 ? -v : v);
}
function perlinNoise(x, y) {
  const xi = Math.floor(x) & 255;
  const yi = Math.floor(y) & 255;
  const zi = Math.floor(time) & 255;
  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);
  const zf = time - Math.floor(time);
  const u = fade(xf);
  const v = fade(yf);
  const w = fade(zf);
  const aaa = perm[perm[perm[xi] + yi] + zi];
  const aba = perm[perm[perm[xi] + yi + 1] + zi];
  const aab = perm[perm[perm[xi] + yi] + zi + 1];
  const abb = perm[perm[perm[xi] + yi + 1] + zi + 1];
  const baa = perm[perm[perm[xi + 1] + yi] + zi];
  const bba = perm[perm[perm[xi + 1] + yi + 1] + zi];
  const bab = perm[perm[perm[xi + 1] + yi] + zi + 1];
  const bbb = perm[perm[perm[xi + 1] + yi + 1] + zi + 1];
  const gradAAA = grad(aaa, xf, yf, zf);
  const gradBAA = grad(baa, xf - 1, yf, zf);
  const gradABA = grad(aba, xf, yf - 1, zf);
  const gradBBA = grad(bba, xf - 1, yf - 1, zf);
  const gradAAB = grad(aab, xf, yf, zf - 1);
  const gradBAB = grad(bab, xf - 1, yf, zf - 1);
  const gradABB = grad(abb, xf, yf - 1, zf - 1);
  const gradBBB = grad(bbb, xf - 1, yf - 1, zf - 1);
  const x1 = lerp(u, gradAAA, gradBAA);
  const x2 = lerp(u, gradABA, gradBBA);
  const y1 = lerp(v, x1, x2);
  const x3 = lerp(u, gradAAB, gradBAB);
  const x4 = lerp(u, gradABB, gradBBB);
  const y2 = lerp(v, x3, x4);
  return lerp(w, y1, y2);
}
function generatePermutationTable() {
  const perm2 = new Array(512);
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
    perm2[i] = p[i & 255];
  }
  return perm2;
}
var noiseArray = new Array(width * height);
function generatePerlinNoise() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const nx = x / scale;
      const ny = y / scale;
      const value = (perlinNoise(nx, ny) + 1) / 2;
      noiseArray[y * width + x] = value;
    }
  }
  return noiseArray;
}
var perm = generatePermutationTable();
function spawnParticleGrid() {
  if (!pos) {
    pos = world.getAllPlayers().shift()?.getHeadLocation();
  }
  if (pos) {
    let errorCount = 0;
    try {
      for (let y = 0, i = 0; y < height; y++) {
        for (let x = 0; x < width; x++, i++) {
          const position = {
            x: pos.x - width * step / 2 + x * step,
            y: pos.y + height * step / 3 + y * step,
            z: pos.z + 1
          };
          const r = noiseArray[i];
          const g = noiseArray[i];
          const b = noiseArray[i];
          vars.setColorRGB("color", { red: r, green: g, blue: b, r, g, b });
          try {
            overworld.spawnParticle("makecode:pixel", position, vars);
          } catch {
            errorCount++;
          }
        }
      }
      if (errorCount > 0) {
        world.sendMessage(`Error count: ${errorCount}`);
      }
    } catch (e) {
      world.sendMessage(`Error: ${e}`);
    }
  }
}
function animate() {
  generatePerlinNoise();
  spawnParticleGrid();
  time += dt;
  system.runTimeout(animate, animdt);
}
system.runTimeout(() => {
  system.run(animate);
}, 10);

//# sourceMappingURL=../debug/main.js.map
