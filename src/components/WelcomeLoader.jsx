import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, CheckCircle2, Terminal, RefreshCw, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function WelcomeLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll during welcome screen
    document.body.style.overflow = 'hidden';

    // 45ms * 100 ticks = 4500ms (4.5s) + 500ms finish delay = 5.0s total
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'unset';
            if (onFinish) onFinish();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, [onFinish]);

  // Gamer HUD Terminal Output
  const getStatusLog = () => {
    if (progress < 25) {
      return "> PLAYER 1 DETECTED: Initializing AUFARIQ system profile...";
    } else if (progress < 55) {
      return "> LOADING QUEST TRACKS: Polda Sumsel STTP & BNSP Certified Dev...";
    } else if (progress < 85) {
      return "> POWERING UP ENGINE: Laravel Backend, MySQL & Predict-G ML...";
    } else {
      return "> HTTP 200 OK — GAME ENGINE LOADED! WELCOME TO PLAYER 1 PORTFOLIO!";
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="welcome-loader-game"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: '-100%',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[200] bg-[#08090f] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Gamer Tech Grid Background */}
          <div className="absolute inset-0 bg-pro-grid pointer-events-none opacity-60" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-lg w-full">
            
            {/* Gamepad Icon Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0f111e] border-2 border-purple-500/50 flex items-center justify-center text-purple-400 shadow-xl shadow-purple-950/60 hud-corner">
                <Gamepad2 className="w-8 h-8 animate-bounce text-purple-400" />
              </div>
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-mono font-black uppercase tracking-widest shadow-md whitespace-nowrap">
                PLAYER 1
              </span>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1.5 pt-2"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {portfolioData.personal.name}
              </h2>
              <p className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold flex items-center justify-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>LEVEL: SR. STUDENT DEVELOPER</span>
              </p>
            </motion.div>

            {/* Gamer Terminal Console Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full p-4.5 rounded-2xl bg-[#0f111e]/90 border border-purple-500/30 space-y-3 text-left shadow-2xl pro-card hud-corner"
            >
              <div className="flex items-center justify-between pb-2 border-b border-purple-500/20 text-[11px] font-mono text-purple-300">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GAME_BOOT.LOG</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <RefreshCw className="w-3 h-3 animate-spin text-emerald-400" />
                  <span>{progress < 85 ? 'BOOTING...' : 'GAME READY!'}</span>
                </div>
              </div>

              {/* Console log text */}
              <div className="font-mono text-xs text-slate-200 min-h-[42px] flex items-center">
                <span>{getStatusLog()}</span>
              </div>

              {/* XP / Loading Progress Bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="font-semibold text-purple-300">SYSTEM POWER LEVEL</span>
                  <span className="text-emerald-400 font-black">{progress}% XP</span>
                </div>

                <div className="w-full h-2.5 rounded-full bg-[#08090f] border border-purple-500/30 overflow-hidden p-0.5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-emerald-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

            </motion.div>

          </div>

          {/* Bottom Gamer Footer Badges */}
          <div className="absolute bottom-8 text-[11px] font-mono text-purple-300 flex items-center gap-3 font-semibold">
            <span>BNSP CERTIFIED DEV</span>
            <span>•</span>
            <span>HAKI REGISTERED</span>
            <span>•</span>
            <span>QUEST READY 2026</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
