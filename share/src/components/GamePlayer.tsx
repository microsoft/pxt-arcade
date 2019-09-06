import React from 'react';

import SimFrame from './SimFrame';
import Joystick from './Joystick';
import GameButtons from './GameButtons';

import '../css/GamePlayer.css';
import { Simulator } from './simulator';


let sim: Simulator;

export interface GamePlayerProps {
    binJs: string
}

const GamePlayer: React.FC<GamePlayerProps> = props => {
    if (!sim) sim = new Simulator();

    sim.runCode(props.binJs);

    return (
        <div className="game-player">
            <Joystick simulator={sim} />
            <SimFrame simulator={sim} />
            <GameButtons simulator={sim} />
            <div className="game-player-background"></div>
            <div className="game-player-logo">MAKECODE</div>
            <div className="game-player-msft"></div>
            <div className="game-player-vent"></div>
        </div>
    );
}

export default GamePlayer;
