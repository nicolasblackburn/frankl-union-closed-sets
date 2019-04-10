const hylo = (p, g, f, b, a) => {
    const reversed = hylol(p, g, (a, b) => [a].concat(b), [], a);
    return hylol(as => as.length === 0, as => [as[0], as.slice(1)], f, b, reversed);
};

const hylol = (p, g, f, b, a) => {
    let result = b;
    while (!p(a)) {
        const [c, d] = g(a);
        result = f(c, result);
        a = d;
    }
    return result;
};

const lazyhylo = (p, g, f, b, a) => {
    if (p(a)) {
        return b;
    } else {
        const [c, d] = g(a);
        return f(c, () => lazyhylo(p, g, f, b, d));
    }
};

const lazyhylol = (p, g, f, b, a) => {
    const as = hylol(p, g, (a, b) => [a].concat(b), [], a);
    return lazyhylo(as => as.length === 0, as => [as[0], as.slice(1)], f, b, as);
};

Object.assign(exports, {hylo, hylol, lazyhylo, lazyhylol});