/**
* Program controls and events.
*/
//% weight=10 color="#31bca3" icon="\uf110" advanced=true
namespace control {
    const DEVICE_ID_NOTIFY = "notify";
    const DEVICE_ID_NOTIFY_ONE = "notifyone";

    let nextNotifyEvent = 1;

    export function allocateNotifyEvent(): number {
        return nextNotifyEvent++;
    }
    export function allocatePollEvent(): string {
        return "poll" + nextNotifyEvent++;
    }
    
    export class AnimationQueue {
        running: boolean;
        eventID: number;
        public interval: number;

        constructor() {
            this.running = false;
            this.eventID = control.allocateNotifyEvent();
            this.interval = 1;
        }

        /**
         * Runs 'render' in a loop until it returns false or the 'stop' function is called
         */
        runUntilDone(render: () => boolean) {
            const vid = this.eventID;

            // if other animation, wait for turn
            if (this.running)
                control.waitForEvent(DEVICE_ID_NOTIFY, vid);

            // check if the animation hasn't been cancelled since we've waiting
            if (this.isCancelled(vid))
                return;

            // run animation
            this.running = true;
            while (this.running
                && !this.isCancelled(vid)
                && render()) {
                pause(this.interval);
            }

            // check if the animation hasn't been cancelled since we've been waiting
            if (this.isCancelled(vid))
                return;

            // we're done
            this.running = false;
            // unblock 1 fiber
            control.raiseEvent(DEVICE_ID_NOTIFY_ONE, this.eventID);
        }

        isCancelled(evid: number) {
            return this.eventID !== evid;
        }

        /**
         * Cancels the current running animation and clears the queue
         */
        cancel() {
            if (this.running) {
                this.running = false;
                const evid = this.eventID;
                this.eventID = control.allocateNotifyEvent();
                // unblock fibers
                control.raiseEvent(DEVICE_ID_NOTIFY, evid);
            }
        }
    }

    class PollEvent {
        public eid: string;
        public vid: number;
        public start: number;
        public timeOut: number;
        public condition: () => boolean;
        public once: boolean;
        constructor(eid: string, vid: number, start: number, timeOut: number, condition: () => boolean, once: boolean) {
            this.eid = eid;
            this.vid = vid;
            this.start = start;
            this.timeOut = timeOut;
            this.condition = condition;
            this.once = once;
        }
    }

    let _pollEventQueue: PollEvent[] = undefined;

    function pollEvents() {
        while (_pollEventQueue.length > 0) {
            const now = control.millis();
            for (let i = 0; i < _pollEventQueue.length; ++i) {
                const ev = _pollEventQueue[i];
                if (ev.condition() || (ev.timeOut > 0 && now - ev.start > ev.timeOut)) {
                    control.raiseEvent(ev.eid, ev.vid);
                    if (ev.once) {
                        _pollEventQueue.splice(i, 1);
                        --i;
                    }
                }
            }
            pause(50);
        }
        // release fiber
        _pollEventQueue = undefined;
    }

    export function __queuePollEvent(timeOut: number, condition: () => boolean, handler: () => void) {
        const ev = new PollEvent(
            control.allocatePollEvent(),
            1,
            control.millis(),
            timeOut,
            condition,
            !handler
        );

        // start polling fiber if needed
        if (!_pollEventQueue) {
            _pollEventQueue = [ev];
            control.runInParallel(pollEvents);
        }
        else {
            // add to the queue
            _pollEventQueue.push(ev)
        }

        // register event
        if (handler)
            control.onEvent(ev.eid, ev.vid, handler);
        else // or wait
            control.waitForEvent(ev.eid, ev.vid);
    }
}

/**
 * Busy wait for a condition to be true
 * @param condition condition to test for
 * @param timeOut if positive, maximum duration to wait for in milliseconds
 */
//% blockId="pxt_pause_until"
function pauseUntil(condition: () => boolean, timeOut?: number): void {
    if (!condition || condition()) return; // optimistic path
    if (!timeOut) timeOut = 0;
    control.__queuePollEvent(timeOut, condition, undefined);
}

/**
 * Pause for the specified time in milliseconds
 * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
 */
//% help=loops/pause weight=99
//% async block="pause %pause=timePicker|ms"
//% blockId=device_pause blockNamespace="loops"
//% shims=loops::pause
function pause(ms: number): void {
}
