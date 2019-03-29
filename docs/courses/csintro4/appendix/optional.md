# Advanced Topics: Optional and Default Parameters

In the [Function Parameters lesson](/courses/csintro3/functions/parameters),
each function specified exactly the parameters it required.

However, there can be some cases in which a function call may need only
a few parameters, but have other options that the developer wants to remain accessible.
This behavior can be achieved with **Optional** and **Default** parameters.

## Concept: Optional Parameters

Optional Parameters are parameters that can be specified, but are not required.
This allows for functions that are more customizable,
without requiring parameters that many users will not need.

``||game:game.splash||`` is a good example of this.
In addition to the main message,
it allows for an additional parameter for the subtitle of the screen.

This lets the function to be called with only a single parameter,
while also allowing for the case where the user wishes to add the subtitle.

## Example #1: Sub Splash

1. Review the code below
2. Run the code, and identify how the optional parameter changes the behavior of the function

```typescript
game.splash("Hello");
game.splash("Hello", "World");
```

## Student Task #1: Stop Talking

``||sprites:Sprite.say||`` accepts an optional second parameter:
a ``||math:number||``, that corresponds to the number of seconds
to display the message for.

1. Create a new project, starting with the code below
2. Define the optional parameter for the time the message will be displayed to be 1 ms,
so that it goes away (almost) immediately

```typescript
let mySprite: Sprite = sprites.create(img`1`);
mySprite.say("I'm still talking!");
```

## Concept: Functions with Optional Parameters

To specify an optional parameter in a function, a question mark ``?``
is added before the type is specified.

```typescript-ignore
function name(parameter: parameterType, optionalParameter?: optionalParameterType) {
    // function contents
}
name(value);
name(value, optionalValue);
```

Additionally, optional parameters are required to be enumerated **after**
any required parameters.
This is because the values are listed in the specified order when calling the function,
and if an optional parameter were followed by a required one,
then you would always have to specify the optional parameter
to get to the required one in the first place.

However, this leads to a new problem.
If the value is not defined,
then it shouldn't be used within the method.

To check if an optional parameter has been defined,
the variable can be used as a condition for a conditional statement.

```typescript-ignore
function name(parameter: parameterType, optionalParameter?: optionalParameterType) {
    if (optionalParameter) {
        // optionalParameter is defined
    } else {
        // optionalParameter is not defined
    }
}
```

## Example #2: First and Last Name

1. Review the code below
2. Identify what happens when ``||variables:lastName||`` **is** defined
3. Identify what happens when ``||variables:lastName||`` **is not** defined

```typescript
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
console.log(buildName("John"));
console.log(buildName("John", "Doe"));
```

## Student Task #2: Tell the World

1. Start a new project, and create a function ``||functions:tellTheWorld||``
2. Add a **required** parameter named ``||variables:message||`` of type ``||text:string||``
3. Add an **optional** parameter ``||variables:mySprite||`` of type ``||sprites:Sprite||``
4. If ``||variables:mySprite||`` is **not** specified,
make the function ``||game:splash||`` ``||variables:message||`` to the screen
5. If ``||variables:mySprite||`` is specified,
make the function instead have the ``||variables:mySprite||`` ``||sprites:say||`` the message.

## Example #3: Name and Age

It is also possible to include multiple optional parameters in a function.

1. Review the code below
2. Identify which parameters are **required**, and which are **optional**
3. Identify what happens when each optional parameter is passed, and when it is not

```typescript
function buildName(firstName: string, lastName?: string, age?: number) {
    if (age) {
        return firstName + " " + lastName + " is " + age + " year(s) old";
    } else if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
console.log(buildName("John"));
console.log(buildName("John", "Doe"));
console.log(buildName("John", "Doe", 100));
```

### ~hint

For an optional parameter to be used,
all parameters to the left of it **must** to be specified.
In this case,
for ``||variables:age||`` to be specified,
``||variables:lastName||`` must also be specified.

### ~

## Student Task #3: Stop Telling the World

1. Start with the code from task #2
2. Add another optional parameter, ``||variables:time||``,
of type ``||math:number||``
3. If ``||variables:time||`` is specified,
it should be passed as a parameter to ``||sprites:say||``
to limit how long the message is displayed

## Concept: Default Parameters

Another approach to using optional parameters is to if the value has **not** been defined,
and give it a default value to work with in that case.

```typescript
function splashThis(message?: string) {
    if (!message) {
        message = "I can't splash __nothing__";
    }
    game.splash(message);
    
}

splashThis("Hello!");
splashThis();
```

This will often allow for code that is much less redundant than repeating
\the entire function's code for each different case.

### ~hint

There is also a format for specifying a default value within the function header.
Instead of using a question mark ``?``,
the value can be assigned in the header.

```typescript-ignore
function splashThis(message: string = "I can't splash __nothing__") {
    game.splash(message);
}

splashThis("Hello!");
splashThis();
```

This is not currently fully supported in MakeCode @boardname@.

### ~

## Example #4: Repeat It

1. Review the code below
2. Identify which parameters are **required**, and which are **optional**
3. Identify how the case in which ``||variables:times||`` is **not** defined is handled

```typescript
function repeatIt(message: string, times?: number) {
    if (!times) {
        times = 3;
    }
	for (let i = 0; i < times; i++) {
		console.log(message);
	}
}

repeatIt("Hello World!");
repeatIt("How are you?", 5);
```

## What did we learn?

1. What is an optional parameter? What are some functions in the arcade that use them?
2. What is the proper syntax for using an optional parameter?