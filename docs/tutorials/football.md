# Mod the Football

### ~button /#tutorial:/tutorials/football

Try this tutorial!

### ~

## Introduction @unplugged

![Game animation](/static/tutorials/football/header.gif)

In this tutorial you will modify the football game in the animation above to
use your two favorite teams!

## Step 1

Open the ``||football:Football||`` Toolbox drawer and drag the
``||football:play as Cleveland Browns against Pittsburgh Steelers||`` block into the
``||loops:on start||`` block on your Workspace.
Click **Next** to go to the next step in the Tutorial.

```blocks
// @highlight
football.createGame(league.clevelandBrowns, league.pittsburghSteelers);
```

## Step 2

Click on ``||football:Cleveland Browns||`` to show a list of all the teams.
Click on your favorite team in that list,
and then click on the simulator to play;
your team should show up on the left,
with you controlling them!


```blocks
// @highlight
football.createGame(league.kansasCityChiefs, league.pittsburghSteelers);
```

## Step 3

Click on the ``||football:Pittsburgh Steelers||`` to select the second team
that will play in your game.
When you have selected a different team,
click on the simulator again,
and they should show up on the right side of the screen!

```blocks
// @highlight
football.createGame(league.kansasCityChiefs, league.oaklandRaiders);
```

## Complete

Congratulations, you have modded your game!
Try to beat the computer by scoring the most points!
When you're done, you can click **Next** to see some more options for modifying the game!

## Step 6

You can make each team use alternate colors by dragging out the
``||football:set player team alternate colors on||`` block in the ``||loops:on start||``.
This will **invert** the team colors - their main color will be used as their secondary color,
and their secondary color will be used as their main color.

If you want to change the computer team's color, just change ``||football:player||`` to
``||football:computer||``!

```blocks
football.createGame(league.kansasCityChiefs, league.oaklandRaiders);
// @highlight
football.setTeamAlternateColors(TeamId.Player, true);
```

## Step 5

You can try turning on **Hard Mode** in the game by dragging out the ``||football:set hard mode on||``
block out from the ``||football:Football||`` Toolbox drawer.
This will make the game harder - the ball will fly faster,
the enemy will be harder to tackle,
and more!

```blocks
football.createGame(league.kansasCityChiefs, league.oaklandRaiders);
// @highlight
football.setHardMode(true);
```

## Step 6

You can change how long each quarter in the game is by changing the **Quarter Length**.
To do this,
click on the **+** on the ``||football:play as ... against ...||`` block.
Then,
in the new input that gets added,
put in a number for the new quarter length in seconds - for example, 90 seconds.

```blocks
// @highlight
football.createGame(league.kansasCityChiefs, league.oaklandRaiders, 90);
```

```package
pxt-kickoff=github:jwunderl/pxt-kickoff#v1.1.0
```