# set Digit Color

Set the color of the segments for a digit counter display.

```sig
sevenseg.createCounter().setDigitColor(0)
```

The color of for the digits of the digit coutner is chosen from one of the colors in the current palette.

## Parameters

* **color**: a color [number](/types/number) from the current palette to set for the segments in the digit counter display.

## Example

Create 2-digit counter an change the digit color.

```blocks
let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 3)
myCounter.setDigitColor(5)
game.onUpdateInterval(1000, function () {
    myCounter.count += 1
})
```
## See also

[properties](/reference/sevenseg/digitcounter/properties)

```package
sevenseg
```
