/*
TABLEAUX - PRÉPA 3 : Maximum d'un tableau
1. Initialisez un tableau qui contient les nombres 3, 11, 7, 2, 9 et 10.
2. Affichez le tableau.
3. Calculez et affichez ensuite la plus grande valeur présente dans le tableau (précédée du message "La plus grande valeur de mon tableau est …").
4. Changez quelques valeurs dans le tableau (par exemple, le 9 en 90) et retestez.

Aide :
- Initialisez une variable 'max' avec la première valeur du tableau.
- Parcourez le tableau à la recherche d'un nombre plus grand que 'max' en commençant au deuxième élément du tableau :
  - Si la valeur courante est supérieure à 'max', elle devient le nouveau 'max'.
- Affichez le résultat.
*/

const numbers = [3, 11, 7, 200, 90, 10];

console.table(numbers);

let max = 3;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max){
        max = numbers[i];
    }
}

console.log(`La plus grande valeur de mon tableau est ${max}.`);