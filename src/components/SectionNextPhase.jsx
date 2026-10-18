import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Rocket, Lightbulb, ArrowUpRight } from 'lucide-react';

export default function SectionNextPhase() {
  return (
    <section id="next-phase" className="w-full py-24 sm:py-32 lg:py-40 bg-white border-t border-black/[0.04]">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Future Outlook */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F15A29]/10 text-[#F15A29] text-[11.5px] font-bold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F15A29]"></span>
              NEXT PHASE
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#1A1A18] tracking-[-0.03em] leading-[1.12] mb-6">
              From Learning Skills to Exploring Possibilities.
            </h2>

            {/* Paragraph */}
            <p className="text-[17px] sm:text-[19px] text-[#454743] leading-[1.6] mb-8 font-normal">
              We plan to expand into hands-on projects and more ways for children to explore different interests and find what truly excites them.
            </p>

            {/* Supporting Line: Build. Experiment. Discover. */}
            <div className="w-full p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-black/[0.06] mb-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0D5E3D] block mb-2">
                Project Methodology
              </span>
              <p className="text-[24px] sm:text-[28px] font-extrabold text-[#1A1A18] tracking-tight">
                Build. Experiment. Discover.
              </p>
              <p className="text-[14.5px] text-[#595b57] mt-2">
                Encouraging young minds to test ideas, construct tangible inventions, and learn by trial and discovery.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Project-Based Authentic Hands-on Photography */}
          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-black/[0.05] bg-[#FAF8F5]">
              <img
                src="/assets/section04_robotics_opt.jpg"
                alt="Indian students collaborating in a hands-on robotics and engineering project workshop"
                className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* Top Phase Tag */}
              <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-[12px] font-semibold">
                Upcoming Roadmap
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-[14px] font-semibold">Hands-on experimentation & maker projects</p>
                <p className="text-[12px] text-white/70">Connecting digital learning to physical creations</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
