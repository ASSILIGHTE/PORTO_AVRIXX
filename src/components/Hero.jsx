import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Award, ShieldCheck, CheckCircle2, ArrowUpRight, Building, Gamepad2, Zap, Sword, Shield, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenContact, onOpenCv, onOpenCert }) {
  const { personal } = portfolioData;

  // Typewriter running text titles
  const titles = [
    "Full Stack Web Developer",
    "Backend Systems Architect",
    "BNSP Certified Web Developer",
    "Subdit V Siber Polda Sumsel STTP Dev",
    "Predict-G ML Creator (Registered HAKI)"
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === targetTitle) {
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      typingSpeed = 300;
      const timeout = setTimeout(() => {}, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? targetTitle.substring(0, currentText.length - 1)
          : targetTitle.substring(0, currentText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-36 pb-16 bg-pro-grid overflow-hidden">
      
      {/* Structural Hairline Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-sky-500/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Player Status & Rank Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <motion.div 
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f111e] border border-sky-500/40 shadow-md shadow-sky-950/40 cursor-pointer"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-wider">
                  ONLINE / QUEST READY
                </span>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={() => onOpenCert?.("bnsp-junior-web-developer")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-extrabold transition-colors cursor-pointer shadow-md"
              >
                <Award className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                <span>BNSP CERTIFIED WEB DEV</span>
              </motion.button>
            </motion.div>

            {/* Main Header Title with Typewriter Running Text */}
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.div 
                whileHover={{ scale: 1.04 }}
                className="inline-flex items-center gap-2 text-sky-400 font-mono text-xs font-bold uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/30 cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4 text-sky-400 animate-spin" />
                <span>PLAYER 1 CHARACTER SELECT</span>
              </motion.div>

              <h1 className="tracking-tight leading-tight space-y-1">
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight pt-1">
                  {personal.name}
                </span>
                
                {/* Typewriter Running Text Element */}
                <span className="block text-lg sm:text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 min-h-[36px] flex items-center">
                  <span>{currentText}</span>
                  <span className="w-2 h-6 bg-sky-400 inline-block ml-1 animate-pulse" />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {personal.subtitle}
            </motion.p>

            {/* Action CTAs with Spring Physics */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 hover:from-sky-500 hover:to-emerald-400 text-white font-black text-sm shadow-xl shadow-sky-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer border border-sky-400/40 group"
              >
                <Zap className="w-4 h-4 text-amber-300 fill-amber-300 group-hover:rotate-12 transition-transform" />
                <span>EXPLORE QUEST ARCHIVES</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={onOpenCv}
                className="px-5 py-3.5 rounded-xl bg-[#0f111e] hover:bg-[#151829] border border-sky-500/40 hover:border-sky-300 text-slate-200 font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>EQUIP RESUME (CV)</span>
              </motion.button>

              <div className="flex items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: [0, -12, 12, -6, 0], y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0f111e] hover:bg-[#151829] border border-sky-500/40 text-slate-300 hover:text-white transition-colors shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2, rotate: [0, 12, -12, 6, 0], y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0f111e] hover:bg-[#151829] border border-sky-500/40 text-slate-300 hover:text-white transition-colors shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Gamer Core Stack Pills */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-sky-500/20 w-full flex flex-wrap items-center gap-5 text-xs text-slate-300 font-mono"
            >
              <motion.div 
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-2 cursor-pointer bg-[#0f111e] px-3 py-1.5 rounded-lg border border-sky-500/30"
              >
                <Sword className="w-4 h-4 text-sky-400" />
                <span>PHP Native & Laravel</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-2 cursor-pointer bg-[#0f111e] px-3 py-1.5 rounded-lg border border-sky-500/30"
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>MySQL Relational DB</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-2 cursor-pointer bg-[#0f111e] px-3 py-1.5 rounded-lg border border-sky-500/30"
              >
                <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Python & Predict-G ML</span>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column: Player Character Stat Card (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <motion.div
              variants={itemVariants}
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  "0 10px 30px -10px rgba(56, 189, 248, 0.2)",
                  "0 20px 50px -10px rgba(56, 189, 248, 0.4)",
                  "0 10px 30px -10px rgba(56, 189, 248, 0.2)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="w-full rounded-2xl bg-[#0f111e] border-2 border-sky-500/40 p-6 space-y-6 shadow-2xl pro-card hud-corner"
            >
              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-sky-500/20">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="relative w-16 h-20 rounded-xl overflow-hidden bg-[#08090f] border-2 border-sky-500/60 shrink-0 shadow-lg cursor-pointer"
                >
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-sky-600 text-white text-[8px] font-mono font-black text-center uppercase tracking-tighter">
                    LVL 2026
                  </span>
                </motion.div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-base text-white truncate">{personal.name}</span>
                  </div>
                  <span className="text-xs font-mono text-sky-300 truncate">Computer Science Student</span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold pt-0.5">Universitas Indo Global Mandiri</span>
                </div>
              </div>

              {/* Player Stats & Verified Tracks */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-300 font-extrabold flex items-center justify-between">
                  <span>CHARACTER STATS & TRACKS</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </span>

                {/* Polda Sumsel Experience Item */}
                <motion.div 
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-xl bg-[#08090f] border border-sky-500/30 flex items-start gap-3 transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Subdit V Siber Polda Sumsel</div>
                    <div className="text-[11px] text-slate-400">STTP Laporan Management System Quest</div>
                  </div>
                </motion.div>

                {/* BNSP Certificate Item */}
                <motion.button
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => onOpenCert?.("bnsp-junior-web-developer")}
                  className="w-full p-3 rounded-xl bg-[#08090f] border border-sky-500/30 hover:border-amber-500/50 flex items-start gap-3 text-left transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate">BNSP Junior Web Developer</span>
                      <span className="text-[10px] font-mono text-amber-400 font-black">VERIFIED</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Reg. TIK 1565 68018 2026</div>
                  </div>
                </motion.button>

                {/* HAKI Registered Item */}
                <motion.a
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#08090f] border border-sky-500/30 hover:border-emerald-500/50 flex items-start gap-3 text-left transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate">Registered Hak Cipta (HAKI)</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-slate-400">Aplikasi Predict-G — DJKI Kemenkumham RI</div>
                  </div>
                </motion.a>

              </div>

            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
