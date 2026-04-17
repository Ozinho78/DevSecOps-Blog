# Lifecycle in Git

The Git workflow describes how files transition between four state areas — from an unversioned file to a pushed commit.

---

## The Four Areas

```
Working Directory  →  Staging Area (Index)  →  Local Repository  →  Remote Repository
      (edit)               (git add)              (git commit)          (git push)
```

| Area | Description |
|------|-------------|
| **Working Directory** | Local files on the filesystem |
| **Staging Area (Index)** | Prepared snapshot for the next commit |
| **Local Repository** | Full commit history stored locally in `.git/` |
| **Remote Repository** | Central repo (GitHub, GitLab, Gitea, ...) |

---

## File States

```
Untracked  →  Staged  →  Committed
               ↑               |
            Modified    ←------+  (after further editing)
```

```bash
git status                     # Show current state of all files
git status -s                  # Short format: M = modified, A = added, ?? = untracked
```

---

## The Standard Workflow

### 1. Stage Changes

```bash
git add file.txt               # Single file
git add src/                   # Entire directory
git add -A                     # All changes (including deletes)
git add -p                     # Interactive: select hunks (recommended!)
```

### 2. Create a Commit

```bash
git commit -m "feat: add nginx reverse proxy config"
git commit -am "fix: correct typo in README"   # add + commit in one (tracked files only)
git commit --amend                              # Modify the last commit
```

> **Commit message convention:** [Conventional Commits](https://www.conventionalcommits.org/)  
> Format: `<type>(<scope>): <description>`  
> Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`

### 3. Sync with Remote

```bash
git fetch origin               # Fetch remote changes WITHOUT merging
git pull origin main           # fetch + merge (or rebase with --rebase)
git push origin feature/login  # Push branch to remote
git push -u origin feature/login  # Push + set upstream (once)
```

---

## Reviewing & Comparing Changes

```bash
git diff                       # Unstaged changes
git diff --staged              # Staged changes (before commit)
git diff main..feature/login   # Compare two branches
git log --oneline --graph --all  # History as ASCII graph
git show <commit-hash>         # Show a single commit
```

---

## Undoing Changes

| Situation | Command |
|-----------|---------|
| Unstage a staged file | `git restore --staged file.txt` |
| Discard local changes | `git restore file.txt` |
| Undo last commit (keep changes staged) | `git reset --soft HEAD~1` |
| Undo last commit + unstage | `git reset --mixed HEAD~1` |
| Discard last commit entirely (destructive!) | `git reset --hard HEAD~1` |
| Undo commit with a new revert commit | `git revert <hash>` |

> ⚠️ `--hard` irreversibly discards working directory changes.  
> `git revert` is the safe option for already pushed commits.

---

## Stash — Temporarily Shelve Changes

```bash
git stash                      # Temporarily save current changes
git stash push -m "WIP: auth refactor"
git stash list                 # List all stashes
git stash pop                  # Apply last stash + delete it
git stash apply stash@{1}      # Apply specific stash (without deleting)
git stash drop stash@{0}       # Delete a stash
```

---

## .gitignore

```gitignore
# Build artifacts
dist/
build/
*.o
*.exe

# Dependencies
node_modules/
vendor/

# Secrets & environment
.env
.env.local
*.pem
*.key

# IDE
.idea/
.vscode/
*.swp
```

```bash
git check-ignore -v filename   # Check why a file is being ignored
git rm --cached file.txt       # Remove already-tracked file from index (keep on disk)
```

---

## Lifecycle Visualization

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  Untracked  ──git add──►  Staged  ──git commit──►  Committed     │
│                                                        │          │
│  Modified   ──git add──►  Staged                      │          │
│     ▲                                                  │          │
│     └──────────────────────────────────────────────────          │
│              (edit file after commit)                             │
│                                                                   │
│  Committed ──git push──► Remote                                  │
│  Remote    ──git pull──► Local (fetch + merge)                   │
└─────────────────────────────────────────────────────────────────┘
```