#!/usr/bin/env node
import { isEven, random, game } from '../even';
import readlineSync from '../index';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}!`);

game();


