// Verifica os angulos de um triangulo

const angulo1 = 50;
const angulo2 = 50;
const angulo3 = 80;

let soma = angulo1 + angulo2 + angulo3;
let positivo = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (positivo){
    if(soma === 180){
        console.log(true);
    }else{
        console.log(false);
    }
}else{
    console.log("Angulo invalido");
}