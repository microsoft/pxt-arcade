---
on:
  issues:
    types: [labeled]
    names: [ai-triage]

permissions:
  contents: read
  issues: read
  pull-requests: read
  discussions: read
  actions: read
  repository-projects: read
  security-events: read

safe-outputs:
  add-comment:
    max: 1
    target: "triggering"

engine:
  id: copilot

tools:
  cache-memory: true
  bash: true
  github:
    read-only: true
    toolsets: ['all']
    allowed:
      - search_code
      - semantic_issues_search
      - semantic_issue_similarity_search
      - issue_read
      - list_issues
      - search_issues
      - get_file_contents
      - search_pull_requests

imports:
  - ../agents/triage.agent.md
  - ../prompts/makecode-triage.prompt.md

timeout-minutes: 10
---

Execute the triage workflow from the imported agent, applying the MakeCode Arcade-specific context above.
