import React from 'react';
import "../css/SimFrame.css";
import { Simulator } from './simulator';

// https://arcade.makecode.com/beta/--run?fullscreen=1&nofooter=1&id=13415-29846-81435-24572

export interface SimFrameProps {
    simulator: Simulator;
}

const SimFrame: React.FC<SimFrameProps> = props => {
    return (
        <div className="game-embed">
            <iframe ref={ref => props.simulator.setFrame(ref)} className="game-embed-frame" title="MakeCode Arcade Simulator" src="http://localhost:3232/--run?fullscreen=1&nofooter=1&proxyMessages=1&id=13415-29846-81435-24572" />
        </div>
    );
}


export default SimFrame;