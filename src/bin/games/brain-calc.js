#!/usr/bin/env node
import { readlineSync, game, randomOperation, calc, pair } from '../../index';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
console.log();
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);
const nums = Number(calc(pair()));

console.log(nums);
