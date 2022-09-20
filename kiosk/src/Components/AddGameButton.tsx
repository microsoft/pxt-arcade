import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import "../Kiosk.css";
import { GameData } from "../Models/GameData";

interface IProps {
    kiosk: Kiosk;
    selected: Boolean;
  }

const AddGameButton: React.FC<IProps> = ({ kiosk, selected }) => {
    
    const [buttonActive, setButtonState] = useState(selected);
    let buttonColor = buttonActive ? "lightblue" : "transparent";

    const updateButton = () => {
        buttonColor = buttonActive ? "lightblue" : "transparent";
    }

    useEffect(() => {
        setButtonState(selected);
        updateButton();
    });

    return (
        <div className="buttonDiv">
            <button className="addGame" style={{backgroundColor: buttonColor}}>Add your Game</button>
        </div>
    )
}

export default AddGameButton;