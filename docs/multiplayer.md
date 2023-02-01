# Multiplayer

A multiplayer game is one where **2** or more (up to a maximum of **4**) players can play the same game together at the same time. A game session is started by a _host_ player and other players _join_ the game online with MakeCode's multiplayer game system. If a game is programmed using multiplayer controls, the game creator can choose to host a multiplayer game session and share the game's join code with other players.

## Creating a multiplayer game

A game becomes multiplayer enabled when one of the multiplayer blocks in the ``||controller:Controller||``  Toolbox category is used. If one of these blocks is present in your game code, you will have the option to host a multiplayer session when you share the game. A multiplayer game can have up to **4** players including the hosting player.

The following game called **Burger vs. Pizza** is a mulitplayer game because it uses multiplayer controller blocks to move the two player sprites.

```blocks
game.splash("Burger vs. Pizza")
let burger = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.Player)
burger.left = 0
let pizza = sprites.create(img`
    .............beebbbb............
    ............eebbbb4bb...........
    ............eb344bb4bb..........
    ............e44334bb4bb.........
    ............eb433344b4be........
    ............4eb43344444be.......
    ...........bd4eb43333344bb......
    ..........b455d4443333444bb.....
    ..........4d5555d444333444bb....
    .........4555555dd4b4443444be...
    ........bd5555d555d4bb444444ee..
    ........b55ddd665555bb4b44444ee.
    .......bd5555677655554ebb44444eb
    .......43222558855555d4eeb44b4ee
    ......b422332ddd555222d4eebbb4be
    ......be22232ed55522332db4ebbbbe
    .....bde22222e555e22232edd4bbbbe
    .....b52e222e3555e22222eddd4ebee
    ....bd552eee355552e222e355544eee
    ....665dd5555555552eee355dd4deee
    ...6776555555555555555551554d4ee
    ...4885222555dddd6655551544d4eee
    ..b45522332555dd677611d444ddeee.
    ..4d5222232e55555881d44ddd4eee..
    .bdd5e22222e555115114d54d4ee....
    .b55d2e222e351144d1d55eeee......
    bd5ddd2eee3d444555dd4e..........
    b555115dddd55d544eede...........
    4511d444d5544ee...4de...........
    41d4555d4ee........44...........
    41554eede.......................
    44ee...4e.......................
    `, SpriteKind.Player)
pizza.right = scene.screenWidth()
controller.player1.moveSprite(burger)
controller.player2.moveSprite(pizza)
```

## Host a game #host-game

You host a multiplayer game by using the **Share** button at the top of the editor screen.

![Share button](/static/multiplayer/help/share-button.png)

Choose **Host a multiplayer game** instead of creating a share link to your project.

![Host multiplayer game](/static/multiplayer/help/host-multiplayer.png)

Once you choose to host your game, a new window opens with your game's join code. You share this code with the other players so that they can join your game. You invite other players to join your game in one of three ways:

* Give them the six-digit game code and when they navigate to the [MakeCode Game Lobby](https://aka.ms/a9), or https://aka.ms/a9, they can enter the code to join.
* Have your friend scan the QR code with their mobile phone to join the game.
* Copy the full join URL with the copy button next to the game join code and send that to them. In the case of the "BurgerVSPizza" game example, the join URL is: https://aka.ms/a9?join=F98987.

Your game session begins when you press the **Start Game** button.

![Start game window](/static/multiplayer/help/start-game.png)

Once your game starts, the host's view of the game displays and you can begin game play or wait for other players to join.

![Hosted game window](/static/multiplayer/help/hosted-game.png)

## Join a game #join-game

To join a multiplayer game hosted by another player, you can go to the [MakeCode Game Lobby](https://aka.ms/a9), or https://aka.ms/a9, and enter the game's join code that you received from the game host.

After you press the **Enter** button, your game view will display and you can begin playing. If you received a full join URL instead, such as https://aka.ms/a9?join=F98987, this will take you directly to your player's game window.

![Joined game window](/static/multiplayer/help/joined-game.png)

## Multiplayer game safety #safety

For safe usage and interaction in the MakeCode online multiplayer environment, here are some important points to consider:

* The "online multiplayer" mode is a user-controlled, self-contained sharing system that allows game creators to play their games with friends in a safe environment which does NOT include the exchange of any personal information.
* Within a classroom setting, it is intended that students share their game join code with classmates directly, as this code isn't stored or available in the game galleries.
* Once inside an online multiplayer session, MakeCode does not provide tools for messaging any players whether joined to a host's game or not. Also, we do not provide any way to share personal contact information that might lead to opening chat session communication outside of the tool, including names, usernames, and/or profile images.
* The only form of communication inside of our online multiplayer tool is limited to sending just an allowed set of emojis:

![Multiplayer game emojis](/static/multiplayer/help/emojis.png)

User privacy and safety is of the utmost importance. To provide awareness of inappropriate content or actions, all users are able to flag inappropriate games and/or teammates for immediate removal at any time during game play.

For further information regarding the security and privacy of MakeCode Arcade, please see our [Privacy Policy](https://privacy.microsoft.com/en-us/privacystatement).
