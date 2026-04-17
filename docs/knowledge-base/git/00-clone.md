# Git Clone

`git clone` creates a complete local copy of a remote repository including all branches, commits, and the full project history.

---

## Basic Syntax

```bash
git clone <url> [<directory>]
```

---

## Protocols & URL Formats

| Protocol | Example | Usage |
|----------|---------|-------|
| HTTPS | `https://github.com/org/repo.git` | Simple, works everywhere |
| SSH | `git@github.com:org/repo.git` | Recommended for regular use (key auth) |
| SSH (explicit) | `ssh://git@github.com/org/repo.git` | Alternative SSH format |
| Local | `/opt/repos/project.git` | Local bare repos |

---

## Common Options

```bash
# Clone into a named directory
git clone git@github.com:org/repo.git myproject

# Clone a specific branch only
git clone -b develop git@github.com:org/repo.git

# Shallow clone — only the last N commits (faster, less data)
git clone --depth 1 git@github.com:org/repo.git

# Clone and initialize submodules immediately
git clone --recurse-submodules git@github.com:org/repo.git

# Bare clone (Git object directory only, no working tree)
git clone --bare git@github.com:org/repo.git repo.git
```

---

## SSH Setup for GitHub / GitLab

```bash
# Generate ED25519 key (recommended)
ssh-keygen -t ed25519 -C "git@company" -f ~/.ssh/id_ed25519_git

# Display public key → paste into GitHub/GitLab under SSH Keys
cat ~/.ssh/id_ed25519_git.pub

# SSH config for multiple accounts (~/.ssh/config)
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_git

# Clone using the specific host alias
git clone git@github-work:org/repo.git
```

---

## After Cloning

```bash
cd repo

git remote -v             # Show configured remotes
git branch -a             # All branches (local + remote)
git log --oneline -10     # Last 10 commits
git status                # Working tree status
```

---

## Submodules

If a repo contains submodules that were not initialized during clone:

```bash
git submodule update --init --recursive
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `Permission denied (publickey)` | SSH key not added to agent / not registered in GitHub |
| `Repository not found` | Check URL and access permissions on remote |
| Clone very slow / large repo | Use `--depth 1` for a shallow clone |
| SSL certificate error (self-signed) | `git config --global http.sslVerify false` (internal only!) |
