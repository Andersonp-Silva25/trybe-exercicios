const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

//Retorne um nove array com os meses do ano utilizando object destructuring e spread operator
const mesesAno = ({spring, summer, autumn, winter}) => {
  const [March, April, May] = spring;
  const [June, July, August] = summer;
  const [September, October, November] = autumn;
  const [December, January, February] = winter;
  return [January, February, March, April, May, June, July, August, September, October, November, December];
}

console.log(mesesAno(yearSeasons));