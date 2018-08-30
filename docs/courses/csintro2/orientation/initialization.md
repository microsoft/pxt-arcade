### Console.log, method calling syntax

```ts
console.log("Hello World!")
```

### Simple string variables 

```ts
let word = "hello"
let other = "world"
word = word + " " + "other"
console.log(word);
```

### Adding a word and a number

```ts
let word = "hello ";
let num = 0;
console.log(word + num);
```

### ==> Explicit typing (number and string)

```ts
let word: string = "hello ";
let num: number = 0;
console.log(word + num);
```

### Task: Make a hypotheses on what this will output, and explain why

```ts
let word: string = "*";
word += "hi";
word += word;
```

### Math => question - why does a + b turn into 12 not 3, but c works

```ts
let a: number = 1;
let b: number = 2;
let c: number = a + b;
console.log("a + b = " + a + b);
console.log("a * b = " + a * b);
console.log("a / b = " + a / b);
console.log("c = " + c);
```

### Math fixed

```ts
let a: number = 1;
let b: number = 2;
let c: number = a + b;
console.log("a + b = " + (a + b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("c = " + c);
```

(ask students: why both doing adding parens to a * b and a / b if they worked before? Good practice, etc)