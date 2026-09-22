# Simulator Theme

Optional simulator appearance blocks, found under **Game UI** in Extensions.
Adding this extension creates its own **Simulator Theme** toolbox category.

```blocks
simulatorTheme.setTheme(simulatorTheme.Preset.Retro)
simulatorTheme.setLayout(simulatorTheme.Layout.Junior)
simulatorTheme.setColor("background-color", "#123456")
```

`setTheme` replaces colors/layout; `setLayout` keeps the current colors.
`setColor` changes just one color using a six-digit RGB hex string. Its part input
has an editable dropdown including Retro's `button-a-fill`, `button-b-fill`,
`console-border`, `screen-side-border` and `screen-top-bottom-border`. Type another
part name or supply a string expression, without the `--sim-` prefix.
`reset` restores the theme from the start of the run.
These blocks do not change the game's palette, project settings or account
preferences, and do nothing on hardware. Explicit simulator URL theme overrides
take precedence. Requires an Arcade simulator build containing this extension's shim.