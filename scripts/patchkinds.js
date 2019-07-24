const fs = require('fs')
const path = require('path')

let demo = 0;
function patch(file) {
    console.log(`patching ${file}`);
    let mode = false;

    fs.readFile(file, {encoding: "utf8"}, (err, src) => {
        let patched = src.replace(/enum SpriteKind {([^}]+)}/g, (m, m2) => {
            const entries = m2.trim().split(/[\s,]+/g)
                .filter(entry => entry && !/Player|Projectile|Food|Enemy/.test(entry));
            if (!entries.length) return "";

            mode = entries.length > 1;
            return `namespace SpriteKind {
${entries.map(entry => `    export const ${entry} = SpriteKind.create();`).join('\n')}
}`;
        });
        if (patched != src) {            
            fs.writeFile(file, patched, { encoding: "utf8"}, () => { 
                console.log(`  patched ${file}`)
            });
        }
    })
}

function scan(dir) {
    fs.readdir(dir, function (err, files) {
        files.filter(f => /\.md$/.test(f))
            .forEach(f => patch(path.resolve(dir, f)));
        files.filter(f => fs.lstatSync(path.resolve(dir, f)).isDirectory())
            .forEach(f => scan(path.join(dir, f)))
    });
}

scan('../docs');

