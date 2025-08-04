# MakeCode Arcade Multi-Repository Workspace Instructions for GitHub Copilot

## Workspace Overview
This is a **multi-repository development workspace** for the Microsoft MakeCode Arcade ecosystem. The workspace contains four linked repositories that work together to provide a complete block-based and TypeScript programming environment for creating retro-style arcade games.

## Workspace Structure & Repository Responsibilities

### Workspace Layout
```
workspace-root/
├── pxt/                    # Core MakeCode framework (pxt-core)
├── pxt-common-packages/    # Shared cross-target APIs and game engine
└── pxt-arcade/             # Arcade target configuration and extensions
```

### Repository-Specific Responsibilities

#### pxt/ (pxt-core)
**Repository**: https://github.com/microsoft/pxt
**Local Path**: `../pxt` relative to pxt-arcade
**Package Name**: `pxt-core`
**Changes should go here for:**
- Core editor functionality (Monaco editor integration, block editor)
- Build system and compilation pipeline (`gulpfile.js`, `Makefile`)
- Package management and extension loading
- Core APIs and runtime
- Static TypeScript definitions in `libs/` (e.g., `libs/base/`, `libs/core/`)
- Web app infrastructure (`webapp/`, `pxteditor/`)
- Language services and IntelliSense (`pxtcompiler/`)
- Import/export functionality
- Cloud services integration (`pxtservices/`)

#### pxt-common-packages/
**Repository**: https://github.com/microsoft/pxt-common-packages  
**Local Path**: `../pxt-common-packages` relative to pxt-arcade
**Package Name**: `pxt-common-packages`
**Changes should go here for:**
- Cross-target game engine APIs (sprites, physics, input)
- Hardware abstraction layers
- Common blocks and TypeScript APIs in `libs/`
- Shared simulator functionality in `sim/`
- Device-specific implementations (`libs/core---*/`)

#### pxt-arcade-sim (internal dependency)
**Note**: This is an internal Microsoft repository not accessible to external contributors.
**Changes that might require coordination:**
- Complex simulator functionality changes
- Game rendering and display issues
- Input handling problems in simulator
- Audio/sound systems in simulator

*For external contributors: If you encounter simulator-specific issues, please file them in this repository and maintainers will coordinate with the appropriate internal teams.*

#### pxt-arcade/ (This Repository)
**Repository**: https://github.com/microsoft/pxt-arcade
**Local Path**: `.` (workspace root)
**Package Name**: `pxt-arcade`
**Changes should go here for:**
- Target configuration (`pxtarget.json`, `targetconfig.json`)
- Arcade-specific library extensions in `libs/`
- Arcade-specific documentation (`docs/`, `docfiles/`)
- Editor customizations (`editor/`)
- Arcade themes and styling (`theme/`)
- Build and deployment scripts (`scripts/`)

## Code Change Guidelines

### Changes that belong in THIS repository (pxt-arcade):
1. **Arcade-specific features**
   - Arcade-specific blocks or APIs in `libs/`. These tend to be specifically extensions, or overrides from the common game library features found in pxt-common-packages
   - Target configuration changes in `pxtarget.json` or `targetconfig.json`
       - `pxtarget.json` is the main target configuration file that defines the capabilities and features of the Arcade target. This is part of a released version of the application.
       - `targetconfig.json` is served live and may include changes that occur between releases
   - Arcade hardware support
   - Documentation specific to Arcade in `docs/` and `docfiles/`

2. **Arcade target configuration**
   - Build configurations specific to arcade
   - Theme and styling changes in `theme/`
   - Arcade-specific editor extensions in `editor/`

### Changes that should go to pxt-core:
1. **Core functionality**
   - Block editor improvements
   - Monaco/TypeScript editor changes
   - Build system modifications
   - Package management features
   - Cloud/sharing functionality
   - Language service improvements
   
2. **Static TypeScript definitions**
   - Core language APIs in `libs/base/`, `libs/core/`
   - Fundamental data types and primitives
   - Basic runtime functionality
   - Cross-target foundational APIs

### Changes that should go to pxt-common-packages:
1. **Cross-target APIs**
   - Sprite system improvements
   - Physics engine changes
   - Game loop modifications
   - Input handling that affects multiple targets
   - Hardware abstraction layers

## Development Workflow & Dependencies

### Repository Dependencies
The repositories have the following dependency chain:
```
pxt-arcade depends on:
├── pxt-core (linked via npm link)
├── pxt-common-packages (linked via npm link)  
└── pxt-arcade-sim (internal dependency)

pxt-common-packages depends on:
└── pxt-core (linked via npm link)
```

### Setting up the development environment:

#### First-time setup (Windows):
```batch
# From pxt-arcade directory
setup.cmd /firsttime
```

