# create Counter

Create a counter display with one or more seven segment digits.

```sig
sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
```

## Parameters

* **thickness**: the thickness of the segments in the counter display:
>* `thick`: thick pixel width
>* `medium`: medium pixel width
>* `narrow`: narrow pixel width
>* `thin`: thin pixel width
>* `blank`: segments are hidden
* **scale**: the scale for the digit size, `full` or `half`.
* **numDigits**: The number of digit in the counter display, maximum is `5`.

## Example

Create a counter with `5` digits and add one to the current count value every `100` milliseconds.

```blocks
let myCounter: DigitCounter = null
myCounter = sevenseg.createCounter(SegmentStyle.Narrow, SegmentScale.Full, 5)
myCounter.count = 54321
game.onUpdateInterval(100, function () {
    myCounter.count += 1
})
```

```package
sevenseg
```
