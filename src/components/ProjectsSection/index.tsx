import React, { JSX } from 'react';

const PROJECTS = [
  'Baby Tools Shop',
  'Truck Signs API',
  'Minecraft',
  'OWASP Juice Shop',
  'WordPress Setup',
];

const FEATURED = {
  title: 'Project Minecraft',
  image: '/img/minecraft.png',
  tags: ['Docker', 'Networking', 'Linux', 'Java'],
  description:
    'Write some information about this project. Why did you start it? What skills did you use? What did you learn?',
  docsUrl: '/docs/projects/Minecraft/overview',
  githubUrl: 'https://github.com/dein-user/minecraft',
};

export default function ProjectsSection(): JSX.Element {
  return (
    <section className="projects-section" id="projects">
      <div className="section-inner">
        <h2 className="section-title">My project highlights</h2>
        <div className="projects-layout">
          <div>
            <ol className="projects-list">
              {PROJECTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
            <p className="see-more">→ see more projects</p>
          </div>
          <div className="featured-card">
            <img className="featured-img" src={FEATURED.image} alt={FEATURED.title} />
            <div className="featured-body">
              <div className="featured-tags">
                {FEATURED.tags.map((t) => (
                  <span key={t} className="featured-tag">{t}</span>
                ))}
              </div>
              <h3 className="featured-title">{FEATURED.title}</h3>
              <p className="featured-desc">{FEATURED.description}</p>
              <div className="featured-actions">
                <a href={FEATURED.docsUrl} className="btn-doc primary">Documentation</a>
                <a href={FEATURED.githubUrl} target="_blank" rel="noreferrer" className="btn-doc secondary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}