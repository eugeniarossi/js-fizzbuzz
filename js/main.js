'use strict';

const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {

    let x;

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

    console.log(x);

    divElement.append(x);
    container.append(divElement);
}



