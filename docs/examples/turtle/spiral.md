# Turtle Spiral

```blocks
let item = 0
turtle.setSpeed(90)
while (true) {
    turtle.forward(item)
    turtle.turn(90)
    item += 1
    turtle.setPenColor(Math.randomRange(0, 15))
}
```

```package
turtle
```