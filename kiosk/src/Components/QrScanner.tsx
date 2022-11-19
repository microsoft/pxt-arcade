import "../Kiosk.css";
import { Html5Qrcode } from "html5-qrcode";
import { Kiosk } from "../Models/Kiosk";
import { addGameToKioskAsync } from "../BackendRequests";
import { KioskState } from "../Models/KioskState";


const play = async (kiosk: Kiosk, kioskId: string) => {
    const html5QrCode = new Html5Qrcode("qrReader");
    let devices: any[];


    async function onScanSuccess(decodedText: string, decodedResult: any) {
        const shareId = /\/([^\/]+)\/?$/.exec(decodedText)?.[1];
        try {
            await addGameToKioskAsync(kioskId, shareId);
            await html5QrCode.stop();
            kiosk.navigate(KioskState.QrSuccess);
        } catch (error) {
            console.log("Unable to add game to kiosk. Please try again later");
        }
    }
      
    function onScanFailure(errorMessage: string, error: any) {
        console.log("scan failed");
        throw new Error("bad scan");
    }

    try {
        devices = await Html5Qrcode.getCameras();
        if (devices && devices.length) {
            try {
                html5QrCode.start(
                    {facingMode: "environment"},
                    undefined,
                    onScanSuccess,
                    onScanFailure
                );
            } catch (error) {
                console.log("failed to start scanning");
            }
        }
    } catch (error) {
        console.log("couldn't get camera permissions");
    }

}

  export default play;
