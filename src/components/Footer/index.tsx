import React, { JSX } from 'react';
import styles from './styles.module.css';

export default function Footer(): JSX.Element {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>

      {/* ── Scroll-to-top button ──────────────
          Figma: justify-content flex-end + align-items flex-end
          → Pfeil sitzt unten-rechts im hohen Pill-Button          */}
      <a
        href="#about"
        className={styles.arrowBtn}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        {/* Pfeil nach oben: Linie + Spitze oben */}
        <svg
          className={styles.arrowIcon}
          viewBox="0 0 12 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Senkrechte Linie */}
          <line x1="6" y1="50" x2="6" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          {/* Linker Schenkel der Pfeilspitze */}
          <line x1="6" y1="4" x2="1" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          {/* Rechter Schenkel der Pfeilspitze */}
          <line x1="6" y1="4" x2="11" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </a>

      {/* ── Copyright + Legal ──────────────── */}
      <div className={styles.content}>
        <p className={styles.copyright}>© Michael Fiebelkorn 2026</p>
        <a href="/legal-notice" className={styles.legal}>
          Legal notice
        </a>
      </div>

    </footer>
  );
}