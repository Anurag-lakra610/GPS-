import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-start overflow-hidden bg-white">
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Top Text Cluster: Editorial Rhythm inspired by Bina */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-10 lg:mb-14">
          
          {/* Eyebrow & Age Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-black/[0.07] mb-6 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#0D5E3D]"></span>
            <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#0D5E3D]">
              GPS FDK
            </span>
            <span className="text-black/20">•</span>
            <span className="text-[12px] font-semibold tracking-wide text-[#595b57]">
              Ages 5–15
            </span>
          </motion.div>

          {/* Headline: Clean, Oversized, High Contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[28px] xs:text-[34px] sm:text-[48px] md:text-[62px] lg:text-[72px] font-extrabold text-[#1A1A18] tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-6 max-w-3xl"
          >
            Bored? Come Learn Something You Love.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] sm:text-[18px] lg:text-[21px] text-[#454743] max-w-2xl font-normal leading-[1.5] mb-8 px-2"
          >
            A place where children can explore what interests them, try something new, and discover where their curiosity takes them.
          </motion.p>

          {/* CTA & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#final-cta"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-[#F15A29] hover:bg-[#d94e20] text-white text-[15px] font-semibold transition-all duration-300 hover:shadow-[0_12px_28px_-8px_rgba(241,90,41,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Exploring</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#the-idea"
              className="inline-flex items-center gap-2.5 h-14 px-7 rounded-full bg-[#FAF8F5] hover:bg-white text-[#1A1A18] text-[15px] font-medium border border-black/[0.08] hover:border-black/[0.2] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4 text-[#0D5E3D]" />
              <span>See the Philosophy</span>
            </a>
          </motion.div>
        </div>

        {/* Hero Photographic Stage: Large Full-Ratio Panoramic Canvas inspired by Bina */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden aspect-[16/9] sm:aspect-[21/10] lg:aspect-[24/10] max-h-[580px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-black/[0.04] bg-[#FAF8F5]"
        >
          {/* Main Panoramic Documentary Image */}
          <img
            src="/assets/panoramic_kites.jpg"
            alt="Indian children outdoors participating in exploratory activity, running freely across open fields"
            className="w-full h-full object-cover object-center transform hover:scale-[1.015] transition-transform duration-1000 ease-out"
          />

          {/* Cinematic subtle contrast gradient for text clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          {/* Bottom Floating Curatorial Pill Badge */}
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-white/92 backdrop-blur-md border border-white/40 shadow-sm flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#F15A29] animate-pulse"></span>
              <p className="text-[13px] sm:text-[14px] font-semibold text-[#1A1A18] tracking-tight">
                Self-directed learning in natural environments
              </p>
            </div>
            <div className="hidden md:inline-flex px-3.5 py-2 rounded-2xl bg-black/40 backdrop-blur-md text-white/90 text-[12px] font-medium border border-white/10">
              Free Exploration · No Classrooms
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
