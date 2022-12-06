# set Digit Color

Set the color of the segments for a digit display.

```sig
sevenseg.createDigit().setDigitColor(0)
```

The color of for the segments of the digit is chosen from one of the colors in the current palette.

## Parameters

* **color**: a color [number](/types/number) from the current palette to set for the segments in the digit display.

## Example

Create two seven segment digits and set different colors for each.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
let myDigit2 = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.x += myDigit.width * -2 / 3
myDigit2.x += myDigit2.width * 2 / 3
myDigit.setDigitColor(5)
myDigit2.setDigitColor(7)
```
## See also

[properties](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
