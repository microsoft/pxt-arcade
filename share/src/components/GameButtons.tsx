import React from 'react';

import '../css/GameButtons.css';
import { Simulator } from './simulator';

export interface GameButtonsProps {
    simulator: Simulator;
}

const GameButtons: React.FC<GameButtonsProps> = props => {
    return (
        <div className="game-buttons">
            <div className="spacer" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="200px" height="200px">
                <circle id="button-b" cx="10" cy="28" r="8" fill="#ffffff" stroke="#999" strokeWidth="1" />
                <text x="10" y="28" textAnchor="middle" dy="2.5" fontSize="8">B</text>
                <circle id="button-a" cx="25" cy="13" r="8" fill="#ffffff" stroke="#999" strokeWidth="1" />
                <text x="25" y="13" textAnchor="middle" dy="2.5" fontSize="8">A</text>
            </svg>
        </div>
    )
}

export default GameButtons;