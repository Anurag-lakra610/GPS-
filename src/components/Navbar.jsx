import React from 'react';
import AudioController from './AudioController';
import { ArrowRight, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-xs">
      <div className="h-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-orange-500 text-white font-extrabold flex items-center justify-center shadow-md text-sm tracking-tight">
            GPS
          </div>
          <span className="font-extrabold text-xl text-slate-900 tracking-tight">
            GPS Love
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          <a href="#why-love" className="text-sm font-bold text-orange-600 border-b-2 border-orange-500 pb-0.5">
            Why Love
          </a>
          <a href="#what-we-do" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            What We Do
          </a>
          <a href="#ecosystem" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Life-Cycle Ecosystem
          </a>
          <a href="#roadmap" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Roadmap
          </a>
          <a href="#impact" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Real Impact
          </a>
          <a href="#dignity" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Safety & Dignity
          </a>
        </nav>

        {/* Right CTA & Sound Controls */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Audio Breeze Sound Synthesizer Toggle */}
          <AudioController />

          {/* CTA Pill Button */}
          <a
            href="#join"
            className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-orange-500 text-white text-xs font-bold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200 gap-2"
          >
            <span>Be Part of the Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* User Icon Badge */}
          <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
