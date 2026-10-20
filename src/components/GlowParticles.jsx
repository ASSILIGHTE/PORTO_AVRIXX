import React from 'react';
import { motion } from 'framer-motion';

export default function GlowParticles() {
  const particles = [
    { id: 1, top: '10%', left: '15%', size: 'w-72 h-72', color: 'bg-sky-500/20', duration: 12 },
    { id: 2, top: '40%', left: '75%', size: 'w-96 h-96', color: 'bg-cyan-500/20', duration: 16 },
    { id: 3, top: '70%', left: '20%', size: 'w-80 h-80', color: 'bg-emerald-500/15', duration: 14 },
    { id: 4, top: '85%', left: '80%', size: 'w-64 h-64', color: 'bg-amber-500/10', duration: 10 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.15, 0.9, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full blur-3xl ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left }}
        />
      ))}
    </div>
  );
}
