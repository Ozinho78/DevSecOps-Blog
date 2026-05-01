
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

      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <body className="portfolio-page" />
      </Head>


      <Navbar />


      <div className={styles.pageWrapper}>
        {children}
      </div>
    </>
  );
}