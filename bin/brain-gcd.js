import readlineSync from 'readline-sync';
export const nd = (x, y) => {
    const answer = readlineSync.question('Your answer: ');
    function NOD(a, b) {
        while (a != 0 & b != 0){
            if(a > b){
                a = a%b;
            }else{
                b = b%a;
            }
        }
        
}
}
nd()


