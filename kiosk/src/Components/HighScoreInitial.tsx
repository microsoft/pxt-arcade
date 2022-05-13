import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import configData from "../config.json"

interface IProps {
    kiosk: Kiosk,
    isSelected: boolean,
    onCharacterChanged: (initial: string) => void
  }

const HighScoreInitial: React.FC<IProps> = ({ kiosk, isSelected, onCharacterChanged }) => {
    const [index, setIndex] = useState(0);

    const getPreviousIndex = () => (index + configData.HighScoreInitialAllowedCharacters.length - 1) % configData.HighScoreInitialAllowedCharacters.length;
    const getNextIndex = () => (index + 1) % configData.HighScoreInitialAllowedCharacters.length;

    const previousInitial = () => {
        const newIndex = getPreviousIndex();
        setIndex(newIndex);
        onCharacterChanged(configData.HighScoreInitialAllowedCharacters[newIndex]);
    }

    const nextInitial = () => {
        const newIndex = getNextIndex();
        setIndex(newIndex);
        onCharacterChanged(configData.HighScoreInitialAllowedCharacters[newIndex]);
    }

    useEffect(() => {
        const gamepadLoop = () => {
            if (!isSelected) { return; }

            if (kiosk.gamepadManager.isUpPressed()) {
                previousInitial();
            }

            if (kiosk.gamepadManager.isDownPressed()) {
                nextInitial();
            }
        };

        var interval = setInterval(() => gamepadLoop(), configData.GamepadPollLoopMilli);
        return () => clearInterval(interval);
    });

    const classNames = [
        "highScoreInitialControl",
        "highScoreInitial",
        isSelected ? "highScoreInitialControlSelected" : ""]

    return(
        <div className={classNames.join(" ")}>
            <div className="enterHighScorePrevNextInitialText">{configData.HighScoreInitialAllowedCharacters[getPreviousIndex()]}</div>
            <div className="highScoreInitialText">{configData.HighScoreInitialAllowedCharacters[index]}</div>
            <div className="enterHighScorePrevNextInitialText">{configData.HighScoreInitialAllowedCharacters[getNextIndex()]}</div>
        </div>
    )
}
  
export default HighScoreInitial;