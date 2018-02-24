let arr = [1]
for (let i = 0; i < 42; ++i)
    arr.push(Math.randomRange(10, 100))

function show() {
    screen.fill(0)
    for (let i = 0; i < arr.length; ++i)
        screen.fillRect(i * 3, 128 - arr[i], 2, 128, 15)
}
show()

function swap(i: number, j: number) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
    show()
    loops.pause(10)
}

function bubble() {
    for (let i = 0; i < arr.length; ++i)
        for (let j = 0; j < i; ++j) {
            if (arr[i] < arr[j])
                swap(i, j)
        }
}

bubble()

// TODO add qsort etc

