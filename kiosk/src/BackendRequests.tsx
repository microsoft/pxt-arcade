const backendEndpoint: string = "https://makecode.com/api/kiosk";

export const isLocal = () => {
    return window.location.hostname === "localhost";
}

export const getGameCodeAsync = async (kioskCode: string) => {
    const getGameCodeUrl = `${backendEndpoint}/code/${kioskCode}`; 
    let response = await fetch(getGameCodeUrl);
    if (!response.ok) {
        throw new Error("Unable to get data from the kiosk.");
    } else {
        const gameCode = (await response.json())?.code;
        if (gameCode !== "0") {
            return gameCode;
        }
        throw new Error("Invalid game code");
    }
}

export const generateKioskCodeAsync = async () => {
    const codeGenerationUrl = `${backendEndpoint}/newcode`;
    const response = await fetch(codeGenerationUrl);
    if (!response.ok) {
        throw new Error("Unable to generate kiosk code");
    } else {
        try {
            const newKioskCode = (await response.json()).code;
            return newKioskCode;
        }
        catch (error) {
            throw new Error("No code returned from the request.");
        }
    }
}

export const addGameToKioskAsync = async (kioskId: string | undefined, gameShareId: string | undefined) => {
    const updateKioskUrl = `${backendEndpoint}/updatecode`;
    try {
        const response: Response = await fetch(updateKioskUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "kioskCode": kioskId,
                "shareId": gameShareId
            }),
        });
        await response.json();
    }
    catch (error) {
        throw new Error("Failed to post game to the kiosk");
    }
}

export const getGameDetail = async (gameId: string, detail: string) => {
    console.log("IN GETTING GAME DETAIL");
    const gameDetailsUrl = `https://makecode.com/api/${gameId}`;
    const response  = await fetch(gameDetailsUrl);
    if (!response.ok) {
        throw new Error("Unable to fetch the game details");
    } else {
        if (detail === "description") {
            try {
                const gameDescription = (await response.json()).description;
                return gameDescription;
            }
            catch (error) {
                return "Made with love in MakeCode Arcade";
            }
        }

        else if (detail === "name") {
            try {
                let gameName = (await response.json()).name;
                if (gameName.toLowerCase() === "untitled") {
                    gameName = "Kiosk Game";
                }
                return gameName;
            }
            catch (error) {
                return "Kiosk Game";
            }
        }

    }
}