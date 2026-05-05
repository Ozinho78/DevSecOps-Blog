# DevSecOps Portfolio – Michael Fiebelkorn

A personal portfolio and documentation site built with Docusaurus and React, showcasing projects in DevOps, IT Security, containerization, and web development.

🌐 **Live:** [devsecops.michael-fiebelkorn.de](https://devsecops.michael-fiebelkorn.de)

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Projects](#projects)

---

## About

This site serves two purposes:

- **Portfolio** – showcasing personal and professional projects with interactive project cards
- **Knowledge Base** – structured technical documentation covering Linux, Git, Docker, and DevOps topics (in progress)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Docusaurus 3 |
| Frontend | React, TypeScript, CSS Modules |
| CI/CD | GitHub Actions |
| Hosting | Hostinger (FTP Deploy) |
| Containerization | Docker, NGINX |
| Security Tools | Burp Suite, sqlmap, OWASP Juice Shop |

---

## Project Structure

```
.
├── docs/
│   └── projects/           # Per-project documentation with write-ups
├── src/
│   ├── components/         # React components (HeroSection, SkillsSection, etc.)
│   ├── css/                # Global styles
│   └── pages/              # Docusaurus pages (portfolio, legal notice)
├── static/                 # Static assets
├── .github/workflows/      # CI/CD pipelines
├── docusaurus.config.ts
└── sidebars.ts
```

---

## Local Development

**Prerequisites:** Node.js 22+, npm

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm start

# Production build
npm run build
```

---

## Deployment

Two GitHub Actions workflows handle the pipeline:

**CI/CD Workflow** (`main.yml`)
- Triggers on push and pull requests
- Builds the Docusaurus site and validates all links

**Deploy to Hostinger** (`deploy-hostinger.yaml`)
- Triggers after a successful CI run or manually via `workflow_dispatch`
- Deploys the `build/` directory to Hostinger via FTP

Required repository secrets:

| Secret | Description |
|---|---|
| `FTP_HOST` | Hostinger FTP server address |
| `FTP_USER` | FTP username |
| `FTP_PASSWORD` | FTP password |

---

## Projects

### Baby Tools Shop
Django-based e-commerce demo with product catalog, category organization, and Django Admin. Containerized with Docker Compose including automated migrations, static-file collection, and persistent volumes.
`Python` `Docker` `Shell`
→ [Docs](https://devsecops.michael-fiebelkorn.de/docs/projects/Baby-Tools-Shop/) · [GitHub](https://github.com/Ozinho78/baby-tools-shop/tree/feature/containerizing)

### Truck Signs API
Production-ready Django REST API for truck signage management. Integrates PostgreSQL, Stripe for payments, and Gmail for transactional email. Security best practices applied throughout: environment-based secrets, DEBUG=False in production, strict dev/prod separation.
`Python` `Docker` `Shell` `IT Security`
→ [Docs](https://devsecops.michael-fiebelkorn.de/docs/projects/Truck-Signs-API/) · [GitHub](https://github.com/Ozinho78/truck_signs_api/tree/feature/api-containerization)

### OWASP Juice Shop
Hands-on exploitation of intentional vulnerabilities in a locally hosted OWASP Juice Shop instance. Attack chains covered: SQL Injection, broken authentication, OSINT-based account takeover via EXIF metadata, and CAPTCHA bypass with Python scripting. Each challenge includes a full writeup and Loom video walkthrough.
`IT Security` `Docker` `Python`
→ [Docs](https://devsecops.michael-fiebelkorn.de/docs/projects/OWASP-Juice-Shop/juice-shop) · [GitHub](https://github.com/Ozinho78/juice-shop-writeups/tree/feature/challenge-writeups)

### Minecraft Server
Containerized Minecraft Java Edition server (v1.21.11) orchestrated with Docker Compose. Fully configurable via environment variables: memory allocation, game mode, difficulty, and Mojang authentication. Zero manual server setup required.
`Docker` `YAML` `Shell`
→ [Docs](https://devsecops.michael-fiebelkorn.de/docs/projects/Minecraft/) · [GitHub](https://github.com/Ozinho78/minecraft/tree/feature/minecraft-deployment)

### WordPress on Docker
Docker Compose deployment of WordPress with MySQL, ready to spin up in minutes. Credentials managed via `.env`, named volumes ensure persistent data across restarts. No hardcoded secrets, clean separation of configuration and runtime.
`Docker` `YAML` `Shell`
→ [Docs](https://devsecops.michael-fiebelkorn.de/docs/projects/Wordpress/) · [GitHub](https://github.com/Ozinho78/wordpress/tree/feature/wordpress-docker-setup)