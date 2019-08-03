const set = (() => {
    function union(setA, setB) {
        const result = new Set();
        for (const member of setB) {
            result.add((member));
        }
        for (const member of setA) {
            result.add(member);
        }
        return result;
    }
    function inter(setA, setB) {
        const result = new Set();
        for (const member of setB) {
            if (setA.has(member)) {
                result.add((member));
            }
        }
        for (const member of setA) {
            if (setB.has(member)) {
                result.add((member));
            }
        }
        return result;
    }

    let memo = new Map();
    function toString(set) {
        if (!memo.has(set)) {
            if (set.length === 0) {
                memo.set(set, 'Ø');
            } else {
                let result = '';
                for (const member of set) {
                    result += (result.length ? ', ' : '') + member.toString();
                }
                memo.set(set, `{${result}}`);
            }
        }
        return memo.get(set);
    }
    return {
        union,
        inter,
        toString
    };
})();

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

function range(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

function powerSetRoot(n) {
    const basis = range(n);
    const node = arrayValue => {
        const n = arrayValue.length;
        let childrenCache;
        let parentsCache;
        return {
            value: arrayValue,
            children: () => {
                if (!childrenCache) {
                    childrenCache = choosek(n - 1, arrayValue).map(node);
                }
                return childrenCache;
            },
            parents: () => {
                if (!parentsCache) {
                    parentsCache = basis.reduce((result, item) => {
                        if (arrayValue.includes(item)) {
                            return result;
                        } else {
                            return result.concat([arrayValue.concat([item])]);
                        }
                    }, []).map(node);
                }
                return parentsCache;
            }
        }
    };
    return node(basis);
}

function filter(f, nodes) {
    const filteredNodes = [];
    const filterNode = node => {

    }
    for (const node of nodes) {
        if (f(node.value, node)) {

        }
    }
    return filteredNodes;
}

function toString(nodes) {
    const visited = [];
    const results = [];
    const helper = (nodes, depth) => {
        for (const node of nodes) {
            const str = set.toString(node.value);
            if (!visited.includes(str)) {
                visited.push(str);
                results[depth] = (results[depth] ? results[depth] + ', ' : '' ) + str;
                helper(node.children(), depth + 1);
            }
        }
    }
    helper(nodes, 0);
    return results.reduce((result, row) => {
        if (row.length) {
            return result + (result.length ? "; " : "") + row;
        } else {
            return result;
        }
    }, "");
}

/**
 Node<T> {
     value: T,
     children(): Node<T>[],
     parents(): Node<T>[]
 }
 RootedGraph<T>: {
     nodes: Node<T>[],
     edges: [number, number],
     root: Node<T>
 }
 */

console.log(
    toString([powerSetRoot(3)])
);