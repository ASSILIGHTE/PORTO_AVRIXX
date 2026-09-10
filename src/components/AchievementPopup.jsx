import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, ShieldCheck, Sparkles, X } from 'lucide-react';

export default function AchievementPopup() {
  const achievements = [
    { title: 'ACHIEVEMENT UNLOCKED', desc: 'STTP Subdit V Siber Polda Sumsel System Architect (+5000 XP)', icon: <Trophy className="w-5 h-5 text-amber-300 animate-bounce" />, border: 'border-amber-500/50', bg: 'from-amber-500/20 to-sky-600/20' },
    { title: 'RANK UNLOCKED', desc: 'BNSP Certified Web Developer (Reg. TIK 1565 68018 2026)', icon: <Award className="w-5 h-5 text-sky-300 animate-pulse" />, border: 'border-sky-500/50', bg: 'from-sky-600/20 to-cyan-600/20' },
    { title: 'ARTIFACT UNLOCKED', desc: 'HAKI Registered Predict-G ML App (DJKI Kemenkumham RI)', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, border: 'border-emerald-500/50', bg: 'from-emerald-600/20 to-teal-600/20' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
        setVisible(true);
      }, 800);
    }, 6000);

    return () => clearInterval(timer);
  }, [achievements.length]);

  const current = achievements[currentIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto max-w-sm w-full select-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`p-4 rounded-2xl bg-[#0f111e]/95 border-2 ${current.border} shadow-2xl backdrop-blur-xl bg-gradient-to-r ${current.bg} flex items-start gap-3.5 hud-corner relative group overflow-hidden`}
          >
            <div className="p-2.5 rounded-xl bg-[#08090f] border border-sky-500/30 shrink-0">
              {current.icon}
            </div>

            <div className="flex-1 min-w-0 pr-4 space-y-0.5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-black text-amber-300 tracking-wider">
                <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                <span>{current.title}</span>
              </div>
              <p className="text-xs font-mono font-bold text-white leading-tight">
                {current.desc}
              </p>
            </div>

            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
