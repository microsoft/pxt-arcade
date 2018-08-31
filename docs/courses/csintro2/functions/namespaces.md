# Namespaces

Intro to namespaces; fairly light, transitions nicely into functions (as basically an intro to explaining scope)

Intro -> use Math.max to explain (max is a fairly common word, so transitioning to making a function called max will lkely seem reasonable)

```typescript
let a = 5;
let b = 6;
let num: number = Math.max(a, b);

game.splash(num + "")
```

easy, good, etc

```typescript
function max() {
    return "Maximilian";
}

let a = 5;
let b = 6;
let num: number = Math.max(a, b);

game.splash(max() + num)
```

These two functions have the same name - max() - oh wow how does that work, how do you make them choose different things

## Using namespaces

```typescript
namespace names {
    export function max() {
        return "Maximilian";
    }

    export function min() {
        return "Minnie";
    }

    function bob() {
        return "Robert";
    }
}

let a = 5;
let b = 6;
let num: number = Math.max(a, b);

game.splash(names.max() + num)
```

* the title (names) identifies namespace, describes what the methods in it do, shows how they belong together
* explain the export function - making the function available __outside__ this context
* ask them which functions in the names namespace __can__ be accessed outside (max and min) and which are only available inside the namespace (bob)
* ask for if they can think of a reason why that would be useful (push poll them towards helper methods for their other stuff that aren't relevant outside the namespace)
* explain why using namespaces is helpful - in this case, capable of using to functions (names.max() and Math.max(a, b)) with the same name, without having to name them in a less descriptive manner (max1, max2, etc), add a heirarchy to the program

## multiple namespaces

```typescript
namespace consoleOutput {
    export function printNum(value: number) {
        console.log(value + "");
    }

    export function printTwoNums(a: number, b: number) {
        console.log(a + " : " + b);
    }
}

namespace splashOutput {
    export function printNum(value: number) {
        game.splash(value + "");
    }

    export function printTwoNums(a: number, b: number) {
        game.splash(a + " : " + b);
    }
}

consoleOutput.printNum(0);
consoleOutput.printTwoNums(1, 2);
splashOutput.printNum(234);
splashOutput.printTwoNums(12, 123);
```

* multiple namespaces in one file
* differentiate between two different behaviors in a consistent way / with a consistent pattern
