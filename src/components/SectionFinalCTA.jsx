import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function SectionFinalCTA() {
  return (
    <section id="final-cta" className="w-full py-20 sm:py-28 lg:py-36 bg-white">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Bold Full-Width Photographic Ending Canvas */}
        <div className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden min-h-[500px] lg:min-h-[560px] flex items-center p-8 sm:p-14 lg:p-20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] border border-black/[0.04]">
          
          {/* Authentic Documentary Background */}
          <img
            src="/assets/hands_on_blocks.jpg"
            alt="Indian boy and girl building colorful creative structures and discovering learning through play"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 pointer-events-none" />

          {/* Direct Child-Centric Content Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-2xl flex flex-col items-start text-white"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F15A29]"></span>
              <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-white">
                WHAT WILL YOU DISCOVER?
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold text-white tracking-[-0.035em] leading-[1.08] mb-5">
              What Do You Want to Discover?
            </h2>

            {/* Paragraph */}
            <p className="text-[18px] sm:text-[21px] text-white/90 leading-relaxed font-normal mb-8 max-w-xl">
              Try something you love. Explore something new. Follow your curiosity.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#hero"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-[#F15A29] hover:bg-[#d94e20] text-white text-[15px] font-semibold transition-all duration-300 hover:shadow-[0_12px_28px_-8px_rgba(241,90,41,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Exploring</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-white/70 text-[13px] font-medium">
                GPS FDK School of Learning · Ages 5–15
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
