import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import AddGameButton from "./AddGameButton";
import GameList from "./GameList";
import configData from "../config.json"
import HighScoresList from "./HighScoresList";

interface IProps {
    kiosk: Kiosk
  }

const MainMenu: React.FC<IProps> = ({ kiosk }) => {
    const [buttonSelected, setButtonState] = useState(false);

    const updateLoop = () => {
        if (!buttonSelected && kiosk.gamepadManager.isUpPressed()) {
            setButtonState(true);
        }
        if (buttonSelected && kiosk.gamepadManager.isDownPressed()) {
            setButtonState(false);
        }
        if (buttonSelected && kiosk.gamepadManager.isAButtonPressed()) {
            kiosk.launchAddGame();
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

    return(
        <div className="mainMenu">
            <nav className="mainMenuTopBar">
                <h1 className="mainMenuHeader">SELECT A GAME</h1>
                <AddGameButton kiosk={kiosk} selected={buttonSelected} content="Add your game" />
            </nav>
            <GameList kiosk={kiosk} buttonSelected={buttonSelected} />
            <HighScoresList kiosk={kiosk} />
        </div>
    )
}
  
export default MainMenu;