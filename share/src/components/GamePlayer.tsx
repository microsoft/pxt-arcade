import React from 'react';

import SimFrame from './SimFrame';
import Joystick from './Joystick';
import GameButtons from './GameButtons';

import '../css/GamePlayer.css';
import { Simulator } from './simulator';


let sim: Simulator;

const GamePlayer: React.FC = () => {
    if (!sim) sim = new Simulator();

    return (
        <div className="game-player">
            <Joystick simulator={sim} />
            <SimFrame simulator={sim} />
            <GameButtons simulator={sim} />
        </div>
    );
}

export default GamePlayer;
