# Ready Set Race!
### @unifiedToolbox true
### @explicitHints true

## Ready, Set, Race! @showdialog

Start your engines and get ready to race! <br/>
Self-driving cars are on the road today, but can you teach a computer to win a race? <br/>
You're in the driver's seat - your mission is to train an AI bot to drive with live racing data.

![AI Race Game](/static/tutorials/ai-race/image.png "AI Race Game")

## 🎓 Driving school

First, let's learn how to drive our race car 🏎️💨

---

From the Toolbox menu, drag a ``||racing: learn to drive||`` block into the ``||loops(noclick): on start||`` block on the Workspace.

```blocks
// @highlight
racing.learnToDrive()
```

Follow the instructions in the Game Window to learn to drive.

![Game Window](/static/tutorials/ai-race/GameWindow.png "Game Window")

💡 _Need a bigger view? Select the fullscreen button in the game window. Exit fullscreen to return to your blocks._

![Exit Fullscreen](/static/tutorials/ai-race/ExitFullscreen.png "Exit Fullscreen")

##  📣 You're the coach! @showdialog

**AI** stands for **Artificial Intelligence**: which refers to computers doing human-like tasks, learning and making choices.

AI is good at looking through lots of data for patterns and examples that it can copy. This is called **imitation learning**: learning from demonstrations.

In the next step, you'll demonstrate how to drive to your AI bot who will learn from your driving patterns.

**Predict**: If you never use the brakes, what might your AI do at a tight corner?

![Racing Corner](/static/tutorials/ai-race/RaceCorner.png "Racing Corner")

## 💪 Training session

Let's train our AI bot 🤖 by recording our driving data.

---

Delete the ``||racing:learn to drive||`` block by dragging it back to the Toolbox.

Then drag a ``||racing: teach AI by driving one lap||`` block inside the ``||loops(noclick):on start||`` block.

```blocks
// @highlight
aiRacing.teachDriver(racing.TrainingTrack.TestTrack)
```

In the Game Window 🖼️, follow the prompts to drive one lap around the race track. 

_Use the Fullscreen buttons to make your Game Window bigger_

![Full screen](/static/tutorials/ai-race/Fullscreen.png "Full Screen")
![Exit full screen](/static/tutorials/ai-race/ExitFullscreen.png "Exit Full Screen")

📌 And remember, you're showing your AI what to do so help it learn from good examples!

~hint What is training data? 💡

---

AI learns from examples. As you drive, the game records the driving situation and the controls you use. These saved examples are your **training data** that AI models learn from.

hint~

## 📊 Look at the data

Delete the ``||racing: teach AI by driving one lap||`` block by dragging it back to the Toolbox.

Then drag a ``||racing: view memories||`` block inside the ``||loops(noclick):on start||`` block.

```blocks
// @highlight
racing.viewMemories()
```

The chart shows data along 2 axis:

The vertical axis shows speed <br/>
⬆️ Top is **Fast** <br/>
⬇️ Bottom is **Slow**

The horizontal axis shows direction <br/> 
⬅️ **Left** are the sharpest left turns <br/> 
➡️ **Right** are the sharpest right turns <br/> 
↕️ **Middle** are the straightaways <br/> 

---

Each dot represents a data sample from your driving:

🔵 Blue dots are **Left** turns <br/>
⚪ White dots are driving **Straight** <br/>
🟠 Orange dots are **Right** turns <br/>

---

Click to the **Right** ➡️ to see data on your acceleration:

⚪ White dots are **coasting** <br/>
🟢 Green dots are **accelerating** <br/>
🔴 Red dots are **braking** <br/>
⚫ Grey dots are **reversing** <br/>

## 🧪 Test your AI

Let's test our AI bot to see how well it drives 🚗

---

Delete the ``||racing: view memories||`` block from the Workspace

Drag a ``||racing: race on Italy for 1 lap||`` block into the ``||loops(noclick): on start||`` block

```blocks
// @highlight
racing.raceOnTrack(racing.Track.Italy, 1, racing.RaceDriver.AI)
```

🤔 Before it starts, predict: will your AI stay on the road at the corners?  How fast will it go?

In the Game Window 🖼️, watch your bot drive. Does its behavior match your prediction? How did it do?

To improve your AI bot's performance, try training it again by dragging another ``||racing: teach AI by driving one lap||`` block inside the ``||loops(noclick):on start||`` block to do another training lap

When you're ready, move on to the next step

~hint Training and Testing 💡

---

