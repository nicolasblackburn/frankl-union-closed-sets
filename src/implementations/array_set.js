const isEmpty = set => typeof set !== 'string' && typeof set.length !== 'undefined' && 0 === set.length;
const isAtom = set => typeof set === 'string' || typeof set.length === 'undefined' || typeof set.map !== 'function' || typeof set.join !== 'function';

const range = n => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
};

function toString(set) {
    if (isEmpty(set)) {
        return 'Ø';
    } else if (isAtom(set)) {
        return set.toString();
    } else {
        return `{${set.map(toString).join(', ')}}`;
    }
}

function setChooseK(set, k) {
    if (isEmpty(set) || 0 === k) {
        return [[]];
    } else {
        const family = [];
        for (let i = 0; i < set.length - k + 1; i++) {
            const first = set[i];
            const tail = set.slice(i + 1);
            const subResults = setChooseK(tail, k - 1);
            subResults.forEach(subset => {
                family.push([first].concat(subset));
            });
        }
        return family;
    }
}

function setEquals(setA, setB) {
    if (setA.length !== setB.length) {
        return false;
    } else {
        setB.sort();
        setA.sort();
    }
}

function power(set) {
    const family = [];
    for (let i = 0; i <= set.length; i++) {
        setChooseK(set, i).forEach(subset => {
            family.push(subset);
        });
    }
    return family;
}

function isSubset(left, right) {
    if (left.length > right.length) {
        return false;
    } else {
        return left.every(element => right.includes(element));
    }
}

function hasseDisplay(hasse) {
    let str = '';
    hasse.forEach(({value, parents, children}) => {
        str += `Node:\n`;
        str += `  Value: ${toString(value)}\n`;
        str += `  Parents: [${parents.map(node => toString(node.value)).join(', ')}]\n`;
        str += `  Children: [${children.map(node => toString(node.value)).join(', ')}]\n\n`;
    });
    return str;
}

function hasseMakeNode(value, parents, children) {
    return {
        value: value,
        parents: parents,
        children: children
    }
}

function hasse(family) {
    const nodes = family.map(x => hasseMakeNode(x, [], []));
    for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let j = 0; j < nodes.length; j++) {
            const nodeB = nodes[j];
            if (i !== j) {
                if (isSubset(nodeA.value, nodeB.value)) {
                    let isCover = true;
                    for (let k = 0; k < nodes.length; k++) {
                        const nodeC = nodes[k];
                        if (i !== k && j !== k && isSubset(nodeA.value, nodeC.value) && isSubset(nodeC.value, nodeB.value)) {
                            isCover = false;
                            break;
                        }
                    }
                    if (isCover) {
                        nodeA.parents.push(nodeB);
                        nodeB.children.push(nodeA);
                    }
                }
            }
        }
    }
    return nodes;
}

Object.assign(exports, {toString, hasse, hasseDisplay, hasseMakeNode, isAtom, isEmpty, isSubset, range, setChooseK, power});