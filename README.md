# Casual game editor using Microsoft MakeCode

* [Try it live!](https://arcade.makecode.com)

[![Build Status](https://travis-ci.org/microsoft/pxt-arcade.svg?branch=master)](https://travis-ci.org/microsoft/pxt-arcade)
[![Community Discord (chat)](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)
[Forum](https://forum.makecode.com)

This repo contains an editor built with [Microsoft MakeCode (PXT)](https://github.com/Microsoft/pxt).

## Local server setup

This setup gives you a local version of the editor and the ability to load packages from your machine. This is the setup to develop new packages.

### Setup

* install [Node.js 8+](https://nodejs.org/en/download/)
* clone https://github.com/Microsoft/pxt-arcade to ``pxt-arcade`` folder. For example, from a git bash,

```
git clone https://github.com/Microsoft/pxt-arcade
```

* go to ``pxt-arcade`` and run

```
cd pxt-arcade
npm install
```

Don't forget to periodically ``git pull`` and ``npm install`` to get the latest changes.

```
git pull
npm install
```

### Launching the server

This command launches a local web server. Note that this web server is meant for development purposes only. It was not designed or secured to be run on a web server.

```
npm run serve
```

### Creating and editing a package

* go to ``/projects`` under the ``pxt-arcade`` folder
* clone your package repo, say ``pxt-helloworld``
* launch the server with ``npm run serve`` from the ``pxt-arcade`` folder using ``npm serve``
* create a new project
* go to **project settings** and click on **Edit settings as text**
* add an entry in the dependency section that points to your project
```
    "dependencies": {
        "circuit-playground": "*",
        "helloworld": "file:../pxt-helloworld"
    },
```
* click on the **Blocks** icon to reload the blocks.

Once this project is setup, simply reload the editor after making changes on disk.

### How to create sprite packs

Packs of images can be added to the editor using PXT packages. To create
a package of images.

1. Create a package (see steps above)
1. Prepare your sprites in a spritesheet: All sprites in a sheet must be
   the same size and arranged in a grid with no gaps. Spritesheets must be
   PNG files. An example spritesheet is located [here](https://github.com/Microsoft/pxt-arcade/blob/master/libs/device/smallFood/small.png)
1. Inside the package directory, create a subdirectory where the assets will be
   placed and copy the spritesheet containing your images into it.
1. Create a file named `meta.json` in the directory you created. An example
   `meta.json` can be found [here](https://github.com/Microsoft/pxt-arcade/blob/master/libs/device/smallFood/meta.json)
   and documentation on all of the options can be found [here](https://makecode.com/cli/buildsprites)
1. Create another `.json` file with the same basename as the spritesheet.
1. Inside that file add a single property called `frames` which maps to an array of
   names for the sprites. Indices start in the top left of the sheet and proceed
   left to right. For a sample file see [here](https://github.com/Microsoft/pxt-arcade/blob/master/libs/device/smallFood/small.json)
1. From the root of your package, run the command `pxt buildsprites SUBDIR`
   where `SUBDIR` is the name of the directory containing the assets.
1. Two files will be generated in the package root, one with the extenstion `.ts`
   and one with the extension `.jres`. Add both to the package's `pxt.json`
1. You're done! The images will show up in the Image category when the package
   is added to a project

## Local Dev setup

These instructions allow you to test changes to pxt-core and pxt-common-packages. They are more involved
as you need to clone and link 3 repos.

* install Node.js 8+
* (optional) install [Visual Studio Code](https://code.visualstudio.com/)
* install the **pxt** command line tool

```
[sudo] npm install -g pxt
```

In a common folder,

* clone https://github.com/Microsoft/pxt to ``pxt`` folder
* clone https://github.com/Microsoft/pxt-common-packages to ``pxt-common-packages`` folder
* clone https://github.com/Microsoft/pxt-arcade to ``pxt-arcade`` folder
* go to ``pxt`` and run

```
npm install
npm run build
```

* go to ``pxt-common-packages`` and run

```
npm install
npm link ../pxt
```

* go to ``pxt-arcade`` and run

```
npm install
npm link ../pxt
npm link ../pxt-common-packages
```

## to run the local server

From root github folder,

```
cd pxt-arcade
pxt serve
```

More instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost

# Contributing

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Trademarks

MICROSOFT, the Microsoft Logo, MAKECODE, and MAKECODE ARCADE are registered trademarks of Microsoft Corporation. They can only be used for the purposes described in and in accordance with Microsoft’s Trademark and Brand guidelines published at https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general.aspx. If the use is not covered in Microsoft’s published guidelines or you are not sure, please consult your legal counsel or MakeCode team (makecode@microsoft.com).
