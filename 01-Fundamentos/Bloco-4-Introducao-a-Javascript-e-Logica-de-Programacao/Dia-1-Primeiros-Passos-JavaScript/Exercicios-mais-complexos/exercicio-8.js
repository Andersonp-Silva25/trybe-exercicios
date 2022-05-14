//Defina três numeros, e caso um dos 3 seja par retorne true

const numero1 = Math.floor(Math.random() * 100);
const numero2 = Math.floor(Math.random() * 100);
const numero3 = Math.floor(Math.random() * 100);

console.log(numero1);
console.log(numero2);
console.log(numero3);


if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0){
    console.log("True");
}else{
    console.log("False");
}