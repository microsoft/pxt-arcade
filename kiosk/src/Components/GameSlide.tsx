import { GameData } from "../Models/GameData";
import { HighScore } from "../Models/HighScore";
import { Kiosk } from "../Models/Kiosk";
import HighScoresList from "./HighScoresList";
interface IProps {
    highScores: HighScore[];
    buttonSelected: boolean;
    game: GameData;
}
const GameSlide: React.FC<IProps> = ({ highScores, buttonSelected, game }) => {
    const carouselSelected = buttonSelected ? "unselected" : "selected";

    return (
        <div className={`gameTile ${carouselSelected}`}>
            
            <div className="gameThumbnail" 
                style={{backgroundImage: `url("https://makecode.com/api/${game.id}/thumb")`}}
            />

            <div className="gameDetails">
                <div className="gameTitle">{game.name}</div>
                <div className="gameDescription">{game.description} <hr/></div>
                <HighScoresList highScores={highScores} highScoreMode={game.highScoreMode} />
            </div>
        </div>
    )
}

export default GameSlide;
