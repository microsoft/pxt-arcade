import { useEffect, useState } from "react";
import { Kiosk } from "../Models/Kiosk";
import { KioskState } from "../Models/KioskState";
import configData from "../config.json"
import "../Kiosk.css";
import { OnResultFunction, QrReader } from 'react-qr-reader';

interface IProps {
    kiosk: Kiosk
}

const QrSuccess: React.FC<IProps> = ({ kiosk }) => {
    // should pass the game's title and the kiosk's id through to give more feedback to the user
    return (
        <div className="qrSuccess">
            <p>You have successfully uploaded your game to the kiosk!</p>
            <p>You can close this window. Happy playing!</p>
        </div>
    )
}
export default QrSuccess;