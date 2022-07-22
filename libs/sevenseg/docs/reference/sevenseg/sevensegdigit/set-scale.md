# set Scale

Set the scale for a digit display.

```sig
sevenseg.createDigit().setScale(SegmentScall.Half)
```

The seven segment digit has two display sizes, `full` and `half`. The digit size is set to `full` when it is created.

## Parameters

* **scale**: the segment display scale, `full` or `half`.

## Example

Create a seven segment digit display and set it to `half` scale.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.setDigitColor(5)
myDigit.setScale(SegmentScale.Half)
```

## See also

[properties](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
