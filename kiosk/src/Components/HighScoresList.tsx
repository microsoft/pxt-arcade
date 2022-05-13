import { useEffect, useState } from "react";
import { HighScore } from "../Models/HighScore";
import { Kiosk } from "../Models/Kiosk";

interface IProps {
    kiosk: Kiosk
  }

const HighScoresList: React.FC<IProps> = ({ kiosk }) => {
    const [selectedGameId, setSelectedGameId] = useState(kiosk.selectedGameId);

    const renderList = (): JSX.Element[] => {
        const highScores: HighScore[] = kiosk.getHighScores(selectedGameId!);

        if (!highScores || !highScores.length) {
            return ([
                <div className="highScoreSmallDiv" key="noscores">No high scores yet.</div>
            ]);
        }

        return highScores.map((highScore, index) => {
            return (
                <div className="highScoreSmallDiv" key={index}>
                    <div className="highScoreSmallIndex">{index + 1}</div>
                    <div className="highScoreSmallInitials">
                        <div className="highScoreSmallInitial">{highScore.initials[0]}</div>
                        <div className="highScoreSmallInitial">{highScore.initials[1]}</div>
                        <div className="highScoreSmallInitial">{highScore.initials[2]}</div>
                    </div>
                    <div className="highScoreSmallScore">{highScore.score}</div>
                </div>
            );
        })
    }

    useEffect(() => {
        kiosk.onGameSelected = () => {
            setSelectedGameId(kiosk.selectedGameId);
          };
    });

    if (!selectedGameId) {
        return (
            <span>
                No game selected.
            </span>
        );
    }

    return(
        <div>
            {renderList()}
        </div>
    );
}
  
export default HighScoresList;