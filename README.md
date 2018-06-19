# Casual game editor using Microsoft MakeCode 

* [Try it live!](https://arcade.makecode.com)

[![Build Status](https://travis-ci.org/Microsoft/pxt-arcade.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-arcade)
[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)

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

## Local Dev setup

These instructions assume familiarity with dev tools and languages.

* install Node.js 8+
* (optional) install [Visual Studio Code](https://code.visualstudio.com/)

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
pxt serve --cloud
```

## Updating the tools

If you would like to pick up the latest PXT build, simply run
```
pxt update
```

More instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost 


# Contributing

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
