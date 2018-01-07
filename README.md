# Sample target for a Microsoft MakeCode Editor

This repo contains a sample editor built with [Microsoft MakeCode (PXT)](https://github.com/Microsoft/pxt). The editor is hosted on the GitHub pages at [http://microsoft.github.io/pxt-sample/](http://microsoft.github.io/pxt-sample/)

[![Build Status](https://travis-ci.org/Microsoft/pxt-sample.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-sample)

If you'd like to start your own editor, fork this repo and fix all the TODOs.

## TODOs

- [ ] Fork repo and setup local server (see below)
- [ ] Update metadata in ``pxtarget.json``. Change the id, title, name, etc... to your taste.
- [ ] Update the JavaScript runtime in ``sim/simulator.ts``. If needed add additional JS library under ``sim/public/**``
and edit ``sim/public/simulator.html`` with additional ``script`` tags.
- [ ] Update the APIs in ``sim/api.ts`` to use your runtime.
- [ ] Test your editor in the local server
- [ ] run ``pgk staticpkg --gh --bump`` to upload a static version to GitHub pages.

## Running locally

These instructions allow to run locally to modify the sample.

### Setup

The following commands are a 1-time setup after synching the repo on your machine.

* install [node.js](https://nodejs.org/en/)

* install the PXT command line
```
npm install -g pxt
```
* install the dependencies
```
npm install
```

### Running the local server

After you're done, simple run this command to open a local web server:
```
pxt serve
```

After making a change in the source, refresh the page in the browser.

## Updating the tools

If you would like to pick up the latest PXT build, simply run
```
pxt update
```

More instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost 
