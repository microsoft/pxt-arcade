import React from 'react';

import { Simulator, SimulatorButton } from "./simulator";
import { tickEvent } from '../telemetry/appinsights';

import '../css/Joystick.css';

export interface JoystickProps {
    simulator: Simulator;
    changeMode: (mode: "play" | "share" | "mod") => void;
}

const SVG_WIDTH = 40;
const HALF_WIDTH = SVG_WIDTH >> 1;

export class Joystick extends React.Component<JoystickProps, {}> {
    protected dPadUp: SVGRectElement | undefined;
    protected dPadDown: SVGRectElement | undefined;
    protected dPadLeft: SVGRectElement | undefined;
    protected dPadRight: SVGRectElement | undefined;
    protected joystickHandle: SVGCircleElement | undefined;

    protected joystickAnimation: number | undefined;

    protected handleX = SVG_WIDTH >> 1;
    protected handleY = SVG_WIDTH >> 1;
    protected lastOctet: number | undefined;

    protected joystickGestureCount: number = 0;
    protected joystickGestureInterval: any;

    componentDidMount() {
        this.dPadUp = this.refs["dpad-up"] as SVGRectElement;
        this.dPadDown = this.refs["dpad-down"] as SVGRectElement;
        this.dPadLeft = this.refs["dpad-left"] as SVGRectElement;
        this.dPadRight = this.refs["dpad-right"] as SVGRectElement;
        this.joystickHandle = this.refs["joystick-handle"] as SVGCircleElement;

        this.bindEvents(this.refs["joystick-bounds"] as HTMLDivElement);

        this.props.simulator.addChangeListener(this.buttonChangeListener);
    }

    componentWillUnmount() {
        this.dPadUp = undefined;
        this.dPadDown = undefined;
        this.dPadLeft = undefined;
        this.dPadRight = undefined;
        this.joystickHandle = undefined;

        this.props.simulator.removeChangeListener(this.buttonChangeListener);
        this.cleanupInterval();
    }

    render() {
        const { changeMode } = this.props;
        return (
            <div ref="joystick-container" className="game-joystick">
                <div className="spacer" />
                <div className="action-button">
                    <button className="share-mod-button" onClick={() => changeMode("mod")}>Mod</button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" ref="joystick-bounds" className="game-joystick-svg" viewBox="1 0 40 40" width="200px" height="200px">
                    <circle id="joystick-background" cx="20" cy="20" r="16" fill="#397382" stroke="#397382" strokeWidth="2"/>
                    <rect ref="dpad-up" x="16" y="6" width="8" height="12" rx="2" fill="#cecece" stroke="none" strokeWidth="1" />
                    <rect ref="dpad-down" x="16" y="22" width="8" height="12" rx="2" fill="#cecece" stroke="none" strokeWidth="1" />
                    <rect ref="dpad-right" x="22" y="16" width="12" height="8" ry="2" fill="#cecece" stroke="none" strokeWidth="1" />
                    <rect ref="dpad-left" x="6" y="16" width="12" height="8" ry="2" fill="#cecece" stroke="none" strokeWidth="1" />
                    <circle cx="20" cy="20" r="6" fill="#cecece" />
                    <circle ref="joystick-handle" cx="20" cy="20" r="6" fill="#333" stroke="#999" strokeWidth="2" />
                </svg>
            </div>
        )
    }

    protected buttonChangeListener = (button: SimulatorButton, isPressed: boolean) => {
        switch (button) {
            case SimulatorButton.Down:
                this.updateDirection(this.dPadDown, isPressed);
                break;
            case SimulatorButton.Up:
                this.updateDirection(this.dPadUp, isPressed);
                break;
            case SimulatorButton.Left:
                this.updateDirection(this.dPadLeft, isPressed);
                break;
            case SimulatorButton.Right:
                this.updateDirection(this.dPadRight, isPressed);
                break;
        }
    }

