import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import Carousel from "react-spring-3d-carousel";
import { PrimitiveRef } from "../Models/PrimitiveRef";
import "../Kiosk.css";

interface IProps {
    kiosk: Kiosk
  }

const AddingGame: React.FC<IProps> = ({ kiosk }) => {
    // TODO: make it so that when navigating upwards, the button is in it's "selected" state to show that users can access it
    // when they press down, they need to be able to get back to the game list. 
    return (
        <div>
            <div className="addInstructions">
                <h1>Add your game</h1>
                <h2>Upload your game</h2>
                <ol>
                    <li>Go to your game on your personal phone or computer</li>
                    <li>Click on the share button</li>
                    <li>Select "Share to Kiosk"</li>
                    <li>Add kiosk ID.\</li>
                </ol>
            </div>
            <div className="QRCodeHolder">
                <h3>Kiosk ID</h3>
                <h1>the id!</h1> 
            </div>
            <button>Return to menu</button>

        </div>
    )
}

export default AddingGame;