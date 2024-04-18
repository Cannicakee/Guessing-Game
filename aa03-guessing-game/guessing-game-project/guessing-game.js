
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const randomInRange = (minNum, maxNum) => {
    const minCeiled = Math.ceil(minNum);
    const maxFloored = Math.floor(maxNum);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};
function askLimit() {
    rl.question('Enter Turn Limit: ', (answer) => {
        console.log(`*${answer}*`)
        let numAttempts = answer;
        function askRange() {
            rl.question('Enter Min: ', (minAnswer) => {
                console.log(`*${minAnswer}*`)
                rl.question('Enter Max: ', (maxAnswer) => {
                    console.log(`*${maxAnswer}*`)
                    const secretnumber = randomInRange(Number(minAnswer), Number(maxAnswer))
                    askGuess(secretnumber)
                    function checkGuess(num) {
                        if (secretnumber < num) {
                            console.log("Too high.");
                            return false;
                        }
                        if (secretnumber > num) {
                            console.log("Too low.");
                            return false;
                        }
                        if (secretnumber === num) {
                            console.log("Correct!");
                            return true;
                        }
                    }
                    function askGuess() {
                        rl.question('Enter a guess: ', (answer) => {
                            if (checkGuess(Number(answer))) {
                                console.log('You Win')
                                rl.close();
                            } else {
                                numAttempts--;
                                if (numAttempts === 0) {
                                    console.log("You lose")
                                    rl.close();
                                }
                                askGuess()
                            }
                        });
                    }
                });
            });
        }
        askRange()
    })
}
askLimit()