import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Code, Database, Cpu, Sparkles, Terminal, Award } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenContact, onOpenCv, onOpenCert }) {
  const { personal } = portfolioData;
  const nameText = personal.name;

  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && charIndex < nameText.length) {
      timer = setTimeout(() => setCharIndex((prev) => prev + 1), 100);
    } else if (!isDeleting && charIndex === nameText.length) {
      timer = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((prev) => prev - 1), 50);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, nameText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-mono text-slate-300 font-medium">
                  {personal.status}
                </span>
              </div>

              <button
                onClick={() => onOpenCert?.("bnsp-junior-web-developer")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium transition-all backdrop-blur-md cursor-pointer hover:border-amber-400"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>BNSP Certified Junior Web Dev</span>
              </button>
            </motion.div>

            {/* Main Header Title with Running Typewriter & Animated Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center"
            >
              <h1 className="tracking-tight text-white leading-tight space-y-1">
                <span className="block text-slate-300 font-semibold text-xl sm:text-3xl lg:text-4xl">
                  Hi, I'm
                </span>
                <span className="block pt-1 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 via-indigo-400 to-cyan-400 animate-text-shine inline-block">
                    {nameText.substring(0, charIndex)}
                  </span>
                  <span className="inline-block w-1 sm:w-1.5 h-[0.75em] ml-1 bg-cyan-400 animate-pulse align-middle rounded-full shadow-[0_0_12px_#22d3ee]" />
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight flex items-center gap-2 pt-1">
                <span>{personal.title}</span>
              </h2>
            </motion.div>

            {/* Description Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal"
            >
              "{personal.subtitle}"
            </motion.p>

            {/* Action Buttons & Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenCv}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 transition-all backdrop-blur-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 transition-all backdrop-blur-md"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Quick Tech Badge Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>Web Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-indigo-400" />
                <span>Backend Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Data & AI</span>
              </div>
            </motion.div>

          </div>

          {/* Official Formal Profile Photo & Terminal Card (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            
            {/* Formal Profile Photo Card (Non-zoomable, Perfectly sized) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group pointer-events-none select-none"
            >
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-40 blur-md group-hover:opacity-70 transition duration-500"></div>

              {/* Photo Frame Container */}
              <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-500/40 shadow-2xl">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top pointer-events-none select-none"
                  draggable="false"
                  onClick={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
                    Official Profile
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Code Terminal Box Visual */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl p-5 overflow-hidden">
                
                {/* Window Controls Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/90 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>system_profile.config</span>
                  </div>
                </div>

                {/* Styled Code Snippet Display */}
                <div className="space-y-2 font-mono text-xs leading-relaxed">
                  <div className="text-slate-500">// Personal Competency Matrix</div>
                  <div className="text-cyan-300">
                    <span className="text-indigo-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-4 text-slate-300">
                    name: <span className="text-emerald-400">"{personal.name}"</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    education: <span className="text-emerald-400">"Informatics Engineering"</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    coreTech: [<span className="text-amber-300">"Laravel"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Python"</span>],
                  </div>
                  <div className="pl-4 text-slate-300">
                    focus: [<span className="text-cyan-300">"Backend"</span>, <span className="text-cyan-300">"Relational DB"</span>, <span className="text-cyan-300">"ML Models"</span>],
                  </div>
                  <div className="pl-4 text-slate-300">
                    status: <span className="text-cyan-400">"Ready to Deploy Solutions"</span>
                  </div>
                  <div className="text-cyan-300">&#125;;</div>
                </div>

                {/* Mini Stat Badges Floating */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Full Stack</div>
                      <div className="text-[10px] text-slate-400">Clean Architecture</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Data Systems</div>
                      <div className="text-[10px] text-slate-400">Relational & ML</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
