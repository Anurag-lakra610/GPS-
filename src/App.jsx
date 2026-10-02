import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import FlyingBird from './components/FlyingBird';
import DandelionSeedCanvas from './components/DandelionSeedCanvas';
import ForegroundLandscape from './components/ForegroundLandscape';
import KidsExplorationModal from './components/KidsExplorationModal';
import { Heart, Sparkles, BookOpen, ToyBrick, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#19b5e5] text-slate-900 font-sans relative overflow-x-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar />

      {/* HERO SECTION — 100vh Full Screen Interactive Scene */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-20">
        
        {/* Background Sky & Rolling Hills Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero_full_bg.png"
            alt="Cyan Sky and Yellow Hills Background"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle Canvas Painterly Texture Overlay */}
          <div className="absolute inset-0 painterly-canvas opacity-30 pointer-events-none" />
        </div>

        {/* Floating Dandelion Seeds Particle Engine */}
        <DandelionSeedCanvas mousePos={mousePos} />

        {/* Origami Flying Bird with Wing Flap Animation */}
        <FlyingBird mousePos={mousePos} />

        {/* Hero Content (Headline, Subtitle, Primary Orange CTA Button) */}
        <HeroContent mousePos={mousePos} />

        {/* Foreground Kids & Dandelion Landscape Parallax Layers */}
        <ForegroundLandscape mousePos={mousePos} />

        {/* Interactive Kids Hotspot Exploration Modals */}
        <KidsExplorationModal />

        {/* Bottom Fade Gradient into Next Section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FAF8F5] to-transparent z-30 pointer-events-none" />
      </section>

      {/* SECTION 02 — WHY LOVE & WHAT WE DO (Scroll Target) */}
      <section id="explore-section" className="w-full bg-[#FAF8F5] py-20 px-6 lg:px-12 relative z-30">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              The GPS Love Movement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Because Childhood Needs More Than Care.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              A child needs affection, stability, learning, play, and a circle of people who believe in their infinite potential.
            </p>
          </div>

          {/* 3 Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-xs">
                <Heart className="w-6 h-6 fill-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Belonging Before Instruction</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nurturing emotional safety and warmth as the prerequisite for learning and cognitive growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-xs">
                <ToyBrick className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Agency in Action</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hands-on building, artistic expression, and self-guided exploration that empowers curiosity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6 shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Courtyard Story Hour</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cultivating safe spaces for laughter, storytelling, and lifelong curiosity under open skies.
              </p>
            </div>

          </div>

          {/* Footer Callout */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-xl font-bold mb-1">Ready to support the journey?</h4>
              <p className="text-sm text-slate-400">Join our circle of advocates, creators, and mentors.</p>
            </div>
            <a
              href="#join"
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 shrink-0"
            >
              <span>Get Involved</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-950 text-slate-400 py-8 px-6 text-center text-xs border-t border-slate-900">
        <p>© 2026 GPS Love Initiative — Designed & Developed with Passion for Children everywhere.</p>
      </footer>
    </div>
  );
}
