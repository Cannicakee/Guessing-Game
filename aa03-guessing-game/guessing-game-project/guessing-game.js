
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

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
askGuess()

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
