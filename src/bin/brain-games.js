#!/usr/bin/env node
import { readlineSync } from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}!`);
