//Soma de valores aleatorios usando o parametro rest
const sum = (...rest) => rest.reduce((soma, valor) => soma + valor);

console.log(sum(1,2,3));