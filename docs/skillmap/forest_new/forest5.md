# Head's Up
### @explicitHints true


## Welcome @showdialog

Computer science is more important to firefighting than ever before.

Let's add a heads-up-display (HUD) to help the pilot get information from their fire database in real-time.

![A HUD can help keep you informed](/static/skillmap/forest/forest5.gif "Look what we're about to do!")



## 2. Remember

**🎮 Try your game**

---

You should be able to press the (A) button to put out fires that pop-up across the map. You should also have three variables you can change to fine-tune how quickly the fires spread.

Can you remember which lines of code create each action?



## 3. Look Up

A HUD (heads-up-display) will help the pilot see how many fires are burning at any moment.

---

- :binoculars: From ``||hud:HUD||``, grab
```block
hud.fire_hud(true)
```
and add it to **the end** of the<br/>
``||loops(noclick): on start||``<br/>
container already in the workspace.



#### ~ tutorialhint
```blocks
namespace SpriteKind {
    export const Water = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const Burnt = SpriteKind.create()
}

game.set_health_of_trees(7)
game.set_strength_of_wind(3)
game.set_dryness_of_grass(3)
tiles.setTilemap(tilemap`level1`)
let myPlane = sprites.create(forest_imgs.Fire_Plane_2_Right, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)

for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
//@highlight
hud.fire_hud(true)

```


## 4. Test

- :binoculars: Try your project in the game window. Make sure to expand the simulator if it's too small. 

---

Is the game any easier when you know there are still fires left?



## 5. Fire Danger

Anticipate how quickly fires will spread with the **Fire Danger HUD**.

---

- :binoculars: From ``||hud:HUD||``, add
```block
hud.danger_hud(true)
```
to **the end** of the<br/>
``||loops(noclick): on start||``<br/>
container so you know how quickly your fires are likely to spread.


#### ~ tutorialhint
```blocks
namespace SpriteKind {
    export const Water = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const Burnt = SpriteKind.create()
}

game.set_health_of_trees(7)
game.set_strength_of_wind(3)
game.set_dryness_of_grass(3)
tiles.setTilemap(tilemap`level1`)
let myPlane = sprites.create(forest_imgs.Fire_Plane_2_Right, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)

for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
hud.fire_hud(true)
//@highlight
hud.danger_hud(true)
```


## 6. Healthy Forests

The crew needs to know the progress of the fire. Add another hud
to share information on how much of the forest is still healthy.

---

- :binoculars: Grab the the
```block
hud.forest_hud(true)
```
block and add it to **the end** of the<br/>
``||loops(noclick): on start||``<br/>
container to show how much of the forest remains.


#### ~ tutorialhint
```blocks
namespace SpriteKind {
    export const Water = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const Burnt = SpriteKind.create()
}

game.set_health_of_trees(7)
game.set_strength_of_wind(3)
game.set_dryness_of_grass(3)
tiles.setTilemap(tilemap`level1`)
let myPlane = sprites.create(forest_imgs.Fire_Plane_2_Right, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)

for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
hud.fire_hud(true)
hud.danger_hud(true)
//@highlight
hud.forest_hud(true)
```

## 7. Test Again

- :binoculars: Test your game again.

---

Now you can see how quickly you're making progress.
But the colors of the forest meter don't seem to represent the forest well.
You can customize those in the next step.



## 8. Customize

Take a look at the rest of the blocks in the **HUD** category. Use as many as you want
to customize your game screen!



#### ~ tutorialhint
```blocks

namespace SpriteKind {
    export const Water = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const Burnt = SpriteKind.create()
}

game.set_health_of_trees(7)
game.set_strength_of_wind(3)
game.set_dryness_of_grass(3)
tiles.setTilemap(tilemap`level1`)
let myPlane = sprites.create(forest_imgs.Fire_Plane_2_Right, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)

for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
hud.fire_hud(true)
hud.forest_hud(true)
hud.danger_hud(true)
hud.forest_hud_healthy(3)
hud.forest_hud_burned(4)
hud.forest_hud_label ("Forest Remaining")
hud.fire_hud_label ("Hot:")
```


## 9. Play

**🎮 Time to play your game!**

---

Is the fire spreading too quickly?
Try reducing the wind or the dryness of the grass.

What happens when you bump the numbers all the way up to 10 or all the way down to 0?




## Finale

👏 **You've done it!**

---

Congratulations on your game!

✈️🔥

When you're done playing, you can click **"Done"**
and head back out to the skillmap to share it with friends or save it in your gallery.



```blockconfig.global
let myPlane = sprites.create(forest_imgs.Fire_Plane_2_Right, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(myPlane, forest_imgs.water)
})

tiles.setTileAt(location, assets.tile`transparency16`)
sprites.set_flame_strength(location, 5)

scene.onOverlapTile(SpriteKind.Water, assets.tile`transparency16`, function (sprite, location) {
sprites.change_flame_strength_by(location, -1)
sprite.destroy() })

sprites.on_fire_destroyed(function (location) {
    scene.clearParticleEffectsAtLocation(location)
})
game.onUpdate(function () {
    sprites.random_spread()
})
```



```template
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(myPlane, forest_imgs.water)
})

game.set_health_of_trees(7)
game.set_strength_of_wind(3)
game.set_dryness_of_grass(3)
let myPlane = sprites.create(forest_imgs.Fire_Plane_2_Right, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)

for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}

sprites.on_fire_created(function (location) {
    scene.createParticleEffectAtLocation(location, effects.fire)
    sprites.set_flame_strength(location, 5)
})

scene.onOverlapTile(SpriteKind.Water, assets.tile`tree fire`, function (sprite, location) {
    sprite.destroy()
    sprites.change_flame_strength_by(location, -1)
})
sprites.on_fire_destroyed(function (location) {
    scene.clearParticleEffectsAtLocation(location)
    tiles.setTileAt(location, assets.tile`burnt tree`)
})
game.onUpdate(function () {
    sprites.random_spread()
})
```



```package
pxt-arcade-forest-fire=github:microsoft/arcade-forest-fire
forest_imgs=github:kiki-lee/forest_imgs
```


```customts
tiles.setTilemap(tilemap`level1`)
```

