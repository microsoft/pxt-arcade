# Activity: User Input and String Logic

Logical expressions like ``||logic:if||`` and ``||logic:else||`` can be used for much more than comparing numeric values. Data type values (such as Strings) can be compared and used to change the way the programs we write behave depending on the different conditions.

Some of the earliest computer games, text-based adventure games, used only text based responses to have the player interact with the story. The game prompts the user with a question, accepts the user's answer,  and calculates what response should be provided.

In this activity, students will:

* ``||game:ask||``
* ``||game:ask for string with text||``
* Use Boolean logic with Strings

## Concept: User interaction

Allowing users to interact with your code is an important step in making an interesting and enjoyable game. Logical expressions play an important part in making your code react to that user input, even with something as simple as a "yes or no" question.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-logic-input)

## Example #1: Asking a question

1. Review the code below
2. Create the sample code and run the code
3. Identify what condition makes you win (and what that means about what ``||game:ask||`` turns into)

```blocks
if (game.ask("Do you want to win?")) {
    game.splash("You win!")
}
```

In this simple game, the only options are to press ``||controller:A||`` to win, or ``||controller:B||`` to do nothing. This illustrates two important concepts:

>* **Built in** methods can return boolean values, allowing us to easily create logical tests in our code.
>* Tests can be based off user input - in this case, which button the user pressed.

## Student Task #1: Option for failure!

1. Start with the code from example #1
2. Add an ``||logic:else||`` branch - use ``||game:splash||`` to say "Bye"
3. Add an ``||logic:else if||`` statement which provides an "option for failure." Use a ``||game:ask||`` that asks "Do you want to lose?"
4. Make sure the player only gets the "You lost!" message if they respond "OK" to the prompt from step 3

## Concept: Text input

Beyond asking questions with a binary response (for example, "yes or no" or "true or false"), we can request input from users and keep track of that information to enhance the player's experience. We could ask for a user name and display the name in later in the game, such as in a leader board or a welcome message as in example #2.

## Example #2: Taking in a user name

1. Review the code below
2. Create the sample code and run the code
3. Identify how the users input affects the game

```blocks
let name = game.askForString("What is your name?")
game.splash("Hello " + name + "!")
```

Prompts for names, like above, allows games to be more personal. The prompts can also enable users to make choices during game play, or make guesses from clues to solve a puzzle, or to use a password.

## Student Task #2: Making a (secret?) password

1. Start with the code from example #2.
2. Create a new variable (`password`)
3. Set `password` to ``||game:ask for string||`` with the prompt text "What is your password?" 
4. Create an ``||logic:if else||`` block
5. Use the ``||logic:=||`` block to compare the 'password' from user input with the string "Arcade"
6. If those two are the same, ``||game:splash||`` "login successful"
7. Otherwise, ``||game:splash||`` "login failed"
8. **Challenge:** use the ``||logic:or||`` block to also compare your stored password with "\*\*\*\*\*\*\*" and accept the password if the user's input is equal to **either** "\*\*\*\*\*\*\*" **or** "Arcade"

## What did we learn?

1. In task #2, you implemented a basic "password checker." What is one possible downside of the way that the code was implemented?
2. List at least **2** ways in which user input could be used in writing a text based game.

### [Teacher Material](/courses/csintro2/about/teachers)
