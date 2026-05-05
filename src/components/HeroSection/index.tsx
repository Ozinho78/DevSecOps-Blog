import React, { JSX } from "react";
import styles from "./styles.module.css";

export default function HeroSection(): JSX.Element {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>

        {/*
          DOM-Reihenfolge = Mobile-Reihenfolge (Figma):
            1. nameGroup    → Greeting / Name / Title
            2. photo        → Foto
            3. contentBlock → Description + CTA

          Desktop: CSS Grid ordnet nameGroup + contentBlock links,
          photo rechts über beide Zeilen.
        */}

        <div className={styles.nameGroup}>
          <p className={styles.greeting}>Hey there 👋 I am</p>
          <h1 className={styles.name}>Michael Fiebelkorn</h1>
          <p className={styles.title}>DevSecOps Engineer</p>
        </div>

        <img
          className={styles.photo}
          src="/img/profile.png"
          alt="Michael Fiebelkorn"
        />

        <div className={styles.contentBlock}>
          <p className={styles.description}>
            I work as an IT System Engineer with a focus on Networking,
            Firewalling and Troubleshooting. My passion for automation and
            security has taken me from network engineering through software
            development all the way to DevSecOps – always with the goal of
            making infrastructure and code equally secure and maintainable.
          </p>
          <div className={styles.ctaWrapper}>
            <a className={styles.cta} href="#contact">
              <span className={styles.ctaLabel}>Contact me</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}