```assetjson
{
  "README.md": " This is the image pack for \"Save the Forest.\"\n ",
  "assets.json": "",
  "images.g.jres": "{\n    \"a5zAhGKtmEx`ww9FE(zZ\": {\n        \"data\": \"hwQEAAQAAACQCQAAmZkAAJmZAACQCQAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"water\"\n    },\n    \"image2\": {\n        \"data\": \"hwQYAAwAAAAAAPAPAAAAAAAAgA8AAAAA8P+PDwAAAACAuIsPsPsAAACIiw+/+AAAAICI+7v4AAAAAIi7u/gAAAAAuLu7+AAAAAC4u4v5AAAA8Li7iA8AAADwuIv4AAAAAI+4i/8PAAAAj7u7+wwAAPCLu7v4AAAAv/u7ufgPAAC/+7u5+AwAAL/7u734AAAAv/+7vfgAAACfj7+9+AAAAP8AH7v4AAAAAAC/uw8AAAAAAL+LDwAAAAAA8PsAAAAAAADwDwAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fire Plane Right\"\n    },\n    \"image7\": {\n        \"data\": \"hwQYAAwAAAAAAPAPAAAAAAAA8PsAAAAAAAC/iw8AAAAAAL+7DwAAAP8AH7v4AAAAn4+/vfgAAAC//7u9+AAAAL/7u734AAAAv/u7ufgMAAC/+7u5+A8AAPCLu7v4AAAAAI+7u/sMAAAAj7iL/w8AAADwuIv4AAAAAPC4u4gPAAAAALi7i/kAAAAAuLu7+AAAAACIu7v4AAAAgIj7u/gAAACIiw+/+AAAgLiLD7D7AADw/48PAAAAAAAAgA8AAAAAAADwDwAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fire Plane Left\"\n    },\n    \"image1\": {\n        \"data\": \"hwQYABAAAAAAAAD/AAAAAAAAwPIAAAAA/P8s8gAAAABMIi/yzAwAAEwkIvwswgAAwEQizCzCAAAATCzMIsIAAADALMwixP8AAMAiLEL0/w8AwCIsQvz/DwAvIixE//8PAC8iwiT/Ig8ALyIiIszMD/AsIiIi8sIP8EyyKSLy/wDPTBIpIvIAAM9MEiEi8gAALy8bISLyAAAvz5khIvIAAP/PmSsi8gAA/wCcKyIPAAAAAMAiIg8AAAAAACzyAAAAAAAAwA8AAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fire Plane 2 Right\"\n    },\n    \"image4\": {\n        \"data\": \"hwQYABAAAAAAAADADwAAAAAAACzyAAAAAADAIiIPAAD/AJwrIg8AAP/PmSsi8gAAL8+ZISLyAAAvLxshIvIAAM9MEiEi8gAAz0wSKSLyAADwTLIpIvL/APAsIiIi8sIPAC8iIiLMzA8ALyLCJP8iDwAvIixE//8PAMAiLEL8/w8AwCIsQvT/DwDALMwixP8AAEwszCLCAADARCLMLMIAAEwkIvwswgAATCIv8swMAAD8/yzyAAAAAAAAwPIAAAAAAAAA/wAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fire Plane 2 Left\"\n    },\n    \"image5\": {\n        \"data\": \"hwQkABQAAAAAAAAA//8PAAAAAAAAAAAA9v8PAAAAAAAAAAAAYP8PAAAAAAAAAAAAAPYPAAAAAAAAAAAAAPAPAAAAAAAAAAAAAPAPAAAAAAAAAAAAAPAPAAAAAAAADQAAAPAPAAAAAAAADQAAAPD/AAAAAAAQDQAAAP//AAAAAAAQDQAAAP//DwAAAAAQDQAA/4//DwAAAAAQDQDwZob4/wAPAAAQDQBvhoiI/wAPAAAQDfBmYYiB/wAPAAAQDW8YFoiI+AAPAAAQ8IZogYaI+P8PAAAQYGZmZoiB+AAPAAAQ8GZmZoaI+AAPAAAQYGZmhoiI+AAPAADd/Zaf//j/+AAPAAAd3ZmZiYb4+AAPAADQ8JmZmYj4+AAPAADQ0NmZmYaP+AAPAADQ8JmZmfiI+AAPAADQ8JadmYiI+P8PAADRAG+ZmWiI+AAPAADRAPCWaYiG//APAADRAABvhoiID/APAADRAADwZoj4APAPAADRAAAA//8PAAAAAADRAAAAAAAAAAAAAADRAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fire Helicopter Right\"\n    },\n    \"image6\": {\n        \"data\": \"hwQkABQAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAADRAAAAAAAAAAAAAADRAAAAAAAAAAAAAADRAAAA//8PAAAAAADRAADwZoj4APAPAADRAABvhoiID/APAADRAPCWaYiG//APAADRAG+ZmWiI+AAPAADQ8JadmYiI+P8PAADQ8JmZmfiI+AAPAADQ0NmZmYaP+AAPAADQ8JmZmYj4+AAPAAAd3ZmZiYb4+AAPAADd/Zaf//j/+AAPAAAQYGZmhoiI+AAPAAAQ8GZmZoaI+AAPAAAQYGZmZoiB+AAPAAAQ8IZogYaI+P8PAAAQDW8YFoiI+AAPAAAQDfBmYYiB/wAPAAAQDQBvhoiI/wAPAAAQDQDwZob4/wAPAAAQDQAA/4//DwAAAAAQDQAAAP//DwAAAAAQDQAAAP//AAAAAAAADQAAAPD/AAAAAAAADQAAAPAPAAAAAAAAAAAAAPAPAAAAAAAAAAAAAPAPAAAAAAAAAAAAAPAPAAAAAAAAAAAAAPYPAAAAAAAAAAAAYP8PAAAAAAAAAAAA9v8PAAAAAAAAAAAA//8PAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fire Helicopter Left\"\n    },\n    \"anim1\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim1\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YmMwMjE4MDAxMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDA5ZmJiYmIwZjAwMDAwMDAwZjgwMDAwMDBmMGJmYmJmYjBmMDAwMDgwZjgwMDAwMDA4MGZmZmY4OGY4MGYwMDg4ZmIwMDAwZmZmZmJiYmJiYjg4ODg4OGI4ZmIwMGZmYmJiMWJiYmJiYmJiYmI4Yjg4ODhmOGJmYmJkYmRkOTliYmJiYmJiYmZiZmZmZmYwYjhiYmJiYmJiYjg4YmJiYjBmMDAwMDAwZmY4ODg4ODhiODhmYjhiYmZiMDAwMDAwMDBmZmZmZmZmZmZmODhiYmJiMGIwMDAwMDAwMDAwZmNjMDBmOWY4ODg4MGIwMDAwMDAwMDAwMDAwMDAwZjBmZmZmMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZmZmYwMDAwMDAwMDAwZjgwMDAwMDA5ZmJiYmJmZjAwMDAwMDgwZjgwMDAwMDA4MGZmZmZmZjBmMDAwMDg4ZmIwMDAwZmZmZmJiYmJiYmZmODg4OGI4ZmIwMGZmYmJkYjk5OTliYmJiYmI4Yjg4ODhmOGJmYmJiYmJiYmJiYmJiYmJiYmZiZmZmZmYwYjhiYmJiYmJiYjg4YjhiYmZiMDAwMDAwZmY4ODg4ODhiODhmODhiYmJiMGIwMDAwMDBmZmZmZmZmZmZmOWY4ODg4MGIwMDAwMDAwMDAwZmNjMDBmZjBmZmZmMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"Fire Plane Left Animation\"\n    },\n    \"anim2\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim2\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YmMwMjE4MDAxMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmMDAwMDAwOGYwMDAwMDAwMGYwYmJiYmY5MDAwMDAwOGYwODAwMDBmMGJmYmJmYjBmMDAwMDAwYmY4ODAwZjA4Zjg4ZmZmZjA4MDAwMDAwYmY4Yjg4ODg4OGJiYmJiYmZmZmYwMDhmODg4OGI4YmJiYmJiYmJiYjFiYmJmZmZmZmZiZmJiYmJiYmJiOTlkZGJkYmJmYjAwMDBmMGJiYmI4OGJiYmJiYmJiOGIwZjAwMDBiZmJiOGJmODhiODg4ODg4ZmYwMDAwYjBiYmJiODhmZmZmZmZmZmZmMDAwMDAwYjA4ODg4ZjlmMDBjY2YwMDAwMDAwMDAwZjBmZmZmMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOGYwMDAwMDAwMDAwZmZmZmZmMDAwMDAwOGYwODAwMDAwMGZmYmJiYmY5MDAwMDAwYmY4ODAwMDBmMGZmZmZmZjA4MDAwMDAwYmY4Yjg4ODhmZmJiYmJiYmZmZmYwMDhmODg4OGI4YmJiYmJiOTk5OWJkYmJmZmZmZmZiZmJiYmJiYmJiYmJiYmJiYmJmYjAwMDBiZmJiOGI4OGJiYmJiYmJiOGIwZjAwYjBiYmJiODhmODhiODg4ODg4ZmYwMDAwYjA4ODg4ZjlmZmZmZmZmZmZmMDAwMDAwZjBmZmZmMGZmMDBjY2YwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"Fire Plane Right Animation\"\n    },\n    \"anim4\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim4\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YmMwMjE4MDAxMDAwMDIwMDAwMDBmZmZmZmYwMDAwMDAwMGMwY2MwMDAwMDBmZjIyY2MwZjAwMDAwMGNjZjQwMDAwMDBmMGNmY2NmY2ZmMDBjMDRjZjQwMDAwMDBjYzQyNDQyMjIyY2NjYzQ0ZjIwMDAwYzBiOTQ0MjIyMjIyMjJjYzI0ZjIwMDAwOWM5OTJiMjIyMjIyMjIyMjIyY2YwMGMwYjI5OTExYjEyMjIyMjIyMmMyMjIwYzJjMjIxYjExOTkyMjIyY2NjY2NjMmNmMjJmMjIyMjIyMjIyMmMyMjJjMmZjZmZmZmYwMjIyMjIyMjIyMjQ0MjIyMjBmMDAwMDAwZmYyMjIyMjJjMjRmMjQyMmYyMDAwMDAwMDBmZmZmZmZmZmZmNDQyMjIyMGMwMDAwMDAwMDAwZjBjMmZmY2YyMjIyMGMwMDAwMDAwMDAwZjBjY2YyZmZmZmZmMGYwMDAwMDAwMDAwMDBjZmYyZmYwZjAwMDAwMDAwMDAwMDAwMDBmMGZmZmYwMDAwMDAwMDAwZjBmZmZmMGYwMDAwMDAwMGMwY2MwMDAwZjAyZmMyZmMwZjAwMDAwMDRjZjQwMDAwMDBmZmNmY2NmY2ZmMDBjMDQ0ZjIwMDAwMDBjYzQyNDQyMjIyY2M0YzI0ZjIwMDAwYzA5OTJiMjIyMjIyMjJjYzIyY2YwMDAwOWM5OTExYjEyMjIyMjIyMjIyMjIwY2MwYjIxYjExOTkyMmMyY2NjY2NjMjJmMjJjMjIyMjIyMjIyMjJjMjJjY2ZjZmZmZjJmMjIyMjIyMjIyMjQ0MjIyMmNjMGMwMGYwMjIyMjIyMjIyMjQyNDQyMjIyMGMwMDAwZmYyMjIyMjJjMmZmNGMyNDIyMGMwMDAwMDBmZmZmZmZjZmZmZmZjY2NjMDAwMDAwMDAwMDAwZjBjMmYyZmYwZjAwMDAwMDAwMDAwMDAwZjBjY2YyZmYwZjAwMDAwMDAwMDAwMDAwMDBmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"Fire Plane 2 Left Animation\"\n    },\n    \"anim3\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim3\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YmMwMjE4MDAxMDAwMDIwMDAwY2MwYzAwMDAwMDAwZmZmZmZmMDAwMDAwNGZjYzAwMDAwMGYwY2MyMmZmMDAwMDAwNGZjNDBjMDBmZmNmY2NmYzBmMDAwMDAwMmY0NGNjY2MyMjIyNDQyNGNjMDAwMDAwMmY0MmNjMjIyMjIyMjI0NDliMGMwMDAwZmMyMjIyMjIyMjIyMjJiMjk5YzkwMGMwMjIyYzIyMjIyMjIyMWIxMTk5MmIwYzJmYzJjY2NjY2MyMjIyOTkxMWIxMjJjMmZmZmZjZjJjMjIyYzIyMjIyMjIyMjJmMjAwMDBmMDIyMjI0NDIyMjIyMjIyMjIwZjAwMDAyZjIyNDJmNDJjMjIyMjIyZmYwMDAwYzAyMjIyNDRmZmZmZmZmZmZmMDAwMDAwYzAyMjIyZmNmZjJjMGYwMDAwMDAwMDAwZjBmZmZmZmYyZmNjMGYwMDAwMDAwMDAwMDAwMGYwZmYyZmZjMDAwMDAwMDAwMDAwMDAwMDAwZmZmZjBmMDAwMDAwMDAwMDAwY2MwYzAwMDAwMDAwZjBmZmZmMGYwMDAwNGZjNDAwMDAwMGYwY2YyY2YyMGYwMDAwMmY0NDBjMDBmZmNmY2NmY2ZmMDAwMDAwMmY0MmM0Y2MyMjIyNDQyNGNjMDAwMDAwZmMyMmNjMjIyMjIyMjJiMjk5MGMwMGMwMjIyMjIyMjIyMjIyMWIxMTk5YzkwMDJmMjJjY2NjY2MyYzIyOTkxMWIxMmIwY2ZmZmZjZmNjMjJjMjIyMjIyMjIyMjJjMjAwYzBjYzIyMjI0NDIyMjIyMjIyMjJmMjAwYzAyMjIyNDQyNDIyMjIyMjIyMjIwZjAwYzAyMjQyYzRmZjJjMjIyMjIyZmYwMDAwMDBjY2NjZmZmZmZjZmZmZmZmMDAwMDAwMDAwMGYwZmYyZjJjMGYwMDAwMDAwMDAwMDAwMGYwZmYyZmNjMGYwMDAwMDAwMDAwMDAwMDAwZmZmZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"Fire Plane 2 Right Animation\"\n    },\n    \"anim6\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim6\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"MzIwMDI0MDAxNDAwMDkwMDEwMTExMTExMTEwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkZGRkZGRkZDExMTExMTExMTExMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDAwZGRkZGRkZGQwZDAwMDAwMDAwMDAwMDAwMDBmZmZkZmRmNmY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkZjk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5OTk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5Zjk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkZDExMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGRkZGRkZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZkZmRmNmY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkOTk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5Zjk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5OTk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZDFkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmY4ZjhmOGY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkOTk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5Zjk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5OTk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQxMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExZDFkZGRkMGQwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZkZmRmNmY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkOTk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5Zjk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5OTk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDAwMTExMTExMTEwMTAwMDAwMDAwMTAxMTExMTExMTExZDFkZGRkZGRkZGRkMGQwMDAwMDAwMGQwZGRkZGRkZGQwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZkZmRmNmY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkOTk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5Zjk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5OTk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQxMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExZDFkZGRkMGQwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZkZmRmNmY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkOTk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5Zjk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5OTk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQxMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExZDFkZGRkMGQwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZkZmRmNmY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkOTk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5Zjk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5Zjk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZDFkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmY4ZjhmOGY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkOTk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5Zjk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5OTk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkZDExMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGRkZGRkZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZkZmRmNmY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA5Njk5Njk2NjY2MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY5OTlkOTk2Njg2ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwOTY5ZDk5OTk2Njg2NjgwZjAwMDAwMDAwMDAwMDAwMDAwMDZmOTk5OTk5Zjk2NjY2NjFmNjAwMDAwMDAwMDAwMDAwMDBmMDY2OTk5OTk5Zjk2NjE2MTY2NjBmMDAwMDAwMDBmNjAwMDBmMDg2OTY5OTk5Zjg2ODg2NjE2ODBmMDAwMDAwNjBmZjAwMDBmMDg4ODg4ODg2ODY2ODY4ODg2OGZmMGYwMDAwZjZmZjAwMDBmMDg4NjhmODg4Zjg4ODg4ODg4OGY4ZmZmZmZmZmZmZjAwMDBmMDg4ODY4ODhmZjg4ODgxMTg4OGZmZmZmZmZmZmZmZjAwMDA4MDhmODg4OGY4ZmY4ODg4ODhmOGZmZmYwMDAwMDAwMDAwMDAwMGYwOGY4ODg4ODg4ODg4ZjhmZmZmMDAwMDAwMDAwMDAwMDAwMDAwZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmMGYwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"Fire Helicopter Left Animation\"\n    },\n    \"anim5\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim5\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"MzIwMDI0MDAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDAwMTExMTExMTEwMTAwMDAwMDAwMTAxMTExMTExMTExMWRkZGRkZGRkZGRkMGQwMDAwMDAwMGQwZGRkZGRkZGQwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2ZjZmZGZkZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA2NjY2OTY5OTY5MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY2ODY2OTlkOTk5ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwODY2ODY2OTk5OWQ5NjkwZjAwMDAwMDAwMDAwMDAwMDAwMDZmMTY2NjY2OWY5OTk5OTlmNjAwMDAwMDZmMDAwMDAwMDBmMDY2NjE2MTY2OWY5OTk5OTk2NjBmMDAwMGZmMDYwMDAwMDBmMDg2MTY2ODg2OGY5OTk5Njk2ODBmMDAwMGZmNmYwMDAwZjBmZjg2ODg4Njg2Njg2ODg4ODg4ODBmMDAwMGZmZmZmZmZmZmY4Zjg4ODg4ODg4OGY4ODhmODY4ODBmMDAwMGZmZmZmZmZmZmZmZjg4ODExODg4OGZmODg4Njg4ODBmMDAwMDAwMDAwMDAwZmZmZjhmODg4ODg4ZmY4Zjg4ODhmODA4MDAwMDAwMDAwMDAwMDBmZmZmOGY4ODg4ODg4ODg4ZjgwZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwZjBmZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQxMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExMWRkZGRkMGQwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2ZjZmZGZkZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA2NjY2OTY5OTY5MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY2ODY2OTlkOTk5ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwODY2ODY2OWY5OWQ5NjkwZjAwMDAwMDAwMDAwMDAwMDAwMDZmMTY2NjY2OTk5OTk5OTlmNjAwMDAwMDZmMDAwMDAwMDBmMDY2NjE2MTY2OWY5OTk5OTk2NjBmMDAwMGZmMDYwMDAwMDBmMDg2MTY2ODg2OGY5OTk5Njk2ODBmMDAwMGZmNmYwMDAwZjBmZjg2ODg4Njg2Njg2ODg4ODg4ODBmMDAwMGZmZmZmZmZmZmY4Zjg4ODg4ODg4OGY4ODhmODY4ODBmMDAwMGZmZmZmZmZmZmZmZjg4ODExODg4OGZmODg4Njg4ODBmMDAwMDAwMDAwMDAwZmZmZjhmODg4ODg4ZmY4Zjg4ODhmODA4MDAwMDAwMDAwMDAwMDBmZmZmOGY4ODg4ODg4ODg4ZjgwZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwZjBmZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkMWQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2ZjhmOGY4ZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA2NjY2OTY5OTY5MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY2ODY2OTlkOTk5ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwODY2ODY2OWY5OWQ5NjkwZjAwMDAwMDAwMDAwMDAwMDAwMDZmMTY2NjY2OTk5OTk5OTlmNjAwMDAwMDZmMDAwMDAwMDBmMDY2NjE2MTY2OWY5OTk5OTk2NjBmMDAwMGZmMDYwMDAwMDBmMDg2MTY2ODg2OGY5OTk5Njk2ODBmMDAwMGZmNmYwMDAwZjBmZjg2ODg4Njg2Njg2ODg4ODg4ODBmMDAwMGZmZmZmZmZmZmY4Zjg4ODg4ODg4OGY4ODhmODY4ODBmMDAwMGZmZmZmZmZmZmZmZjg4ODExODg4OGZmODg4Njg4ODBmMDAwMDAwMDAwMDAwZmZmZjhmODg4ODg4ZmY4Zjg4ODhmODA4MDAwMDAwMDAwMDAwMDBmZmZmOGY4ODg4ODg4ODg4ZjgwZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwZjBmZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkMWQxMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGRkZGRkZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2ZjZmZGZkZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA2NjY2OTY5OTY5MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY2ODY2OTlkOTk5ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwODY2ODY2OWY5OWQ5NjkwZjAwMDAwMDAwMDAwMDAwMDAwMDZmMTY2NjY2OWY5OTk5OTlmNjAwMDAwMDZmMDAwMDAwMDBmMDY2NjE2MTY2OTk5OTk5OTk2NjBmMDAwMGZmMDYwMDAwMDBmMDg2MTY2ODg2OGY5OTk5Njk2ODBmMDAwMGZmNmYwMDAwZjBmZjg2ODg4Njg2Njg2ODg4ODg4ODBmMDAwMGZmZmZmZmZmZmY4Zjg4ODg4ODg4OGY4ODhmODY4ODBmMDAwMGZmZmZmZmZmZmZmZjg4ODExODg4OGZmODg4Njg4ODBmMDAwMDAwMDAwMDAwZmZmZjhmODg4ODg4ZmY4Zjg4ODhmODA4MDAwMDAwMDAwMDAwMDBmZmZmOGY4ODg4ODg4ODg4ZjgwZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwZjBmZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTExMTExMTEwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkZGRkZGRkMWQxMTExMTExMTExMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDAwZGRkZGRkZGQwZDAwMDAwMDAwMDAwMDAwMDA2ZjZmZGZkZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA2NjY2OTY5OTY5MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY2ODY2OTlkOTk5ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwODY2ODY2OTk5OWQ5NjkwZjAwMDAwMDAwMDAwMDAwMDAwMDZmMTY2NjY2OWY5OTk5OTlmNjAwMDAwMDZmMDAwMDAwMDBmMDY2NjE2MTY2OWY5OTk5OTk2NjBmMDAwMGZmMDYwMDAwMDBmMDg2MTY2ODg2OGY5OTk5Njk2ODBmMDAwMGZmNmYwMDAwZjBmZjg2ODg4Njg2Njg2ODg4ODg4ODBmMDAwMGZmZmZmZmZmZmY4Zjg4ODg4ODg4OGY4ODhmODY4ODBmMDAwMGZmZmZmZmZmZmZmZjg4ODExODg4OGZmODg4Njg4ODBmMDAwMDAwMDAwMDAwZmZmZjhmODg4ODg4ZmY4Zjg4ODhmODA4MDAwMDAwMDAwMDAwMDBmZmZmOGY4ODg4ODg4ODg4ZjgwZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwZjBmZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBkZGRkMWQxMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGRkZGRkZGQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2ZjZmZGZkZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA2NjY2OTY5OTY5MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY2ODY2OTlkOTk5ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwODY2ODY2OWY5OWQ5NjkwZjAwMDAwMDAwMDAwMDAwMDAwMDZmMTY2NjY2OTk5OTk5OTlmNjAwMDAwMDZmMDAwMDAwMDBmMDY2NjE2MTY2OWY5OTk5OTk2NjBmMDAwMGZmMDYwMDAwMDBmMDg2MTY2ODg2OGY5OTk5Njk2ODBmMDAwMGZmNmYwMDAwZjBmZjg2ODg4Njg2Njg2ODg4ODg4ODBmMDAwMGZmZmZmZmZmZmY4Zjg4ODg4ODg4OGY4ODhmODY4ODBmMDAwMGZmZmZmZmZmZmZmZjg4ODExODg4OGZmODg4Njg4ODBmMDAwMDAwMDAwMDAwZmZmZjhmODg4ODg4ZmY4Zjg4ODhmODA4MDAwMDAwMDAwMDAwMDBmZmZmOGY4ODg4ODg4ODg4ZjgwZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwZjBmZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRkMWQwZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2ZjhmOGY4ZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA2NjY2OTY5OTY5MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY2ODY2OTlkOTk5ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwODY2ODY2OTk5OWQ5NjkwZjAwMDAwMDAwMDAwMDAwMDAwMDZmMTY2NjY2OWY5OTk5OTlmNjAwMDAwMDZmMDAwMDAwMDBmMDY2NjE2MTY2OWY5OTk5OTk2NjBmMDAwMGZmMDYwMDAwMDBmMDg2MTY2ODg2OGY5OTk5Njk2ODBmMDAwMGZmNmYwMDAwZjBmZjg2ODg4Njg2Njg2ODg4ODg4ODBmMDAwMGZmZmZmZmZmZmY4Zjg4ODg4ODg4OGY4ODhmODY4ODBmMDAwMGZmZmZmZmZmZmZmZjg4ODExODg4OGZmODg4Njg4ODBmMDAwMDAwMDAwMDAwZmZmZjhmODg4ODg4ZmY4Zjg4ODhmODA4MDAwMDAwMDAwMDAwMDBmZmZmOGY4ODg4ODg4ODg4ZjgwZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwZjBmZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZGQxMTExMTEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExMWRkZGRkMGQwMDAwMDAwMDAwMDAwMDAwMDAwMGQwZGRkZGRkZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2ZjZmZGZkZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjA2NjY2OTY5OTY5MGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNmY2ODY2OTlkOTk5ZjYwMDAwMDAwMDAwMDAwMDAwMDAwMGYwODY2ODY2OWY5OWQ5NjkwZjAwMDAwMDAwMDAwMDAwMDAwMDZmMTY2NjY2OTk5OTk5OTlmNjAwMDAwMDZmMDAwMDAwMDBmMDY2NjE2MTY2OWY5OTk5OTk2NjBmMDAwMGZmMDYwMDAwMDBmMDg2MTY2ODg2OGY5OTk5Njk2ODBmMDAwMGZmNmYwMDAwZjBmZjg2ODg4Njg2Njg2ODg4ODg4ODBmMDAwMGZmZmZmZmZmZmY4Zjg4ODg4ODg4OGY4ODhmODY4ODBmMDAwMGZmZmZmZmZmZmZmZjg4ODExODg4OGZmODg4Njg4ODBmMDAwMDAwMDAwMDAwZmZmZjhmODg4ODg4ZmY4Zjg4ODhmODA4MDAwMDAwMDAwMDAwMDBmZmZmOGY4ODg4ODg4ODg4ZjgwZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZjAwMDAwMGYwZjBmZjAwMDAwMDAwMDAwMDAwMDAwMGZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"Fire Helicopter Right Animation\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"a5zAhGKtmEx`ww9FE(zZ\":\n            case \"water\":return img`\n. 9 9 . \n9 9 9 9 \n9 9 9 9 \n. 9 9 . \n`;\n            case \"image2\":\n            case \"Fire Plane Right\":return img`\n. . . . . . . . . . . . . . f f f f f f . . . . \n. . f 8 . . . . . . . . . f b b b b 9 f . . . . \n. . f 8 8 . . . . . . f f b b b b f f . . . . . \n. . f b 8 8 . . . f f 8 8 8 f f f f 8 . . . . . \n. . f b b 8 8 8 8 8 8 8 b b b b b b f f f f . . \nf 8 8 8 8 8 8 b b b b b b b b b b b b 1 b b f f \nf f f f f b b b b b b b b b 9 9 d d d b b b b f \n. . . . . f b b b b 8 8 b b b b b b b b b 8 f . \n. . . . f b b b b 8 8 f b 8 8 8 8 8 8 8 f f . . \n. . . b b b b b 8 8 f f f f f f f f f f . . . . \n. . . b 8 8 8 8 9 f . f c . f c . . . . . . . . \n. . . f f f f f f . . . . . . . . . . . . . . . \n`;\n            case \"image7\":\n            case \"Fire Plane Left\":return img`\n. . . . f f f f f f . . . . . . . . . . . . . . \n. . . . f 9 b b b b f . . . . . . . . . 8 f . . \n. . . . . f f b b b b f f . . . . . . 8 8 f . . \n. . . . . 8 f f f f 8 8 8 f f . . . 8 8 b f . . \n. . f f f f b b b b b b 8 8 8 8 8 8 8 b b f . . \nf f b b 1 b b b b b b b b b b b b 8 8 8 8 8 8 f \nf b b b b d d d 9 9 b b b b b b b b b f f f f f \n. f 8 b b b b b b b b b 8 8 b b b b f . . . . . \n. . f f 8 8 8 8 8 8 8 b f 8 8 b b b b f . . . . \n. . . . f f f f f f f f f f 8 8 b b b b b . . . \n. . . . . . . . c f . c f . f 9 8 8 8 8 b . . . \n. . . . . . . . . . . . . . . f f f f f f . . . \n`;\n            case \"image1\":\n            case \"Fire Plane 2 Right\":return img`\n..ccc..........ffffff...\n..f44c.......ffcc22ff...\n..f244c...fffccccfff....\n..f2244ccc22224442cc....\n..cf22cc222222222b99c...\n.c222222222222b111999c..\nf222ccccccc22299111bb2c.\nfffffccc222c22222222222c\n...ccc22224422222222222f\n...c222244422222222222f.\n...c22244cffc2222222ff..\n....ccccffffcfffffff....\n.......ffff2c2f.........\n.......ffff2ccf.........\n........ffffff..........\n........................\n`;\n            case \"image4\":\n            case \"Fire Plane 2 Left\":return img`\n...ffffff..........ccc..\n...ff22ccff.......c44f..\n....fffccccfff...c442f..\n....cc24442222ccc4422f..\n...c99b222222222cc22fc..\n..c999111b222222222222c.\n.c2bb11199222ccccccc222f\nc22222222222c222cccfffff\nf22222222222442222ccc...\n.f222222222224442222c...\n..ff2222222cffc44222c...\n....fffffffcffffcccc....\n.........f2c2ffff.......\n.........fcc2ffff.......\n..........ffffff........\n........................\n`;\n            case \"image5\":\n            case \"Fire Helicopter Right\":return img`\n....................dd....111111111.\n.........11111111111d1ddddddddddd...\n.......ddddddddd....dd..............\n................f6f6fdfdff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f688666f9999d96f.......\n............f6616666999999996f......\nf6.........f66161666f999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f......\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`;\n            case \"image6\":\n            case \"Fire Helicopter Left\":return img`\n.111111111....dd....................\n...ddddddddddd1d11111111111.........\n..............dd....ddddddddd.......\n..........ffdfdf6f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d9999f666886f.............\n......f6999999996666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n......f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Fire Plane Left Animation\":\n            case \"anim1\":return [img`\n........................\n........................\n....ffffff..............\n....f9bbbbf.........8f..\n.....ffbbbbff......88f..\n.....8ffff888ff...88bf..\n..ffffbbbbbb8888888bbf..\nffbb1bbbbbbbbbbbb888888f\nfbbbbddd99bbbbbbbbbfffff\n.f8bbbbbbbbb88bbbbf.....\n..ff8888888bf88bbbbf....\n....ffffffffff88bbbbb...\n........cf.cf.f98888b...\n...............ffffff...\n........................\n........................\n`, img`\n........................\n........................\n........................\n....ffffff..........8f..\n....f9bbbbff.......88f..\n.....8fffffff.....88bf..\n..ffffbbbbbbff88888bbf..\nffbbbd9999bbbbbbb888888f\nfbbbbbbbbbbbbbbbbbbfffff\n.f8bbbbbbbbb888bbbbf....\n..ff8888888bf888bbbbb...\n....fffffffffff98888b...\n........cf.cf..ffffff...\n........................\n........................\n........................\n`];\n            case \"Fire Plane Right Animation\":\n            case \"anim2\":return [img`\n........................\n........................\n..............ffffff....\n..f8.........fbbbb9f....\n..f88......ffbbbbff.....\n..fb88...ff888ffff8.....\n..fbb8888888bbbbbbffff..\nf888888bbbbbbbbbbbb1bbff\nfffffbbbbbbbbb99dddbbbbf\n.....fbbbb88bbbbbbbbb8f.\n....fbbbb88fb8888888ff..\n...bbbbb88ffffffffff....\n...b88889f.fc.fc........\n...ffffff...............\n........................\n........................\n`, img`\n........................\n........................\n........................\n..f8..........ffffff....\n..f88.......ffbbbb9f....\n..fb88.....fffffff8.....\n..fbb88888ffbbbbbbffff..\nf888888bbbbbbb9999dbbbff\nfffffbbbbbbbbbbbbbbbbbbf\n....fbbbb888bbbbbbbbb8f.\n...bbbbb888fb8888888ff..\n...b88889fffffffffff....\n...ffffff..fc.fc........\n........................\n........................\n........................\n`];\n            case \"Fire Plane 2 Left Animation\":\n            case \"anim4\":return [img`\n....ffffff.........ccc..\n....ff22ccf.......cc4f..\n.....ffccccfff...cc44f..\n....cc24442222cccc442f..\n...c9b4422222222cc422f..\n..c999b2222222222222fc..\n.c2b99111b222222222c22c.\nc222b111992222ccccccc22f\nf222222222222c222ccfffff\n.f2222222222442222f.....\n..ff2222222cf442222f....\n....ffffffffff442222c...\n.........f2cfffc2222c...\n.........fcc2ffffffff...\n..........fc2ffff.......\n...........fffff........\n`, img`\n...ffffff..........ccc..\n...ff22ccff.......c44f..\n....fffccccfff...c442f..\n....cc24442222ccc4422f..\n...c99b222222222cc22fc..\n..c999111b222222222222c.\n.c2bb11199222ccccccc222f\nc22222222222c222cccfffff\nf22222222222442222ccc...\n.f222222222224442222c...\n..ff2222222cffc44222c...\n....fffffffcffffcccc....\n.........f2c2ffff.......\n.........fcc2ffff.......\n..........ffffff........\n........................\n`];\n            case \"Fire Plane 2 Right Animation\":\n            case \"anim3\":return [img`\n..ccc.........ffffff....\n..f4cc.......fcc22ff....\n..f44cc...fffccccff.....\n..f244cccc22224442cc....\n..f224cc2222222244b9c...\n..cf2222222222222b999c..\n.c22c222222222b11199b2c.\nf22ccccccc222299111b222c\nfffffcc222c222222222222f\n.....f2222442222222222f.\n....f222244fc2222222ff..\n...c222244ffffffffff....\n...c2222cfffc2f.........\n...ffffffff2ccf.........\n.......ffff2cf..........\n........fffff...........\n`, img`\n..ccc..........ffffff...\n..f44c.......ffcc22ff...\n..f244c...fffccccfff....\n..f2244ccc22224442cc....\n..cf22cc222222222b99c...\n.c222222222222b111999c..\nf222ccccccc22299111bb2c.\nfffffccc222c22222222222c\n...ccc22224422222222222f\n...c222244422222222222f.\n...c22244cffc2222222ff..\n....ccccffffcfffffff....\n.......ffff2c2f.........\n.......ffff2ccf.........\n........ffffff..........\n........................\n`];\n            case \"Fire Helicopter Left Animation\":\n            case \"anim6\":return [img`\n.111111111....dd....................\n...ddddddddddd1d11111111111.........\n..............dd....ddddddddd.......\n..........ffdfdf6f6f................\n.........f6999966666f...............\n........f699d99f66686f..............\n.......f69d99999666886f.............\n......f69999999f6666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`, img`\n........111111dd....................\n.........ddddd1d111111..............\n..............ddddddddd.............\n..........ffdfdf6f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d9999f666886f.............\n......f6999999996666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`, img`\n..............dd....................\n.............d1ddd..................\n............ddddd...................\n..........ff8f8f8f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d9999f666886f.............\n......f6999999996666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`, img`\n..............dd111111..............\n........1111111dddddd...............\n.......ddddddddd....................\n..........ffdfdf6f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d9999f666886f.............\n......f6999999996666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`, img`\n..............dd....111111111.......\n...111111111111dddddddddddd.........\n.ddddddddd....dd....................\n..........ffdfdf6f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d9999f666886f.............\n......f6999999996666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`, img`\n..............dd111111..............\n........1111111dddddd...............\n.......ddddddddd....................\n..........ffdfdf6f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d9999f666886f.............\n......f6999999996666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`, img`\n..............dd111111..............\n........1111111dddddd...............\n.......ddddddddd....................\n..........ffdfdf6f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d9999f666886f.............\n......f69999999f6666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`, img`\n..............dd....................\n.............d1ddd..................\n............ddddd...................\n..........ff8f8f8f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d9999f666886f.............\n......f6999999996666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`, img`\n........111111dd....................\n.........ddddd1d111111..............\n..............ddddddddd.............\n..........ffdfdf6f6f................\n.........f6999966666f...............\n........f699d99966686f..............\n.......f69d99999666886f.............\n......f69999999f6666166f............\n.....f669999999f66616166f.........6f\n.....f686999998f86681686f........6ff\n.....f888888686886868886fff.....6fff\n.....f88868f888f888888888fffffffffff\n.....f886888f88f88188188ffffffffffff\n.....8f888888fff8888888fffff........\n.......ff888888888888fffff..........\n........ffffffffffffffff............\n..........f........f................\n......fff.f........f................\n......ffffffffffffffffff............\n....................................\n`];\n            case \"Fire Helicopter Right Animation\":\n            case \"anim5\":return [img`\n....................dd....111111111.\n.........11111111111d1ddddddddddd...\n.......ddddddddd....dd..............\n................f6f6fdfdff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f68866699999d96f.......\n............f6616666f99999996f......\nf6.........f66161666f999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f8.....\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`, img`\n....................dd111111........\n..............111111d1ddddd.........\n.............ddddddddd..............\n................f6f6fdfdff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f688666f9999d96f.......\n............f6616666999999996f......\nf6.........f66161666f999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f8.....\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`, img`\n....................dd..............\n..................ddd1d.............\n...................ddddd............\n................f6f8f8f8ff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f688666f9999d96f.......\n............f6616666999999996f......\nf6.........f66161666f999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f8.....\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`, img`\n..............111111dd..............\n...............dddddd1111111........\n....................ddddddddd.......\n................f6f6fdfdff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f688666f9999d96f.......\n............f6616666f99999996f......\nf6.........f661616669999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f8.....\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`, img`\n.......111111111....dd..............\n.........dddddddddddd111111111111...\n....................dd....ddddddddd.\n................f6f6fdfdff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f68866699999d96f.......\n............f6616666f99999996f......\nf6.........f66161666f999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f8.....\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`, img`\n..............111111dd..............\n...............dddddd1111111........\n....................ddddddddd.......\n................f6f6fdfdff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f688666f9999d96f.......\n............f6616666999999996f......\nf6.........f66161666f999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f8.....\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`, img`\n....................dd..............\n..................ddd1d.............\n...................ddddd............\n................f6f8f8f8ff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f68866699999d96f.......\n............f6616666f99999996f......\nf6.........f66161666f999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f8.....\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`, img`\n....................dd111111........\n..............111111d1ddddd.........\n.............ddddddddd..............\n................f6f6fdfdff..........\n...............f6666699996f.........\n..............f68666999d996f........\n.............f688666f9999d96f.......\n............f6616666999999996f......\nf6.........f66161666f999999966f.....\nff6........f68618668f899999686f.....\nfff6.....fff688868688686888888f.....\nfffffffffff888888888f888f86888f.....\nffffffffffff88188188f88f888688f.....\n........fffff8888888fff888888f8.....\n..........fffff888888888888ff.......\n............ffffffffffffffff........\n................f........f..........\n................f........f.fff......\n............ffffffffffffffffff......\n....................................\n`];\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"New - Save the Forest Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.5.46\",\n        \"tag\": \"v1.5.46\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/4f3f29bef862bcab766a47e42db2d3ed6b0060b1\",\n        \"target\": \"1.5.46\",\n        \"pxt\": \"7.1.25\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"wall\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAABmZma8zGxmZmZmxsu7bGZmZma268zMbGZmZsXsxrtsZmZmzETCy2xmZmbL7sTMZmZmZcZOzrzMZmZmTOTkvMtmZma8VOTMzGZmZrwuzstsZmZmy07Cy2xmZmZL5MbMbGZmZsblvMxmZmZmxsu8zGZmZmZmzMtmZmZmZma8bGZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"firePit\"\n    },\n    \"tile8\": {\n        \"data\": \"hwQQABAAAABm5mZmZmb+bmZmZmZm5u5uZmb/Zmb2u/72Zr9vZr67+2Zm9vtmvfv7Zv///2+8vO/2u+6+/P///mb//+u+7O6+9mZmv+7u7v9mZmb27/7//mbWZu/+/7vvZmb2/m++y/tmZvZvZv67+2ZvZsZm5rv+Zu5vZmbm7v5m5mZmZmbmbg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"burnt tree\"\n    },\n    \"tile4\": {\n        \"data\": \"hwQQABAAAABmZmZmZmZmZmZmZkaIZmZmZmaGVXRoZGZmRnVGT0dm9mZmdOR+RGX7ZuZufudFZPtmZu52R1S270Ze/nREVf/+ZnfkdUdU5r5mdEZ05URm/2ZmdndPV2T+ZmV4bn5EZe9mZoZIdFhl+2ZmRlSFRmb2ZmZmRmVmZmZmZmZmZmZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tree fire\"\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAABmZmZmZmZmZmZmZoaIZmZmZmaGeHdoZmZmZndmdmdmZmaGdndmZ2ZmZnhmd2d3Zmxmd2d2Z3fGbHZ3Z3Znd+5sZndndmd3xm5meGZ3Z3dmbGaGdndmZ2ZmZmZ4ZnZnZmZmZoZ4d2hmZmZmZoaIZmZmZmZmZmZmZmZmZmZmZmZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tree\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMjAwMTIwMDAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\",\n            \"myTiles.tile3\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile8 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile4 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`12001200030303030303030303030303030303030303030101010101010101010101010101010103030101010101010101010101010101010103030102010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030303030303030303030303030303030303`, img`\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"wall\":\n            case \"tile3\":return tile3;\n            case \"firePit\":\n            case \"tile2\":return tile2;\n            case \"burnt tree\":\n            case \"tile8\":return tile8;\n            case \"tree fire\":\n            case \"tile4\":return tile4;\n            case \"tree\":\n            case \"tile1\":return tile1;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

