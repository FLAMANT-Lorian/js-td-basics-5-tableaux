// Notation de base d'un tableau indicé

const tests = [16, 10, 12];
tests.push(20); // Une méthode => On rajoute un élément à la fin du tableau
tests.unshift(19) // Une méthde => On rajoute un élément au début du tableau
console.log(tests);
console.table(tests);
console.table(tests.length); // Le ".lenght" une est propiété (valeur local à la variable) qui la longueur du tableaux
console.log(tests[4]);  // Affciher la valeur "x" d'un tableau (ici la 4ème valeur)

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]); // crochets d'accession : pour accéder à un tableau
}

function moyenne(tests) {
    let sum = 0;
    /*for (let i = 0; i < tests.length; i++) {
        sum += tests[i];
    }*/
    for (const test of tests) {
         sum += test;
     }
    return sum / tests.length;
}

console.log(moyenne(tests));


// Tableaux associatifs

const movies = {
    premier /* Premier est un propriété*/: 'Film 1',
    deuxieme: 'Film 2',
    troisieme: 'Film 3', // Ici, il y a trois propriété
    print() { // Print est la méthode
        console.log(this.premier); // Le "this" est pointeur constant qui fait référence à un objet constant
        }
};
// c'est un objet

movies.print();

console.table(movies);