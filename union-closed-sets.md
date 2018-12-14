# The Union-Closed Sets Conjecture

By Nicolas Blackburn
  

## Introduction

The union-closed conjecture is a well known unsolved problem in combinatorial mathematics. A very nice survey article describes several partial results that have been obtained. Some non-exhaustive examples are, the conjecture is true if:

1. the family contains a singleton-set;
2. the family can be represented as a lower semi-modular lattice.

In this article we will attempt to give a complete proof of the conjecture.

## Notations

Let $2^X$ denotes the power set of $X$.

Let $[n]$ denotes $\{1, 2, \ldots, n\}$.

Let $(F, \cup)$ denotes a union-closed family with $F \neq \{\emptyset \}$. That is $\forall A, B \in F, A \cup B \in F$. When the context is clear we can simply write $F$.

Define the universe of a family $F$ as $U(F) := \bigcup_{X \in F} X$.

Let $G \leq F$ denotes a union-closed sub-family, that is $\forall X, X \in G \implies X \in F$ and $G$ is union-closed. 

Define $_{x}F := \{X \in F : x \in X\}$ and $_{\bar x}F := \{X \in F : x \notin X\}$. This notation is a bit unusual but it allows us to use the bottom left indice for the family's index if our family is part of a sequence.

## Conjecture

Let $(F, \cup)$ be a union-closed family.

Then $\exists x \in U(F)$ such that $|_xF| / |F| \geq 1/2$.

## Plan of a proof

#. For all families $F$, let $n = |U(F)|$. We show that there exists an isomorphism with $G \leq 2^{[n]}$, $|U(G)| = n$ and if $x_i \in U(F)$ is the $i$-th most abundant element in $F$ then $i \in [n]$ is the $i$-th most abundant element in $G$.

    This allows us to concentrate on sub-families $F \leq 2^{[n]}$ such that $|_1F| \geq |_2F| \geq \ldots \geq |_mF|$ and we know that we'll cover all families because they are isomorphic. We qualify a family displaying that property as _regular_.

#. We define $\mathbb F(2^{[n]})$ as the collection of all regular sub-families of $2^{[n]}$ and we define $_{[n]}\mathbb F(2^{[n]})$ as the collection of all regular sub-families $F \leq 2^{[n]}$ such that $[n] \in F$. We show by induction that if the union-closed conjecture holds for all $_{[n]}\mathbb F(2^{[n]})$ then the union-closed conjecture holds for all regular sub-families of $2^{[n]}$. Therefore by the isomorphism result, holds for all union-closed families.

#. We define a chain of regular sub-families $F_0 \geq F_1 \geq \ldots \geq F_{2^n - 1}$ such that $|F_i| = 2^n - i$ where $\forall F_i, [n] \in F_i$ and no three consecutive sub-families $F_i \geq F_{i + 1} \geq F_{i + 2}$ have the same number of sets containing $1$, that is either $|_1F_i| \neq |_1F_{i + 1}|$ or $|_1F_{i + 1}| \neq |_1F_{i + 2}|$. We  demonstrate that it is always possible to form such a chain. We also demonstrate that the union-closed conjecture holds for all such chains.

#. We define $\mathop{tree}(F)$ as the tree of regular sub-families having a regular family $F$ as root, where $G$ is a child of $G'$ if $G \leq G'$ and $\mathop{tree}(F)$ contains all regular sub-families $G$ such that $|_1F| = |_1G|$. We show that this tree exists and that the union-closed conjecture holds for all families in the tree.

#. We define $\mathop{chains}(2^{[n]})$ as the set of all chains of regular sub-families in $2^{[n]}$ and $\mathbb T_n = \{\mathop{tree}(F): F \text{ is a sub-family in a chain } C, \forall C \in \mathop{chains}(2^{[n]})\}$. We show that $\mathbb T_n$ covers $\mathbb F(2^{[n]})$. Since the union-closed conjecture holds for all families in $\mathbb T_n$ then the union-closed conjecture holds for all families in $\mathbb F(2^{[n]})$. Therefore the union-closed conjecture is true for all union-closed families. This concludes the proof.

## A Failed Proof Attempt

> This proof approach failed because the structure of  $\{ \mathbb{G}_ 0, \mathbb{G}_ 1, \ldots, \mathbb{G}_ {2^n - 1} \}$ is *too loose*. The proof rely on the idea that we need to remove a set from $_{x_1}G$ and a set from $_{\bar x_1}G$ in order to produce a family in $\mathbb{G}_{i+1}$ from a family in $\mathbb{G}_{i}$. However the structure fails at enforcing this. 

