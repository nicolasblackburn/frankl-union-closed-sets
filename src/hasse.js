const {hylo} = require('hylo');
const set = require('set');

const range = n => hylo(x => x >= n, x => [x, x + 1], (a, b) => [a + 1].concat(b), [], 0);
const includes = (f, v) => f.some(u => u.value === v.value);
const hasse = n => {
    const ns = range(n);
    const hasseNode = s => ({
        value: s,
        children: () => {
            return set.choosek(set.abs(s) + 1, ns).filter(u => set.isSubset(s, u)).map(hasseNode);
        }
    });
    return hasseNode(0);
};
const parents = nos => {
    if ('undefined' === typeof nos.length) {
        return nos.children();
    } else {
        const results = [];
        for (no of nos) {
            for (const ch of no.children()) {
                if (!includes(results, ch)) {
                    results.push(ch);
                }
            };
        }
        return results;
    }
};
const nodeToString = s => set.toString(s.value);
const toString = no => {
    const results = [nodeToString(no)];
    let pa = parents(no);
    let max = results[0].length;
    while (pa.length) {
        const row = pa.map(nodeToString).join(' ');
        results.push(row);
        pa = parents(pa);
        max = Math.max(max, row.length);
    }
    return results.map(row => ''.padStart(Math.floor((max - row.length) / 2), ' ') + row).reverse().join("\n");
}

Object.assign(exports, {hasse, nodeToString, parents, toString});