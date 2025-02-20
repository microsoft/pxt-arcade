# Simple Extensions
### @explicitHints true

## {Introduction @showdialog}

Extensions allow Arcade users to easily develop and share parts of their code with others. 
In this tutorial, you will be using the ``||corgio:corgio||`` extension to create a simple platformer. 

The extension has been already loaded into this tutorial, but you can load the 
extension into other projects as shown below.

![Adding Corgio Extension](/static/tutorials/simple-extensions/add-corgio.gif)



## {Step 2}

The first thing we'll do is make our corgio. 

---



- :paw: Open ``||corgio:Corgi||`` and find <br/> 
``||variables(corgio):set myCorg to||``<br/>
then drag it into the ``||loops(noclick):on start||`` container that's already in the workspace. 

---

The corgi should appear on the left side of the screen.


#### ~ tutorialhint

```blocks
//@highlight
let myCorg: Corgio = corgio.create(SpriteKind.Player)
```

## {Step 3}

Now, let's make our sprite figure move left and right with the controller arrow keys. 

---

- :paw: Add <br/> 
``||corgio:make myCorg move left and right with arrow keys||``  <br/> 
and <br/>
``||corgio:make myCorg jump if up arrow key is pressed||`` <br/> 
beneath ``||variables(noclick):set myCorg to||``.

#### ~ tutorialhint

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
//@highlight
myCorg.horizontalMovement()
//@highlight
myCorg.verticalMovement()
```

## {Step 4}

The corgio is a bit boring when it's image doesn't change.

---

- :paw: To fix this, grab <br/>
``||corgio:change image when myCorg is moving||``<br/>
and put it somewhere under <br/>
``||variables(noclick):set myCorg to||``.


#### ~ tutorialhint

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()

//@highlight
myCorg.updateSprite()
```

## {Step 5}

Let's add a scene to the game using a tilemap.

~hint What's a tilemap? 🤷🏽‍♀️

---

A tilemap is a game map that's made of individual tiles.  You can add images to spaces, 
then make some of those spaces solid using walls. A tilemap has been added to this tutorial for you, but
you can also make your own!

- Set the size of the tilemap to ``20x8``
- Draw some platforms for the corgi to stand on
- Click the wall icon to cover your platforms with red walls

(Don't worry, the red overlay won't show up while you're playing your game.)

![Animation showing completion of this step](/static/tutorials/simple-extensions/create-tilemap.gif)


hint~

---

- :tree: From the ``||scene:Scene||`` category, <br/>
Add <br/>
``||scene:set tilemap to||`` <br/>
into the ``||loops(noclick):on start||`` container.

#### ~ tutorialhint

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()

//@highlight
tiles.setTilemap(tilemap`level_0`)
```

## {Step 6}

We need the camera to follow the corgio as it leaves the screen.

---

- :paw: Grab <br/>
``||corgio:make camera follow myCorg left and right||`` <br/>
and put it somewhere under <br/>
``||variables(noclick):set myCorg to||``.



#### ~ tutorialhint

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level_0`)
//@highlight
myCorg.cameraFollow()
```

## {Step 7}

At the end of the tilemap, we need a column that is a different tile than the other tiles in the map.
This will represent the goal for the player.

---

- :mouse pointer: Click on the tilemap icon inside of the <br/>
``||scene(noclick):set tilemap to||`` <br/>
block that's in the workspace. 

- :paint brush: Add a complete column of tiles that aren't used anywhere else in the 
game...but **don't** add a wall overlay!  The corgi needs to be able to go through these tiles.  


![Animation showing completion of this step](/static/tutorials/simple-extensions/corgi-column.gif)



#### ~ tutorialhint

![Animation showing completion of this step](/static/tutorials/simple-extensions/corgi-column.gif)



## {Step 8}

Let's trigger a **WIN** when the corgi gets to the new column.

---

- :tree: Open ``||scene:Scene||`` and add <br/>
``||scene:on sprite of kind Player overlaps [ ] at location||``<br/>
to the workspace. 

- :mouse pointer: Click the checkered tile and find the tile you used as a goal.

- :circle: Inside of the overlap event container, add a<br/>
``||game:game over <LOSE>||``<br/>
block.

- :mouse pointer:  Click ``LOSE`` to change it to ``WIN``.


#### ~ tutorialhint

```blocks
//@highlight
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.cameraFollow()
tiles.setTilemap(tilemap`level_1`)
```

## {Complete}

**Congratulations!! Your simple platformer is complete! **

See if you can get to the column at the end of the level.



```blockconfig.global

tiles.setTilemap(tilemap`level_0`)

```


```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.oceanDepths4",
            "sprites.builtin.oceanDepths0"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMDIwMjAwMDMwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDIwMjAyMDIwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMDAyMDIyMjIwMjAwMDAwMDIwMDAwMDAwMDAwMDAwMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAyMjIyMjIyMjIyMjIwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.oceanDepths4",
            "sprites.builtin.oceanDepths0",
            "sprites.builtin.coral0"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```

```package
corgio
```
