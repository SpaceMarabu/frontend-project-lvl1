const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const random = () => Math.floor((Math.random() * 10) + (Math.random() * 10) + 1);

export { isEven, random };
