# set Radix

Set the radix for a digit display.

```sig
sevenseg.createDigit().setRadix(SegmentScall.Half)
```

The digit radix sets the number base for display. The default is `decimal` which is Base-10 and can represent numbers `0` to `9`. There is a special radix called `alpha` that lets the display show some alphanumeric characters that can be repesented with seven segments, such as `P` or `Y`.

## Parameters

* **radix**: the segment display radix, or number base:
>* `decimal`: show decimal numbers - `0` to `9`.
>* `hex`: show hexadecimal, Base-16 numbers - `0` to `F`.
>* `octal`: show octal, Base-8 numbers - `0` to `7`.
>* `alpha`: show values as alphanumeric digits, such as `J`, `U`, `L`, or `Y`.

## Example

Create a seven segment digit display and set the radix to `hex`. Randonly choose a hexadecimal value to display as a digit.

```blocks
let myDigit = sevenseg.createDigit(SegmentStyle.Thick, 9)
myDigit.setDigitColor(5)
myDigit.setRadix(DigitRadix.Hex)
game.onUpdateInterval(500, function () {
    myDigit.value = randint(0, 15)
})
```
## See also

[properties](/reference/sevenseg/sevensegdigit/properties)

```package
sevenseg
```
