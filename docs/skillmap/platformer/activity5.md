# Enemy AI

### @autoexpandOff true

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAADMzMzMzMzMzLy7u7u7u7vLvMvMzMzMvMu8vMzMzMzLy7zMy8zMvMzLvMy8zMzLzMu8zMzLvMzMy7zMzLzLzMzLvMzMvMvMzMu8zMzLvMzMy7zMvMzMy8zLvMzLzMy8zMu8vMzMzMzLy7zLzMzMzLzLvLu7u7u7u8vMzMzMzMzMzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAAiIiIiIiIiIkJEREREREQkQiIiIiIiIiRCIiIiIiIiJEIiREQiIiIkQkJERCIkJCRCQiREJCQkJEJCREQiQiIkQkJERCRCIiRCQiREIiQkJEIiREQkJCQkQiIiIiIiIiRCIiIiIiIiJEIiIiIiIiIkQkRERERERCQiIiIiIiIiIg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAAB3d3d3d3d3d1dVVVVVVVV1V3d3d3d3d3VXd3d3d3d3dVdXVVVVVXd1V1dXV3d3d3VXV3VVd3d3dVdXV1d3d3d1V3d1dXV3d3VXd1VXdXd3dVd3dXV1d3d1V3dVVXV3d3VXd3d3d3d3dVd3d3d3d3d1V1VVVVVVVXV3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile4": {
        "data": "hwQQABAAAABERERERERERFRVVVVVVVVFVEREREREREVURFRFRERERVRERVRERERFVFRVVUVEREVUVFVVVURFRVRUVVVVVUVFVFRVVVVVRUVUVFVVVURFRVRUVVVFRERFVERFVEREREVURFRFRERERVRERERERERFVFVVVVVVVUVERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile5": {
        "data": "hwQQABAAAACqqqqqqqqqqrq7u7u7u7uruqqqqqqqqqu6qqqqqqqqq7qqqqqqqqqruqqqqqqqqqu6qrurqqqqq7q6u7u7uqururq7u7u6q6u6qrurqqqqq7qqqqqqqqqruqqqqqqqqqu6qqqqqqqqq7qqqqqqqqqruru7u7u7u6uqqqqqqqqqqg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level0": {
        "id": "level0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxZTAwMGEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDAwMDAwMDAwMDAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMDAwMDEwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjIwMjIwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIwMjAwMDAwMjAwMDAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5"
        ],
        "displayName": "level0"
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxZTAwMGEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDAwMDAwMDAwMDAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMDAwMDEwNTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDUwMDAwMDAwMDAwMDUwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMjIwMjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIwMjAwMDAwMDAwMDAyMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5",
            "myTiles.tile2"
        ],
        "displayName": "platformer1"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```


```template
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    startNextLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
function startNextLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    currentLevel += 1
    if (currentLevel == 1) {
        scene.setBackgroundColor(11)
        tiles.setTilemap(tilemap`level`)
    } else if (currentLevel == 2) {
        scene.setBackgroundColor(9)
        tiles.setTilemap(tilemap`level`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(mySprite, myTiles.tile3)
    for (let value of tiles.getTilesByType(myTiles.tile5)) {
        myEnemy = sprites.create(img`
            a a a a a a a a a a a a a a a a
            a b b b b b b b b b b b b b b a
            a b a a a a a a a a a a a a b a
            a b a a b b a a a a b b a a b a
            a b a a a a b a a b a a a a b a
            a b a a a a a a a a a a a a b a
            a b a a a b a a a a b a a a b a
            a b a a a b a a a a b a a a b a
            a b a a a a a a a a a a a a b a
            a b a a a a a a a a a a a a b a
            a b a a a b b b b b b a a a b a
            a b a a b a a a a a a b a a b a
            a b a a a a a a a a a a a a b a
            a b a a a a a a a a a a a a b a
            a b b b b b b b b b b b b b b a
            a a a a a a a a a a a a a a a a
            `, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value)
        myEnemy.follow(mySprite, 30)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.y) {
        sprite.vy = -100
    } else {
        info.changeLifeBy(-1)
    }
})
let myEnemy: Sprite = null
let currentLevel = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 1 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 3 1 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 1 1 1 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `, SpriteKind.Player)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
startNextLevel()

```

