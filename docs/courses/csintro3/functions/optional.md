## Optional Parameters

(fairly important to show a bit more early in this context than normal, as SO MANY of the functions that they'll see the autocomplete require a rudimentary knowledge of it (e.g. sprites.create))

don't go too in depth because these are unlikely to be prominently used in their code, this is more of an awareness section so they can actually read the code api when it pops up in autocomplete

can note that default values are a thing as well, but they are not well supported in makecode (only numbers, booleans, and null are allowed)

## Using Optional parameters first

case: game.splash (explain a bit)

```sig
game.splash("", "")
```

The second parameter is not required to use the function, but it allows for more precise behavior - in this case, adding in the second parameter allows you to add in a subtitle to the splash screen. 

```typescript
game.splash("hello!");
```

This is done by specifying that the parameter is optional, by adding in a question mark (`?`) before the type

```typescript
function add(a: number, b: number, prefix?: string): string {
    return prefix + (a + b);
}

console.log(add(1, 2));
console.log(add(1, 2, "The answer is "));
```

* explain undefined type (means that it was never defined, should be fairly intuitive / high level description) -> this is why output is wrong
* note that numbers as optional parameters become 0, not undefined
* note that optional parameters must be the last ones listed

fixed version

```typescript
function add(a: number, b: number, prefix?: string): string {
    if (prefix == undefined) {
        prefix = "";
    }
    return prefix + (a + b);
}

console.log(add(1, 2));
console.log(add(1, 2, "The answer is "));
```

add one more example with them writing their own code -> maybe modify add to accept an optional third number as a parameter?