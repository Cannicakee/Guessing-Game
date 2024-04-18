import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();

// let secretnumber = 3;
// const checkGuess = num => {
//     if (secretnumber < num) {
//         console.log("Too high.")
//         return false;
//     }
//     if (secretnumber > num) {
//         console.log("Too low.")
//         return false;
//     }
//     if (secretnumber === num) {
//         console.log("Correct!")
//         return true;
//     }
// }