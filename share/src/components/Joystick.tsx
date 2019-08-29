import React from 'react';

import { Simulator, SimulatorButton } from "./simulator";

import '../css/Joystick.css';

export interface JoystickProps {
    simulator: Simulator;
}

export class Joystick extends React.Component<JoystickProps, {}> {
    protected dPadUp: SVGRectElement | undefined;
    protected dPadDown: SVGRectElement | undefined;
    protected dPadLeft: SVGRectElement | undefined;
    protected dPadRight: SVGRectElement | undefined;
    protected joystickHandle: SVGCircleElement | undefined;

    protected joystickAnimation: number | undefined;

    componentDidMount() {
        this.dPadUp = this.refs["dpad-up"] as SVGRectElement;
        this.dPadDown = this.refs["dpad-down"] as SVGRectElement;
        this.dPadLeft = this.refs["dpad-left"] as SVGRectElement;
        this.dPadRight = this.refs["dpad-right"] as SVGRectElement;
        this.joystickHandle = this.refs["joystick-handle"] as SVGCircleElement;

        this.bindEvents(this.refs["joystick-container"] as HTMLDivElement);

        this.props.simulator.addChangeListener(this.buttonChangeListener);
    }

    componentWillUnmount() {
        this.dPadUp = undefined;
        this.dPadDown = undefined;
        this.dPadLeft = undefined;
        this.dPadRight = undefined;
        this.joystickHandle = undefined;

        this.props.simulator.removeChangeListener(this.buttonChangeListener);
    }

    render() {
        return (
            <div ref="joystick-container" className="game-joystick">
                <div className="spacer" />
                <svg xmlns="http://www.w3.org/2000/svg" ref="joystick-bounds" viewBox="0 0 40 40" width="200px" height="200px">
                    <circle id="joystick-background" cx="20" cy="20" r="16" fill="#dedede" stroke="#cecece" strokeWidth="2"/>
                    <rect ref="dpad-up" x="16" y="6" width="8" height="12" rx="2" fill="none" stroke="#cecece" strokeWidth="1" />
                    <rect ref="dpad-down" x="16" y="22" width="8" height="12" rx="2" fill="none" stroke="#cecece" strokeWidth="1" />
                    <rect ref="dpad-right" x="22" y="16" width="12" height="8" ry="2" fill="none" stroke="#cecece" strokeWidth="1" />
                    <rect ref="dpad-left" x="6" y="16" width="12" height="8" ry="2" fill="none" stroke="#cecece" strokeWidth="1" />
                    <circle ref="joystick-handle" cx="20" cy="20" r="6" fill="#ffffff" stroke="#999" strokeWidth="1" />
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
            button.setAttribute("fill", isPressed ? "red" : "none");
        }
    }

    protected bindEvents(div: HTMLDivElement) {
        if (!div) return;

        if (hasPointerEvents()) {
            this.bindPointerEvents(div);
        }
    }

    protected bindPointerEvents(div: HTMLDivElement) {
        div.addEventListener("pointerup", ev => {
            this.updateJoystickDrag(ev.clientX, ev.clientY);
        });

        div.addEventListener("pointerdown", ev => {
            this.updateJoystickDrag(ev.clientX, ev.clientY);
        });

        div.addEventListener("pointermove", ev => {
            this.updateJoystickDrag(ev.clientX, ev.clientY);
        });

        div.addEventListener("pointerleave", ev => {
            this.updateJoystickDrag(ev.clientX, ev.clientY);
        });
    }

    protected updateJoystickDrag(x: number, y: number) {
        if (this.joystickHandle) {
            const bounds = (this.refs["joystick-bounds"] as HTMLDivElement).getBoundingClientRect();

            const dx = ((x - bounds.left) * (40 / bounds.width)) - 20;
            const dy = ((y - bounds.top) * (40 / bounds.height)) - 20;

            const angle = Math.atan2(dy, dx);
            const distance = Math.min(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)), 10);

            this.joystickHandle.setAttribute("cx", "" + (20 + distance * Math.cos(angle)))
            this.joystickHandle.setAttribute("cy", "" + (20 + distance * Math.sin(angle)))
        }
    }

    protected animateJoystick() {
        if (this.joystickHandle) {

        }
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

const pointerEvents = (() => {
    if (hasPointerEvents()) {
        return {
            up: "pointerup",
            down: ["pointerdown"],
            move: "pointermove",
            enter: "pointerenter",
            leave: "pointerleave"
        }
    } else if (isTouchEnabled()) {
        return {
            up: "mouseup",
            down: ["mousedown", "touchstart"],
            move: "touchmove",
            enter: "touchenter",
            leave: "touchend"
        }
    } else {
        return {
            up: "mouseup",
            down: ["mousedown"],
            move: "mousemove",
            enter: "mouseenter",
            leave: "mouseleave"
        }
    }
})();

export default Joystick;