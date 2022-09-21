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
        //TODO: instead of launching the add game right away, need to make it selected
        // will need to have state for the button to know if it is selected or not.
        // cannot just launch the add game page if it was not selected
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
        <div>
            <div>
                <nav className="mainMenuTopBar">
                    <h1 className="mainMenuHighScoreHeader">SELECT A GAME</h1>
                    <AddGameButton kiosk={kiosk} selected={buttonSelected} content="Add your game" />
                </nav>
                <GameList kiosk={kiosk} buttonSelected={buttonSelected} />
            </div>
            <HighScoresList kiosk={kiosk} />
        </div>
    )
}
  
export default MainMenu;