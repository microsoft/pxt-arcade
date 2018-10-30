# Activity: Assignment Operators

**Assignment Operators** are assignments that also perform an operator on the variable. They are used in JavaScript to modify the value.

## Concept: ``||variables:change by||``

The ``||variables:change by||`` block was very commonly used to modify the value a variable was assigned to when programming in Blocks.

This can be accomplished in JavaScript by using the variable itself in the equation:

```typescript-ignore
num = num + 5;
```

This works because the equation on the right side of the assignment operator is evaluated first, and the result of that equation is assigned to the variable on the right side.

For example, if ``num`` stored ``4`` before the code above, the right hand side of the equation would first be evaluated to ``9``, and then num would be reassigned ``9`` as it's new value.

Modifying a value in this way is a very common task, so JavaScript and other languages introduce the ``+=`` operator, which will **add** the value on the right side to the value currently stored on the left side.

Using the ``+=`` operator, the example code above can also be written as

```typescript-ignore
num += 5;
```

This process of condensing the expression extends to all operators, so

* ``num -= 5;`` is equivalent to ``num = num - 5;``
* ``num *= 5;`` is equivalent to ``num = num * 5;``
* ``num /= 5;`` is equivalent to ``num = num / 5;``

These are called **Assignment Operators**, like ``=``.

### ~hint

### Increment and Decrement

In JavaScript, it is very common to add or subtract one from a value: for example, to count the number of times a button was pressed, or the index in a loop.

In JavaScript, there are two **Assignment Operators** that can do this.

``num = num + 1;`` and ``num += 1;``

However, because this is such a common task, there is another (shorter) way to write it. This is done using the **Increment Operator**, represented by two plus signs: in this case, ``num++;``.

All three of the lines above will result in ``num`` being 1 greater than whatever value it was prior.

Similarly, the **Decrement Operator** is represented by two minus signs: in this case,

``num = num - 1;`` is equal to both ``num -= 1;`` and ``num--;``;

### ~

## Example #1: Seconds in a Day

1. Review the code below
2. Observe how it uses assignment operators to modify the ``||variables:seconds||`` variable

```typescript
let seconds: number = 60; 
seconds *= 60; 
seconds *= 24; 
game.splash(seconds + " seconds"); 
```

## Student Task #1: Seconds in a Week

1. Copy the code from the example above
2. Add a line that modifies the ``||variables:seconds||`` variable so that it is equal to the number of seconds in a week

## Concept: Appending Strings

The **Assignment Operator** ``||math:+=||`` can also be useful when adding to strings.

Values can be **appended** using the ``||math:+=||`` operator. For example, 

```typescript
let phrase: string = "hello";
phrase = phrase + " world";
```

can also be written

```typescript
let phrase: string = "hello";
phrase += " world";
```

## Example #2: Food Order

1. Review the code written below
2. Observe how it uses the ``||math:+=||`` operator to build up an ``||variables:order||`` string

```typescript
let order: string = "I would like to eat "
let food: string = game.askForString("What would you like to eat?")
order += food
order += ". I would also like to drink "
let drink: string = game.askForString("What would you like to drink?")
order +=  drink
order +=  "."
game.splash(order);
```

## Student Task #2: Dessert

1. Copy the code from the example above
2. Modify the code so that it also prompts the user "What dessert would you like"
3. Append to ``||variables:order||`` the sentence " For Dessert, I would like " followed by what the user specified.
4. Append a "." to the end of the order for grammatical correctness.