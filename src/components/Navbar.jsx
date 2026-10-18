import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-black/[0.06] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0D5E3D] text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-xs group-hover:bg-[#F15A29] transition-colors duration-300">
            GPS
          </div>
          <div className="flex flex-col">
            <span className="text-[17px] font-bold text-[#1A1A18] tracking-tight leading-tight">
              GPS FDK
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#0D5E3D]">
              School of Learning
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14.5px] font-medium text-[#454743]">
          <a
            href="#the-idea"
            className="hover:text-[#F15A29] transition-colors duration-200"
          >
            The Foundational Idea
          </a>
          <a
            href="#current-focus"
            className="hover:text-[#F15A29] transition-colors duration-200 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D5E3D]"></span>
            Current Focus
          </a>
          <a
            href="#next-phase"
            className="hover:text-[#F15A29] transition-colors duration-200"
          >
            Next Phase
          </a>
          <a
            href="#long-term-vision"
            className="hover:text-[#F15A29] transition-colors duration-200"
          >
            Long-Term Vision
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#final-cta"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#F15A29] hover:bg-[#d94e20] text-white text-[13.5px] font-semibold transition-all duration-300 hover:shadow-[0_8px_20px_-6px_rgba(241,90,41,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 lg:hidden text-[#1A1A18] hover:text-[#F15A29]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-6 py-6 flex flex-col gap-4 text-base font-medium shadow-xl">
          <a
            href="#the-idea"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1A1A18] hover:text-[#F15A29] py-1"
          >
            The Foundational Idea
          </a>
          <a
            href="#current-focus"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1A1A18] hover:text-[#F15A29] py-1"
          >
            Current Focus
          </a>
          <a
            href="#next-phase"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1A1A18] hover:text-[#F15A29] py-1"
          >
            Next Phase
          </a>
          <a
            href="#long-term-vision"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1A1A18] hover:text-[#F15A29] py-1"
          >
            Long-Term Vision
          </a>
          <a
            href="#final-cta"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 h-12 w-full rounded-full bg-[#F15A29] text-white font-semibold mt-2"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
