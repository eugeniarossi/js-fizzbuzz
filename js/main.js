'use strict';

// Definisco la variabile container
const container = document.getElementById('container');

// Definisco un ciclo incrementale for
for (let i = 1; i <= 100; i++) {

    let x;

    // Definisco la variabile divElement in cui creo un elemento div
    const divElement = document.createElement('div');

    if ((i % 3 === 0) && (i % 5 === 0)) {
        x = 'FizzBuzz';

    } else if (i % 5 === 0) {
        x = 'Buzz';

    } else if (i % 3 === 0) {
        x = 'Fizz';

    } else {
        x = i;
    }

    // Stampo la variabile x in console
    console.log(x);

    // Aggiungo alla variabile divElement la variabile x (stringa da mostrare)
    divElement.append(x);
    
    // Aggiungo divElement al container 
    container.append(divElement);
}



