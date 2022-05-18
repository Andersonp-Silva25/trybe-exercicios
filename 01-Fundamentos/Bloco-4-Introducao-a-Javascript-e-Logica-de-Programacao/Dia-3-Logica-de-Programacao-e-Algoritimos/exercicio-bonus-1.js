//Faça um quadrado de asteriscos do tamanho de n

let n = 5;
let lineCol = '';

for(let index = 0; index < n; index += 1){
    lineCol = lineCol + '*';
}

for(let index = 0; index < n; index += 1){
    console.log(lineCol);
}
