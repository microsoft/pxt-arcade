# logic operators

table of blocks -> ts equivalent
|     |     |
| --- | --- |
| a ``||logic:and||`` b | a && b |
| ``||logic:not||`` a | !a |

etc 

### If and else statements 

```blocks
let num: number = 1;
if (num == 1) {
    console.log("num is one!");
} else {
    console.log("num is not one!");
}
```

### Add more examples of if statements with logic expressions they have seen

```blocks
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