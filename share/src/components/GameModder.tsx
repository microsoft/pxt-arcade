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
                <button ref="play-btn">
                    Play
                </button>
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