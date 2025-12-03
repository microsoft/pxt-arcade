# 📋 Index: AI Question Limit Change Documentation

## 🎯 Quick Start

**Need to create the PR in microsoft/pxt?** → Read [README_PR_INSTRUCTIONS.md](README_PR_INSTRUCTIONS.md)

**Want to understand the change?** → Read [SUMMARY.md](SUMMARY.md)

**Need visual examples?** → Read [VISUAL_GUIDE.md](VISUAL_GUIDE.md)

**Want all the details?** → Read [AI_QUESTION_LIMIT_CHANGE.md](AI_QUESTION_LIMIT_CHANGE.md)

## 📁 Files in This PR

### Essential Files

1. **[README_PR_INSTRUCTIONS.md](README_PR_INSTRUCTIONS.md)** - START HERE
   - Quick reference for creating the PR in microsoft/pxt
   - Three different methods (script, patch, manual)
   - Step-by-step instructions
   - Perfect for: Someone who needs to create the PR quickly

2. **[SUMMARY.md](SUMMARY.md)** - Executive Summary
   - Complete overview of what was done
   - Before/after comparison
   - Impact analysis
   - Perfect for: Understanding the full context

3. **[VISUAL_GUIDE.md](VISUAL_GUIDE.md)** - UI Impact
   - Visual representation of the change
   - User flow diagrams
   - Expected behavior
   - Perfect for: Understanding what users will see

4. **[AI_QUESTION_LIMIT_CHANGE.md](AI_QUESTION_LIMIT_CHANGE.md)** - Technical Documentation
   - Comprehensive technical details
   - Risk assessment
   - Testing notes
   - Related files
   - Perfect for: Code review and technical understanding

### Implementation Files

5. **[0001-Increase-AI-question-limit-from-5-to-10-in-teacherto.patch](0001-Increase-AI-question-limit-from-5-to-10-in-teacherto.patch)** - Git Patch
   - Standard git patch file
   - Can be applied with `git apply`
   - Contains the exact change needed
   - Perfect for: Automated application

6. **[apply-ai-question-limit-change.sh](apply-ai-question-limit-change.sh)** - Automation Script
   - Executable bash script
   - Automates the entire process
   - Creates branch, applies change, commits
   - Perfect for: Quick application with validation

## 🎯 The Change

**One line change** in `microsoft/pxt` repository:

```diff
File: common-docs/teachertool/catalog-shared.json
Line: 9

- "maxCount": 5,
+ "maxCount": 10,
```

## 📊 Issue Reference

**Repository**: microsoft/pxt-arcade (issue filed here)  
**Actual Change**: microsoft/pxt (change must be made here)  
**Issue**: Rethink AI question limit  
**Decision**: Increase from 5 to 10 (per @abchatra)

## ✅ Status

- [x] Change implemented in local pxt repository
- [x] JSON validated
- [x] Patch file created
- [x] Automation script created
- [x] Comprehensive documentation written
- [x] Visual guide created
- [ ] PR created in microsoft/pxt (requires someone with push access)

## 🚀 How to Use This PR

### If you need to create the PR in microsoft/pxt:

1. Read [README_PR_INSTRUCTIONS.md](README_PR_INSTRUCTIONS.md)
2. Choose one of the three methods
3. Follow the steps
4. Create PR on GitHub

### If you need to review the change:

1. Read [SUMMARY.md](SUMMARY.md) for context
2. Read [AI_QUESTION_LIMIT_CHANGE.md](AI_QUESTION_LIMIT_CHANGE.md) for technical details
3. Review the patch file to see the exact change
4. Read [VISUAL_GUIDE.md](VISUAL_GUIDE.md) to understand user impact

### If you need to understand user impact:

1. Read [VISUAL_GUIDE.md](VISUAL_GUIDE.md) for UI examples
2. Read SUMMARY.md → Impact section
3. Test the change locally if needed

## 📞 Questions?

All questions should be answerable by reading the documentation files in order:

1. Quick questions → [README_PR_INSTRUCTIONS.md](README_PR_INSTRUCTIONS.md)
2. Context questions → [SUMMARY.md](SUMMARY.md)
3. Technical questions → [AI_QUESTION_LIMIT_CHANGE.md](AI_QUESTION_LIMIT_CHANGE.md)
4. UI/UX questions → [VISUAL_GUIDE.md](VISUAL_GUIDE.md)

## 🎓 Learning Notes

### Why is this in pxt-arcade but the change is in pxt?

The issue was filed in pxt-arcade because users experienced it while using Arcade's eval feature. However, the teachertool is a cross-target feature from pxt-core, so the catalog configuration lives in the microsoft/pxt repository. This PR documents the change that needs to be made there.

### Why three different methods?

Different workflows prefer different approaches:
- **Script**: Best for automation and consistency
- **Patch**: Best for git-based workflows  
- **Manual**: Best when you want to see exactly what's changing

### What's the risk?

Very low. This is a single configuration value change with no code modifications. The only impact is allowing users to add 10 AI questions instead of 5.

---

**Created**: 2025-12-03  
**Purpose**: Increase AI question limit from 5 to 10  
**Repository**: microsoft/pxt  
**Issue Tracker**: microsoft/pxt-arcade
