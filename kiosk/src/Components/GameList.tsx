import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import Carousel from "react-spring-3d-carousel";
import { PrimitiveRef } from "../Models/PrimitiveRef";
import "../Kiosk.css";
import AddGameCard from "./AddGameButton";

interface IProps {
    kiosk: Kiosk;
    buttonSelected: Boolean;
  }


//Note: all commented things puts us closer to desired functionality but is not working

const GameList: React.FC<IProps> = ({ kiosk, buttonSelected }) => {
    const [games, setGames] = useState(kiosk.games);
    const [freezeControls, setFreeze] = useState(buttonSelected);
    const [indexRef, ] = useState(new PrimitiveRef(0));
    const [selectedIndex, setSelectedIndex] = useState(indexRef.value);
    
    const nextItem = () => {
        indexRef.value = (indexRef.value + 1) % games.length;
        setSelectedIndex(indexRef.value);
        kiosk.selectGame(games[indexRef.value].id);
    }

    const prevItem = () => {
        indexRef.value = (indexRef.value + games.length - 1) % games.length;
        setSelectedIndex(indexRef.value);
        kiosk.selectGame(games[indexRef.value].id);
    }

    const clickItem = () => {
        kiosk.launchGame(games[indexRef.value].id);
    }
        
    const updateLoop = () => {
        if (kiosk.state !== KioskState.MainMenu) {
            return;
        }

        if (kiosk.gamepadManager.isAButtonPressed()) {
            clickItem();
        }

        if (kiosk.gamepadManager.isLeftPressed()) {
            prevItem();
        }

        if (kiosk.gamepadManager.isRightPressed()) {
            nextItem();
        }
    }

    useEffect(() => {
        kiosk.initialize().then(() => {
            setGames(kiosk.games);
            setFreeze(buttonSelected);

            if (!kiosk.selectedGame && kiosk.games.length) {
                kiosk.selectGame(kiosk.games[0].id);
            }

            if (kiosk.selectedGame) {
                indexRef.value = kiosk.games.map(item => item.id).indexOf(kiosk.selectedGame.id);
            }
        })
    });

    useEffect(() => {
        // Make sure we keep track of the interval so we can clean it up as needed.
        let intervalId: any = null;

        // There are some things we only want to do if there are games.
        if (games.length) {
            intervalId = setInterval(() => {
                if (!freezeControls) {
                    updateLoop();
                }
            }, configData.GamepadPollLoopMilli);
        }
        
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [games, freezeControls]);

    useEffect(() => {
        if (kiosk.selectedGame) {
            setSelectedIndex(games.map(item => item.id).indexOf(kiosk.selectedGame!.id));
        }
    }, [kiosk.selectedGame]);

    if (!kiosk.games || !kiosk.games.length) {
        return(<div></div>);
    }

    const slides = kiosk.games.map((game, index) => {
        return {
            content: 
                <div className="gameTile" style={{ 
                    backgroundImage: `url("https://makecode.com/api/${game.id}/thumb")` 
                }}>
                    <div className="gameLabelBackground">
                        <div className="gameTitle">{game.name}</div>
                        <div className="gameDescription">{game.description}</div>
                    </div>
                </div>,
         onClick: () => kiosk.launchGame(game.id)
        };
    });

    return(
        <div className="carouselWrap">
            <Carousel
                slides={slides}
                showNavigation={false}
                goToSlide={selectedIndex}
            />
        </div>
    )
}
  
export default GameList;