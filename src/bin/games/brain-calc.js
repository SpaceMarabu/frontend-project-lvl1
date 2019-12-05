#!/usr/bin/env node
import { readlineSync, game, randomOperation, wrongCalc } from '../../index';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
console.log();
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);
game(randomOperation, eval, wrongCalc, userName );
