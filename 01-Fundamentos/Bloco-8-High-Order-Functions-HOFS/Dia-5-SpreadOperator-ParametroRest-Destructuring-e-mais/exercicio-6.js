const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

//Retornando um objeto utilizando array destructuring e abbreviation object literal
const toObject = ([carro, modelo, ano]) => ({carro, modelo, ano})

console.log(toObject(palio));