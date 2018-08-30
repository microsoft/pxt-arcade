## what do with for index loops

### How many times does this run, what is the max value of i, etc

```ts
for (let i = 0; i < 5; i++) {
    console.log("hello!");
}
```

### Sum up values 1 -> n

```ts
let n: number = 10;
let out = 0;
for (let i = 1; i <= n; i++) {
    out = out + i;
}
console.log("" + out);
```


### Sum up values 1 -> n using plus equals

```ts
let n: number = 10;
let out = 0;
for (let i = 1; i <= n; i++) {
    out += i;
}
console.log("" + out);
```

### What numbers show up on the string, etc

```ts
let out: string = "hello";
for (let i = 0; i < 5; i++) {
    out = out + i + " ";
}
console.log(out);
```

### Appending to a string

```ts
let out: string = "hello";
for (let i = 0; i < 5; i++) {
    out += i + " ";
}
console.log(out);
```

