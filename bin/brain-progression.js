#!/usr/bin/env node
import readlineSync, { question } from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}`) 
console.log('What number is missing in the progression?')
let questionCharIndex;
let questionChar; 
let rounds = 0; 
function progressionGenerator(diff) {
    const startNumber = Math.floor(Math.random() * 100)
    const numbers = [startNumber]
    let proressionEl = startNumber;
    for (let i = 0; i < 4; i++) {
        proressionEl = proressionEl + diff
        numbers.push(proressionEl)

    }
     questionCharIndex = Math.floor(Math.random() * numbers.length)
     questionChar = numbers[questionCharIndex] 
    numbers[questionCharIndex] = '..'

    return numbers
}

export const progression = () => {
    console.log(`Question:`)
    const num = [3, 10, 7]
    const com = num[Math.floor(num.length * Math.random())]
    console.log(progressionGenerator(com));
    

    const answer = parseInt(readlineSync.question('Your answer: '));

   if(answer === questionChar){
        console.log('Correct!')
        rounds +=1;
    }else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionChar}'.\nLet's try again, ${name}!`)
        return false
    }
    function find(seq) {
        function compareNumbers(a, b) {
            return a - b;
        }
        let arr = [...seq].sort(compareNumbers);

        let difference = arr[1] - arr[0];
        let arrLen = arr.length;
        let i = 0;
        while (i < arrLen) {
            if (arr[i + 1] - arr[i] !== difference) return arr[i] + difference;
            i++;
        }
        
    }
  
    if (rounds > 0 && rounds < 3) {
        progression()
        return false
    }
    
    console.log(`Congratulations, ${name}!`)
    
}
progression()