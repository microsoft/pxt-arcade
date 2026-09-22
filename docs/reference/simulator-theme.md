# Simulator Theme

Change the Arcade simulator's case colors and layout while a game runs.
Add **simulator-theme** from **Extensions → Game UI** to use these blocks.

```blocks
simulatorTheme.setTheme(simulatorTheme.Preset.Retro)
simulatorTheme.setColor("button-a-fill", colorHelpers.hex("#123456"))
simulatorTheme.setColor("button-b-fill", colorHelpers.rgb(255, 128, 64))
```

* **Set simulator theme** applies a preset's colors and layout.
* **Set simulator layout** changes the layout, keeping the current colors.
* **Set simulator color** changes one part using an RGB number from the nested
	color picker (RGB, HSV, HSL, CMYK or HEX). Choose
	from the editable dropdown (including Retro's extra parts), type another part
	name, or supply a string variable. Use names without the `--sim-` prefix.
	The picker starts in HEX mode; its preview opens the color editor.
	Numeric expressions work too; convert hex strings with `colorHelpers.hex`.
* **Reset simulator theme** restores the theme selected at the start of the run.

This affects only the simulator case, not the game's palette or saved theme
preferences. Hardware is unaffected. Themes forced through the simulator URL
are not overridden.

```package
simulator-theme
```