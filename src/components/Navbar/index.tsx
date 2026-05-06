import React, { JSX, useEffect, useRef, useState } from "react";
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
  const lastScrollY             = useRef(0);

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

  /*
   * ── Scroll-Lock ────────────────────────────────────────────────────
   * In Docusaurus Production ist der scrollbare Container oft <html>,
   * nicht <body>. Beide sperren um sicherzustellen, dass der Lock
   * in Dev (localhost) UND Production (gehostet) greift.
   */
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={[
          styles.header,
          hidden   ? styles.hidden   : styles.visible,
          atTop    ? styles.atTop    : styles.scrolled,
          menuOpen ? styles.menuOpen : "",
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
    </>
  );
}