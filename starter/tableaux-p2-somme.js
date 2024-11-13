/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10.
2. Affichez le tableau (précédé du texte : "Voici mon tableau de nombres :").
3. Calculez puis affichez la somme des valeurs du tableau 'nombres' :
   - Utilisez la méthode 'forEach()' pour afficher la somme des nombres dans le tableau (précédée du texte : "La somme des nombres de mon tableau est …").
   - Utilisez une boucle 'for/of' pour faire la même chose.

Version alternative (avec BONUS) :
1. Initialisez
   - une variable 'message' à une chaîne vide ;
   - une variable 'somme' à 0.
2. Parcourez votre tableau de nombres à l'aide d'une boucle 'for' pour construire le message : "… + … + … = ".
3. Parcourez votre tableau de nombres à l'aide d'une boucle 'for/of' pour calculer la somme des valeurs du tableau.
4. Affichez le message final : "… + … + … = …".
*/
/*
const numbers = [11, 3, 7, 2, 9, 10];

console.log(`Voici le tableau de nombres :`);
console.table(numbers);

let sumForEach = 0;

numbers.forEach((numbers) => sumForEach += numbers);

console.log(`La somme de tout les nombres du tableaux est : ${sumForEach}.`);


for (const number of numbers) {
    sumForEach += number
}

console.log(`La somme de tout les nombres du tableaux est : ${sumForEach}.`);
*/

const numbers = [11, 3, 7, 2, 9, 10];
let message = "";
let sum = 0;
/*
for (let i = 0; i <numbers.length ; i++) {
    sum += numbers[i];
    message +=numbers[i];
    if (i < numbers.length -1 ){
        message += " + ";
    }
}
console.log(`${message} = ${sum}`);
*/

for (const number of numbers) {
    sum += number;
    message += number + " + ";
}
message = message.slice(0, -3);
console.log(`${message} = ${sum}`);