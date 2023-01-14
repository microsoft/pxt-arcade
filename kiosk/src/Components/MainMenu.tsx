import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import AddGameButton from "./AddGameButton";
import GameList from "./GameList";
import configData from "../config.json"
import HighScoresList from "./HighScoresList";
import { DeleteButton } from "./DeleteButton";

interface IProps {
    kiosk: Kiosk
  }

const MainMenu: React.FC<IProps> = ({ kiosk }) => {
    const [addButtonSelected, setAddButtonState] = useState(false);
    const [deleteButtonSelected, setDeleteButtonState] = useState(false);
    const [deleteTriggered, setDeleteTriggered] = useState(false);
    const lockedClassName = kiosk.locked ? " locked" : "";

    const updateLoop = () => {
        if (!addButtonSelected && kiosk.gamepadManager.isUpPressed()) {
            setAddButtonState(true);
        }
        if (addButtonSelected && kiosk.gamepadManager.isDownPressed()) {
            setAddButtonState(false);
        }
        if (!addButtonSelected && kiosk.gamepadManager.isDownPressed()) {
            setDeleteButtonState(true);
        }
        if (deleteButtonSelected && kiosk.gamepadManager.isUpPressed()) {
            setAddButtonState(false);
            setDeleteButtonState(false);
            setDeleteTriggered(false);
        }
        if (addButtonSelected && (kiosk.gamepadManager.isAButtonPressed() || kiosk.gamepadManager.isBButtonPressed())) {
            kiosk.launchAddGame();
        }
        if (deleteButtonSelected && (kiosk.gamepadManager.isAButtonPressed() || kiosk.gamepadManager.isBButtonPressed())) {
            setDeleteTriggered(true);
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
        }
    });

    return(
        <div className="mainMenu">
            <nav className="mainMenuTopBar">
                <h1 className={`mainMenuHeader${lockedClassName}`}>Select a Game</h1>
                {
                    !kiosk.locked &&
                    <div className="mainMenuButton">
                        <AddGameButton selected={addButtonSelected} content="Add your game" />
                    </div>
                }
            </nav>
            <GameList kiosk={kiosk} buttonSelected={addButtonSelected || deleteButtonSelected} />
            <DeleteButton kiosk={kiosk} focused={deleteButtonSelected} pressed={deleteTriggered} />
        </div>
    )
}
  
export default MainMenu;