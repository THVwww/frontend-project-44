#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}`)
console.log('Find the greatest common divisor of given numbers.')
let rounds = 0;
export const nd = () => {
    let a = Math.floor(Math.random() * 100)
    let b = Math.floor(Math.random() * 100)
    console.log(`Question: ${a} ${b}`)
    const answer = readlineSync.question('Your answer: ');

    while (a != 0 && b != 0) {
        if (a > b) {
            a = a % b;
            console.log(a)
        } else {
            b = b % a;
        }
       
    }
   if(answer === String(a)){
    console.log('Correct!')
    rounds += 1
   }else{
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${a}'.\nLet's try again, ${name}!`)
    return false
   }


   if (rounds > 0 && rounds < 3) {
       nd()
       return false
    }
    console.log(`Congratulations, ${name}!`)
}
nd()


