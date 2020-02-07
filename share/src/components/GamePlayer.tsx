import React from 'react';

import SimFrame from './SimFrame';
import Joystick from './Joystick';
import GameButtons from './GameButtons';

import '../css/GamePlayer.css';
import { Simulator } from './simulator';
import { UserProject } from './util';


export interface GamePlayerProps {
    proj: UserProject;
    changeMode: (mode: "play" | "share" | "mod") => void;
}

const GamePlayer: React.FC<GamePlayerProps> = props => {
    let sim = new Simulator();

    sim.runCode(props.proj.binJs);

    return (
        <div className="game-player">
            <Joystick simulator={sim} changeMode={props.changeMode} />
            <SimFrame simulator={sim} />
            <GameButtons simulator={sim} changeMode={props.changeMode} />
            <div className="game-player-background"></div>
            <div className="game-player-logo">MAKECODE</div>
            <div className="game-player-msft"></div>
            <div className="game-player-vent"></div>
        </div>
    );
}

export default GamePlayer;
