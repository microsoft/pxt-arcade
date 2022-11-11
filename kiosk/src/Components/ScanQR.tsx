import { useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import "../Kiosk.css";
import play from "./QrScanner";
interface IProps {
    kiosk: Kiosk
}

const ScanQR: React.FC<IProps> = ({ kiosk }) => {
    const fullUrlHash = window.location.hash;
    const urlHashList = /add-game:((?:[a-zA-Z0-9]{6}))/.exec(fullUrlHash);
    const kioskId = urlHashList?.[1];
    const [scannerVisible, setScanner] = useState(false);

    const renderQrScanner = () => {
        setScanner(true);
        play(kiosk, kioskId!);
    }

    return (
        <div className="scanQrPage">
            <h2>Add game to </h2>
            <h2>Kiosk {kioskId}</h2>
            <div className="scanInstructions">
                <ol>
                    <li>Open your game on your computer</li>
                    <li>Go to share your game</li>
                    <li>Scan QR code from the share modal</li>
                </ol>
                {
                    !scannerVisible &&
                    <button className="scanQrButton" onClick={renderQrScanner} >Open camera to scan the qr code</button>
                }
                <div id="qrReader"></div>
            </div>
        </div>
    )
}

export default ScanQR;