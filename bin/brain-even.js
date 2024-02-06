export const oddOrEven = (x) => {
    const answer = readlineSync.question('Your answer: ');
    const isEven = x % 2 
    if(isEven && answer === "yes"){
        console.log("Correct!")
    }
    if(isEven && answer === "no"){
        return "'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, !"
       
    }
    if(isEven !== 0 && answer === "no"){
        console.log("Correct!")
    }
    if(isEven !== 0 && answer === "yes"){
        return "'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, !"
    }
    
   
}