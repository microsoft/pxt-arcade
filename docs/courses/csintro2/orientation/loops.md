## what do with for index loops

### How many times does this run, what is the max value of i, etc

```typescript
let i = 0;

while (i < 5) {
    console.log("hello!");
    i++;
}
```

```typescript
for (initialization; check; update) {
    // BODY OF CODE
}
```
```typescript
for (let i = 0; i < 5; i++) {
    console.log("hello!");
}
```

### Sum up values 1 -> n

```typescript
let n: number = 10;
let out = 0;
for (let i = 1; i <= n; i++) {
    out = out + i;
}
console.log("" + out);
```


### Sum up values 1 -> n using plus equals

```typescript
let n: number = 10;
let out = 0;
for (let i = 1; i <= n; i++) {
    out += i;
}
console.log("" + out);
```

### What numbers show up on the string, etc

```typescript
let out: string = "hello";
for (let i = 0; i < 5; i++) {
    out = out + i + " ";
}
console.log(out);
```

### Appending to a string

```typescript
let out: string = "hello";
for (let i = 0; i < 5; i++) {
    out += i + " ";
}
console.log(out);
```

