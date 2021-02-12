# Publishing games

This page describes various ways to publish your game and have friends play them.

## MakeCode share

The simplest way to publish your game is to press the **Share** button in the editor. It will create a unique URL that loads this game. This is a great to get started and is friction free.

### ~ hint

#### Beta only

The following features are available in https://arcade.makecode.com/beta only.

### ~

## GitHub repository

The downside of the default share is that the link changes on each publishing. If you plan to iterate on your game, you can use GitHub to improve your experience. By publishing to GitHub, you will have a stable URL with a full screen experience.

* in MakeCode, click on the **GitHub** button (next to the **Save** button)
* commit your changes
* click **create release** to upload the compiled project to your repository
* click **open project** to navigate to the GitHub pages of your repository (https://OWNER.github.io/REPOSITORY_NAME for repo https://github.com/OWNER/REPOSITORY_NAME)

An example of exported game can be found at https://microsoft.github.io/pxt-kickoff/.

### Embed and No Footer

The website generated above supports a few query parameters.
These can be added to the end of the url after a `?` to change what is shown.

* `nofooter=1`: removes the footer from the page so only the simulator is shown
* `embed=1`: makes the background transparent for use when embedding the page

For example, these can be used when embedding the page on another platform similar to the share page:

```html
<div>
  <iframe
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    src="https://microsoft.github.io/pxt-kickoff/?embed=1&nofooter=1"
    allowfullscreen="allowfullscreen"
    sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
    frameborder="0"
  ></iframe>
</div>
```

## Itch.io

[itch.io](https://itch.io) is a popular indie game web site. To upload any game, click the arrow by your username and then select 'Upload new project'. If you are submitting to a game jam, click 'Submit your project' on the game jam page, then 'Upload game' in the dialog that pops up. From here, there are a few ways to link a MakeCode Arcade game.

### Save file

In the MakeCode Arcade editor with your game, click the Save icon on the bottom toolbar (next to the name of your project). This will download a PNG that also encodes your game! In itch.io, select 'Downloadable' as the kind of project and click the 'Upload files' button to upload your game PNG. Add title, cover image, and other details if you have them!

### Share URL

In the MakeCode Arcade editor, click 'Share' in the top left, then 'Publish Project'. Copy the generated URL and return to the itch.io 'Create a new project' page. Select 'Downloadable' as the kind of project, and paste the URL to your game in the description. Then fill in additional details about your game!

### HTML Embed

Embedding the game in itch.io is a little more complex, but will allow folks to play your game on the itch.io page directly! In the MakeCode Arcade editor, click 'Share' in the top left, then 'Publish Project'. At the bottom of the 'Share Project' dialog you will see a blue '> Embed' link. Click on that link and select the 'Simulator' tab. Copy the generated embed code into a text file, and save it as `[your game].html`

In the itch.io 'Create a new project' page, select 'HTML' as the kind of project. Click the 'Upload files' button to upload your HTML file, and check 'This file will be played in the browser'. Under 'Embed Options', we recommend:
* Width `500` px x Height `580` px
* Select the 'Mobile friendly', 'Automatically start', and 'Fullscreen button' checkboxes.

Fill in any additional details about your game, and hit publish!

### Manual upload

Zip the contents of the ``assets`` folder and upload them into your itch.io project. Make sure to mark your channel as ``HTML``.

### Automated upload

You can also consider your GitHub repository to upload your game to itch.io automatically on each release.

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
