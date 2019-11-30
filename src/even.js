import readlineSync from './index';
import { userName } from './bin/brain-even';

const isEven = (num) => (num % 2 === 0) ? 'yes' : 'no';

const random = () => Math.floor((Math.random() * 10) + (Math.random() * 10) + 1);

const game = () => {
for (let count = 0; count < 3; count += 1) {
let question = random();
let rightAnswer = isEven(question);
console.log(`Question: ${question}`);
let answer = readlineSync.question('Your answer: ');
if (rightAnswer === answer) {
console.log('Correct!');
} else {
console.log(`Let's try again, ${userName}!`);
return count;
};
};
console.log(`Congratulations, ${userName}!`);
};

export { isEven, random, game };
