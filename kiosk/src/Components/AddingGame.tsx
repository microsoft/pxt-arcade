import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import Carousel from "react-spring-3d-carousel";
import { PrimitiveRef } from "../Models/PrimitiveRef";
import "../Kiosk.css";
import AddGameButton from "./AddGameButton";

interface IProps {
    kiosk: Kiosk
  }

const AddingGame: React.FC<IProps> = ({ kiosk }) => {
    // TODO: have the site poll for responses from /code/:kioskCode every 5 seconds until getting the no such code response
    // TODO: add a "generate new code" button so that when the newly generated code is expired, users can generate another
    // TODO: unfreeze the controls of the site when button not selected
    const [kioskCode, setKioskCode] = useState("");

    useEffect(() => {
        async function generateQRCode() {
            const codeGenerationUrl = "https://staging.pxt.io/api/kiosk/newcode"
            const response = await fetch(codeGenerationUrl);
            if (!response.ok) {
                throw new Error("Unable to generate QR code");
            }

            try {
                setKioskCode((await response.json()).code);
            }
            catch (error) {
                throw new Error("Unable to generate QR code");
            }
        }
        generateQRCode();
    }, []);

    return (
        <div className="addGame">
            <h1>Add your game</h1>
            <div className="addGameContent">
                <div className="addInstructions">
                    <h2>How to upload your game</h2>
                    <ol>
                        <li>Go to your game on your personal phone or computer</li>
                        <li>Click on the share button</li>
                        <li>Select "Share to Kiosk"</li>
                        <li>Add kiosk ID.</li>
                    </ol>
                </div>

                <div className="QRCodeHolder">
                    {/* <img src=/> // this will be the QR code that will be generated from the kioskCode*/} 
                    <h3>Kiosk ID</h3>
                    <h1>{kioskCode}</h1> 
                </div>
            </div>
            <AddGameButton kiosk={kiosk} selected={false} content="Return to menu" />
        </div>

    )
}

export default AddingGame;