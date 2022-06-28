const myList = [1, 2, 3];

//Trocando a posição dos elementos do array utilizando array destructuring
const swap = ([first, second, third]) => [third, second, first]

console.log(swap(myList));