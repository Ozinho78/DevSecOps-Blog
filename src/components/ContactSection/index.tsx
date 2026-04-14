import React, { JSX } from 'react';
import styles from './styles.module.css';

export default function ContactSection(): JSX.Element {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* Spalte 1, Zeile 1: Titel */}
        <h2 className={styles.title}>Contact me</h2>

        {/* Spalte 2, Zeile 1: Subtitle */}
        <p className={styles.subTitle}>Looking forward to hearing from you!</p>

        {/* Spalte 1, Zeile 2: Info-Text */}
        <p className={styles.infoText}>
          Feel free to reach out with job offers or opportunities. I am open
          to roles in Networking, Firewalling, and DevSecOps — both on-site
          in Leipzig and remote. Whether you are looking for someone to
          strengthen your infrastructure security, automate your pipelines,
          or bring a hands-on engineering mindset to your team, I am happy
          to have a conversation.
        </p>

        {/* Spalte 2, Zeile 2: Kontakt-Links */}
        <div className={styles.contacts}>

          {/* E-Mail */}
          <div className={styles.contactRow}>
            <div className={styles.iconMail}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <a
              href="mailto:kontakt@michael-fiebelkorn.de"
              className={styles.contactLink}
            >
              kontakt@michael-fiebelkorn.de
            </a>
          </div>

          {/* LinkedIn */}
          <div className={styles.contactRow}>
            <div className={styles.iconLinkedIn}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <a
              href="https://www.linkedin.com/in/michael-fiebelkorn-4099a177/"
              className={`${styles.contactLink} ${styles.contactLinkUnderline}`}
              target="_blank"
              rel="noreferrer"
            >
              Profile Page
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}