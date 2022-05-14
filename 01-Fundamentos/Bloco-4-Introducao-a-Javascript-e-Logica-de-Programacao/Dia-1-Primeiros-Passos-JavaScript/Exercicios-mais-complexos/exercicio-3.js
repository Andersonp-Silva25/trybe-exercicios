//Retorne o maior de três numeros

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);

console.log(num1);
console.log(num2);
console.log(num3);

if (num1 > num2 && num1 > num3){
    console.log(num1,"é o maior número");
}else if (num2 > num1 && num2 > num3){
    console.log(num2,"é o maior número");
}else if (num3 > num1 && num3 > num2){
    console.log(num3,"é o maior número");
}