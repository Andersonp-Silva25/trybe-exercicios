//Ordenando o array em ordem crescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let firstValue = 1; firstValue < numbers.length; firstValue += 1){
    
    for (let secondValue = 0; secondValue < firstValue; secondValue += 1){

        if(numbers[firstValue] > numbers [secondValue]){

            let position = numbers[firstValue];
            numbers[firstValue] = numbers[secondValue];
            numbers[secondValue] = position;
            
        }
    }

}

console.log(numbers);