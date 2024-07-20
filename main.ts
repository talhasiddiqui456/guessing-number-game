// src/index.ts
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

async function guessingGame() {
    const randomNumber = getRandomNumber(1, 10);
    let userGuess: number | null = null;

    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 10.");

    do {
        const answer = await askQuestion('Guess the number: ');
        userGuess = parseInt(answer, 10);

        if (isNaN(userGuess)) {
            console.log('Please enter a valid number.');
        } else if (userGuess !== randomNumber) {
            console.log('Incorrect, try again!');
        }
    } while (userGuess !== randomNumber);

    console.log('Congratulations! You guessed the correct number.');
    rl.close();
}

guessingGame();
