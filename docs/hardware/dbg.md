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

Here we propose simple and cost effective solutions, which do not require soldering,
and has zero PCB cost.

## One row connector

Use a standard 0.1" spacing header holes with 40mil drill and place them so that
the middle of the holes are exactly 0.1" from the edge of the board.
Then use a two-row male header, and plug it into the holes on the short side
and connect female jumper cables on the long side.
The header will bend a little, forcing good electrical connection.
You usually want to plug it starting from the edge.

![Debug connector](/docs/static/hardware/dbg/dbg.jpg)

![Plugging it in](/docs/static/hardware/dbg/dbgplug.gif)


## Two row connector

Like the above, but use castellated holes for the second row of pins.

## Pinout

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

## 0.05 Version

If you don't have much space on your board, you can also use 0.05 inch header.
If the connector is at the top of the board, GND should be on the left
(also, use square pad for GND).
We got best results using drill size of 22 mil where the middle of the holes is 52 mil from the edge
of the board.
The tolerances here are much tighter than with the 0.1 inch connector, but it seems to work quite well.
The resulting connector then takes 5mm x 2mm at the edge of the board.

![0.05 connector](/docs/static/hardware/dbg/xs-overview.jpg)

![0.05 connector parts](/docs/static/hardware/dbg/xs-parts.jpg)

To connect to it, use a 0.05 inch header, 2x4 pins, plugged into 10 pin IDC connector.

![0.05 connected](/docs/static/hardware/dbg/xs-connected.jpg)

You can create a cable by splicing a standard 10 pin IDC cable in half.
When the cable gets to the target board from the top, wire 1 (red) should be on the left,
we'll use it for GND.
Label which side is debugger (D) and target (T) with a marker.
On the target side, split all wires of the ribbon cable and remove insulation.
Then twist together wires 1 and 2, 3 and 3, ..., 9 and 10; this will make the connector work on both sides.
Now, split and remove insulation from wires 1-4 of the debugger side.
Now, twist together as follows:

* GND: 1-2 (target) with 3 (debugger)
* SWCLK: 3-4 (target) with 4 (debugger)
* 3V: 5-6 (target) with 1 (debugger)
* SWDIO: 7-8 (target) with 2 (debugger)o

You can connect target wires 9-10 to 6 (SWO) or 10 (RESET), or you can just skip them.

Finally, put electrical tape around the twists and then the whole assembly.
It's good to make one cable go around and back and put tape over that.

## Credits

Various pieces of the idea came from Steve Hodges, Jonny Austin, Michal Moskal, and James Devine.
