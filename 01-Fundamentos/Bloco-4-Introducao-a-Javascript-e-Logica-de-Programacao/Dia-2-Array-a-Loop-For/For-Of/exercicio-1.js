// Usando For/Of e imprimir a lista name

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let index = 0; index < names.length; index += 1){
    for (let letter of names[index]){
        console.log(letter);
    }
    console.log("***************");
}