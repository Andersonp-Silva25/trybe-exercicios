//Multiplica cada valor do array pelo valor seguinte, e o ultimo será multiplicado por 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multNumbers = [];

for(let firstValue = 0; firstValue < numbers.length; firstValue += 1){

        if(firstValue === numbers.length-1){
            let value = numbers[firstValue] * 2;
            multNumbers.push(value);
        }else{
            let value = numbers[firstValue] * numbers[firstValue + 1];
            multNumbers.push(value);
        }
}

console.log(multNumbers);