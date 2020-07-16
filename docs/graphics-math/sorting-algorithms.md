# Sorting Algorithms

Arrays are often used to store large amounts of data such as numbers or text characters. To make it easier to find things in the array, a program will often **sort** an array first; that is, rearrange the elements so that smaller things appear at the beginning, and larger things appear at the end.

Finding efficient ways to sort data is a challenge that software developers have been attempting for years. This is done by developing different sorting **algorithms**: sets of rules or instructions on how to properly sort the data as efficiently as possible.

In the following example, a selection of general purpose sorting algorithms are shown on the screen. These are algorithms that can be used on any type of data where elements are compared. To start, two random algorithms are shown sorting a random series of numbers represented by rectangles on the screen. The name of the sorting algorithm being used is shown in the upper left corner of the section of the screen where the sorting algorithm is used.

## Controls:

* ``A`` button: restart the current algorithms with a new group of initial values
* ``up`` button: increase the number of elements being sorted if possible, and restart
* ``down`` button: decrease the number of elements being sorted if possible, and restart
* ``left`` button: remove a random sorting algorithm from the group being displayed if possible, and restart
* ``right`` button: add a random sorting algorithm to the group being displayed if possible, and restart

```typescript
const pauseDuration = 10;

interface SortingAlgorithm {
    title: string;
    algorithm: (values: number[]) => number[];
    a?: number[];
    place?: string;
}

let currCount = 26;
let currentRun = 0;

let ySegment: number;
let currentPlace: number;

let running: SortingAlgorithm[] = [];
let notRunning: SortingAlgorithm[] = [];

addExample("selection sort", sorts.selectionSort);
addExample("insertion sort", sorts.insertionSort);
addExample("bubble sort", sorts.bubbleSort);
addExample("shell sort", sorts.shellSort);
addExample("heap sort", sorts.heapSort);
addExample("quick sort", sorts.quickSort);
addExample("merge sort", sorts.mergeSort);

// Start off with two random algorithms running
for (let i = 0; i < 2; i++) {
    moveRandom(notRunning, running);
}

start();

game.onPaint(() => {
    running.forEach(function (value: SortingAlgorithm, index: number) {
        drawCurrentState(value, currCount, ySegment, index * ySegment);
    });
});

// start over with a new seed
controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
    start();
});

// remove a sorting algorithm from the group of running sorts
controller.left.onEvent(ControllerButtonEvent.Pressed, () => {
    if (running.length > 1) {
        moveRandom(running, notRunning)
        start();
    }
});

// display a new sorting algorithm if possible
controller.right.onEvent(ControllerButtonEvent.Pressed, () => {
    if (notRunning.length > 0) {
        moveRandom(notRunning, running)
        start();
    }
});

// increase the number of elements to sort if possible
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currCount + 6 < screen.width / 2) {
        currCount += 6;
        start();
    }
});

// decrease the number of elements to sort if possible
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currCount > 6) {
        currCount -= 6;
        start();
    }
})

function moveRandom<T>(a: T[], b: T[]) {
    if (a.length > 0) {
        const i = randint(0, a.length - 1);
        b.push(a.removeAt(i));
    }
}

function addExample(title: string, sortAlgorithm: (values: number[]) => number[]) {
    let output: SortingAlgorithm = {
        title: title,
        algorithm: sortAlgorithm
    }
    notRunning.push(output);
}

function start() {
    const r = new Math.FastRandom();
    ++currentRun;
    currentPlace = 1;

    ySegment = Math.floor(screen.height / running.length);

    // clear old arrays to quickly cull other threads as much as possible;
    // only merge sort will survive as it is not in place
    running.forEach(v => {
        while (v.a && v.a.length != 0)
            v.a.pop();
    });

    // create a new starting array for each of the algorithms
    running.forEach(v => v.a = fillWithDefault(r, currCount, ySegment - (image.font5.charHeight + 2)));

    // run the comparison
    running.forEach(v => control.runInParallel(() => {
        const run = currentRun;
        v.place = undefined;
        v.algorithm(v.a);
        if (run === currentRun) {
            const place = currentPlace++;
            if (place === 1)
                music.powerUp.play();
            else if (place === running.length)
                music.wawawawaa.play();

            // ordinal indicator is 'st', 'nd', 'rd', or 'th'
            v.place = place + ordinalIndicator(place);
        }
    }));
}

function fillWithDefault(r: Math.FastRandom, count: number, maxHeight: number): number[] {
    // reset seed so that output is consistent
    r.reset();
    let output: number[] = [];

    for (let i = 0; i < count; ++i) {
        output.push(r.randomRange(0, maxHeight));
    }

    return output;
}

function drawCurrentState(s: SortingAlgorithm, count: number, height: number, yOffset: number) {
    const a = s.a
    const title = s.title;
    const lineWidth = Math.floor(screen.width / count) - 1;
    const borderWidth = (screen.width - (count * (lineWidth + 1))) / 2;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] > 0) {
            const maxValue = ySegment - (image.font5.charHeight + 2);
            // pick color between 0x1 and 0xE based on value
            let c = Math.clamp(0x1, 0xE, Math.floor(a[i] * 14 / maxValue));
            screen.fillRect(borderWidth + i * (lineWidth + 1), height + yOffset - a[i], lineWidth, a[i], c);
        }
    }

    screen.print(title, borderWidth, yOffset + 1, 0x2, image.font5);
    if (s.place)
        screen.print(s.place, borderWidth, yOffset + 3 + image.font5.charHeight, 0x2, image.font5);
}

function ordinalIndicator(input: number) {
    const lastDigit = input % 10;
    if (lastDigit === 1)
        return "st";
    else if (lastDigit === 2)
        return "nd";
    else if (lastDigit === 3)
        return "rd";
    else
        return "th";
}

/**
 * Sorting Algorithm Implementations
 */
namespace sorts {
    function swap(a: number[], i: number, j: number) {
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
        pause(pauseDuration);
    }

    function compare(a: number, b: number) {
        pause(pauseDuration)
        return a < b;
    }

    export function insertionSort(a: number[]) {
        for (let i = 0; i < a.length; i++) {
            let value = a[i]
            let j: number;
            for (j = i - 1; j > -1 && compare(value, a[j]); --j) {
                a[j + 1] = a[j];
                pause(pauseDuration);
            }
            a[j + 1] = value;
        }

        return a;
    }

    export function selectionSort(a: number[]) {
        for (let i = 0; i < a.length; i++) {
            let min = i;
            for (let j = i + 1; j < a.length; j++) {
                if (compare(a[j], a[min])) {
                    min = j;
                    pause(pauseDuration);
                }
            }
            if (i !== min) {
                swap(a, i, min);
            }
        }

        return a;
    }

    export function bubbleSort(a: number[]) {
        for (let i = 0; i < a.length; ++i) {
            for (let j = 0; j < i; ++j) {

                if (compare(a[i], a[j])) {
                    swap(a, i, j);
                }
            }
        }

        return a;
    }

    export function shellSort(a: number[]) {
        let increment = a.length / 2;
        while (increment > 0) {
            for (let i = increment; i < a.length; ++i) {
                let j = i;
                let t = a[i];

                while (j >= increment && compare(t, a[j - increment])) {
                    a[j] = a[j - increment];
                    j = j - increment;
                    pause(pauseDuration);
                }
                a[j] = t;
            }

            if (increment == 2) {
                increment = 1;
            } else {
                increment = Math.floor(increment * 5 / 11);
            }
        }

        return a;
    }

    export function quickSort(a: number[]) {
        qsort(a, 0, a.length - 1);
        return a;

        function qsort(a: number[], lo: number, hi: number) {
            if (lo < hi) {
                let p = partition(a, lo, hi);
                qsort(a, lo, p - 1);
                qsort(a, p + 1, hi);
            }
        }

        function partition(a: number[], lo: number, hi: number) {
            let pivot = a[hi];
            let i = lo - 1;

            for (let j = lo; compare(j, hi); ++j) {
                if (a[j] < pivot) {
                    i++;
                    swap(a, i, j);
                }
            }

            swap(a, i + 1, hi);
            return i + 1;
        }
    }

    export function heapSort(a: number[]) {
        function buildMaxHeap(a: number[]) {
            let i = Math.floor(a.length / 2 - 1);

            while (i >= 0) {
                heapify(a, i, a.length);
                i -= 1;
            }
        }

        function heapify(heap: number[], i: number, max: number) {
            while (i < max) {
                const left = 2 * i + 1;
                const right = left + 1;
                let curr = i;

                if (left < max && compare(heap[curr], heap[left])) {
                    curr = left;
                }

                if (right < max && compare(heap[curr], heap[right])) {
                    curr = right;
                }

                if (curr == i) return;

                swap(heap, i, curr);
                i = curr;
            }
        }
        buildMaxHeap(a);

        for (let i = a.length - 1; i > 0; --i) {
            swap(a, 0, i);
            heapify(a, 0, i);
        }

        return a;
    }

    export function mergeSort(a: number[]) {
        // Typically, you wouldn't keep an 'offset' or a link to the 'original' array,
        // as the sort works by returning a new, sorted array as output - not by modifying
        // the one passed as input. Here, though, it is needed so that the preview on the
        // screen can be updated
        function msort(a: number[], offset: number, original: number[]): number[] {
            if (a.length < 2) {
                return a;
            }

            const middle = Math.floor(a.length / 2);

            let left = a.slice(0, middle);
            let right = a.slice(middle, a.length);

            left = msort(left, offset, original);
            right = msort(right, offset + middle, original);

            const merged = merge(left, right);

            // Update preview on screen
            merged.forEach(function (value: number, index: number) {
                original[offset + index] = value;
                pause(pauseDuration);
            });

            return merged;
        }

        function merge(left: number[], right: number[]) {
            let result = [];
            let lIndex = 0;
            let rIndex = 0;

            while (lIndex < left.length && rIndex < right.length) {
                if (compare(left[lIndex], right[rIndex])) {
                    result.push(left[lIndex]);
                    ++lIndex;
                } else {
                    result.push(right[rIndex]);
                    ++rIndex;
                }
            }
            while (lIndex < left.length) {
                result.push(left[lIndex]);
                ++lIndex;
            }
            while (rIndex < right.length) {
                result.push(right[rIndex]);
                ++rIndex;
            }
            return result;
        }

        return msort(a, 0, a);
    }

    export function isSorted(a: number[]) {
        for (let i = 1; i < a.length; ++i) {
            if (a[i - 1] > a[i]) {
                return false;
            }
        }
        return true;
    };
}
```
