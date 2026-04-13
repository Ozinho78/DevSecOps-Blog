import React, { JSX } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import PortfolioLayout from '../components/PortfolioLayout';

export default function Portfolio(): JSX.Element {
  return (
    <PortfolioLayout
      title="Michael Fiebelkorn - Portfolio"
      description="DevSecOps Engineer Portfolio"
    >
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="custom-footer">
        © Michael Fiebelkorn 2026 · Legal Notice
      </footer>
    </PortfolioLayout>
  );
}