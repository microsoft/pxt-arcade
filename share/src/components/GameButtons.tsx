import React from 'react';

import '../css/GameButtons.css';
import { Simulator, SimulatorButton } from './simulator';
import { tickEvent } from '../telemetry/appinsights';

export interface GameButtonsProps {
    simulator: Simulator;
    changeMode: (mode: "play" | "share" | "mod") => void;
}

const SVG_WIDTH = 40;

class GameButtons extends React.Component<GameButtonsProps, {}>  {
    protected aButton: SVGCircleElement | undefined;
    protected aLabel: SVGTextElement | undefined;
    protected bButton: SVGCircleElement | undefined;
    protected bLabel: SVGTextElement | undefined;
    protected buttonPressCount: {[key: string]: number} = {};
    protected buttonPressInterval: any;

    componentDidMount() {
        this.aButton = this.refs["button-a"] as SVGCircleElement;
        this.aLabel = this.refs["label-a"] as SVGTextElement;
        this.bButton = this.refs["button-b"] as SVGCircleElement;;
        this.bLabel = this.refs["label-b"] as SVGTextElement;

        this.bindEvents(this.refs["button-bounds"] as HTMLElement)
    }

    componentWillUnmount() {
        this.aButton = undefined;
        this.aLabel = undefined;
        this.bButton = undefined;
        this.bLabel = undefined;
        this.cleanupInterval();
    }

    render() {
        const { changeMode } = this.props;
        return (
            <div className="game-buttons">
                <div className="spacer" />
                <div className="action-button">
                    <button className="share-mod-button" onClick={() => changeMode("share")}>Share</button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" ref="button-bounds" className="game-button-svg" viewBox="0 0 40 40" width="200px" height="200px">
                    <circle ref="button-b" cx="13" cy="28" r="9" fill="#333" stroke="#397382" strokeWidth="2.5" />
                    <text ref="label-b" x="13" y="28" textAnchor="middle" dy="2.5" fontSize="8">B</text>
                    <circle ref="button-a" cx="28" cy="11" r="9" fill="#333" stroke="#397382" strokeWidth="2.5" />
                    <text ref="label-a" x="28" y="11" textAnchor="middle" dy="2.5" fontSize="8">A</text>
                </svg>
            </div>
        )
    }

    protected updateButtonGesture(x: number, y: number) {
        const bounds = (this.refs["button-bounds"] as HTMLDivElement).getBoundingClientRect();

        const dx = ((x - bounds.left) * (SVG_WIDTH / bounds.width));
        const dy = ((y - bounds.top) * (SVG_WIDTH / bounds.height));

        const aDistance = Math.sqrt(Math.pow(dx - 30, 2) + Math.pow(dy - 13, 2));
        const bDistance = Math.sqrt(Math.pow(dx - 15, 2) + Math.pow(dy - 28, 2));

        this.setButtonState(SimulatorButton.A, aDistance < 8)
        this.setButtonState(SimulatorButton.B, bDistance < 8)
    }

    protected clearButtonPresses() {
        this.setButtonState(SimulatorButton.A, false);
        this.setButtonState(SimulatorButton.B, false);
    }

    protected setButtonState(button: SimulatorButton, pressed: boolean) {
        const isAButton = button === SimulatorButton.A;
        const circle = isAButton ? this.aButton : this.bButton;
        const label = isAButton ? this.aLabel : this.bLabel;

        if (circle && label) {
            const pressedColor = "#249ca3";
            circle.setAttribute("fill", pressed ? pressedColor : "#333")
            label.setAttribute("fill", pressed ? "#333" : "")
        }

        const { simulator } = this.props;
        if (pressed) {
            if (!this.buttonPressCount[SimulatorButton[button]]) this.buttonPressCount[SimulatorButton[button]] = 0;
            this.buttonPressCount[SimulatorButton[button]] += 1;
            simulator.pressButton(button);
        }
        else simulator.releaseButton(button);
    }

