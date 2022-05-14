//Converte nota em porcentagem dando conceitos de A a F

let nota = 100;

if(nota < 0 || nota > 100){
    console.log("A nota digitada é invalida");
}else if (nota >= 90){
    console.log("Nota",nota,"Conteito A");
}else if (nota >= 80){
    console.log("Nota",nota,"Conteito B");
}else if (nota >= 70){
    console.log("Nota",nota,"Conteito C");
}else if (nota >= 60){
    console.log("Nota",nota,"Conteito D");
}else if (nota >= 50){
    console.log("Nota",nota,"Conteito E");
}else if (nota < 50){
    console.log("Nota",nota,"Conteito F");
}
