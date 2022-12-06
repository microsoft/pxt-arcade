const fs = require("fs");
const path = require("path");

const simModule = path.resolve("node_modules", "pxt-arcade-sim");
const simSrc = path.resolve("..", "pxt-arcade-sim");

if (fs.existsSync("node_modules")) {
    console.log("Deleting " + simModule)
    fs.rmSync(simModule, { recursive: true, force: true });
}

shallowCopy(simSrc, simModule);
shallowCopy(path.join(simSrc, "components"), path.join(simModule, "components"));
shallowCopy(path.join(simSrc, "public"), path.join(simModule, "public"));

const tsconfig = JSON.parse(fs.readFileSync(path.join(simModule, "tsconfig.json"), "utf8"));

tsconfig.include = tsconfig.include.filter(entry => entry.indexOf("node_modules") === -1);

fs.writeFileSync(path.join(simModule, "tsconfig.json"), JSON.stringify(tsconfig), "utf8")


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