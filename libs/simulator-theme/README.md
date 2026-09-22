# Simulator Theme

Optional simulator appearance blocks, found under **Game UI** in Extensions.
Adding this extension creates its own **Simulator Theme** toolbox category.

```blocks
simulatorTheme.setTheme(simulatorTheme.Preset.Retro)
simulatorTheme.setLayout(simulatorTheme.Layout.Junior)
simulatorTheme.setColor("background-color", colorHelpers.hex("#123456"))
```

`setTheme` replaces colors/layout; `setLayout` keeps the current colors.
`setColor` accepts an RGB number. Its part input has an editable dropdown matching
the sim theme editor. The nested color picker starts in HEX mode and supports RGB,
HSV, HSL and CMYK too.
Click its color preview to open the picker. Use `colorHelpers.hex(text)` for a hex string.
`reset` restores the theme from the start of the run.
