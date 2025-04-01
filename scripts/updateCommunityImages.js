const path = require("path");
const fs = require("fs");

const imageRoot = path.resolve(__dirname, "..", "docs", "static", "discourse");
const mdPath = path.resolve(__dirname, "..", "docs", "community.md");

async function main() {
    const mdContents = fs.readFileSync(mdPath, "utf8");

    const match = /```codecard((?:.|\n)*)```/m.exec(mdContents);
    const parsed = JSON.parse(match[1].trim());

    for (const entry of parsed) {
        if (entry.imageUrl || !entry.shareUrl) continue;

        const idMatch = /(_.{12}|S?[0-9\-]{23})/.exec(entry.shareUrl);
        const scriptId = idMatch[1];

        const url = `https://makecode.com/api/${scriptId}/thumb`
        console.log(`Fetching ${url}`)
        const resp = await fetch(url);

        if (resp.status !== 200) {
            console.log(`Bad response ${resp.status} when fetching thumbnail for ${scriptId}`);
            continue;
        }

        const type = resp.headers.get("content-type");
        const extMatch = type && /image\/(png|jpeg|gif)/.exec(type);

        if (!extMatch) {
            console.log(`Bad mime type ${type} when fetching thumbnail for ${scriptId}`);
            continue;
        }

        const filename = scriptId + "." + extMatch[1];

        const outPath = path.join(imageRoot, filename);
        const contents = await resp.arrayBuffer();
        fs.writeFileSync(outPath, new Uint8Array(contents));
        console.log(`Wrote ${path.relative(path.resolve(__dirname, ".."), outPath)}`);

        entry.imageUrl = `/static/discourse/${filename}`
    }

    const outMd = mdContents.replace(/```codecard((?:.|\n)*)```/m,
`\`\`\`codecard
${JSON.stringify(parsed, null, 4)}
\`\`\``
    );
    fs.writeFileSync(mdPath, outMd, "utf8");
    console.log(`Wrote ${path.relative(path.resolve(__dirname, ".."), mdPath)}`)
}

main();