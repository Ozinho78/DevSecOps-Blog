# Implementing DevOps

DevOps is a combination of culture, practices, and tooling aimed at delivering software faster, more reliably, and more securely — through close collaboration between development and operations.

---

## What is DevOps?

DevOps breaks down the traditional silos between development, operations, and QA. It is primarily about **principles and mindset**, not just tools:

- **CALMS Framework:** Culture, Automation, Lean, Measurement, Sharing
- **Three Ways:** Flow (fast delivery), Feedback (quality assurance), Continuous Learning

---

## The DevOps Lifecycle

```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
  └─────────────────────────────────────────────────────────────┘
                    (continuous loop)
```

| Phase | Typical Tools |
|-------|--------------|
| Plan | Jira, Linear, GitHub Issues |
| Code | Git, GitHub, GitLab |
| Build | Docker, Maven, Gradle, npm |
| Test | Jest, Pytest, Selenium, Trivy |
| Release | Helm, GitHub Releases |
| Deploy | Kubernetes, Ansible, Terraform |
| Operate | Systemd, Docker Compose, K8s |
| Monitor | Prometheus, Grafana, Loki, ELK |

---

## CI/CD — The Core of DevOps

### Continuous Integration (CI)
Every code push is automatically built and tested. Goal: early, frequent, fast feedback.

### Continuous Delivery (CD)
The build artifact is always deployable to production — manual release trigger.

### Continuous Deployment
Every successful build is **automatically** deployed to production.

---

## GitHub Actions — Practical Example

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Security audit
        run: npm audit --audit-level=high

  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4

      - name: Build & push Docker image
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/${{ github.repository }}:${{ github.sha }}

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to server
        run: |
          ssh deploy@prod "docker pull ghcr.io/${{ github.repository }}:${{ github.sha }} && \
                           docker-compose up -d"
```

---

## Infrastructure as Code (IaC)

IaC describes infrastructure in versioned, declarative files instead of manual configuration.

### Terraform — Example (AWS EC2)

```hcl
# main.tf
terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
  backend "s3" {
    bucket = "my-tfstate"
    key    = "prod/terraform.tfstate"
    region = "eu-central-1"
  }
}

resource "aws_instance" "app" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  key_name      = "deployer-key"

  tags = {
    Name        = "app-server"
    Environment = "production"
  }
}
```

```bash
terraform init
terraform plan     # Preview changes
terraform apply    # Create/modify infrastructure
terraform destroy  # Remove infrastructure
```

### Ansible — Configuration Management

```yaml
# playbook.yml
- hosts: webservers
  become: true
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Deploy config
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
      notify: Restart nginx

    - name: Enable service
      systemd:
        name: nginx
        enabled: yes
        state: started

  handlers:
    - name: Restart nginx
      systemd:
        name: nginx
        state: restarted
```

```bash
ansible-playbook -i inventory.yml playbook.yml --check  # Dry run
ansible-playbook -i inventory.yml playbook.yml
```

---

## Monitoring & Observability

The three pillars of observability:

| Pillar | Description | Tool Examples |
|--------|-------------|---------------|
| **Metrics** | Numeric time-series data (CPU, HTTP rate) | Prometheus + Grafana |
| **Logs** | Structured events | Loki, ELK Stack |
| **Traces** | Request path through microservices | Jaeger, Tempo |

### Prometheus Alerting Example

```yaml
# alert.rules.yml
groups:
  - name: app
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "High error rate on {{ $labels.instance }}"
```

---

## Core DevOps Principles in Practice

### Version Everything in Git
```
Code | Dockerfiles | Terraform | Ansible | CI Config | Documentation
```

### Clearly Separate Environments

```
dev  →  staging  →  production
```
- Identical images, different configuration
- Configuration via environment variables / secrets

### Feature Flags Instead of Long Feature Branches

Enables continuous deployment without exposing unfinished features:
```javascript
if (featureFlags.isEnabled('new-checkout', userId)) {
  // New feature
} else {
  // Legacy code
}
```

---

## DevSecOps — Integrating Security

Security is not a downstream step — it is part of every phase:

```
Shift Left: integrate security tests as early as possible in the pipeline
```

| Phase | Security Measure |
|-------|-----------------|
| Code | SAST (Semgrep, SonarQube), secret scanning |
| Build | Container scanning (Trivy, Grype) |
| Test | DAST (OWASP ZAP) |
| Deploy | Policy-as-Code (OPA, Kyverno) |
| Operate | Runtime security (Falco) |

---

## Practical Getting Started — Recommended Order

1. **Establish a Git workflow** (branching strategy, commit conventions)
2. **Set up a CI pipeline** (automated tests on every push)
3. **Containerize** (Dockerfile, registry)
4. **CD pipeline** (automated deployment to staging)
5. **Introduce IaC** (Terraform / Ansible)
6. **Implement monitoring** (Prometheus + Grafana)
7. **Integrate security into the pipeline** (DevSecOps)
