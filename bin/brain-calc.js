#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('What is the result of the expression?');

let rounds = 0;
export const calc = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const z = ['+', '-', '*'];
  const p = z[Math.floor(z.length * Math.random())];

  console.log(`Question: ${a} ${p} ${b}`);
  const answer = parseInt(readlineSync.question('Your answer: '));

  if (answer === a + b) {
    console.log('Correct!');
    rounds += 1;
  }
  if (answer !== a + b && p === '+') {
    const s = a + b;
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${s}'.\nLet's try again, ${name}!`,
    );
    return false;
  }

  if (answer === a - b) {
    console.log('Correct!');
    rounds += 1;
  }
  if (answer !== a - b && p === '-') {
    const w = a - b;
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${w}'.\nLet's try again, ${name}!`,
    );
    return false;
  }
  if (answer === a * b) {
    console.log('Correct!');
    rounds += 1;
  }
  if (answer !== a * b && p === '*') {
    const y = a * b;
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${y}'.\nLet's try again, ${name}!`,
    );
    return false;
  }

  const OPERATION = {
    sum: '+',
    substract: '-',
    multiply: '*',
  };
  function conculate({operation }) {
    let result = null;
    switch (operation) {
      case OPERATION.sum:
        result = sum(a, b);
        break;
      case OPERATION.substract:
        result = substract(a, b);
        break;
      case OPERATION.multiply:
        result = multiply(a, b);
        break;
      default:
        break;
    }
  }

  if (rounds > 0 && rounds < 3) {
    calc();
    return false;
  }
  console.log(`Congratulations, ${name}!`);
};

calc();
export default calc;
