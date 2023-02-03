import { useEffect, useRef, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import "../Kiosk.css";
import AddGameButton from "./AddGameButton";
import {QRCodeSVG} from 'qrcode.react';
import { generateKioskCodeAsync, getGameCodeAsync } from "../BackendRequests";
import { isLocal, tickEvent } from "../browserUtils";
// import { pollForGamesAsync } from "../PollForGames";
interface IProps {
    kiosk: Kiosk
  }

const AddingGame: React.FC<IProps> = ({ kiosk }) => {
    // TODO: try to add a tick for when someone scans the QR code with a phone, maybe this will be tracked with the dimensions of the screen
    const [kioskCode, setKioskCode] = useState("");
    const [renderQRCode, setRenderQRCode] = useState(true);
    const [menuButtonSelected, setMenuButtonState] = useState(false);
    const [qrCodeButtonSelected, setQrButtonState] = useState(false);
    const pollingStarted = useRef(false);
    const kioskCodeUrl = isLocal() ? "http://localhost:3000/static/kiosk/" : "https://arcade.makecode.com/kiosk";

    const updateLoop = () => {
        if (!menuButtonSelected && kiosk.gamepadManager.isDownPressed()) {
            setMenuButtonState(true);
            if (qrCodeButtonSelected) {
                setQrButtonState(false);
            }
        }
        if (menuButtonSelected && kiosk.gamepadManager.isAButtonPressed()) {
            tickEvent("kiosk.toMainMenu");
            kiosk.showMainMenu();
        }
        if (!renderQRCode && kiosk.gamepadManager.isUpPressed()) {
            setMenuButtonState(false);
            setQrButtonState(true);
        }
        if (qrCodeButtonSelected && kiosk.gamepadManager.isAButtonPressed()) {
            tickEvent("kiosk.newKioskCode");
            setRenderQRCode(true);
        }
    }

    const kioskLinkClicked = () => {
        tickEvent("kiosk.addGameLink");
        return true;
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


    // useEffect(() => {
    //     let pollFrequency: any;
    //     let pollTimeout: any;
    
    //     const pollForGamesAsync =  (
    //         kioskCode: string
    //     ) => {
    //     const timeoutDuration = 570000; // wait for 9.5 minutes until the kiosk code expires
    //     const whenToPoll = 5000; // wait for 5 seconds to poll for game code data

    //     return new Promise<void>(async (resolve, reject) => {
    //         const getGameCode = async () => {
    //             try {
    //                 const gameCode: string = await getGameCodeAsync(kioskCode);
    //                 await kiosk.saveNewGameAsync(gameCode);
    //                 clearTimeout(pollFrequency);
    //                 clearTimeout(pollTimeout);
    //                 resolve();
    //                 kiosk.launchGame(gameCode);
    //             }
    //             catch (error: any) {
    //                 if (error.message === "Invalid game code") {
    //                     console.log("polling");
    //                     console.log(kioskCode);
    //                     pollFrequency = setTimeout(async () => {
    //                         await getGameCode();
    //                     }, whenToPoll)
    //                 } else {
    //                     clearTimeout(pollTimeout);
    //                     clearTimeout(pollFrequency);
    //                     reject();
    //                     return;
    //                 }
    
    //             }
    //         };
    
    //         pollTimeout = setTimeout(() => {
    //             console.log("finished the ten minutes");
    //             clearTimeout(pollTimeout);
    //             clearTimeout(pollFrequency);
    //             reject();
    //             setRenderQRCode(false);
    //         }, timeoutDuration)
    
    //         await getGameCode();
    //     });
    // }
    //     const generateKioskCode = async () => {
    //         try {
    //             const newKioskCode: string = await generateKioskCodeAsync();
    //             console.log("generated new code");
    //             console.log(newKioskCode);
    //             setKioskCode(newKioskCode);
    //             try {
    //                 if (kiosk.state !== KioskState.AddingGame) {
    //                     return;
    //                 }
    //                 await pollForGamesAsync(newKioskCode);
    //             } catch (error) {
    //                 console.log("the promise rejected");
    //                 // TODO: dispatch error for time out here
    //             }
    //         }
    //         catch (error) {
    //             throw new Error("Unable to generate kiosk code");
    //             //TODO: too many set here
    //         }
    //     }

    //     if (renderQRCode) {
    //         generateKioskCode();
    //     }

    //     return () => {
    //         console.log("cleaning up on unmount");
    //         clearTimeout(pollTimeout);
    //         clearTimeout(pollFrequency);
    //         setRenderQRCode(false);
    //     }

    // }, [renderQRCode]);

    useEffect(() => {
        let codeGenerationTimer: any;
        const generatedCodeDuration = 30000;
        // 570000; // wait for 9.5 minutes until the kiosk code expires

        const generateKioskCode = async () => {
            let newKioskCode: string
            try {
                console.log("generating new kiosk code");
                newKioskCode = await generateKioskCodeAsync();
            } catch {
                throw new Error("Unable to generate kiosk code");
            }
            console.log("generated new code");
            console.log(newKioskCode);
            setKioskCode(newKioskCode);

            // after 10 minutes, set the kiosk code to nothing.
            codeGenerationTimer = setTimeout(() => {
                console.log(kioskCode)
                clearTimeout(codeGenerationTimer);
                setKioskCode("");
                pollingStarted.current = false;
                console.log("set the kiosk code to nothing");
            }, generatedCodeDuration)
        }

        if (!kioskCode && !pollingStarted.current) {
            generateKioskCode();
        }

        return () => {
            clearTimeout(codeGenerationTimer);
            pollingStarted.current = true;
        }
    }, [kioskCode]);

    const qrDivContent = () => {
        if (renderQRCode) {
            const kioskUrl = `${kioskCodeUrl}#add-game:${kioskCode}`;
            return (
                <div className="innerQRCodeContent">
                    <h3>10 minute Kiosk ID</h3>
                    <h1 className="kioskCode">{kioskCode}</h1>
                    <QRCodeSVG value={kioskUrl} />
                    <div className="kioskLink">
                        <a target="_blank" onClick={kioskLinkClicked} href={kioskUrl}>{kioskUrl}</a>
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
                        <li>Use your mobile device to scan the QR code</li>
                        <li>Use the new page to scan or enter your game's share code</li>
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