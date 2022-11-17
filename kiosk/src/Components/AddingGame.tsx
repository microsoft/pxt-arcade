import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import "../Kiosk.css";
import AddGameButton from "./AddGameButton";
import {QRCodeSVG} from 'qrcode.react';
import { generateKioskCodeAsync, getGameCodeAsync, isLocal } from "../BackendRequests";
interface IProps {
    kiosk: Kiosk
  }

const AddingGame: React.FC<IProps> = ({ kiosk }) => {
    // TODO: update the urls to be more flexible for production code.
    const [kioskCode, setKioskCode] = useState("");
    const [renderQRCode, setRenderQRCode] = useState(true);
    const [menuButtonSelected, setMenuButtonState] = useState(false);
    const [qrCodeButtonSelected, setQrButtonState] = useState(false);
    const kioskCodeUrl = isLocal() ? "http://localhost:3000/static/kiosk/" : "https://arcade.makecode.com/kiosk";

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
            try {
                const newKioskCode: string = await generateKioskCodeAsync();
                setKioskCode(newKioskCode);
                try {
                    await addGameToKiosk(newKioskCode);
                } catch (error) {
                    throw new Error("Unable to add game to kioksk");
                }
            }
            catch (error) {
                setRenderQRCode(false);
                throw new Error("Unable to generate kiosk code");
            }
        }

        generateKioskCode();

        function addGameToKiosk(kioskCode: string) {
            const timeoutDuration = 600000; // wait for 10 minutes until the kiosk code expires
            const whenToPoll = 5000; // wait for 5 seconds to poll for game code data
            if (kiosk.state !== KioskState.AddingGame) {
                return;
            }
            return new Promise<void>(async (resolve, reject) => {
                let pollFrequency: any;
                let pollTimeout: any;
                const getGameCode = async () => {
                    try {
                        const gameCode: string = await getGameCodeAsync(kioskCode);
                        await kiosk.saveNewGameAsync(gameCode);
                        clearTimeout(pollFrequency);
                        clearTimeout(pollTimeout);
                        resolve();
                        kiosk.launchGame(gameCode);
                    }
                    catch (error) {
                        pollFrequency = setTimeout(async () => {
                            await getGameCode();
                        }, whenToPoll)
                    }
                };

                pollTimeout = setTimeout(() => {
                    clearTimeout(pollTimeout);
                    clearTimeout(pollFrequency);
                    reject();
                }, timeoutDuration)

                await getGameCode();
            });
        }
    }, [renderQRCode]);

    const qrDivContent = () => {
        if (renderQRCode) {
            const kioskUrl = `${kioskCodeUrl}#add-game:${kioskCode}`;
            return (
                <div className="innerQRCodeContent">
                    <h3>10 minute Kiosk ID</h3>
                    <h1 className="kioskCode">{kioskCode}</h1>
                    <QRCodeSVG value={kioskUrl} />
                    <div className="kioskLink">
                        <a target="_blank" href={kioskUrl}>{kioskUrl}</a>
                    </div>

                </div>
            )
        }
        else {
            return (
                <div className="innerQRCodeContent">
                    <AddGameButton selected={qrCodeButtonSelected} content="Generate new QR code" />
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
                        <li className="firstStep">Use your mobile device to scan the QR code<br/>-OR-<br/>Click the link under the QR code</li>
                        <li>Follow the instructions on the newly opened page</li>
                        <li>If the game is uploaded successfully, your game will be launched here</li>
                    </ol>
                </div>

                <div className="QRCodeHolder">
                    {qrDivContent()}
                </div>
            </div>
            <AddGameButton selected={menuButtonSelected} content="Return to menu" />
        </div>

    )
}

export default AddingGame;