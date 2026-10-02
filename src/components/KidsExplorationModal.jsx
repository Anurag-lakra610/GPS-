import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Eye, Search, X, Sparkles, Heart } from 'lucide-react';

export default function KidsExplorationModal() {
  const [activeModal, setActiveModal] = useState(null);

  const hotspots = [
    {
      id: 'binoculars',
      title: 'Sky Observation Binoculars',
      subtitle: 'Exploring the Horizon of Possibilities',
      icon: Eye,
      left: '20%',
      top: '25%',
      color: 'bg-amber-500',
      description: 'Looking far beyond boundaries into a sky filled with dreams, flying birds, and infinite curiosity.',
      badge: 'Binoculars View'
    },
    {
      id: 'map',
      title: 'The Curiosity Map',
      subtitle: 'Navigating New Adventures',
      icon: Compass,
      left: '48%',
      top: '42%',
      color: 'bg-emerald-500',
      description: 'Mapping out unexplored paths, creative hobbies, and passions waiting to be discovered by young minds.',
      badge: 'Map Discovery'
    },
    {
      id: 'lens',
      title: 'Nature Magnifying Glass',
      subtitle: 'Inspecting Micro Wonders',
      icon: Search,
      left: '78%',
      top: '38%',
      color: 'bg-orange-500',
      description: 'Zooming in on dandelion seeds, wild blooms, and the tiny details that spark big wonder.',
      badge: 'Magnifier Lens'
    }
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 top-[40%] z-20 pointer-events-none flex justify-center items-end">
      {/* Container matching kids position on rocks */}
      <div className="relative w-full max-w-4xl h-full flex justify-center items-end pb-8">
        
        {/* Interactive Hotspot Buttons over Kids */}
        {hotspots.map((spot) => {
          const Icon = spot.icon;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveModal(spot)}
              className="absolute pointer-events-auto group focus:outline-none"
              style={{ left: spot.left, top: spot.top }}
              title={spot.title}
            >
              {/* Pulse Ring */}
              <span className={`absolute -inset-2.5 rounded-full ${spot.color} opacity-40 animate-ping group-hover:opacity-75`} />
              
              {/* Hotspot Pill */}
              <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/60 text-slate-800 text-xs font-bold transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                <Icon className="w-3.5 h-3.5 text-orange-500 group-hover:text-white transition-colors" />
                <span className="hidden sm:inline-block">{spot.badge}</span>
                <Sparkles className="w-3 h-3 text-amber-400 group-hover:text-amber-200" />
              </div>
            </button>
          );
        })}

        {/* Modal Overlay */}
        <AnimatePresence>
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80 overflow-hidden"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-emerald-400" />

                {/* Close Button */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Content Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`p-3 rounded-2xl ${activeModal.color} text-white shadow-md`}>
                    <activeModal.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                      Childhood Exploration
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {activeModal.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeModal.description}
                </p>

                {/* Interactive Feature Visualizer inside Modal */}
                {activeModal.id === 'binoculars' && (
                  <div className="relative h-36 rounded-2xl bg-gradient-to-b from-sky-400 to-sky-600 overflow-hidden flex items-center justify-center border border-sky-300 shadow-inner">
                    {/* Binoculars Double Lens Cutout */}
                    <div className="flex gap-4 opacity-90">
                      <div className="w-24 h-24 rounded-full border-4 border-slate-900/80 shadow-2xl flex items-center justify-center bg-sky-300/30 backdrop-blur-xs">
                        <span className="animate-pulse text-amber-300 text-lg">🦅</span>
                      </div>
                      <div className="w-24 h-24 rounded-full border-4 border-slate-900/80 shadow-2xl flex items-center justify-center bg-sky-300/30 backdrop-blur-xs">
                        <span className="animate-bounce text-white text-base">🍃</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeModal.id === 'map' && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                      <span>Curiosity Trails Found:</span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-800">4 Active Trails</span>
                    </div>
                    <ul className="text-xs text-amber-950 space-y-1.5 font-medium">
                      <li className="flex items-center gap-2">🎨 Painting & Visual Arts Trail</li>
                      <li className="flex items-center gap-2">🌱 Dandelion & Botanical Gardening</li>
                      <li className="flex items-center gap-2">🎵 Storytelling & Music Discovery</li>
                    </ul>
                  </div>
                )}

                {activeModal.id === 'lens' && (
                  <div className="relative h-32 rounded-2xl bg-emerald-900/90 p-4 text-emerald-100 flex items-center justify-between overflow-hidden">
                    <div className="z-10">
                      <span className="text-xs text-emerald-300 font-bold uppercase">Macro Lens Analysis</span>
                      <p className="text-sm font-semibold">Taraxacum (Yellow Dandelion)</p>
                      <p className="text-xs text-emerald-200/80 mt-1">Feathery pappus seeds ready to catch the breeze.</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-emerald-500/30 border-2 border-emerald-300 flex items-center justify-center text-2xl animate-spin" style={{ animationDuration: '12s' }}>
                      🌼
                    </div>
                  </div>
                )}

                {/* Footer Action */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
                  >
                    <span>Continue Exploring</span>
                    <Heart className="w-4 h-4 fill-white text-white" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
