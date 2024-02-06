import readlineSync from 'readline-sync';


export const cli = () => {
    const name = readlineSync.question('Your answer: ');
    const hi = "Hello,"
    return hi + name
}