    protected updateDirection(button: SVGRectElement | undefined, isPressed: boolean) {
        if (button) {
            button.setAttribute("fill", isPressed ? "#249ca3" : "#cecece");
        }
    }

    protected bindEvents(div: HTMLDivElement) {
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

        this.joystickGestureInterval = setInterval(this.logEvents, 5000);
    }

    protected bindPointerEvents(div: HTMLDivElement) {
        let inGesture = false;

        div.addEventListener("pointerup", ev => {
            if (inGesture) {
                this.updateJoystickDrag(ev.clientX, ev.clientY);
                this.startAnimation();
            }
            inGesture = false;
        });

        div.addEventListener("pointerdown", ev => {
            this.updateJoystickDrag(ev.clientX, ev.clientY);
            inGesture = true
        });

        div.addEventListener("pointermove", ev => {
            if (inGesture) this.updateJoystickDrag(ev.clientX, ev.clientY);
        });

        div.addEventListener("pointerleave", ev => {
            if (inGesture) {
                this.updateJoystickDrag(ev.clientX, ev.clientY);
                this.startAnimation();
            }
            inGesture = false;
        });
    }

    protected bindMouseEvents(div: HTMLDivElement) {
        let inGesture = false;

        div.addEventListener("mouseup", ev => {
            if (inGesture) {
                this.updateJoystickDrag(ev.clientX, ev.clientY);
                this.startAnimation();
            }
            inGesture = false;
        });

        div.addEventListener("mousedown", ev => {
            this.updateJoystickDrag(ev.clientX, ev.clientY);
            inGesture = true
        });

        div.addEventListener("mousemove", ev => {
            if (inGesture) this.updateJoystickDrag(ev.clientX, ev.clientY);
        });

        div.addEventListener("mouseleave", ev => {
            if (inGesture) {
                this.updateJoystickDrag(ev.clientX, ev.clientY);
                this.startAnimation();
            }
            inGesture = false;
        });
    }

