import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Brain, Layout, CheckCircle2, Gamepad2, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const iconMap = [
    <Layout className="w-5 h-5 text-sky-400" />,
    <Server className="w-5 h-5 text-emerald-400" />,
    <Database className="w-5 h-5 text-sky-400" />,
    <Brain className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="about" className="py-24 relative bg-[#08090f] border-t border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-2 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f111e] border border-sky-500/30 text-sky-300 text-xs font-mono font-bold cursor-pointer"
          >
            <Gamepad2 className="w-4 h-4 text-sky-400" />
            <span>PROFIL PROFESIONAL</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tentang Saya
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Lulusan Teknik Informatika dengan pengalaman frontend web development, freelance website, UI/UX, dan penelitian machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left Column: Positioning & Bio (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6 p-7 rounded-2xl bg-[#0f111e] border border-sky-500/30 pro-card hud-corner"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>WEB DEVELOPMENT · UI/UX · MACHINE LEARNING</span>
              </span>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Membangun pengalaman digital yang responsif, fungsional, dan berorientasi pada pengguna.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.bio}
              </p>
            </div>

            {/* Core Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {about.roles.map((role, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04, x: 4 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#08090f] border border-sky-500/20 text-xs text-slate-200 font-bold transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{role}</span>
                </motion.div>
              ))}
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-sky-500/20">
              {about.stats.map((stat, idx) => {
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className="p-3.5 rounded-xl bg-[#08090f] border border-sky-500/20 text-center flex flex-col justify-center space-y-1 transition-colors"
                  >
                    <div className="text-lg sm:text-xl font-black text-sky-300 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1 font-semibold">
                      <span>{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

          {/* Right Column: 4 Strategic Capability Cards (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl bg-[#0f111e] border border-sky-500/30 space-y-3 pro-card hud-corner flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-9 h-9 rounded-xl bg-[#08090f] border border-sky-500/30 flex items-center justify-center"
                  >
                    {iconMap[idx % iconMap.length]}
                  </motion.div>
                  <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 text-[10px] font-mono text-sky-400 font-bold">
                  {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
