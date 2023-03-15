# Song Editor

A song is contained inside the ``||music:song||`` block. The song is created and modified using the Song Editor which opens when you click on the song parameter window of the block.

```block
music.createSong(hex`00780004080200`)
```

More often though, you'll see the ``||music:song||`` block as part of the ``||music:play||`` block.

```block
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
```

Clicking on the song parameter window opens the Song Editor. If the ``||music:song||`` block contains no song information, the Song Editor will display with an empty song.

![Song editor window](/static/reference/music/song-editor.png)

## JavaScript and Python

When you edit your code in the JavaScript or Python workspaces, the musical notes symbol (♫) appears in the margin of the line containing the ``||music:song||`` equivalent function, [createSong()](/reference/music/create-song). Clicking on this symbol will open the Song Editor too.

```
   1   let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
♫  2   music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
   3   mySprite.startEffect(effects.confetti)
   4
```

## Music staff

Notes of a song are placed on the music **staff** which is a set of horizontal lines arranged from low to high. The notes are placed at **grid** positions from left to right. The grid divides a **measure** to determine how may notes the measure contains. A grid of **1/8** has **8** note positons per measure. If a note position has no notes in it, that position is a rest (no sound). Placing notes higher or lower on the staff, of course, sets the pitch of the note.

![Song editor window](/static/reference/music/staff-and-notes.png)

### Measures

You can change the length of the song by adding or removing measures. The **Measures** control lets you choose how long your song will play for. In this example, measures is set to **4** to add 2 more measures to the song.

![Song editor window](/static/reference/music/more-measures.png)

### Bass clef

You can put notes on the **Bass Clef** too. Just check the **Show base clef** option. The bass clef is displayed in the Song Editor to match the default treble clef.

![Song editor window](/static/reference/music/bass-clef.png)

Notes are added to the bass clef in the same way as the treble clef.

### Grid

The number of note positions (divisions) in each measure is set by the **Grid** control. The grid setting will set the number of note divisions in the measures using a measure fraction. This example is using an grid setting of 1/16 so there are 16 notes shown in the measure.

![Grid set at 1/16](/static/reference/music/sixteenth-grid.png)

### Example

This example contains a song with notes on both clefs having measures at 1/8 divisions.

```blocks
let mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....2222...2222.....
    ...222222.222222....
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ...2222222222222....
    ....22222222222.....
    .....222222222......
    ......2222222.......
    .......22222........
    ........222.........
    .........2..........
    .........2..........
    ....................
    `, SpriteKind.Player)
music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004a30000000400012a04000800012708000c0001200c001000012410001400012a14001800012018001c00011d1c002000012020002400012724002800012a28002c0001252c003000012030003400012434003800012738003c00012a3c004000012740004400012044004800012548004c00012a4c005000012050005400012454005800021e2758005c00012a5c00600001206000640001276400680001246c007000012004001c00100500640000041e000004000000000000000000000000000a040004600000000400010804000800011208000c00010c0c001000011210001400010814001800011218001c00010c1c002000011220002400010824002800011228002c00010c2c003000011230003400010834003800011238003c00010c3c0040000112`), music.PlaybackMode.InBackground)
mySprite.startEffect(effects.confetti, 5000)
```

## Instruments

You can play notes for several different **instruments**. You select an instrument from the instrument bar at the top of the editor window.

![Song editor window](/static/reference/music/instrument-bar.png)

The instruments are represented by various character symbols and make different sounds for the same notes. These are MakeCode intruments and don't exaclty have the same sound as typical instruments like a violin, cello, drums, or guitar.

![Song editor window](/static/reference/music/several-instruments.png)

If you need to focus on placing notes for a particular instrument, you can use the **Only show selected instrument** option to temporarily remove the other instruments from the staff. This makes it easier to compose for a single instrument since only the notes for the currently selected instrument will show.

## Playing the song

While editing a song, you can play, stop, or loop play the music you currently have composed. Also, you can change the tempo (beats per minute) of the song with the **Tempo** setting.

![Song editor window](/static/reference/music/play-controls.png)

## See also

[play](/reference/music/play),
[create song](/reference/music/create-song)