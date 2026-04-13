import React, { JSX } from 'react';

const SKILLS = [
  { icon: '🌐', label: 'HTML' },
  { icon: '🎨', label: 'CSS' },
  { icon: '⚡', label: 'JavaScript' },
  { icon: '🐍', label: 'Python' },
  { icon: '🐚', label: 'Shell Scripting' },
  { icon: '📋', label: 'YAML' },
  { icon: '🐳', label: 'Docker' },
  { icon: '🔄', label: 'CI/CD GitHub Actions' },
  { icon: '🔒', label: 'IT Security' },
];

export default function SkillsSection(): JSX.Element {
  return (
    <section className="skills-section" id="skills">
      <div className="section-inner">
        <h2 className="section-title">My skills</h2>
        <div className="skills-grid">
          {SKILLS.map(({ icon, label }) => (
            <div key={label} className="skill-card">
              <span className="skill-icon">{icon}</span>
              <span className="skill-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}