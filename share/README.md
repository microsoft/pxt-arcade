# Game Modder
## Localhost testing
```
npm run start
```

## Deploy
```
rm -r ../pxt/docs/static/game-modder/ \
&& npm run build \
&& cp -r build ../pxt/docs/static/game-modder \
&& cp build/index.html ../pxt/docs/game-modder.html
```