# Escape your house!

```template
hoc.near_door(function() {
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
    	
    } else if (true) {
    	
    } else if (true) {
    	
    } else if (true) {
    
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
   
})
```

## Introduction @unplugged

Finally! Quarantine is over and you can go see your friends. But, you've been inside your room
for so long that some obstacles have sprung up between you and the front door. Luckily, you
can use code to get past them! 

## Room 1, pt 1 @fullscreen

In order to pick the door's lock, you need to use an Event block. An **Event** is something that 
triggers the code to run. In this case, the event is being near the door, and the code that 
will run is picking the lock.

```blocks
hoc.near_door(function () {
    
})
```

``||Hoc:when near door||`` is an event block. The code to pick the door's lock will go inside of this block.

## Room 1, pt 2

When you're near the door you'll need to pick the lock to make it open. From the ``||Hoc:Hoc||`` drawer, find the 
``||Hoc:pick lock||`` block and drag it into the ``||Hoc:When near door||`` Event block. 

Try going up to the door to pick the lock!

```blocks
hoc.near_door(function () {
    hoc.pick_lock()
})
```

## Room 2, intro @unplugged

You made it to your parent's office! Geez, it looks like no ones dusted in here in weeks. 
Uh oh! Some evil dust bunnies are blocking the door. They look angry. Don't touch them or 
they might attack. Let's use the fan to blow them away. 

## Room 2, pt 1

Let's make the fan turn on when you press the **A button**. That means that we will put our code
in the ``||controller:on A pressed||`` block that's already in the workspace.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

## Room 2, pt 2 @fullscreen

You can only turn on the fan when you're near it. From the ``||logic:Logic||`` Toolbox drawer, find
a ``||logic:if then||`` block. Put this inside the ``||controller:on A pressed||`` block.

```blocks
if (true) {

}
```

In coding, we use an **if statement** when our program needs to make a choice. **If** something 
is happening in our game, we want the program to do a certain task. The something that our program 
is looking for, is whether the player is near the fan.

## Room 2, pt 3

From the ``||Hoc:Hoc||`` drawer, find the ``||Hoc:near fan||`` block. Drag this block to the ``||logic: if then||``
block and put it in the **true** slot. Now, when the **B button** is pressed, our code will check
if the player is near the fan.

```blocks
if (hoc.near_fan()) {

}
```

## Room 2, pt 4

When the **A button** is pressed and our player is near the fan, we want to turn the fan on. From
the ``||Hoc:Hoc||`` drawer find the ``||Hoc:fan on||`` block. Put it inside the ``||logic:if then||`` block.
Go next to the fan and press B to try it out! While the fan is on, run to the door!

```blocks
if (hoc.near_fan()) {
    hoc.fan_blows_air()
}
```

## Room 3 : Bathroom @unplugged

Phew! There are no evil dust bunnies in here...but it looks like the bathroom is flooded. The sink,
toilet, and shower are all overflowing. You'll need to fix them using code to get to the door.

## Room 3, pt 1

Luckily, we can use more ``||logic:if then||`` blocks to fix these faucets. But this time, we 
need our program to check if the player is near the sink, the toilet, or the shower. For this, 
we'll use the longer ``||logic:if then||`` block that's on the workspace in the ``||controller:on B pressed||``.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	if (true) {
    	
    } else if (true) {
    	
    } else if (true) {
    	
    } else if (true) {
    
    }
})
```

## Room 3, pt 2

From the ``||Hoc:Hoc||`` Toolbox drawer, find the ``||Hoc:near bathroom sink||`` block and drop it in place of 
the **true** in the ``||logic:if then||`` block.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	if (near_bathroom_sink()) {

    } else if (true) {
    	
    } else if (true) {
    	
    } else if (true) {
    
    }
})
```

## Room 3, pt 3

From the same ``||Hoc:Hoc||`` drawer, find the ``||Hoc:fix sink||`` block and drag it into the 
``||logic:if near_kitchen_sink then||`` block. Now, when the player is near the sink and pressed the 
**B button** the code will fix the sink. Try it.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	if (near_bathroom_sink()) {
        hoc.fix_sink()
    } else if (true) {
    	
    } else if (true) {
    	
    } else if (true) {
    
    }
})
```

## Room 3, pt 4

Now, the code will fix the sink. Time to fix the toilet and shower! This is what the two 
``||logic:else if||`` areas are for!

## Room 3, pt 5

Open the ``||Hoc:Hoc||`` drawer and find the ``||Hoc:near toilet||`` block. Drag it next to the ``||logic:else if||``
in the ``||logic:if near_kitchen_sink then||`` block.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hoc.near_bathroom_sink()) {
        hoc.fix_sink()
    } else if (hoc.near_toilet()) {
    	
    } else if (true) {
    	
    } else if (true) {
    
    }
})
```

