import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import "../Kiosk.css";
import { GameData } from "../Models/GameData";

interface IProps {
    kiosk: Kiosk;
    selected: Boolean;
    content: String;
  }

const AddGameButton: React.FC<IProps> = ({ kiosk, selected, content }) => {
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
        <div className="topButtonDiv">
            <button className="addGameButton" style={{backgroundColor: buttonColor}}>{content}</button>
        </div>
    )
}

export default AddGameButton;