#### Manual setup steps:
```bash
# 1. Build pxt-core
cd ../pxt
npm install
npm run build

# 2. Setup pxt-common-packages  
cd ../pxt-common-packages
npm install
npm link ../pxt

# 3. Setup pxt-arcade and link everything
cd ../pxt-arcade
npm install
npm link ../pxt
npm link ../pxt-common-packages
```

#### Daily development workflow:
```bash
# Start the development server with file watching
cd ../pxt && gulp watch &  # Watches pxt-core changes
cd ../pxt-arcade && npm run serve  # Starts the arcade development server
```

### Key development commands:
- `npm run serve`: Start the arcade development server
- `setup.cmd /pull`: Pull latest changes from all repositories
- `setup.cmd /link`: Re-link all repositories

## Important Workspace Context

### Issue Triage and Repository Assignment
When assigned an issue, first determine which repository the changes should go to:
- **UI/Editor issues**: Usually pxt-core (`pxt/`) 
- **Game engine/API issues**: Usually pxt-common-packages
- **Arcade-specific features**: Usually pxt-arcade
- **Simulator display/input issues**: May require coordination with internal teams

### Project Structure and Key Files
Understanding where different types of functionality lives:

#### Configuration Files:
- `pxtarget.json` (pxt-arcade): Main target configuration - **released** version
- `targetconfig.json` (pxt-arcade): Live configuration served between releases
- `package.json` files: Dependencies and build scripts in each repo
- `pxt.json` files: Library/package definitions throughout `libs/` directories

#### Core Development Patterns:
- **Library Structure**: Each `libs/` directory contains a `pxt.json` file defining the library
- **Block Definitions**: TypeScript files with `//% block` annotations for Blockly integration  
- **API Documentation**: Comments with `//% help` annotations for IntelliSense
- **Cross-repo APIs**: Changes affecting multiple targets should go in pxt-common-packages

### Multi-Repository File Locations:
When editing files, be aware of which repository they belong to:

#### Core Framework Files (pxt/):
- `gulpfile.js`, `Makefile` - Build system
- `webapp/`, `pxteditor/` - Web app infrastructure  
- `pxtcompiler/` - Language services
- `libs/base/`, `libs/core/` - Static TypeScript definitions

#### Cross-Target Game Engine (pxt-common-packages/):
- `libs/` - Cross-target APIs (sprites, physics, controller)
- `sim/` - Shared simulator functionality

#### Arcade Target (pxt-arcade/):
- `pxtarget.json`, `targetconfig.json` - Target configuration
- `libs/` - Arcade-specific extensions
- `docs/`, `docfiles/` - Arcade documentation
- `editor/` - Editor customizations
- `theme/` - Arcade-specific styling

### Key Workspace Files:
- `arcade.code-workspace`: VSCode workspace configuration
- `setup.cmd`: Windows development environment setup script

## Coding Patterns and Best Practices

### Block and API Development:
1. **Adding new APIs**: 
   - Place TypeScript APIs in appropriate `libs/` directory
   - Use `//% block="..."` annotations for Blockly integration
   - Add `//% help="..."` for documentation links
   - Include JSDoc comments for IntelliSense
   - Update `pxt.json` to include new files

2. **Block Annotation Best Practices**:
   - **Variable Format**: Use `$` format instead of deprecated `%` format for variables
     - ✅ Preferred: `//% block="my $sprite"`
     - ❌ Deprecated: `//% block="my %sprite=variables_get"`
   - **Shadow Values**: Configure shadow values separately for better localization
     - ✅ Preferred: 
       ```typescript
       //% block="my $sprite"
       //% sprite.shadow="variables_get"
       ```
     - ❌ Avoid: `//% block="my $sprite=variables_get"`
   - **Localization**: Separating shadow configuration from block text makes translation easier

3. **API Design Principles**:
   - Keep APIs simple and discoverable
   - Use consistent naming patterns
   - Provide good default values
   - Consider both block and text programming users
   - Follow TypeScript best practices

3. **Cross-Repository Dependencies**:
   - Core APIs go in pxt-core `libs/`
   - Cross-target game APIs go in pxt-common-packages `libs/`
   - Target-specific extensions go in pxt-arcade `libs/`
   - Avoid circular dependencies between repositories

4. **API Design Principles**:
   - Keep APIs simple and discoverable
   - Use consistent naming patterns
   - Provide good default values
   - Consider both block and text programming users
   - Follow TypeScript best practices

### Documentation Standards:
- **API Documentation**: Use JSDoc comments and `//% help` annotations
- **Tutorial Content**: Place in `docs/` with proper markdown formatting
- **Code Examples**: Include practical, tested examples
- **Screenshots**: Use for UI changes and place in `docs/static/`

