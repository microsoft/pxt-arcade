# Moving from Touch Develop to MakeCode

This page is primarily for users who previously used [Touch Develop](http://www.touchdevelop.com)
and the [Creative Computing for Games and Apps](http://www.touchdevelop.com/ccga) course. 

## Your Scripts

Touch Develop supported logins and stored your scripts in the cloud. MakeCode
does not support logins and cloud storage. MakeCode stores your scripts in
browser-local storage on your machine and provides two other ways
to store and retrieve your scripts:
- each time you press the download button and save your compiled program to the
  Downloads folder (as either a `.hex` or `.uf2` file) your original script text 
  is embedded inside this file -- simply drag-and-drop or import the file into the
  web app to retrieve your original script;
- use the `Share` link on the upper left of the MakeCode editor to obtain
  an anonymized URL that you can use to later retrieve your encrypted script
  from the cloud; do not lose this URL, as it is the only way to retrieve
  your (unecrypted) script text

## Languages and Editors

Touch Develop used a specially designed language particular to that project,
as well as a specially designed editor for editing Touch Develop programs
using touch interfaces.

MakeCode is based on the [TypeScript](http://www.typescriptlang.org) language, which
is a superset JavaScript and compiles to plain JavaScript, a standards-based
language supported on all modern web browsers.  Furthermore, MakeCode uses
two robust and supported editors, Google's [Blockly](https://developers.google.com/blockly/) 
and Microsoft's [Monaco](https://github.com/Microsoft/monaco-editor).

## Game Engines

Both Touch Develop and MakeCode have sprite-base game engines. 







