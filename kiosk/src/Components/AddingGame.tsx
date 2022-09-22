import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import Carousel from "react-spring-3d-carousel";
import { PrimitiveRef } from "../Models/PrimitiveRef";
import "../Kiosk.css";
import AddGameButton from "./AddGameButton";
import {QRCodeSVG} from 'qrcode.react';
import { resolve } from "path";


interface IProps {
    kiosk: Kiosk
  }

const AddingGame: React.FC<IProps> = ({ kiosk }) => {
    // TODO: have the site poll for responses from /code/:kioskCode every 5 seconds until getting the no such code response
    // TODO: add a "generate new code" button so that when the newly generated code is expired, users can generate another
    // TODO: unfreeze the controls of the site when button not selected
    const [kioskCode, setKioskCode] = useState("");
    const [renderQRCode, setRenderQRCode] = useState(true);
    const kioskCodeUrl = "spujji.github.io/";
    // const [buttonSelected, setButtonState] = useState(false);

    // const updateLoop = () => {
    //     if (!buttonSelected && kiosk.gamepadManager.isUpPressed()) {
    //         setButtonState(true);
    //     }
    //     if (buttonSelected && kiosk.gamepadManager.isDownPressed()) {
    //         setButtonState(false);
    //     }
    //     if (buttonSelected && kiosk.gamepadManager.isAButtonPressed()) {
    //         kiosk.launchAddGame();
    //     }
    // }

    // useEffect(() => {
    //     //TODO: instead of launching the add game right away, need to make it selected
    //     // will need to have state for the button to know if it is selected or not.
    //     // cannot just launch the add game page if it was not selected
    //     let intervalId: any = null;
    //     intervalId = setInterval(() => {
    //         updateLoop();
    //     }, configData.GamepadPollLoopMilli);
        
    //     return () => {
    //         if (intervalId) {
    //             clearInterval(intervalId);
    //         }
    //     };

    // });

    const qrDivContent = () => {
        if (renderQRCode) {
            return (
                <div className="innerQRCodeContent">
                    <QRCodeSVG value={`${kioskCodeUrl}#${kioskCode}`} />,
                    <h3>10 minute Kiosk ID</h3>
                    <h1>{kioskCode}</h1> 
                </div>
            )
        }
        else {
            return (
                <div className="innerQRCodeContent">
                    <AddGameButton kiosk={kiosk} selected={false} content="Generate new QR code" />
                </div>
            )
        }
    };

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
            // console.log("GETTING THE GAME CODE URL");
            const timeoutDuration = 600000; // wait for 10 minutes until the kiosk code expires
            const whenToPull = 5000; // wait for five seconds to poll for game code data
            const getGameCodeUrl = `https://staging.pxt.io/api/kiosk/code/${kioskCode}`;
            const getGameCode = async () => {
                console.log("IN GET GAME CODE");
                let response = await fetch(getGameCodeUrl);
                if (!response.ok) {
                    throw new Error("Unable to get data from the kiosk.");
                } else {
                    const gameCode = (await response.json())?.code;
                    console.log(gameCode);
                    console.log(typeof(gameCode));
                    if (gameCode !== "0") {
                        console.log(gameCode);
                        kiosk.addGame(gameCode);
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
                    {qrDivContent()}
                </div>
            </div>
            <AddGameButton kiosk={kiosk} selected={false} content="Return to menu" />
        </div>

    )
}

export default AddingGame;