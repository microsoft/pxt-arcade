import { useEffect } from "react";
import "../Kiosk.css";
import { GameData } from "../Models/GameData";
import { Kiosk } from "../Models/Kiosk";


interface IProps {
    kiosk: Kiosk;
    gameId: string ;
    focused: boolean;
    pressed: boolean;
    onPressed: (p: boolean) => void;
}

export const DeleteButton: React.FC<IProps> = ({ kiosk, gameId, focused, pressed, onPressed }) => {
    const addedGamesLocalStorageKey: string = "UserAddedGames";
    const specificButtonClass = focused ? "deleteSelected" : "buttonUnselected";

    const getAllAddedGames= (): { [index: string]: GameData } => {
        const json = localStorage.getItem(addedGamesLocalStorageKey);
        if (!json) {
            return {};
        }
        const allAddedGames: { [index: string]: GameData } = JSON.parse(json);
        return allAddedGames;
    }


    useEffect(() => {
        console.log("got in this use effect");
        if (pressed) {
            console.log("got in pressed");
            const userAddedGames = getAllAddedGames();
            if (gameId in userAddedGames) {
                console.log("user added before");
                console.log(userAddedGames);
                delete userAddedGames[gameId];
                console.log("user added after deletion");
                console.log(userAddedGames);
                localStorage.setItem(addedGamesLocalStorageKey, JSON.stringify(userAddedGames));
                kiosk.games.splice(kiosk.selectedGameIndex!, 1);
                onPressed(true);
            }

        }
    }, [pressed]);

    return (
        <div className={`deleteGame ${specificButtonClass}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            <p>Delete Game</p>
        </div>
    )
}
