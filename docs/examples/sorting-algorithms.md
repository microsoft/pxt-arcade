
```typescript
interface SortingAlgorithm {
    title: string;
    algorithm: (values: number[]) => void;
    a?: number[];
}

const COUNT = 52;
const LINE_WIDTH = 2;
const BORDER = 2;
let pauseDuration = 10;
let ySegment: number;

/**
 * Final example set up will be:
 * - insertion sort and quicksort on by default (in 'running' / runners currently)
 * - all other elements in other array 'notRunning'
 * - start show on paint below, then bring up menu screen (once start, any button press returns to menu)
 * menu set up:
 *     start
 *         runs start();
 *     add
 *         list all titles from notRunning in pop up, chosen is moved to running
 *     disable
 *         list all titles from running in pop up, chosen is moved to notRunning
 *     rate up
 *          lower pauseDuration
 *     rate down
 *          increase pauseDuration
 */
let runners: SortingAlgorithm[] = [];
// addExample("selection sort", selectionSort);
// addExample("insertion sort", insertionSort);
// addExample("bubble sort", bubbleSort);
// addExample("shell sort", shellSort);
addExample("heap sort", heapSort);
addExample("quick sort", quickSort);
addExample("merge sort", mergeSort);
// addExample("bogo 'sort'", bogoSort);

start();
game.onPaint(() => show());

controller.A.onEvent(ControllerButtonEvent.Pressed, () => start());
controller.down.onEvent(ControllerButtonEvent.Pressed, () => {
    runners.removeElement(Math.pickRandom(runners));
    start();
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (Math.randomRange(0, 6)) {
        case 0: {
            addExample("selection sort", selectionSort);
            break;
        }
        case 1: {
            addExample("insertion sort", insertionSort);
            break;
        }
        case 2: {
            addExample("bubble sort", bubbleSort);
            break;
        }
        case 3: {
            addExample("shell sort", shellSort);
            break;
        }
        case 4: {
            addExample("quick sort", quickSort);
            break;
        }
        case 5: {
            addExample("heap sort", heapSort);
            break;
        }
        case 6: {
            addExample("bogo 'sort'", bogoSort);
            break;
        }
    }
    start();
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pauseDuration = Math.max(pauseDuration / 1.5, 1);
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pauseDuration = pauseDuration * 1.5;
})

function addExample(title: string, sortAlgorithm: (values: number[]) => void) {
    let output: SortingAlgorithm = {
        title: title,
        algorithm: sortAlgorithm
    }
    runners.push(output);
}

function start() {
    const r = new Math.FastRandom();
    ySegment = Math.floor(screen.height / runners.length);
    runners.forEach(v => v.a = fillWithDefault(r, COUNT, ySegment - (image.font5.charHeight + 2)));
    runners.forEach(v => control.runInParallel(() => v.algorithm(v.a)));
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

function show() {
    runners.forEach(function (value: SortingAlgorithm, index: number) {
        drawCurrentState(value.a, value.title, ySegment, index * ySegment);
    });
}

function drawCurrentState(a: number[], title: string, height: number, yOffset: number) {
    for (let i = 0; i < a.length; ++i) {
        if (a[i] > 0) {
            const maxValue = ySegment - (image.font5.charHeight + 2);
            // 14 possible colors
            const c = Math.clamp(0x1, 0xE, Math.floor(a[i] * 14 / maxValue));
            screen.fillRect(BORDER + i * (LINE_WIDTH + 1),
                height + yOffset - a[i], LINE_WIDTH, a[i], c);
        }
    }
    screen.print(title, BORDER, yOffset + 1, 0x2, image.font5);
}

function swap(a: number[], i: number, j: number) {
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
    returnControl();
}

function returnControl() {
    // pause to let control return if pauseDuration is set
    if (pauseDuration)
        pause(pauseDuration);
}

/**
 * Sorting Algorithm Implementations
 */

function insertionSort(a: number[]) {
    for (let i = 0; i < a.length; i++) {
        let value = a[i]
        let j: number;
        for (j = i - 1; j > -1 && a[j] > value; --j) {
            a[j + 1] = a[j];
            returnControl();
        }
        a[j + 1] = value;
    }

    return a;
}

function selectionSort(a: number[]) {
    for (let i = 0; i < a.length; i++) {
        let min = i;
        for (let j = i + 1; j < a.length; j++) {
            returnControl();
            if (a[j] < a[min]) {
                min = j;
            }
        }
        if (i !== min) {
            swap(a, i, min);
        }
    }
    return a;
}

function bubbleSort(a: number[]) {
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (a[i] < a[j]) {
                swap(a, i, j);
            }
        }
    }
}

function shellSort(a: number[]) {
    let increment = a.length / 2;
    while (increment > 0) {
        for (let i = increment; i < a.length; ++i) {
            let j = i;
            let t = a[i];

            while (j >= increment && a[j - increment] > t) {
                a[j] = a[j - increment];
                j = j - increment;
                returnControl();
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

function quickSort(a: number[]) {
    qsort(a, 0, a.length - 1);

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
        for (let j = lo; j < hi; ++j) {
            if (a[j] < pivot) {
                i++;
                swap(a, i, j);
            }
        }
        swap(a, i + 1, hi);
        return i + 1;
    }
}

function heapSort(a: number[]) {
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

            if (left < max && heap[left] > heap[curr]) {
                curr = left;
            }

            if (right < max && heap[right] > heap[curr]) {
                curr = right;
            }

            if (curr == i) {
                return;
            }

            swap(heap, i, curr);
            i = curr;
        }
    }
    buildMaxHeap(a);

    for (let i = a.length - 1; i > 0; --i) {
        swap(a, 0, i);
        heapify(a, 0, i);
    }
}

function mergeSort(a: number[]) {
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

        // This is not a step in mergesort; this is solely here so that the
        // screen can be updated with a preview
        merged.forEach(function (value: number, index: number) {
            original[offset + index] = value;
            returnControl();
        });

        return merged;
    }

    function merge(left: number[], right: number[]) {
        let result = [];
        let lIndex = 0;
        let rIndex = 0;

        while (lIndex < left.length && rIndex < right.length) {
            if (left[lIndex] < right[rIndex]) {
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

    const final = msort(a, 0, a);
}


// Bogo sort is a purely random sorting algorithm; it simply checks if the array is sorted,
// and if not, shuffles the array and checks again.
// This is sometimes called 'monkey sort', after the 'Infinite monkey theorem': that a monkey
// hitting random keys on a typewriter for an infinite amount of time will eventually recreate
// the works of Shakespeare
function bogoSort(a: number[]) {
    let isSorted = function (a: number[]) {
        returnControl();
        pause(pauseDuration * 20);
        for (let i = 1; i < a.length; ++i) {
            if (a[i - 1] > a[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(a: number[]) {
        let count = a.length - 1;
        const r = new Math.FastRandom();

        while (count > 0) {
            let index = r.randomRange(0, count);
            count--;
            let temp = a[count];
            a[count] = a[index];
            a[index] = temp;
        }

        return a;
    }

    function sort(a: number[]) {
        let sorted = false;
        while (!sorted) {
            a = shuffle(a);
            sorted = isSorted(a);
        }
        return a;
    }

    return sort(a);
}
```