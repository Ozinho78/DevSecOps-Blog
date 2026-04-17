# Create Your First Container Image

A container image is an immutable, layer-based snapshot of an application with all its dependencies. This guide takes you from zero to a production-ready image.

---

## Core Concepts

| Term | Meaning |
|------|---------|
| **Image** | Immutable snapshot (read-only layer stack) |
| **Container** | Running instance of an image |
| **Dockerfile** | Build instructions for an image |
| **Registry** | Image repository (Docker Hub, GHCR, Harbor, ...) |
| **Layer** | Each Dockerfile instruction creates a cached layer |

```
Dockerfile  ──docker build──►  Image  ──docker run──►  Container
                                  │
                             docker push
                                  │
                               Registry
```

---

## Install Docker (Linux)

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER      # Use without sudo (re-login required!)
docker version
docker info
```

---

## The First Dockerfile

### Minimal Example — Node.js App

```dockerfile
# syntax=docker/dockerfile:1

# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Runtime (leaner final image)
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
EXPOSE 3000
USER node                         # Don't run as root!

CMD ["node", "server.js"]
```

### Dockerfile Instructions Overview

| Instruction | Purpose |
|-------------|---------|
| `FROM` | Base image (required, always first) |
| `WORKDIR` | Set working directory |
| `COPY` | Copy files from host into image |
| `ADD` | Like COPY but also supports URLs & tar extraction |
| `RUN` | Execute command during build |
| `ENV` | Set environment variables |
| `EXPOSE` | Document a port (informational, no firewall effect) |
| `USER` | User for subsequent instructions |
| `CMD` | Default start command (overridable) |
| `ENTRYPOINT` | Fixed entry point (CMD passed as arguments) |
| `ARG` | Build-time variable (`--build-arg`) |
| `HEALTHCHECK` | Define container health status |

---

## Building an Image

```bash
# Basic build
docker build -t myapp:1.0.0 .

# With build argument
docker build --build-arg APP_ENV=production -t myapp:prod .

# Skip cache
docker build --no-cache -t myapp:latest .

# Multi-platform (e.g. ARM + AMD64)
docker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest --push .
```

---

## Starting & Managing Containers

```bash
# Start a container
docker run -d -p 8080:3000 --name myapp myapp:1.0.0

# With environment variables & volume
docker run -d \
  -p 8080:3000 \
  -e DATABASE_URL=postgres://... \
  -v /opt/app/data:/app/data \
  --restart unless-stopped \
  --name myapp \
  myapp:1.0.0

# Logs
docker logs -f myapp

# Shell inside running container
docker exec -it myapp sh

# Container status
docker ps -a
docker stats

# Cleanup
docker stop myapp && docker rm myapp
docker image prune -a           # Remove unused images
```

---

## .dockerignore

Prevents unnecessary files from being copied into the build context (faster builds, smaller images):

```dockerignore
.git
node_modules
dist
*.log
.env
.env.*
README.md
tests/
```

---

## Best Practices for Production-Ready Images

### 1. Use Multi-Stage Builds
Separate build dependencies from runtime to keep the final image small.

### 2. Choose a Minimal Base Image
```dockerfile
FROM alpine:3.19          # ~7 MB
FROM debian:bookworm-slim # ~75 MB
FROM scratch              # Absolutely empty (for static binaries only)
```

### 3. Optimize Layer Caching
```dockerfile
# BAD — dependencies reinstalled on every code change
COPY . .
RUN npm ci

# GOOD — dependencies cached as long as package.json is unchanged
COPY package*.json ./
RUN npm ci
COPY . .
```

### 4. Never Run as Root
```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

### 5. Never Store Secrets in the Image
```bash
# NEVER do this:
ENV DATABASE_PASSWORD=supersecret   # Ends up in the image layer!

# Instead: pass at runtime
docker run -e DATABASE_PASSWORD=$DB_PASS myapp
# Or: Docker Secrets / Kubernetes Secrets
```

### 6. Define a HEALTHCHECK
```dockerfile
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1
```

---

## Analyzing Image Size

```bash
docker image inspect myapp:1.0.0
docker history myapp:1.0.0          # Show layer sizes
dive myapp:1.0.0                    # Interactive layer explorer (tool: dive)
```

---

## Pushing an Image to a Registry

```bash
# Docker Hub
docker login
docker tag myapp:1.0.0 username/myapp:1.0.0
docker push username/myapp:1.0.0

# GitHub Container Registry (GHCR)
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
docker tag myapp:1.0.0 ghcr.io/org/myapp:1.0.0
docker push ghcr.io/org/myapp:1.0.0
```
