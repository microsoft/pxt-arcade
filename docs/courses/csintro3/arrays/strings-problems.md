# Problem Set: String Array Manipulation

This section contains a number of selected problems for the String Array Manipulation section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: A Bit Pushy

``||arrays:Push||`` and ``||arrays:pop||`` can be used to modify arrays,
so that they store the values you want. 

In the snippet below, ``||functions:printArray||`` is used to print out each
value in an array. Run the code, and notice the format of the output to the console.

Use ``||arrays:push||`` and ``||arrays:pop||`` to modify ``||variables:input||``,
so that the call to ``||functions:printArray||`` will output the following:

``I like to program in MakeCode Arcade``

```typescript
/**
 * Prints all the words in the given array, separated by spaces, to the console
 * @param words an array of words to print
 */
function printArray(words: string[]) {
    let output: string = "";
    for (let i = 0; i < words.length; i++) {
        output += words[i] + " ";
    }
    console.log(output);
}
let input: string[] = ["I", "like", "to", "cook", "dinner"];

// Add your code here

printArray(input);
```

### ~hint

Extra spaces are trimmed when printing to the console in @boardname@,
so you don't have to worry about the extra spacing that comes at the
end from ``||functions:printArray||``.

### ~

## Problem #2: While You Don't Say That

You have somehow grown a distaste for the word "that".

Write a small game that will continue to ``||game:ask||`` the user for
a string until the user has inputted the word "that".
When that happens, ``||game:splash||`` "I don't like that!" and end the game.

## Problem #3: Pretty Printing

Fill in ``||functions:printArray||`` below as described in the function comment.
Make sure that the output for the three tests match the expected output listed
in the comment on each line.

```typescript
/**
 * Prints all the words in the given array, separated by the given separator, to the console
 * @param words an array of words to print
 * @param seperator the separator placed in between the different elements of the array
 */
function printArray(words: string[], separator: string) {
    // Add your code here
}

// Tests!
printArray(["Simple", "Test"], " ");        // Should output `Simple Test`
printArray(["Hi", "I", "am", "me"], "!");   // Should output `Hi!I!am!me`
printArray(["Test", "Code", "Here"], "<>"); // Should output `Test<>Code<>Here`
```

### ~hint

You may want to review problem #1 before attempting this problem,
as the function in it has a similar behavior.

### ~

## Problem #4: Chatty Bot

Create a simple "Chatbot", that will ``||game:ask||`` the player for a
string with the prompt being a **random string** from an ``||arrays:Array||``
you make. Be sure to fill up the ``||arrays:Array||`` with a number of prompts,
to make the bot interesting!

During the conversation, maintain a "log" in the console,
and identify whether the bot or user entered that.
For example, this might look like the following transcript:

```
bot: what is your favorite color?
user: red
bot: how are you?
user: good
bot: what is your favorite color?
```

### ~hint

There is no ending condition for the loop in this task - it is meant to go on forever.
In this case, you can use a ``||loops:while loop||``,
with the condition that it continues on just set to ``||logic:true||``. 

### ~
