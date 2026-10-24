/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AiTechSection } from './components/AiTechSection';
import { SolutionsSection } from './components/SolutionsSection';
import { MockupStudio } from './components/MockupStudio';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScopeEstimatorModal } from './components/ScopeEstimatorModal';
import { ProjectBriefModal } from './components/ProjectBriefModal';
import { servicesData } from './data/studioData';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [briefInitialData, setBriefInitialData] = useState<{
    serviceName?: string;
    estimatedPrice?: string;
  } | null>(null);

  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [estimatorServiceId, setEstimatorServiceId] = useState<string | null>(null);

  const handleOpenBrief = (serviceName?: string) => {
    if (serviceName) {
      setBriefInitialData({ serviceName });
    } else {
      setBriefInitialData(null);
    }
    setIsBriefOpen(true);
  };

  const handleConfigureService = (serviceId: string) => {
    setEstimatorServiceId(serviceId);
    setIsEstimatorOpen(true);
  };

  const handleSelectServiceFromHero = (serviceId: string) => {
    const el = document.getElementById(`service-${serviceId}`) || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedFromEstimator = (serviceName: string, estimatedPrice: string) => {
    setBriefInitialData({ serviceName, estimatedPrice });
    setIsBriefOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090e] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      <Navbar onOpenBrief={handleOpenBrief} />

      <main className="flex-1">
        <Hero
          services={servicesData}
          onSelectService={handleSelectServiceFromHero}
          onOpenBrief={handleOpenBrief}
        />

        <ServicesSection
          services={servicesData}
          onConfigureService={handleConfigureService}
          onOpenBrief={handleOpenBrief}
        />

        <AiTechSection />

        <SolutionsSection onOpenBrief={handleOpenBrief} />

        <MockupStudio />

        <PortfolioSection onOpenBrief={handleOpenBrief} />

        <ProcessSection />

        <WhyChooseSection onOpenBrief={() => handleOpenBrief()} />

        <AboutSection onOpenBrief={() => handleOpenBrief()} />

        <ContactSection />
      </main>

      <Footer onOpenBrief={handleOpenBrief} />

      {/* Interactive Modals */}
      <ScopeEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        serviceId={estimatorServiceId}
        services={servicesData}
        onProceedToBrief={handleProceedFromEstimator}
      />

      <ProjectBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
        initialData={briefInitialData}
      />
    </div>
  );
}
