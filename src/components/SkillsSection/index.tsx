import React, { JSX } from 'react';
import styles from './styles.module.css';

// Skill-Daten – icon verweist auf static/img/
const ROWS = [
  [
    { label: 'HTML',                  icon: '/img/HTML.png'           },
    { label: 'CSS',                   icon: '/img/CSS.png'            },
    { label: 'Static site\ngenerator', icon: '/img/Docusaurier.png'     },
  ],
  [
    { label: 'Python',                icon: '/img/python.png'         },
    { label: 'Shell\nscripting',       icon: '/img/Terminal.png'          },
    { label: 'Yaml',                  icon: '/img/YAML.png'           },
  ],
  [
    { label: 'Container',             icon: '/img/Docker.png'         },
    { label: 'CI/CD with\nGitHub Actions', icon: '/img/githubactions.png' },
    { label: 'IT Security',           icon: '/img/IT-Security.png'    },
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
              {row.map(({ label, icon }) => (
                <div className={styles.card} key={label}>
                  <div className={styles.cardInner}>
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
                </div>
              ))}
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}