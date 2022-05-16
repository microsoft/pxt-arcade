# Kiosk

## config.json settings

These settings apply only to the kiosk user experience and do not impact sim gameplay. It's assumed all gamepads use the same configuration.

|Key|Purpose|
|---------------------------------|-|
|GameDataUrl                      |Path to the game data JSON file with details about the games to include.|
|Debug                            | Uses debug settings, such as figuring out where the game data URL is in production vs. local debugging.|
|UseInPlaceGameListScroll         | If true, the game list keeps the selected game at the top and scrolls the list when the joystick is moved. If false, the list is static and the selected item moves up or down.|
|HighScoresToKeep                 | The maximum number of high scores to keep for a given game.|
|HighScoreInitialsLength          | The number of initials to allow users to enter.|
|HighScoreInitialAllowedCharacters| The list and order of characters to allow in high scores.| 
|GamepadPollLoopMilli             | How often the gamepads are polled for user interaction with the kiosk menus and other inputs. If this is too large, actions may be missed, such as a quick button press. If it's too small, then a single action may be interpretted as multiple (like a single button press counting twice).|
|GamepadCacheMilli                | How often the gamepad state is cached. Since multiple components access the browser's Navigator.getGamepads() API, we use a caching mechanism to optimize how often they're accessed. This value should be smaller than the gamepad polling loop.|
|GamepadAButtonPin                | The pin index for the A button. |
|GamepadBButtonPin                | The pin index for the B button.|
|GamepadEscapeButtonPin           | The pin index for the Escape button. This button leaves a game without waiting and returns the user to the menu.|
|GamepadResetButtonPin            | The pin index for the Reset button.|
|GamepadMenuButtonPin             | The pin index for the Menu button. Note that since this menu is used by games, it does not return the user to the kiosk menu. |
|GamepadLeftRightAxis             | The gamepad axis index for left/right detection.|
|GamepadLeftRightThreshold        | The threshold to detect for a "right" action. It's negated to detect "left" actions.|
|GamepadUpDownAxis                | The gamepad axis index for up/down detection.|
|GamepadUpDownThreshold           | The threshold to detect for a "down" action. It's negated to detect "up" actions.|

## Localhost testing
```
npm run start
```

## Deploy
Run `depoly.ps1` from `pxt-arcade/kiosk/`.