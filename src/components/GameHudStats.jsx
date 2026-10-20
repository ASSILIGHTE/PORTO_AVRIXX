import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Award, Flame } from 'lucide-react';

export default function GameHudStats() {
  return (
    <div className="w-full bg-[#07080d]/90 border-b border-sky-500/30 py-2.5 px-4 font-mono text-xs select-none relative z-30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Player Status */}
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-sky-600 text-white font-black text-[10px] tracking-wider uppercase">
            P1 HUD
          </span>
          <span className="text-slate-300 font-bold text-[11px] hidden sm:inline-block">
            AUFARIQ RAJABI FRISTYAN
          </span>
        </div>

        {/* Center: HP, MP, EXP Status Bars */}
        <div className="flex items-center gap-5 sm:gap-8 flex-1 justify-center max-w-2xl">
          
          {/* HP Bar */}
          <div className="flex items-center gap-2 flex-1 max-w-[140px] sm:max-w-[180px]">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
            <div className="w-full space-y-0.5">
              <div className="flex justify-between text-[9px] text-slate-300 font-extrabold">
                <span>HP</span>
                <span className="text-rose-400">100%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#0f111e] border border-rose-500/30 overflow-hidden">
                <motion.div
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-rose-600 to-pink-500 w-full"
                />
              </div>
            </div>
          </div>

          {/* MP Bar (Code Capacity) */}
          <div className="flex items-center gap-2 flex-1 max-w-[140px] sm:max-w-[180px]">
            <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 animate-pulse shrink-0" />
            <div className="w-full space-y-0.5">
              <div className="flex justify-between text-[9px] text-slate-300 font-extrabold">
                <span>MANA</span>
                <span className="text-cyan-400">100%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#0f111e] border border-cyan-500/30 overflow-hidden">
                <motion.div
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 w-full"
                />
              </div>
            </div>
          </div>

          {/* EXP Bar (Level 2026) */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-[180px]">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-bounce shrink-0" />
            <div className="w-full space-y-0.5">
              <div className="flex justify-between text-[9px] text-slate-300 font-extrabold">
                <span>EXP</span>
                <span className="text-amber-400">LVL 2026</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#0f111e] border border-amber-500/30 overflow-hidden">
                <motion.div
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-400 w-full"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right: Audio Visualizer & Rank */}
        <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold">
          <span className="hidden lg:inline-block">SFX READY</span>
          <div className="flex items-end gap-0.5 h-3">
            <motion.span animate={{ height: ['4px', '12px', '6px', '12px'] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-emerald-400 rounded-sm" />
            <motion.span animate={{ height: ['12px', '4px', '10px', '4px'] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-emerald-400 rounded-sm" />
            <motion.span animate={{ height: ['6px', '12px', '4px', '10px'] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-emerald-400 rounded-sm" />
          </div>
        </div>

      </div>
    </div>
  );
}
