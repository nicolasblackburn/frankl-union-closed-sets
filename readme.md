# A proof of the union-closed sets conjecture

## Introduction

In this text, we will formulate a proof of the union-closed sets conjecture. We will construct the proof by induction. It will be convenient to have a short name to deal with union-closed sets so, in the same spirit as _posets_, we'll use the term _usets_ to denote such sets. Formally a uset $F$ is a finite non-empty family of sets, different from $\{\emptyset\}$, paired with a union operation $(F, \cup)$ such that $F$ is closed under union. That is $\forall X, Y \in F (X \cup Y \in F)$.

A subuset is a subset of a uset that is also closed under the union operation. To differentiate it from a normal set which might not necessarily be union-closed, we will use $F < G$ to denote a subuset $F$ of $G$.

For the rest of this work, we will only be concerned with usets over integers as it is easy to translate results to usets over any universe of elements by indexing those elements with integers and introducing the isomorphic map that associates each elements with its integer index.

## Definitions

_Universe_:
    The universe $U(F)$ of a family of sets $F$ is defined as $U(F) := \bigcup_{X \in F} X$.

_Range_:
    The range from $1$ to $n$ is defined as $[n] := \{1, 2, ..., n\}$.

_Coset_:
    Let $F$ be a uset with universe $U$ and $X$ be a subset of $U$. Then the coset of $F$ by $X$ is denoted $F_X$ and is defined as $F_X := \{A \in F: A \cup X \neq \emptyset\}$. When $X$ is a singleton $\{a\}$, $F_a := F_{\{a\}}$.

## Conjecture statement

The union-closed sets conjecture can be formulated as for every uset $F$, there exists an element $x$ in $U(F)$ such that $2 |F_x| \ge |F|$. 

## Proof

### 1. Base case

Let us introduce the base case. Let us consider the powerset $P(U) = \{\emptyset, \{1\}, \{\emptyset, 1\}\}$ for $U = [1]$. By definition $P(U)$ is closed under union and $2 |P(U)_1| = |P(U)|$. The only other subset of $P(U)$ that is not empty and that is different from $\{\emptyset\}$ is $F = \{\{1\}\}$. It is trivial show that $F$ is a uset and since $|F_1| = |F|$ we can derive that $2 |F_1| \ge |F|$.

### 2. Induction hypothesis

Now consider a universe $U = [n]$ of size $n$. Let us suppose that every subuset $F < P(U)$ satisfy $\exists x \in U (2 |F_x| \ge |F|)$.

### 3. Induction step

We will now turn our attention to $U = [n + 1]$, a universe of size $n + 1$, and let $C$ denote the family of all subusets of $P(U)$. Let us introduce a partition of $C$ into classes $C_i = \{F < P(U): |F_{n + 1}| = i\}$ for every $0 \le i \le 2^n$.

#### 3.1. Usets with empty $(n + 1)$-coset

First, let us consider the class $C_0$. For every uset $F \in C_0$, since $|F_{n + 1}| = 0$, the universe of $F$ is a subset of $[n]$. By our induction hypothesis, $\exists x \in U (2 |F_x| \ge |F|)$ is satisfied.

#### 3.2. Usets with $(n + 1)$-coset of size i

Now, let us turn our attention more generally at any class $C_i$ for $i > 0$. We will start by focusing on usets $F \in C_i$ such that $|F_{n + 1}| = |F|$. It will be convenient to regroup those usets into a named collection $C_i^*$. These $F$ are usets of minimal size $i$ in $C_i$ and every set in $F$ contains $n + 1$. Since $|F_{n + 1}| = |F|$, it is easy to infer that $2 F_{n + 1}| \ge |F|$.

The rest of the usets $F$ in $C_i \setminus C_i^*$ are disjoint unions $G = F \sqcup S$ of some subset $S \subset P(U)$ and uset $F \in C_i^*$. By definition of $C_i$, no set in $S$ contains $n + 1$ otherwise $|G_{n + 1}|$ would be greater than $i$.

We define a map $\Phi: F \to \mathop {Im} \Phi$ as $\Phi(F) = F \setminus \{n + 1\}$. The map $\Phi$ preserves union-closed property and it is bijective therefore $F$ is isomorphic to $\mathop {Im} \Phi$. Since $U(\mathop {Im} \Phi)$ is a subset of $[n]$, there exist an element $x \in U(\mathop {Im} \Phi)$ such that $2 |(\mathop {Im} \Phi)_x| \ge |\mathop {Im} \Phi|$ by our induction hypothesis. The two usets $F$ and $\mathop {Im} \Phi$ are disjoint.

Now we can ask the question: what are the subsets $S \subset P(U)$ such that $F \sqcup S \in C_i$? The answer is precisely those that are subsets $S \subset \mathop {\mathop {Im}} \Phi$ and which preserves union-closed property under disjoint union. Let us suppose that $S$ contains a set $X$ that is not in $\mathop {Im} \Phi$. Then $X \cup (n + 1)$ is not in $F$ and therefore $F \sqcup S$ cannot be a member of $C_i$. Because $\mathop {Im} \Phi$ is in bijection with $F$, $|\mathop {Im} \Phi| = |F|$ and therefore $|S| \le i$.

We can now conclude the proof. If $i > |S|$ then $2 |(F \sqcup S)_{n + 1}| \ge |F \sqcup S|$. If $i = |S|$ then $S = \mathop {Im} \Phi$ and there exist an element $x \in U(\mathop {Im} \Phi)$ such that $2 |(\mathop {Im} \Phi)_x| \ge |\mathop {Im} \Phi|$. The size of coset $|F_x| = |(\mathop {Im} \Phi)_x|$ therefore $2 |(F \sqcup \mathop {Im} \Phi)_x| \ge |F \sqcup \mathop {Im} \Phi|$.

## References

https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.081/Henning/UCSurvey.pdf

https://cs.uwaterloo.ca/journals/JIS/VOL21/Brinkmann/brink6.pdf

H. Bruhn and O. Schaudt, The Journey of the Union-Closed Sets Conjecture, _Graphs and Combinatorics_ 31(6) (2015), 2043-2074. 

Wikipedia, Union-closed sets conjecture, http://en.wikipedia.org/wiki/Union-closed_sets_conjecture, accessed: 2019/08/05.