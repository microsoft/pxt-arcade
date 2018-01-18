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
    image.setFont(image.microbitFont, 2)
    screen.print("Habcdef", x, y)
    image.setFont(image.microbitFont)
    screen.print("Habcdef", x, y + 30)
})
