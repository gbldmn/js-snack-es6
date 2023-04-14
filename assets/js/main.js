// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let arrayBiciclette = [
    {
        nome:'bici1',
        peso: '9kg'
    }, {
        nome:'bici2',
        peso: '10kg' 
    }, {
        nome:'bici3',
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
box.innerHTML += `<h1>${biciLeggera.nome} ${biciLeggera.peso}</h1>`


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

let randomPunti;
let randomFalli;



for (let i = 0; i < arraySquadre.length; i++) {
    let random = Math.floor(Math.random() * 10);
    console.log(random)
    let random2 = Math.floor(Math.random() * 10);

    arraySquadre[i].punti = random;
    arraySquadre[i].falli = random2;
}

for (let key in arraySquadre) {
    console.log(arraySquadre[key]);
}



// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.




    let a = 2;
    let b = 5;
    let arrayNomi = ['luca', 'lucia', 'andrea', 'sara', 'anna', 'stefano']
        console.log(arrayNomi)
  
        
    
    // arrayNomi.forEach ((element,index) => {
        
    //     let nomi = {element, index}
    //     console.log(nomi)
    //     if(nomi == 3 && nomi ==4) {
    //         nuovoArray.push(arrayNomi)
    //     }
           
        
    // })
   let nomi = arrayNomi.filter((nome, index) =>{
        console.log(nome, index)
        if(index > a && index < b) {
          return nome  
        
        }
   })
    console.log(nomi)