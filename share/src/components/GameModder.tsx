import React from 'react';

import '../css/GameModder.css';

export interface GameModderProps {
    playHandler: () => void
}
export interface GameModderState {
}

export class GameModder extends React.Component<GameModderProps, GameModderState> {
    protected playBtn: HTMLButtonElement | undefined;

    constructor(props: GameModderProps) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="game-modder">
                <div className="grid">
                    <div className="questions">
                        <h1>Mod your game!</h1>
                        <p>Fill in the questions to create your very own game.</p>
                        <h2>Name your hero:</h2>
                        <input placeholder="purple dragon">
                        </input>
                        <button ref="play-btn">
                            Play
                        </button>
                        <button ref="play-btn2">
                            Play2
                        </button>
                        <p>(Sprite Editor here)</p>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.playBtn = this.refs["play-btn"] as HTMLButtonElement;

        // events
        let that = this
        this.playBtn.addEventListener('click', that.props.playHandler)
    }

    componentWillUnmount() {
        this.playBtn = undefined;
    }
}

export default GameModder;