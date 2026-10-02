import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FlyingBird({ mousePos }) {
  const [isHovered, setIsHovered] = useState(false);
  const [chirpText, setChirpText] = useState('');

  const handleBirdClick = (e) => {
    e.stopPropagation();
    const chirps = ['Chirp! ✨', 'Fly High! 🍃', 'Explore Love ❤️', 'Wonder & Discover 🌟'];
    const randomChirp = chirps[Math.floor(Math.random() * chirps.length)];
    setChirpText(randomChirp);
    setTimeout(() => setChirpText(''), 2200);
  };

  // Parallax offset based on mouse position
  const parallaxX = ((mousePos.x - window.innerWidth / 2) / window.innerWidth) * 25;
  const parallaxY = ((mousePos.y - window.innerHeight / 2) / window.innerHeight) * 15;

  return (
    <div
      className="absolute top-[28%] left-[22%] z-20 pointer-events-auto cursor-pointer select-none group"
      style={{
        transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`
      }}
      onClick={handleBirdClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sinuous Flight & Sway Animation */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          x: [-15, 15, -15],
          rotate: [-3, 4, -3],
          scale: isHovered ? 1.15 : 1
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 0.3 }
        }}
        className="relative flex flex-col items-center"
      >
        {/* Chirp Speech Bubble */}
        {chirpText && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: -60 }}
            className="absolute -top-12 bg-white/95 backdrop-blur-md text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-amber-200 whitespace-nowrap"
          >
            {chirpText}
          </motion.div>
        )}

        {/* Hover Hint Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Bird Image with Wing Flap Motion */}
        <motion.img
          src="/assets/bird.png"
          alt="Golden Flying Bird"
          className="w-32 md:w-44 h-auto drop-shadow-md transition-transform duration-300 group-hover:brightness-110"
          animate={{
            scaleY: [1, 0.94, 1],
            rotate: isHovered ? [0, 360] : 0
          }}
          transition={{
            scaleY: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 0.8, ease: 'easeOut' }
          }}
        />

        {/* Floating Dandelion Seeds Dropping from Bird */}
        <div className="absolute -bottom-2 right-4 flex gap-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="animate-ping text-xs text-amber-300">✨</span>
          <span className="text-[10px] text-white/80 animate-bounce">🍃</span>
        </div>
      </motion.div>
    </div>
  );
}
