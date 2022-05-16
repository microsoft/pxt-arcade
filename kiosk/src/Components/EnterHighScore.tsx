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

    const renderList = (highScores: HighScore[], offset: number): JSX.Element[] => {
        return highScores.map((highScore, i) => {
            return (
                <div className="highScoreText" key={i}>
                    <div className="highScoreIndex">{i + offset}</div>
                    <div className="highScoreInitials">
                        <div className="highScoreInitial">{highScore.initials[0]}</div>
                        <div className="highScoreInitial">{highScore.initials[1]}</div>
                        <div className="highScoreInitial">{highScore.initials[2]}</div>
                    </div>
                    <div className="highScoreScore">{highScore.score}</div>
                </div>
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
                kiosk.saveHighScore(kiosk.selectedGameId!, initials, kiosk.currentScore);
                kiosk.showMainMenu();
            }

            if (kiosk.gamepadManager.isBButtonPressed()) {
                kiosk.showMainMenu();
            }
        };

        const interval = setInterval(() => gamepadLoop(), configData.GamepadPollLoopMilli);
        return () => clearInterval(interval);
    });

    const existingHighScores = kiosk.getHighScores(kiosk.selectedGameId!);
    const aboveScores = existingHighScores.filter(item => item.score > kiosk.currentScore);
    const belowScores = existingHighScores.slice(aboveScores.length, existingHighScores.length - 1);
    const enterInitials = aboveScores.length < configData.HighScoresToKeep;

    return(
        <div>
            <h1>High Scores</h1>
            {renderList(aboveScores, 1)}

            <div className="highScoreHighlight">
                <div className="highScoreText">
                    <div className="highScoreIndex">
                        {
                            enterInitials ? 
                                <div>
                                    {aboveScores.length + 1}
                                    <div className="prevNextInitialText">&nbsp;</div>
                                </div>
                                :
                                "--"}                        
                    </div>
                    <div className="highScoreInitials">
                        {enterInitials ? renderInitials() : "YOU"}
                    </div>
                    <div className="highScoreScore">
                        {kiosk.currentScore}
                        {
                            enterInitials ? 
                                <div className="prevNextInitialText">&nbsp;</div>
                                :
                                ""
                        }
                    </div>
                </div>                
            </div>

            {renderList(belowScores, aboveScores.length + 2)}

            <div>
                <hr></hr>
                Press A to continue. Press B to cancel.
            </div>
        </div>
    )
}
  
export default EnterHighScore;