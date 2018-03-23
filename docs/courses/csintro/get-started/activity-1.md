# Activity: Coordinate Walker

Move walker sprite around the game screen to identify X-Y coordinates

## Learning Objective

Relate screen `(x, y)` coordinates to the corners and middle of the game screen

## Student Activity

* [Use the coordinate walker example to get X and Y coordinates.](#coordinate-walker)
* [Determine **X** and **Y** coordinates for the corners and middle of the the game screen.](#map-game-screen)
* [Record Results in simple diagram](#record-results)

### Coordinate Walker

Use the coordinate walker example to move around the screen and track X and Y coordinates.

**Open [coordinate walker example ](/courses/examples/coordinate-walker)**: to compete the tasks


* **Check the location**: click on the screen and then press the "A" button on the game pad (or space bar key on keyboard) to display the starting location coordinates
  * What are the two coordinate values?
* **Move the sprite**: click on the game pad (or use keyboard a, w, s, d keys) to move the sprite.  Check the coordinates after moving.
    * How do coordinates change when moving up?
    * How do coordinates change when moving right?



### Map Game Screen

Two dimensional game screen coordinates are represented by values for **X** and **Y** axis locations.

![XY Coordinates](/static/courses/csintro/get_started/coordinates.png)

* Move to the sprite to the top edge of the screen
  * what is the **Y** coordinate at the top of the screen?  
  ![sprite at top edge of screen](/static/courses/csintro/get_started/coordinate_edge.png)

* Move to each of the corners and **map the coordinates** as a pair of X and Y values like `(x,y)`
  * Restart the game. What are the coordinates when you start? Should be `(64,64)`.
  * **Record** the coordinates at the **Top Right** corner?
  * **Record** the coordinates at the **Bottom Right** corner?
  * **Record** the coordinates at the **Bottom Left** corner?
  * **Record** the coordinates at the **Top Left** corner? 

![map the coordinates at the corners](/static/courses/csintro/get_started/coordinatesmap.png)

### Record Results

Record Results in a simple diagram

![map the coordinates results](/static/courses/csintro/get_started/recordcoordinates.png)

### Challenge

**Bring off-screen sprite back into view.**
 Challenge a peer to bring the sprite back into view after you move the sprite off screen.

1. **Partner 1:** Move the walker sprite off past the area of the visible game screen (not too far)
2. **Partner 2**: Return the sprite to the screen using only two directions of the game controls
    * use the game pad **A** button to get the *hidden* sprite coordinates
    * pick 1: `up` or `down` Y direction
    * pick 1: `left` or `right`  X direction
