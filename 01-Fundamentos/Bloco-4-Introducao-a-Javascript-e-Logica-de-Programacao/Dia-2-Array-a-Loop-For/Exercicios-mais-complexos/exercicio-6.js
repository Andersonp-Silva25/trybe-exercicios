// Descobrindo quantos valores impares tem no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for (let index = 0; index < numbers.length; index += 1){
    if((numbers[index]%2) === 1){
        impares += 1;
    }
}

console.log("Quantidade de numeros impares no array é:",impares);