#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}`) 
console.log('Answer "yes" if the number is even, otherwise answer "no".')

let rounds=0;
export const oddOrEven = () => {
    let x = Math.floor(Math.random() * 1000); 
    console.log(`Question: ${x}`)
    const answer = readlineSync.question('Your answer: ');
    const isEven = x % 2 === 0
    if(isEven && answer === "yes"){
        console.log("Correct!")
        rounds +=1;
    }
    if(isEven && answer === "no"){
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`)
    }
    if(isEven && answer === "no"){
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`)
    }
       
    
    if(!isEven  && answer === "no"){
        console.log("Correct!")
        rounds +=1;
    }
    if(!isEven  && answer === "yes"){
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`)
    }
    if(rounds === 3){
        console.log(`Congratulations, ${name}!`)
    }
    if (rounds > 0 && rounds < 3) {
        oddOrEven()
       }
}

 
oddOrEven()


