/**
 * PortfolioLayout.tsx
 *
 * Standalone Layout für die Portfolio-Page.
 * Verwendet NICHT @theme/Layout (= kein Docusaurus-Navbar/-Footer).
 * Docusaurus liefert den HTML-Shell trotzdem via Root-Wrapper.
 *
 * Platzierung: src/components/PortfolioLayout/index.tsx
 */

import React, { JSX } from "react";
import Head from "@docusaurus/Head";
import Navbar from "@site/src/components/Navbar";
import styles from "./styles.module.css";

interface PortfolioLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PortfolioLayout({
  children,
  title = "Portfolio | Michael Fiebelkorn",
  description = "IT System Engineer - Networking, Firewalling, DevSecOps",
}: PortfolioLayoutProps): JSX.Element {
  return (
    <>
      {/* SEO / <head> – ersetzt das Layout-Prop von @theme/Layout */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Docusaurus-Navbar und -Footer global auf dieser Route ausblenden */}
        <body className="portfolio-page" />
      </Head>

      {/* Eigene Navbar */}
      <Navbar />

      {/* Seiteninhalt mit top-offset für fixed Navbar */}
      <div className={styles.pageWrapper}>
        {children}
      </div>
    </>
  );
}