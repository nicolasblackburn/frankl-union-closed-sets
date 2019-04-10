const {curry} = require('functions');

const eitherMatch = curry((f, g, x) => x.match(f, g));

class Either {
    static of(x) {
        return new Right(x);
    }
    static match(...args) {
        return eitherMatch(...args);
    }

    static left(x) {
        return new Left(x);
    }
};

class Left extends Either {
    constructor(x) {
        super();
        this.map = _ => this; 
        this.match = f => f(x);
    }
}

class Right extends Either {
    constructor(x) {
        super();
        this.map = f => new Right(f(x)); 

        const rightMatch = curry((_, f) => f(x));
        this.match = (...args) => rightMatch(...args);
    }
}

Object.assign(exports, {Either, Left, Right});