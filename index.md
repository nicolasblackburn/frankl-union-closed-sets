# The Union-Closed Sets Conjecture

##### Notations
Let $2^X$ denote the power set of $X$.

Let $[n]$ denote the set $\\{1, 2, &hellip;, n\\}$.

Let $(F, &cup;)$ denote a union-closed family with $|F| &gt; 1$. By union-closed we mean that $&forall; A, B &in; F, A &cup; B &in; F$. When the context is clear we can simply write $F$.

Let $G &le; F$ denote a union-closed family $G$ subset of a union-closed family $F$. We might informally say that $G$ is a sub-family of $F$ to talk about a union-closed subset of $F$. 

Define $F_{x} := \\{F_i &in; F : x &in; F_i\\}$ and $F_{\bar x} := \\{F_i &in; F : x &notin; F_i\\}$.

Let $\text{Sub}_ {F, x, n} := \\{G &le; F : |G_{&in;, x}| = n\\}$ denote the set of all sub-families $G$ of $F$ where the number of sets in $G$ that contains $x$ is equal to $n$.

##### Theorem

Let $(F, &cup;)$ be a union-closed family.

Then $&exist; x &in; [n]$ such that $|F_x| / |F| &ge; 1/2$.

##### Proof

We will proceed by induction. It is easy to verify that it is true for any sub-family $F &le; 2^{[2]}$.

Now suppose the union-closed hypothesis is true for all sub-families $F &le; 2^{[n]}$.

Take a sub-family $G &le; 2^{[n + 1]}$. Either 
$$[n + 1] &in; G$$ or $$[n + 1] &notin; G.$$

Suppose that $[n + 1] &notin; G$. Then $G &le; 2^{[n]}$ and by the induction hypothesis the union-closed hypothesis is true.

Now suppose on the contrary that $[n + 1] &in; G$. If $G = 2^{[n + 1]}$ then $|G_1| / |G| = 1/2$. 

Consider the family of sub-families $\\{&Gopf;_ 0, &Gopf;_ 1, &hellip;, &Gopf;_ {2^n - 1}\\}$ where $&Gopf;_ i := \text{Sub}_ {G, x, 2^n - i} $. For a sub-family $H$ in $&Gopf;_ i$, we can consider without loss of generality that $|H_1| &ge; |H_j|$, for all $1 &lt; j &le; n + 1$. Therefore we will consider that $x = 1$ for all $&Gopf;_i$.

For all $H$ in $&Gopf;_ 0$ we can see that $|H_1| = 2^n$ and $|H_\bar 1| &le; 2^n$. Therefore $|H_1| / |H| &ge; 1 / 2$.

We will make a second induction by supposing the union-closed hypothesis to be true for all $&Gopf;_i$ such that $0 &le; i &lt; n + 1$. 

We remark that we can obtain a family $H'$ in $&Gopf;_ {i + 1}$ by taking a family $H$ in $&Gopf;_ i$ and removing a set from $H$ which contains $1$. However, for $|H'_1| &ge; |H'_j|$ to hold for all $1 &lt; j &le; n + 1$, we must also remove a set from $H$ which contains $2$; a set which contains $3$; and so on up to a set which contains $n+1$.

Since $[n + 1] &in; G$ we have that $[n + 1] &in; H'$. Therefore to obtain a set $H'$ in $&Gopf;_ {i + 1}$ from $H$, we must at least remove a set in $H_1$ and a set in $H_\bar 1$. Thus $|H'_ 1| / |H'| &ge; (|H_ 1| - 1) / (|H| - 2)$ and by the second induction hypothesis $|H'_ 1| / |H'| &ge; 1 / 2$. This concludes the proof. $&#9633;$