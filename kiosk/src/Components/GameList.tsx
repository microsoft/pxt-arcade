import React, { useEffect, useState, useLayoutEffect } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import "../Kiosk.css";
import { KeyboardManager } from "../Models/KeyboardManager";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/keyboard";
interface IProps {
    kiosk: Kiosk;
    buttonSelected: Boolean;
  }


const GameList: React.FC<IProps> = ({ kiosk, buttonSelected }) => {
    const [games, setGames] = useState(kiosk.games);
    let localSwiper: any;
    const keyboardManager = new KeyboardManager();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const leftKeyEvent = (eventType: string) => {
        return new KeyboardEvent(eventType, {
            "key": "ArrowLeft",
            "code": "ArrowLeft",
            "composed": true,
            "keyCode": 37,
            "cancelable": true,
            "view": window
        });
    }

    const rightKeyEvent = (eventType: string) => {
        return new KeyboardEvent(eventType, {
            "key": "ArrowRight",
            "code": "ArrowRight",
            "composed": true,
            "keyCode": 39,
            "cancelable": true,
            "view": window
        });
    }

    const changeFocusedItem = () => {
        const gameIndex = (localSwiper.activeIndex - 2) % games.length
        setSelectedIndex(gameIndex);
        kiosk.selectGame(gameIndex);
    }

    const clickItem = () => {
        const gameId = kiosk.selectedGame?.id;
        if (gameId) {
            kiosk.launchGame(gameId);
        }
    }
        
    const updateLoop = () => {
        if (kiosk.state !== KioskState.MainMenu) {
            return;
        }

        if (kiosk.gamepadManager.isAButtonPressed()) {
            clickItem();
        }

        if (kiosk.gamepadManager.isLeftPressed()) {
            if (!keyboardManager.isLeftPressed()) {
                document.dispatchEvent(leftKeyEvent("keydown"));
                document.dispatchEvent(leftKeyEvent("keyup"));
            }
            changeFocusedItem();
        }

        if (kiosk.gamepadManager.isRightPressed()) {
            if (!keyboardManager.isRightPressed()) {
                document.dispatchEvent(rightKeyEvent("keydown"));
                document.dispatchEvent(rightKeyEvent("keyup"));
            }
            changeFocusedItem();
        }
    }

    useEffect(() => {
        kiosk.initialize().then(() => {
            setGames(kiosk.games);

            if (!kiosk.selectedGame && kiosk.games.length) {
                kiosk.selectGame(0);
            }

            if (kiosk.selectedGameIndex) {
                setSelectedIndex(kiosk.selectedGameIndex);
                localSwiper.slideTo(kiosk.selectedGameIndex + 2);
            }
        })
    }, []);

    useEffect(() => {
        // Make sure we keep track of the interval so we can clean it up as needed.
        let intervalId: any = null;

        // There are some things we only want to do if there are games.
        if (games.length) {
            intervalId = setInterval(() => {
                if (!buttonSelected) {
                    updateLoop();
                }
            }, configData.GamepadPollLoopMilli);
        }
        
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [games, buttonSelected]);

    if (!kiosk.games || !kiosk.games.length) {
        return(<div></div>);
    }

    return(
        <div className="carouselWrap">
            <Swiper
                effect={"coverflow"}
                loop={true}
                slidesPerView={1.5}
                centeredSlides={true}
                spaceBetween={10}
                onSwiper={(swiper) => {
                    localSwiper = swiper;
                }}
                coverflowEffect={{
                    scale: 0.75,
                    depth: 5,
                }}
                allowTouchMove={false}
                modules={[EffectCoverflow, Keyboard]}
                keyboard={{enabled: true}}
            >
                {kiosk.games.map((game, index) => {
                    return (
                        <SwiperSlide>
                            <div className="gameTile" style={{ 
                                backgroundImage: `url("https://makecode.com/api/${game.id}/thumb")` 
                            }}>
                                <div className="gameLabelBackground">
                                    <div className="gameTitle">{game.name}</div>
                                    <div className="gameDescription">{game.description}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}
  
export default GameList;