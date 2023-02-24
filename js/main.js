'use strict';

// Definisco la variabile container
const container = document.getElementById('container');
// Definisco la variabile x
let x;

// Definisco un ciclo incrementale for
for (let i = 1; i <= 100; i++) {
    // Definisco la variabile divElement in cui creo un elemento div
    const divElement = document.createElement('div');
    // Assegno all'elemento divElement la classe div-element
    divElement.classList.add('div-element');
    // Aggiungo divElement al container 
    container.append(divElement);

    // Definisco delle condizioni
    if (i % 3 === 0 && i % 5 === 0) {
        x = 'FizzBuzz';
        divElement.classList.add('fizzbuzz');
    } else if (i % 5 === 0) {
        x = 'Buzz';
        divElement.classList.add('buzz');
    } else if (i % 3 === 0) {
        x = 'Fizz';
        divElement.classList.add('fizz');
    } else {
        x = i;
        divElement.classList.add('number');
    }

    // Stampo la variabile x in console
    console.log(x);
    // Aggiungo alla variabile divElement la variabile x (stringa da mostrare)
    divElement.append(x);
}