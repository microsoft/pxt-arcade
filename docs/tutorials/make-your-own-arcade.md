# Make Your Own MakeCode Arcade

This tutorial will show you how to build your own MakeCode arcade using an Adafruit ItsyBitsy M4 Express, a 1.8" color TFT screen and how to use an Adafruit Circuit Playground Express as a controller for your Arcade.

#### Parts needed

Before you begin, you're going to need a few parts, which are shown in the diagram below.


I've also listed out where you can buy the parts and a brief description of what each part does as well.

* [Adafruit Itsy Bitsy M4 Express] - This will run the code for the Arcade game you will be creating.
* [Circuit Playground Express] - This act as your controller to control the Arcade game.
* [3.5mm Stereo Audio Jack Connector] - This will connect the Itsy Bitsy M4 Express to the Circuit Playground Express, using our JACDAC protocol. 
* [1.8" ST7735R TFT Screen (160x128)] - This will be the screen for your MakeCode Arcade. Note: There are several knockoff ST7735R screens which will have different pin mappings. These screens may also have colors inverted. To fix this, load a bootloader with the correct colors onto your board (described later).

#### Assembling your MakeCode Arcade

The diagram above is what we're going to build towards when everything has been connected.

##### Step 1: Connecting the 1.8" TFT Screen

For now, lets start with connecting the screen. Follow the diagram above and for reference, I've listed a chart that shows the mapping of the pins on the ST7735R Color TFT LCD from Adafruit to the Itsy Bitsy M4 Express.

| ST7735R (Adafruit)  | Itsy Bitsy Pin|
| ------ | ------ |
| LITE | Connect to VHI |
| MISO |Connect to MISO (MI)  |
| SCK | Connect to SCK |
| MOSI | Connect to MOSI (MO) |
| TFT_CS | Connect to A2 |
| CARD_CS | Don't need to connect |
| D/C | Connect to A3 |
| RESET | Connect to A4 |
| VCC | Connect to 3V |
| GND | Connect to GND |

If you have a knockoff screen, the pins will likely be mapped as below. The mappings on the these screen are not quite what they've listed, which is why I've provided this helpful mapping - thanks Michal!

| ST7735R (Knockoff) | Itsy Bitsy Pin|
| ------ | ------ |
| LED- | Connect to GND |
| LED+ | Connect to VHI |
| SD_CS | Don't need to connect |
| MOSI | Don't need to connect |
| MISO | Don't need to connect |
| SCK | Don't need to connect |
| CS | Connect to A2 |
| SCL | Connect to SCK |
| SDA | Connect to M0 |
| A0 | Connect to A3 |
| RESET | Connect to A4 |
| NC | Don't need to connect  |
| NC | Don't need to connect  |
| VCC | Connect to 3V |
| GND | Connect to GND |

##### Step 2: Connecting the 3.5mm Audio Jack Connector to the Itsy Bitsy M4 Express


Follow the diagram above and for reference, I've again listed a small chart that maps the typical 3.5mm Stero audio jack connector/pins to the protocol we will be using later (JACDAC). 

| 3.5mm Connector | JACDAC Protocol|
| ------ | ------ |
| Tip (or Left) | Connect to power source (if you want to draw power) |
| Ring (or Right) | Connect to data or tx line |
| Sleeve (or Ground) | Connect to a ground pin|

Connecting the audio jack simply requires connecting the ring pin of the audio connector to the TX pin of the Itsy Bitsy M4 Express and connecting the sleeve pin of the audio connector to the ground pin of the Itsy Bitsy M4 Express.

##### Step 3: Connecting the 3.5mm Audio Jack Connector to the Circuit Playground Express


Follow the diagram above for reference. Similar to Step 2, connect the ring pin of the audio connector to the TX pin of the Circuit Playground Express and connecting the sleeve pin of the audio connector to the ground pin of the Circuit Playground Express.

##### Step 4: Load an example Arcade Game that uses JACDAC onto the Itsy Bitsy M4 Express

As mentioned earlier, we're going to be using our protocol called JACDAC to connect the Itsy Bitsy M4 Express with the screen to a controller. We do this because the Itsy Bitsy M4 Express contains the logic for the game, but doesn't have enough pins for us to map buttons to an arcade controller. JACDAC lets us hook up different devices using audio connectors/cables, which is why we'll use the Circuit Playground Express as our controller.

Load this code from MakeCode Arcade (beta) onto your Itsy Bitsy M4 Express for the Flappy Bird style game:
OR load this code onto your Itsy Bitsy M4 Express for the Flappy Bird style game:
 
For more information on the JACDAC protocol, check out this link: https://jacdac.org/

##### Step 5: Load controller code onto the Circuit Playground Express that uses JACDAC

The Circuit Playground Express serves as our controller for the games we've already loaded onto the Itsy Bitsy M4 Express. 

Load this code from MakeCode Arcade (beta) onto your Circuit Playground Express to use it as a controller :

##### Step 6: Connect the the Itsy Bitsy M4 Express to the Circuit Playground Express

Using a standard audio cable, connect your Itsy Bitsy M4 Express to the Circuit Playground Express, as shown in the picture below.

##### Step 7: Enjoy!

When everything is plugged in, turn on both the Itsy Bitsy M4 Express and the Circuit Playground Express and start playing!!

### Todos

 - Add Arcade code example link with JacDac\
 - Add CPX code example link with JacDac
 - Add pictures
 - Add alternate bootloader for inverted colors
 - Add gifs of example game running

### Resources
 - Makecode Arcade (beta): https://arcade.makecode.com/beta
 - Makecode Maker (beta): https://maker.makecode.com/beta
 - JACDAC: https://jacdac.org/
 - Adafruit: https://www.adafruit.com

   [Adafruit Itsy Bitsy M4 Express]: <https://www.adafruit.com/product/3800 />
   [Circuit Playground Express]: <https://www.adafruit.com/product/3333 />
   [3.5mm Stereo Audio Jack Connector]: <https://www.adafruit.com/product/2791 />
   [1.8" TFT Screen (160x128)]: <https://www.adafruit.com/product/358/>
