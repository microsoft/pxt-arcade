import "../Kiosk.css";
import { Html5QrcodeScanner, Html5QrcodeScanType, Html5Qrcode } from "html5-qrcode";
import { Html5QrcodeResult, Html5QrcodeError, CameraDevice } from "../../node_modules/html5-qrcode/esm/core";

interface IProps {
    show: boolean;
}


const play = async () => {
    let devices: CameraDevice[];
    try {
        devices = await Html5Qrcode.getCameras();
        if (devices && devices.length) {
            const cameraId: string = devices[0].id;
            const html5QrCode = new Html5Qrcode("qrReader");
            try {
                html5QrCode.start(
                    {facingMode: "environment"},
                    undefined,
                    onScanSuccess,
                    onScanFailure
                );
                await html5QrCode.stop();
            }
            catch (error) {
                console.log("failed to start scanning");
            }
        }
    }
    catch (error) {
        console.log("couldn't get camera permissions");
    }

}

function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }
  
  function onScanFailure(errorMessage: string, error: Html5QrcodeError) {
    console.log("scan failed");
    throw new Error("bad scan");
  }

  const QrScanner: React.FC<IProps> = ({ show }) => {
    // if (show) {
        play();
    // }
    return (
        <div id="qrReader"></div>
    )
  }

  export default QrScanner;
