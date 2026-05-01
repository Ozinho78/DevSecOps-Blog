import React, { JSX, useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About me",    href: "#about"    },
  { label: "My skills",   href: "#skills"   },
  { label: "My projects", href: "#projects" },
  { label: "Contact",     href: "#contact"  },
];

export default function Navbar(): JSX.Element {
  const [hidden, setHidden]     = useState(false);
  const [atTop, setAtTop]       = useState(true);
  const lastScrollY             = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      
      if (currentY < 80) {
        setHidden(false);
        setAtTop(true);
      } else {
        setAtTop(false);
        setHidden(currentY > lastScrollY.current);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        styles.header,
        hidden  ? styles.hidden  : styles.visible,
        atTop   ? styles.atTop   : styles.scrolled,
      ].join(" ")}
      role="banner"
    >
      <div className={styles.inner}>
        
        <nav aria-label="Main navigation">
          <ul className={styles.navList} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.navLink}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}