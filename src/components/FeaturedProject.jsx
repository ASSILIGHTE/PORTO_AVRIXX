import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Award, ArrowUpRight, Lock, Trophy } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedProject() {
  const { featuredCaseStudy } = portfolioData;

  return (
    <section id="featured" className="py-24 relative bg-[#08090f] border-t border-purple-500/20 bg-pro-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-2 mb-14"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f111e] border border-purple-500/30 text-purple-300 text-xs font-mono font-bold cursor-pointer"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>FLAGSHIP BOSS QUEST</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Flagship Quest Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Sistem Informasi Manajemen Laporan STTP — Subdit V Siber Ditreskrimsus Polda Sumsel.
          </p>
        </motion.div>

        {/* Showcase Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="rounded-2xl bg-[#0f111e] border border-purple-500/30 p-6 lg:p-10 shadow-2xl pro-card hud-corner"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Case Study Details (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08090f] border border-purple-500/30 text-emerald-400 text-xs font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{featuredCaseStudy.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {featuredCaseStudy.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {featuredCaseStudy.overview}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-purple-500/20">
                {featuredCaseStudy.metrics.map((m, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.05, y: -2 }} className="space-y-1 cursor-pointer">
                    <div className="text-base sm:text-lg font-mono font-black text-purple-300">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-purple-300 tracking-wider font-bold">
                  QUEST BUFFS & ARCHITECTURAL HIGHLIGHTS:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featuredCaseStudy.keyFeatures.map((feature, fIdx) => (
                    <motion.div 
                      key={fIdx} 
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-2 text-xs text-slate-200 cursor-pointer font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {featuredCaseStudy.technologies.map((t, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1 rounded-lg bg-[#08090f] border border-purple-500/20 text-xs font-mono text-slate-300 font-medium cursor-pointer"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={featuredCaseStudy.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-black flex items-center gap-2 shadow-lg shadow-purple-950/50 transition-colors cursor-pointer border border-purple-400/40"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Quest Code on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>

            </div>

            {/* Right Column: Screenshot Visual (6 Cols) */}
            <div className="lg:col-span-6">
              <motion.div 
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                className="relative rounded-xl overflow-hidden border border-purple-500/30 shadow-xl group bg-[#08090f] cursor-pointer hud-corner"
              >
                <img
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.title}
                  className="w-full h-auto object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090f]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Security Badge */}
                <div className="absolute bottom-4 right-4 bg-[#08090f]/90 border border-purple-500/30 px-3.5 py-1.5 rounded-lg text-xs font-mono text-purple-300 font-bold flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Role-Based Access Control (RBAC)</span>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
