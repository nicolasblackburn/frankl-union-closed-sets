const set = require('./set');

function range(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

const choosek = (k, s) => {
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
};

function family(n) {
    const basis = range(n);
    const makeNode = (value, k) => {
        return {
            value: value,
            children: () => {
                return set.choosek(k, basis).reduce((nodes, child) => {
                    if (child === 0 || set.inter(child, value)) {
                        nodes.push(makeNode(child, k - 1));
                    }
                    return nodes;
                }, []);
            }
        };
    };
    return makeNode(set.range(n), n - 1);
}

function bfs(reducer, ident, node) {
    const queue = [];
    const visited = {};
    queue.push(node);
    let result = ident;
    while (queue.length) {
        const node = queue.shift();
        node.children().forEach((child) => {
            if (!visited[child.value]) {
                visited[child.value] = true;
                queue.push(child);
            }
        });
        result = reducer(result, node.value);
    }
    return result;
}

function familyToString2(tree) {
    let levels = bfs((levels, value) => {
        if (!levels.length) {
            levels.push([value]);
        } else {
            let index = levels.length - 1;
            const previous = levels[index][levels[index].length - 1];
            if (set.abs(previous) !== set.abs(value)) {
                levels.push([]);
                index++;
            }
            levels[index].push(value);
        }
        return levels;
    }, [], tree);
    
    let max = 0;
    levels = levels.map(level => {
        const result = level.reduce((str, value) => str + (str.length ? ' ' : '') + set.toString(value), "");
        max = Math.max(max, result.length);
        return result;
    });
    
    const str = levels.reduce((result, level) => {
        const count = Math.floor((max - level.length) / 2) + level.length;
        result += (result.length ? "\n" : "") + level.padStart(count, " ");
        return result;
    }, '');

    return str;
}

set.powerRange(3);

function familyToString(family) {
    let last;
    const levels = [];
    let max = 0;
    family.sort((a, b) => (set.abs(b) - set.abs(a)) || a - b).forEach(x => {
        if (!last || set.abs(last) !== set.abs(x)) {
            max = Math.max(max, levels.length ? levels[levels.length - 1].length : 0);
            levels.push('');
        }
        last = x;
        levels[levels.length - 1] += (levels[levels.length - 1].length ? " " : "") + set.toString(x);
    });
    max = Math.max(max, levels.length ? levels[levels.length - 1].length : 0);
    const result = levels.reduce((result, level) => {
        const count = Math.ceil((max - level.length) / 2) + level.length;
        result += (result.length ? "\n" : "") + level.padStart(count, " ");
        return result;
    }, '');
    return result;
}

function randomUCFamily(n) {
    let family;
    do {
        family = set.powerRange(n).filter(x => x === 0 || x === set.range(n) || Math.floor(Math.random() * 2) > 0);
    } while (!isUnionClosed(family));
    return family;
}

function isUnionClosed(family) {
    return choosek(2, family).every(([a, b]) => family.includes(set.union(a, b)));
}

function setToVec(n, s) {
    const v = [];
    for (let i = 1; i < n; i++) {
        if (set.isIn(i, s)) {
            v.push(1);
        } else {
            v.push(0);
        }
    }
    return v;
}

function addVec(a, b) {
    const c = [];
    for (let i = 0; i < a.length && i < b.length; i++) {
        c.push(a[i] + b[i]);
    }
    return c;
}

function ind(n, family) {
    return family.reduce((v, x) => addVec(v, setToVec(n + 1, x)), setToVec(n + 1, 0));
}

const n = parseInt(process.argv[2]);
const base = set.range(n);
const p = set.powerRange(n);
const visited = {};
for (let i = p.length; i >= 2; i--) {
    console.group(`ℱ_${i}:`);
    const subFamilies = choosek(i, p);
    for (const subFamily of subFamilies) {
        if (isUnionClosed(subFamily) && subFamily.includes(0) && subFamily.includes(base)) {
            const tag = ind(n, subFamily);
            const key = tag + "";
            const clazz = tag.sort((a, b) => b - a) + "";
            if (key === clazz && !visited[key]) {
                visited[key] = true;
                console.log("φ: (" + key + ")");
                console.log(familyToString(subFamily) + "\n");
            }
        }
    }
    console.groupEnd();
}

const g = {
    0b000: [],
    0b001: [0b000],
    0b010: [0b000],
    0b100: [0b000],
    0b011: [0b010, 0b001],
    0b101: [0b100, 0b001],
    0b110: [0b100, 0b010],
    0b111: [0b110, 0b101, 0b011]
};


