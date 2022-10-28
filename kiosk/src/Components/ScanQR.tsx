import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import "../Kiosk.css";
import { OnResultFunction, QrReader } from 'react-qr-reader';

interface IProps {
    kiosk: Kiosk
}

const ScanQR: React.FC<IProps> = ({ kiosk }) => {
    const fullUrlHash: string = window.location.hash;
    const urlHashList = /add-game:((?:[a-zA-Z0-9]{6}))/.exec(fullUrlHash);
    const kioskId: string | undefined = urlHashList?.[1];
    const [data, setData] = useState("");
    const [scannerVisible, setScanner] = useState(false);

    const renderQrScanner = () => {
        setScanner(true);
    }

    const scannerResult: OnResultFunction = async (result, error) => {
        if (!!result) {
            const qrUrl = result.toString();
            const shareId = /\/([^\/]+)\/?$/.exec(qrUrl)?.[1];
            console.log(data);
            try {
                const response: Response = await fetch("https://staging.pxt.io/api/kiosk/updatecode", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "kioskCode": kioskId,
                        "shareId": shareId
                    }),
                });
                const responseData = await response.json();
            }
            catch (error) {
                setData("Unable to add game to kiosk. Please try again later");
            }

        }

        if (!!error) {
            setData("Unable to scan QR code");
        }
    }

    return (
        <div>
            <h1>Add Game to Kiosk {kioskId}</h1>
            <ol>
                <li>Open your game on your computer</li>
                <li>Go to share your game</li>
                <li>Scan QR code from the share modal</li>
            </ol>
            <button onClick={renderQrScanner}>Open camera to scan the qr code</button>
            <div>
            <div className="qrScanner">
                <QrReader constraints={{ facingMode: "environment" }}
                            onResult={scannerResult}
                            scanDelay={500}
                            containerStyle={{visibility: `${scannerVisible ? "visible" : "hidden"}`}}
                />
                <p>{data}</p>
            </div>
            </div>

        </div>
    )
}

export default ScanQR;