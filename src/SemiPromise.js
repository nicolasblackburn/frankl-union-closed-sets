// type SemiPromise a b = PendingPromise a b | RejectedPromise a | FulfilledPromise b
// type PendingPromise a b = [(a -> RejectedPromise a) * (b -> FulfilledPromise b)]
function SemiPromise() {
    const PENDING = 0;
    const REJECTED = 1;
    const FULFILLED = 2;

    let state = PENDING;
    let resolvedValue;
    const queue = [];

    this.reject = value => {
        if (state === PENDING) {
            state = REJECTED;
            resolvedValue = value;
            for (const {onReject} of queue) {
                onReject(value);
            }
        }
    };

    this.fulfill = value => {
        if (state === PENDING) {
            state = FULFILLED;
            resolvedValue = value;
            for (const {onFulfill} of queue) {
                onFulfill(value);
            }
        }
    };

    this.then = (onFulfill) => {
        if (state === PENDING) {
            const p = new SemiPromise();
            queue.push({
                onReject: value => {
                    p.reject(value);
                }, 
                onFulfill: value => {
                    onFulfill(value).then(
                        value => {
                            p.fulfill(value);
                            return p;
                        }
                    );
                }
            });
            return p;
        } else if (state === REJECTED) {
            return SemiPromise.reject(resolvedValue);
        } else if (state === FULFILLED) {
            return onFulfill(resolvedValue);
        }
    };

    this.catch = (onReject) => {
        if (state === PENDING) {
            const p = new SemiPromise();
            queue.push({
                onReject: value => {
                    onReject(value).catch(
                        value => {
                            p.reject(value);
                            return p;
                        }
                    );
                }, 
                onFulfill: value => {
                    p.fulfill(value);
                }
            });
            return p;
        } else if (state === REJECTED) {
            return onReject(resolvedValue);
        } else if (state === FULFILLED) {
            return SemiPromise.fulfill(resolvedValue);
        }
    };
}

Object.assign(SemiPromise, {
    fulfill: x => {
        const p = new SemiPromise();
        p.fulfill(x);
        return p;
    },
    reject: x => {
        const p = new SemiPromise();
        p.reject(x);
        return p;
    }
});