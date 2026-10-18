import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Palette, Bot } from 'lucide-react';

export default function SectionCurrentFocus() {
  const focusAreas = [
    { name: 'Computer Fundamentals', icon: Terminal, color: 'text-[#0D5E3D]' },
    { name: 'Digital Skills', icon: Cpu, color: 'text-[#0D5E3D]' },
    { name: 'Creative Tools', icon: Palette, color: 'text-[#F15A29]' },
    { name: 'Introduction to AI', icon: Bot, color: 'text-[#F15A29]' },
  ];

  return (
    <section id="current-focus" className="w-full py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] border-t border-black/[0.04]">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Realistic Photo of Indian Children Learning Digital Skills */}
          <motion.div
            initial={{ opacity: 0, x: -25, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-black/[0.05] bg-white">
              <img
                src="/assets/section03_computer.jpg"
                alt="Indian children collaborating together on a computer screen learning digital skills"
                className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge in Corner */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-black/[0.06] shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0D5E3D]"></span>
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0D5E3D]">
                  Active Phase
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white text-[13px] sm:text-[14px] font-medium backdrop-blur-xs">
                Real digital skills · Hands-on computer exploration
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Compact Category Labels */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D5E3D]/10 text-[#0D5E3D] text-[11.5px] font-bold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0D5E3D] animate-pulse"></span>
              CURRENT FOCUS
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#1A1A18] tracking-[-0.03em] leading-[1.12] mb-6">
              From Using a Computer to Understanding What It Can Do.
            </h2>

            {/* Paragraph */}
            <p className="text-[17px] sm:text-[19px] text-[#454743] leading-[1.6] mb-8 font-normal">
              We're starting with computer fundamentals, digital skills and creative ways to use technology, gradually introducing children to AI.
            </p>

            {/* Compact Labels Row (NO large bulky cards) */}
            <div className="w-full pt-2">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#595b57] block mb-3">
                Core Exploration Tracks:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-black/[0.08] hover:border-[#F15A29]/40 hover:bg-white text-[#1A1A18] text-[14px] font-semibold transition-all duration-200 shadow-xs hover:shadow-sm"
                    >
                      <Icon className={`w-4 h-4 ${area.color}`} />
                      <span>{area.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Implementation Note */}
            <p className="text-[13px] text-[#595b57]/80 mt-6 italic">
              * Structured as a progressive learning rollout starting with foundational concepts.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
