# PR: Increase AI Question Limit from 5 to 10

## ⚠️ Important Note
This PR documents a change that needs to be made in the **microsoft/pxt** repository, not in pxt-arcade.

## Quick Summary
- **What**: Increase AI question limit in teachertool from 5 to 10
- **Where**: `microsoft/pxt` repository, file `common-docs/teachertool/catalog-shared.json`
- **Why**: Users are frustrated by the 5 question limit; 10 provides more flexibility while preventing DOS

## Files in This PR (pxt-arcade)

### 1. `0001-Increase-AI-question-limit-from-5-to-10-in-teacherto.patch`
   - Git patch file that can be applied to microsoft/pxt
   - Contains the exact change needed

### 2. `AI_QUESTION_LIMIT_CHANGE.md`
   - Comprehensive documentation of the change
   - Instructions for creating the PR in microsoft/pxt
   - Risk assessment and validation details

### 3. `apply-ai-question-limit-change.sh`
   - Automated script to apply the change
   - Creates branch, applies change, and commits
   - Can be run from microsoft/pxt repository root

### 4. `README_PR_INSTRUCTIONS.md` (this file)
   - Quick reference for understanding this PR

## How to Apply This Change to microsoft/pxt

### Option 1: Use the Script (Recommended)
```bash
cd /path/to/microsoft-pxt
/path/to/apply-ai-question-limit-change.sh
git push origin increase-ai-question-limit
# Then create PR on GitHub
```

### Option 2: Apply the Patch
```bash
cd /path/to/microsoft-pxt
git checkout -b increase-ai-question-limit
git apply /path/to/0001-Increase-AI-question-limit-from-5-to-10-in-teacherto.patch
git push origin increase-ai-question-limit
# Then create PR on GitHub
```

### Option 3: Manual Edit
```bash
cd /path/to/microsoft-pxt
git checkout -b increase-ai-question-limit
# Edit common-docs/teachertool/catalog-shared.json line 9
# Change: "maxCount": 5, to "maxCount": 10,
git add common-docs/teachertool/catalog-shared.json
git commit -m "Increase AI question limit from 5 to 10 in teachertool catalog"
git push origin increase-ai-question-limit
# Then create PR on GitHub
```

## The Actual Change

**File**: `common-docs/teachertool/catalog-shared.json`  
**Line**: 9

```diff
- "maxCount": 5,
+ "maxCount": 10,
```

That's it! Just one line changed.

## Validation

✅ JSON syntax validated  
✅ No code changes required (pure configuration)  
✅ Backwards compatible  
✅ Low risk change  

## Issue Reference

This addresses the issue "Rethink AI question limit" raised in pxt-arcade, where users reported frustration with being limited to only 5 AI questions in their checklists.

**Comment from @abchatra**: "Let's bump to 10. We need a limit to make it too easy to DOS."

## Questions?

See `AI_QUESTION_LIMIT_CHANGE.md` for complete documentation including:
- Detailed explanation
- Risk assessment
- Testing notes
- Related files
