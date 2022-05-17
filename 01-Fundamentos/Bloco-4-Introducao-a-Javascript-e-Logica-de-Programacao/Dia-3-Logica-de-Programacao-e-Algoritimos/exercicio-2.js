//Invertendo palavras

let word = 'trybe';
let reverseWord = '';

for(let index = 0; index < word.length; index += 1){
  reverseWord += word[word.length - 1 - index];
}

console.log(word);
console.log(reverseWord);