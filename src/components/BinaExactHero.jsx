import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BinaExactHero() {
  return (
    <section
      id="hero"
      className="landing-hero landing-hero-static relative mt-20 w-full overflow-hidden select-none bg-[#19b5e5] h-[clamp(34rem,82vw,48rem)] md:h-[clamp(34rem,52vw,50rem)] xl:h-[calc(100svh-5rem)] min-h-[580px]"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND LAYERS (SKY & ROLLING MEADOW)               */}
      {/* ========================================================= */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
        
        {/* Layer 0: Sky Canvas (Cyan Textured Sky) */}
        <div className="absolute will-change-transform z-[0] top-[-8%] left-[-5%] h-[116%] w-[110%]">
          <img
            src="/assets/bina-hero/hero-sky.png"
            alt="Cyan Painted Sky Background"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Layer 1: Rolling Green & Gold Meadow Hills */}
        <div className="absolute will-change-transform z-[1] bottom-[-4%] left-[-5%] h-[40%] w-[110%] md:h-[38%]">
          <img
            src="/assets/bina-hero/hero-field.png"
            alt="Rolling Meadow Field"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Layer 2: Floating Dandelion Seeds Left (Fluff One) */}
        <div
          className="absolute will-change-transform landing-hero-fade z-[2] left-[2%] top-[9%] w-[20%] md:left-[1.85%] md:top-[12.6%] md:w-[10.85%]"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="landing-hero-idle-fluff-one w-full">
            <img
              src="/assets/bina-hero/dandelion-fluff-1.png"
              alt="Floating Dandelion Seeds Left"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Layer 3: Floating Dandelion Seeds Right (Fluff Two) */}
        <div
          className="absolute will-change-transform landing-hero-fade z-[2] right-[1%] top-[9%] w-[24%] md:right-auto md:left-[84.3%] md:top-[13.6%] md:w-[14.3%]"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="landing-hero-idle-fluff-two w-full">
            <img
              src="/assets/bina-hero/dandelion-fluff-2.png"
              alt="Floating Dandelion Seeds Right"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Layer 4: Flying Origami Orange Bird */}
        <div
          className="absolute will-change-transform landing-hero-fade z-[11] hidden md:block md:left-[18%] md:top-[38.5%] md:w-[11.5%]"
          style={{ animationDelay: '0.45s' }}
        >
          <div className="landing-hero-idle-bird w-full">
            <img
              src="/assets/bina-hero/bird.png"
              alt="Flying Origami Bird"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. FOREGROUND BOTANICALS (EXACT BINA POSITIONS & SIZES)   */}
      {/* ========================================================= */}
      
      {/* Dandelion 02: Far Left Big Fluffy Dandelion Clock */}
      <img
        src="/assets/bina-hero/dandelion-02.png"
        alt="Dandelion Fluff Clock"
        className="landing-hero-fade pointer-events-none absolute bottom-0 left-[-7%] z-[12] w-[40%] object-contain object-bottom md:left-[0.5%] md:w-[21.8%]"
        style={{ transform: 'scaleX(-1)', animationDelay: '0.5s' }}
      />

      {/* Dandelion 04: Big Vibrant Yellow Blooms on Right */}
      <img
        src="/assets/bina-hero/dandelion-04.png"
        alt="Yellow Dandelion Blossom"
        className="landing-hero-fade pointer-events-none absolute bottom-[1.7%] right-[-8%] z-[12] w-[42%] object-contain object-bottom md:right-auto md:left-[70.2%] md:w-[24.2%]"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Dandelion 03: Right White Puff Dandelion with Green Leaves */}
      <img
        src="/assets/bina-hero/dandelion-03.png"
        alt="Dandelion Cluster"
        className="landing-hero-fade pointer-events-none absolute bottom-0 z-[12] hidden object-contain object-bottom md:block md:left-[57.3%] md:w-[27%]"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Dandelion 01: Midground Yellow Flower */}
      <img
        src="/assets/bina-hero/dandelion-01.png"
        alt="Small Dandelion Flower"
        className="landing-hero-fade pointer-events-none absolute bottom-[12.6%] z-[12] hidden object-contain object-bottom md:block md:left-[23.5%] md:w-[9.8%]"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Clover Patch Center Ground */}
      <img
        src="/assets/bina-hero/clover.png"
        alt="Green Clovers"
        className="landing-hero-fade pointer-events-none absolute bottom-0 left-[50%] z-[12] w-[26%] object-contain object-bottom md:left-[54.2%] md:w-[14.1%]"
        style={{ animationDelay: '0.5s' }}
      />

      {/* ========================================================= */}
      {/* 3. SOCIAL MEDIA PILL RAIL (EXACT LIKE BINA RIGHT RAIL)    */}
      {/* ========================================================= */}
      <aside
        aria-label="Follow us on social media"
        className="fixed right-0 bottom-[10%] z-[900] hidden md:flex flex-col items-center gap-[1.1rem] rounded-l-[20px] bg-[#67DEBF] px-[0.7rem] py-[1.25rem] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-r-0 border-black/10"
      >
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="block transition-transform duration-200 ease-out hover:scale-110 text-black/90 hover:text-black"
        >
          <svg className="h-[1.5rem] w-[1.5rem] fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="block transition-transform duration-200 ease-out hover:scale-110 text-black/90 hover:text-black"
        >
          <svg className="h-[1.5rem] w-[1.5rem] fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="block transition-transform duration-200 ease-out hover:scale-110 text-black/90 hover:text-black"
        >
          <svg className="h-[1.5rem] w-[1.5rem] fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <span className="text-[10px] font-bold tracking-widest uppercase -rotate-90 py-2 text-black/70 select-none">
          Follow us
        </span>
      </aside>

      {/* ========================================================= */}
      {/* 4. CENTER FOREGROUND: HEADLINE, SUBTEXT & CTA             */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-between pointer-events-none">
        
        {/* Top Text Cluster */}
        <div className="relative pointer-events-auto flex flex-col items-center px-4 sm:px-6 pt-4 sm:pt-7 md:pt-8 text-center max-w-4xl mx-auto w-full">
          
          {/* Subtitle / Age Descriptor */}
          <p
            className="landing-hero-fade mb-2 sm:mb-3.5 text-[12.5px] xs:text-[14px] sm:text-[16px] md:text-[17px] text-black font-semibold tracking-tight max-w-[310px] xs:max-w-md sm:max-w-2xl md:max-w-3xl leading-snug"
            style={{ animationDelay: '0.4s' }}
          >
            A place for children to explore what they love, try what they've never tried, and discover where their curiosity takes them.
          </p>

          {/* Main Hero Headline */}
          <h1
            className="landing-hero-fade mb-4 sm:mb-6 text-[26px] xs:text-[34px] sm:text-[46px] md:text-[58px] lg:text-[72px] text-black font-extrabold tracking-[-0.035em] leading-[1.08] sm:leading-[1.04] max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-4xl"
            style={{ animationDelay: '0.5s' }}
          >
            Bored? Come Learn Something You Love.
          </h1>

          {/* Primary Action Button (Exact Bina Yellow with Black Border + Arrow) */}
          <div
            className="landing-hero-fade inline-block"
            style={{ animationDelay: '0.65s' }}
          >
            <a
              href="#the-idea"
              className="inline-flex items-center justify-between cursor-pointer transition-all duration-300 ease-out rounded-[13px] sm:rounded-[16px] px-5 py-2.5 sm:px-8 sm:py-3.5 gap-2.5 sm:gap-3 border-2 border-black bg-[#F7D928] text-black hover:bg-[#F15A29] hover:text-white cta-wiggle shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Start Exploring"
            >
              <span className="text-[14px] sm:text-[17px] font-bold tracking-tight">
                Start Exploring
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. CENTER KIDS ON STONE (AUTHENTIC INDIAN KIDS ON STONE)  */}
        {/* ========================================================= */}
        <div className="pointer-events-none flex w-full flex-1 items-end justify-center min-h-0">
          <div
            className="landing-hero-rise flex h-full w-[88%] sm:w-[72%] md:w-[54%] lg:w-[48%] items-end justify-center pb-0"
            style={{ animationDelay: '0.2s' }}
          >
            <img
              src="/assets/bina-hero/hero-kids-indian-final.png"
              alt="Indian children on stone exploring with binoculars and curiosity"
              className="h-auto max-h-full w-full object-contain object-bottom drop-shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
