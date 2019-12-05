import { random } from './index';

const randomOperation = () => {
const num = Math.floor(Math.random() * 3) + 1;
switch (num) {
  case 1:
    return `${random()} + ${random()}`;
    break;
  case 2:
    return `${random()} - ${random()}`;
    break;
  case 3:
    return `${random()} * ${random()}`;
    break;
};
};

const wrongCalc = (userName, rightAnswer, userAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
  console.log(`Let's try again, ${userName}!`);
};

export { randomOperation, wrongCalc };
