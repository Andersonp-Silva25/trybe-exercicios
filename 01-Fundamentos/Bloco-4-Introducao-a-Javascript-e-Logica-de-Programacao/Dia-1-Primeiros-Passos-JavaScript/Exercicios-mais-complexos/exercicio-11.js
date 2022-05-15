//Calculando o salario liquido a partir do salario bruto

let salarioBruto = 7000;
let salarioLiquido = 0;
let INSS = 0; //Instituto Nacional do Seguro Social
let IR = 0; //Imposto de renda
let parcelaIR = 0; //Parcela do imposto de renda

console.log("Salario Bruto: R$",salarioBruto);

if (salarioBruto < 0){

    console.log("Valor do Salario Bruto invalido");

} else if (salarioBruto > 0 && salarioBruto <= 1556.94){

    INSS = (salarioBruto * 8)/100
    salarioBruto = salarioBruto - INSS;
    console.log("Desconto de 8% do INSS: R$",INSS);
    console.log("Salario Bruto menos INSS: R$",salarioBruto);

}else if (salarioBruto <= 2594.92){

    INSS = (salarioBruto * 9)/100
    salarioBruto = salarioBruto - INSS;
    console.log("Desconto de 9% do INSS: R$",INSS);
    console.log("Salario Bruto menos INSS: R$",salarioBruto);

}else if (salarioBruto <= 5189.82){

    INSS = (salarioBruto * 11)/100
    salarioBruto = salarioBruto - INSS;
    console.log("Desconto de 11% do INSS: R$",INSS);
    console.log("Salario Bruto menos INSS: R$",salarioBruto);

}else{

    INSS = 570.88;
    salarioBruto = salarioBruto - INSS;
    console.log("Salarios acima de R$ 5189.82, desconto de: R$",INSS);
    console.log("Salario Bruto menos INSS: R$",salarioBruto);

}

