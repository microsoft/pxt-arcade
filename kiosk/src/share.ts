import { GameData } from "./Models/GameData";

const apiRoot = "https://www.makecode.com";
const description = "A kiosk for MakeCode Arcade";

export interface SharedKioskData {
    games: GameData[];
}

export async function createKioskShareLink(kioskData: SharedKioskData) {
    const payload = createShareRequest(
        "kiosk",
        createProjectFiles("kiosk", kioskData)
    );
    const url = apiRoot + "/api/scripts";

    const result = await fetch(
        url,
        {
            method: "POST",
            body: new Blob([JSON.stringify(payload)], { type: "application/json" })
        }
    );

    if (result.status === 200) {
        const resJSON = await result.json();
        // return "https://arcade.makecode.com/" + resJSON.shortid;
        return `${resJSON.shortid}/kiosk.json`;
    }

    return "ERROR"
}


function createShareRequest(projectName: string, files: {[index: string]: string}) {
    const header = {
        "name": projectName,
        "meta": {
        },
        "editor": "tsprj",
        "pubId": undefined,
        "pubCurrent": false,
        "target": "arcade",
        "id": crypto.randomUUID(),
        "recentUse": Date.now(),
        "modificationTime": Date.now(),
        "path": projectName,
        "saveId": {},
        "githubCurrent": false,
        "pubVersions": []
    }

    return {
        id: header.id,
        name: projectName,
        target: header.target,
        description: description,
        editor: "tsprj",
        header: JSON.stringify(header),
        text: JSON.stringify(files),
        meta: {
        }
    }
}

function createProjectFiles(projectName: string, kioskData: SharedKioskData) {
    const files: {[index: string]: string} = {};

    const config = {
        "name": projectName,
        "description": description,
        "dependencies": {
            "device": "*"
        },
        "files": [
            "main.ts",
            "kiosk.json"
        ],
        "preferredEditor": "tsprj"
    };
    files["pxt.json"] = JSON.stringify(config, null, 4);
    files["main.ts"] = " ";
    files["kiosk.json"] = JSON.stringify(kioskData, undefined, 4);

    return files;
}

export async function getSharedKioskData(shareId: string, filename: string): Promise<SharedKioskData> {
    const resp = await fetch(`${apiRoot}/api/${shareId}/text`);
    const proj: any = await resp.json();
    const kioskData = JSON.parse(proj[filename]);
    return kioskData;
}