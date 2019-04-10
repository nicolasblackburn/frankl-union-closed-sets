const MAX_ELEMENT = 30;
const TO_STRING_MEMO = ["Ø","{1}","{2}","{1, 2}","{3}","{1, 3}","{2, 3}","{1, 2, 3}","{4}","{1, 4}","{2, 4}","{1, 2, 4}","{3, 4}","{1, 3, 4}","{2, 3, 4}","{1, 2, 3, 4}","{5}","{1, 5}","{2, 5}","{1, 2, 5}","{3, 5}","{1, 3, 5}","{2, 3, 5}","{1, 2, 3, 5}","{4, 5}","{1, 4, 5}","{2, 4, 5}","{1, 2, 4, 5}","{3, 4, 5}","{1, 3, 4, 5}","{2, 3, 4, 5}"];

function abs(s) {
    let result = 0;
    for (let i = 0; i < 30; i++) {
        result += s % 2;
        s = s >> 1;
    }
    return result;
}

function from(arr) {
    let set = 0;
    for (const element of arr) {
        set |= (1 << (element - 1));
    }
    return set;
}

function inter(setA, setB) {
    return setA & setB;
}

function isIn(element, set) {
    return !!((1 << (element - 1)) & set);
}

function isSubset(setA, setB) {
    return (setA & setB) === setA;
}

function powerRange(n) {
    const fam = [];
    const upperBound = range(n);
    for (let x = 0; x <= upperBound; x++) {
        fam.push(x);
    }
    return fam;
}

function range(n) {
    return (1 << n) - 1;
};

function subtract(setA, setB) {
    return setA & (~setB);
}

function toString(set) {
    if (typeof TO_STRING_MEMO[set] === 'undefined') {
        let value = '';
        for (let element = 1; element <= MAX_ELEMENT; element++) {
            if (isIn(element, set)) {
                value += (value.length ? ', ' : '') + element;
            }
        } 
        if (!value.length) {
            value = 'Ø';
        } else {
            value = '{' + value + '}';
        }
        TO_STRING_MEMO[set] = value;
    }
    return TO_STRING_MEMO[set];
}

function union(setA, setB) {
    return setA | setB;
}

const choosek = (k, s) => {
    if (k === 0) {
        return [0];
    } else if (s.length === 0) {
        return [];
    } else {
        let result = [];
        for (let i = 0; i < s.length - k + 1; i++) {
            partial = choosek(k - 1, s.slice(i + 1)).map(u => union(from([s[i]]), u));
            result = result.concat(partial);
        }
        return result;
    }
};

Object.assign(exports, {abs, from, inter, isIn, isSubset, powerRange, range, subtract, toString, union, MAX_ELEMENT, choosek});