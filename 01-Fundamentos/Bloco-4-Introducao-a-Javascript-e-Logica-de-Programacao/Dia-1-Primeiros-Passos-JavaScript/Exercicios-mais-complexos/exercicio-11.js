//Calculando o salario liquido a partir do salario bruto descontando o INSS e o IR

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


if (salarioBruto < 0){
    console.log("Valor do Salario Bruto invalido");
} else if(salarioBruto <= 1903.98){

    console.log("Este salario está insento de imposto de renda");

}else if(salarioBruto <= 2826.65){

    parcelaIR = 142.80;
    IR = ((salarioBruto * 7.5)/100) - parcelaIR;
    salarioLiquido = salarioBruto - IR;
    console.log("Valor da parcela: R$",parcelaIR);
    console.log("Aliquota de 7,5% menos o valor da parcela do IR: R$",IR);
    console.log("Valor do salario liquido: R$",salarioLiquido);

}else if(salarioBruto <= 3751.05){

    parcelaIR = 354.80;
    IR = ((salarioBruto * 15)/100) - parcelaIR;
    salarioLiquido = salarioBruto - IR;
    console.log("Valor da parcela: R$",parcelaIR);
    console.log("Aliquota de 15% menos o valor da parcela do IR: R$",IR);
    console.log("Valor do salario liquido: R$",salarioLiquido);

}else if(salarioBruto <= 4664.68){

    parcelaIR = 142.80;
    IR = ((salarioBruto * 22.5)/100) - parcelaIR;
    salarioLiquido = salarioBruto - IR;
    console.log("Valor da parcela: R$",parcelaIR);
    console.log("Aliquota de 22,5% menos o valor da parcela do IR: R$",IR);
    console.log("Valor do salario liquido: R$",salarioLiquido);

}else{
    
    parcelaIR = 869,36;
    IR = ((salarioBruto * 27.5)/100) - parcelaIR;
    salarioLiquido = salarioBruto - IR;
    console.log("Valor da parcela: R$",parcelaIR);
    console.log("Aliquota de 27,5% menos o valor da parcela do IR: R$",IR);
    console.log("Valor do salario liquido: R$",salarioLiquido);

}