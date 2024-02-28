#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Find the greatest common divisor of given numbers.')
let rounds = 0;
export const nd = () => {
    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 100)
    console.log(`Question: ${x} ${y}`)
    const answer = readlineSync.question('Your answer: ');

    function NOD () {
        for (var x = arguments[0], i = 1; i < arguments.length; i++) {
          var y = arguments[i];
          while (x && y) {
            x > y ? x %= y : y %= x;
          }
          x += y;
        }
        return x;
      }
  if(answer === String(x)){
    console.log('Correct!')
    rounds += 1
   }else{
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${x}'.\nLet's try again, ${name}!`)
    return false
   }


   if (rounds > 0 && rounds < 3) {
       nd()
       return false
    }
    console.log(`Congratulations, ${name}!`)
}
nd()


