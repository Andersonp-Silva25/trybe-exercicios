// Faça um triangulo invertido de base n

let n = 5;
let lineCol = '';
let space = ' ';
let symbol = '*';
let column = n;

for(let index = 0; index < n; index += 1){
    for(let indexColumn = 0; indexColumn <= n; indexColumn += 1){
        if(indexColumn < column){
            lineCol = lineCol + space;
        }else{
            lineCol = lineCol + symbol;
        }
    }
    console.log(lineCol);
    lineCol = '';
    column -= 1;
}
