import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay = 0) => ({
    pathLength: 1,
    opacity: [0, 1, 0.55],
    transition: { pathLength: { duration: 1.25, delay, ease: 'easeInOut' }, opacity: { duration: 1.25, delay } }
  })
};

export default function WelcomeLoader({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const stopSound = playIntroSound();
    const closingTimer = window.setTimeout(() => setClosing(true), 2450);
    const finishTimer = window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = 'unset';
        onFinish?.();
      }, 3050);
    return () => {
      window.clearTimeout(closingTimer);
      window.clearTimeout(finishTimer);
      stopSound();
      document.body.style.overflow = 'unset';
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: .22, ease: 'easeOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#06101a] px-6"
        >
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: .45 }} transition={{ duration: .8 }}
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.055) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
          />

          <motion.div
            initial={{ scale: .65, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.04] blur-3xl"
          />

          <motion.svg
            animate={closing ? { opacity: 0, scale: 1.08 } : { opacity: 1, scale: 1 }}
            transition={{ duration: .45, ease: 'easeInOut' }}
            className="absolute h-[min(82vw,680px)] w-[min(82vw,680px)]"
            viewBox="0 0 600 600" fill="none" aria-hidden="true"
          >
            <motion.circle cx="300" cy="300" r="220" stroke="rgba(34,211,238,.18)" strokeWidth="1" strokeDasharray="5 12" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '300px 300px' }} />
            <motion.circle cx="300" cy="300" r="172" stroke="rgba(59,130,246,.2)" strokeWidth="1" strokeDasharray="2 9" initial={{ rotate: 360 }} animate={{ rotate: 0 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '300px 300px' }} />
            <motion.path d="M80 300H218M382 300H520" stroke="url(#introLine)" strokeWidth="1.5" variants={lineVariants} initial="hidden" animate="visible" custom={.15} />
            <motion.path d="M300 80V218M300 382V520" stroke="url(#introLine)" strokeWidth="1.5" variants={lineVariants} initial="hidden" animate="visible" custom={.3} />
            <motion.path d="M146 146L236 236M364 364L454 454" stroke="rgba(34,211,238,.25)" variants={lineVariants} initial="hidden" animate="visible" custom={.45} />
            <motion.path d="M454 146L364 236M236 364L146 454" stroke="rgba(59,130,246,.25)" variants={lineVariants} initial="hidden" animate="visible" custom={.55} />
            {[0, 90, 180, 270].map((angle) => (
              <motion.circle key={angle} cx="300" cy="80" r="4" fill="#22d3ee" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, .35], scale: [0, 1.4, 1] }} transition={{ delay: .65 + angle / 700, duration: .75 }} style={{ transformOrigin: '300px 300px', transform: `rotate(${angle}deg)` }} />
            ))}
            <defs><linearGradient id="introLine"><stop stopColor="#22d3ee" stopOpacity="0"/><stop offset=".5" stopColor="#22d3ee"/><stop offset="1" stopColor="#3b82f6" stopOpacity="0"/></linearGradient></defs>
          </motion.svg>

          <motion.div
            animate={closing ? { opacity: 0, scale: .9, filter: 'blur(12px)' } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: .42, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -35, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: .45, duration: .8, type: 'spring', stiffness: 120, damping: 14 }}
              className="mx-auto grid h-24 w-24 place-items-center rounded-[1.75rem] border border-cyan-300/40 bg-[#0a1a29]/90 text-2xl font-black tracking-tight text-white shadow-[0_0_70px_rgba(34,211,238,.25)] backdrop-blur-xl"
            >
              <motion.span animate={{ textShadow: ['0 0 0px #22d3ee', '0 0 22px #22d3ee', '0 0 0px #22d3ee'] }} transition={{ duration: 2, repeat: Infinity }}>AR</motion.span>
            </motion.div>

            <div className="mt-8 overflow-hidden">
              <motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: .9, duration: .7, ease: [0.16, 1, 0.3, 1] }} className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                {portfolioData.personal.name}
              </motion.h1>
            </div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.25, duration: .65 }} className="mx-auto mt-4 h-px w-36 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <motion.p initial={{ opacity: 0, letterSpacing: '.05em' }} animate={{ opacity: 1, letterSpacing: '.32em' }} transition={{ delay: 1.45, duration: .8 }} className="mt-4 text-[10px] font-bold uppercase text-cyan-200 sm:text-xs">
              Web Developer Portfolio
            </motion.p>
          </motion.div>

          <motion.div initial={{ y: '-100%' }} animate={{ y: '100vh' }} transition={{ delay: .2, duration: 2.4, ease: 'linear' }} className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-cyan-300/[0.06] to-transparent" />
          <motion.div initial={{ scaleX: 0 }} animate={closing ? { scaleX: 0 } : { scaleX: 1 }} transition={{ delay: closing ? 0 : 2.1, duration: .45, ease: 'easeInOut' }} className="absolute bottom-10 h-px w-48 origin-center bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function playIntroSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return () => {};

  const context = new AudioContextClass();
  const master = context.createGain();
  const compressor = context.createDynamicsCompressor();
  master.gain.setValueAtTime(0.0001, context.currentTime);
  master.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.18);
  master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 2.85);
  master.connect(compressor);
  compressor.connect(context.destination);

  const createTone = (frequency, start, duration, type = 'sine', volume = 0.1, endFrequency = frequency) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, context.currentTime + start);
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency, context.currentTime + start + duration);
    gain.gain.setValueAtTime(0.0001, context.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(volume, context.currentTime + start + Math.min(0.08, duration / 3));
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + start + duration);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(context.currentTime + start);
    oscillator.stop(context.currentTime + start + duration + 0.05);
  };

  createTone(72, 0, 2.4, 'sine', 0.16, 118);
  createTone(180, 0.18, 1.35, 'triangle', 0.055, 460);
  createTone(523.25, 0.58, 0.7, 'sine', 0.09, 784.88);
  createTone(659.25, 0.82, 0.85, 'sine', 0.075, 987.77);
  createTone(1046.5, 1.18, 1.05, 'sine', 0.055, 1318.5);

  const noiseLength = Math.floor(context.sampleRate * 1.45);
  const noiseBuffer = context.createBuffer(1, noiseLength, context.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let index = 0; index < noiseLength; index += 1) {
    const envelope = Math.sin((index / noiseLength) * Math.PI);
    noiseData[index] = (Math.random() * 2 - 1) * envelope * 0.16;
  }
  const noise = context.createBufferSource();
  const noiseFilter = context.createBiquadFilter();
  const noiseGain = context.createGain();
  noise.buffer = noiseBuffer;
  noiseFilter.type = 'bandpass';
  noiseFilter.frequency.setValueAtTime(380, context.currentTime);
  noiseFilter.frequency.exponentialRampToValueAtTime(4800, context.currentTime + 1.4);
  noiseFilter.Q.value = 0.7;
  noiseGain.gain.setValueAtTime(0.0001, context.currentTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.06, context.currentTime + 0.75);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.45);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(master);
  noise.start();

  const resumeAudio = () => {
    if (context.state === 'suspended') context.resume();
    window.removeEventListener('pointerdown', resumeAudio);
    window.removeEventListener('keydown', resumeAudio);
  };
  context.resume().catch(() => {});
  window.addEventListener('pointerdown', resumeAudio, { once: true });
  window.addEventListener('keydown', resumeAudio, { once: true });

  return () => {
    window.removeEventListener('pointerdown', resumeAudio);
    window.removeEventListener('keydown', resumeAudio);
    if (context.state !== 'closed') context.close().catch(() => {});
  };
}
