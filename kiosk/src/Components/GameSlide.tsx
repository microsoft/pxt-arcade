import { GameData } from "../Models/GameData";
import { Kiosk } from "../Models/Kiosk";
import HighScoresList from "./HighScoresList";
interface IProps {
    kiosk: Kiosk;
    buttonSelected: boolean;
    game: GameData;
}
const GameSlide: React.FC<IProps> = ({ kiosk, buttonSelected, game }) => {
    const carouselSelected = buttonSelected ? "unselected" : "selected";

    return (
        <div className={`gameTile ${carouselSelected}`}>
            
            <div className="gameThumbnail" 
                style={{backgroundImage: `url("https://makecode.com/api/${game.id}/thumb")`}}
            />

            <div className="gameDetails">
                <div className="gameTitle">{game.name}</div>
                <div className="gameDescription">{game.description} <hr/></div>
                <HighScoresList kiosk={kiosk} gameId={game.id} highScoreMode={game.highScoreMode} />
            </div>
        </div>
    )
}

export default GameSlide;
