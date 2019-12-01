#!/usr/bin/env node
import { game, readlineSync, random, isEven } from '../../index';


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log();
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);
const wrong = `Let's try again, ${userName}!`;

game(random, isEven, wrong, userName);

export { userName };
