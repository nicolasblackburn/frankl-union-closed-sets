// type Continuation a b = a -> (b -> Void) -> Void
const identity = (x, f) => f(x);
//const optFun = f => x => typeof f === 'function' ? f(x) : x;
const of = x => (_, f) => f(x);
const compose2 = (kG, kF) => (x, f) =>  kF(x, map(f, kG));
const compose = (...args) => args.reduce(compose2, identity);
const pipe = (...args) => args.reduce((kG,kF) => compose2(kF, kG), identity);
const map = (f, k) => (x, g) => k(x, y => g(f(y)));
const curry1 = f => 
    x => f.length > 1 ? 
        (...args) => f(x, ...args) 
        : f(x);
const ap1 = (kF, kX) => (x, g) =>  kF(x, F => kX(x, X => g(curry1(F)(X))));
const ap = (kF, ...kXs) => kXs.reduce(ap1, kF);
function identityFun(x) {
    return x;
}

Object.assign(exports, {ap, compose, identity, map, of, curry1, pipe});