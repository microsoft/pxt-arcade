# Group Project

Split into groups of 2-3 students

## Roles

These are some of the tasks typically required to create a game as a group.

Each member of the group should be assigned as the Lead for at least one of the roles.

As the lead, they will be responsible for collecting and responding to feedback on
their sections of the game from the rest of the group.

In the end, it is likely that members of the group will contribute to tasks
outside of what they have been assigned - for example,
they could draw a cool character or help write the perfect behavior for an enemy.
It is the responsibility of the Lead for each section to decide what makes it into
the final game, and help incorporate features that do.

### Artist

Create the art necessary to make the game shine.

* While developing the ideas for the game, create visual representations for the
characters and concept art for the game.
* Work with the developers to make sample art as they develop characters and scenes
* Transform the sample art into finished pieces based of the game concept art.
* Make the final art for the game accessible in the ``spritesheet.ts`` file.
* Create any animations needed for the game.
* Work with the Marketer to develop marketing materials and a splash screen for the game.

### Player Developer

Focus on developing the character the player controls.

* Work with the Artist to develop the sprite for the player character.
* Implement the movement for the player.
* Implement any other controls the player can use or unlock.
* Support any bonuses the player can collect.
* Work with the AI Developer to design interactions between the Player and the enemies.
* Work with the Scene Developer to design interactions between the Player and the scene.

### AI Developer

Develop the AI for non-player characters and items in the game.

* Work with the Player Developer to create collectibles and other characters.
* Work with the Artist to create art to represent the characters.
* Implement the behaviors for the non-player characters.
* Work with the Scene Developer to make sure the sprites you create
work properly within the scenes.

### Scene Developer

Develop the scenes in which the game will take place.

* Design the scenes for the game to take place in - for example,
``||scene:tilemaps||`` and/or ``||scene:backgrounds||``.
* Work with the Player and AI developers to place characters in these scenes.
* Work with the Artist to finalize art for the scenes.
* Work with the Marketer to include the game's splash screen.

### Marketer

Develops the marketing material needed for the game.

* Create an **Instruction Manual** for the game, which tells users the controls for the game
and gives hints on how to best play the game.
* Work with the Artist to develop promotional material based off the game's concept art,
as well as a splash screen to introduce the game when it is loaded.
* Write a short description of the game to make others interested in the game.

## Assets

### spritesheet.ts

```typescript
namespace spritesheet {
    // replace this with any images you need to export for other group members
    export const star: Image = img`1`;
}

namespace animations {
    // fill this with any animations you need to export for other group members
}
```
