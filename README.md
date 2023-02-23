# Consegna:

### Milestone 1
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

***

### BONUS 1 (Milestone 2):
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

### BONUS 2 (Milestone 3):
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

***

### Milestone 1

1) Definisco un ciclo incrementale for con variabile i <= 100. Operazioni: 

        Definisco una variabile x

        Definisco delle condizioni: 
        - se (i / 3 restituisce resto 0) && (i / 5 restituisce resto 0) assegno alla variabile x la stringa 'FizzBuzz'
        - se i / 3 restituisce resto 0 assegno alla variabile x la stringa 'Fizz'
        - se i / 5 restituisce resto 0 assegno alla variabile x la stringa 'Buzz'

        Stampo la variabile x in console 

***

### Milestone 2 (BONUS 1)

1) Creo un container nel Dom a cui assegno un id

2) Nello scope globale definisco una variabile in cui salvo il container

3) All'interno del ciclo for: 
        - Definisco una variabile divElement nella quale creo un elemento (div)
        - Aggiungo (append) alla variabile divElement la variabile x
        - Aggiungo divElement (append) al container 

***

### Milestone 3 (BONUS 2)

1) Creo delle classi css con stili differenti per le diverse tipologie di valore  

2) Assegno le diverse classi al divElement nelle condizioni 