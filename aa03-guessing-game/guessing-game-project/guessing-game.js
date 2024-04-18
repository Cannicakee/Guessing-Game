
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
// const { rejects } = require('node:assert');
// const { resolve } = require('node:path');
// const { resolveCaa } = require('node:dns');

const rl = readline.createInterface({ input, output });
//ASKRANGE QUESTIONS START


function askRange() {
    rl.question('Enter Min: ', (minAnswer) => {
        rl.question('Enter Max: ', (maxAnswer) => {
            rl.close();
        });
    });
    const randomInRange = (minNum, maxNum) => {
        const minCeiled = Math.ceil(minNum);
        const maxFloored = Math.floor(maxNum);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    };

    let secretnumber = randomInRange();

    const checkGuess = num => {
        if (secretnumber < num) {
            console.log("Too high.")
            return false;
        }
        if (secretnumber > num) {
            console.log("Too low.")
            return false;
        }
        if (secretnumber === num) {
            console.log("Correct!")
            return true;
        }
    }

    //ASKRANGE QUESTIONS END


    //ASKGUESS FUNCTION START
    function askGuess() {
        rl.question('Enter a guess: ', (answer) => {
            if (checkGuess(Number(answer))) {
                console.log('You Win')
                rl.close();
            } else {
                askGuess()
            }
        });
    }
    askGuess()
}
askRange()
