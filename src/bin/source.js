import { readlineSync } from '../index';

const game = (question, check, wrong, userName) => {
  for (let count = 0; count < 3; count += 1) {
    const name = userName;
    const quest = question();
    const rightAnswer = check(quest);
    console.log(`Question: ${quest}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer == userAnswer) {
      console.log('Correct!');
    } else {
      wrong(name, rightAnswer, userAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
