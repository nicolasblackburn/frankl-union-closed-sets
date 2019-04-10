/**
 * Render an object eventfull. Returns the emitting function in a separate object. 
 * @param {Object} obj - The object in whitch to add the methods
 * @returns {{emit: string -> ...any -> void}}
 */
function applyMixin(obj) {
    const events = new Map();
    
    function on(event, fn, context) {
        if (!events.has(event)) {
            events.set(event, new Map());
        }
        if (!events.get(event).has(context)) {
            events.get(event).set(context, new Map());
        }
        events.get(event).get(context).set(fn, fn);
    };
    
    function once(event, fn, context) {
        if (!events.has(event)) {
            events.set(event, new Map());
        }
        if (!events.get(event).has(context)) {
            events.get(event).set(context, new Map());
        }
        events.get(event).get(context).set(fn, (...args) => {
            fn(...args);
            off(event, fn, context);
        });
    };
    
    function off(event, fn, context) {
        if (events.has(event) && events.get(event).has(context)) {
            events.get(event).get(context).delete(fn);
        }
    };

    Object.assign(obj, {off, on, once});
    return {
        emit: (event, ...data) => {
            if (events.has(event)) {
                for (const [context, listeners] of events.get(event)) {
                    for (const [_, listener] of listeners) {
                        listener.call(context, ...data);
                    }
                }
            }
        }
    };
}

Object.assign(exports, {applyMixin});