# palette

Example

```blocks
let s = screen.width / 4
for (let i = 0; i < 4; ++i)
    for (let j = 0; j < 4; ++j) {
        let c = j * 4 + i
        screen.fillRect(i * s, j * s, s, s, c)
        screen.print(c + "", i * s + s / 3, j * s + s / 3)
    }
```
