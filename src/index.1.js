const set = require('./set');

function power(n) {
    const values = set.powerRange(n);
    const map = new Map();
    const getNode = value => {
        if (!map.has(value)) {
            map.set(value, {
                value: value,
                children: [],
                parents: []
            });
        }
        return map.get(value);
    }
    for (const valueA of values) {
        const nodeA = getNode(valueA);
        for (const valueB of values) {
            const nodeB = getNode(valueB);
            if (valueA !== valueB && set.isSubset(valueB, valueA) && set.abs(valueA) - set.abs(valueB) === 1) {
                nodeA.children.push(nodeB);
            } else if (valueA !== valueB && set.isSubset(valueA, valueB) && set.abs(valueB) - set.abs(valueA) === 1) {
                nodeA.parents.push(nodeB);
            }
        }
    }
    return new Array(...map.values());
}

function clone(graph) {
    const map = new Map();
    const getNode = value => {
        if (!map.has(value)) {
            map.set(value, {
                value: value,
                children: [],
                parents: []
            });
        }
        return map.get(value);
    }
    for (const node of graph) {
        const nodeClone = getNode(node.value);
        const children = typeof node.children === 'function' ? node.children() : node.children;
        const parents = typeof node.parents === 'function' ? node.parents() : node.parents;
        for (const child of children) {
            nodeClone.children.push(getNode(child.value));
        }
        for (const parent of parents) {
            nodeClone.parents.push(getNode(parent.value));
        }
    }
    return new Array(...map.values());
}

function arrayRemove(x, r) {
    const index = r.indexOf(x);
    if (index > -1) {
        r.splice(index, 1);
    }
};

function graphRemove(node, graph) {
    arrayRemove(node, graph);
    for (const parent of node.parents) {
        arrayRemove(node, parent.children);
        if (!parent.children.length) {
            for (const child of node.children) {
                parent.children.push(child);
                child.parents.push(parent);
            }
        }
    }
    for (const child of node.children) {
        arrayRemove(node, child.parents);
        if (!child.parents.length) {
            for (const parent of node.parents) {
                child.parents.push(parent);
                parent.children.push(child);
            }
        }
    }
    return graph; 
}

function remove(value, graph) {
    const node = dfs(item => item === value, graph);
    return graphRemove(node, graph);
}

function dfs(f, graph) {
    const visited = {};
    const stack = [];
    for (const node of graph.reverse()) {
        const parents = typeof node.parents === 'function' ? node.parents() : node.parents;
        if (!parents.length && !visited[node.value]) {
            visited[node.value] = true;
            stack.push(node);
        }
    }
    while (stack.length) {
        const node = stack.pop();
        if (f(node.value)) {
            return node;
        }
        const children = typeof node.children === 'function' ? node.children() : node.children;
        new Array(...children).reverse().forEach(child => {
            if (!visited[child.value]) {
                visited[child.value] = true;
                stack.push(child);
            }
        });
    }
    return null;
}

function bfw(reducer, ident, graph) {
    let result = ident;
    const visited = {};
    const queue = [];
    for (const node of graph) {
        const parents = typeof node.parents === 'function' ? node.parents() : node.parents;
        if (!parents.length && !visited[node.value]) {
            visited[node.value] = true;
            queue.push(node);
        }
    }
    while (queue.length) {
        const node = queue.shift();
        const children = typeof node.children === 'function' ? node.children() : node.children;
        children.forEach(child => {
            if (!visited[child.value]) {
                visited[child.value] = true;
                queue.push(child);
            }
        });
        result = reducer(result, node);
    }
    return result;
}

function toString(graph) {
    let lastSize;
    return bfw((str, node) => {
        let newLine = false;
        const size = set.abs(node.value);
        if (lastSize == null || lastSize > size) {
            newLine = true;
            lastSize = size;
        }
        return str + (str.length ? newLine ? "\n" : ' ' : '') + set.toString(node.value);
    }, '', graph.filter(node => !node.parents.length));
}

function families(top) {
    const strTop = toString(top);
    const keep = bfw((keep, node) => {
        if (!node.parents.length || node.value === 0) {
            keep.push(node.value);
        }
        return keep;
    }, [], top);
    const makeNode = (family, parents) => {
        let children;
        return {
            value: family,
            children: () => {
                if (!children) {
                    children = [];
                    bfw((_, member) => {
                        if (!keep.includes(member.value) && member.children.length === 1) {
                            const subFamily = remove(member.value, clone(family));
                            children.push(makeNode(subFamily, family));
                        }
                    }, null, family);
                }
                return children;
            },
            parents: () => {
                if (!parents) {
                    parents = [];
                    if (toString(family) !== strTop) {
                        parents.push(top);
                    }
                }
                return parents;
            }
        };
    };
    return [makeNode(clone(top), [])];
}

function phi(n, family) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result[i - 1] = 0;
        bfw((_, member) => {
            if (set.isIn(i, member.value)) {
                result[i - 1]++;
            }
        }, null, family);
    }
    return result;
}

function bfwFamilies(reducer, ident, families) {
    let result = ident;
    const visited = new Map();
    const queue = [];
    for (const node of families) {
        const parents = typeof node.parents === 'function' ? node.parents() : node.parents;
        if (!parents.length && !visited.has(toString(node.value))) {
            visited.set(toString(node.value), true);
            queue.push(node);
        }
    }
    while (queue.length) {
        const node = queue.shift();
        const children = typeof node.children === 'function' ? node.children() : node.children;
        children.forEach(child => {
            if (!visited.has(toString(child.value))) {
                visited.set(toString(child.value), true);
                queue.push(child);
            }
        });
        result = reducer(result, node);
    }
    return result;
}

function printFamiliesOf(n) {
    const pn = power(n);
    const f = families(pn);
    const visited = {};
    console.log('graph {\n');
    let i = 0;
    const map = new Map();
    bfwFamilies((a, node) => {
        const family = node.value;
        const key = phi(n, family);
        const strKey = key.toString();
        const keyClass = key.sort((a, b) => b - a);
        const familyKey = toString(family);
        if (strKey === keyClass.toString() && !map.has(strKey)) {
            map.set(strKey, i);
            console.log(`f${i}[label="φ = ${strKey}\\n${toString(family).replace("\n", "\\n")}"];`);
            i++;
        }
    }, null, f);
    bfwFamilies((a, node) => {
        const family = node.value;
        const key = phi(n, family);
        const from = map.get(key.toString());
        if (from != undefined) {
            for (const child of node.children()) {
                const toKey = phi(n, child.value).toString();
                const to = map.get(toKey);
                if (to != undefined) {
                    console.log(`f${from} -- f${to};`);
                }
            }
        }
    }, null, f);
    console.log('\n}');
}

/*
const family = power(3);
const subfamily = remove(set.from([1]), remove(set.from([2]), family));
console.log(toString(family));
*/
printFamiliesOf(4);