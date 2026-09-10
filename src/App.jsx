import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBanner from './components/TickerBanner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FeaturedProject from './components/FeaturedProject';
import ExperienceEducation from './components/ExperienceEducation';
import GitHubCTA from './components/GitHubCTA';
import LinkedInCTA from './components/LinkedInCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import CertificateModal from './components/CertificateModal';
import WelcomeLoader from './components/WelcomeLoader';
import GlowParticles from './components/GlowParticles';
import AchievementPopup from './components/AchievementPopup';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState('bnsp-junior-web-developer');

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCv = () => {
    setCvModalOpen(true);
  };

  const handleOpenCert = (certId = 'bnsp-junior-web-developer') => {
    setSelectedCertId(certId);
    setCertModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090f] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200 relative overflow-x-hidden">
      {/* Ambient Glowing Animated Background Orbs */}
      <GlowParticles />

      {/* Initial Welcome Loader Animation */}
      <WelcomeLoader />

      {/* Sticky Navigation with Integrated Top Game HUD Status Bar */}
      <Navbar onOpenContact={handleOpenContact} onOpenCv={handleOpenCv} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section with Typewriter Title */}
        <Hero onOpenContact={handleOpenContact} onOpenCv={handleOpenCv} onOpenCert={handleOpenCert} />

        {/* Continuous Cyber Ticker Banner */}
        <TickerBanner />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Showcase Projects Section */}
        <Projects />

        {/* 5. Flagship Case Study Section */}
        <FeaturedProject />

        {/* 6. Experience, Education & Certification Timeline */}
        <ExperienceEducation onOpenCert={handleOpenCert} />

        {/* 7. Dedicated GitHub CTA */}
        <GitHubCTA />

        {/* 8. Dedicated LinkedIn CTA */}
        <LinkedInCTA />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* Floating RPG Achievement Unlocked Toast Notification */}
      <AchievementPopup />

      {/* 10. Footer */}
      <Footer />

      {/* Interactive CV Modal & PDF Generator */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* High Resolution BNSP Certificate Lightbox Modal */}
      <CertificateModal 
        isOpen={certModalOpen} 
        onClose={() => setCertModalOpen(false)} 
        certId={selectedCertId} 
      />
    </div>
  );
}