Collecting data, training an AI model and testing it is an iterative process.  To get the best models you should go through the process of **training** and **testing** multiple times.

hint~

## 🎨 Design your car

We've practiced our driving, trained our AI, now let's get ready to race! 

First thing we'll do is design our very own race car 🏎️

---
 
Drag a ``||racing: set car logo||`` block into the top of the ``||loops(noclick): on start||`` block

Click on the grey box in the ``||racing(noclick): set car logo||`` block to open the image editor

Design an 8-by-8 logo for the car you will drive

```blocks
// @highlight
racing.setCarLogo(img`
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    `)
racing.raceOnTrack(racing.Track.Italy, 1, racing.RaceDriver.AI)
```

## ♫ Add music

No race is complete without some exciting background music!

---

From the Toolbox, drag a ``||music: play song||`` block into the top of the ``||loops(noclick): on start||`` block

Change ``||music(noclick): until done||`` to ``||music(noclick): looping in background||`` so the music keeps playing throughout the race

In the ``||music(noclick): play song||`` block click on the grey **song** box to open the song composer

Choose instruments and place notes on the lines to make a melody

```blocks
// @highlight
music.play(music.createSong(hex`000e010408020505001c000f0a006400f4010a0000040000000000000000000000000000000002240020002500012c2500290001312b002f0001333000350001363500390001383b003f00013d06001c00010a006400f401640000040000000000000000000000000000000002240000002e00042529312c300032000425292c3135003800042531292c3b003d00042531292c07001c00020a006400f401640000040000000000000000000000000000000003480000000500011905000b00011d0b001000012010001500012515001b0001201b002000011d20002500011925002b00011d2b003000012030003500012535003b0001203b004000011d08001c000e050046006603320000040a002d0000006400140001320002010002190000000b00020d9315001800010d1b001e00010d20003100010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000e00020307150017000203071b001d0002030720002f00020307057f7f7f7f7f7f063e3e3e3e07444444444444444444444444085656565609537f7f7f`), music.PlaybackMode.LoopingInBackground)
racing.setCarLogo(img`
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    `)
racing.raceOnTrack(racing.Track.Italy, 1, racing.RaceDriver.AI)
```

## 🚦 Race!

Moment of truth! <br/>
Let's get Ready, Set, Race! 🏁

---

In the ``||racing: race on Italy for 1 lap||`` block, click on the ``||racing(noclick): Italy||`` drop-down menu and select whichever track you'd like to race on

Then click on the ``||racing(noclick): AI||`` drop-down menu and select ``||racing(noclick): player||``

This will set you as the driver racing against your AI bot! <br/>
Start racing as soon as the countdown completes

```blocks
music.play(music.createSong(hex`000e010408020505001c000f0a006400f4010a0000040000000000000000000000000000000002240020002500012c2500290001312b002f0001333000350001363500390001383b003f00013d06001c00010a006400f401640000040000000000000000000000000000000002240000002e00042529312c300032000425292c3135003800042531292c3b003d00042531292c07001c00020a006400f401640000040000000000000000000000000000000003480000000500011905000b00011d0b001000012010001500012515001b0001201b002000011d20002500011925002b00011d2b003000012030003500012535003b0001203b004000011d08001c000e050046006603320000040a002d0000006400140001320002010002190000000b00020d9315001800010d1b001e00010d20003100010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000e00020307150017000203071b001d0002030720002f00020307057f7f7f7f7f7f063e3e3e3e07444444444444444444444444085656565609537f7f7f`), music.PlaybackMode.LoopingInBackground)
racing.setCarLogo(img`
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    2 2 2 2 7 7 7 7 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    8 8 8 8 5 5 5 5 
    `)
// @highlight
racing.raceOnTrack(racing.Track.USA, 1, racing.RaceDriver.Player)
```

## 🚀 Go further @showdialog

Great race! Did you or your AI Bot make it to the winner's podium? 🥇

🎉 Congratulations on training an AI racing bot!  What did your examples help it learn? What did it struggle with?

Try more racing experiments 🧪
   - Continue training your AI to improve your sample data collection and tune your AI Bot's racing skills
   - Race on different tracks - how does your AI perform on different circuits?  Why might an AI that does well on one track struggle somewhere else?
   - Try training a second AI engine - Bot 2 to compete in the race

```blockconfig.global
racing.raceOnTrack(racing.Track.Italy, 1, racing.RaceDriver.AI)
```

```package
racing=github:riknoll/racing#v0.1.2
```