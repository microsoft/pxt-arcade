import { useEffect, useState } from "react";
import { HighScore } from "../Models/HighScore";
import { Kiosk } from "../Models/Kiosk";

interface IProps {
    kiosk: Kiosk;
    gameId: string;
    highScoreMode: string;
  }

const HighScoresList: React.FC<IProps> = ({ kiosk, gameId, highScoreMode }) => {
    const highScores: HighScore[] = kiosk.getHighScores(gameId);
    const highScoresExist = !!highScores.length;

    return(
        <div className="gameHighScores">
            {
                highScoreMode !== "None" &&
                <h2 className="highScoreHeader">High Scores</h2>
            }
            {
                !highScoresExist && 
                highScoreMode !== "None" &&
                <p className="highScoreSmallDiv">None yet</p>
            }
            {
                highScoresExist &&
                highScoreMode !== "None" &&
                <ol>
                    {
                        highScores.slice(0,5).map((highScore, index) => {
                            return (
                                <li key={index}>
                                    <span className="highScoreInitials">{highScore.initials}</span>
                                    <span className="highScoreScore">{highScore.score}</span>
                                </li>
                            )   
                        }

                        )
                    }
                </ol>
            }

        </div>
    );
}
  
export default HighScoresList;