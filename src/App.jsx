import React from 'react';
import Navbar from './components/Navbar';
import BinaExactHero from './components/BinaExactHero';
import SectionFoundationalIdea from './components/SectionFoundationalIdea';
import SectionCurrentFocus from './components/SectionCurrentFocus';
import SectionNextPhase from './components/SectionNextPhase';
import SectionLongTermVision from './components/SectionLongTermVision';
import SectionFinalCTA from './components/SectionFinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A18] font-sf antialiased selection:bg-[#F15A29] selection:text-white">
      {/* Fixed Header */}
      <Navbar />

      {/* Main Page Flow with 6 Sections */}
      <main className="w-full flex flex-col">
        {/* SECTION 01 — HERO (EXACT BINA HERO + INDIAN KIDS ON STONE) */}
        <BinaExactHero />

        {/* SECTION 02 — THE FOUNDATIONAL IDEA */}
        <SectionFoundationalIdea />

        {/* SECTION 03 — CURRENT FOCUS */}
        <SectionCurrentFocus />

        {/* SECTION 04 — NEXT PHASE */}
        <SectionNextPhase />

        {/* SECTION 05 — LONG-TERM VISION */}
        <SectionLongTermVision />

        {/* SECTION 06 — FINAL CTA */}
        <SectionFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
