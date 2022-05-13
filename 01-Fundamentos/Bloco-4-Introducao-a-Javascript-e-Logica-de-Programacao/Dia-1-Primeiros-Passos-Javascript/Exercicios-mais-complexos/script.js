let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let resultado = 0;
let media = 0;

for(let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];
}

console.log("A soma de todos os valores do array é:",resultado);

media = resultado / numbers.length;

console.log("A media aritimetica da soma dos valores do array é:",media);

if(media>20){
    console.log("Valor maior que 20");
}else if(media<20){
    console.log("Valor menor que 20");
}

let maiorValor = 0;

for(let index = 0; index < numbers.length; index += 1){
    let temp = numbers[index];
    if(temp > maiorValor){
        maiorValor = temp;
    }
}

console.log("O maior valor dentro do array é:",maiorValor);