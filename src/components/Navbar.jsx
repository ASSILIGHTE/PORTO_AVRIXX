import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText, Gamepad2, Zap, Heart, Flame } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenContact, onOpenCv }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'featured', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skill Tree', href: '#skills', id: 'skills' },
    { name: 'Quests', href: '#projects', id: 'projects' },
    { name: 'Flagship', href: '#featured', id: 'featured' },
    { name: 'Campaign', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      
      {/* 1. Top Integrated Gamer HUD Status Bar */}
      <div className="w-full bg-[#07080d]/95 backdrop-blur-xl border-b border-sky-500/20 py-2 px-4 font-mono text-xs select-none relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Player Status */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-sky-600 text-white font-black text-[9px] tracking-wider uppercase">
              P1 HUD
            </span>
            <span className="text-slate-300 font-bold text-[10px] hidden sm:inline-block">
              AUFARIQ RAJABI FRISTYAN
            </span>
          </div>

          {/* Center: HP, MP, EXP Status Bars */}
          <div className="flex items-center gap-4 sm:gap-6 flex-1 justify-center max-w-xl">
            
            {/* HP Bar */}
            <div className="flex items-center gap-1.5 flex-1 max-w-[130px] sm:max-w-[160px]">
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
              <div className="w-full space-y-0.5">
                <div className="flex justify-between text-[8px] text-slate-300 font-extrabold">
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

            {/* MP Bar */}
            <div className="flex items-center gap-1.5 flex-1 max-w-[130px] sm:max-w-[160px]">
              <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400 animate-pulse shrink-0" />
              <div className="w-full space-y-0.5">
                <div className="flex justify-between text-[8px] text-slate-300 font-extrabold">
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

            {/* EXP Bar */}
            <div className="hidden md:flex items-center gap-1.5 flex-1 max-w-[160px]">
              <Flame className="w-3 h-3 text-amber-400 fill-amber-400 animate-bounce shrink-0" />
              <div className="w-full space-y-0.5">
                <div className="flex justify-between text-[8px] text-slate-300 font-extrabold">
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

          {/* Right: Audio Visualizer */}
          <div className="flex items-center gap-1.5 text-emerald-400 text-[9px] font-bold">
            <span className="hidden lg:inline-block">SFX READY</span>
            <div className="flex items-end gap-0.5 h-3">
              <motion.span animate={{ height: ['3px', '10px', '5px', '10px'] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-emerald-400 rounded-sm" />
              <motion.span animate={{ height: ['10px', '3px', '8px', '3px'] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-0.5 bg-emerald-400 rounded-sm" />
              <motion.span animate={{ height: ['5px', '10px', '3px', '8px'] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-0.5 bg-emerald-400 rounded-sm" />
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className={`transition-all duration-200 ${
        isScrolled
          ? 'bg-[#08090f]/90 backdrop-blur-xl border-b border-sky-500/20 py-2.5 shadow-xl shadow-sky-950/30'
          : 'bg-[#08090f]/60 backdrop-blur-md py-3 border-b border-sky-500/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Gamer Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-xl bg-[#0f111e] border border-sky-500/40 flex items-center justify-center text-sky-400 font-mono font-black text-xs group-hover:border-emerald-400 group-hover:text-emerald-300 transition-colors hud-corner shadow-md">
                <Gamepad2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-sky-300 transition-colors">
                    {portfolioData.personal.brandName}
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 text-[9px] font-mono font-bold">P1</span>
                </div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 -mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Dev HUD Active
                </span>
              </div>
            </a>

            {/* Desktop Nav Dock */}
            <nav className="hidden md:flex items-center gap-1 bg-[#0f111e]/90 px-3 py-1.5 rounded-full border border-sky-500/30 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all ${
                      isActive
                        ? 'text-white bg-sky-600 border border-sky-400 shadow-md shadow-sky-950/50'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={onOpenCv}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-300 border border-sky-500/30 hover:border-sky-400 hover:text-white transition-all bg-[#0f111e] cursor-pointer active:scale-95 flex items-center gap-1.5 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Resume (CV)</span>
              </button>
              <button
                onClick={onOpenContact}
                className="px-4 py-1.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 hover:from-sky-500 hover:to-emerald-400 transition-all flex items-center gap-1 cursor-pointer active:scale-95 shadow-lg shadow-sky-950/40 border border-sky-400/40"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Start Quest</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#0f111e] border border-sky-500/30 text-slate-300 hover:text-white cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-[#08090f] border-b border-sky-500/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-sky-600 text-white border border-sky-400'
                          : 'text-slate-300 hover:bg-[#0f111e] hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-sky-500/20 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCv();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-200 border border-sky-500/30 bg-[#0f111e] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  View Resume (CV)
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-sky-600 to-emerald-500 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                  Start Quest (Contact)
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </header>
  );
}
