
document.addEventListener("DOMContentLoaded", () => {
    util.setupDragAndDrop(document.getElementsByClassName("drop-target").item(0) as HTMLElement, () => true, dragged => {
        console.log("GOT FILE")
        console.log(dragged);
        dragged.forEach(f => {
            assets.importAsset(f);
        })
    })
});