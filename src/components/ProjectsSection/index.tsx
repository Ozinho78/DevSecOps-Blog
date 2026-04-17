import React, { JSX, useState } from "react";
import styles from "./styles.module.css";

const PROJECTS = [
  { id: 1, name: "Baby Tools Shop" },
  { id: 2, name: "Truck Signs API" },
  { id: 3, name: "OWASP Juice Shop" },
  { id: 4, name: "Minecraft" },
  { id: 5, name: "WordPress" },
];

// ── Tag definitions (icons aus static/img/) ──────────────
const T = {
  docker: { label: "Docker", icon: "/img/Docker.png" },
  python: { label: "Python", icon: "/img/python.png" },
  shell: { label: "Shell", icon: "/img/Terminal.png" },
  yaml: { label: "YAML", icon: "/img/YAML.png" },
  security: { label: "IT Security", icon: "/img/IT-Security.png" },
};

interface Tag {
  label: string;
  icon: string;
}
interface Project {
  id: number;
  title: string;
  image: string;
  tags: Tag[];
  description: string;
  docsUrl: string;
  githubUrl: string;
}

const FEATURED_DATA: Record<number, Project> = {
  1: {
    id: 1,
    title: "Baby Tools Shop",
    image: "/img/baby-tools.png",
    tags: [T.python, T.docker, T.shell],
    description:
      "A Django-based e-commerce demo featuring a product catalog with category organization and " +
      "Django Admin integration. Containerized with Docker Compose including automated migrations, " +
      "static-file collection, and persistent volumes. A demo-data script populates the database " +
      "instantly for testing purposes.",
    docsUrl:
      "https://devsecops.michael-fiebelkorn.de/docs/projects/Baby-Tools-Shop/",
    githubUrl:
      "https://github.com/Ozinho78/baby-tools-shop/tree/feature/containerizing",
  },

  2: {
    id: 2,
    title: "Truck Signs API",
    image: "/img/truck-signs-api.png",
    tags: [T.python, T.docker, T.shell, T.security],
    description:
      "A production-ready Django REST API for truck signage management, orchestrated with Docker. " +
      "Integrates PostgreSQL as the database backend, Stripe for payment processing, and Gmail for " +
      "transactional email. Security best practices applied throughout: environment-based secrets, " +
      "DEBUG=False in production, and strict dev/prod separation.",
    docsUrl:
      "https://devsecops.michael-fiebelkorn.de/docs/projects/Truck-Signs-API/",
    githubUrl:
      "https://github.com/Ozinho78/truck_signs_api/tree/feature/api-containerization",
  },

  3: {
    id: 3,
    title: "OWASP Juice Shop",
    image: "/img/owasp-juice-shop.png",
    tags: [T.security, T.docker, T.python],
    description:
      "Hands-on exploitation of intentional vulnerabilities in a locally hosted OWASP Juice Shop instance. " +
      "Attack chains covered: SQL Injection, broken authentication, OSINT-based account takeover via EXIF " +
      "metadata, and CAPTCHA bypass with Python scripting. Every challenge is documented with a full " +
      "writeup and a Loom video walkthrough.",
    docsUrl:
      "https://devsecops.michael-fiebelkorn.de/docs/projects/OWASP-Juice-Shop/juice-shop",
    githubUrl:
      "https://github.com/Ozinho78/juice-shop-writeups/tree/feature/challenge-writeups",
  },

  4: {
    id: 4,
    title: "Project Minecraft",
    image: "/img/minecraft-ai.png",
    tags: [T.docker, T.yaml, T.shell],
    description:
      "A containerized Minecraft Java Edition server (v1.21.11) orchestrated with Docker Compose. " +
      "Supports fully configurable memory allocation, game mode, difficulty, and Mojang authentication " +
      "via environment variables. Designed for repeatable deployment on any Linux host with Docker " +
      "installed — zero manual server setup required.",
    docsUrl: "https://devsecops.michael-fiebelkorn.de/docs/projects/Minecraft/",
    githubUrl:
      "https://github.com/Ozinho78/minecraft/tree/feature/minecraft-deployment",
  },

  5: {
    id: 5,
    title: "WordPress on Docker",
    image: "/img/wordpress-ai.png",
    tags: [T.docker, T.yaml, T.shell],
    description:
      "A Docker Compose deployment of WordPress with MySQL on a VPS — ready to spin up in minutes. " +
      "Credentials are kept out of the repository via a .env file, while named volumes ensure " +
      "persistent data across container restarts. Follows Docker security best practices: no " +
      "hardcoded secrets and clean separation of configuration and runtime.",
    docsUrl: "https://devsecops.michael-fiebelkorn.de/docs/projects/Wordpress/",
    githubUrl:
      "https://github.com/Ozinho78/wordpress/tree/feature/wordpress-docker-setup?tab=readme-ov-file",
  },
};

const FALLBACK: Project = {
  id: 0,
  title: "Coming soon",
  image: "/img/minecraft.png",
  tags: [],
  description: "Details for this project are being added.",
  docsUrl: "#",
  githubUrl: "#",
};

export default function ProjectsSection(): JSX.Element {
  const [activeId, setActiveId] = useState<number>(3);
  const featured = FEATURED_DATA[activeId] ?? FALLBACK;

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <h2 className={styles.title}>My project highlights</h2>

        <div className={styles.content}>
          {/* Left: numbered list */}
          <div className={styles.list}>
            <ol className={styles.projectList}>
              {PROJECTS.map(({ id, name }) => (
                <li
                  key={id}
                  className={[
                    styles.projectItem,
                    id === activeId ? styles.projectItemActive : "",
                  ].join(" ")}
                  onClick={() => setActiveId(id)}
                >
                  {id}. {name}
                </li>
              ))}
            </ol>
            <a
              href="https://devsecops.michael-fiebelkorn.de/docs/projects/overview"
              className={styles.seeMore}
              target="_blank"
              rel="noreferrer"
            >
              ↳ see more projects
            </a>
          </div>

          {/* Right: featured card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{featured.title}</h3>
              <div className={styles.tags}>
                {featured.tags.map(({ label, icon }) => (
                  <div className={styles.tag} key={label}>
                    <img className={styles.tagIcon} src={icon} alt={label} />
                    <span className={styles.tagLabel}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.cardBody}>
              <img
                className={styles.cardImage}
                src={featured.image}
                alt={featured.title}
              />
              <div className={styles.cardRight}>
                <p className={styles.cardDesc}>{featured.description}</p>
                <div className={styles.buttons}>
                  <a
                    href={featured.docsUrl}
                    className={styles.btnPrimary}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Documentation
                  </a>
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btnSecondary}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
