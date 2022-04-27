# create Digit

Create a seven segment digit and display it on the screen.

```sig
sevenseg.createDigit(SegmentStyle.Thick, 0)
```

A seven segment digit will display a numeric character, or some alphabetical characters, using segments to represent the character. This allows programs to simulate electronic digit displays for games.

The segment display is created with the to choose the pixel width, or thickness, of the segments. Also, the segment display can have two sizes, full or half scale. The default is `full`.

## Parameters

* **thickness**: the thickness of the segments in the digit display:
>* `thick`: thick pixel width
>* `medium`: medium pixel width
>* `narrow`: narrow pixel width
>* `thin`: thin pixel width
>* `blank`: segments are hidden
* **value**: the initial digit value to display.

## Example

Create a seven segment digit8 and set the digit color to green. Every half second, set the digit value to a random number between `0` and `9`.

```blocks
let myDigit = sevenseg.createDigit()
myDigit.setDigitColor(7)
game.onUpdateInterval(500, function () {
    myDigit.value = randint(0, 9)
})
```
## See also

[set scale](/reference/sevenseg/sevensegdigit/set-scale)

```package
sevenseg
```