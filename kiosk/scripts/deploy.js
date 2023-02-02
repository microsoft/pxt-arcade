// This script is run from within the kiosk/ directory

const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const configPath = path.resolve("./src/config.json");
const outPath = path.resolve("../docs/static/kiosk/");
const buildpath = path.resolve("./build");

console.log("reading config")

const configContents = JSON.parse(fs.readFileSync(configPath, "utf8").trim());

// Save to restore once build is completed
const debugSetting = configContents.Debug;

configContents.Debug = false;

console.log("overwriting config")
fs.writeFileSync(configPath, JSON.stringify(configContents, null, 4));

try {
    console.log("rm -rf " + outPath)
    fs.rmSync(outPath, { recursive: true, force: true });
    console.log("npm run build")
    child_process.execSync("npm run build");
    console.log("mkdir " + outPath)
    fs.mkdirSync(outPath);
    console.log("cp " + buildpath + " " + outPath)
    fs.cpSync(buildpath, outPath, { recursive: true });
    mvSync("../docs/static/kiosk/index.html", "../docs/kiosk.html")
    mvSync("../docs/static/kiosk/GameList.json", "../docs/GameList.json")
}
catch (e) {
    console.log(e);
}
finally {
    // Restore original debug setting
    configContents.Debug = debugSetting;
    console.log("restoring config")
    fs.writeFileSync(configPath, JSON.stringify(configContents, null, 4));
}
console.log("done")


function mvSync(source, destination) {
    console.log("mv " + source + " " + destination)
    const contents = fs.readFileSync(source, "utf8");
    fs.unlinkSync(source);
    fs.writeFileSync(destination, contents);
}