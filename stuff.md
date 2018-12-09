# Union Closed Sets Study

Let X := {x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>} a set containing n elements and P := {p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>} a set of n distinct prime numbers. Let 2<sup>X</sup> be the power set of X and S &subseteq; 2<sup>X</sup>.

Define a map f:S &rarr; &Nopf; such that f(&empty;) = 1, f({x<sub>i</sub>}) = p<sub>i</sub> and for any A, B &in; S, f(A &cup; B) = f(A)f(B)/gcd(f(A), f(B)).

##### Proposition 1

Let A, B &in; _S_. A &subseteq; B &iff; f(A) &le; f(B).

##### Proposition 2

Let S<sub>x<sub>i</sub></sub> := {s &in; S | x<sub>i</sub> &in; s}. Let p<sub>i</sub><sup>&alpha;</sup> be the greatest power of p<sub>i</sub> which divides &Pi; f(s)<sub>&forall;s &in; S</sub>. Then |S<sub>x<sub>i</sub></sub>| = &alpha;.

##### Proposition 3

|2<sup>X</sup>| = 2<sup>n</sup>.

##### Proposition 4

Let p<sub>i</sub><sup>&alpha;<sub>i</sub></sup> = &Pi; f(s)<sub>&forall;s &in; 2<sup>X</sup></sub>. Then |2<sup>X</sup>| = 2&alpha;<sub>i</sub>.

##### Proposition 5

For all union closed subset S' &subseteq; 2<sup>X</sup>, there is an isomorphic union closed subset S<sup>\*</sup> &subseteq; 2<sup>X</sup> such that p<sub>i</sub><sup>&alpha;<sub>i</sub></sup> = &Pi; f(s)<sub>&forall;s &in; S<sup>\*</sup></sub> and &alpha;<sub>1</sub> &le; &alpha;<sub>2</sub> &le; ... &le; &alpha;<sub>m</sub>. That is |S'<sub>x<sub>i</sub></sub>| = |S<sup>*</sup><sub>x<sub>&sigma;(i)</sub></sub>| for all x<sub>i</sub> &in; 2<sup>X</sup>.

##### Proposition 6

For all union closed set V<sup>\*</sup>, there is an isomorphic union closed set S<sup>\*</sup> that is the subset of a power set 2<sup>X</sup>. |V<sup>*</sup><sub>x</sub>| = |S<sup>\*</sup><sub>x'</sub>| for some x' &in; U(2<sup>X</sup>), the universe of 2<sup>X</sup>.

...

##### Proposition n - 1

Let S<sup>\*</sup> &subseteq; 2<sup>X</sup> such that p<sub>i</sub><sup>&alpha;<sub>i</sub></sup> = &Pi; f(s)<sub>&forall;s &in; S<sup>\*</sup></sub> and &alpha;<sub>1</sub> &le; &alpha;<sub>2</sub> &le; ... &le; &alpha;<sub>m</sub>. Then |S<sup>*</sup>| &le; 2&alpha;<sub>m</sub>.

##### Corollary

For all union closed set V<sup>\*</sup>, there exists an element x &in; U(V) such that 1/2 &le; |V<sub>x</sub>|/|V|.