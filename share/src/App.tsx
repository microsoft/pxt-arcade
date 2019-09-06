import React from 'react';
import './App.css';

import GamePlayer from './components/GamePlayer';
import GameModder from './components/GameModder';
import Share from './components/Share';
import HeaderBar from './components/HeaderBar';

import { loadAppInsights, tickEvent } from './telemetry/appinsights';

interface AppState {
    mode: "mod" | "play"
}

let lastBinary: string;
let playTimestamp: number;

export class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            mode: "mod"
        }

        this.playGame = this.playGame.bind(this);

        loadAppInsights(false);
        tickEvent("shareExperiment.landing");
    }

    render() {
        return (
            <div className="App">
                {this.state.mode === "mod"
                    ? <GameModder playHandler={this.playGame} />
                    : <GamePlayer binJs={lastBinary} />
                }

                {/* <Share /> */}
            </div>
        );
    }

    playGame(binJs: string) {
        lastBinary = binJs;
        playTimestamp = Date.now();

        this.setState({ mode: "play" })
        tickEvent("shareExperiment.play");
    }

    modGame() {
        if (playTimestamp) {
            // TODO ensure that time is calculated on play -> share page navigation as well
            tickEvent("shareExperiment.playtime", { "duration": Date.now() - playTimestamp });
            playTimestamp = null;
        }

        this.setState({ mode: "mod" });
        tickEvent("shareExperiment.mod");
    }
}

export default App;
