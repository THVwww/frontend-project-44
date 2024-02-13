import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}`) 
console.log('What number is missing in the progression?')



export const progression = () => {
    const answer = readlineSync.question('Your answer: ');
    function find(seq) {
        function compareNumbers(a, b) {
            return a - b;
        }
        let arr = [...seq].sort(compareNumbers);
    
        let difference = arr[1]-arr[0];
        let arrLen = arr.length;
        let i=0;
        while(i<arrLen){
            if(arr[i+1]-arr[i]!==difference) return arr[i] + difference;
            i++;
        }
}
}
progression()