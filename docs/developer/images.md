# Art and Images

## Colors

Images in arcade are stored using 4 bits per color. The color `0` is reserved for transparency
so, at any one time, you have the remaining 15 colors available to work with. The image color
values are really indices that map to 16 entries of the current palette of RGB colors.
The default palette for the MakeCode UI is here:

```
#000000     // transparency
#ffffff
#ff2121
#ff93c4
#ff8135
#fff609
#249ca3
#78dc52
#003fad
#87f2ff
#8e2ec4
#a4839f
#5c406c
#e5cdc4
#91463d
#000000
```


### Changing the default palette

If you intend to use the MakeCode blocks editor to create or edit images
but would like to change the colors, it is recommended
that you set a default palette so that your sprites render correctly
in the image editor/blocks.

To change the default palette of a project, go into the project
settings in the MakeCode editor (under the cogwheel in the upper right).
Once there, click "Edit settings as text" and add a `"palette"` entry
like so:

```JSON
{
    "name": "Untitled",
    "dependencies": {
        "device": "*"
    },
    "description": "",
    "files": [
        "main.blocks",
        "main.ts",
        "README.md"
    ],
    "palette": [
        "#000000",
        "#ffffff",
        "#ff2121",
        "#ff93c4",
        "#ff8135",
        "#fff609",
        "#249ca3",
        "#78dc52",
        "#003fad",
        "#87f2ff",
        "#8e2ec4",
        "#a4839f",
        "#5c406c",
        "#e5cdc4",
        "#91463d",
        "#000000"
    ]
}
```

Note that it doesn't matter what you set the first color in the array to because
it always maps to transparency. Be sure that the palette array you enter has **exactly** 16 colors.


### Changing the palette at runtime

To change the palette at runtime, you can use the `image.setPalette()` API, which takes
a `Buffer` of RGB values. Each color channel has one byte, giving you a total of three
bytes per color. You can use the tool at https://riknoll.github.io/pxt-arcade-asset-tool/
to import palettes in the `.gpl`, `.txt`, or `.hex` formats. Palettes cannot contain more
than 16 colors (including color `0` for transparency).


## Importing custom art and palettes

If you want to use your own drawing tool or import an existing sprite sheet, we've
created a simple tool for converting images into a format supported by Arcade:

https://riknoll.github.io/pxt-arcade-asset-tool/

To add images, simply drag them onto the page (only `.png` is currently supported). Images
can contain single sprites or spritesheets with multiple images; use the toggle to
switch between the two. Spritesheets should contain equally sized sprites with no spacing
between them.

If your image uses a palette other than the default palette, you also need to add a palette
file to the project. Drag your palette file ( `.gpl`, `.txt`, or `.hex` format)
onto the page to have it appear in the palette dropdown beneath each image entry. If your
sprites come out looking weird, you should double check the palette you're using.

https://lospec.com/palette-list is an amazing resource for finding color palettes.

If you already have a palette that isn't in one of the above formats, you can easily create a
`.hex` file by hand. Simply put each color's hex string on a separate line and save a file
with the `.hex` extension. For example:

```
#000000
#ffffff
#ff2121
#ff93c4
#ff8135
#fff609
#249ca3
#78dc52
#003fad
#87f2ff
#8e2ec4
#a4839f
#5c406c
#e5cdc4
#91463d
#000000
```