## Start @showdialog

Did you feel like the enemies in your last game were a little...well...stupid?

In this lesson we'll learn how to make enemies smarter using simple [_**AI**_](#fakeSmart "artificial intelligence").

![Levels and Functions](/static/skillmap/platformer/platformer5.gif "And now for something completely different!  And a little bit the same.")



## AI Rules @showdialog

The code for this program spawns enemies from the purple **[ ! ]** tiles.
Once the enemies spawn, they immediately start moving to the left and get
stuck on a wall...so, let's add logic to prevent the enemies from getting stopped.

---

**The enemies will need to follow two rules:**

1. **If the enemy is about to run into a wall, it will try to jump over it**
2. **If the enemy does hit a wall, it will turn around**


---


Each of these rules has a *condition* and an *action*.

If the condition is met, the action will happen.
We'll need to write code to constantly check for each of these conditions.

## Looping pt. 1

To get started, we'll need an **on game update** container to trigger code
every time something in the game changes. Inside, we'll need a loop to check on
each of the enemies, one-by-one.

---


► Drag out an ``||game:on game update||`` block and place it on the workspace.

► Snap a ``||loops: for element [value] of [list]||`` block into the
**on game update** container.

```blocks
let list: number[] = [];
game.onUpdate(function () {
    for (let value of list) {
    }
})
```

## Looping pt. 2

On each update, we want our loop to check on every enemy in the game.
To do this, we'll use the same method as in previous tutorials.

---


► From the ``||sprites:Sprites||`` category, grab the ``||sprites:array of sprite of kind||``
block from inside the **set sprite list to** block.


► Drop it into the **for element** loop to replace the ``||variables(noclick): list||`` variable.

► Change the "kind" dropdown to **Enemy**.


```blocks
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
    }
})
```

## Jumping pt. 1

Let's start the code for our first rule:

> 1. **If the enemy is about to run into a wall, it will try to jump over it**

---


► We're going to need to check **if** something is true. To do that, drag
an ``||logic: if <true> then||`` logic container into the empty **on game update** container.

► Now make sure the enemy isn't already jumping by replacing
``||logic: <true>||`` with ``||scene: is [mySprite] hitting wall [left]||`` in the empty
**if/then** header.

► Replace ``||variables(noclick): mySprite||`` with ``||variables(noclick): value||`` to make sure
it's checking the current enemy.

► Change **left** to **bottom** to check that the bottom of the sprite is on the ground.


```blocks
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {

        }
    }
})
```

## Jumping pt. 2

Now that we know the enemy is on the ground, we will have two conditions
when it needs to jump.
 - If it's moving to the left and there's a wall to the left
 - If it's moving to the right and there's a wall to the right

We'll figure out whether either situation is happening using a new **if/then** statement.

---


► Drag out another ``||logic:if <true> then||`` block and place it inside of the
empty one already in the **for element** loop.

► To check whether two things are true at the same time (moving left **and** wall to the left),
pull a ``||logic: < > and < >||`` in to replace the ``||logic:<true>||`` argument
in the new **if/else** statement.

► In the right blank (to the right of the **and**) snap a ``||scene: tile to the [left] of [mySprite] is [ ]||``

► Replace ``||variables(noclick): mySprite||`` with ``||variables(noclick): value||`` and replace the blank
tile with the **[X]**.

► Pop a ``||logic: [0] [<] [0]||`` block to the left of the **and**.

---

We'll do more with that in the next step.


```blocks
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (0 < 0 && value.tileKindAt(TileDirection.Left, myTiles.tile1)) {

            }
})
```

## Jumping pt. 3

We're already checking to see if the next tile to the left is a wall,
but that only matters if the enemy is traveling left.

Let's add the code to see if the enemy is moving left.

---

In the Arcade system, left is negative and right is positive. To check that the
sprite is moving left, you must make sure its velocity in the x direction
is negative.

► Grab a ``||sprites: [mySprite] [x]||`` argument block to replace the
first **0** in ``||logic: [0] [<] [0]||``.

► Replace ``||variables(noclick): mySprite||`` with ``||variables(noclick): value||`` and replace
**x** with **vx (velocity x)**.



