import { useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import "../Kiosk.css";
import play from "./QrScanner";
import { addGameToKioskAsync } from "../BackendRequests";
import { KioskState } from "../Models/KioskState";

interface IProps {
    kiosk: Kiosk
}

const ScanQR: React.FC<IProps> = ({ kiosk }) => {
    const fullUrlHash = window.location.hash;
    const urlHashList = /add-game:((?:[a-zA-Z0-9]{6}))/.exec(fullUrlHash);
    const screenWidth = window.screen.width;
    console.log(screenWidth);
    const phoneWidth = screenWidth < 500;
    console.log(phoneWidth);
    const kioskId = urlHashList?.[1];
    const [scannerVisible, setScanner] = useState(false);
    const [linkError, setLinkError] = useState(false);
    const perisistentShareLen = 52;
    const regularShareLen = 34;

    const renderQrScanner = () => {
        setScanner(true);
        play(kiosk, kioskId!);
    }

    const checkUrl = async () => {
        const input = document.getElementById("kiosk-share-link") as HTMLInputElement;
        const shareLink = input.value;
        const shareId = /\/([^\/]+)\/?$/.exec(shareLink)?.[1];
        if (shareId) {
            setLinkError(false);
            try {
                await addGameToKioskAsync(kioskId, shareId);
                kiosk.navigate(KioskState.QrSuccess);
            } catch (error) {
                console.log("Unable to add game to kiosk. Please try again later");
            }
        } else {
            setLinkError(true);
        }

    }

    return (
        <div className="scanQrPage">
            <h2>Add game to </h2>
            <h2>Kiosk {kioskId}</h2>
            <div className="scanInstructions">
                <ol>
                    <li>Open your game on your computer</li>
                    <li>Go to share your game</li>
                    <li>Scan QR code from the share dailog</li>
                </ol>
                {
                    !scannerVisible &&
                    <button className="scanQrButton" onClick={renderQrScanner} >Scan qr code</button>
                }
                <div id="qrReader"></div>
                {
                    !phoneWidth &&
                    <div className="linkOption">
                        <p>No phone?</p>
                        <label>Submit share link here</label>
                        <input type="url"
                            id="kiosk-share-link"
                            placeholder="Ex: https://arcade.makecode.com/S36491-40385-33470-30269"
                            pattern="https:///arcade.makecode.com/.*"
                            maxLength={perisistentShareLen}
                            minLength={regularShareLen}
                            spellCheck={false}
                            required
                            title="Share Link"
                            />
                        <input type="submit" onClick={checkUrl}></input>
                        {
                            linkError &&
                            <p>Incorrect format for a share link</p>
                        }
                    </div>
                }


            </div>
        </div>
    )
}

export default ScanQR;