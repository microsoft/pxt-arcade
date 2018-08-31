# Math

table with math blocks -> equivalent

| blocks | typescript |
| -- | -- |
| x  |  * |
| +  |  + | 
| %  |  / | 

etc

### Complex Expressions

```typescript
let num: number = 5 + 3 * 2;
console.log("" + num);
```

```typescript
let num: number = 15 / 3 * 8;
console.log("" + num);
```

## Assignment Operators

### Show increment / change by transition (blocks -> ts)

```typescript
let num: number = 0;
num = num + 5;
num = num + 3;
```

```typescript
let num: number = 0;
num += 5;
num += 3;
```

### Special case: add or subtract 1 (increment / decrement operators)

```typescript
let num: number = 0;
num += 1;
num += 1;
num += -1;
num += 1;
```

```typescript
let num: number = 0;
num++;
num++;
num--;
num++;
```

Explain why -> very commonly used, easier to write as a short hand, etc

## Other assignment operators (quick over view as less commonly used at first)

### minus equals

```typescript
let num: number = 15;
num = num - 5;
```

```typescript
let num: number = 15;
num -= 5;
```

### times equals

```typescript
let num: number = 15;
num = num * 5;
```

```typescript
let num: number = 15;
num *= 5;
```

### divided by equals

```typescript
let num: number = 15;
num = num / 5;
```

```typescript
let num: number = 15;
num /= 5;
```

## Math Functions / calling functions intro

Show sample code calling Math.round, Math.randomRange, Math.max, etc