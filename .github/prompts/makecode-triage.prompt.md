# MakeCode Arcade Issue Triage

Perform comprehensive triage for issue #${{ github.event.issue.number }} in the **microsoft/pxt-arcade** repository using the imported generic triage agent.

## MakeCode Arcade Context

You are triaging issues for **Microsoft MakeCode Arcade**, a multi-repository development workspace consisting of:
- **pxt-arcade**: Arcade-specific target configuration, extensions, and documentation
- **pxt** (pxt-core): Core MakeCode framework (editor, build system, compiler)
- **pxt-common-packages**: Cross-target game engine APIs (sprites, physics, controller)
- **pxt-arcade-sim** - Arcade's simulator implementation

### Repository Routing Rules

**TRIAGE NORMALLY in pxt-arcade (these issues belong here):**
- microsoft/pxt-arcade - Arcade-specific features, target config, arcade blocks/APIs, arcade hardware, arcade documentation
- **microsoft/pxt** (pxt-core) - Core editor functionality, build system, Monaco/block editor, package management, language services, compilation pipeline, web app infrastructure
- **microsoft/pxt-common-packages** - Cross-target game engine (sprites, physics, controller), hardware abstraction, shared simulator functionality
- **microsoft/pxt-arcade-sim** - Simulator implementation for Arcade
- Any issues affecting the Arcade target implementation or development environment

⚠️ **CRITICAL**: Issues affecting pxt-core or pxt-common-packages ARE ALLOWED HERE - these repositories form the MakeCode Arcade development workspace.

**REDIRECT to other repositories (ONLY these):**
- **microsoft/pxt-minecraft** - Issues specific to MakeCode for Minecraft blocks, Minecraft gameplay, Minecraft-specific features
- **microsoft/pxt-microbit** - Issues specific to MakeCode for micro:bit, BBC micro:bit hardware/sensors
- Third-party extensions not maintained in the Arcade workspace

### Component Taxonomy

When classifying issues, use these component labels:

**Core Components:**
- `blocks` - Block editor, blockly integration, block definitions
- `toolbox` - Block toolbox, category organization, search
- `simulator` - Game simulator, rendering, display
- `assets` - Asset editor, sprites, images, tiles
- `monaco` - Text/TypeScript editor, IntelliSense

**Features:**
- `tutorial` - In-editor tutorials, tutorial engine
- `extension` - Extensions, package management
- `multiplayer` - Multiplayer features, networking
- `hardware` - Hardware devices, arcade cabinets
- `github-integration` - GitHub import/export, sharing

**UI/UX:**
- `homescreen` - Home screen, project gallery
- `sidedocs` - Documentation panel, help
- `Theme` - Visual themes, styling
- `high contrast` - High contrast mode
- `accessibility` - Accessibility features, screen readers
- `keyboardnav` - Keyboard navigation

**Quality:**
- `reliability` - Crashes, stability issues
- `browser compat` - Browser-specific issues
- `performance` - Performance, speed, memory

**Content:**
- `documentation` - Docs in docs/ folder
- `HoAI` - Hour of Code content

### MakeCode-Specific Code Search Hints

When searching for code, consider these common file patterns:

**Arcade-specific files (pxt-arcade repo):**
- `pxtarget.json` - Target configuration (released version)
- `targetconfig.json` - Live configuration (served between releases)
- `libs/*/` - Arcade-specific library extensions
- `docs/` - Arcade documentation
- `editor/` - Editor customizations
- `theme/` - Arcade themes

**Core framework files (pxt repo):**
- `webapp/`, `pxteditor/` - Web app and editor
- `pxtcompiler/` - Language services, compiler
- `libs/base/`, `libs/core/` - Core TypeScript APIs
- `gulpfile.js`, `Makefile` - Build system

**Game engine files (pxt-common-packages repo):**
- `libs/game/` - Game engine (sprites, physics)
- `libs/controller/` - Input handling
- `libs/screen/` - Display APIs
- `sim/` - Shared simulator

### MakeCode-Specific Considerations

**Block Annotations:**
- Prefer `$variable` format over deprecated `%variable` format in block annotations
- Shadow values should be configured separately for better localization

**Multi-Repository Workspace:**
- Changes may require coordination across repositories
- File paths should specify which repository they're in