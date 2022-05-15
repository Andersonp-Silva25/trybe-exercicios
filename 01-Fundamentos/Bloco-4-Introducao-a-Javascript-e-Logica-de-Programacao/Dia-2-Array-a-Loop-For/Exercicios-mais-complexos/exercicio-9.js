// Dividindo todos os elementos do array criado por 2

let array = [];
let divisao = 0;

for (let index = 1; index < 26; index += 1){
    array.push(index);
}
console.log(array);
console.log("*********");

for (let index = 0; index < array.length; index += 1){
    divisao = array[index]/2;
    console.log(array[index],"/ 2 =",divisao);
}

