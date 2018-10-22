# Activity: Optional and Default Parameters

There can be some cases in which a function call may need to be more specific or contain more parameters than other cases. This ability can be achieved with **Optional Parameters** and **Default Parameters**.

## Concept: Optional Parameters

Optional Parameters, as its name would suggest, are parameters in a function that are not required, but can be specified if needed. 

A good example of this functionality is ``||game:game.splash||``. 

``||game:game.splash||`` has a optional parameter for the subtitle of the screen. 

* ``game.splash("Hello");``
* ``game.splash("Hello", "World");``

This function allows for using either 2 string variables or just 1.

The syntax for these parameters is to place a question mark, `?`, between the name of the parameter and the colon that specifies type. They also must be placed to the right of all required parameters. Like as follows:
```typescript-ignore
function someFunction(requiredParam: someType, optionalParam?: someType) {

}
```

When using a optional parameter inside of the function, the parameter must be checked that it was specified before using it. Otherwise, the program will try to use a variable that doesn't exist. 

To check that a parameter was specified and that the variable exists, simply use an if statement where the variable is the condition. Like so:

```typescript-ignore
function someFunction(requiredParam: someType, optionalParam?: someType) {
	if (optionalParam) {
		console.log("The optional parameter was specified");
	}
}
```

## Example #1: First and Last Name

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

## Student Task #1: Tell the World

Write a function called `tellTheWorld` that takes in a string named `message` and has an optional parameter of a ``||sprites:sprite||`` named `sprite`. If no sprite is specified, then the function should ``||game:splash||`` `message` to the screen. If a sprite is specified, the function should instead have the sprite ``||sprites:say||`` the message.



## Example #2: Name and Age

It is also possible to include multiple optional parameters in a function like as follows:

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

This function can now take in 1, 2, or 3 parameters.

### ~hint

For an optional parameter to be used, all parameters to the left of it **must** to be specified!

### ~

## Student Task #2: Tell the World Again

Write a function called `tellTheWorld` that takes in a string named `message`, has an optional parameter of a ``||sprites:sprite||`` named `sprite`, and another optional parameter that is a number called `time`. If no sprite is specified, then the function should ``||game:splash||`` `message` to the screen. If a sprite is specified, the function should instead have the sprite ``||sprites:say||`` the message. If a sprite is specified and a time is specified, the sprite should ``||sprites:say||`` `message` for that number of milliseconds.

### ~hint

The ``||sprites:say||`` function actually already has an optional parameter for time on screen. 

```typescript-ignore
sprite.say("Hello World"); // Stays on screen forever
sprite.say("Hello World", 2000); // Stays on for 2000 milliseconds
```

These are both valid function calls.
### ~

## Concept: Default Parameters

Similar to optional parameters, there are also what are called default parameters. These are parameters that have a default value unless specified. They are optional in that they do not need to be specified, but they will always have some value so they do not need to be checked before using.

The syntax for these parameters is to use an assignment operator, `=`, and assign the parameter as you would a variable.

```typescript-ignore

function someFunction(requiredParam: SomeType, defaultParam: SomeType = someValue) {
	...
}

```

## Example #3: Repeat It

```typescript
function repeatIt(message: string, times:number = 3) {
	for (let i = 0; i < times; i++) {
		console.log(message);
	}
}

repeatIt("Hello World!");
repeatIt("How are you?", 5);
```

This is a function that takes in a message and logs it to the console multiple times. If a number of times is not specified, it will repeat 3 times. If the number of times is specified, it will repeat that many times.

### ~hint

A few things to know about using default parameters

1. All default parameters must come after all required parameters and before all optional parameters
2. In MakeCode, the only types that are supported for default parameters are `number` and `boolean`

### ~

## What did we learn?

1. What is is an optional parameter? What are some functions in the arcade that use them?
2. What is the proper syntax for using an optional parameter?