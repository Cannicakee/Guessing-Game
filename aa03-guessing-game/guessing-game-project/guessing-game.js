
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Enter a guess: ', (answer) => {
  console.log(`${answer}`);

  rl.close();
});

let secretnumber = 3;
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

// checkGuess(answer);
