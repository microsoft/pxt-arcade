import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import AddGameButton from "./AddGameButton";
import GameList from "./GameList";
import configData from "../config.json"
import HighScoresList from "./HighScoresList";
import { tickEvent } from "../browserUtils";

interface IProps {
    kiosk: Kiosk
  }

const MainMenu: React.FC<IProps> = ({ kiosk }) => {
    const [buttonSelected, setButtonState] = useState(false);
    const lockedClassName = kiosk.locked ? " locked" : "";

    const updateLoop = () => {
        if (!buttonSelected && kiosk.gamepadManager.isUpPressed()) {
            setButtonState(true);
        }
        if (buttonSelected && kiosk.gamepadManager.isDownPressed()) {
            setButtonState(false);
        }
        if (buttonSelected && kiosk.gamepadManager.isAButtonPressed()) {
            tickEvent("kiosk.addGamePageLoaded");
            kiosk.launchAddGame();
        }
    }

    useEffect(() => {
        if (!kiosk.locked) {
            let intervalId: any = null;
            intervalId = setInterval(() => {
    
                updateLoop();
            }, configData.GamepadPollLoopMilli);
            
            return () => {
                if (intervalId) {
                    clearInterval(intervalId);
                }
            };
        } else {
            tickEvent("kiosk.locked");
        }
    });

    return(
        <div className="mainMenu">
            <nav className="mainMenuTopBar">
                <h1 className={`mainMenuHeader${lockedClassName}`}>Select a Game</h1>
                {
                    !kiosk.locked &&
                    <AddGameButton selected={buttonSelected} content="Add your game" />
                }
            </nav>
            <GameList kiosk={kiosk} buttonSelected={buttonSelected} />
            {/* <HighScoresList kiosk={kiosk} /> */}
        </div>
    )
}
  
export default MainMenu;