import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Gamepad2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060a] border-t border-purple-500/20 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/20">
          
          {/* Gamer Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-8 h-8 rounded-xl bg-[#0f111e] border border-purple-500/40 flex items-center justify-center text-purple-400 font-mono font-bold text-xs cursor-pointer shadow-md hud-corner"
              >
                <Gamepad2 className="w-4 h-4 text-purple-400" />
              </motion.div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base text-white tracking-tight">
                  {personal.brandName}
                </span>
                <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[9px] font-mono font-bold">P1</span>
              </div>
            </div>
            <p className="text-xs text-purple-300 font-mono font-semibold">
              {personal.title} • GAMER HUD ACTIVE
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0f111e] border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0f111e] border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-[#0f111e] border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-600 border border-purple-400 text-white hover:bg-purple-500 transition-colors ml-2 cursor-pointer shadow-md shadow-purple-950/40"
              aria-label="Scroll to top"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>

        </div>

        {/* Dynamic Copyright Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-2 text-center sm:text-left">
          <div>
            © {currentYear} {personal.name} ({personal.brandName}). All rights reserved.
          </div>
          <div className="text-purple-300 text-[11px] font-bold">
            GAMER HUD PORTFOLIO • REACT 19 & TAILWIND CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
