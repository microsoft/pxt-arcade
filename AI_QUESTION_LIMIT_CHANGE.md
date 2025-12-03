# AI Question Limit Change - Instructions for PXT Repository

## Summary
This change increases the AI question limit in the MakeCode Arcade teachertool from 5 to 10.

## Issue Reference
- **Issue**: Rethink AI question limit (pxt-arcade issue)
- **Problem**: Users were frustrated by the 5 AI question limit when creating checklists
- **Solution**: Increase the limit to 10 as requested by @abchatra
- **Comment**: "Let's bump to 10. We need a limit to make it too easy to DOS."

## ⚠️ IMPORTANT: This PR is for the microsoft/pxt repository

The actual code change needs to be made in the **microsoft/pxt** repository, NOT in pxt-arcade.

### Change Details

**File to modify**: `common-docs/teachertool/catalog-shared.json`
**Line**: 9
**Change**: `"maxCount": 5,` → `"maxCount": 10,`

### Complete Diff
```diff
diff --git a/common-docs/teachertool/catalog-shared.json b/common-docs/teachertool/catalog-shared.json
index acca054e2..a20e8104d 100644
--- a/common-docs/teachertool/catalog-shared.json
+++ b/common-docs/teachertool/catalog-shared.json
@@ -6,7 +6,7 @@
             "template": "Ask AI: ${question}",
             "description": "Experimental: AI outputs may not be accurate. Use with caution and always review responses.",
             "docPath": "/teachertool",
-            "maxCount": 5,
+            "maxCount": 10,
             "tags": ["General"],
             "requestFeedback": true,
             "params": [
```

## Patch File Included
The file `0001-Increase-AI-question-limit-from-5-to-10-in-teacherto.patch` contains the complete patch that can be applied to the pxt repository.

## How to Create the PR in microsoft/pxt

1. Clone or navigate to your local microsoft/pxt repository
2. Create a new branch: `git checkout -b increase-ai-question-limit`
3. Apply the patch: `git apply /path/to/0001-Increase-AI-question-limit-from-5-to-10-in-teacherto.patch`
   - OR manually edit `common-docs/teachertool/catalog-shared.json` line 9
4. Commit: `git commit -m "Increase AI question limit from 5 to 10 in teachertool catalog"`
5. Push and create PR: `git push origin increase-ai-question-limit`

## Testing & Validation

### JSON Validation
✅ The modified JSON file has been validated and is syntactically correct.

### Expected Behavior After Change
1. Users will be able to add up to 10 AI questions to their checklist (increased from 5)
2. The checkmark indicator (🗸) will appear next to "Ask AI" option after 10 questions are added (previously at 5)
3. The "Ask AI" option will be disabled after 10 questions (previously at 5)
4. No other functionality is affected

### No Code Changes Required
This is purely a configuration change. The logic in `CatalogOverlay.tsx` already handles the `maxCount` property correctly:
- Lines 78-81: Calculates if max is reached
- Line 95: Disables the button when maxed

## Risk Assessment
- **Risk Level**: Very Low
- **Scope**: Only affects the AI question criteria in teachertool
- **Breaking Changes**: None
- **Backwards Compatibility**: Fully compatible (only increases the limit)

## Related Files (No changes needed)
- `/teachertool/src/types/criteria.ts` - Defines the `maxCount` interface
- `/teachertool/src/components/CatalogOverlay.tsx` - Uses `maxCount` to disable buttons
- `/common-docs/teachertool/test/catalog-shared.json` - Test catalog (empty, no changes needed)
