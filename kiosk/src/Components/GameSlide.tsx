import { GameData } from "../Models/GameData";
interface IProps {
    buttonSelected: boolean;
    game: GameData;
}
const GameSlide: React.FC<IProps> = ({ buttonSelected, game }) => {
    const carouselSelected = buttonSelected ? "unselected" : "selected";

    return (
        <div className={`gameTile ${carouselSelected}`}>
            
            <div className="gameThumbnail" 
                style={{backgroundImage: `url("https://makecode.com/api/${game.id}/thumb")`}}
            />

            <div className="gameDetails">
                <div className="gameTitle">{game.name}</div>
                <div className="gameDescription">{game.description}</div>
            </div>
        </div>
    )
}

export default GameSlide;
