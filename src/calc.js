import { random, cons, car, cdr } from './index';

const pair = () => cons(random(), random());
const randomOperation = () => {
const num = Math.floor(Math.random() * 3) + 1;
switch (num) {
  case 1:
    return '+';
    break;
  case 2:
    return '-';
    break;
  case 3:
    return '*';
    break;
};
};
const calc = (pair) => String(`${car(pair)} ${randomOperation()} ${cdr(pair)}`);
const operation
export { randomOperation, pair, calc };
