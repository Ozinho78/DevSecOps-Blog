import React, { JSX, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About me",    href: "#about"    },
  { label: "My skills",   href: "#skills"   },
  { label: "My projects", href: "#projects" },
  { label: "Contact",     href: "#contact"  },
];

export default function Navbar(): JSX.Element {
  const [hidden,   setHidden]   = useState(false);
  const [atTop,    setAtTop]    = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  // Stellt sicher dass Portal erst nach dem Mount gerendert wird (SSR-safe)
  const [mounted,  setMounted]  = useState(false);
  const lastScrollY             = useRef(0);

  useEffect(() => { setMounted(true); }, []);

  /* ── Scroll-Hide-Logik ──────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setHidden(false);
        setAtTop(true);
      } else {
        setAtTop(false);
        if (!menuOpen) setHidden(currentY > lastScrollY.current);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  /* ── Scroll-Lock ────────────────────────────────────────────────── */
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    document.body.style.overflow            = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow            = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  /*
   * Overlay als Portal direkt in document.body –
   * dadurch liegt es außerhalb von #__docusaurus und dessen
   * potenziellem Containing Block (transform/perspective in Production).
   * position: fixed funktioniert damit garantiert relativ zum Viewport.
   */
  const overlay = (
    <div
      id="mobile-menu"
      className={[styles.overlay, menuOpen ? styles.overlayOpen : ""].join(" ")}
      aria-hidden={!menuOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <button
        className={styles.closeBtn}
        onClick={closeMenu}
        aria-label="Close navigation menu"
      >
        ✕
      </button>

      <nav aria-label="Mobile navigation">
        <ul className={styles.overlayList} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.overlayLink}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <header
        className={[
          styles.header,
          hidden   ? styles.hidden   : styles.visible,
          atTop    ? styles.atTop    : styles.scrolled,
        ].join(" ")}
        role="banner"
      >
        <div className={styles.inner}>

          <nav aria-label="Main navigation" className={styles.desktopNav}>
            <ul className={styles.navList} role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>

        </div>
      </header>

      {/* Portal: rendert außerhalb von #__docusaurus direkt in body */}
      {mounted && ReactDOM.createPortal(overlay, document.body)}
    </>
  );
}