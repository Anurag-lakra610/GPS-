import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SectionFoundationalIdea() {
  return (
    <section id="the-idea" className="w-full py-24 sm:py-32 lg:py-40 bg-white border-t border-black/[0.04]">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Emotional Emphasis */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D5E3D]/[0.08] text-[#0D5E3D] text-[11.5px] font-bold uppercase tracking-[0.14em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5E3D]"></span>
              THE FOUNDATIONAL IDEA
            </div>

            {/* Headline */}
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#1A1A18] tracking-[-0.03em] leading-[1.1] mb-6">
              Where Curiosity Begins.
            </h2>

            {/* Paragraph */}
            <p className="text-[17px] sm:text-[19px] text-[#454743] leading-[1.6] mb-8 font-normal">
              We don't believe a child's future should begin with a fixed answer. GPS creates room to explore, experience different interests, and discover what gives learning meaning and direction.
            </p>

            {/* Emotional Emphasis Quote Box */}
            <div className="relative pl-6 py-2 border-l-2 border-[#F15A29] mb-8">
              <p className="text-[20px] sm:text-[23px] font-semibold text-[#1A1A18] leading-[1.4] tracking-tight">
                “We don't decide what children should become. We help them discover what they could become.”
              </p>
            </div>

            {/* Micro tag */}
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#595b57]">
              <Sparkles className="w-4 h-4 text-[#F15A29]" />
              <span>Unprescribed paths · Experience-first education</span>
            </div>
          </motion.div>

          {/* Right Column: Asymmetrical Editorial Photography */}
          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden aspect-[4/3] sm:aspect-[5/4] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-black/[0.05] bg-[#FAF8F5]">
              <img
                src="/assets/hero_courtyard.jpg"
                alt="Indian child exploring in courtyard storytelling environment with joyful natural focus"
                className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Caption Pill */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-sm border border-white/60">
                <p className="text-[13px] sm:text-[14px] font-medium text-[#1A1A18] flex items-center justify-between">
                  <span>Self-guided courtyard discovery session</span>
                  <span className="text-[#0D5E3D] font-bold text-xs uppercase tracking-wider">GPS Focus</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
