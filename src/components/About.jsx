import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Brain, Layout, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const iconMap = [
    <Layout className="w-6 h-6 text-cyan-400" />,
    <Server className="w-6 h-6 text-indigo-400" />,
    <Database className="w-6 h-6 text-sky-400" />,
    <Brain className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Passionate about building efficient web infrastructure, structured databases, and intelligent applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & Bio (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white leading-snug">
                Building reliable software solutions driven by computational logic & clean design.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {about.bio}
              </p>
            </div>

            {/* Core Role Pill Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {about.roles.map((role, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200 font-medium hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{role}</span>
                </div>
              ))}
            </div>

            {/* Stat Counter Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              {about.stats.map((stat, idx) => {
                const isPatent = stat.label.toLowerCase().includes('paten') || stat.value.toLowerCase().includes('predict');
                const CardWrapper = isPatent ? 'a' : 'div';
                const extraProps = isPatent ? {
                  href: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: "Verifikasi Hak Cipta di PDKI DGIP"
                } : {};

                return (
                  <CardWrapper
                    key={idx}
                    {...extraProps}
                    className={`p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 text-center flex flex-col justify-center space-y-1 transition-all ${
                      isPatent ? 'hover:border-purple-500/50 hover:bg-slate-900/80 group/stat cursor-pointer' : 'hover:border-slate-700'
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono group-hover/stat:from-purple-400 group-hover/stat:to-cyan-400">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
                      <span>{stat.label}</span>
                      {isPatent && <span className="text-[10px] text-purple-400 font-mono">↗</span>}
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>

          {/* Right Column: 4 Strategic Capability Cards (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-md shadow-lg space-y-3 group"
              >
                <div className="p-3 rounded-xl bg-slate-800/70 w-fit group-hover:bg-cyan-500/10 transition-colors">
                  {iconMap[idx % iconMap.length]}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
