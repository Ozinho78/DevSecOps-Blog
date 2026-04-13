import React, { JSX } from 'react';

export default function ContactSection(): JSX.Element {
  return (
    <section className="contact-section" id="contact">
      <div className="section-inner">
        <h2 className="section-title">Contact me</h2>
        <div className="contact-layout">
          <div>
            <p className="contact-intro">
              Some information about yourself and how you can be reached.
            </p>
            <ul className="contact-list">
              <li>📍 Leipzig, Germany</li>
              <li>💼 Open to new opportunities</li>
              <li>🛠️ Networking · Firewalling · DevSecOps</li>
              <li>🌐 Open to remote work</li>
            </ul>
          </div>
          <div>
            <p className="contact-cta">Looking forward to hearing from you!</p>
            <div className="contact-links">
              <a href="mailto:felix@example.com" className="contact-link">✉️ felix@example.com</a>
              <a href="https://linkedin.com/in/felix" className="contact-link" target="_blank" rel="noreferrer">
                👤 LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}