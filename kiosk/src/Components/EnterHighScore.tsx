import { useEffect, useState } from "react";
import { HighScore } from "../Models/HighScore";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import HighScoreInitial from "./HighScoreInitial";
import configData from "../config.json"

interface IProps {
    kiosk: Kiosk
  }

const EnterHighScore: React.FC<IProps> = ({ kiosk }) => {
    const [initialIndex, setInitialIndex] = useState(0);
    const [initials, setInitials] = useState(Array(configData.HighScoreInitialsLength + 1).join(configData.HighScoreInitialAllowedCharacters[0]));

    if (!kiosk.mostRecentScores || !kiosk.mostRecentScores.length) {
        throw new Error("Cannot load high score entry view without having recent scores");
    }

    const renderList = (highScores: HighScore[], offset: number): JSX.Element[] => {
        return highScores.map((highScore, i) => {
            return (
                <tr className="highScoreRow" key={i}>
                    <td className="highScoreIndex">{i + offset}.</td>
                    <td className="highScoreInitials">
                        <span className="highScoreInitial">{highScore.initials[0]}</span>
                        <span className="highScoreInitial">{highScore.initials[1]}</span>
                        <span className="highScoreInitial">{highScore.initials[2]}</span>
                    </td>
                    <td className="highScoreInitialsScoreSpacer"></td>
                    <td className="highScoreScore">{highScore.score}</td>
                </tr>
            )
        })
    }

    const updateInitial = (i: number, character: string) => {
        const newInitials = `${initials.substring(0, i)}${character}${initials.substring(i + 1)}`;
        setInitials(newInitials);
    }

    const renderInitials = (): JSX.Element[] => {
        const elements = [];

        for (let lcv = 0; lcv < configData.HighScoreInitialsLength; lcv++) {
            const thisIndex = lcv;
            elements.push(
                <HighScoreInitial kiosk={kiosk} key={lcv} isSelected={thisIndex === initialIndex}
                    onCharacterChanged={character => updateInitial(thisIndex, character[0])} />
            );
        }

        return elements;
    }

    const previousInitial = () => {
        const newIndex = (initialIndex + configData.HighScoreInitialsLength - 1) % configData.HighScoreInitialsLength;
        setInitialIndex(newIndex);
    }

    const nextInitial = () => {
        const newIndex = (initialIndex + 1) % configData.HighScoreInitialsLength;
        setInitialIndex(newIndex);
    }

    useEffect(() => {
        const gamepadLoop = () => {
            if (kiosk.state !== KioskState.EnterHighScore) { return; }

            if (kiosk.gamepadManager.isLeftPressed()) {
                previousInitial();
            }

            if (kiosk.gamepadManager.isRightPressed()) {
                nextInitial();
            }

            if (kiosk.gamepadManager.isAButtonPressed()) {
                kiosk.saveHighScore(kiosk.selectedGame!.id, initials, kiosk.mostRecentScores[0]);
                kiosk.showMainMenu();
            }

            if (kiosk.gamepadManager.isBButtonPressed()) {
                kiosk.showMainMenu();
            }
        };

        const interval = setInterval(() => gamepadLoop(), configData.GamepadPollLoopMilli);
        return () => clearInterval(interval);
    });

    const existingHighScores = kiosk.getHighScores(kiosk.selectedGame!.id);
    const aboveScores = existingHighScores.filter(item => item.score > kiosk.mostRecentScores[0]);
    const belowScores = existingHighScores.slice(aboveScores.length, existingHighScores.length);
    const enterInitials = aboveScores.length < configData.HighScoresToKeep;

    return(
        <div>
            {
                enterInitials ?
                    <div>
                        <h1>YOU GOT A HIGH SCORE!</h1>
                        <h2>Enter your initials</h2>
                    </div>
                    :
                    <h1>High Scores</h1>
            }

            <table className="center">
                <tbody>
                    {renderList(aboveScores, 1)}

                    {enterInitials ? "" : <br></br>}

                    <tr className="highScoreRow enterHighScoreText">
                        <td className="highScoreIndex">
                            {
                                enterInitials ? 
                                    <span>
                                        {aboveScores.length + 1}.
                                    </span>
                                    :
                                    "--"
                            }
                        </td>
                        <td className="highScoreInitials">
                            {enterInitials ? renderInitials() : "YOU"}
                        </td>
                        <td className="highScoreInitialsScoreSpacer"></td>
                        <td className="highScoreScore">
                            {kiosk.mostRecentScores[0]}
                        </td>
                    </tr>

                    {renderList(belowScores, aboveScores.length + 2)}
                </tbody>
            </table>
        </div>
    )
}
  
export default EnterHighScore;