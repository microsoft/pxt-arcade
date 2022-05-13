import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"

interface IProps {
    kiosk: Kiosk
  }

const GameList: React.FC<IProps> = ({ kiosk }) => {
    const [games, setGames] = useState(kiosk.games);

    const renderList = (): JSX.Element[] => {
        let tabIndex: number = 0;
        if (kiosk.selectedGameId) {
            const indexOfSelected = games.map(item => item.id).indexOf(kiosk.selectedGameId);
            if (indexOfSelected > 0) {
                const selectedSection = games.splice(indexOfSelected);
                games.splice(0, 0, ...selectedSection);
            }
        }
        
        return games.map((game) => {
            return (
                <div className="gameDesc" tabIndex={tabIndex++} onClick={() => kiosk.launchGame(game.id)} onFocus={() => kiosk.selectGame(game.id)} key={tabIndex}>
                    <div className="gameDescHeader">
                        <span className="gameTitle">
                            {game.name}
                        </span>
                        <span>
                            {game.id}
                        </span>
                    </div>
                    <div className="gameDescLeft">
                        <img className="gameListGameImage" src={`https://makecode.com/api/${game.id}/thumb`} alt={game.name} />
                    </div>
                    <div className="gameDescContent">
                        {game.desc}
                    </div>
                </div>
            )
        })
    }

    useEffect(() => {
        kiosk.initialize().then(() => {
            setGames(kiosk.games);
        })
    });

    useEffect(() => {
        let selectedTabIndex: number = 0;
        let focusable = document.querySelectorAll('[tabindex]:not([tabindex="-1"])') as NodeListOf<HTMLInputElement>;
        const gameListParent = document.getElementById("gameList")! as HTMLDivElement;
                
        function nextItem() {
            if (configData.UseInPlaceGameListScroll) {
                const currentGameElement = gameListParent.firstChild as HTMLInputElement;
                currentGameElement.remove();
                gameListParent.appendChild(currentGameElement);
                (gameListParent.firstChild as HTMLInputElement).focus();
            }
            else {
                selectedTabIndex = (selectedTabIndex + 1) % focusable.length;
                focusable[selectedTabIndex].focus();
            }
        }
    
        function prevItem() {
            if (configData.UseInPlaceGameListScroll) {
                const currentGameElement = gameListParent.lastChild as HTMLInputElement;
                currentGameElement.remove();
                gameListParent.insertBefore(currentGameElement, gameListParent.firstChild);
                (gameListParent.firstChild as HTMLInputElement).focus();
            }
            else {
                selectedTabIndex = (selectedTabIndex + (focusable.length - 1)) % focusable.length;
                focusable[selectedTabIndex].focus();
            }
        }
    
        function clickItem() {
            if (configData.UseInPlaceGameListScroll) {
                (gameListParent.firstChild as HTMLInputElement).click();
            }
            else {
                if (focusable[selectedTabIndex]) {
                    focusable[selectedTabIndex].click();
                }
            }
        }
            
        const updateLoop = () => {
            if (kiosk.state !== KioskState.MainMenu) {
                return;
            }
            
            if (kiosk.gamepadManager.isAButtonPressed()) {
                clickItem();
            }

            if (kiosk.gamepadManager.isUpPressed()) {
                prevItem();
            }

            if (kiosk.gamepadManager.isDownPressed()) {
                nextItem();
            }
        }

        // Make sure we keep track of the interval so we can clean it up as needed.
        let intervalId: any = null;

        // There are some things we only want to do if there are items in the list.
        if (focusable.length) {
            focusable[0].focus();
            intervalId = setInterval(() => {
                updateLoop();
            }, configData.GamepadPollLoopMilli);
        }
        
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [games]);

    return(
        <div id="gameList">
            {renderList()}
        </div>
    )
}
  
export default GameList;