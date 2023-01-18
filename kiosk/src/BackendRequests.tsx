const kioskBackendEndpoint: string = "https://makecode.com/api/kiosk";
const apiBackendEndpoint: string = "https://makecode.com/api"

export const getGameCodeAsync = async (kioskCode: string) => {
    const getGameCodeUrl = `${kioskBackendEndpoint}/code/${kioskCode}`; 
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
    const codeGenerationUrl = `${kioskBackendEndpoint}/newcode`;
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
    const updateKioskUrl = `${kioskBackendEndpoint}/updatecode`;
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

export const getGameDetailsAsync = async (gameId: string) => {
    const gameDetailsUrl = `${apiBackendEndpoint}/${gameId}`;
    const response  = await fetch(gameDetailsUrl);
    if (!response.ok) {
        throw new Error("Unable to fetch the game details");
    } else {
        return await response.json();
    }
}