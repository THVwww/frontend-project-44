import readlineSync from 'readline-sync';
export const prime = (a) => {
    const answer = readlineSync.question('Your answer: ');
    const corectAnswer =  Math.floor(Math.random() * 100)
    
        for(let i = 0; i < corectAnswer; i++) {
    const isEven = i / 1 &&  i % i === 0
    if(isEven && answer === "yes"){
        console.log("Correct!")
    }
    if(isEven && answer === "no"){
        return "'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, !"
       
    }

}
}

prime()