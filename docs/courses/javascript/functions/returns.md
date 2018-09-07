## Parameters

functions are cool but hard to keep things scoped properly, make them extensible, make them keep track of similar values without keeping a bunch of non local variables

to fix, use parameters and return values! (finally..)

## Return Values

Note that these have been (should have been?) used a bit and described at a high level with Math expressions and sprites at this point (sprites.create()), so this can have quick description of what return values are and then focus on **how** things are returned

```typescript
function gimme5(): number {
    return 5;
}

let num: number = gimme5();
```

explain return keyword, and the `: number` after the parens to define the value

returns 5 each time it's called

```typescript
function add(): number {
    return first + second;
}

let first: number = 1;
let second: number = 2;
game.splash("first + second is " + add());
first = 5;
second = 10;
game.splash("first + second is " + add());
```

sure would be nice to be able to not have to redefine the values so much like that.

(add a few more examples - return a string, return a new sprite, etc)