const lerp = (from, to) => t => (1 - t) * from + t * to;
const animate = (period, duration, f, completed) => {
    f(0);
    const t0 = new Date().getTime();
    let proc;
    let fulfilled = false;
    const stop = value => {
        if (!fulfilled) {
            fulfilled = true;
            clearInterval(proc);
            if (typeof completed === 'function') {
                completed(value);
            }
        }
    };
    proc = setInterval(() => {
        const t = Math.min(new Date().getTime() - t0, duration);
        f(t);
        if (t === duration) {
            stop(true);
        }
    }, period);
    return () => stop(false);
};

const concat = (anim1, anim2) => (completed) => {
    let stop = anim1(p => {
        if (p) {
            stop = anim2(completed);
        } else if (typeof completed === 'function') {
            completed(p);
        }
    });
    return stop;
}

const anim1 = (completed) => animate(1000 / 60, 2000, t => console.log('anim1 ' + lerp(0, 10)(t / 1000)), completed);
const anim2 = (completed) => animate(1000 / 60, 2000, t => console.log('anim2 ' + lerp(101, 135)(t / 1000)), completed);

Object.assign(exports, {animate, concat, lerp, anim1, anim2});