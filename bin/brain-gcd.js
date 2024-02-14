#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}`)
console.log('Find the greatest common divisor of given numbers.')
let rounds = 0;
export const nd = () => {
    let a = Math.floor(Math.random() * 1000)
    let b = Math.floor(Math.random() * 1000)
    console.log(`Question: ${a} ${b}`)
    const answer = readlineSync.question('Your answer: ');

    while (a != 0 & b != 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
   if(answer === a){
    console.log('Correct!')
   }else{
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${a}'. Let's try again, ${name}!`)
   }

}
console.log(`Congratulations, ${name}!`)
if (rounds > 0 && rounds < 3) {
    nd()
}

nd()


