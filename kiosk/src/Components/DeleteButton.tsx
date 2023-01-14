import { useEffect } from "react";
import "../Kiosk.css";
import { Kiosk } from "../Models/Kiosk";

interface IProps {
    kiosk: Kiosk ;
    focused: boolean;
    pressed: boolean;
}

export const DeleteButton: React.FC<IProps> = ({ kiosk, focused, pressed }) => {
        //TODO: handle the case for the delete button when there are no kiosk games

    const specificButtonClass = focused ? "buttonSelected" : "buttonUnselected";

    useEffect(() => {
        if (pressed) {
            console.log(kiosk.games);
            kiosk.removeGameFromList()
        }
    }, [pressed]);

    return (
        <div className={`deleteGame ${specificButtonClass}`}>
            <p>Delete</p>
        </div>
    )
}
