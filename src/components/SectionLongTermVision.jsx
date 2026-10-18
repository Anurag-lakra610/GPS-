import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SectionLongTermVision() {
  const steps = [
    { label: 'CURIOSITY', desc: 'Sparking the instinct to question, observe and wonder' },
    { label: 'EXPERIENCE', desc: 'Direct engagement with tools, arts, technology and nature' },
    { label: 'DIRECTION', desc: 'Discovering genuine passions that guide self-driven growth' },
  ];

  return (
    <section id="long-term-vision" className="w-full py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] border-t border-black/[0.04]">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Top Header & Overview */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121312]/10 text-[#121312] text-[11.5px] font-bold uppercase tracking-[0.14em] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0D5E3D]"></span>
            LONG-TERM VISION
          </div>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#1A1A18] tracking-[-0.03em] leading-[1.1] mb-6">
            A Place Where Learning Keeps Evolving.
          </h2>
          <p className="text-[17px] sm:text-[20px] text-[#454743] leading-[1.58] font-normal">
            Our long-term vision is to create an environment that grows with children—a place where they can keep learning, keep exploring and shape their own journey.
          </p>
        </div>

        {/* Visual Progression Component: CURIOSITY → EXPERIENCE → DIRECTION */}
        <div className="w-full mb-16 p-6 sm:p-10 rounded-[32px] bg-white border border-black/[0.06] shadow-xs">
          <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#0D5E3D] block mb-6">
            Visual Progression Model
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#FAF8F5] border border-black/[0.04]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-extrabold text-[#F15A29] tracking-widest">
                      0{idx + 1}
                    </span>
                    {idx < 2 && (
                      <ArrowRight className="hidden md:block w-4 h-4 text-[#454743]/40 absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
                    )}
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#1A1A18] tracking-tight mb-2">
                    {step.label}
                  </h3>
                  <p className="text-[14px] text-[#454743] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expansive Community-Oriented Documentary Composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[32px] sm:rounded-[44px] overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[520px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-black/[0.05]"
        >
          <img
            src="/assets/section05_community.jpg"
            alt="Indian children gathered outdoors in an expansive community learning setting"
            className="w-full h-full object-cover transform hover:scale-[1.015] transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

          {/* Floating Curatorial Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F15A29]"></span>
              <p className="text-[14px] sm:text-[15px] font-semibold">
                An evolving community learning ecosystem
              </p>
            </div>
            <span className="text-[12px] font-medium text-white/70">
              Future Roadmap · Built Step by Step
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
