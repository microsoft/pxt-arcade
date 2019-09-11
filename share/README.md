# Game Modder
## Localhost testing
```
npm run start
```

## Deploy
assuming you are in `pxt-arcade/share/` and parallel to pxt-arcade/ is pxt/
```
rm -r ../../pxt/docs/static/game-modder/ \
&& npm run build \
&& cp -r build ../../pxt/docs/static/game-modder \
&& cp build/index.html ../../pxt/docs/game-modder.html
```