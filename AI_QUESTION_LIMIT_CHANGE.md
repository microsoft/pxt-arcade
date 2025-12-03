# AI Question Limit Change

## Summary
This change increases the AI question limit in the MakeCode Arcade teachertool from 5 to 10.

## Issue
- **Issue**: Rethink AI question limit
- **Problem**: Users were frustrated by the 5 AI question limit when creating checklists
- **Solution**: Increase the limit to 10 as suggested by @abchatra

## Changes Made

### File Modified: `pxt/common-docs/teachertool/catalog-shared.json`
- Changed `maxCount` from `5` to `10` for the AI question criteria (line 9)
- This is the only change needed to address the issue

## Repository Location
The change was made in the **microsoft/pxt** repository, not in pxt-arcade.
- Branch: `increase-ai-question-limit`
- File: `common-docs/teachertool/catalog-shared.json`
- Commit: `05992d6accdafa41b971f3dbf84050f72fe9a0fd`

## Patch File
The patch file `0001-Increase-AI-question-limit-from-5-to-10-in-teacherto.patch` contains the exact change that needs to be applied to the pxt repository.

## How to Apply
To apply this change to the pxt repository:
```bash
cd /path/to/pxt
git apply 0001-Increase-AI-question-limit-from-5-to-10-in-teacherto.patch
```

## Testing
The change is a simple configuration update. When applied:
1. Users will be able to add up to 10 AI questions to their checklist (instead of 5)
2. The checkmark indicator will appear after 10 questions (instead of 5)
3. The disabled state will trigger at 10 questions (instead of 5)

No code logic changes were required - only the configuration value.