```blocks
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && value.tileKindAt(TileDirection.Left, myTiles.tile1)) {
            }
        }
    }
})
```


## Jumping pt. 6

If the computer gets to this point in the code, it means it's time for the
enemy to jump.

---


► Inside the newly built **if/then** statement, connect a ``||sprites:set [mySprite] [x] to [0]||`` block.

► Replace ``||variables(noclick): mySprite||`` with ``||variables(noclick): value||`` and replace
``||sprites: x||`` with ``||sprites: vy (velocity y)||``.

► Change **0** to **-150**.


```blocks
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && value.tileKindAt(TileDirection.Left, myTiles.tile1)) {
                value.vy = -150
            }
    }
})
```


## Jumping pt. 7

Next, we'll add the code to do the same thing to the right.

---


► Click twice on the **⊕** button at the bottom of the innermost **if/then**
statement that we've just completed, to add an **else** then an **else if** clause.

► Duplicate the entire **and** statement, then drop the duplicate into the
header of the **else if** clause.

► In the new clause, change **<** to **>** and **left** to **right**.

► Duplicate the ``||sprites:set [value] [vy (velocity y)] to [-150]||`` block
and snap the copy inside the empty **else if** statement.

► We're done with this **if/else if** statement now, so you can click the
**⊖** beside the empty **else** clause to remove it from the block.



```blocks
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && value.tileKindAt(TileDirection.Left, myTiles.tile1)) {
                value.vy = -150
            } else if (value.vx > 0 && value.tileKindAt(TileDirection.Right, myTiles.tile1)) {
                value.vy = -150
            }
        }
    }
})
```


## Wall bouncing pt. 1

We've completed the code for rule #1, now let's take a look at rule #2.

> 2. **If the enemy does hit a wall, it will turn around**


---

The case for an enemy not running into a wall while traveling on the ground has been handled.
Next, we need to add cases for when an enemy runs into a wall on the left or right
while it's already trying to jump.

► Click three times on the **⊕** button at the bottom of the outermost **if/then**
statement (**if <is value hitting wall bottom> then**) to add an **else** and two **else if** clauses.

► Duplicate the ``||scene: is [value] hitting wall [bottom]||`` argument twice and
place a copy in each of the new **else if** headers.

► Change **bottom** to **left** in the first **else if**.

► Change **bottom** to **right** in the second **else if**.

► Click the
**⊖** beside the empty **else** clause to remove it from the block.


```blocks
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && value.tileKindAt(TileDirection.Left, myTiles.tile1)) {
                value.vy = -150
            } else if (value.vx > 0 && value.tileKindAt(TileDirection.Right, myTiles.tile1)) {
                value.vy = -150
            }
        } else if (value.isHittingTile(CollisionDirection.Left)) {

        } else if (value.isHittingTile(CollisionDirection.Right)) {

        }
    }
})
```

## Wall bouncing pt. 2

Finally, we need to add the code to make the enemies turn right if they were
going left and left if they were going right.

---


► Make two duplicates of one of the ``||sprites:set [value] [vy (velocity y)] to [-150]||`` blocks from the original **if/then**
clause and snap one into each of the empty **else if** clauses.

► For the **set value** block inside the first **else if** clause
(**else if <is value hitting wall left> then**), change
**vy (velocity y)** to **vx (velocity x)** and change **-150** to **30**.

► For the **set value** block inside the second **else if** clause
(**else if <is value hitting wall right> then**), change
**vy (velocity y)** to **vx (velocity x)** and change **-150** to **-30**.


```blocks
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && value.tileKindAt(TileDirection.Left, myTiles.tile1)) {
                value.vy = -150
            } else if (value.vx > 0 && value.tileKindAt(TileDirection.Right, myTiles.tile1)) {
                value.vy = -150
            }
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 30
        } else if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -30
        }
    }
})
```



##Finale

🔥 **That's it! Now give your game a try!** 🔥

Click **Done** to return to the main page where you can share your game
with family and friends!

---

Arcade has many options that haven't been explored here.  If you have time,
you should return to the main Arcade page and play with our full editor
to make a game all of your own!