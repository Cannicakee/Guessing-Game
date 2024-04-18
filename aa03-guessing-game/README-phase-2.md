# Guessing Game Project

## Phase II: Making it Random

Now that we have the core gameplay down, we'll want to implement logic to allow
the `secretNumber` to be chosen at random. To do this, we'll utilize the
`Math#random` method. Take a look at the [docs][random-doc]. The method returns
a decimal number between 0 and 1 (excluding 1). For example:

```javascript
console.log(Math.random()); // 0.5719957072947224
console.log(Math.random()); // 0.08590173924968769
console.log(Math.random()); // 0.0965770175443883
```

By itself, this method won't be too useful because our game should only use
whole numbers. Luckily, the docs provide some insight into how we can design a
function that returns a random whole number that lies within a certain range.
Scroll through the docs and locate examples about "Getting a random integer
between two values." You'll use these examples to inspire your code. You may
notice that the examples provided rely on other methods like `Math.floor`.
Research those methods so that you understand how the code works. Googling
around and researching the docs is an important aspect of being a developer, so
take your time!

### randomInRange

Define a function called `randomInRange` that accepts a minimum and maximum
number as arguments. The function should return a random whole number between
the provided minimum and maximum (inclusive). Be sure to test your function,
here is an example of how it might behave:

```javascript
console.log(randomInRange(15, 20)); // 16
console.log(randomInRange(15, 20)); // 17
console.log(randomInRange(15, 20)); // 20
```

Once you have confirmed that your `randomInRange` function is returning numbers
properly, edit your initialization of `secretNumber`. Instead of setting it to a
hard-coded value, use your function's return value to set it to a random number
between 0 and 100. Play a few games! Remember that you'll have to call
`askGuess()` once in the global scope to begin the game. Next up, we'll allow
the user to choose the min and max for the game.

### askRange

Delete or comment out your global call to `askGuess` for now. Define a function
called `askRange`. This method should ask the user to enter a minimum number and
then ask them to enter a maximum number. We want to ask them for the maximum
only after they have responded to the first question. This means you will have
to use the `question` method twice! Recall what you learned from the readings.
The `question` method is asynchronous, so how can we ask two questions one after
the other? We'll leave the implementation to you. After the user enters their
min and max, you should print a message confirming the range. Here is an example
of how our `askRange` method behaves. We've put _asterisks_ around the user's
input:

```plaintext
Enter a max number: *20*
Enter a min number: *11*
I'm thinking of a number between 11 and 20...
```

As always, test your function thoroughly by adding a call to `askRange` in
global scope. Your program may hang because the interface is not closed after
the user enters their max. That's okay, since we are debugging; press `ctrl + c`
in your terminal to kill the program.

Once your function is able to properly take the min and max from your user, it's
time to put it all together! When the user enters both the min and the max, call
your `randomInRange` function with that min and max as arguments. Recall that
the user's input is automatically interpreted as strings and not numbers. You
should explicitly turn the min and max to actual numbers before passing them in.
Take the random number returned from your function and set that as the
`secretNumber`. Then call your old `askGuess` method so that gameplay can begin.
All of this should happen within the `askRange` function. We design it this way
because we only want to ask for a guess after the random number has been chosen.

The `askRange` function is the "main" function that will begin our game, so
you'll need call it once in the global scope. Run your program and play a few
games!

**Before moving onto the bonus ask a TA for a code review.**

## Bonus: Limiting the number of turns

With our main features complete, let's work on increasing the difficulty of the
game by limiting the number of guesses a user can make. If the player uses all
of their attempts without guessing the correct number, they will lose the game.

### Limiting turns to 5

Start by limiting the player to 5 attempts. You can accomplish this by
initializing a `numAttempts` variable in the global scope. Refactor your
`askGuess` method to decrement the number of remaining attempts whenever it is
called. If the `numAttempts` reaches 0 before the correct guess is made, end the
game by printing 'You Lose'. We'll leave the details of the implementation up to
you.

### Limiting turns dynamically

Make the limit dynamic by allowing the user to specify the number of attempts.
We recommend creating an `askLimit` function that behaves similarly to
`askRange`. Be sure to chain the callbacks in the right order to ensure the game
is configured properly. For example, one valid callback chain order would be
`askLimit` -> `askRange` -> `askGuess`. If you follow this order, you'll need to
call `askLimit` in the global scope to begin the game.

[random-doc]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
