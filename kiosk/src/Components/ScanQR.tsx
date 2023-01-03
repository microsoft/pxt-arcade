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
    const phoneWidth = screenWidth < 500;
    const kioskId = urlHashList?.[1];
    const [scannerVisible, setScanner] = useState(false);
    const [linkError, setLinkError] = useState(false);

    const renderQrScanner = () => {
        play(kiosk, kioskId!);
        setScanner(true);
    }

    const checkUrl = async () => {
        const input = document.getElementById("kiosk-share-link") as HTMLInputElement;
        const inputValue = input.value?.trim();
        const shareLink = /^(https:\/\/)((arcade\.makecode\.com\/)|(makecode\.com\/))((?:S?\d{5}-\d{5}-\d{5}-\d{5})$|(?:_[a-zA-Z0-9]+)$)/i.exec(inputValue);
        const shareCode = /(^(?:S?\d{5}-\d{5}-\d{5}-\d{5})$|^(?:_[a-zA-Z0-9]{12})$)/.exec(inputValue);
        let shareId;
        if (shareLink) {
            shareId = /\/([^\/]+)\/?$/.exec(inputValue)?.[1];
        } else if (shareCode) {
            shareId = shareCode[1];
        }
        if (shareId) {
            setLinkError(false);
            try {
                await addGameToKioskAsync(kioskId, shareId);
                kiosk.navigate(KioskState.QrSuccess);
            } catch (error) {
                // it's possible that if it reaches here, the kiosk id was invalid ( someone just puts something random in the url, we should have a toast for this)
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
                <div className="qrOption">
                    <p className="scanIntro">Scan game's share QR code with the button below</p>
                    {
                        !scannerVisible &&
                        <button className="scanQrButton" onClick={renderQrScanner} >Scan QR code</button>
                    }
                    <div id="qrReader"></div>
                    {
                        scannerVisible &&
                        <p className="scanTip">Tip: Do not use the kiosk's QR code</p>
                    }
                </div>

                {
                    !phoneWidth &&
                    <div className="linkOption">
                        <p>Can't scan?</p>
                        <label>Submit share link here</label>
                        <input type="url"
                            id="kiosk-share-link"
                            placeholder="Enter share link"
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
                <a className="shareHelp" target="_blank" href="https://forum.makecode.com/t/pigeon-deliverance/11726/3?u=richard">
                    How do I get a game's share link or QR code?
                </a>
            </div>
        </div>
    )
}

export default ScanQR;