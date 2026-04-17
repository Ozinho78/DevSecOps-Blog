# Linux Server Administration

Fundamentals of Linux server administration: user management, services, networking, hardening, and remote access — practical and production-oriented.

---

## User Management

```bash
useradd -m -s /bin/bash -G sudo deployuser   # Create user
passwd deployuser                             # Set password
usermod -aG docker deployuser                 # Add to group
userdel -r olduser                            # Delete user + home directory

id deployuser                                 # Show UID, GID, groups
groups deployuser                             # List group memberships
who / w                                       # Show logged-in users
last                                          # Login history
```

### sudo Configuration

```bash
visudo                        # Edit safely (prevents syntax errors)

# Example entries in /etc/sudoers.d/custom:
deployuser ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx
%devops    ALL=(ALL) ALL
```

---

## systemd & Service Management

```bash
systemctl status nginx                # Show status
systemctl start | stop | restart nginx
systemctl enable nginx                # Enable autostart on boot
systemctl disable nginx
systemctl daemon-reload               # Reload configuration
systemctl list-units --type=service --state=running

# Service logs
journalctl -u nginx -f                # Live follow
journalctl -u nginx --since "1 hour ago"
journalctl -p err -b                  # Errors since last boot only
```

### Creating a Custom systemd Unit

```ini
# /etc/systemd/system/myapp.service
[Unit]
Description=My Application
After=network.target

[Service]
Type=simple
User=appuser
WorkingDirectory=/opt/myapp
ExecStart=/opt/myapp/bin/server
Restart=on-failure
RestartSec=5s
EnvironmentFile=/opt/myapp/.env

[Install]
WantedBy=multi-user.target
```

```bash
systemctl daemon-reload
systemctl enable --now myapp
```

---

## Network Configuration

### ip Commands (iproute2)

```bash
ip addr show                         # Interface addresses
ip route show                        # Routing table
ip link set eth0 up/down
ip addr add 192.168.1.100/24 dev eth0
```

### Netplan (Ubuntu 20.04+)

```yaml
# /etc/netplan/00-config.yaml
network:
  version: 2
  ethernets:
    eth0:
      addresses: [192.168.1.10/24]
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [1.1.1.1, 8.8.8.8]
```

```bash
netplan apply
```

### Network Diagnostics

```bash
ss -tulpn                            # Open ports + associated processes
ping -c4 8.8.8.8
traceroute / mtr 8.8.8.8             # Trace route
dig example.com A                    # DNS query
curl -Iv https://example.com         # HTTP headers + TLS info
nmap -sV -p 22,80,443 <target>       # Port scan (own systems only!)
```

---

## SSH — Remote Access & Hardening

### Setting Up Key-Based Authentication

```bash
# Local: generate keypair
ssh-keygen -t ed25519 -C "user@host" -f ~/.ssh/id_ed25519

# Transfer public key to server
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server

# Alternatively, manual
cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### SSH Server Hardening (`/etc/ssh/sshd_config`)

```conf
Port 2222                        # Non-standard port (security through obscurity)
PermitRootLogin no               # Disable root login
PasswordAuthentication no        # Key auth only
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
MaxAuthTries 3
LoginGraceTime 30
ClientAliveInterval 300
ClientAliveCountMax 2
AllowUsers deployuser admin
```

```bash
sshd -t          # Test configuration (before reload!)
systemctl restart sshd
```

---

## Firewall (UFW / nftables)

### UFW (Uncomplicated Firewall)

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow 2222/tcp           # SSH
ufw allow 80,443/tcp         # HTTP/HTTPS
ufw allow from 10.0.0.0/8 to any port 5432   # PostgreSQL internal only
ufw enable
ufw status verbose
```

### nftables (modern successor to iptables)

```bash
nft list ruleset              # Show current ruleset
nft flush ruleset             # Flush all rules
```

---

## Package Management

```bash
# apt (Debian/Ubuntu)
apt update && apt upgrade -y
apt install nginx curl htop
apt autoremove && apt autoclean
dpkg -l | grep nginx          # Check installed packages
apt-cache policy nginx        # Show available versions

# dnf/yum (RHEL/CentOS/Fedora)
dnf update -y
dnf install nginx
dnf list installed
```

---

## Disk & Storage

```bash
lsblk                         # Block device overview
fdisk -l                      # Partition tables
df -hT                        # Mounted filesystems + type
du -sh /var/log/*             # Directory sizes
mount /dev/sdb1 /mnt/data     # Mount manually

# /etc/fstab entry (persistent)
UUID=xxxx-xxxx  /mnt/data  ext4  defaults,nofail  0  2
```

---

## Monitoring & Logging

```bash
# System metrics
vmstat 2 5                    # CPU/Memory/IO every 2s, 5 times
iostat -xz 2                  # Disk I/O stats
sar -u 1 5                    # CPU utilization (sysstat)

# Central logging
tail -f /var/log/syslog
tail -f /var/log/auth.log     # Authentication events (SSH, sudo)
grep "Failed password" /var/log/auth.log  # Check for brute-force attempts
```

---

## Basic Hardening Checklist

- [ ] SSH: root login disabled, key-auth only
- [ ] Firewall active, default DENY incoming
- [ ] Unused services disabled (`systemctl disable`)
- [ ] Automatic security updates enabled (`unattended-upgrades`)
- [ ] `fail2ban` installed and configured
- [ ] Password policies set (`/etc/security/pwquality.conf`)
- [ ] Auditd configured for critical file access monitoring
