# A Proof Of The Union-Closed Sets Conjecture

## Introduction

In this text, we will formulate a proof of the union-closed sets conjecture by induction. It will be convenient to have a short name to deal with union-closed sets so, in the same spirit as _posets_, we'll use the term _usets_ to denote such sets. Formally a uset `F` is a finite non-empty family of sets, different from `{⦰}`, paired with a union operation `(F, ∪)` such that `F` is closed under union. That is `∀ X, Y ∊ F.(X ∪ Y ∊ F)`.

A subuset is a subset of a uset that is also closed under the union operation. To differentiate it from a normal set which might not necessarily be union-closed, we will use `F < G` to denote a subuset `F` of `G`.

For the rest of this work, we will only be concerned with usets over integers as it is easy to translate results to usets over any universe of elements by indexing those elements with integers and introducing the isomorphic map that associates each elements with its integer index.

## Definitions

_Universe_:
    The universe `U(F)` of a family of sets `F` is defined as `U(F) := ⋃_(X ∊ F) X`.

_Range_:
    The range from `1` to `n` is defined as `[n] := {1, 2, ..., n}`.

_Coset_:
    Let `F` be a uset with universe `U` and `X` be a subset of `U`. Then the coset of `F` by `X` is denoted `F_X` and is defined as `F_X := {A ∊ F: A ∩ X ≠ ⦰}`. When `X` is a singleton `{a}`, `F_a := F_{a}`.

## Conjecture Statement

The union-closed sets conjecture can be formulated as for every uset `F`, there exists an element `x` in `U(F)` such that `2 |F_x| ≥ |F|`. 

## Proof

### 1. Base Case

Let us introduce the base case. Let us consider the powerset `P(U) = {⦰, {1}, {⦰, 1}}` for `U = [1]`. By definition `P(U)` is closed under union and `2 |P(U)_1| = |P(U)|`. The only other subset of `P(U)` that is not empty and that is different from `{⦰}` is `F = {{1}}`. It is trivial show that `F` is a uset and since `|F_1| = |F|` we can derive that `2 |F_1| ≥ |F|`.

### 2. Induction Hypothesis

Now consider a universe `U = [n]` of size `n`. Let us suppose that every subuset `F < P(U)` satisfy `∃x ∊ U.(2 |F_x| ≥ |F|)`.

### 3. Induction Step

We will now turn our attention to `U = [n + 1]`, a universe of size `n + 1`, and let `C` denote the family of all subusets of `P(U)`. Let us introduce a partition of `C` into classes `C_i = {F ⊂ P(U): |F_1| = i}` for every `0 ≤ i ≤ 2^n`.

### 3.3 Subusets With Empty Coset By 1 

Let us consider class `C_0`, 

⋃⋂∊≤≥∃∀⊂⊃∈∉∪∩≠