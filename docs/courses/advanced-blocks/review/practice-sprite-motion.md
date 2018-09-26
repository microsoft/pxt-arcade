# Sprite Motion Practice

## Student Task #1: Platformers (without platforms)

In the lesson for sprite motion, we used ``||sprites:change by||`` blocks a bunch of times to gradually change the x and y velocities for our sprite. This actually represents some more realistic (in space) physics, but we want to make some games, so let's use more common game physics!

1. Make a sprite that will be our character we'll be moving around
2. Add an ``||controller:on right button press block||``, and use a set sprite block to set the vx (velocityx) to some positive value of your choosing. This is the difference from our earlier example: instead of using change by, we're just setting directly. We'll see that this makes our movement much more sharp and sudden
3. Add an ``||controller:on left button press||`` block and a set vx block just like before. This time, however, we'll use some negative value of your choosing. This will have our sprite move in the opposite direction of when the vx was positive
4. Test it out! If you switch back and forth between the left and right arrows, you'll notice it abruptly switches direction with no in-between slowing down and speeding back up
5. You may have noticed about our game so far is that our sprite just glides forever. It maybe pretty fun to watch, but it's not quite realistic to most games. Instead, let's make it so that our sprite only moves when we have one of the two left/right keys pressed. Here you'll want to add an ``||controller:on any button release||`` block so that upon key release we can perform some different actions. Reset the vx and vy variables to be something appropriate so that our sprite stops moving. (Hint: If negative x velocity makes our sprite go left and positive x velocity go right, how can we get a velocity that's in between?)
6. Add more movement to the y velocity directions. Try playing around with what we've already done (setting velocities, changing velocities by some amount) and some of the still unexplored options like setting and changing acceleration by some amount
