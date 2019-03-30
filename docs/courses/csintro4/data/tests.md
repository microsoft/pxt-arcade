# Test Studying

It is expected that when studying for an exam or quiz, the more a student studies, the better they will perform on the exam. The data set ``testdata`` will provide data on a class of students and their performance and study habits for a collection of tests.

``testdata`` has the following functions and constants.

|Name| Description |
|---|---|
|``testdata.NUMBER_OF_STUDENTS: number`` | Returns the number of students in the class|
|``testdata.NUMBER_OF_TESTS: number`` | Returns the number of tests the students took|
|``testdata.getHoursStudied(student: number, test: number) : number``| Returns the number of hours the specific student studied for the specific test|
|``testdata.getTestResults(student: number, test: number) : number``| Returns the test score as a percentage for the specific test of the specified student|

## Example #1: Graphing a Specific Student's Scores

When graphing all of the scores of a specific student, two arrays of data are needed, the hours studied by the student (xValues), and the actual test results of the student (yValues). To build these arrays, simply go over each test in a ``for loop`` as follows:

```typescript-ignore
// The id of the specific student to look at
let studentNumber: number = 0;

let xValues: number[] = [];
let yValues: number[] = [];

for (let i = 0; i < testdata.NUMBER_OF_TESTS; i++) {
    xValues.push(testdata.getHoursStudied(studentNumber, i));
    yValues.push(testdata.getTestResults(studentNumber, i));
}

display.plotSeries(xValues, yValues);
display.graphBestFit(xValues, yValues);
```

Notice how the best fit line is reasonable close to the data points. Does this mean the best fit line is a good estimator of the data?


## Student Task #1a: Graphing a Specific Test Results

1. Look at the code from the example above and observe how it builds the arrays and graphs them
2. Modify the code so that it graphs the results of a specific test
3. Graph the line of best fit
4. Observe how closely the line of best fit approximates the data

## Student Task #1b: Graphing All the Test Results

1. Modify the code so that it plots every data point in the data set
2. Graph the line of best fit
3. Make observations about how well the line of best fit approximates the data

### Line of "Best" Fit isn't that great?

In the Lemonade example from the previous lesson, the line of best fit was a good estimator for predicting customer sales given temperature. This isn't the case for all data sets though. As seen in this example, when looking at all the data, the line of best fit doesn't approximate the data very well. In fact it suggests that after studying 35 hours, a student should receive a grade higher than 100% which is impossible in the given scenario.

The reason the line of best fit doesn't properly fit the data well is because the data isn't shaped like a line. The data shows that a student's grade improves the most when they first start studying, but improves less and less each hour they study. Notice how studying the first hour of studying increases the student's score much more than the 20th or 30th hour. If the data fit a line, like it does in the Lemonade example, an hour would result in the same increase of score regardless of whether it was the 1st hour or the 30th hour.

So why did the line of best fit better approximate the test scores when looking at a specific student? The answer is that there wasn't enough data. If given two points, the line of best fit will go right through those points with no error (the distance between the points and the line).If the data is not shaped like a straight line, adding more points will increase the error. The larger the error, the worse the approximation is. When only using a few points, the error is fairly small even if the data is not a line so the line of best fit appears to be fairly accurate. It's only when looking at a large amount of data that the true pattern appears.


![Lines of best fit](/static/courses/csintro4/data/best-fit-lines.gif)

## Example #2: Removing Personal Identifiable Information

When analyzing data relating to real people, it can be important to remove all **Personal Identifiable Information (PII)** about the person. This includes any part of the data that could be used to link back to the identity of the real person associated with the data. Examples could be, names, addresses, phone numbers, etc. There can be exceptions depending on the analysis, but for most cases, it's important to maintain the privacy of the people involved in the data collection.

If given a array of strings with the following form, ``"<person's name>: <person's age>"`` where ``<person's name>`` and ``<person's age>`` are replaced with the actual values, it is possible to modify this to get an array of just the ages. This would in remove the PII from the data set.

This can be done using the following four functions that can be performed on strings:

|Name| Description |
|---|---|
| ``someString.indexOf(searchString: string): number`` | Returns the position of the first occurrence of a specified value in a string.|
|``someString.length(): number`` | Returns the length of the given string|
|``someString.slice(): string``| Returns the substring starting at the given index |
|``parseInt(someString: string): number``| Parses the given string to an integer Returns ``0`` if the string contains letters|

```typescript
// Input Data
let scoreStrings: string[] = [
    "George scored a 80",
    "Denise scored a 64",
    "Gary scored a 76",
    "Kelly scored a 86",
    "Wanda scored a 76",
    "Michelle scored a 68",
    "Ruth scored a 71",
    "Mildred scored a 79",
    "Richard scored a 93",
    "Sara scored a 93"
];

// Output array of scores
let scores: number[] = [];

for (let i = 0; i < scoreStrings.length; i++) {
    // The string to be processed
    let str: string = scoreStrings[i];

    // The word of phrase to be searched for
    let searchString: string = "scored a "

    // The length of word of phrase to be searched for
    let searchStringLength: number = searchString.length;

    // The index/location of the search phrase
    let index: number = str.indexOf(searchString);

    // The string of characters of everything after the search phrase
    let newString: string = str.slice(index + searchStringLength);

    // This new string parsed as an integer which represents the score
    let score: number = parseInt(newString);

    // Adds the score to the new array of scores
    scores.push(score);
}
```

This code works by using the following algorithm

1. Looping through each string in the array
2. Creating a search string
3. Finding the search string
4. Getting the string of everything after the search string
5. Parsing that string as an integer
6. Adding the integer to the array of scores

## Student Task #2: What's their age again?

```typescript
// Input Data
let ageStrings: string[] = [
    "George: 20",
    "Denise: 21",
    "Gary: 24",
    "Kelly: 17",
    "Wanda: 19",
    "Michelle: 17",
    "Ruth: 23",
    "Mildred: 22",
    "Richard: 18",
    "Sara: 16"
];

// Output array of ages
let ages: number[] = [];
```

1. Copy the code above
2. Modify the code from the example to build an array of just the ages of the people involved 