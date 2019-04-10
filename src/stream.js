
const isCons = s => typeof s !== 'undefined' && null !== s && typeof s.right === 'function';
const cons = (left, right) => ({left, right});
const hylo = (isCons, left, right, cons, unit, f, z, s) => 
    isCons(s) ? 
        (z => cons(
            z,
            () => hylo(isCons, left, right, cons, unit, f, z, right(s))
        ))(f(left(s), z))
    : unit;
const fold = (f, z, s) => hylo(
    isCons,
    s => s.left,
    s => s.right(),
    (a, b) => f(a, b()),
    z,
    x => x,
    null,
    s
);
const scan = (f, z, s) => hylo(
    isCons,
    s => s.left,
    s => s.right(),
    cons,
    null,
    f, z, s
);
const flatten = s => {
    if (!isCons(s)) {
        return null;
    } else if (!isCons(s.left)) {
        return flatten(s.right());
    } else {
        return cons(s.left.left, () => flatten(cons(s.left.right(), s.right)));
    }
};
const list = (...args) => !args.length ? null : cons(args[0], () => list(args.slice(1)));
const drop = (n, s) => !isCons(s) || n < 1 ? s : drop(n - 1, s.right());
const dropUntil = (p, s) => !isCons(s) || p(s) ? s : dropUntil(p, s.right());
const concat = (s1, s2) => !isCons(s1) ? s2 : cons(s1.left, () => concat(s1.right(), s2));
const takeUntil = (p, s) => !isCons(s) || p(s.left) ? [] : cons(s.left, () => takeUntil(p, s.right()));
const takeAll = s => takeUntil(_ => false, s);
const length = s => !isCons(s) ? 0 : 1 + length(s.right());
const map = (f,s) => scan(
    x => f(x),
    null,
    s
);
const units = cons(null, () => units);
const iterate = (f, x) => cons(x, () => iterate(f, f(x)));
const take = (n, s) => !isCons(s) || n < 1 ? null : cons(s.left, () => take(n - 1, s.right()));
const from = l => !l.length ? null : cons(l[0], () => from(l.slice(1)));
const toArray = s => !isCons(s) ? [] : [s.left].concat(toArray(s.right()));
const toArrayTake = (n, s) => toArray(take(n, s));
const toArrayUntil = (p, s) => toArray(takeUntil(p, s));
const last = s => (s => !isCons(s) ? undefined : s.left)(dropUntil(x => !isCons(x) || !isCons(x.right()), s));

Object.assign(exports, {
    isCons, cons, hylo, fold, scan, flatten, list, drop, dropUntil, concat, takeUntil, takeAll, length, map, units, iterate, take, from, toArray, toArrayTake, toArrayUntil, last
});