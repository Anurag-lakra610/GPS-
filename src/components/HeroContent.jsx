import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroContent({ mousePos }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    // Confetti explosion from CTA button
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { x, y },
      colors: ['#ff5722', '#ffc107', '#4caf50', '#2196f3']
    });

    const targetSection = document.getElementById('explore-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax subtle movement for text content
  const parallaxX = ((mousePos.x - window.innerWidth / 2) / window.innerWidth) * 10;
  const parallaxY = ((mousePos.y - window.innerHeight / 2) / window.innerHeight) * 6;

  return (
    <div
      className="relative z-30 flex flex-col items-center text-center max-w-3xl mx-auto px-6 pt-24 md:pt-32"
      style={{
        transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`
      }}
    >
      {/* Top Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-white/60 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span>Childhood Curiosity Initiative</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
      </motion.div>

      {/* Main Headline — Ditto Image 3 */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5 font-display"
      >
        Bored? Do Something You Love.
      </motion.h1>

      {/* Subtitle — Ditto Image 3 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-xl text-slate-800/90 font-medium max-w-2xl leading-relaxed mb-8"
      >
        A place for children to explore what they love, try what they've never tried, and discover where their curiosity takes them.
      </motion.p>

      {/* CTA Button — Vibrant Orange Pill with White Text and Right Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <button
          onClick={handleCtaClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff5722] hover:bg-[#e64a19] text-white font-extrabold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-glow"
        >
          <span>Start Exploring</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </button>

        {/* Value Micro Badges */}
        <div className="flex items-center gap-6 text-xs font-semibold text-slate-800/80 pt-2">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Consent-First Advocacy
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-orange-600" />
            Uncompromised Child Dignity
          </span>
        </div>
      </motion.div>
    </div>
  );
}
