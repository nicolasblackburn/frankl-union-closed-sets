const EventEmitter = require('EventEmitter');

class Ticker {
    constructor(period, duration) {
        let ellapsedTime;
        let deltaTime;
        let lastTime;
        let state = TickerState.initial;
        let proc;
        let eventEmitter = {};
        Object.assign(eventEmitter, EventEmitter.applyMixin(eventEmitter));
    
        const stop = () => {
            if (state !== TickerState.stopped) {
                state = TickerState.stopped;
                clearInterval(proc);
            }
        };
    
        const update = () => {
            if (state === TickerState.started) {
                let currentTime;
                if (lastTime === null) {
                    lastTime = new Date().getTime();
                    currentTime = lastTime;
                } else {
                    currentTime = new Date().getTime();
                }
                deltaTime = currentTime - lastTime;
                lastTime = currentTime;
                ellapsedTime = Math.min(ellapsedTime + deltaTime, duration);
        
                eventEmitter.emit(TickerEvent.update, ellapsedTime, deltaTime);
        
                if (ellapsedTime === duration) {
                    stop();
                }
            }
        };
    
        Object.assign(this, {
            add: (fn, context) => {
                eventEmitter.on(TickerEvent.update, fn, context);
                return this;
            },
            remove: (fn, context) => {
                eventEmitter.off(TickerEvent.update, fn, context);
                return this;
            },
            start: () => {
                if (state === TickerState.initial) {
                    state = TickerState.started;
    
                    lastTime = null;
                    deltaTime = 0;
                    ellapsedTime = 0;
                    proc = setInterval(update, period);
                    update();
    
                } else if (state === TickerState.paused) {
                    state = TickerState.started;
                    lastTime = null;
                    update();
    
                }
            },
            pause: () => {
                if (state === TickerState.started) {
                    update();
                    state = TickerState.paused;
                }
            },
            stop,
            time: () => ellapsedTime,
            duration: () => duration
        });
    }
}

const TickerEvent = {
    update: 'TickerEvent.update'
}

const TickerState = {
    initial: 0,
    started: 1,
    paused: 2,
    stopped: 3
}

Object.assign(exports, {Ticker, TickerEvent, TickerState});