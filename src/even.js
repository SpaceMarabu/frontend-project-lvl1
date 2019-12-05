const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const random = () => Math.floor((Math.random() * 10) + (Math.random() * 10) + 1);

const wrongEven = (userName) => {
  console.log(`Let's try again, ${userName}!`);
};
export { isEven, random, wrongEven };
