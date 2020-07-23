# snake

Example

```typescript
let sz = 8
let w = screen.width / sz | 0
let h = screen.height / sz | 0

let dx = 1
let dy = 0
let speed = 0.3
let time = 1
let snake: number[]
let foodX = 0
let foodY = 0
let level = 0
let lastFoodIndex = 9

function nextLevel() {
    if (level) {
        foodX = -1
        foodY = -1
        show()
        pause(300)
    }
    level++
    game.splash("Level " + level, "")
    pause(1000)
    lastFoodIndex = 1
    snake = [0x605, 0x505]
    time = 1
    speed = 1 / (level / 2 + 2)
    dx = 1
    dy = 0
}

function encode(x: number, y: number) {
    return (x << 8) | y
}

function inSnake(x: number, y: number) {
    return snake.indexOf(encode(x, y)) >= 0
}

function newFood() {
    if (++lastFoodIndex >= 5) {
        music.playSound(music.sounds(Sounds.PowerUp))
        nextLevel()
    } else {
        music.playSound(music.sounds(Sounds.BaDing))
    }
    do {
        foodX = randint(1, w - 2)
        foodY = randint(1, h - 2)
    } while (inSnake(foodX, foodY));
}

function isEdge(x: number, y: number) {
    return (x == 0 || y == 0 || x == w - 1 || y == h - 1)
}

function show() {
    screen.fill(0)
    for (let x = 0; x < w; ++x)
        for (let y = 0; y < h; ++y) {
            let c = 0
            if (isEdge(x, y)) {
                c = 3
            }
            if (inSnake(x, y))
                c = 4
            screen.fillRect(x * sz, y * sz, sz - 1, sz - 1, c)
            if (x == foodX && y == foodY) {
                screen.print("" + lastFoodIndex, x * sz + 1, y * sz + 1)
            }
        }
}

newFood()

game.onPaint(function () {
    if (controller.dx(100)) {
        dx = Math.sign(controller.dx(100))
        dy = 0
    } else if (controller.dy(100)) {
        dx = 0
        dy = Math.sign(controller.dy(100))
    }

    time += game.eventContext().deltaTime
    if (time > speed) {
        let x = snake[0] >> 8
        let y = snake[0] & 0xff
        x += dx
        y += dy
        let n = (x << 8) | y
        if (snake[1] == n) {
            // no turning back
            x -= 2 * dx
            y -= 2 * dy
            n = (x << 8) | y
        }
        if (snake.indexOf(n) >= 0 || isEdge(x, y)) {
            game.over()
            return
        }
        snake.unshift(n)
        if (x == foodX && y == foodY) {
            newFood()
        } else {
            snake.pop()
        }
        time = 0
    }
    show()
})
```
