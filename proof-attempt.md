# A Proof Of The Union-Closed Sets Conjecture

## Introduction

In this text, we will try to formulate a proof of the union-closed sets conjecture. Because we will deal with a lot of higher-order sets, we will distinguish three types of sets: _collections_, _families_ and _sets_. We will try to reserve the term _set_ for the lowest order sets, that is sets which contains elements which cannot be broken down into further sets of elements. We will use the terms _family_ for sets containing sets of elements and _collection_ for sets of families. In the same vein we will try to reserve the term element for the members of the lowest order sets. Put succintly, collections contain families, families contain sets and sets contain elements.

To stay consistent with our convention, we will refer as of now to the union-closed families conjecture.

Just like with sets and subsets, we may also refer to subcollections and subfamilies.

_subcollection_:
    Let `C` and `C'` be two collections such that every family `F` of `C` is also a family of `C'`, then `C` is a subcollection of `C'` and we use the expression `C ⊂ C'` to denote such two collections.

_subfamily_:
    Let `F` and `F'` be two families such that every set `X` of `F` is also a set of `F'`, then `F` is a subfamily of `F'` and we use the expression `F ⊂ F'` to denote such two families.

It will also be convenient to have a short name to deal with union-closed families so, in the same spirit as _posets_, we'll use the term _usets_  to denote such families. Formally a uset is a family `F` paired with a union operation `(F, +)` such that `F` is closed under `+`. That is for all `X`, `Y` in `F`, `X` + `Y` in `F`.

A subuset is a subfamily of a uset that is also closed under the union operation. To differentiate it from a subfamily which might not necessarily be union-closed, we will use `U ⋐ U'` to denote a subuset `U` of `U'`.

In this work, we will only be concerned with usets of integers as it is easy to translate results with usets of integers to any type of usets by using a straightforward isomorphic mapping.

Other notations that will come in handy will be:

- `[1]` to denote the set `{1}`, `[2]` to denote the set `{1, 2}` and more generaly `[n]` to denote the set `{1, 2, ..., n}`;
- `2^X` to denote the powerset of `X`; 
- `F_x` for the subfamily of `F` which contains all sets `X` in `F` containing `x`;
- `|X|` will denote the number of members of a set of any order as usual.

Later in this text, we will want to partition collections of usets

(F:2^)