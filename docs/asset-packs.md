# Asset Packs

## What is an Asset Pack?

An _asset pack_ is a MakeCode Arcade project or extension that adds assets to the gallery section of one of the asset editors (e.g. tilemaps, tiles, images, animations, songs, etc.).

Unlike traditional MakeCode Arcade projects (or extensions) which add extra blocks or code, these just add assets. Also, unlike traditional projecgs, making an asset pack requires no coding experience! Any project can be transformed into an asset pack and you don’t event have to switch to the JavaScript editor to edit configuration info!

Also, it isn't necessary to use GitHub (though it might be a good idea, more on extensions later).

## How to make an Asset Pack

Making an asset pack is simple, and as mentioned above you can do it with any project. However, you can also start with an empty project if you prefer.

### Step 1: Create some named assets

In order for assets to show up when someone adds your pack to their project, the assets must be named. Tilemaps and tiles are automatically named when you create them, but images and animations that are created won’t have names unless you type them in. You can name your assets whatever you want, but people will see the names when they hover over your asset in the gallery so make sure it’s something descriptive.

To name an asset, make sure you type something in the box at the bottom of the asset editor (image, animation, tilemap, etc.):

![Image editor window](/static/asset-packs/image-editor.png)

### Step 2: Turn on the "Import as Asset Pack" project setting

First, you need to open up the Project Settings page. You can find this as an option in the **Settings** menu, the gear (⚙️) button in the top right of the editor:

![Project settings button](/static/asset-packs/project-settings.png)

Once you’re on the Project Settings page, make sure the "Import as Asset Pack" setting is turned ON. You can tell if it’s turned on if the switch is moved to the _right_ side and colored in like this:

![Import as asset pack option](/static/asset-packs/import-asset-pack.png)

After you turn that setting on, go ahead and click the **Go Back** button to return to your project.

![Go Back button](/static/asset-packs/go-back.png)

### Step 3: Share your project

The final step is just to share your project! To create a share link, click the **Share** button in the top-right of the editor:

![Share Project buttonm](/static/asset-packs/share-project-button.png)

Make sure you give your project a unique and descriptive name. People will also see your description when they add your asset pack to their project, so write something useful!

![Share Project window](/static/asset-packs/share-project.png)

When you’re done, click **Share Project** to get a link.

**Pro Tip**: Create a thumbnail for your project.

### Step 4: Post your link for people to use!

Once you have a share link, you’re done! Make sure you post that link somewhere where people can find it, maybe in the [MakeCode Forum](https://forum.makecode.com/c/share-your-arcade-projects-here/5).

## How to add an asset pack to your project

So, let’s say someone has given you a share link for an asset pack. How do you add that asset pack to your project so that you can use it?

It’s easy! Just paste that link into the Extensions dialog like so:

![Extension selection dialog](/static/asset-packs/extensions.png)

Clicking on the card that appears will add it to your project. Now, if you open up the gallery in the asset editor (image, tilemap, animation, etc.), you’ll see the new assets right at the top:

![Image gallery](/static/asset-packs/image-gallery.png)

## Sharing tilesets

Just like other types of assets, you can also share tilesets for people to use in the tilemap editor. By default, if you share an asset pack with tiles then all your tiles will appear as a custom category in the Gallery dropdown of the tilemap editor tile palette.

![Tiles editor window](/static/asset-packs/tilemap-editor.png)

**Note**: Any characters other than letters, numbers, and underscores will get converted into underscores so avoid those when naming your project.

You can also create multiple dropdown categories in your project by naming your tile assets in a certain way: any text after a double dash (`--`) in your tile’s name will be taken as the category name.

Some example tile names are:

```
tile1--WallTiles
tile2--WallTiles
tile3--FloorTiles
tile4--FloorTiles
```

After adding this asset pack to the project, there are two new categories in the Gallery dropdown like this:

![Tiles gallery selection dropdown](/static/asset-packs/tiles-gallery.png)

## Sharing background images and dialog frames

You might want your asset packs to include images that show up in the ``||scene:set background image to *||`` gallery:

```block
scene.setBackgroundImage(img`.`)
```

To get them in the gallery, make sure to include `background` somewhere in the asset’s name. For example, `castle background`.

Similarly, you can include images in the ``||game:set dialog frame to *||`` block from the ``||game:Game||`` category:

```block
game.setDialogFrame(img`.`)
```

Make sure to include `dialog` somewhere in the asset’s name in this case too.

## Publish your asset pack as an extension

If want to make your asset pack project more generally available you can publish it as an extension.

First, you’ll need to convert your asset pack to a [GitHub repo](/github). Click on the **GitHub** button in the bottom of the editor and log in with your GitHub account. Make sure the repo you create is Public, otherwise other people won’t be able to see it!

![GitHub button to for extensions](/static/asset-packs/github-button.png)

Once you have it in a GitHub repo, make sure you do the following things:

1. Create a release. You can do this by clicking the **Create release** button.
2. Add a license to your repo. We only allow extensions that use the MIT license to be listed in the default extension list, so keep that in mind!
3. Make sure that "Import as Asset Pack" is enabled.

![GitHub commit window](/static/asset-packs/github-button.png)

### Submit it as a recommended extension

Is your asset pack amazing? So amazing that you think it deserves to appear in the recommended extension list for anyone to use? If so, you can submit a request to have it added!

To get on the recommended list, open a Pull Request (PR) on the [microsoft/pxt-arcade](https://github.com/microsoft/pxt-arcade) repository to add your extension to the list! You’ll want to add an entry to the `"approvedRepoLib"` property of `targetConfig.json` in that repo. 
Someone from the MakeCode team will take a look at your PR and let you know if any further changes are neeeded.