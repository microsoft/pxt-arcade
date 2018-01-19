namespace image {
    export function repeatY(count: number, image: Image) {
        let arr = [image]
        while (--count > 0)
            arr.push(image)
        return concatY(arr)
    }

    export function concatY(images: Image[]) {
        let w = 0
        let h = 0
        for (let img of images) {
            w = Math.max(img.width(), w)
            h += img.height()
        }
        let r = image.create(w, h)
        let y = 0
        for (let img of images) {
            let x = (w - img.width()) >> 1
            r.drawImage(img, x, y)
            y += img.height()
        }
        return r
    }
}
