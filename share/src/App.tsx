import React from 'react';
import './App.css';

import GamePlayer from './components/GamePlayer';
import GameModder from './components/GameModder';

interface AppState {
    mode: "mod" | "play"
}

export class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            mode: "mod"
        }

        this.playGame = this.playGame.bind(this)
    }

    render() {
        return (
            <div className="App">
                {this.state.mode === "mod"
                    ? <GameModder playHandler={this.playGame} />
                    : <GamePlayer />
                }
            </div>
        );
    }

    playGame(binJs: string) {
        console.log(`I want to play this game that's ${Math.round((binJs.length / 256) / 1034)}kb!`)
        // TODO: connect to simulator
        this.setState({ mode: "play" })
    }
}

export default App;
