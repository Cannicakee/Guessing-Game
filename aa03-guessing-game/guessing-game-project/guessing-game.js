//IMPORTING MODULES START
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
// const { rejects } = require('node:assert');
// const { resolve } = require('node:path');
// const { resolveCaa } = require('node:dns');

const rl = readline.createInterface({ input, output });

//IMPORTING MODULES END

//GLOBAL SCOPE START
let secretnumber = Infinity;
const randomInRange = (minNum, maxNum) => {
    const minCeiled = Math.ceil(minNum);
    const maxFloored = Math.floor(maxNum);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};



//GLOBAL SCOPE END
function askRange() {
    rl.question('Enter a min number: ', (minAnswer) => {
        rl.question('Enter a max number: ', (maxAnswer) => {
            // secretnumber = randomInRange(minAnswer, maxAnswer);
            secretnumber = randomInRange(minAnswer, maxAnswer);
            console.log(`I'm thinking of a number between ${minAnswer} and ${maxAnswer}...`);
            rl.close();
        });
    });
}
askRange();


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

//ASKGUESS FUNCTION END

// const randomInRange = (minNum, maxNum) => {
//     const minCeiled = Math.ceil(minNum);
//     const maxFloored = Math.floor(maxNum);
//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
// };


//ASKRANGE QUESTIONS START


// function askRange() {
//     rl.question('Enter a min number: ', (minAnswer) => {
//         rl.question('Enter a max number: ', (maxAnswer) => {
//             rl.close();
//             secretnumber = randomInRange(minAnswer, maxAnswer);
//         });
//     });

// }
// askRange()
