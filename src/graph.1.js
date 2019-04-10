function mixinClonable(classObj) {
    classObj.prototype.clone = function clone() {
        return Object.assign(Object.create(this), this);
    }
}

function mixinToString(classObj) {
    classObj.prototype.toString = makeToString(classObj);
}

function makeFun(classObj){
    return (...args) => new (classObj.bind(classObj, ...args))();
};

function className(classObj) {
    return /[^\s]+\s([^\s\(]+)/.exec(classObj.toString())[1];
}

function makeToString(classObj){
    return obj => `${className(classObj)} {${Object.getOwnPropertyNames(obj).reduce(
        (str, prop) => str + (str.length ? ', ' : '') + `${prop}: ${obj[prop]}`, 
    '')}}`;
};

class Vertex {
    constructor(value) {
        Object.assign(this, {
            value
        });
    }
}
mixinClonable(Vertex);
mixinToString(Vertex);

class Edge {
    constructor(left, right, value) {
        Object.assign(this, {
            left, right, value
        });
    }
}
mixinClonable(Edge);
mixinToString(Edge);

class Graph {
    constructor(vertices, edges) {
        Object.assign(this, {
            vertices, edges
        });
    }
}
mixinClonable(Graph);
mixinToString(Graph);

// data Node a = Node a Graph a
// data Graph a = [Node a]

// data Graph a = Empty | Cons Node a List a

(Cons (Node 10) )

const node = (value, children) => ({value, children});
const fromAssoc = (assoc) => {
    const nodeFromAssoc = (assoc, k) => node(k, () => assoc[k].map(k => nodeFromAssoc(assoc, k)));
    return Object.keys(assoc).map(k => nodeFromAssoc(assoc, k));
};
const map = (f, gr) => {
    const mapNode = (f, no) => node(f(no.value), () => no.children().map(no => mapNode(f, no)));
    return gr.map(no => mapNode(f, no));
};

// fold: (Node a -> b -> b) -> b -> (a -> b -> b) -> b
const fold = (f, z, g, gr) => {
    if (gr.length === 0) {
        return z;
    } else {
        return f(
            g(
                gr[0].value, 
                fold(f, z, g, gr[0].children())
            ), 
            fold(f, z, g, gr.slice(1))
        );
    }
};

Object.assign(exports, {fromAssoc, fold, map, node});
