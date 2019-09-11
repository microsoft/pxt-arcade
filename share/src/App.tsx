import React from 'react';
import './App.css';

import GamePlayer from './components/GamePlayer';
import GameModder, { GameModderState } from './components/GameModder';
import Share from './components/Share';
import HeaderBar from './components/HeaderBar';

import { loadAppInsights, tickEvent } from './telemetry/appinsights';

interface AppState {
    mode: "mod" | "play" | "share"
}

let lastBinary: string;
let playTimestamp: number;
export let gameModderState: GameModderState | {} = {};

// HACK: Disable scrolling in iOS
document.ontouchmove = function (e) {
    e.preventDefault();
}

export class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            mode: "mod"
        }

        this.playGame = this.playGame.bind(this);

        loadAppInsights(false);
        tickEvent("shareExperiment.landing");

        window.addEventListener('resize', this.setVh);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setVh);
    }

    render() {
        this.setVh();
        return (
            <div className="App">
                {this.state.mode === "mod" ?
                    <GameModder playHandler={this.playGame} changeMode={this.changeMode} /> :
                    (
                        this.state.mode === "play" ?
                            <GamePlayer binJs={lastBinary} changeMode={this.changeMode} /> :
                            <Share changeMode={this.changeMode} />
                    )
                }
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

    protected changeMode = (mode: "play" | "share" | "mod") => {
        this.setState({ mode });
    }

    protected setVh = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}

export default App;