Now when we press the **B button** the code will check if the player is near the sink. 
If they're not near the sink, the code will check if the player is near the toilet.

## Room 3, pt 6

From the ``||Hoc:Hoc||`` drawer, find the ``||Hoc:fix toilet||`` block and drag it underneath
``||logic: else if near_toilet||``. Now if the **B button** is pressed and the player is near the 
toilet, the code will fix the toilet. Go ahead and try it out!

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hoc.near_bathroom_sink()) {
        hoc.fix_sink()
    } else if (hoc.near_toilet()) {
    	hoc.fix_toilet()
    } else if (true) {
    	
    } else if (true) {
    
    }
})
```

## Room 3, pt 7

Finally, it's time to fix the shower. This can be done in the same way as the sink and toilet.
From the ``||Hoc:Hoc||`` drawer, find the ``||Hoc:near shower||`` block. Drag it next to the last
``||logic:else if||`` block.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hoc.near_bathroom_sink()) {
        hoc.fix_sink()
    } else if (hoc.near_toilet()) {
    	hoc.fix_toilet()
    } else if (hoc.near_shower()) {
    	
    } else if (true) {
    
    }
})
```
Now when the **B button** is pressed, the code will check if the player is near the sink, the toilet, 
then the shower.

## Room 3, pt 8

From the ``||Hoc:Hoc||`` drawer, find the ``||Hoc:fix shower||`` block and drag it underneath
``||logic: else if near_shower||``. Now if the **B button** is pressed and the player is near the 
shower, the code will fix the shower. It's time to finally stop all this flooding!

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hoc.near_bathroom_sink()) {
        hoc.fix_sink()
    } else if (hoc.near_toilet()) {
    	hoc.fix_toilet()
    } else if (hoc.near_shower()) {
    	hoc.fix_shower()
    } else if (true) {
    
    }
})
```

## Room 4, kitchen @unplugged

Yikes! There's a lot of mold floating around this kitchen. It seems to be coming
from the dirty dishes in the sink. You'll need to scrub all the dishes before leaving
or you'll be grounded!

## Room 4, pt 1

We can only clean the dishes when we're near the sink. Use the last ``||logic: else if||``
to check if the player is near the kitchen sink. From ``||Hoc:Hoc||`` find 
``||Hoc:near kitchen sink||`` and drag it into the last ``||logic: else if||`` slot.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hoc.near_bathroom_sink()) {
        hoc.fix_sink()
    } else if (hoc.near_toilet()) {
    	hoc.fix_toilet()
    } else if (hoc.near_shower()) {
    	hoc.fix_shower()
    } else if (hoc.near_kitchen_sink()) {
    
    }
})
```

## Room 4, pt 2

From ``||Hoc:Hoc||`` find ``||Hoc:clean dishes||`` and drag it inside the last 
``||logic: else if||`` slot. Now, when the player is near the kitchen sink and
the **B button** is pressed, the player will clean **1** dish.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hoc.near_bathroom_sink()) {
        hoc.fix_sink()
    } else if (hoc.near_toilet()) {
    	hoc.fix_toilet()
    } else if (hoc.near_shower()) {
    	hoc.fix_shower()
    } else if (hoc.near__kitchen_sink()) {
        hoc.clean_dishes()
    }
})
```

## Room 4, pt 1 @fullscreen

But, there are **5** dishes that need to be cleaned. That means we'll need to use 
a **loop** to make sure all 5 dishes get cleaned.

```
Loops let you repeat a piece of code a certain number of times or until a certain 
condition is met. 
```

## Room 4, pt 3

From the ``||loops:Loops||`` Toolbox drawer, find the ``||loops:repeat||`` block.
Place this around the ``||Hoc:clean_dishes||`` block. Change the number to **5**.
Now, you'll be able to clean all the dishes and leave the kitchen.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hoc.near_bathroom_sink()) {
        hoc.fix_sink()
    } else if (hoc.near_toilet()) {
    	hoc.fix_toilet()
    } else if (hoc.near_shower()) {
    	hoc.fix_shower()
    } else if (hoc.near_kitchen_sink()) {
        for (let index = 0; index < 5; index++) {
            hoc.clean_dishes()
        }
    }
})
```

## End

You made it out of your house! Congrats!

```package
hoc-escape=github:ksavage-work/hoc-home-escape
```