    protected bindTouchEvents(div: HTMLDivElement) {
        let touchIdentifier: number | undefined;

        div.addEventListener("touchend", ev => {
            if (touchIdentifier) {
                const touch = getTouch(ev, touchIdentifier);

                if (touch) {
                    this.updateJoystickDrag(touch.clientX, touch.clientY);
                    this.startAnimation();
                    ev.preventDefault();
                }
            }
            touchIdentifier = undefined;
        });

        div.addEventListener("touchstart", ev => {
            touchIdentifier = ev.changedTouches[0].identifier;
            this.updateJoystickDrag(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
        });

        div.addEventListener("touchmove", ev => {
            if (touchIdentifier) {
                const touch = getTouch(ev, touchIdentifier);

                if (touch) {
                    this.updateJoystickDrag(touch.clientX, touch.clientY);
                    ev.preventDefault();
                }
            }
        });

        div.addEventListener("touchcancel", ev => {
            if (touchIdentifier) {
                const touch = getTouch(ev, touchIdentifier);

                if (touch) {
                    this.updateJoystickDrag(touch.clientX, touch.clientY);
                    this.startAnimation();
                }
            }
            touchIdentifier = undefined;
        });
    }

    protected updateJoystickDrag(x: number, y: number) {
        if (this.joystickHandle) {
            const bounds = (this.refs["joystick-bounds"] as HTMLDivElement).getBoundingClientRect();

            const dx = ((x - bounds.left) * (SVG_WIDTH / bounds.width)) - HALF_WIDTH;
            const dy = ((y - bounds.top) * (SVG_WIDTH / bounds.height)) - HALF_WIDTH;

            const angle = Math.atan2(dy, dx);
            const distance = Math.min(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)), 10);

            this.setHandlePosition(HALF_WIDTH + distance * Math.cos(angle), HALF_WIDTH + distance * Math.sin(angle));
        }
    }

    protected startAnimation() {
        this.clearButtonPresses();
        if (this.joystickHandle) {
            this.stopAnimation();

            const animationFrame = () => {
                let distance = this.getHandleDistance();

                if (distance < 0.5) {
                    this.setHandlePosition(HALF_WIDTH, HALF_WIDTH, true);
                    this.stopAnimation();
                }
                else {
                    const angle = this.getHandleAngle();
                    distance = Math.max(distance - 1, 0);
                    this.setHandlePosition(HALF_WIDTH + distance * Math.cos(angle), HALF_WIDTH + distance * Math.sin(angle), true);
                    this.joystickAnimation = requestAnimationFrame(animationFrame);
                }
            }

            this.joystickAnimation = requestAnimationFrame(animationFrame);
        }
    }

    protected stopAnimation() {
        if (this.joystickAnimation) {
            cancelAnimationFrame(this.joystickAnimation);
            this.joystickAnimation = undefined;
            this.joystickGestureCount += 1;
        }
    }

    protected logEvents = () => {
        if (this.joystickGestureCount > 0) {
            tickEvent("shareExperiment.play.joystickGestureUp", {"count": this.joystickGestureCount});
            this.joystickGestureCount = 0;
        }
    }

    protected cleanupInterval = () => {
        clearInterval(this.joystickGestureInterval);
        this.joystickGestureCount = 0;
    }

    /**
     *
     * @param x The x location in SVG coordinates
     * @param y The y location in SVG coordinates
     */
    protected setHandlePosition(x: number, y: number, animation = false) {
        if (this.joystickHandle) {
            this.joystickHandle.setAttribute("cx", "" + x)
            this.joystickHandle.setAttribute("cy", "" + y)

            this.handleX = x;
            this.handleY = y;

            if (!animation) {
                if (this.getHandleDistance() < 5) {
                    this.clearButtonPresses();
                }
                else {
                    const { simulator } = this.props;
                    const angle = this.getHandleAngle();
                    const octet = (5 + Math.floor((angle / (Math.PI / 4)) - 0.5)) % 8;

                    if (octet === this.lastOctet) return;
                    this.lastOctet = octet;

                    let left = false;
                    let right = false;
                    let up = false;
                    let down = false;

                    switch (octet) {
                        case 0:
                            left = true;
                            break;
                        case 1:
                            left = true;
                            up = true;
                            break;
                        case 2:
                            up = true;
                            break;
                        case 3:
                            up = true;
                            right = true;
                            break;
                        case 4:
                            right = true;
                            break;
                        case 5:
                            right = true;
                            down = true;
                            break;
                        case 6:
                            down = true;
                            break;
                        case 7:
                            left = true;
                            down = true;
                            break;
                    }

                    if (down) simulator.pressButton(SimulatorButton.Down);
                    else simulator.releaseButton(SimulatorButton.Down);

                    if (up) simulator.pressButton(SimulatorButton.Up);
                    else simulator.releaseButton(SimulatorButton.Up);

                    if (left) simulator.pressButton(SimulatorButton.Left);
                    else simulator.releaseButton(SimulatorButton.Left);

                    if (right) simulator.pressButton(SimulatorButton.Right);
                    else simulator.releaseButton(SimulatorButton.Right);
                }
            }
        }
    }

    protected getHandleAngle() {
        return Math.atan2(this.handleY - HALF_WIDTH, this.handleX - HALF_WIDTH);;
    }

    protected getHandleDistance() {
        return Math.sqrt(Math.pow(this.handleX - HALF_WIDTH, 2) + Math.pow(this.handleY - HALF_WIDTH, 2));
    }

    protected clearButtonPresses() {
        const { simulator } = this.props;
        simulator.releaseButton(SimulatorButton.Down);
        simulator.releaseButton(SimulatorButton.Up);
        simulator.releaseButton(SimulatorButton.Left);
        simulator.releaseButton(SimulatorButton.Right);
        this.lastOctet = undefined;
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

export default Joystick;