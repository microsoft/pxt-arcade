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
                <h2 className="gameHighScoreHeader">High Scores</h2>
            }
            {
                !highScoresExist && 
                highScoreMode !== "None" &&
                <p className="gameHighScoreContent">None yet</p>
            }
            {
                highScoresExist &&
                highScoreMode !== "None" &&
                <ol className="gameHighScoreContent">
                    {
                        highScores.slice(0,5).map((highScore, index) => {
                            return (
                                <li key={index}>
                                    <span className="gameHighScoreInitials">{highScore.initials}</span>
                                    <span className="gameHighScoreScore">{highScore.score}</span>
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