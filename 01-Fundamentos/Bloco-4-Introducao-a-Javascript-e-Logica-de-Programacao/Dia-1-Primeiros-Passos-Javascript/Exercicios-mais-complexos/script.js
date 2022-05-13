let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let resultado = 0;

for(let index=0; index<numbers.length; index+=1){
    resultado += numbers[index];
}

console.log("A soma de todos os valores do array é:",resultado);