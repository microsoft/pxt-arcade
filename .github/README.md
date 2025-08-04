# GitHub Copilot Configuration for MakeCode Arcade Multi-Repository Workspace

This directory contains the GitHub Copilot configuration for the MakeCode Arcade ecosystem, designed to help AI assistants understand the multi-repository workspace structure and provide intelligent code assistance for development across linked repositories.

## 🎯 Overview

MakeCode Arcade is part of a **multi-repository development workspace** with four linked repositories:
- **pxt-arcade** (this repo): Arcade-specific features, target configuration, documentation
- **pxt-core**: Core editor, build system, language services, web app infrastructure
- **pxt-common-packages**: Cross-target game engine, sprites, physics, common APIs
- **pxt-arcade-sim**: Arcade simulator functionality *(private repository)*

## 📁 Configuration Files

### Core Configuration
- **`copilot-instructions.md`**: Comprehensive instructions for GitHub Copilot covering multi-repository structure, development workflows, coding guidelines, and troubleshooting

### Workspace Configuration
- **`arcade.code-workspace`**: VSCode workspace configuration for all linked repositories
- **`setup.cmd`**: Windows development environment setup script

## 🚀 Setup Instructions

### 1. Multi-Repository Setup (Windows)
```batch
# First-time setup from pxt-arcade directory
setup.cmd /firsttime

# Daily development
setup.cmd /link  # Re-link repositories
setup.cmd /pull  # Pull latest changes
```

### 2. Manual Development Setup
```bash
# 1. Build pxt-core
cd ../pxt && npm install && npm run build

# 2. Setup pxt-common-packages  
cd ../pxt-common-packages && npm install && npm link ../pxt

# 3. Setup pxt-arcade and link everything
cd ../pxt-arcade && npm install && npm link ../pxt && npm link ../pxt-common-packages
```

### 3. Daily Development Workflow
```bash
# Start watching for changes
cd ../pxt && gulp watch &

# Start arcade development server
cd ../pxt-arcade && npm run serve
```

## 🎯 How Code Assistance Works

### Multi-Repository Context
The AI assistant understands:

1. **Repository Boundaries**: What changes belong in pxt-arcade vs pxt-core vs pxt-common-packages
2. **Development Workflow**: Multi-repo linking, build processes, testing strategies
3. **Issue Triage**: How to determine which repository an issue should be addressed in
4. **Cross-Repository Dependencies**: Impact of changes across linked repositories
5. **Best Practices**: Block annotations, API design, documentation standards

### Code Assistance Areas

**When working in pxt-arcade:**
- Suggests arcade-specific APIs and patterns
- Understands target configuration (`pxtarget.json`, `targetconfig.json`)
- Knows about arcade hardware and device specifics
- Provides context-aware documentation suggestions

**When working in pxt-core:**
- Understands core editor functionality and web app infrastructure
- Knows build system patterns (`gulpfile.js`, `Makefile`)
- Recognizes language services and Monaco editor integration
- Suggests appropriate patterns for cross-target functionality

**When working in pxt-common-packages:**
- Identifies cross-target game engine patterns
- Understands sprite system, physics, and input handling
- Knows hardware abstraction layer patterns
- Suggests appropriate common API designs

**When suggesting cross-repo changes:**
- Identifies when changes should go to different repositories
- Recognizes API patterns and suggests appropriate locations
- Understands simulator coordination requirements

## 🏗️ Multi-Repository Structure Understanding

### Workspace Layout
```
workspace-root/
├── pxt/                    # Core MakeCode framework
├── pxt-common-packages/    # Cross-target APIs and game engine  
├── pxt-arcade-sim/         # Arcade simulator (private)
└── pxt-arcade/             # Arcade target (this repository)
```

### Repository-Specific Code Organization

**pxt-arcade (this repo):**
- **`libs/`**: Arcade-specific TypeScript APIs and blocks
- **`docs/`**: Arcade documentation and tutorials
- **`editor/`**: Arcade editor customizations
- **`theme/`**: Arcade-specific styling and theming
- **`scripts/`**: Build and automation scripts

**pxt-core:**
- **`webapp/`, `pxteditor/`**: Web app infrastructure
- **`pxtcompiler/`**: Language services and compilation
- **`libs/base/`, `libs/core/`**: Static TypeScript definitions
- **`gulpfile.js`, `Makefile`**: Build system

**pxt-common-packages:**
- **`libs/`**: Cross-target game engine APIs
- **`sim/`**: Shared simulator functionality

### Key Configuration Files
- **`pxtarget.json`**: Main target configuration (released version)
- **`targetconfig.json`**: Live configuration served between releases
- **`package.json`**: Dependencies and build scripts
- **`pxt.json`**: Library/package definitions in `libs/` directories
- **`arcade.code-workspace`**: VSCode multi-repository workspace configuration

## 🔧 Development Assistance

### Code Patterns
The AI assistant helps with:
- **Block Annotations**: Modern `$` variable format instead of deprecated `%` format
- **API Design**: Following MakeCode patterns for blocks and TypeScript APIs
- **Documentation**: Generating appropriate docs with JSDoc and `//% help` annotations
- **Testing**: Cross-repository compatibility testing strategies
- **Performance**: Identifying potential performance issues across repositories

### Block Development Best Practices
```typescript
// ✅ Preferred: Modern format with separate shadow configuration
//% block="my $sprite"
//% sprite.shadow="variables_get"

// ❌ Deprecated: Inline shadow configuration
//% block="my $sprite=variables_get"
```

### Build and Deployment
- Understanding multi-repository npm linking process
- Coordinating changes across pxt-core, pxt-common-packages, and pxt-arcade
- Target configuration changes and their impact
- Documentation generation workflows
- Cross-repository testing strategies

## 📊 Monitoring and Effectiveness

Track the quality of AI assistance by:
- Accuracy of repository boundary suggestions
- Appropriateness of multi-repository development workflows
- Quality of block annotation patterns suggested
- Understanding of cross-repository dependencies
- Effectiveness of issue triage recommendations

## 🛠️ Customization

### Updating Instructions
Edit `copilot-instructions.md` to:
- Add new coding patterns and block annotation standards
- Update repository boundary descriptions
- Include new development workflows
- Add security, performance, or accessibility guidelines
- Update troubleshooting information

### Testing Changes
1. Update the instructions with new patterns
2. Test with sample development scenarios
3. Verify AI understanding across all repositories
4. Ensure cross-repository coordination works correctly

## 🚨 Troubleshooting

### Common Issues
1. **Incorrect repository suggestions**: Update repository boundary descriptions in instructions
2. **Outdated block patterns**: Refresh block annotation guidelines with modern `$` format
3. **Missing cross-repo context**: Add more specific multi-repository examples
4. **Development environment issues**: Update setup.cmd workflow documentation

### Debug Steps
1. Test with known multi-repository scenarios
2. Review AI responses for repository boundary accuracy
3. Verify block annotation suggestions follow current standards
4. Update instructions based on gaps found
5. Re-test across all repositories to verify improvements

## 📚 Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [MakeCode Documentation](https://makecode.com/docs)
- [MakeCode Arcade Docs](https://arcade.makecode.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

To improve this configuration:
1. Test AI assistance with real multi-repository development scenarios
2. Update documentation based on cross-repository development findings
3. Consider developer experience across the entire workspace
4. Coordinate with other MakeCode repositories for consistency
5. Keep block annotation patterns and API guidelines current
