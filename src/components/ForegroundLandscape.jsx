import React from 'react';
import { motion } from 'framer-motion';

export default function ForegroundLandscape({ mousePos }) {
  // Layer parallax speeds
  const kidsX = ((mousePos.x - window.innerWidth / 2) / window.innerWidth) * 14;
  const kidsY = ((mousePos.y - window.innerHeight / 2) / window.innerHeight) * 8;

  const leftX = ((mousePos.x - window.innerWidth / 2) / window.innerWidth) * 22;
  const leftY = ((mousePos.y - window.innerHeight / 2) / window.innerHeight) * 12;

  const rightX = ((mousePos.x - window.innerWidth / 2) / window.innerWidth) * 20;
  const rightY = ((mousePos.y - window.innerHeight / 2) / window.innerHeight) * 10;

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between overflow-hidden">
      
      {/* Midground & Foreground Containers */}
      <div className="relative w-full h-full">
        
        {/* Left Dandelion Cluster */}
        <motion.div
          className="absolute bottom-0 left-0 w-[42%] max-w-[550px] pointer-events-auto cursor-pointer"
          style={{
            transform: `translate3d(${leftX}px, ${leftY}px, 0)`
          }}
          animate={{
            rotate: [-1, 1.5, -1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="/assets/dandelion_left.png"
            alt="Left Dandelion Plant"
            className="w-full h-auto object-contain object-bottom drop-shadow-lg"
          />
        </motion.div>

        {/* Center Group of 4 Kids on Rocks */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[52%] max-w-[720px] pointer-events-auto"
          style={{
            transform: `translate3d(calc(-50% + ${kidsX}px), ${kidsY}px, 0)`
          }}
        >
          <img
            src="/assets/kids_group.png"
            alt="Children Exploring on Rocks"
            className="w-full h-auto object-contain object-bottom drop-shadow-xl"
          />
        </motion.div>

        {/* Right Dandelion Flowers & Stalks Cluster */}
        <motion.div
          className="absolute bottom-0 right-0 w-[38%] max-w-[500px] pointer-events-auto cursor-pointer"
          style={{
            transform: `translate3d(${rightX}px, ${rightY}px, 0)`
          }}
          animate={{
            rotate: [1, -1.2, 1]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="/assets/dandelion_right.png"
            alt="Right Yellow Dandelion Blooms"
            className="w-full h-auto object-contain object-bottom drop-shadow-lg"
          />
        </motion.div>

      </div>
    </div>
  );
}
