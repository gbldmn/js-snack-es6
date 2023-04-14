// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let arrayBiciclette = [
    {
        nome:'graziella',
        peso: '9kg'
    }, {
        nome:'raice',
        peso: '10kg' 
    }, {
        nome:'tuner',
        peso: '15kg'
    }
    
];
// console.log(arrayBiciclette)

let biciLeggera = arrayBiciclette[0];
    console.log(arrayBiciclette[0])

    // arrayBiciclette.forEach(element, index) => {
    //     let {nome,peso} = element
    //     console.log(nome,peso, index)
    // });


let box = document.querySelector('.box');
box.innerHTML += `${arrayBiciclette[0]}`


// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var arraySquadre = [
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Parma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    }
]


// aggiunta arrow function
let random = Math.floor(Math.random() * 10);

    arraySquadre.punti = random;
    arraySquadre.falli = random;



// stampa
for (let key in arraySquadre) {
    console.log(arraySquadre[key]);
}