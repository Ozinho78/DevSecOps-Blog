import React, { JSX } from 'react';
import styles from './styles.module.css';

// Skill-Daten – icon verweist auf static/img/
// desc erscheint auf der Rückseite beim Hover
const ROWS = [
  [
    {
      label: 'HTML',
      icon: '/img/HTML.png',
      desc: 'Semantic markup & structured content for this Docusaurus portfolio',
    },
    {
      label: 'CSS',
      icon: '/img/CSS.png',
      desc: 'Custom components with CSS Modules, Flexbox/Grid layouts & hover animations',
    },
    {
      label: 'Static site\ngenerator',
      icon: '/img/Docusaurier.png',
      desc: 'Portfolio & project documentation built with Docusaurus, MDX & React components',
    },
  ],
  [
    {
      label: 'Python',
      icon: '/img/python.png',
      desc: 'Django REST APIs (Conduit, Truck Signs), Django apps (Baby Tools Shop) & exploit scripting against OWASP Juice Shop',
    },
    {
      label: 'Shell\nscripting',
      icon: '/img/Terminal.png',
      desc: 'entrypoint.sh for container startup logic (Conduit, Truck Signs, Minecraft) & deploy.sh for multi-repo deployments',
    },
    {
      label: 'Yaml',
      icon: '/img/YAML.png',
      desc: 'Docker Compose across 5 projects: multi-service stacks with PostgreSQL, Nginx, Django & Angular',
    },
  ],
  [
    {
      label: 'Container',
      icon: '/img/Docker.png',
      desc: 'Multi-stage builds (Angular+Django+Nginx), custom networks, volumes & 5 containerized projects',
    },
    {
      label: 'CI/CD with\nGitHub Actions',
      icon: '/img/githubactions.png',
      desc: 'Automated pipelines with branch workflows, build jobs & deployment automation',
    },
    {
      label: 'IT Security',
      icon: '/img/IT-Security.png',
      desc: 'OWASP Juice Shop: SQLi, Admin Takeover, OSINT/EXIF chain & Captcha Bypass – using Burp Suite & sqlmap',
    },
  ],
];

export default function SkillsSection(): JSX.Element {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>

        {/* Headline */}
        <div className={styles.headline}>
          <h2 className={styles.title}>My skills</h2>
        </div>

        {/* Card grid – 3 rows × 3 cards */}
        <div className={styles.content}>
          {ROWS.map((row, rowIdx) => (
            <div className={styles.row} key={rowIdx}>
              {row.map(({ label, icon, desc }) => (
                <div className={styles.card} key={label}>
                  {/* cardInner dreht sich beim Hover */}
                  <div className={styles.cardInner}>

                    {/* Vorderseite */}
                    <div className={styles.cardFront}>
                      <img
                        className={styles.icon}
                        src={icon}
                        alt={label}
                        loading="lazy"
                      />
                      <span className={styles.label}>
                        {label.split('\n').map((line, i, arr) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>

                    {/* Rückseite */}
                    <div className={styles.cardBack}>
                      <span className={styles.backTitle}>
                        {label.split('\n').join(' ')}
                      </span>
                      <p className={styles.backDesc}>{desc}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}