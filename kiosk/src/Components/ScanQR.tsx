import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import "../Kiosk.css";
import { OnResultFunction, QrReader } from 'react-qr-reader';
import { addGameToKioskAsync } from "../BackendRequests";
import QrScanner from "./QrScanner";
import { Html5QrcodeScanner, Html5QrcodeScanType, Html5Qrcode } from "html5-qrcode";
import { Html5QrcodeResult, Html5QrcodeError, CameraDevice } from "../../node_modules/html5-qrcode/esm/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
interface IProps {
    kiosk: Kiosk
}

const play = async () => {
    let devices: CameraDevice[];
    try {
        devices = await Html5Qrcode.getCameras();
        if (devices && devices.length) {
            const cameraId: string = devices[0].id;
            const html5QrCode = new Html5Qrcode("reader");
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


const ScanQR: React.FC<IProps> = ({ kiosk }) => {
    const fullUrlHash = window.location.hash;
    const urlHashList = /add-game:((?:[a-zA-Z0-9]{6}))/.exec(fullUrlHash);
    const kioskId = urlHashList?.[1];

    const [qrResponse, setQrResponse] = useState("");
    const [scannerVisible, setScanner] = useState(false);
    const display = scannerVisible ? "none" : "contents";

    const renderQrScanner = () => {
        setScanner(true);
        play();
    }

    // useEffect(() => {
    //     if (scannerVisible) {
    //         play();
    //     }
    // }, [scannerVisible])

    const scannerResult: OnResultFunction = async (result, error) => {
        if (!!result) {
            const qrUrl = result.toString();
            const shareId = /\/([^\/]+)\/?$/.exec(qrUrl)?.[1];
            try {
                addGameToKioskAsync(kioskId, shareId);
                kiosk.navigate(KioskState.QrSuccess);
            }
            catch (error) {
                setQrResponse("Unable to add game to kiosk. Please try again later");
            }

        }

        if (!!error) {
            setQrResponse("No QR Code Found");
        }
    }

    return (
        <div className="scanQrPage">
            <h2>Add your game to </h2>
            <h1>Kiosk {kioskId}</h1>
            <ol className="scanInstructions">
                <li>Open your game on your computer</li>
                <li>Go to share your game</li>
                <li>Scan QR code from the share modal</li>
            </ol>
            {
                !scannerVisible &&
                <button className="scanQrButton" onClick={renderQrScanner} >Open camera to scan the qr code</button>
            }
            
            {/* {
                scannerVisible &&
                <div className="qrScannerHolder">
                    <QrReader constraints={{ facingMode: "environment" }}
                                onResult={scannerResult}
                                scanDelay={500}
                                className="qrScanner"
                                videoContainerStyle={{height: "100%", padding: "0"}}
                    />
                    <p>{qrResponse}</p>
                </div>
            } */}
            {/* {
                scannerVisible &&
                <QrScanner />
            } */}
            <div id="reader"></div>

        </div>
    )
}

export default ScanQR;