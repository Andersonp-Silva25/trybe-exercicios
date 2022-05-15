//Defina três numeros, e caso um dos 3 seja impar retorne true

const numero1 = Math.floor(Math.random() * 100);
const numero2 = Math.floor(Math.random() * 100);
const numero3 = Math.floor(Math.random() * 100);

console.log(numero1);
console.log(numero2);
console.log(numero3);


if (numero1 % 2 === 1 || numero2 % 2 === 1 || numero3 % 2 === 1){
    console.log("True");
}else{
    console.log("False");
}