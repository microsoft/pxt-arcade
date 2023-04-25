# About the "Full of Stories" Skillmap

**A page for Educators & Parents**

The **Full of Stories** skillmap introduces the most common types of code blocks used throughout MakeCode Arcade.

In this set of activities, students will create creative storytelling projects with MakeCode Arcade.  This map is intended for students who are new to MakeCode with little or no previous coding experience.  Through step-by-step instructions, students will focus on projects that range from greeting cards, to jokes, to full short stories.

Designed for students between the ages of 10 & 15, this experience contains a total of 4 tutorials (approximating 120 minutes of instruction) spread over 3 sessions.  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Day 1**           |          |           |              |
| Make a Greeting Card | 15 | Story | art design, effects |
| Bigger Greeting | 15 | Story | art design, music, events |
| **Day 2**           |          |           |              |
| Joking Around   | 45 | Story | storytelling, sounds, events |
| **Day 3**           |          |           |              |
| The Shortest Story    | 45  | Story | storytelling, music, events |

\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for planning, creativity, and debugging is encouraged.

### Objectives

After completing the **Full of Stories** skillmap, students will have gained exposure to all the elements they need to successfully create their first projects using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events and program control flow
- User input
- Values

#### Game Design Concepts

- Storytelling
- Sprites
- Graphic Design
- Sounds & Music
- Effects


### Storytelling Path

In this learning path, students will learn how to use background images, music, and dialog boxes to build creative projects that send a message, tell a joke, or illustrate their thoughts.

#### 1. Greeting Card

| Activity | Greeting Card (15 min) |
|---|---|
| ![Greeting Card thumbnail](/static/skillmap/map-info/greeting-card.png) | Design a simple greeting card to send to friends and family. |
| Blocks used | **[On Start](/blocks/on-start)** <br/><br/> ``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.confetti.startScreenEffect()]``|
| Solution option | [Greeting Card Project](https://arcade.makecode.com/S21073-89960-25393-61916) |

#### 2. Bigger Greeting

| Activity | Bigger Greeting (15 min) |
|---|---|
| ![Bigger Greeting thumbnail](/static/skillmap/map-info/bigger-greeting.png) | This activity builds off the previous Greeting Card activity.<br/>Students will add text that is revealed with the press of a &nbsp;<br/>button. |
| Blocks used | ``[carnival.addLabelTo("", carnival.Areas.Top, 2)]``<br/>``[music.play(music.createSong()music.PlaybackMode.LoopingInBackground)]``<br/>``[music.setVolume(20)]``<br/>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[game.setDialogFrame(img`.`)]``<br/>``[game.setDialogTextColor(0)]``<br/>``[game.showLongText("", DialogLayout.Bottom)]`` |
| Solution option | [Bigger Greeting Project](https://arcade.makecode.com/S38456-47249-27054-15853) |

#### 3. Joking Around

| Activity | Joking Around (45 min) |
|---|---|
| ![Joking Around thumbnail](/static/skillmap/map-info/joking-around.png) | This activity introduces students to characters and dialog,<br/>as they bring thier favorite jokes to life. |
| Blocks used | ``[game.showLongText("", DialogLayout.Top)]``<br/>``[game.splash("")]``<br/>``[sprites.create(img`.`).setPosition(0, 0)]``<br/>``[effects.bubbles.startScreenEffect()]``<br/>``[sprites.create(img`.`).setImage(img`.`)]``<br/>``[scene.cameraShake(4, 500)]`` <br/>``[animation.runImageAnimation()]``|
| Solution option | [Joking Around Project](https://arcade.makecode.com/S05893-52939-88219-32873) |


#### 4. The Shortest Story

| Activity | The Shortest Story (45 min) |
|---|---|
| ![The Shortest Story thumbnail](/static/skillmap/map-info/short-story.png) | This activity allows students to follow their own creativity,<br/>as they develop short stories that they can share with friends. |
| Blocks used | ``[music.play(music.createSong()music.PlaybackMode.LoopingInBackground)]``<br/>``[music.setVolume(20)]``<br/>``[scene.setBackgroundImage()]``<br/>``[effects.bubbles.startScreenEffect()]`` |
| Solution option | [The Shortest Story Project](https://arcade.makecode.com/S33219-62880-94664-42434) |


##### Game Mod Ideas

After students complete **The Shortest Story** they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- Add sprites that move or change each time the (A) button is pressed
- Add sound effects along with each turn of the page
- Add animated elements for emphasis


### What’s Next?

After completing the **Full of Stories** skillmap, students can move on to the following activities:

* [Talent Show](https://arcade.makecode.com/--skillmap#docs:/skillmap/star)
* [Turkey Day](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)



```package
carnival=github:microsoft/arcade-tutorial-extensions/carnival/
```