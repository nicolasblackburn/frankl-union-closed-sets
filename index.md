# The Union-Closed Sets Conjecture

By Nicolas Blackburn

##### Introduction

The union-closed conjecture is a well known unsolved problem in combinatorial mathematics. In this article, we will give a short proof by induction.

##### Notations
Let $2^X$ denote the power set of $X$.

Let $[n]$ denote the set $\{1, 2, \ldots, n\}$.

Let $(F, \cup)$ denote a union-closed family with $|F| > 1$. By union-closed we mean that $\forall A, B \in F, A \cup B \in F$. When the context is clear we can simply write $F$.

Let $G \leq F$ denote a union-closed family $G$ subset of a union-closed family $F$. We might informally say that $G$ is a sub-family of $F$ to talk about a union-closed subset of $F$. 

Define $F_{x} := \{F_i \in F : x \in F_i\}$ and $F_{\bar x} := \{F_i \in F : x \notin F_i\}$.

Let $\text{Sub}_ {F, x, n} := \{G \leq F : |G_x| = n\}$ denote the set of all sub-families $G$ of $F$ where the number of sets in $G$ that contains $x$ is equal to $n$.

##### Theorem

Let $(F, \cup)$ be a union-closed family.

Then $\exists x \in [n]$ such that $|F_x| / |F| \geq 1/2$.

##### Proof

We will proceed by induction. It is easy to verify that it is true for any sub-family $F \leq 2^{[2]}$.

Now suppose the union-closed hypothesis is true for all sub-families $F \leq 2^{[n]}$.

Take a sub-family $G \leq 2^{[n + 1]}$. Either $[n + 1] \in G$ or $[n + 1] \notin G.$

Suppose that $[n + 1] \notin G$. Then $G \leq 2^{[n]}$ and by the induction hypothesis the union-closed hypothesis is true.

Now suppose on the contrary that $[n + 1] \in G$. 

If $G = 2^{[n + 1]}$ then $|G_1| / |G| = 1/2$ and the union-closed hypothesis is true. 

If on the contrary, $G \neq 2^{[n + 1]}$, we can consider without loss of generality that $|G_1| \geq |G_x|$, for all $x$ such that $1 < x \leq n + 1$. Consider the family of sub-families $\{ \mathbb{G}_ 0, \mathbb{G}_ 1, \ldots, \mathbb{G}_ {2^n - 1} \}$ where $\mathbb{G}_ i := \{G \in \text{Sub}_ {2^{[n + 1]}, 1, 2^n - i} : \forall x \text{ such that } 1 < x \leq n + 1, |G_1| \geq |G_x| \text{ and } [n + 1] \in G \}$. 

For all $G$ in $\mathbb{G}_ 0$ we can see that $|G_1| = 2^n$ and $|G_{\bar 1}| \leq 2^n$. Therefore $|G_1| / |G| \geq 1 / 2$.

We will make a second induction by supposing the union-closed hypothesis to be true for all $\mathbb{G}_i$ such that $0 \leq i < 2^n - 1$. 

We remark that we can obtain any family $G'$ in $\mathbb{G}_ {i + 1}$ by taking a family $G$ in $\mathbb{G}_ i$ and removing a set from $G$ which contains $1$. However, for $|G'_1| \geq |G'_x|$ to hold for all x such that $1 < x \leq n + 1$, we must also remove a set from $G$ which contains $2$; a set which contains $3$; and so on up to a set which contains $n+1$.

Again if $[n + 1] \notin G'$, we can conclude by the first induction hypothesis that the union-closed hypothesis is true for $G'$. 

Otherwise we have that $[n + 1] \in G'$. Therefore to obtain a set $G'$ in $\mathbb{G}_ {i + 1}$ from $G$, we must at least remove a set in $G_1$ and a set in $G_{\bar 1}$. Thus $|G'_ 1| / |G'| \geq (|G_ 1| - 1) / (|G| - 2)$ and by the second induction hypothesis $|G'_ 1| / |G'| \geq 1 / 2$. 

We have covered all the cases and this concludes the proof. $\square$