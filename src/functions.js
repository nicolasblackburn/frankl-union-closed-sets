const compose = (g, f) => (...args) => g.length <= 1 ? g(f(...args)) : (...args2) => g(f(...args), ...args2);
const curry = f => (...args) => args.length >= f.length ? f(...args) : (...args2) => curry(f)(...args, ...args2);
const add = curry((a, b) => 'number' === typeof b ? b + a : b.add(a));
const mult = curry((a, b) => 'number' === typeof b ? b * a : b.mult(a));
const sub = curry((a, b) => 'number' === typeof b ? b - a : b.sub(a));
const div = curry((a, b) => 'number' === typeof b ? b / a : b.div(a));
const mod = curry((a, b) => 'number' === typeof b ? b % a : b.mod(a));
const floor = a => 'number' === typeof a ? Math.floor(a) : a.floor();
const pow = curry((a, b) => 'number' === typeof b ? Math.pow(a, b) : b.pow(a));
const bor = curry((a, b) => 'number' === typeof b ? b | a : b.bor(a));
const band = curry((a, b) => 'number' === typeof b ? b & a : b.band(a));
const lsh = curry((a, b) => 'number' === typeof b ? b << a : b.lsh(a));
const rsh = curry((a, b) => 'number' === typeof b ? b >> a : b.rsh(a));
const lt = curry((a, b) => 'number' === typeof b ? b < a : b.lt(a));
const gt = curry((a, b) => 'number' === typeof b ? b > a : b.gt(a));
const lte = curry((a, b) => 'number' === typeof b ? b <= a : b.lte(a));
const gte = curry((a, b) => 'number' === typeof b ? b >= a : b.gte(a));
const and = curry((a, b) => 'boolean' === typeof b ? b && a : b.and(a));
const or = curry((a, b) => 'boolean' === typeof b ? b || a : b.or(a));
const eq = curry((a, b) => 'undefined' !== b && 'function' === typeof b.eq ?  b.eq(a) : b === a);
const neq = curry((a, b) => 'undefined' !== b && 'function' === typeof b.neq ?  b.neq(a) : b !== a);
const concat = curry((a, b) => b.concat(a));
const map = curry((f, x) => x.map(f));
const reduce = curry((f, z, x) => x.reduce(f, z));

const choosek = curry((k, s) => {
    if (k === 0) {
        return [[]];
    } else if (s.length === 0) {
        return [];
    } else {
        let result = [];
        for (let i = 0; i < s.length - k + 1; i++) {
            partial = choosek(k - 1, s.slice(i + 1)).map(u => [s[i]].concat(u));
            result = result.concat(partial);
        }
        return result;
    }
});

Object.assign(exports, {compose, curry, add, mult, sub, div, floor, and, mod, and, or, lt, gt, lte, gte, eq, neq, pow, bor, band, lsh, rsh, concat, map, reduce, choosek});