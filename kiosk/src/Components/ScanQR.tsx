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
        const inputValue = input.value;
        const shareLink = /(https:\/\/)((arcade\.makecode\.com\/)|(makecode\.com\/))((?:S\d{5}-\d{5}-\d{5}-\d{5})|(?:_[a-zA-Z0-9]+))/.exec(inputValue);
        let shareId;
        if (shareLink) {
            setLinkError(false);
            shareId = /\/([^\/]+)\/?$/.exec(inputValue)?.[1];
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
            <h1>Kiosk {kioskId}</h1>
            <div className="scanInstructions">
                <ol>
                    <li>Open your game on the arcade editor</li>
                    <li>Go to share your game</li>
                    <li>Select 'Share Project'</li>
                    <li>
                        {
                            !scannerVisible &&
                            <button className="scanQrButton" onClick={renderQrScanner} >Scan QR code</button>
                        }

                        {
                            scannerVisible &&
                            "Scan QR code "
                        }
                         from the share dailog
                    </li>
                </ol>

                <div id="qrReader"></div>
                {
                    !phoneWidth &&
                    <div className="linkOption">
                        <p>No phone?</p>
                        <label>Submit share link here</label>
                        <input type="url"
                            id="kiosk-share-link"
                            placeholder="Ex: https://arcade.makecode.com/S36491-40385-33470-30269"
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