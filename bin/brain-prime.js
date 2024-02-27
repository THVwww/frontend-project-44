#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}`)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
let rounds=0;
export const prime = () => {
        const x = Math.floor(Math.random() * 1000)
    console.log(`Question:${x}`)
    const answer = readlineSync.question('Your answer: ');
        const isEven = x / 1 && x % x === 0
        if (isEven && answer === "yes") {
            console.log("Correct!")
            rounds +=1;
        }
        if (isEven && answer === "no") {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`)
            return false
            

        }
        console.log(`Congratulations, ${name}!`)
        if (rounds >0 && rounds <3) {
            prime()
           }
           

    }
    
    


prime()