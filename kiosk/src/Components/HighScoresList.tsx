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
                <tr>
                    <td className="highScoreSmallDiv" key="noscores">None yet</td>
                </tr>
            ]);
        }

        return highScores.slice(0, 3).map((highScore, index) => {
            return (
                <tr className="highScoreSmallDiv" key={index}>
                    <td className="highScoreSmallIndex">{index + 1}.</td>
                    <td className="highScoreSmallInitials">
                        {highScore.initials}
                    </td>
                    <td className="highScoreSmallInitialsScoreSpacer">&nbsp;</td>
                    <td className="highScoreSmallScore">{highScore.score}</td>
                </tr>
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
            <span className="center">
                No game selected.
            </span>
        );
    }

    return(
        <table className="center">
            <tbody>
                {renderList()}
            </tbody>
        </table>
    );
}
  
export default HighScoresList;