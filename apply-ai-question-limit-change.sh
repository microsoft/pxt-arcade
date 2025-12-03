#!/bin/bash
# Script to apply the AI question limit change to the microsoft/pxt repository
#
# Usage:
#   1. Navigate to your local microsoft/pxt repository
#   2. Run: ./apply-ai-question-limit-change.sh
#

set -e

echo "Applying AI question limit change to microsoft/pxt repository..."

# Check if we're in the right directory
if [ ! -f "common-docs/teachertool/catalog-shared.json" ]; then
    echo "Error: This script must be run from the root of the microsoft/pxt repository"
    echo "Expected to find: common-docs/teachertool/catalog-shared.json"
    exit 1
fi

# Create a new branch
BRANCH_NAME="increase-ai-question-limit"
echo "Creating branch: $BRANCH_NAME"
git checkout -b $BRANCH_NAME

# Apply the change using sed (works on Linux and macOS)
echo "Updating maxCount from 5 to 10..."
sed -i.bak 's/"maxCount": 5,/"maxCount": 10,/g' common-docs/teachertool/catalog-shared.json

# Verify the change
if grep -q '"maxCount": 10,' common-docs/teachertool/catalog-shared.json; then
    echo "✅ Change applied successfully!"
    
    # Show the diff
    echo ""
    echo "Diff:"
    git diff common-docs/teachertool/catalog-shared.json
    
    # Clean up backup file
    rm common-docs/teachertool/catalog-shared.json.bak
    
    # Commit
    echo ""
    echo "Committing change..."
    git add common-docs/teachertool/catalog-shared.json
    git commit -m "Increase AI question limit from 5 to 10 in teachertool catalog

This change addresses user frustration with the 5 AI question limit when creating
checklists in the teachertool. The limit is increased to 10 to provide more
flexibility while still preventing DOS attacks.

Resolves issue in microsoft/pxt-arcade regarding AI question limits."
    
    echo ""
    echo "✅ Change committed successfully!"
    echo ""
    echo "Next steps:"
    echo "  1. Review the change: git show"
    echo "  2. Push the branch: git push origin $BRANCH_NAME"
    echo "  3. Create a PR on GitHub"
else
    echo "❌ Error: Change was not applied correctly"
    rm common-docs/teachertool/catalog-shared.json.bak
    exit 1
fi
