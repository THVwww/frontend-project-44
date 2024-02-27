#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}`)
console.log('What is the result of the expression?')

let rounds = 0;
export const calc = () => {
    let a = Math.floor(Math.random() * 1000)
    let b = Math.floor(Math.random() * 1000)
    const z = ['+', '-', '*']
    let p = z[Math.floor(z.length * Math.random())];

    console.log(`Question: ${a} ${p} ${b}`)
    const answer = parseInt(readlineSync.question('Your answer: '));



    if (answer === a + b) {
        console.log("Correct!")
        rounds += 1
    }
    if (answer !== a + b && p==='+') {
        const s = a + b
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${s}'. Let's try again, ${name}!`)
    }




    if (answer === a - b) {
        console.log("Correct!")
        rounds += 1
    }
    if (answer !== a - b && p === '-') {
        const w = a - b
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${w}'. Let's try again, ${name}!`)
    }
    if (answer === a * b) {
        console.log("Correct!")
        rounds += 1             
    }
    if (answer !== a * b && p==='*') {
        const y = a * b
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${y}'. Let's try again, ${name}!`)
    }

    const OPERATION = {
        sum: '+',
        substract: '-',
        multiply: '*',
    };
    function calculate({ a, b, operation }) {
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
    console.log(`Congratulations, ${name}!`)
    if (rounds > 0 && rounds < 3) {
        calc()
    }
}

calc()