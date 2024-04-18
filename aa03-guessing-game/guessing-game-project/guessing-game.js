
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { rejects } = require('node:assert');
const { resolve } = require('node:path');
const { resolveCaa } = require('node:dns');

const rl = readline.createInterface({ input, output });

const randomInRange = (minNum, maxNum) => {
    const minCeiled = Math.ceil(minNum);
    const maxFloored = Math.floor(maxNum);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

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
// askGuess()
const minNumber = () => {
    return new Promise((resolve, reject) => {
        rl.question("Enter a minimum number: ", (minAnswer) => {
            console.log(Number(minAnswer))
            resolve();
        })
    })
}
const maxNumber = () => {
    return new Promise((resolve, reject) => {
        rl.question("Enter a maximum number: ", (maxAnswer) => {
            console.log(Number(maxAnswer))
            resolve();
        })
    })
}
const askRange = async () => {
    await minNumber()
    await maxNumber()
    console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}`)
    rl.close()
}
askRange();

let secretnumber = randomInRange(0, 100);

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

