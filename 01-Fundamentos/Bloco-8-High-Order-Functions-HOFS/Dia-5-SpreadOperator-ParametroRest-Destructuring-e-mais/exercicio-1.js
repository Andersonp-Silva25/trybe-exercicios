const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

//Usando spread operator para mostrar a area dos 3 retangulos
rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});