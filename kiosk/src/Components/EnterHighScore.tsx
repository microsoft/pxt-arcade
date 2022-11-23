import { useEffect, useState } from "react";
import { HighScore } from "../Models/HighScore";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import HighScoreInitial from "./HighScoreInitial";
import configData from "../config.json"
import { PrimitiveRef } from "../Models/PrimitiveRef";

interface IProps {
    kiosk: Kiosk
  }

const EnterHighScore: React.FC<IProps> = ({ kiosk }) => {
    const [indexChanged, setIndexChanged] = useState(false);
    const [initials, setInitials] = useState(Array(configData.HighScoreInitialsLength + 1).join(configData.HighScoreInitialAllowedCharacters[0]));
    const [timesAPressed, setTimesAPressed] = useState(0);
    const [runOnce, setRunOnce] = useState(false);
    const [firstRun, setFirstRun] = useState(true);

    const existingHighScores = kiosk.getHighScores(kiosk.selectedGame!.id);
    const aboveScores = existingHighScores.filter(item => item.score > kiosk.mostRecentScores[0]);
    const belowScores = existingHighScores.slice(aboveScores.length, existingHighScores.length);

    if (!kiosk.mostRecentScores || !kiosk.mostRecentScores.length) {
        throw new Error("Cannot load high score entry view without having recent scores");
    }

    const gamepadLoop = () => {
        if (kiosk.state !== KioskState.EnterHighScore) { return; }

        if (kiosk.gamepadManager.isAButtonPressed()) {
            setIndexChanged(true);
        } else {
            setIndexChanged(false);
        }

        if (kiosk.gamepadManager.isBButtonPressed()) {
            kiosk.navigate(KioskState.GameOver);
        }
    };

    const lookForPressed = () => {
        let interval: any;
        let timeout: any;
        timeout = setTimeout(() => {
            interval = setInterval(() =>
            gamepadLoop(),
            configData.EnterHighScorePoll
        )
        }, configData.EnterHighScoreDelayMilli)


        return () => {
            if (interval) {
                clearInterval(interval);
            }
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }

    lookForPressed();

    const updateTimesPressed = () => {
        if (!runOnce) {
            if (!firstRun) {
                setTimesAPressed(timesAPressed + 1);
                setRunOnce(true);
                return timesAPressed + 1;
            } else {
                setFirstRun(false);
                return timesAPressed;
            }

        } else {
            setRunOnce(false);
            return timesAPressed;
        }
    }

    useEffect(() => {
        const updatedPressed = updateTimesPressed();


        if (updatedPressed >= 3) {
            setTimesAPressed(0);
            kiosk.saveHighScore(kiosk.selectedGame!.id, initials, kiosk.mostRecentScores[0]);
            kiosk.navigate(KioskState.GameOver);
        }

    }, [indexChanged]);


    const updateInitial = (i: number, character: string) => {
        const newInitials = `${initials.substring(0, i)}${character}${initials.substring(i + 1)}`;
        setInitials(newInitials);
    }

    const renderInitials = (): JSX.Element[] => {
        const elements = [];

        for (let lcv = 0; lcv < configData.HighScoreInitialsLength; lcv++) {
            const thisIndex = lcv;
            elements.push(
                <HighScoreInitial kiosk={kiosk} key={lcv} isSelected={thisIndex === timesAPressed}
                    onCharacterChanged={character => updateInitial(thisIndex, character[0])} />
            );
        }

        return elements;
    }

    const renderList = (highScores: HighScore[]): JSX.Element[] => {
        return highScores.map((highScore, i) => {
            return (
                <li>
                    <span className="highScoreInitials">{highScore.initials}</span>
                    <span className="highScoreScore">{highScore.score}</span>
                </li>
            )
        })
    }

    return(
        <div className="enterHighScore">
            <div className="highScoreTitle">
                <h1>YOU GOT A HIGH SCORE!</h1>
                <h2>Enter your initials</h2>
            </div>
            <div className="highScoreContent">
                <div className="highScoreList">
                    <ol>
                        {renderList(aboveScores)}
                        <li>
                            <span className="highScoreInitials">{renderInitials()}</span>
                            <span className="highScoreScore">{kiosk.mostRecentScores[0]}</span>
                        </li>
                        {renderList(belowScores)}
                    </ol>
                </div>

                <div className="highScoreInstructions">
                    <ul>
                        <li>Use up/down to scroll through the alphabet</li>
                        <li>When you find your initial, press A</li>
                    </ul>

                </div>
            </div>


        </div>
    )
}

export default EnterHighScore;