    protected bindEvents(div: HTMLElement) {
        if (!div) return;

        if (hasPointerEvents()) {
            this.bindPointerEvents(div);
        }
        else if (isTouchEnabled()) {
            this.bindTouchEvents(div);
        }
        else {
            this.bindMouseEvents(div);
        }

        this.buttonPressInterval = setInterval(this.logEvents, 5000);
    }

    protected bindPointerEvents(div: HTMLElement) {
        let inGesture = false;

        div.addEventListener("pointerup", ev => {
            if (inGesture) {
                this.clearButtonPresses()
            }
            inGesture = false;
        });

        div.addEventListener("pointerdown", ev => {
            this.updateButtonGesture(ev.clientX, ev.clientY);
            inGesture = true
        });

        div.addEventListener("pointermove", ev => {
            if (inGesture) this.updateButtonGesture(ev.clientX, ev.clientY);
        });

        div.addEventListener("pointerleave", ev => {
            if (inGesture) {
                this.clearButtonPresses()
            }
            inGesture = false;
        });
    }

    protected bindMouseEvents(div: HTMLElement) {
        let inGesture = false;

        div.addEventListener("mouseup", ev => {
            if (inGesture) {
                this.clearButtonPresses()
            }
            inGesture = false;
        });

        div.addEventListener("mousedown", ev => {
            this.updateButtonGesture(ev.clientX, ev.clientY);
            inGesture = true
        });

        div.addEventListener("mousemove", ev => {
            if (inGesture) this.updateButtonGesture(ev.clientX, ev.clientY);
        });

        div.addEventListener("mouseleave", ev => {
            if (inGesture) {
                this.clearButtonPresses()
            }
            inGesture = false;
        });
    }

    protected bindTouchEvents(div: HTMLElement) {
        let touchIdentifier: number | undefined;

        div.addEventListener("touchend", ev => {
            if (touchIdentifier) {
                const touch = getTouch(ev, touchIdentifier);

                if (touch) {
                    this.clearButtonPresses()
                    ev.preventDefault();
                }
            }
            touchIdentifier = undefined;
        });

        div.addEventListener("touchstart", ev => {
            touchIdentifier = ev.changedTouches[0].identifier;
            this.updateButtonGesture(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
        });

        div.addEventListener("touchmove", ev => {
            if (touchIdentifier) {
                const touch = getTouch(ev, touchIdentifier);

                if (touch) {
                    this.updateButtonGesture(touch.clientX, touch.clientY);
                    ev.preventDefault();
                }
            }
        });

        div.addEventListener("touchcancel", ev => {
            if (touchIdentifier) {
                const touch = getTouch(ev, touchIdentifier);

                if (touch) {
                    this.clearButtonPresses();
                }
            }
            touchIdentifier = undefined;
        });
    }

    protected logEvents = () => {
        if (Object.values(this.buttonPressCount).some(x => !!x)) {
            tickEvent("shareExperiment.play.buttonPress", this.buttonPressCount);
            Object.keys(this.buttonPressCount).forEach(k => this.buttonPressCount[k] = 0);
        }
    }

    protected cleanupInterval = () => {
        clearInterval(this.buttonPressInterval);
        this.buttonPressCount = {};
    }
}

function hasPointerEvents(): boolean {
    return typeof window != "undefined" && !!(window as any).PointerEvent;
}

function isTouchEnabled(): boolean {
    return typeof window !== "undefined" &&
        ('ontouchstart' in window                              // works on most browsers
            || (navigator && navigator.maxTouchPoints > 0));       // works on IE10/11 and Surface);
}

function getTouch(ev: TouchEvent, identifier: number) {
    for (let i = 0; i < ev.changedTouches.length; i++) {
        if (ev.changedTouches[i].identifier === identifier) {
            return ev.changedTouches[i];
        }
    }

    return undefined;
}

export default GameButtons;