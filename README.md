# Casual game editor using Microsoft MakeCode [![Build Status](https://travis-ci.org/microsoft/pxt-arcade.svg?branch=master)](https://travis-ci.org/microsoft/pxt-arcade)

* Try it [https://arcade.makecode.com](https://arcade.makecode.com)
* [Forum](https://forum.makecode.com)

This repo contains the Arcade editor built with [Microsoft MakeCode (PXT)](https://github.com/microsoft/pxt).

## Creating and editing a package

In the editor, you will find a GitHub icon next to the save icon. Use the GitHub integration to build a library package. You do not need to install the local dev server; everything can happen in the editor.

## Local server setup

This setup gives you a local version of the editor and the ability to load packages from your machine. This is the setup to develop new packages.

### Setup

* install [Node.js 8+](https://nodejs.org/en/download/) (you might need to restart afterwards so all your environment variables are applied correctly)
* clone https://github.com/microsoft/pxt-arcade to ``pxt-arcade`` folder. For example, from a git bash

```
git clone https://github.com/microsoft/pxt-arcade
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

### Refreshing the community.md file

Run this command, then patch description, improve the screenshot (or record gifs) if necessary.

```
pxt ddt featured-game --md docs/community.md
```

This command requires ImageMagick (https://imagemagick.org/index.php) to be installed and available at the command line as "magick".

## Updating pxt-arcade-sim version

When changing the version of pxt-arcade-sim referenced by pxt-arcade, you need to change the version in three places:

1. `package.json`
2. `.github/workflows/pxt-buildmain.yml`
3. `.github/workflows/pxt-buildpush.yml`

In the two yml files, you'll find the version in the `ref` field under the step that checks out pxt-arcade-sim.

## Update playlists in markdown

Get a Google API key and store it in the ``GOOGLE_API_KEY`` environment variables (turn on data from the app).

```
pxt downloadplaylists
```


### How to create sprite packs

Packs of images can be added to the editor using PXT packages. To create
a package of images.

1. Create a package (see steps above)
1. Prepare your sprites in a spritesheet: All sprites in a sheet must be
   the same size and arranged in a grid with no gaps. Spritesheets must be
   PNG files. An example spritesheet is located [here](https://github.com/microsoft/pxt-arcade/blob/master/libs/device/smallFood/small.png)
1. Inside the package directory, create a subdirectory where the assets will be
   placed and copy the spritesheet containing your images into it.
1. Create a file named `meta.json` in the directory you created. An example
   `meta.json` can be found [here](https://github.com/microsoft/pxt-arcade/blob/master/libs/device/smallFood/meta.json)
   and documentation on all of the options can be found [here](https://makecode.com/cli/buildsprites)
1. Create another `.json` file with the same basename as the spritesheet.
1. Inside that file add a single property called `frames` which maps to an array of
   names for the sprites. Indices start in the top left of the sheet and proceed
   left to right. For a sample file see [here](https://github.com/microsoft/pxt-arcade/blob/master/libs/device/smallFood/small.json)
1. From the root of your package, run the command `pxt buildsprites SUBDIR`
   where `SUBDIR` is the name of the directory containing the assets.
1. Two files will be generated in the package root, one with the extenstion `.ts`
   and one with the extension `.jres`. Add both to the package's `pxt.json`
1. You're done! The images will show up in the Image category when the package
   is added to a project

## Local Dev setup

These instructions allow you to test changes to pxt-core and pxt-common-packages. They are more involved
as you need to clone and link 3 repos.

* install[Node.js 8+](https://nodejs.org/en/download/) (you might need to restart afterwards so all your environment variables are applied correctly)
* (optional) install [Visual Studio Code](https://code.visualstudio.com/)

### Automated setup
* Download [setup.cmd](https://github.com/microsoft/pxt-arcade/blob/master/setup.cmd) to your local machine and place it on the folder you'd like to do your development work
* Run the following command

```cmd
setup.cmd /firsttime
```

This call should automatically do the steps outlined in the manual setup and will clone and link all three repos.

### Manual setup
* install the **pxt** command line tool

```
[sudo] npm install -g pxt
```

In a common folder,

* clone https://github.com/microsoft/pxt to ``pxt`` folder
* clone https://github.com/microsoft/pxt-common-packages to ``pxt-common-packages`` folder
* clone https://github.com/microsoft/pxt-arcade to ``pxt-arcade`` folder
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

### to run the local server

From root github folder,

```
cd pxt-arcade
pxt serve --rebundle
```

More instructions at https://github.com/microsoft/pxt#running-a-target-from-localhost

### to watch for changes

To rebuild automatically when changes are made, we need gulp.

Install gulp:

```
npm install -g gulp
```

and in a seperate terminal from `pxt serve` and in the pxt/ folder, run:

```
gulp watch
```

### Using setup.cmd

Instead of having to go to each repo, pull and link each one individually you may now use the `setup.cmd` file. The usage is outlined as follows: \
   Setup options: \
     /firsttime           Sets up developer environment - will clone 3 repos (pxt, pxt-arcade, and pxt-common-packages) and then run /link option \
     /pull                Does a git pull on 3 repos (pxt, pxt-arcade, and pxt-common-packages) \
     /link                Runs npm install and links the 3 repos \
     /run                 Runs local server and watches for changes using gulp \

## Viewing documents

Documents are rendered at the server and are viewable when received by the browser. Special styles and extended
formatting are used which prevent them from rendering properly as generalized Markdown. While you can browse them
here in the repo, they are not meant to render properly as GitHub document.

# Contributing

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Trademarks

MICROSOFT, the Microsoft Logo, MAKECODE, and MAKECODE ARCADE are registered trademarks of Microsoft Corporation. They can only be used for the purposes described in and in accordance with Microsoft’s Trademark and Brand guidelines published at https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general.aspx. If the use is not covered in Microsoft’s published guidelines or you are not sure, please consult your legal counsel or MakeCode team (makecode@microsoft.com).
