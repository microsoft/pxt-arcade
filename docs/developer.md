# Developer Tips and Tricks

If you want to customize and extend the Arcade game experience, or just code you games for better performance,
this page directs you to several topics with helpul tips and guidance.

## Finding examples and documentation

There are a number of examples you can try out on the [MakeCode Arcade](@homeurl@) homepage.
We also have several courses in development that are located [here](/courses).
API reference docs are located [here](/reference).

## "JavaScript" == "TypeScript"

Despite the name shown in the MakeCode editor, our text language is actually a stricter subset of
TypeScript. More information on what's supported can be found in the [language docs](https://makecode.com/language).

## Source Control

The MakeCode editor stores all of your projects in browser's local storage. The
easiest way to back up a blocks project is to simply "download" it. For text
projects, MakeCode has GitHub integration. Read more [here](https://makecode.com/extensions/github-authoring).

MakeCode also supports "extensions" (libraries or packages) in projects, so it's possible to split your project
into multiple repositories or libraries. Find more information [here](https://makecode.com/extensions).

## Game Loop, Physics, and Rendering

Documentation on the core game loop, physics system, and rendering can be found [here](/developer/game-loop).

## Music and Art

Documentation on how to import and use images in Arcade can be found [here](/developer/images).

Documentation on how to create music and sound effects is [here](/developer/sound).

## Controller Buttons

Use the [button tester](/developer/button-tester) to verify the proper button assignents on your controller.

## Getting Help

To get help, you can ask the [MakeCode community](https://aka.ms/makecodecommunity) at/on our public discord channel for arcade.

## Bugs and Features

Please report all bugs and feature requests to [pxt-arcade](https://github.com/microsoft/pxt-arcade/issues).
If you would also like to submit a fix, feel free to open a pull request!

The arcade editor is located in [pxt-arcade](https://github.com/microsoft/pxt-arcade). The game engine and runtime code is in [pxt-common-packages](https://github.com/microsoft/pxt-common-packages).

Most of the code related to Arcade can be found in the [libs/game](https://github.com/microsoft/pxt-common-packages/tree/master/libs/game) directory of that repo.
