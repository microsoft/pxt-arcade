import React from 'react';
import './App.css';

import GamePlayer from './components/GamePlayer';
import GameModder, { GameModderState } from './components/GameModder';
import Share from './components/Share';
import HeaderBar from './components/HeaderBar';

import { loadAppInsights, tickEvent } from './telemetry/appinsights';
import { UserProject } from './components/util';

interface AppState {
    mode: "mod" | "play" | "share"
}

let lastBinary: UserProject;
let timestamp: number;
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
        timestamp = Date.now();

        window.addEventListener('resize', this.setVh);
        window.addEventListener("beforeunload", this.exitTick);
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
                            <GamePlayer proj={lastBinary} changeMode={this.changeMode} /> :
                            <Share proj={lastBinary} changeMode={this.changeMode} />
                    )
                }
            </div>
        );
    }

    playGame(binJs: UserProject) {
        lastBinary = binJs;

        this.changeMode("play")
    }

    protected changeMode = (mode: "play" | "share" | "mod") => {
        // log new mode
        tickEvent(`shareExperiment.${mode}${this.state.mode == "share" ? ".again" : ""}`);

        // calculate time in previous
        let now = Date.now();
        tickEvent(`shareExperiment.${this.state.mode}.time`, { "duration": now - timestamp });
        timestamp = now;

        this.setState({ mode });
    }

    protected setVh = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    protected exitTick = () => {
        tickEvent("shareExperiment.exit");
        (window as any).appInsights.flush();
        window.removeEventListener("beforeunload", this.exitTick);
    }

    componentDidMount() {
        document.title = "MakeCode Arcade";
        tickEvent("shareExperiment.enter");
    }
}

export default App;
