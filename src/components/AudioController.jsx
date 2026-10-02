import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const noiseNodeRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleSound = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          if (audioCtxRef.current) audioCtxRef.current.suspend();
          setIsPlaying(false);
        }, 500);
      }
    } else {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        } else if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        const ctx = audioCtxRef.current;

        // Generate smooth pink noise for gentle wind breeze
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          data[i] *= 0.02; // Very quiet gentle breeze volume
          b6 = white * 0.115926;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        // Lowpass filter for soft wind sound
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, ctx.currentTime);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        noise.start();

        noiseNodeRef.current = noise;
        gainNodeRef.current = gain;
        setIsPlaying(true);
      } catch (e) {
        console.error('Audio initialization failed:', e);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all duration-300 shadow-sm ${
        isPlaying
          ? 'bg-amber-500 text-white border-amber-400 shadow-amber-500/20'
          : 'bg-white/80 backdrop-blur-md text-slate-700 border-white/60 hover:bg-white'
      }`}
      title={isPlaying ? 'Mute Nature Wind Breeze' : 'Play Nature Wind Breeze'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
          <span>Breeze Sound ON</span>
          <Sparkles className="w-3 h-3 text-amber-200" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          <span>Sound OFF</span>
        </>
      )}
    </button>
  );
}
