import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import "../Kiosk.css";
import AddGameButton from "./AddGameButton";
import {QRCodeSVG} from 'qrcode.react';
interface IProps {
    kiosk: Kiosk
  }

const AddingGame: React.FC<IProps> = ({ kiosk }) => {
    // TODO: update the urls to be more flexible for production code.
    const [kioskCode, setKioskCode] = useState("");
    const [renderQRCode, setRenderQRCode] = useState(true);
    const kioskCodeUrl = "spujji.github.io/";
    const [menuButtonSelected, setMenuButtonState] = useState(false);
    const [qrCodeButtonSelected, setQrButtonState] = useState(false);

    const updateLoop = () => {
        if (!menuButtonSelected && kiosk.gamepadManager.isDownPressed()) {
            setMenuButtonState(true);
            if (qrCodeButtonSelected) {
                setQrButtonState(false);
            }
        }
        if (menuButtonSelected && kiosk.gamepadManager.isAButtonPressed()) {
            kiosk.showMainMenu();
        }
        if (!renderQRCode && kiosk.gamepadManager.isUpPressed()) {
            setMenuButtonState(false);
            setQrButtonState(true);
        }
        if (qrCodeButtonSelected && kiosk.gamepadManager.isAButtonPressed()) {
            setRenderQRCode(true);
        }
    }

    useEffect(() => {
        let intervalId: any = null;
        intervalId = setInterval(() => {
            updateLoop();
        }, configData.GamepadPollLoopMilli);
        
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };

    });

    useEffect(() => {
        async function generateKioskCode() {
            const codeGenerationUrl = "https://staging.pxt.io/api/kiosk/newcode"
            const response = await fetch(codeGenerationUrl);
            if (!response.ok) {
                throw new Error("Unable to generate kiosk code");
            }

            try {
                const newKioskCode = (await response.json()).code; 
                setKioskCode(newKioskCode);
                await addGameToKiosk(newKioskCode);
            }
            catch (error) {
                setRenderQRCode(false);
                throw new Error("Unable to generate kiosk code");
            }
        }

        generateKioskCode();

        function addGameToKiosk(kioskCode: string) {
            const timeoutDuration = 600000; // wait for 10 minutes until the kiosk code expires
            const whenToPull = 5000; // wait for five seconds to poll for game code data
            const getGameCodeUrl = `https://staging.pxt.io/api/kiosk/code/${kioskCode}`;
            const getGameCode = async () => {
                if (kiosk.state !== KioskState.AddingGame) {
                    return;
                }
                let response = await fetch(getGameCodeUrl);
                if (!response.ok) {
                    throw new Error("Unable to get data from the kiosk.");
                } else {
                    const gameCode = (await response.json())?.code;
                    if (gameCode !== "0") {
                        kiosk.addGame(gameCode);
                        // this is something we might want to do in the future
                        // ie if the game gets added, launch it immediately
                        // instead of going back to the main menu to find it
                        // kiosk.launchGame(gameCode);
                        return true;
                    }
                    throw new Error("Invalid game code");
                }
            }
            return new Promise<void>((resolve, reject) => {
                let pollInterval: any;
                let pollTimeout: any;
                pollInterval = setInterval(() => {
                    getGameCode()
                        .then(() => {
                            clearInterval(pollInterval);
                            clearTimeout(pollTimeout);
                            resolve();
                        })
                        .catch(() => null);
                }, whenToPull);
                pollTimeout = setTimeout(() => {
                    clearInterval(pollInterval);
                    reject();
                }, timeoutDuration)
            });
        }
    }, [renderQRCode]);

    const qrDivContent = () => {
        if (renderQRCode) {
            return (
                <div className="innerQRCodeContent">
                    <QRCodeSVG value={`${kioskCodeUrl}#${kioskCode}`} />
                    <h3>10 minute Kiosk ID</h3>
                    <h1>{kioskCode}</h1>
                </div>
            )
        }
        else {
            return (
                <div className="innerQRCodeContent">
                    <AddGameButton kiosk={kiosk} selected={qrCodeButtonSelected} content="Generate new QR code" />
                </div>
            )
        }
    };

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
                    {qrDivContent()}
                </div>
            </div>
            <AddGameButton kiosk={kiosk} selected={menuButtonSelected} content="Return to menu" />
        </div>

    )
}

export default AddingGame;