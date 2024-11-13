
 //022 - Les tableaux indicés (Arrays)


// 1. Initialiser un nouveau tableau
// EXERCICE 1 : Créez un tableau appelé "semaine" qui contient les noms des jours de la semaine

const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

// 2. Accéder à un élément du tableau
// EXERCICE 2 : Affichez le premier jour de la semaine et le dernier jour de la semaine en utilisant les indices du tableau

 console.log(days[0]);
 console.log(days[6]);

// 3. Nombre d'éléments dans un tableau
// EXERCICE 3 : Affichez le nombre de jours dans une semaine et le dernier jour de la semaine

 console.log(days.length);
 console.log(days[6]);
// 4. Modifier les données d'un tableau
// EXERCICE 4 : Modifiez "samedi" en "saturday", réaffichez le tableau, stockez "dimanche" dans une variable jourFerie, affichez le contenu de la variable, ajoutez un nouveau jour, "dimanche2", à la fin de la semaine, puis réaffichez le tableau des jours de la semaine.

 days[5] = 'Saturday'
 console.table(days);

 days.push('dimanche2');
 console.table(days);


// 5. Un tableau peut contenir des données de différents types

 const mesElements = [1, 'Voiture', true]; // Ne pas faire car ce n'est pas une bonne pratique !

// 6. Méthodes associées à un tableau

// Methode Foreach

const car = ['Ferrari', 'Porsche', 'Audi'];

car.forEach((car)=>console.log(car));

// EXERCICE 5 : Suivez les consignes pour manipuler le tableau de fruits



