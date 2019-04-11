# Union-Closed Sets Study

P_n is the power set of {1, 2, ... , n}.

F is the collection of all union closed families X subset P_n.

F_n is the collection of union-closed families of size n in F.

The map count(k, X) associates to a subset X of P_n the number of members of X which contain k.

The map phi(X) associates to a subset X of P_n an n-tuple (x_1, x_2, ... , x_n) where x_k = count(k, X).

Let the relation A =_phi B between two union-closed families holds if there exists a permutation sigma such that phi(A) = phi(sigma * B) = (sigma * phi)(B).

The total order T < U between two n-tuple is the lexicographical order.

Let [X]_phi be the equivalence class of X under the relation =_phi.

The total order X < Y between two equivalence classes of F/=_phi holds if the greatest member of {phi(x) | x in [X]_phi} is smaller than or equal to the greatest member of {phi(y) | y in [Y]_phi}.

Let G = (F, E) be the graph of families of F as vertices where (A, B) is an edge in E if |A| = |B| + 1 and |A \ B| = 1.

The partial order relation B < A between to union-closed families holds if there exists a path (A, ... , B) in 
G.

## Questions

1. Do the graph G covers all families of F? yes
2. Do =_phi preserves the order relation on vertices of G induced by adjacent vertices? yes
   A < B => [A]_phi < [B]_phi
3. Is there always a path (X_1, X_2, ... , X_k) in G between two families X_k < X_1 such that for any triplet X_i > X_i+1 > X_i+2, either count(1, X_i) = count(1, X_i+1) or count(1, X_i+1) = count(1, X_i+2)? NO!!!! There is a counter example in F(P_3)
4. If phi(A) = phi(sigma * B), do necessarily phi(sigma * B) = (sigma * phi)(B)?