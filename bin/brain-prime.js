#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}`)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
let rounds=0;
export const prime = () => {
        const x = Math.floor(Math.random() * 100)
    console.log(`Question: ${x}`)
    const answer = readlineSync.question('Your answer: ');
        let i = 2;
        const isEven = Math.floor(Math.sqrt(x));
        let answeru
        if(x === 2){
            answeru = 'yes';
        }
        if(x < 2){
            answeru = 'no';
        }
        while(i<= isEven){
            if(x % i === 0){
                answeru = 'no';
            }else{
                answeru = 'yes';
            }
            i += 1
        }

        if(answer === answeru){
            console.log("Correct!")
            rounds +=1;
        }else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answeru}'.\nLet's try again, ${name}!`)
        }
     
            

        
        if (rounds >0 && rounds <3) {
            prime()
                return false
                }
            console.log(`Congratulations, ${name}!`)
        }
    
    
    


prime()