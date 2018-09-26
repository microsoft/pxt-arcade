# Conditionals Practice

## Student Task #1: Summer Countdown

1. Make a sprite that will be our player for this game and set a new variable called ``||variables:schoolDaysLeft||`` to be some number near 50. You'll also want to set the horizontal position of your sprite to somewhere on the left side of the screen
2. On any button press, subtract 1 from schoolDaysLeft
3. Here's where we'll add an ``||logic:if||`` / ``||logic:else||`` to say different messages depending on how many days of school are left
	* If there are no more school days left, have your sprite say "Done with school!!". To do so, use a logic block that can compare numbers to use schoolDaysLeft with some other value)
	* Otherwise, have your sprite say how many more days of school are left. For example if there were 48 more days of school left, an ideal message would be "48 days of school left!!". You'll have to use the ``||text:join||`` block to join a variable and string message together
4. Try running it! The countdown should work right now, but we can use conditional blocks to make this a little more fancy.
	* Add some more logic so that if it's the final week (1 to 7 days of school left), the sprite doesn't say any of the countdown stuff, but instead says "FINAL WEEK!! WOOHOO!!". You'll need to add another branch to your current ``||logic:if||`` / ``||logic:else||`` (click the + button bottom of the blue if block to add another branch) to add this behavior in.
	* Add some more logic (another branch to the ``||logic:if||`` / ``||logic:else||``) so that if the ``||math:remainder of||`` schoolDaysLeft divided by 7 is = 0, the sprite should say how many weeks there are left instead. (There will be schoolDays / 7 weeks left at that point).

## Student Task #2: Dream Fictional Job Survey

In this example, we'll explore using conditionals inside other conditionals. We'll be surveying the user by asking yes / no questions to figure out what fictional job suits them. Here's what the logic of our game will look like.

![Job Logic Flowchart](/static/courses/csintro/review/fictional-job-survey.png)

Each of the questions will represent conditional blocks, and depending on which answer the user gives back, we'll go down one side of the conditional, otherwise we'll go down the other side.

1. Try adding in the left side branch first and ignore the upper right side. Add an ``||logic:if||`` / ``||logic:else||`` block that will splash "job prediction: dragon slayer" in the first branch and "job prediction: dragon rider" in the second branch. The condition to figure out which branch to go down will be based on the `ask` block. Use "Would you like to fight them?" as the prompt text, and the user will press A or B in response. That response will evaluate to true or false and can be used like any other condition like we've used earlier. Test it out and make sure that works.
2. Next, add in a block to represent the previous question, "Would you like to see dragons?". This block should include the ``||logic:if||`` / ``||logic:else||`` block made in step one. 
3. Expand the conditional from the previous step so that the else branch includes the logic for "Would you prefer to be the authority over those around you?". This means you will need to add another ``||logic:if||`` / ``||logic:else||`` block asking that question that decides between the two answer you choose, and put it inside the main else branch.
4. Get creative! Feel free to add some more questions and fun jobs as possibilities.
