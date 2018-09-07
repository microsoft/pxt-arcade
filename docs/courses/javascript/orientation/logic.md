# logic operators

table of blocks -> JavaScript equivalent

|     |     |
| --- | --- |
| a and b | a && b |
| not a | !a |

etc

### If and else statements 

```typescript
let num: number = 1;
if (num == 1) console.log("num is one!");
else console.log("num is not one!");
```

```typescript
let num: number = 1;
if (num == 1) {
    console.log("num is one!");
} else {
    console.log("num is not one!");
}
```

### Add more examples of if statements with logic expressions they have seen

```typescript
let word: string = "word";
let num: number = 1;

if (word == "word" && num > 0) {
    if (num < 2) {
        console.log("I'm here!");
    } else {
        console.log("No I'm here!");
    }
}
console.log("I'm outside!");
```

### Explain indentation -> readability, easier to identify where in the code you are