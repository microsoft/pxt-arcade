# Microsoft MakeCode Arcade Contest

Microsoft MakeCode Arcade is a game creation tool meant to replicate the
limitations of retro game consoles. Our target "hardware" has a screen of
160 by 120 pixels and up to 16 colors.

For the MakeCode Arcade Contest, we are challenging Microsoft employees to
generate amazing games that push the limits of our tool and show off the cool
things it can do.

## Award Categories

We will be judging games based on the following four categories:

### 1. Best blocks game

This is the best game authored entirely in the MakeCode blocks editor. There are no
limitations on size of the program, but it better be made entirely in the blocks editor
(eg. no writing text and switching to blocks)!

### 2. Best text game

This will be awarded to the best game written in the MakeCode text editor. See the
source control section below for tips on how to author projects.

### 3. Best visuals/music

This category is dedicated to games that produce amazing assets, whether they
be sprites, music, sound effects, or cool visual effects.

### 4. Best sample or tutorial

What's the most fun game you can create in the smallest amount of code? This
category is for programs that can be used to demonstrate concepts to beginners.
They should be simple, concise, and focused on a small number of concepts.

See the "Tutorials" section of our [Adafruit editor](https://makecode.adafruit.com/)
for some examples.


## Deadline and Judging

The last day for entries will be January 7th, 2019.

Entries will be judged by the wonderful folks from the Microsoft MakeCode team. The plan
is to announce winners some time in late January/early February.


## Submitting your project

TODO

## Getting started tips

### Finding examples and documentation

There are a number of examples you can try out on the https://arcade.makecode.com homepage.
We also have several courses in development that are located [here](https://arcade.makecode.com/courses).
API reference docs are located [here](https://arcade.makecode.com/reference).

### "JavaScript" == "TypeScript"

Despite the name shown in the MakeCode editor, our text language is actually a stricter subset of
TypeScript. More information on what's supported can be found in the [language docs](https://makecode.com/language).

### Source Control

The MakeCode editor stores all of your projects in browser's local storage. The
easiest way to back up a blocks project is to simply "download" it. For text
projects, MakeCode has GitHub integration. Read more [here](https://makecode.com/extensions/github-authoring).

MakeCode also supports "extensions" in projects, so it's possible to split your project
into multiple repositories or libraries. Find more information [here](https://makecode.com/extensions).

### Music and Art

Documentation on how to import and use images in Arcade can be found [here](https://arcade.makecode.com/developer/images).

Documentation on how to create music and sound effects is [here](https://arcade.makecode.com/developer/sound).

### Getting help

We've created an internal chat in Microsoft Teams at https://aka.ms/arcadecontestchat

The public MakeCode discord is located at https://aka.ms/makecodecommunity and has a channel for arcade.


## Bugs and Features

Please report all bugs and feature requests to [pxt-arcade](https://github.com/Microsoft/pxt-arcade/issues).
If you would also like to submit a fix, feel free to open a PR!

The arcade editor is located in [pxt-arcade](https://github.com/Microsoft/pxt-arcade). The game engine and runtime code is in [pxt-common-packages](https://github.com/Microsoft/pxt-common-packages).

Most of the code related to Arcade can be found in the `libs/game` directory of that repo.