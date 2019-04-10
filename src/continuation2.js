function identityFun(x) {
    return x;
}
function optFun(f) {
    if (typeof f === 'function') {
        return x => f(x);
    } else {
        return identityFun;
    }
} 
function either(g, f) {
    return (err, x) => {
        if (err !== null) {
            return g(err);
        } else {
            return f(x);
        }
    }
}
function left(f) {
    return either(f, identityFun);
} 
function right(f) {
    return either(identityFun, f);
} 
function compose2(g, f) {
    return x => g(f(x));
}
function map(g, f) {
    return (x, h) => f(x, (err, x) => {
        console.log('here', either(optFun(h), compose2(optFun(p), g))(err, x));
        return either(optFun(h), compose2(optFun(p), g));
    });
}
function of(x) {
    return (_, f) => optFun(f)(x);
}

Object.assign(exports, {either, left, of, right, compose2, map, optFun});