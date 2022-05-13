import { Kiosk } from "../Models/Kiosk";
import GameList from "./GameList";
import HighScoresList from "./HighScoresList";

interface IProps {
    kiosk: Kiosk
  }

const MainMenu: React.FC<IProps> = ({ kiosk }) => {
    return(
        <div>
            <div className="row">
                <div className="column">
                    <h1>Games</h1>
                    <GameList kiosk={kiosk} />
                </div>         
                <div className="column">
                    <h1>High Scores</h1>
                    <HighScoresList kiosk={kiosk} /> 
                </div>
            </div>
        </div>
    )
}
  
export default MainMenu;