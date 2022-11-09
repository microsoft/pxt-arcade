import React, { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import Carousel from "react-spring-3d-carousel";
import { PrimitiveRef } from "../Models/PrimitiveRef";
import "../Kiosk.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCoverflow, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/keyboard"
interface IProps {
    kiosk: Kiosk;
    buttonSelected: Boolean;
  }


const GameList: React.FC<IProps> = ({ kiosk, buttonSelected }) => {
    const [games, setGames] = useState(kiosk.games);
    let gameIndex: number = 0;
    let localSwiper: any;
    let slideChangeTriggered: boolean = false;
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const changeFocusedItem = (changeBy: number) => {
        const index = (localSwiper.activeIndex + changeBy) % games.length;        
        if (localSwiper) {
            localSwiper.slideTo(index);
            gameIndex = localSwiper.activeIndex;
        }
        console.log("after");
        console.log(gameIndex);
        setSelectedIndex(gameIndex);
        kiosk.selectGame(games[gameIndex].id);
    }

    const clickItem = () => {
        kiosk.launchGame(games[gameIndex].id);
    }
        
    const updateLoop = () => {
        console.log(slideChangeTriggered);
        if (kiosk.state !== KioskState.MainMenu) {
            return;
        }

        if (kiosk.gamepadManager.isAButtonPressed()) {
            clickItem();
        }

        if (kiosk.gamepadManager.isLeftPressed()) {
            if (slideChangeTriggered) {
                console.log("hello");
            }
            console.log("left pressed");
            changeFocusedItem(games.length - 1);
        }

        if (kiosk.gamepadManager.isRightPressed()) {
            console.log("right pressed");
            changeFocusedItem(1);

        }
    }

    useEffect(() => {
        kiosk.initialize().then(() => {
            setGames(kiosk.games);

            if (!kiosk.selectedGame && kiosk.games.length) {
                kiosk.selectGame(kiosk.games[0].id);
            }

            if (kiosk.selectedGame) {
                gameIndex = kiosk.games.map(item => item.id).indexOf(kiosk.selectedGame.id);
            }
        })
    });

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
            <Swiper
                effect={"coverflow"}
                loop={true}
                slidesPerView={1.5}
                centeredSlides={true}
                spaceBetween={10}
                onSwiper={(swiper) => localSwiper = swiper}
                onSlideChange={(swiper) => slideChangeTriggered = true}
                coverflowEffect={{
                    scale: 0.75,
                    depth: 5,
                }}
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