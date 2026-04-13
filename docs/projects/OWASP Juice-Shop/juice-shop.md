---
sidebar_position: 0
---

# Juice Shop Security Writeups

This repository documents the exploitation of intentional security vulnerabilities in the [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/), a deliberately insecure web application designed for security training. All challenges were performed against a local Docker instance on a controlled environment. The content of this documentation is for **educational purposes only** — do not apply these techniques against systems you do not own or have explicit permission to test.

:::warning[Educational Disclaimer]
⚠️ All techniques demonstrated here are performed in a controlled, legal environment
using OWASP Juice Shop, which is intentionally vulnerable. Never use these methods
against real systems without written authorization.
:::

---

## Table of Contents

- [Quickstart](#quickstart)
- [Challenges](#challenges)
  - [#1 – SQL Injection Attack Chain](#1--sql-injection-attack-chain)
  - [#2 – Admin Takeover](#2--admin-takeover)
  - [#3 – OSINT Chain](#3--osint-chain)
  - [#4 – Captcha Bypass](#4--captcha-bypass)
- [Tools Used](#tools-used)
- [Submission Checklist](#submission-checklist)

---

## Quickstart

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Burp Suite Community Edition](https://portswigger.net/burp/communitydownload)
- [sqlmap](https://sqlmap.org/)
- [Python 3.x](https://www.python.org/)

### Run OWASP Juice Shop locally

```bash
docker pull bkimminich/juice-shop
docker run -d -p 3000:3000 bkimminich/juice-shop
```

Then open your browser and navigate to:

```bash
http://localhost:3000
```

### Stop / Restart the container

```bash
# Stop (progress is preserved)
docker stop <container-id>

# Start again
docker start <container-id>

# Remove (progress is lost!)
docker rm <container-id>
```

> [!TIP]
> 💡 To persist your Juice Shop progress independently of the container lifecycle, use the `continue-code` API: `PUT /rest/continue-code`

---

## Challenges

### #1 – SQL Injection Attack Chain

| | |
|---|---|
| **Category** | Injection |
| **Challenges** | Login as Jim → Deluxe Fraud |
| **Difficulty** | ⭐⭐⭐ |
| **Tools** | sqlmap, Burp Suite Repeater |
| **Video** | ▶ [Watch on Loom](https://www.loom.com/share/0667a685bc41424b9b4f2e1f9b388556) |
| **Writeup** | [📄 View Documentation](./01-sqli-attack-chain/README.md) |

> [!NOTE] 
> **Danger & Impact:** SQL Injection allows an attacker to manipulate database queries directly through user input fields. A successful SQLi attack can lead to unauthorized access to any user account, full database exfiltration, data manipulation or deletion, and in some configurations even remote code execution on the server. Real-world breaches caused by SQLi have affected millions of users and resulted in massive data leaks and financial damage.

---

### #2 – Admin Takeover

| | |
|---|---|
| **Category** | Broken Authentication / Security Misconfiguration |
| **Challenges** | Find Admin Section → Login as Admin → Retrieve Admin Password |
| **Difficulty** | ⭐⭐⭐ |
| **Tools** | Burp Suite Intruder, Browser DevTools |
| **Video** | ▶ [Watch on Loom](https://www.loom.com/share/3ca7822675a14947b8f5d71addeef80b) |
| **Writeup** | [📄 View Documentation](./02-admin-takeover/README.md) |

> [!NOTE] 
> **Danger & Impact:** Exposed administrative interfaces combined with weak or brute-forceable credentials represent one of the most critical attack surfaces in any web application. A compromised admin account grants full control over the application — user data, configurations, and business logic. Security misconfigurations such as publicly accessible admin routes are consistently ranked among the OWASP Top 10 most critical web application risks.

---

### #3 – OSINT Chain

| | |
|---|---|
| **Category** | Sensitive Data Exposure |
| **Challenges** | Geo-Stalking (GPS Metadata) → Bjoern's Favourite Pet (Account Takeover) |
| **Difficulty** | ⭐⭐⭐ |
| **Tools** | ExifTool, OSINT research, SecLists |
| **Video** | ▶ [Watch on Loom](https://www.loom.com/share/76cf2df520c34444bfe51b0cccd0d7c5) |
| **Writeup** | [📄 View Documentation](./03-osint-chain/README.md) |

> [!NOTE]
> **Danger & Impact:** Metadata embedded in uploaded files (images, documents) can silently leak GPS coordinates, device information, and timestamps. Combined with weak security questions, this creates a powerful OSINT attack chain: locate a person, identify personal details, and reset their account password. This demonstrates why metadata stripping and strong account recovery mechanisms are essential — a single overlooked photo can lead to a full account takeover.

---

### #4 – Captcha Bypass

| | |
|---|---|
| **Category** | Broken Anti-Automation |
| **Challenges** | Captcha Bypass |
| **Difficulty** | ⭐⭐⭐ |
| **Tools** | Python (`requests`), Burp Suite Repeater |
| **Video** | ▶ [Watch on Loom](https://www.loom.com/share/99e9fbe8cf0249639d94a0a89b6cff0c) |
| **Writeup** | [📄 View Documentation](./04-captcha-bypass/README.md) |

> [!NOTE] 
> **Danger & Impact:** CAPTCHAs are designed to prevent automated abuse of web forms such as spam, brute-force attacks, and scraping. When a CAPTCHA implementation relies solely on client-side validation or uses predictable patterns (e.g. arithmetic expressions evaluated via `eval()`), it can be trivially bypassed with a simple script. This enables automated attacks at scale — credential stuffing, mass registration, or feedback spam — rendering the anti-automation control completely ineffective.

---

## Tools Used

| Tool | Purpose |
|------|---------|
| [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) | Target application (intentionally vulnerable) |
| [Docker Desktop](https://www.docker.com/products/docker-desktop/) | Running Juice Shop locally |
| [Burp Suite Community](https://portswigger.net/burp/communitydownload) | HTTP interception, Repeater, Intruder |
| [sqlmap](https://sqlmap.org/) | Automated SQL injection detection and exploitation |
| [ExifTool](https://exiftool.org/) | Metadata extraction from image files |
| [Python 3](https://www.python.org/) | Custom exploit scripts |
| [SecLists](https://github.com/danielmiessler/SecLists) | Wordlists for passwords and security questions |
