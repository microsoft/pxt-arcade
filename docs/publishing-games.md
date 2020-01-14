# Publishing games

This page describes various ways to publish your game and have friends play them.

## MakeCode share

The simplest way to publish your game is to press the **Share** button in the editor. It will create a unique URL that loads this game. This is a great to get started and is friction free.

## GitHub repository

The downside of the default share is that the link changes on each publishing. If you plan to iterate on your game, you can use GitHub to improve your experience. By publishing to GitHub, you will have a stable URL with a full screen experience.

* in MakeCode, click on the **GitHub** button
* commit your changes
* create a release, whenever you want to update your online game

## Itch.io

[itch.io](https://itch.io) is a popular indie game web site. 
The following instructions will update your GitHub repository to push your game to itch.io.

* add a ``.github/workflows/itch.io.yml`` file in your repository
with the following content

```
# Workflow that pushes compiled game to itch.io
# Add a secret BUTLER_API_KEY to the project to enable uploading.
# If needed update user and project name in script.
name: itch.io
on: 
  push:
    branches: master
    paths: assets/**
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: install butler
        run: |
          curl -L -o butler.zip https://broth.itch.ovh/butler/linux-amd64/LATEST/archive/default
          unzip butler.zip
          chmod +x butler
      - name: push to itch.io
        run: |
          if [ "$BUTLER_API_KEY" != "" ]; then
            ./butler push assets $ITCH_IO_PROJECT:$ITCH_IO_CHANNEL --userversion-file assets/version.txt
          fi
        env:
          BUTLER_API_KEY: ${{ secrets.BUTLER_API_KEY }}
          ITCH_IO_PROJECT: USER/PROJECT
          ITCH_IO_CHANNEL: HTML
```

* update the ``ITCH_IO_PROJECT`` entry in the file to match your ``user/project`` in itch.io.
* follow instructions at https://itch.io/docs/butler/login.html to get the **butler** authorization token and add it as a ``BUTLER_API_KEY`` secret on your repository.

You repository is ready. Go back to MakeCode Arcade and create a new release of your game to trigger the workflow.