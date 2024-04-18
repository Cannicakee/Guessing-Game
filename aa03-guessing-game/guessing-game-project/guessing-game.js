//Imported Libraries

const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

//Global Scope
let secretNumber = 1;

//Functions Below

const checkGuess = (guessNum) => {
    if (secretNumber < guessNum) {
        console.log('Too high');
        return false;
    }
    else if (secretNumber > guessNum) {
        console.log('To low');
        return false;
    }
    else {
        console.log('Correct!');
        return true;
    }
};


function askGuess() {
    rl.question('Enter a guess: ', (guessAnswer) => {

        let guessNumVal = Number(guessAnswer);
        if(typeof guessNumVal === 'number' && !isNaN(guessNumVal)){

            if(!checkGuess(guessNumVal)){
                askGuess();
            }
            else{
                console.log('You win!');
                rl.close();
            }
        }
        else{
            console.log('Enter a valid number');
            askGuess();
        }
    });
};
askGuess();
