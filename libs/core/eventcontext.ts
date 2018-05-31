namespace control {
    /**
     * Run code when a registered event happens.
     * @param id the event compoent id
     * @param value the event value to match
     */
    //% weight=20 blockGap=8 blockId="control_on_event" block="on event|from %src|with value %value"
    //% blockExternalInputs=1
    //% help="control/on-event"
    export function onEvent(src: number, value: number, handler: () => void, flags = 16) { // EVENT_LISTENER_DEFAULT_FLAGS
        const ctx = control.eventContext();
        if (!ctx)
            control.internalOnEvent(src, value, handler, flags);
        else
            ctx.registerHandler(src, value, handler, flags);
    }

    class FrameCallback {
        order: number
        handler: () => void
    }

    class EventHandler {
        src: number;
        value: number;
        handler: () => void;
        flags: number;

        constructor(src: number, value: number, handler: () => void, flags: number) {
            this.src = src;
            this.value = value;
            this.handler = handler;
        }

        register() {
            control.internalOnEvent(this.src, this.value, () => {
                if (this.handler) this.handler();
            }, this.flags)
        }

        unregister() {
            control.internalOnEvent(this.src, this.value, doNothing, this.flags);
        }
    }

    function doNothing() { }

    export class EventContext {
        private handlers: EventHandler[];
        private frameCallbacks: FrameCallback[];
        private frameWorker: number;
        private frameNo: number;
        private framesInSample: number;
        private timeInSample: number;
        public deltaTime: number;
        static onStats: (stats: string) => void;

        constructor() {
            this.handlers = [];
            this.frameNo = 0;
            this.framesInSample = 0;
            this.timeInSample = 0;
            this.deltaTime = 0;
            this.frameWorker = 0;
        }

        private registerFrameCallbacks() {
            if (!this.frameCallbacks) return;

            this.frameNo = 0;
            this.framesInSample = 0;
            this.timeInSample = 0;
            this.deltaTime = 0;
            let prevTime = control.millis();
            const worker = this.frameWorker;
            control.runInParallel(() => {
                while (worker == this.frameWorker) {
                    this.frameNo++
                    let loopStart = control.millis()
                    this.deltaTime = (loopStart - prevTime) / 1000.0
                    prevTime = loopStart;
                    for (let f of this.frameCallbacks) {
                        f.handler()
                    }
                    let runtime = control.millis() - loopStart
                    this.timeInSample += runtime
                    this.framesInSample++
                    if (this.timeInSample > 1000 || this.framesInSample > 30) {
                        if (EventContext.onStats) {
                            const fps = Math.round(this.framesInSample / (this.timeInSample / 1000));
                            EventContext.onStats(`${fps}fps`)
                        }
                        this.timeInSample = 0
                        this.framesInSample = 0
                    }
                    let delay = Math.max(1, 20 - runtime)
                    pause(delay)
                }
            })
        }

        register() {
            for (const h of this.handlers)
                h.register();
            this.registerFrameCallbacks();
        }

        unregister() {
            for (const h of this.handlers)
                h.unregister();
            this.frameWorker++;
        }

        registerFrameHandler(order: number, handler: () => void) {
            if (!this.frameCallbacks) {
                this.frameCallbacks = [];
                this.registerFrameCallbacks();
            }

            const fn = new FrameCallback()
            fn.order = order
            fn.handler = handler
            for (let i = 0; i < this.frameCallbacks.length; ++i) {
                if (this.frameCallbacks[i].order > order) {
                    this.frameCallbacks.insertAt(i, fn)
                    return
                }
            }
            this.frameCallbacks.push(fn)
        }

        registerHandler(src: number, value: number, handler: () => void, flags: number) {
            // already there?
            for (const h of this.handlers) {
                if (h.src == src && h.value == value) {
                    h.flags = flags;
                    h.handler = handler;
                    return;
                }
            }
            // register and push
            const hn = new EventHandler(src, value, handler, flags);
            this.handlers.push(hn);
            hn.register();
        }
    }

    let eventContexts: EventContext[];

    /**
     * Gets the current event context if any
     */
    export function eventContext(): EventContext {
        return eventContexts ? eventContexts[eventContexts.length - 1] : undefined;
    }

    /**
     * Pushes a new event context and clears all handlers
     */
    export function pushEventContext(): EventContext {
        if (!eventContexts)
            eventContexts = [];

        // unregister previous context
        const ctx = eventContext();
        if (ctx) ctx.unregister();
        // register again
        const n = new EventContext();
        eventContexts.push(n);
        return n;
    }

    /**
     * Pops the current event context and restore handlers if any previous context
     */
    export function popEventContext() {
        if (!eventContexts) return;

        // clear current context
        const ctx = eventContexts.pop();
        if (!ctx) return;
        ctx.unregister();

        // register old context again
        const context = eventContexts[eventContexts.length - 1];
        if (context)
            context.register();
        else
            eventContexts = undefined;
    }
}