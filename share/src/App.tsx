import React from 'react';
import './App.css';

import GamePlayer from './components/GamePlayer';
import GameModder from './components/GameModder';
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
    }

    render() {
        return (
            <div className="App">
                <HeaderBar />
                {this.state.mode === "mod"
                    ? <GameModder playHandler={this.playGame} />
                    : <GamePlayer binJs={lastBinary} />
                }
            </div>
        );
    }

    playGame(binJs: string) {
        console.log(`I want to play this game that's ${Math.round((binJs.length / 256) / 1034)}kb!`)
        // TODO: connect to simulator
        lastBinary = binJs;
        playTimestamp = Date.now();

        this.setState({ mode: "play" })
        tickEvent("shareExperiment.play");
    }

    modGame() {
        if (playTimestamp) {
            tickEvent("shareExperiment.playtime", {"duration": Date.now() - playTimestamp});
            playTimestamp = null;
        }

        this.setState({ mode: "mod" });
        tickEvent("shareExperiment.mod");
    }
}

export default App;
