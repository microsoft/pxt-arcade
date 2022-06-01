import { Kiosk } from "../Models/Kiosk";
import GameList from "./GameList";
import HighScoresList from "./HighScoresList";

interface IProps {
    kiosk: Kiosk
  }

const MainMenu: React.FC<IProps> = ({ kiosk }) => {
    return(
        <div>
            <div>
                <h1 className="mainMenuHighScoreHeader">SELECT A GAME</h1>
                <GameList kiosk={kiosk} />
            </div>
            <HighScoresList kiosk={kiosk} />
        </div>
    )
}
  
export default MainMenu;