const fs = require("fs");
const path = require("path");

const simModule = path.resolve("node_modules", "pxt-arcade-sim");
const simSrc = path.resolve("..", "pxt-arcade-sim");

if (fs.existsSync("node_modules")) {
    console.log("Deleting " + simModule)
    fs.rmSync(simModule, { recursive: true, force: true });
}

shallowCopy(simSrc, simModule);
shallowCopy(path.join(simSrc, "core"), path.join(simModule, "core"));
shallowCopy(path.join(simSrc, "visuals"), path.join(simModule, "visuals"));
shallowCopy(path.join(simSrc, "visuals", "components"), path.join(simModule, "visuals", "components"));
shallowCopy(path.join(simSrc, "public"), path.join(simModule, "public"));

for (const configName of ["tsconfig.core.json", "tsconfig.json"]) {
    const configPath = path.join(simModule, configName);
    const tsconfig = JSON.parse(fs.readFileSync(configPath, "utf8"));

    tsconfig.include = tsconfig.include.filter(entry => entry.indexOf("node_modules") === -1);

    fs.writeFileSync(configPath, JSON.stringify(tsconfig), "utf8")
}


console.log("done")

function shallowCopy(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }
    const files = fs.readdirSync(src)
        .map(f => path.join(src, f))
        .filter(f => !fs.lstatSync(f).isDirectory());

    for (const file of files) {
        const destPath = path.join(dest, path.basename(file));
        const data = fs.readFileSync(file, "utf8");

        console.log(`${file} -> ${destPath}`);

        fs.writeFileSync(destPath, data, "utf8");
    }
}