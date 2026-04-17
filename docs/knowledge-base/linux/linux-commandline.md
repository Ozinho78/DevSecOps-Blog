# The Linux Commandline

The Linux command line (shell) is the primary interface for interacting with Linux systems — essential for administration, scripting, and DevOps workflows.

## Shell Basics

The default shell on most modern systems is **Bash** (Bourne Again Shell). **Zsh** is also widely used (macOS default since Catalina).

```bash
echo $SHELL        # Show active shell
cat /etc/shells    # List available shells
chsh -s /bin/zsh   # Change default shell
```

---

## Navigation & Filesystem

```bash
pwd               # Print Working Directory
ls -lah           # Directory listing: long format, all files, human-readable
cd /etc/nginx     # Absolute path
cd ../..          # Two levels up
cd ~              # Home directory
cd -              # Previous directory (toggle)
```

### Key Directories (FHS)

| Path | Content |
|------|---------|
| `/etc` | System-wide configuration files |
| `/var/log` | Log files |
| `/proc` | Virtual FS — kernel & process info |
| `/sys` | Virtual FS — devices & kernel subsystems |
| `/usr/bin` | User binaries |
| `/usr/local/bin` | Manually installed software |
| `/tmp` | Temporary files (cleared on reboot) |

---

## Files & Directories

```bash
touch file.txt            # Create file / update timestamp
mkdir -p /opt/app/config  # Create directory including parent paths
cp -r src/ dst/           # Copy recursively
mv old.txt new.txt        # Rename / move
rm -rf /tmp/testdir       # Recursive delete (no confirmation!)
ln -s /opt/app/bin/tool /usr/local/bin/tool  # Create symlink
```

---

## Reading & Searching File Contents

```bash
cat /etc/hosts              # Output entire file
less /var/log/syslog        # Page through content (q = quit)
tail -f /var/log/nginx/access.log   # Live follow (e.g. logs)
head -n 20 file.txt         # First 20 lines
grep -rn "error" /var/log/  # Recursive search with line numbers
grep -E "WARN|ERROR" app.log  # Extended regex
```

---

## Pipes & Redirections

```bash
# Write / append stdout to file
echo "config=true" > config.txt
echo "debug=false" >> config.txt

# Redirect stderr separately
command 2>/dev/null          # Suppress errors
command > out.txt 2>&1       # Stdout + stderr into one file

# Pipes — pass output as input
ps aux | grep nginx | grep -v grep
cat /etc/passwd | awk -F: '{print $1}' | sort
```

---

## Processes & System

```bash
ps aux                    # All running processes
top / htop                # Interactive process monitor
kill -9 <PID>             # Force kill process (SIGKILL)
pkill nginx               # Kill processes by name
jobs                      # Background jobs in current session
nohup ./script.sh &       # Run process in background, immune to SIGHUP

# System resources
df -h                     # Disk usage
du -sh /var/log/*         # Directory sizes
free -h                   # RAM usage
uptime                    # Load average
```

---

## Permissions

```bash
ls -l file.txt            # Show permissions: -rwxr-xr--
chmod 755 script.sh       # Owner: rwx, Group: r-x, Others: r-x
chmod u+x,g-w file.txt    # Set symbolically
chown www-data:www-data /var/www/html  # Set owner:group
```

### Octal Reference

| Octal | Binary | Meaning |
|-------|--------|---------|
| 7 | 111 | rwx |
| 6 | 110 | rw- |
| 5 | 101 | r-x |
| 4 | 100 | r-- |
| 0 | 000 | --- |

---

## Useful Shortcuts (Bash)

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Interrupt process (SIGINT) |
| `Ctrl+Z` | Suspend process |
| `Ctrl+R` | Search command history (reverse) |
| `Ctrl+L` | Clear terminal (like `clear`) |
| `!!` | Repeat last command |
| `!$` | Last argument of previous command |
| `Alt+.` | Insert last argument |
