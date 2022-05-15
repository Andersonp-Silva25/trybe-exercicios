// Verificando se a media é maior ou menor que 20

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}

media = soma / numbers.length;

if (media > 20){
    console.log("Média maior que 20");
}else if (media > 0 && media <= 20){
    console.log("Média menor que 20");
}else{
    console.log("Valor negativo é invalido");
}