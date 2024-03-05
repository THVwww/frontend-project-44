#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
let rounds = 0;
export const nd = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  console.log(`Question: ${x} ${y}`);
  const answer = readlineSync.question('Your answer: ');

  const smallest = x - y > 0 ? y : x;
  const arr = [];
  for (let i = 1; i <= smallest; i += 1) {
    if (x % i === 0 && y % i === 0) {
      arr.push(i);
    }
  }
  const rightAnswer = String(arr[arr.length - 1]);
  if (answer === rightAnswer) {
    console.log('Correct!');
    rounds += 1;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`,
    );
    return false;
  }

  if (rounds > 0 && rounds < 3) {
    nd();
    return false;
  }
  console.log(`Congratulations, ${name}!`);
};

nd();
export default nd