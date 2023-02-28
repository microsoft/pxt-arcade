# Art and Images

## Colors

Images in arcade are stored using 4 bits per color. The color `0` is reserved for transparency
so, at any one time, you have the remaining 15 colors available to work with. The image color
values are really indices that map to 16 entries of the current palette of RGB colors.
The color values in the default palette for the MakeCode UI are listed here:

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

![Default color chart](/static/developer/default-colors.jpg)

### User palette settings

Users can change the color palette used for their projects in the Asset Editor under the **Asset** tab. Pressing the **Colors** button will display the Color Palette window. Several predefined palettes are available to choose from. The user can create a new "custom" palette if desired and pick the 15 colors to fill it. This palette will be custom to the project and can be set as the default palette by clicking **Apply**.

![User color palette settings](/static/developer/color-palette-window.png)

### Changing the default palette manually

A manual method of changing the default palette is described in this section. This is useful if you want to copy in all of the colors at once without entering each color in the Color Palette window.

### ~ tip

#### Changing colors from a program

If you intend to use the MakeCode blocks editor to create or edit images
but would like to change the colors, it is recommended
that you set a default palette so that your sprites render correctly
in the image editor/blocks.

### ~

To change the default palette of a project, select the **(1) - JavaScript** tab at the top of the editor to edit project code in text. On the left of the editor's workspace is the **(2) - Explorer** control for the files in your project. Expand the Explorer control and find the `pxt.json` file. Click on this file and then go back to the workspace and click on the **(3) - Edit Settings As text** button.

![Edit project settings as text](/static/developer/edit-settings.png)

You can now edit your project settings. Add a `"palette"` entry with your color values like this:

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
    "preferredEditor": "blocksprj",
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

If a `"palette"` entry already exists, it's possible that a another palette was applied previously in the Color Palette editor. You can set a new palette by overwriting the previous entry. You will have 15 colors that you set for color entries `1` - `15`. The first color, entry `0`, is reserved for transparency and can remain set as `#000000`. Be certain that there are **exactly** 16 color entries, the first is the transparency color and the other 15 colors are the custom colors.

### Changing the palette at runtime

To change the palette at runtime, you can use the `image.setPalette()` API, which takes
a `Buffer` of RGB values. Each color channel has one byte, giving you a total of three
bytes per color. The entire palette buffer is exactly 48 bytes. Here's an example of a palette created directly in a program:

```typescript
let palBuf: Buffer = hex`000000ffffff7b68eeff93c4eee8aafff609249ca378dc52003fad87f2ff8e2ec4a4839fdda0dde5cdc491463d000000`
image.setPalette(palBuf)
```

### Palette files

You can use the tool at https://riknoll.github.io/pxt-arcade-asset-tool/
to import palettes in the `.gpl`, `.txt`, or `.hex` formats. Palettes cannot contain more
than 16 colors (including color `0` for transparency). The exported ``assets.ts`` file will contain the buffer code for the palette.

```typescript
// assets.ts

namespace palettes {
    //% fixedInstance
    export const Cool_Colors = hex`0000007f0622d62411ff8426ffd100fafdffff80a4ff267494216a43006723497568aed4bfff3c10d275007899002859`;
}
```

https://lospec.com/palette-list is an amazing resource for finding color palettes.

If you already have a palette that isn't in one of the above formats, you can easily create a
`.hex` file by hand. Simply put each color's hex string on a separate line and save a file
with the `.hex` extension. For example, the ``my-palette.hex`` file could have these colors:

```
000000
ffffff
ff2121
ff93c4
ff8135
fff609
249ca3
78dc52
003fad
87f2ff
8e2ec4
a4839f
5c406c
e5cdc4
91463d
000000
```

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

As an example, let's say you uploaded an image file `mosaic.png` with a palette called `cool-colors.txt`. In the asset tool you select the `Cool Colors` palette to use with the image. The exported ``assets.ts`` file contains a custom image that uses the `Cool_Colors` palette.

```typescript
// assets.ts

namespace projectImages {
    //% fixedInstance
    export const mosaic = image.ofBuffer(hex`e4101000dddddddddddddddd5d55454444eeeede5d55646666e4eede5d4566666646eede5d6466666666e4de4d666688686646de4d668688886646de4d668628886646dd4d668688886646d94d666688686646d9dd646666666694d9dd4d6666664699d9dddd6466669499d9dddd4d44449999d9dddddddd999999d9dddddddddddddddd`);
}
namespace palettes {
    //% fixedInstance
    export const Cool_Colors = hex`00000016171a7f0622d62411ff8426ffd100fafdffff80a4ff267494216a43006723497568aed4bfff3c10d275007899002859`;
}
```
