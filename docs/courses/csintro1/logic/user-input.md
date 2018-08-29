# Activity: User Input and String Logic

Logical expressions like ``||logic:if||`` and ``||logic:else||`` can be used beyond comparing numeric values. Various data type values (such as Strings) can be compared and used to change the way the programs we write behave depending on the different conditions.

One major example of this can be found in some of the earliest computer games - text-based adventure games. These rely heavily on crafting a story, and having the player interact with this story by prompting them with questions and identifying what the user gives back as a response.

In this activity, students will:
* ``||game:ask||``
* ``||game:ask for string with text||``
* Use Boolean logic with Strings

## Concept: User interaction

Allowing users to interact with your code is an important step in making an interesting and enjoyable game. Logical expressions play an important part in making your code react to that user input, even with something as simple as a "yes or no" question.

## Coming Soon: VIDEO

## Example #1: Asking a question

1. Review the code below
2. Create the sample code and run the code
3. Identify what condition makes you win (and what that means about what ``||game:ask||`` turns into)

```blocks
if (game.ask("Do you want to win?")) {
    game.splash("You win!")
}
```

This is a fairly simple game - you press ``||controller:A||`` to win, or ``||controller:B||`` to do nothing. However, it does illustrate two important concepts: one, that there are **built in** methods that return Boolean values, which allows for the easy implementation of logical tests in the code we write, and two, that those tests can be based off user input - in this case, which button the user pressed.

## Student Task #1: Option for failure!

1. Start with the code from example #1
2. Add an ``||logic:else||`` branch so that there is a possibility for failure - use ``||game:splash||`` to say "You lost!"
3. Inside the ``||logic:else||`` branch, add an ``||logic:if||`` statement with a ``||game:ask||`` that asks "So do you want to lose?"
4. Make sure the player only gets the "You lost!" message if they respond "OK" to the prompt from part 3

## Concept: Text input

Beyond just asking questions with a binary response (one with two possibilities - for example, "yes or no" and "true or false"), we can request further input from users and keep track of that to enhance the player's experience - even something as simple as asking for their name and using in future interactions.

## Example #2: Taking in a user name

1. Review the code below
2. Create the sample code and run the code
3. Identify how the users input affects the game

```blocks
let input = game.askForString("What is your name?")
game.splash("Hello " + input + "!")
```

This will prompt the user for their name, and then use it in the future. This allows for the game to be a bit more personal; it is the player's story, not some random character named "Jim" or "Mink." Personalization is not the only thing that user input can be used for, though; it can also be used to craft puzzles that force them to search for clues to how they must respond to a given question.

## Student Task #2: Making a (secret?) password

1. Start with the code from example #2.
2. Create a new variable, and ``||game:ask for string||`` with the prompt "What is your password?" to find a word to store in that new variable
3. Create an ``||logic:if else||`` block
4. Use the ``||logic:=||`` block to compare the 'password' the user inputted with the string "Hunter2"
5. If those two are the same, ``||game:splash||`` "login successful"
6. Otherwise, ``||game:splash||`` "login failed"
7. **Challenge:** Use the ``||logic:or||`` block to also compare your stored password with "\*\*\*\*\*\*\*" and accept the password if the user's input is equal to **either** "\*\*\*\*\*\*\*" **or** "Hunter2"

## What did we learn?

1. In task #2, you implemented a basic "password checker." What is one possible downside of the way that the code was implemented?
2. List at least **2** ways in which user input could be used in writing a text based game.