> Therefore, to make this idea work, we need a more constraining structure. 

> In the following attempt, $[n]$ denotes a set of $n$ elements $\{x_1, x_2, \ldots, x_n\}$ rather than $\{1, 2, \ldots, n\}$. We also let $\text{Sub}_ {F, x, n} := \{G \leq F : |_xG| = n\}$ denotes the collection of all sub-families $G$ of $F$ where the number of sets in $G$ that contains $x$ is equal to $n$.

We will proceed by induction. It is easy to verify that it is true for any sub-family $F \leq 2^{[2]}$.

Now suppose the union-closed hypothesis is true for all sub-families $F \leq 2^{[n]}$.

Take a sub-family $G \leq 2^{[n + 1]}$. Either $[n + 1] \in G$ or $[n + 1] \notin G.$

Suppose that $[n + 1] \notin G$. Then $G$ is isomorphic to a sub-family $F \leq 2^{[n]}$ and by the induction hypothesis the union-closed hypothesis is true.

Now suppose on the contrary that $[n + 1] \in G$. 

If $G = 2^{[n + 1]}$ then $|_{x_1}G| / |G| = 1/2$ and the union-closed hypothesis is true. 

If on the contrary, $G \neq 2^{[n + 1]}$, we can consider without loss of generality that $|_{x_1}G| \geq |_{x_i}G|$, for all $i$ such that $1 < i \leq n + 1$. Consider the family of sub-families $\{ \mathbb{G}_ 0, \mathbb{G}_ 1, \ldots, \mathbb{G}_ {2^n - 1} \}$ where $\mathbb{G}_ i := \{G \in \text{Sub}_ {2^{[n + 1]}, x_1, 2^n - i} : \forall i \text{ such that } 1 < i \leq n + 1, |_{x_1}G| \geq |_{x_i}G| \text{ and } [n + 1] \in G \}$. 

For all $G$ in $\mathbb{G}_ 0$ we can see that $|_{x_1}G| = 2^n$ and $|_{\bar x_1}G| \leq 2^n$. Therefore $|_{x_1}G| / |G| \geq 1 / 2$.

We will make a second induction by supposing the union-closed hypothesis to be true for all $G \in \mathbb{G}_i$ such that $0 \leq i < 2^n - 1$. 

We remark that we can obtain any family $G'$ in $\mathbb{G}_ {i + 1}$ by taking a family $G$ in $\mathbb{G}_ i$ and removing a set from $G$ which contains $x_1$. However, for $|_{x_1}G'| \geq |_{x_i}G'|$ to hold for all i such that $1 < i \leq n + 1$, we must also remove a set from $G$ which contains $x_2$; a set which contains $x_3$; and so on up to a set which contains $x_{n+1}$.

Again if $[n + 1] \notin G'$, we can conclude by the first induction hypothesis that the union-closed hypothesis is true for $G'$. 

Otherwise we have that $[n + 1] \in G'$. Therefore to obtain a set $G'$ in $\mathbb{G}_ {i + 1}$ from $G$, we must at least remove a set in $_{x_1}G$ and a set in $_{\bar x_1}G$. Thus $|_{x_1}G'| / |G'| \geq (|_{x_1}G| - 1) / (|G| - 2)$ and by the second induction hypothesis $|_{x_1}G'| / |G'| \geq 1 / 2$. 

> "[...] We must at least remove a set in $_{x_1}G$ and a set in $_{\bar x_1}G$." 

> This is where the proof fails. The claim is false as if we pick $\{\{x_1\}, \{x_1, x_2\}\} \in \mathbb{G}_0$ and $\{\{x_1, x_2\}\} \in \mathbb{G}_1$, we can clearly see that the claim doesn't hold.


## References

Henning Bruhn and Oliver Schaudt. (2013). The journey of the union-closed sets conjecture. Retrieved from http://www.zaik.uni-koeln.de/~schaudt/UCSurvey.pdf 

André da Cruz Carvalho. (2016). Frankl Conjecture. Retrieved from https://matematica.fc.up.pt/sites/default/files/theses/FranklConjecture.pdf

BJORN POONEN. (1990). Union-Closed Families. Retrieved from https://core.ac.uk/download/pdf/81930624.pdf