# Hardware

## Boards

These boards run MakeCode Arcade games. They are based on our guidelines, adhere to open source hardware reference designs (see Adding a New Board to Arcade section below), and have been user tested.  However, each hardware manufacturer is responsible for ensuring the compatibility, reliability, safety and compliance of their products. Microsoft provides no representations or warranties on these products and disclaims liability for any risks associated with their use.

```codecard
[
    {
        "name": "Meowbit",
        "description": "A retro game console for STEM education from Kittenbot team",
        "imageUrl": "/static/hardware/meowbit.png",
        "url": "https://www.kittenbot.cc/collections/frontpage/products/meowbit-codable-console-for-microsoft-makecode-arcade",
        "variant": "hw---stm32f401"
    },
    {
        "name": "BrainPad Arcade",
        "description": "Learn how BrainPad Arcade lets you run games on a small handheld console.",
        "imageUrl": "/static/hardware/ghiarcade.jpg",
        "url": "https://brainpad.com/arcade",
        "variant": "hw---stm32f401"
    },
    {
        "name": "TinkerGen GameGo",
        "description": "A fun-sized console to play the games you code.",
        "imageUrl": "/static/hardware/gamego.jpg",
        "url": "https://www.tinkergen.com/gamego",
        "variant": "hw---stm32f401"
    },
    {
        "name": "MRT Game Maker Kit",
        "description": " Sleek hand-held game device with a hard case and a USB-C port.",
        "imageUrl": "/static/hardware/mrt-gamemaker-kit.png",
        "url": "https://www.myrobottime.co.kr/gamemakerkit",
        "variant": "hw---stm32f401"
    },
    {
        "name": "Adafruit PyBadge",
        "description": "It's a badge, it's an arcade, it's a PyBadge",
        "imageUrl": "/static/hardware/pybadge.jpg",
        "url": "https://www.adafruit.com/product/4200",
        "variant": "hw---samd51"
    },
    {
        "name": "Adafruit PyGamer",
        "description": "The upgraded PyBadge",
        "imageUrl": "/static/hardware/pygamer.jpg",
        "url": "https://www.adafruit.com/product/4242",
        "variant": "hw---samd51"
    },
    {
        "name": "Kitronik ARCADE",
        "description": "ARCADE is a programmable gamepad for use with MakeCode Arcade.",
        "imageUrl": "/static/hardware/kitronik.jpg",
        "url": "https://www.kitronik.co.uk/arcade",
        "variant": "hw---samd51"
    },
    {
        "name": "Ovobot Xtron Pro",
        "description": "A programmable modular console to create games, design wearables and make creative projects.",
        "imageUrl": "/static/hardware/xtronpro.png",
        "url": "https://www.ovobot.cc/en/product/detail/xtron-pro/",
        "variant": "hw---stm32f401"
    },
    {
        "name": "Retro Arcade for Education",
        "description": "The Retro has a big screen, colorful protective case, d-pad and vibration motor",
        "imageUrl": "/static/hardware/elecfreaksarcade.jpg",
        "url": "https://shop.elecfreaks.com/products/elecfreaks-retro-makecode-arcade-for-education",
        "variant": "hw---stm32f401"
    },
    {
        "name": "Adafruit EdgeBadge",
        "description": "It's the PyBadge with a zest of Machine learning",
        "imageUrl": "/static/hardware/edgebadge.jpg",
        "url": "https://www.adafruit.com/product/4400",
        "variant": "hw---samd51"
    },
    {
        "name": "Adafruit M4",
        "description": "Learn how to run your games on micro-controllers from Adafruit",
        "imageUrl": "/static/hardware/adafruitm4.jpg",
        "url": "https://learn.adafruit.com/makecode-arcade-m4",
        "variant": "hw---samd51"
    },
    {
        "name": "micro:bit Newbit Shield",
        "description": "Use the micro:bit with an expansion board from Kittenbot",
        "imageUrl": "/static/hardware/newbit.png",
        "url": "https://www.kittenbot.cc/products/newbit-arcade-shield"
    },
    {
        "name": "micro:bit Retro Shield",
        "description": "Use the micro:bit with an expansion board from Elecfreaks",
        "imageUrl": "/static/hardware/retro-shield.jpg",
        "url": "https://shop.elecfreaks.com/products/micro-bit-retro-programming-arcade"
    },
    {
        "name": "micro:bit Game:Bit Shield",
        "description": "Use the micro:bit with an expansion board from iCShop",
        "imageUrl": "/static/hardware/bit-shield.png",
        "url": "https://www.icshop.com.tw/products/368112100137?locale=en"
    }
]
```

## Other ways to play Arcade

```codecard
[
    {
        "name": "Adafruit Joy Bonnet",
        "description": "Learn how to run your games on Raspberry Pi Zero and Adafruit Joy Bonnet.",
        "imageUrl": "/static/hardware/adafruitjoybonnet.jpg",
        "url": "https://learn.adafruit.com/makecode-arcade-pi-zero",
        "variant": "hw---rpi"
    },{
        "name": "Shoebox Controller",
        "description": "Turn a shoebox into a USB game controller for a PC.",
        "imageUrl": "/static/hardware/shoebox.jpg",
        "url": "/hardware/shoebox-controller"
    },
    {
        "name": "Cardboard Panel",
        "description": "Turn a cardboard box into a tabletop arcade.",
        "imageUrl": "/static/hardware/controlpanel.jpg",
        "url": "/hardware/raspberry-pi/cardboard-control-panel",
        "variant": "hw---rpi"
    },
    {
        "name": "Arcade table",
        "description": "Turn an IKEA FLISAT table into an arcade.",
        "imageUrl": "/static/hardware/raspberry-pi/ikea-flisat-table/gallery.jpg",
        "url": "/hardware/raspberry-pi/ikea-flisat-table",
        "variant": "hw---rpi"
    },
    {
        "name": "Arcade cabinet",
        "description": "Full size Arcade cabinet powered by a Raspberry Pi.",
        "imageUrl": "/static/hardware/raspberry-pi/wooden-cabinet/gallery.jpg",
        "url": "/hardware/raspberry-pi/wooden-cabinet",
        "variant": "hw---rpi"
    },
    {
        "name": "Makey Makey",
        "description": "Turn your banana keyboard into an Arcade game controller.",
        "imageUrl": "/static/hardware/makey-makey.jpg",
        "url": "https://makeymakey.com/blogs/how-to-instructions/getting-started-with-microsoft-makecode-arcade"
    }
]
```

## Adding a New Board to Arcade

![Schematics screenshot](/static/hardware/screen-framed.png)

If you want to design a board with Arcade support, refer to the [Adding Board](/hardware/adding) page.

There are a few resources about adding new MCUs in the
[Arcade Hardware Development](/hardware/dev) page.
