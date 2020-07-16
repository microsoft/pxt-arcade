# sorting

Example

```typescript
let arr = [1]
for (let i = 0; i < 42; ++i)
    arr.push(randint(10, 100))

function show() {
    screen.fill(0)
    for (let i = 0; i < arr.length; ++i)
        screen.fillRect(i * 3, 120 - arr[i], 2, 120, 1)
}
show()

function swap(i: number, j: number) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
    show()
    pause(10)
}

function bubble() {
    for (let i = 0; i < arr.length; ++i)
        for (let j = 0; j < i; ++j) {
            if (arr[i] < arr[j])
                swap(i, j)
        }
}



function qsort(lo: number, hi: number) {
    if (lo < hi) {
        let p = partition(lo, hi)
        qsort(lo, p - 1)
        qsort(p + 1, hi)
    }
}

function partition(lo: number, hi: number) {
    let pivot = arr[hi]
    let i = lo - 1
    for (let j = lo; j < hi; ++j)
        if (arr[j] < pivot) {
            i++
            swap(i, j)
        }
    swap(i + 1, hi)
    return i + 1
}

function quicksort() {
    qsort(0, arr.length)
}


bubble()
// quicksort()


```