### Build and Deployment Considerations:
- **Target Configuration**: Changes to `pxtarget.json` require full rebuild
- **Live Configuration**: `targetconfig.json` changes are served immediately
- **Breaking Changes**: Coordinate across repositories for API changes
- **Backwards Compatibility**: Maintain compatibility with existing projects

### Common Development Workflows:
1. **Adding new blocks/APIs**:
   - Determine correct repository (see guidelines above)
   - Add TypeScript implementation with proper annotations
   - Test in local development server
   - Add documentation and examples
   - Update relevant configuration files

2. **Fixing bugs**:
   - Reproduce the issue locally
   - Identify root cause and affected repositories
   - Implement fix with minimal impact
   - Test across browsers and devices
   - Verify no regressions in existing functionality

3. **UI/Editor changes**:
   - Most likely in pxt-core repository
   - Test in multiple browsers
   - Consider mobile and accessibility
   - Check theme compatibility (light/dark modes)
   - Verify localization compatibility

## Common Issues and Troubleshooting

### Development Environment Issues:
- **Build failures**: Usually caused by missing dependencies or incorrect linking
  - Run `setup.cmd /link` to re-establish repository links
  - Check that all repositories are on compatible versions
  - Ensure npm dependencies are installed in all repos

- **Editor not loading**: 
  - Check browser console for errors
  - Verify `npm run serve` is running from pxt-arcade
  - Ensure `gulp watch` is running from pxt-core for live changes

- **Simulator issues**: 
  - Most simulator problems require internal team coordination
  - File issues in pxt-arcade repository with detailed reproduction steps
  - Include browser version and console errors

### API and Library Issues:
- **Missing APIs**: Check if API should be in pxt-common-packages vs pxt-arcade
- **Block not appearing**: Verify `pxt.json` includes the TypeScript file
- **IntelliSense problems**: Check JSDoc comments and `//% help` annotations
- **Cross-target compatibility**: Test changes don't break other MakeCode targets

### Build and Configuration Issues:
- **Target configuration**: Changes to `pxtarget.json` require restart of development server
- **Package loading**: Check `pxt.json` files for correct file references
- **TypeScript errors**: Ensure all dependencies are properly linked via npm link

### Browser Compatibility:
- **Chrome**: Primary development browser, most features work
- **Firefox**: Good compatibility, test major features
- **Safari**: iOS compatibility important for mobile users
- **Edge**: Windows compatibility, especially for offline scenarios

### Common Error Patterns:
- **Module not found**: Usually indicates missing npm link or incorrect file paths
- **TypeScript compilation errors**: Check for missing type definitions or circular dependencies
- **Runtime errors in simulator**: Often related to API usage or missing implementations
- **Performance issues**: Check for memory leaks in game loops or inefficient rendering

## Current Branch and Repository Context

### Branch Management:
- **Current branch**: `dev/jwunderl/port-offline-page-update` (pxt repository)
- **Main branches**: `master` for releases, various dev branches for features
- **Cross-repo coordination**: Changes affecting multiple repos may require synchronized PRs

### Repository Status:
- **pxt**: Core framework - changes here affect all MakeCode targets
- **pxt-common-packages**: Cross-target APIs - changes affect Arcade and other targets  
- **pxt-arcade**: Arcade-specific target - most localized changes
- **pxt-arcade-sim**: Internal simulator - coordinate with maintainers

### Development Workflow Notes:
- Always test across repositories when making changes to pxt-core or pxt-common-packages
- Consider backwards compatibility when modifying existing APIs
- Document breaking changes clearly in PR descriptions
- Use semantic versioning principles for API changes

## Technical Considerations

### Performance Guidelines:
- Game performance in simulator and on devices
- Editor responsiveness with large projects
- Memory usage in arcade games
- Build time optimization
- Bundle size considerations

### Compatibility Requirements:
- Cross-browser support (Chrome, Firefox, Safari, Edge)
- Mobile device compatibility
- Hardware device compatibility
- Backward compatibility with existing projects

### Security Guidelines:
- Follow Microsoft security policies
- Validate user-generated content
- Secure handling of shared projects
- Privacy considerations for educational use

## Code Review Guidelines

### What to look for in PRs:
1. **Correctness**: Does the code solve the intended problem?
2. **Performance**: Are there any performance implications?
3. **Compatibility**: Does it work across all supported platforms?
4. **Documentation**: Is the feature properly documented?
5. **Testing**: Has the change been adequately tested?
6. **Code style**: Does it follow existing patterns and conventions?

### Common Issues to Watch For:
- Breaking changes to existing APIs
- Performance regressions in games or editor
- Missing or incorrect documentation
- Inadequate error handling
- Security vulnerabilities
- Accessibility issues
