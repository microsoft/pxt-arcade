# Visual Guide: AI Question Limit Change

## What Users Will See

### Before the Change (limit = 5)

When a user opens the Checklist tab and clicks to add criteria:

```
┌─────────────────────────────────────────┐
│ General                                  │
├─────────────────────────────────────────┤
│ [+] Ask AI: ${question}                 │  ← Can add (0 of 5)
│ [+] Block used at least...              │
│ [+] At least N comment(s)               │
└─────────────────────────────────────────┘

After adding 5 AI questions:

┌─────────────────────────────────────────┐
│ General                                  │
├─────────────────────────────────────────┤
│ [✓] Ask AI: ${question}                 │  ← Maxed out! Can't add more
│     (Maximum count reached for this item)│
│ [+] Block used at least...              │
│ [+] At least N comment(s)               │
└─────────────────────────────────────────┘
```

### After the Change (limit = 10)

Same UI, but the limit is now 10:

```
┌─────────────────────────────────────────┐
│ General                                  │
├─────────────────────────────────────────┤
│ [+] Ask AI: ${question}                 │  ← Can add (0 of 10)
│ [+] Block used at least...              │
│ [+] At least N comment(s)               │
└─────────────────────────────────────────┘

After adding 10 AI questions:

┌─────────────────────────────────────────┐
│ General                                  │
├─────────────────────────────────────────┤
│ [✓] Ask AI: ${question}                 │  ← Maxed out! Can't add more
│     (Maximum count reached for this item)│
│ [+] Block used at least...              │
│ [+] At least N comment(s)               │
└─────────────────────────────────────────┘
```

## UI Elements

### Icon States
- **[+]** - Plus icon: Item can still be added
- **[✓]** - Checkmark icon: Maximum count reached, cannot add more
- **[✓]** (temporary) - Checkmark icon: Recently added (500ms indicator)

### Tooltips
- When hovering over [+]: "Add to checklist"
- When hovering over [✓] (maxed): "Maximum count reached for this item"
- When hovering over [✓] (recently added): "Added!"

## Example Checklist with Multiple AI Questions

### Before (5 maximum)
```
My Checklist:
1. Ask AI: Explain what this program does in clear, student-friendly language.
2. Ask AI: Look for major bugs or logic errors in this project.
3. Ask AI: Review the code quality.
4. Ask AI: Suggest a meaningful enhancement.
5. Ask AI: Check if the code follows best practices.

⚠️ Cannot add more AI questions! Must delete one to add another.
```

### After (10 maximum)
```
My Checklist:
1. Ask AI: Explain what this program does in clear, student-friendly language.
2. Ask AI: Look for major bugs or logic errors in this project.
3. Ask AI: Review the code quality.
4. Ask AI: Suggest a meaningful enhancement.
5. Ask AI: Check if the code follows best practices.
6. Ask AI: Is the difficulty level appropriate?
7. Ask AI: Are there accessibility improvements needed?
8. Ask AI: How well does it match the assignment requirements?
9. Ask AI: What creative elements stand out?
10. Ask AI: Are there any performance concerns?

⚠️ Now maxed out at 10 AI questions.
```

## User Flow

### Adding AI Questions (After Change)

1. User opens https://arcade.makecode.com/beta--eval
2. Clicks on "Checklist" tab
3. Clicks "+" to add criteria
4. Sees catalog overlay with different criteria types
5. Under "General" section, sees "Ask AI: ${question}" with [+] icon
6. Clicks to add first AI question → [+] briefly becomes [✓] then [+] again
7. Repeats up to 9 more times (total 10 AI questions)
8. After 10th question, icon permanently changes to [✓]
9. Hovering shows "Maximum count reached for this item"
10. Button is disabled, cannot click to add more

## Technical Details

### How the Limit Works

From `CatalogOverlay.tsx`:

```typescript
const existingInstanceCount = teacherTool.checklist.criteria.filter(
    i => i.catalogCriteriaId === catalogCriteria.id
).length;

const isMaxed = catalogCriteria.maxCount !== undefined 
    && existingInstanceCount >= catalogCriteria.maxCount;
```

When `isMaxed` is true:
- Shows checkmark icon instead of plus
- Shows "Maximum count reached for this item" tooltip
- Disables the button (cannot click)

### No Other Changes Needed

The UI code in `CatalogOverlay.tsx` automatically adapts to whatever `maxCount` is set in the catalog JSON. No code changes are required - just the configuration value.

## Impact on User Experience

### Positive Impact
✅ Users can create more comprehensive AI-based evaluations  
✅ More flexibility in checklist creation  
✅ Better alignment with educational evaluation needs  
✅ Less frustration from hitting the limit too quickly  

### Maintained Security
✅ Still prevents unlimited AI questions (DOS protection)  
✅ Reasonable limit of 10 balances usability and security  
✅ Consistent with other criteria that have limits  

### No Breaking Changes
✅ Existing checklists with ≤5 AI questions work unchanged  
✅ No user action required for existing content  
✅ Only the maximum limit increases (permissive change)
