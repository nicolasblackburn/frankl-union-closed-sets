const isEmpty = set => typeof set !== 'string' && typeof set.length !== 'undefined' && 0 === set.length;
const isAtom = set => typeof set.map !== 'function' || typeof set.join !== 'function';

const range = n => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
};

function display(set) {
    if (isEmpty(set)) {
        return 'Ø';
    } else if (isAtom(set)) {
        return set.toString();
    } else {
        return `{${set.map(display).join(', ')}}`;
    }
}

function nChooseK(set, k) {
    if (isEmpty(set) || 0 === k) {
        return [[]];
    } else {
        const family = [];
        for (let i = 0; i < set.length - k + 1; i++) {
            const first = set[i];
            const tail = set.slice(i + 1);
            const subResults = nChooseK(tail, k - 1);
            subResults.forEach(subset => {
                family.push([first].concat(subset));
            });
        }
        return family;
    }
}

function power(set) {
    const family = [];
    for (let i = 0; i <= set.length; i++) {
        nChooseK(set, i).forEach(subset => {
            family.push(subset);
        });
    }
    return family;
}

Object.assign(exports, {isAtom, isEmpty, display, range, nChooseK, power});