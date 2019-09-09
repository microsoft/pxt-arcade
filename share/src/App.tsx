import React from 'react';
import './App.css';

import GamePlayer from './components/GamePlayer';
import GameModder from './components/GameModder';
import Share from './components/Share';
import HeaderBar from './components/HeaderBar';

import { loadAppInsights, tickEvent } from './telemetry/appinsights';
import { UserProject } from './components/util';

interface AppState {
    mode: "mod" | "play" | "share"
}

let lastBinary: UserProject;
let playTimestamp: number;


// Disable scrolling in iOS
document.ontouchmove = function (e) {
    e.preventDefault();
}

export class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            mode: "share"
        }

        this.playGame = this.playGame.bind(this);

        loadAppInsights(false);
        tickEvent("shareExperiment.landing");
    }

    render() {
        return (
            <div className="App">
                {this.state.mode === "mod" ?
                    <GameModder playHandler={this.playGame} changeMode={this.changeMode} /> :
                    (
                        this.state.mode === "play" ?
                            <GamePlayer proj={lastBinary} changeMode={this.changeMode} /> :
                            <Share proj={lastBinary} changeMode={this.changeMode} />
                    )
                }
            </div>
        );
    }

    playGame(binJs: UserProject) {
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

    protected changeMode = (mode: "play" | "share" | "mod") => {
        this.setState({ mode });
    }
}

// Disable scrolling in iOS
document.ontouchmove = function (e) {
    e.preventDefault();
}

export default App;
