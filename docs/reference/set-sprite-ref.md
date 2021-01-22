## Add a Main Sprite 

Add a main sprite to your project.

Your main sprite is usually your player, but it can also be text or another featured element.

If your main sprite is a player, you likely want to be able to move it with the controller.  You probably also want to either keep it on the screen or have the camera follow it as it leaves the play area.


### Example Code

Keep main sprite on screen:

```block
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)

```


Follow main sprite with camera:

```block
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)

```

### Setting up your new sprite

Generally, you'll want to add the code to set-up your sprite in the **on start** container.  For more advanced users, you can set-up your sprite in a function and call that function in **on start**. 

#### Giving the Sprite a Name

The first argument in the **set [mySprite] to** block is the [__*variable*__](#varied "a label that holds the place for something that can change") name that represents the sprite inside your program.  For example, if you call your sprite **mySprite**, then you'll need to make sure to choose **mySprite** in other blocks that set its properties.


#### Setting the Sprite Kind

The last argument in the **set [mySprite] to** block is the [__*kind*__](#kindness "the group (or class) that it belongs to").  By setting this, you're setting the group that the sprite belongs to. In general, you are setting a sprite to be your main player, you'll want to keep the **kind** to **Player**.


#### Edit Sprite Image

Click on the grey square (inside the grey oval) to get to the image editor. From there, you can do one of three things:

1. Draw an image in the **image editor**
![imageEditor](/static/reference/image-editor-01.jpg "This is the image editor" )

2. Toggle over to **Gallery** and choose an image from the main library
![galleryEditor](/static/reference/image-editor-02.jpg "This is the gallery" )

3. Toggle over to **Assets** and choose an image from the project library
![assetEditor](/static/reference/image-editor-03.jpg "This is the asset editor" )


#### Drawing with Image Editor

The Arcade image editor is a pixel painting system where you can draw with your 16-color palette. 

Here is a list of the tools you have available:
![imageEditorLabeled](/static/reference/image-editor-04.jpg "Labeled image editor")
