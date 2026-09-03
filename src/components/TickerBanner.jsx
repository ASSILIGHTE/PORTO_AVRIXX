import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, ShieldCheck, Code2, Terminal, Gamepad2 } from 'lucide-react';

export default function TickerBanner() {
  const tickerItems = [
    { text: 'PLAYER 1: AUFARIQ RAJABI FRISTYAN', icon: <Gamepad2 className="w-4 h-4 text-purple-400" /> },
    { text: 'BNSP CERTIFIED WEB DEVELOPER', icon: <Award className="w-4 h-4 text-amber-400" /> },
    { text: 'HAKI REGISTERED (PREDICT-G)', icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
    { text: 'SUBDIT V SIBER POLDA SUMSEL (STTP SYSTEM)', icon: <Terminal className="w-4 h-4 text-sky-400" /> },
    { text: 'FULL STACK & BACKEND ARCHITECT', icon: <Code2 className="w-4 h-4 text-purple-400" /> },
    { text: 'PHP NATIVE & LARAVEL SPECIALIST', icon: <Zap className="w-4 h-4 text-amber-400 fill-amber-400" /> },
  ];

  // Repeat items for seamless continuous looping marquee
  const marqueeList = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-[#05060a] border-y border-purple-500/30 py-3 overflow-hidden select-none relative z-20">
      <div className="flex items-center">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex items-center gap-8 whitespace-nowrap shrink-0"
        >
          {marqueeList.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 font-mono text-xs font-bold text-slate-200">
              <span className="p-1 rounded bg-purple-500/10 border border-purple-500/30">
                {item.icon}
              </span>
              <span className="tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-emerald-300">
                {item.text}
              </span>
              <span className="text-purple-500/40 text-sm">◆</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
