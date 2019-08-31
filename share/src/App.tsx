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

        this.toggleState = this.toggleState.bind(this)
    }

    render() {
        return (
            <div className="App">
                {this.state.mode === "mod"
                    ? <GameModder playHandler={this.toggleState} />
                    : <GamePlayer />
                }
            </div>
        );
    }

    toggleState() {
        this.setState({ mode: this.state.mode === "mod" ? "play" : "mod" })
    }
}

export default App;
