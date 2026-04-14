import React, { JSX, useState } from 'react';
import styles from './styles.module.css';

const PROJECTS = [
  { id: 1, name: 'Baby Tools Shop'  },
  { id: 2, name: 'Truck Signs API'  },
  { id: 3, name: 'Juice Shop Meister' },
  { id: 4, name: 'Minecraft'        },
  { id: 5, name: 'WordPress hosten' },
];

// Tech-Tags im Featured Card – icon aus static/img/
const FEATURED_TAGS = [
  { label: 'Yaml',           icon: '/img/YAML.png'           },
  { label: 'Shell scripting', icon: '/img/Terminal.png'         },
  { label: 'IT Security',    icon: '/img/IT-Security.png'    },
  { label: 'Container',      icon: '/img/Docker.png'         },
];

interface Project {
  id: number;
  title: string;
  image: string;
  tags: typeof FEATURED_TAGS;
  description: string;
  docsUrl: string;
  githubUrl: string;
}

// Alle Featured-Cards – erweiterbar pro Projekt
const FEATURED_DATA: Record<number, Project> = {
  4: {
    id: 4,
    title: 'Project Minecraft',
    image: '/img/minecraft.png',
    tags: FEATURED_TAGS,
    description:
      'Write some information about the project. For example: Why are you proud of it? What were you able to implement here? What different algorithms, server architecture did you use? Why did you find this project so interesting?',
    docsUrl: 'https://devsecops.michael-fiebelkorn.de/docs/projects/Minecraft/',
    githubUrl: 'https://github.com/Ozinho78/minecraft/tree/feature/minecraft-deployment',
  },
};

// Fallback-Card für Projekte ohne eigenen Eintrag
const FALLBACK: Project = {
  id: 0,
  title: 'Coming soon',
  image: '/img/minecraft.png',
  tags: [],
  description: 'Details for this project are being added.',
  docsUrl: '#',
  githubUrl: '#',
};

export default function ProjectsSection(): JSX.Element {
  const [activeId, setActiveId] = useState<number>(4);
  const featured = FEATURED_DATA[activeId] ?? FALLBACK;

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>

        {/* Headline */}
        <h2 className={styles.title}>My project highlights</h2>

        <div className={styles.content}>

          {/* ── Left: numbered list ─────────────── */}
          <div className={styles.list}>
            <ol className={styles.projectList}>
              {PROJECTS.map(({ id, name }) => (
                <li
                  key={id}
                  className={[
                    styles.projectItem,
                    id === activeId ? styles.projectItemActive : '',
                  ].join(' ')}
                  onClick={() => setActiveId(id)}
                >
                  {id}. {name}
                </li>
              ))}
            </ol>
            <a href="https://devsecops.michael-fiebelkorn.de/docs/projects/overview" className={styles.seeMore}>
              ↳ see more projects
            </a>
          </div>

          {/* ── Right: featured card ─────────────── */}
          <div className={styles.card}>

            {/* Card header */}
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

            {/* Card body */}
            <div className={styles.cardBody}>
              <img
                className={styles.cardImage}
                src={featured.image}
                alt={featured.title}
              />
              <div className={styles.cardRight}>
                <p className={styles.cardDesc}>{featured.description}</p>
                <div className={styles.buttons}>
                  <a href={featured.docsUrl} className={styles.btnPrimary}>
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