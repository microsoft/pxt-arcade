// @serial: before 7 7 0
// @serial: after 7 7 0
screen.fillRect(10, 20, 4, 3, 7)
console.log("before " + screen.getPixel(10, 20) + " " + screen.getPixel(13, 22)
    + " " + screen.getPixel(14, 22))
const colors = control.createBuffer(48)
for (let i = 0; i < 48; i++)
    colors[i] = 255 - i
image.setPalette(colors)
console.log("after " + screen.getPixel(10, 20) + " " + screen.getPixel(13, 22)
    + " " + screen.getPixel(14, 22))
