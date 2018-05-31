# palette

Example

```blocks
let w = screen.width / 4
let h = screen.height / 4
for (let i = 0; i < 4; ++i) {
    for (let j = 0; j < 4; ++j) {
        let c = j * 4 + i
        screen.fillRect(i * w, j * h, w, h, c)
        screen.print(c + "", i * w + w / 3, j * h + h / 3, c == 1 ? 0xf : 1)
    }
}```
