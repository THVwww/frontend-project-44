#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let rounds = 0;
export const prime = () => {
  const x = Math.floor(Math.random() * 10);
  console.log(`Question: ${x}`);
  const answeru = readlineSync.question('Your answer: ');
  let answer;
  if (x < 2) {
    answer = 'no';
  }
  if (x === 2) {
    answer = 'yes';
  }
  if (x === 3) {
    answer = 'yes'
  }

  let i = 2;
  const limit = Math.sqrt(x);
  while (i <= limit) {
    if (x % i === 0) {
      answer = 'no';
    } else {
      answer = 'yes';
    }
    i += 1;
  }

  if (answeru === answer) {
    console.log('Correct!');
    rounds += 1;
  } else {
    console.log(
      `'${answeru}' is wrong answer ; (.Correct answer was '${answer}'.\nLet's try again, ${name}!`,
    );
    return false;
  }
  if (rounds > 0 && rounds < 3) {
    prime();
    return false;
  }
  console.log(`Congratulations, ${name}!`);
};

prime();
