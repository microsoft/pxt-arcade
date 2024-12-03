# Local C++ development setup

Install ARM GCC https://developer.arm.com/downloads/-/gnu-rm 10.3

```bash
npm install -g pxt # cmd line tool
cd pxt-arcade
npm install
pxt link ../pxt
pxt link ../pxt-common-packages
pxt serve --rebundle # and stop it
mkdir -p projects/myprj
cd projects/myprj
```

Create the following files (replacing with rp2040 with the target you need):

`pxt.json`

```json
{
    "name": "myprj",
    "version": "0.0.0",
    "dependencies": {
        "hw":  "file:../../libs/hw---rp2040",
        "device": "file:../../libs/device"
    },
    "files": [
        "main.ts"
    ],
    "supportedTargets": [
        "arcade"
    ]
}
```

`main.ts`

```typescript
let mySprite = sprites.create(sprites.duck.duck1)
mySprite.ay = 50
mySprite.setStayInScreen(true)
```

To build the native binary:

```bash
PXT_FORCE_LOCAL=yes PXT_NODOCKER=yes PXT_RUNTIME_DEV=yes PXT_ASMDEBUG=yes pxt build
```
