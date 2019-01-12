
```typescript
interface SortingAlgorithm {
    title: string;
    algorithm: (values: number[]) => number[];
    a?: number[];
    place?: string;
}

interface MenuItem {
    name: () => string;
    clickHandler: () => void;
    repeat?: boolean;
}

const COUNT = 52;
const LINE_WIDTH = 2;
const BORDER = 2;
let pauseDuration = 10;
let ySegment: number;
let currentPlace: number;
let currentRun = 0;

/**
 * Final example set up will be:
 * - insertion sort and quicksort on by default (in 'running' / running currently)
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
let running: SortingAlgorithm[] = [];
let notRunning: SortingAlgorithm[] = []


addExample("selection sort", sorts.selectionSort);
addExample("insertion sort", sorts.insertionSort);
addExample("bubble sort", sorts.bubbleSort);
addExample("shell sort", sorts.shellSort);
addExample("heap sort", sorts.heapSort);
addExample("quick sort", sorts.quickSort);
addExample("merge sort", sorts.mergeSort);

for (let i = 0; i < 2; i++) {
    moveRandom(notRunning, running);
}

start();

game.onPaint(() => show());

controller.A.onEvent(ControllerButtonEvent.Pressed, () => start())

controller.down.onEvent(ControllerButtonEvent.Pressed, () => {
    moveRandom(running, notRunning);
    start();
})

controller.up.onEvent(ControllerButtonEvent.Pressed, () => {
    moveRandom(notRunning, running);
    start();
})

function moveRandom<T>(a: T[], b: T[]) {
    if (a.length > 0) {
        const i = Math.randomRange(0, a.length - 1);
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
    running.forEach(v => v.a = fillWithDefault(r, COUNT, ySegment - (image.font5.charHeight + 2)));
    running.forEach(v => control.runInParallel(() => {
        const run = currentRun;
        v.place = undefined;
        v.algorithm(v.a);
        if (run == currentRun) {
            const place = currentPlace++;
            const lastDigit = place % 10;
            if (lastDigit === 1)
                v.place = place + "st";
            else if (lastDigit === 2)
                v.place = place + "nd";
            else if (lastDigit === 3)
                v.place = place + "rd";
            else
                v.place = place + "th";
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

function show() {
    running.forEach(function (value: SortingAlgorithm, index: number) {
        drawCurrentState(value, ySegment, index * ySegment);
    });
}

function drawCurrentState(s: SortingAlgorithm, height: number, yOffset: number) {
    const a = s.a
    const title = s.title;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] > 0) {
            const maxValue = ySegment - (image.font5.charHeight + 2);
            // 14 possible colors
            const c = sorts.isSorted(a) ?
                1
                :
                Math.clamp(0x1, 0xE, Math.floor(a[i] * 14 / maxValue));
            screen.fillRect(BORDER + i * (LINE_WIDTH + 1),
                height + yOffset - a[i], LINE_WIDTH, a[i], c);
        }
    }
    screen.print(title, BORDER, yOffset + 1, 0x2, image.font5);
    if (s.place) {
        screen.print(s.place, BORDER, yOffset + 3 + image.font5.charHeight, 0x2, image.font5);
    }
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
namespace sorts {
    export function insertionSort(a: number[]) {
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

    export function selectionSort(a: number[]) {
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

    export function bubbleSort(a: number[]) {
        for (let i = 0; i < a.length; ++i) {
            for (let j = 0; j < i; ++j) {
                if (a[i] < a[j]) {
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