# Properties

Properties of a seven segment digit display.

## x (property)

Get or set the horizontal center position of a digit on the screen.

### Get

Get the horizontal center position of the digit.

```block
let myDigit: SevenSegDigit = null

let horz = myDigit.x
```

#### Returns

* a [number](/types/number) that is the current horizontal center position of digit on the screen.

### Set

Set the horizontal center position of the digit.

```block
let myDigit: SevenSegDigit = null

myDigit.x = 0
```

## y (property)

Get or set the vertical center position of a digit on the screen.

### Get

Get the veritcal center position of the digit.

```block
let myDigit: SevenSegDigit = null

let vert = myDigit.y
```

#### Returns

* a [number](/types/number) that is the current vertical center position of a digit on the screen.

### Set

Set the veritcal center position of the digit.

```block
let myDigit: SevenSegDigit = null

myDigit.y = 0
```

## width (property)

Get the width of the digit display in pixels.

### Get

Get the pixel width of the digit.

```block
let myDigit: SevenSegDigit = null

let xPixels = myDigit.width
```

```typescript-ignore
let xPixels = myDigit.width
```

#### Returns

* a [number](/types/number) that is the current width of the digit in pixels.

## height (property)

Get the height of the digit display in pixels.

### Get

Get the pixel height of the digit.

```block
let myDigit: SevenSegDigit = null

let xPixels = myDigit.height
```

```typescript-ignore
let xPixels = myDigit.height
```

#### Returns

* a [number](/types/number) that is the current height of the digit in pixels.

## value (property)

Get the or set the value of the digit display.

### Get

Get the value of the digit.

```block
let myDigit: SevenSegDigit = null

let value = myDigit.value
```

```typescript-ignore
let value = myDigit.value
```

#### Returns

* a [number](/types/number) that is the current value of the digit.

### Set

Set the value of the digit.

```block
let myDigit: SevenSegDigit = null

myDigit.value = 0
```

```package
sevenseg
```
