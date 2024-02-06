
import readlineSync from 'readline-sync';

export const calc = (a, b) => {
    const answer = readlineSync.question('Your answer: ');
   function sum(a, b) {
    const reply = a + b
    if(reply && answer === a + b){
    console.log("Correct!")
    }
    if(reply && answer !== a + b){
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${reply}'. Let's try again, !`)
    }
      return a + b
   }
   function substract(a, b) {
    const reply = a - b
    if(reply && answer === a - b){
    console.log("Correct!")
    }
    if(reply && answer !== a - b){
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${reply}'. Let's try again, !`)
    }
    return a - b
   }
   function multiply(a, b) {
    const reply = a * b
    if(reply && answer === a * b){
    console.log("Correct!")
    }
    if(reply && answer !== a * b){
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${reply}'. Let's try again, !`)
    }
    return a * b
   }
   const OPERATION = {
    sum: '+',
    substract: '-',
    multiply: '*',
   };
   function calculate({a, b, operation}) {
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
}
calc()