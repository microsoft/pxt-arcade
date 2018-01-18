let cr = hex`f406
f000c2
0f0c02
00e002
0f0c02
f000c2
`

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
    screen.clear(0)
    screen.setFont(screen.microbitFont, 2)
    screen.print("Habcdef", x, y)
    screen.setFont(screen.microbitFont)
    screen.print("Habcdef", x, y + 30)
    //    screen.drawImage(x, y, cr)
})

