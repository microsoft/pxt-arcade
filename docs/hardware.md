# Hardware

![Gaming on Arcade hardware](/static/boards/brainpad-play.jpg)

Many hardware targets will work as a physical Arcade platform. These are typically SoC based systems that run some type of Linux core.

## Hardware definitions

![Arcade hardware](/static/boards/brainpad.jpg)

Arcade hardware targets are supported by their _hardware definition_ which is provided as aa [extension](https://makecode.com/extensions). The hardware definition specifies the base device characteristics and mappings for the screen, buttons, pins, and sound.

The components of the extension are source files which specify device mappings and control behaviors that specific to the hardware target. The files and dependancies are all declared in a ``pxt.json`` file just like all MakeCode [extensions](https://makecode.com/extensions).

```
{
    "name": "gizmoq",
    "description": "GizmoQ board",
    "files": [
        "config.ts"
    ],
    "card": {
        "name": "GizmoQ Gamer Board",
        "description": "Specialized GizmoQ Linux image for the GizmoQ Board.",
        "learnMoreUrl": "https://arcade.makecode.com/boards/gizmoq",
        "buyUrl": "https://www.bing.com/search?q=gizmoq+board",
        "cardType": "hw",
        "imageUrl": "/static/boards/gizmoq.jpg"
    },
    "dependencies": {
        "core": "file:../core---gizmoq",
        "screen": "file:../screen---gizmoq",
        "mixer": "file:../mixer---gizmoq",
        "game": "file:../game"
    },
    "public": true
}
```

When downloading an Arcade game program, the **GizmoQ** hardware will appear as a card selection in the **Choose your Hardware** dialog. The board choice might look something like this:

```codecard
[{
        "name": "GizmoQ Gamer Board",
        "description": "Specialized GizmoQ Linux image for the GizmoQ Board.",
        "learnMoreUrl": "https://arcade.makecode.com/boards/gizmoq",
        "buyUrl": "https://www.bing.com/search?q=gizmoq+board",
        "cardType": "hw",
        "imageUrl": "/static/boards/gizmoq.png"
}]
```

## Core and Devices

Additional extensions for **Core** (inteface between the board image the user API) and device interfaces (buttons, keys, screen, etc.) are also provided for board support. More information about how to develop these extensions is coming soon.