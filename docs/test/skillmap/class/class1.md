
# Miss Kiki's Class
### @explicitHints true

## Welcome to Miss Kiki's Class @showdialog

This is Miss Kiki's Class. Nothing ever feels quite normal in this school.


## {Step 2}

**Ready to start coding?**

Our main character is called a sprite. Let's create a student sprite and get them moving before we do anything else.


~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our "student" character will be a sprite, too.

hint~

- :paper plane: From the ``||sprites:Sprites||`` category, drag
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``
to **the end** of the ``||loops:on start||`` container.

- :mouse pointer: To add Jerry, click the empty grey box, then toggle to **My Assets** and click  **rockstar**.
![Toggle to My Assets](/static/skillmap/assets/my-assets-three.png "toggle to the My Assets Window")






```template
scene.setBackgroundColor(13)
tiles.setTilemap()
```


```ghost
let student = sprites.create(class_imgs.stand, SpriteKind.Player)
```


```package
pxt-tilemaps=github:microsoft/pxt-tilemaps
arcade-character-animations=github:microsoft/arcade-character-animations
stopwatch=github:kiki-lee/stopwatch#v0.0.3
class_imgs=github:kiki-lee/class_imgs
```

