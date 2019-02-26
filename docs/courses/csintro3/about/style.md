# About: Style Conventions

This course follows a strict style guide in order to make sure the example code is
consistent and easy to follow.
This is intended to help guide students without potentially distracting changes in form.

This style guide describes the conventions used in this course,
along with the reasoning on why any contentious choices were made.

### ~hint

It is important to note that these are not meant to serve as an overall style guide:
in particular, some of the choices in structure are solely made for the sake of teaching,
and are not choices that necessarily should be replicated in code outside of this course.

### ~

## Naming

1. Variables should be camelCased.
    * ``let myValue``
2. Functions should be camelCased.
    * ``function helloWorld() {``
3. Namespaces should be all lowercase, and generally a single word.
    * ``namespace game {``
4. Descriptive variable names are highly preferred, even for simple functions.
Coming up with a descriptive name for each variable gives students time to reflect on their code,
and identify what exactly they are intending to do with each variable.
    * Exception: variables with short names due to convention or accuracy (e.g.: ``i`` ``j`` and
    ``k`` for ``||loops:for||`` loops, or ``x`` and ``y``) do not need to be extended,
    as the short name is descriptive enough on it's own

## Spacing

1. Four spaces are used per indent.
2. Single Indents are used to indicate a new 'block' of code,
generally surrounded by curly braces ``{}``.
3. Double Indents are used to indicate a line that is continuing from the previous line.
    * Exception: template strings will be indented as needed.
4. Operations should be surrounded by whitespace.
    * ``7 * 6``
5. Parentheses should be surrounded by whitespace on the outside, but not inside.
    * ``if (true) {``

## Syntax

1. Semicolons are used to end each statement.
This is meant to give a strong indication of where a line of code begins
(the beginning of a line), and where it ends (at the semicolon).
2. 'Normal' Functions are strongly preferred over arrow functions.
This includes anonymous functions.
    * ``function () {}`` is used over ``() => {}``
3. Anonymous functions are preferred over named functions when being passed as parameters,
except in the case of redundancy.

## Form

1. Single line conditionals and loops are not covered and avoided.
Especially for new programmers, omitting semicolons and using the
single line form can often lead to confusing and hard to diagnose bugs.
2. Namespaces are used in a non-standard way on occasion.
Generally, namespaces should avoid having code that runs on it's own,
as this can lead to code where it's non-trivial to identify what is running, and in what order.
3. Types are used for almost every variable declaration.
This is done for consistency, and to make sure students are away of the types of variables,
and don't need to try to infer the type.
    * Exception: loop variables in a for loop are commonly left as inferred types.

### ~hint

In the case study in particular, some sections have top level code in the namespaces. 
his is done to allow for an easy way to indicate which sections of the case study students
are meant to modify, and allow for some introduction of encapsulation -
where students can ignore other segments of the code and focus on what
applies within that section of the game.

Encapsulation can be done in other, more appropriate ways: for example,
with nested functions and object oriented programming.
In the case of the case study, though, this would lead to some problems;
students would have to go back and forth between multiple sections of code for each task,
and not have a single place to look for a given feature.
Context switching can be particularly hard for beginning developers,
so this is avoided by using namespaces in an unorthodox and non-ideal fashion.

### ~

## Comments

1. Single line comments are used to indicate the behavior of potentially confusing code.
Note that what might be confusing differs from person to person,
so this is likely to be overdone in this course for non-trivial code
snippets to cover a wide variety of users.
2. Comments for functions follow the format described in the
[section on Function Comments](/courses/csintro3/functions/comments).
These are generally similar to JavaDoc and JSDoc style comments.

## Other

1. As this course does not cover object oriented programming
(beyond what is necessary to describe creating objects),
instance methods are described as functions in much of the course. 
