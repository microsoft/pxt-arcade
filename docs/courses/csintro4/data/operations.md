# Operations on Data

As stated in the previous lesson, operations can only be performed on numerical data

## Example #1: Mean Numbers

When given a set of data, it can be difficult to determine what type of analysis that needs to be performed. One of the simplest and most common operations is called calculating the **mean** (Also known as the average). This value serves as an approximation of where the data tends to be.

The process consists of two steps:

1. Adding all of the numbers together to calculate the **sum**
2. Dividing the sum by the number of numbers (more commonly known as elements) in the data set.

So if given the array of numbers ``1, 3, 2``, to calculate the mean the first step would be to calculate the sum.

This would be equal to ``1 + 3 + 2`` which is equal to ``6``.

The next step would be to divide the sum, 6, by the number of elements, 3.

So for this particular set, the mean would be ``6 / 3`` which is equal ``2``.

## Student Task #1: Mean numbers on the rise

```typescript-ignore
/**
 * Calculates the mean of the data given
 *
 * @param data The numbers used for calculation of the mean
 * @returns The mean of the data given
 **/
function calculateMean(data: number[]): number {

}
```
1. Copy the code template from above
2. Fill out the function ``calculateMean`` so that it returns the mean value of ``data``
3. Run this function on the array ``1, 2, 3, 4, 5`` to calculate its mean

## Example #2: Median

When talking about data, the **Median** refers to the middle number. This is just like how the median on a highway is in the middle.

The process of calculating the median is as follows:

1. Sort the data so that it is in ascending order (1, 2, 3). Descending order (3, 2, 1) will also work, but it is convention to use ascending order when sorting data.
2. Trim away the first and last numbers until only 1 or 2 numbers are left.
3. If there is only 1 number, that is the median. If there are 2 numbers, the median is the mean or average of these 2 numbers



### Array of Odd Length
So if given the array of numbers ``1, 5, 6, 8, 2``, the process would be to first sort the data.

### ~hint

In JavaScript, we can use the ``.sort()`` function on an array which will sort the array in ascending order

### ~

1. Sort the array

	``1, 2, 5, 6, 8``.

2. The next step is to remove the first and last element.

	``2, 5, 6``

3. There is still more than 2 elements so the step needs to be repeated once more

	``5``

The last element left is the median so the median is ``5``

### Array of Even Length

What about an example where there is an even number of elements? This would mean after repeatedly trimming away the first and last numbers there will be 2 numbers left?

Take the array of numbers ``2, 5, 1, 3``

1. Sort the array

	``1, 2, 3, 5``

2. Remove the first and last number

	``2, 3``

3. There are 2 numbers left so the median is average or mean of these 2 numbers

	``(2 + 3) / 2 = 2.5``

So the median is ``2.5``

## Student Task #2: Stuck in the Middle

```typescript-ignore
/**
 * Calculates the median of the data given
 *
 * @param data The numbers used for calculation of the median
 * @returns The median of the data given
 **/
function calculateMedian(data: number[]): number {

}
```
1. Copy the code template from above
2. Fill out the function ``calculateMedian`` so that it returns the median of ``data``
3. Run this function on the array ``5, 2, 1, 3, 1`` to calculate its median
4. **Challenge** Retrieve the median by figuring out its index in the sorted array instead of trimming the first and last elements

## Example #3: Sum of Dice Rolls

A group of students take turns rolling a single die. They recorded each roll and calculated the average roll to be about ``3.5``. This is the value that you can expect the die to be if rolled. Note, ``3.5`` is not a value that can be rolled, but it is still a useful approximation for estimation.

Given that 1 die is expected to roll a value around ``3.5``, what is expected the expected sum of 2 dice rolls. The first one is expected to roll ``3.5`` and the second is also expected to roll ``3.5``. So the expected sum of the 2 dice is ``3.5 + 3.5 = 2 * (3.5) = 7``. This actually makes sense. When rolling 2 dice there is a 17% chance of rolling a 7 and is the most likely sum possible.

## Student Task #3: Estimated Dice Rolls

1. Observe the following game in which 4 dice will be thrown and their values will be added together
2. Make an estimate as to what the expected sum will be
3. Play the game 10 times recording the actual sum of each dice throw
4. Compare the actual data to the estimation made in step 2
5. Calculate the mean and median of data and compare them to the estimate in step 2

```sim
let choice = 0
let dice: Sprite[] = []
let sum = 0
let list: Image[] = []
let value = 0
list = [img`
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
`, img`
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
`, img`
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
`, img`
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
`, img`
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
`, img`
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f
`]
dice = [sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player), sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player), sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player), sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)]
for (let index = 0; index <= dice.length - 1; index++) {
    dice[index].x = (index + 0.5) * 40
}
game.splash("Roll the dice!")
forever(function () {
    sum = 0
    for (let value of dice) {
        for (let i = 0; i < 100; i++) {
            choice = randint(0, list.length - 1)
            value.setImage(list[choice])
            pause(10)
        }
        sum += choice + 1
        pause(1000)
    }
    for (let value of dice) {
        value.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `)
    }
    game.splash("The sum is " + sum)
})
```