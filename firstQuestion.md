# Première question

*Expliquez, en quelques lignes, ce que fait cette fonction.*

## Réponse:
Au vu des différents résultats, on peut à priori déduire que cette fonction permet de fusionner les intervalles qui se croisent.

Par exemple dans la deuxième appel de fonction [0, 5] et [3, 10] rentrent en conflits car les chiffres 3, 4 et 5 sont dans les deux intervalles, alors on les fusionne et on obtient [0, 10].

A contrario dans le premier exemple, [0, 3] et [6, 10] n'ont aucune valeure commune, alors on renvoie ces deux intervalles sans modification.

La fonction tri également les intervalles par ordre ascendant.


**L'implémentation de la fonction se trouve dans le fichier secondQuestion.js**