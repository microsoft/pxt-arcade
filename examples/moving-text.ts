keys.Left.onPressed(function () {
    x--
})

keys.Right.onPressed(function () {
    x++
})


let x = 10
let y = 10
let d = 0.2


loops.frame(() => {
    y += keys.dy(d)
    screen.fill(0)
    screen.print("Habcdef", x, y, 2, image.codalFont)
    screen.print("Habcdef", x, y + 30, 15, image.codalFont)
})
