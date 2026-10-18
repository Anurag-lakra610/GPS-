import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#121312] text-white pt-20 pb-12 border-t border-white/[0.08]">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0D5E3D] text-white flex items-center justify-center font-bold text-sm">
                GPS
              </div>
              <span className="text-[19px] font-bold tracking-tight text-white">
                GPS FDK
              </span>
            </div>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-sm">
              Creating open, curiosity-led learning opportunities for children aged 5–15. Fostering self-discovery, digital understanding, and hands-on creativity.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-white/80 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F15A29]"></span>
              Curiosity-First Framework
            </div>
          </div>

          {/* Navigation Column 1: School of Learning */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-4">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/40">
              School of Learning
            </h4>
            <ul className="flex flex-col gap-3 text-[14px] text-white/70">
              <li>
                <a href="#the-idea" className="hover:text-[#F15A29] transition-colors">
                  The Foundational Idea
                </a>
              </li>
              <li>
                <a href="#current-focus" className="hover:text-[#F15A29] transition-colors">
                  Current Focus (Digital Skills)
                </a>
              </li>
              <li>
                <a href="#next-phase" className="hover:text-[#F15A29] transition-colors">
                  Next Phase (Hands-on Projects)
                </a>
              </li>
              <li>
                <a href="#long-term-vision" className="hover:text-[#F15A29] transition-colors">
                  Long-Term Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: GPS Ecosystem */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/40">
              GPS Ecosystem
            </h4>
            <ul className="flex flex-col gap-3 text-[14px] text-white/70">
              <li>
                <a href="https://www.gpsfdk.com/" className="hover:text-[#F15A29] transition-colors">
                  GPS Home
                </a>
              </li>
              <li>
                <a href="https://www.gpsfdk.com/" className="hover:text-[#F15A29] transition-colors">
                  Consultancy
                </a>
              </li>
              <li>
                <a href="https://www.gpsfdk.com/" className="hover:text-[#F15A29] transition-colors">
                  Canvas
                </a>
              </li>
              <li>
                <a href="https://www.gpsfdk.com/" className="hover:text-[#F15A29] transition-colors">
                  Love Initiative
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Contact & Legal */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/40">
              Connect &amp; Ethics
            </h4>
            <ul className="flex flex-col gap-3 text-[14px] text-white/70">
              <li>
                <a href="https://www.gpsfdk.com/" className="hover:text-[#F15A29] transition-colors">
                  Privacy Policy &amp; Child Safety
                </a>
              </li>
              <li>
                <a href="https://www.gpsfdk.com/" className="hover:text-[#F15A29] transition-colors">
                  Contact Initiative Team
                </a>
              </li>
              <li>
                <span className="text-white/40 text-[12.5px]">
                  Delhi · Mumbai · Punjab · Himachal
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Brand Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-white/40">
          <div>© 2026 GPS FDK. All rights reserved.</div>
          <div className="italic">School of Learning is part of the growth ecosystem by GPS.</div>
        </div>

      </div>
    </footer>
  );
}
