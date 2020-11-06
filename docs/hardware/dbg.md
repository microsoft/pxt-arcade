# Debug connector

It's often needed to connect a SWD debugger to a board.

We found [Black Magic Probe](https://github.com/blacksphere/blackmagic/wiki) to work well,
for a variety of MCUs, and it doesn't require openocd.
You can use their beautifully made hardware, or flash an existing
board with Black Magic firmware.
People also often use ST Link v2 clones, especially for STM chips.

One way or another, you need to connect the SWDIO and SWCLK lines from the
debugger to the MCU.
Often these are connected to test pins, to which you have to solder.
Sometimes there is a standard 0.05" 10 pin ARM debug connector,
however these require a part to be soldered on the board.
Otherwise, people use a footprint on the PCB to which they connect a 
special proprietary (and expensive) connector cable.

Here we propose two simple and cost effective solutions, which do not require soldering,
and has zero PCB cost.

## Hack-connect XS

The idea is to use a standard 2x5 pin 0.05" IDC ARM-Cortex debug connector
and plug in a male 0.05" header into it (a male 0.05" IDC could be also used,
but they are harder to find).
Then we put 22mil holes on the PCB with standard 50mil pin spacing, but 62mil row spacing.
The male pins lock into the holes.

![Hack-connect XS parts](/docs/static/hardware/dbg/xs-parts.jpg)

![Hack-connect XS connected](/docs/static/hardware/dbg/xs-connected.jpg)

The restricted area (where the plastic from the header touches the PCB) is only about 5x3mm, 
and is usually further reduced by placing the connector in the corner of the board.
Further, no components higher than 2mm can be placed under the connector itself
(most small passives fit).
We use the following pinout:

![Hack-connect XS layout](/docs/static/hardware/dbg/xs-layout.png)

The white line on the silk shows the side of the PCB where the connector should be plugged in,
and also the side where the red wire on the ribbon cable is.
Note that it is impossible to plug it incorrectly.

Pins 1-4 are the same as on Cortex connector.
Unfortunately, Cortex connector places nRESET line on pin 10, which is way out.
We instead use pin 5 for RESET (which is GND on Cortex connector).
To make this work, we suggest you do one of the following:
* not insert the male pin 5 into your connector (not ideal, since it's now possible to connect the cable incorrectly)
* not connect the RESET line on your board
* cut the cable connected to pin 5 (you can cut all wires 5-10); optionally connect that cable through a tactile button to GND to get an external reset button
* use a debugger with custom connector (it will still work with standard Cortex connector, as there is several GND lines)

It works well to put a drop of super-glue on the connector, to keep the male header and female housing together.
Otherwise, the male header will often stay in the board when unplugging.

### Pogo-connector

It's also possible to create a connector with pogo pins for quick programming of a number of devices
or use in a test rig.

![Hack-connect XS pogo programming](/docs/static/hardware/dbg/xs-pogo-prog.jpg)

Use P50-E2 0.68mm diameter pins (head diameter of 0.9mm).

You can use two Hack-connector XS PCBs to hold the pins together,
but you will need to order the holes a little bigger.

![Hack-connect XS pogo with 2 PCBs](/docs/static/hardware/dbg/xs-pogo-pcb.jpg)

Once everything is in place, use glue gun or similar to secure the pins to the PCBs.

![Hack-connect XS pogo with glue](/docs/static/hardware/dbg/xs-pogo-glue.jpg)

### CAD files

Libraries for PCB design software will be made available 
in the [GitHub repo](https://github.com/microsoft/pxt-arcade/tree/master/docs/hardware/dbg).
Currently, there's one for EagleCAD.


## Hack-connect classic

Use a standard 0.1" spacing header holes with 40mil drill and place them so that
the middle of the holes are exactly 0.1" from the edge of the board.
Then use a two-row male header, and plug it into the holes on the short side
and connect female jumper cables on the long side.
The header will bend a little, forcing good electrical connection.
You usually want to plug it starting from the edge.

![Debug connector](/docs/static/hardware/dbg/dbg.jpg)

![Plugging it in](/docs/static/hardware/dbg/dbgplug.gif)


### Two row connector

Like the above, but use castellated holes for the second row of pins.

### Pinout

The recommended pinout of one row header:

```
GND SWCLK 3V SWDIO
```

Do not put 3V and GND on opposite ends, since plugging the connector the wrong way
would cause -3V to run through MCU.

You can add another GND connection to the right to make the plug symmetric as far
as power is concerned.
If you want to add a RESET pin, or a logging pin (possibly SWO, but can be custom as well),
also add it to the right.

Note that with the two row cable plugged into a one row of holes, it only
matter if you plug it in from the top or bottom of the board, which is quite
easy to notice.
Rotating the connector will result in no electrical connection.


## Credits

Various pieces of the idea came from Steve Hodges, Jonny Austin, Michal Moskal, and James Devine.
