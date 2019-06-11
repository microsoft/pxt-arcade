# Cardboard Control Panel

This guide will show you how to make a 2 player Arcade control panel **made of cardboard!**
You do not need any particular building skills to successfully build your own, let's do it!

![](/static/hardware/rpi/cardboard-control-panel/controlpanel.jpg)

## Materials

Let's go through the materials and tools needed to build the control panel.

### ~ hint

Just like any cooking recipe, you will likely be missing some of the tools or parts.
Don't let this stop you! This guide provides a general guidance but you can complete the project in 
many different ways.

### ~

![](/static/hardware/rpi/cardboard-control-panel/materials.jpg)

### Parts

* **a cardboard box** that will become the control panel. If you are buying a PC monitor to build the Arcade,
use the box of the monitor.
* **2 joysticks & 7 buttons** for a 2 players OR **1 joystick & 5 buttons** for 1 player. Search for "Arcade Game Kit" to find a kit near you (stay away from the LED buttons and the analog joysticks).
* **33 Male-to-Female jumper wires** to connect the buttons to the Raspberry Pi. Buy a few more in case you make a mistake.
* **electrical tape** to secure the jumper wires to the arcade button connectors.
* **zip ties** to secure the joysticks; you can also use machine screws if you have some at hand.

### Tools

* **Cardboard cutting tools**: scissors, rotary cutters, carboard knife. You'll need something to cut into the cardboard.
* **Wire stripper, cutter**to cut and strip some of the jumper wires.
* **Crayon or sharpie** to mark where to drill
* **Glue gun** (optional): if you make a mistake, a glue gun can easily save the day. Optional but recommended.
* **1 inch drill bit + cordless drill**: while you can drill the button holes with a manual tool, the 1" drill bit is the best at making a clean hole for the buttons. Recommended.

## Prepping the cardboard box

### Reinforcement

We recommend add 1 or 2 layers of cardboard on the surface that will hold the buttons and joystick.

- [ ] cut out additional cardboard sheets 

![](/static/hardware/rpi/cardboard-control-panel/cardboardlayers.jpg)

- [ ] use a glue gun to attach them to the control panel surface.

![](/static/hardware/rpi/cardboard-control-panel/sandwich.jpg)


### Button layout

Use a marker to **trace** where your buttons and joysticks will go on the box. 
For the buttons, use the black plastic ring to trace their size; for the joystick, remove the stick if needed to trace them.

![](/static/hardware/rpi/cardboard-control-panel/layout.jpg)

#### ~ hint

##### Where should my buttons go?

We purposely did not provide precise measurements in order to encourage you to create your own layout.

* are my buttons too far apart?
* should buttons be aligned or slightly diagonal?

#### ~

### Holes

For best results, we recommend using a drill bit and a cordless drill. You could also use manual cardboard
cutting tools but it is hard to achieve a perfect hole cut.

- [ ] Use a 1" bit to drill the holes for the buttons and joystick stick. 

![](/static/hardware/rpi/cardboard-control-panel/oneinchdrill.jpg)

- [ ] drill 1 additional hole in the center to pass the wires.

![](/static/hardware/rpi/cardboard-control-panel/layoutholes.jpg)

- [ ] use a screwdriver or the blade of the scissor to cut a **small** hole on the corner of the joystick.
The hole should be large enough to let a **zip tie** go through (or a machine screw).

![](/static/hardware/rpi/cardboard-control-panel/joystickdrill.jpg)

### ~ hint

#### Fresh paint!

If you plan to paint or customize your control panel, **now** is a great time to do it... Before it gets populated with the electronics.

### ~

- [ ] try squeezing a few buttons and zip ties in the holes. If they don't fit it, try rotating them in just like a screw.

![](/static/hardware/rpi/cardboard-control-panel/squeeze.jpg)

- [ ] cut an access door at the back to allow easier wiring later on

![](/static/hardware/rpi/cardboard-control-panel/backdoor.jpg)

## Prepping the buttons

For each of the buttons, 

- [ ] connect the JST button connector cable. Those are the cables that came with your Arcade game kit and end with a white square plastic connector (named JST connector)

![](/static/hardware/rpi/cardboard-control-panel/button.jpg)

- [ ] insert 2 male jumper wires into the JST connector

![](/static/hardware/rpi/cardboard-control-panel/headers.jpg)

- [ ] secure the male jumper with some electrical tape. Make sure to pull hard on the tape to stretch it as you tape it.

![](/static/hardware/rpi/cardboard-control-panel/headerstape.jpg)

- [ ] Using the wire stripper, strip one of the female jumper wire (strip around 1/2" or 1cm)

![](/static/hardware/rpi/cardboard-control-panel/strip.jpg)

Repeat this process for the 7 arcade buttons.

![](/static/hardware/rpi/cardboard-control-panel/allwires.jpg)

- [ ] grab the 7 **stripped** jumper wires and thread them together. Use electrical tape to keep the cables together.

![](/static/hardware/rpi/cardboard-control-panel/bundle.jpg)

- [ ] strip the **male** connector of a jumper wire and thread it around the bundle of you just created. Use electrical tape to secure it all.

![](/static/hardware/rpi/cardboard-control-panel/gndwire.jpg)

### ~ hint

If you have access to a soldering iron, we strongly recommend to add a bit of solder on the threaded cables to guarantee a great electrical connection.

### ~

## Prepping the joysticks

For each of joysticks,

- [ ] connect the joystick cable on **COM** and **NO** terminals.

![](/static/hardware/rpi/cardboard-control-panel/joystick.jpg)

- [ ] connect 2 jumper wires to the JST connector
- [ ] strip one jumper wire for each connector

Repeat these steps for the 4 connectors of the joystick.

![](/static/hardware/rpi/cardboard-control-panel/joystickconnectors.jpg)


### ~ hint

You can use small zip ties to bundle cables together and avoid a spaghetti-like mess of wires.

![](/static/hardware/rpi/cardboard-control-panel/joystickzip.jpg)

### ~

- [ ] join the 4 stripped jumper wire into a bundle

![](/static/hardware/rpi/cardboard-control-panel/joystickbundle.jpg)

- [ ] strip the **male** connector of a jumper wire and connect it to the bundle

## Assembly

- [ ] insert a zip tie at each corners of the joystick and use another zip tie inside the box to secure the joystick base

![](/static/hardware/rpi/cardboard-control-panel/zip.jpg)

- [ ] insert all the buttons and secure the plastic rings 

![](/static/hardware/rpi/cardboard-control-panel/buttons.jpg)

- [ ] attach all the button bases to the plastic buttons

![](/static/hardware/rpi/cardboard-control-panel/wired.jpg)


**WELL DONE**, we are now ready to connect the control panel to the Raspberry Pi Zero!