# Casual game editor using Microsoft MakeCode [![Build Status](https://travis-ci.org/Microsoft/pxt-32.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-32)

This repo contains an editor built with [Microsoft MakeCode (PXT)](https://github.com/Microsoft/pxt). 

## Local Dev setup

These instructions assume familiarity with dev tools and languages.

* install Node.js 8+
* (optional) install [Visual Studio Code](https://code.visualstudio.com/)

In a common folder,

* clone https://github.com/Microsoft/pxt to ``pxt`` folder
* clone https://github.com/Microsoft/pxt-common-packages to ``pxt-common-packages`` folder
* clone https://github.com/Microsoft/pxt-32 to ``pxt-32`` folder
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

* go to ``pxt-32`` and run

```
npm install
npm link ../pxt
npm link ../pxt-common-packages
```

## to run the local server

From root github folder,

```
cd pxt-32
pxt serve --cloud
```

## Updating the tools

If you would like to pick up the latest PXT build, simply run
```
pxt update
```

More instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost 
