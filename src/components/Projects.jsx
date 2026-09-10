import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, ArrowUpRight, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Quests' },
    { id: 'polri', label: 'Polda Sumsel Quest' },
    { id: 'haki', label: 'Registered HAKI Quest' },
    { id: 'security', label: 'Backend & Security Quests' }
  ];

  const getFilteredProjects = () => {
    if (filterCategory === 'all') return projects;
    if (filterCategory === 'polri') return projects.filter(p => p.category.toLowerCase().includes('kepolisian') || p.id === 'sttp-system');
    if (filterCategory === 'haki') return projects.filter(p => p.category.toLowerCase().includes('hak cipta') || p.pdkiUrl);
    if (filterCategory === 'security') return projects.filter(p => p.category.toLowerCase().includes('backend') || p.category.toLowerCase().includes('cybersecurity') || p.category.toLowerCase().includes('machine learning'));
    return projects;
  };

  return (
    <section id="projects" className="py-24 relative bg-[#08090f] border-t border-sky-500/20 bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-2 mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f111e] border border-sky-500/30 text-sky-300 text-xs font-mono font-bold cursor-pointer"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>COMPLETED QUEST ARCHIVES</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Featured Quests & Systems Built
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Completed web engineering missions, machine learning applications, and specialized police systems.
          </p>
        </motion.div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = filterCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white border border-sky-400 shadow-md shadow-sky-950/50'
                    : 'bg-[#0f111e] text-slate-400 hover:text-white border border-sky-500/30'
                }`}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {getFilteredProjects().map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group rounded-2xl bg-[#0f111e] border border-sky-500/30 overflow-hidden flex flex-col justify-between pro-card hud-corner cursor-pointer"
              >
                <div>
                  {/* Banner Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#08090f] border-b border-sky-500/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-transparent to-transparent opacity-85" />
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full bg-[#08090f]/90 border border-sky-500/30 text-[11px] font-mono text-sky-300 font-bold shadow-sm inline-block"
                      >
                        {project.category}
                      </motion.span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-1 rounded-full bg-sky-600/30 border border-sky-400/40 text-[10px] font-mono text-sky-200 font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
                          FLAGSHIP QUEST
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={{ scale: 1.08, y: -1 }}
                          className="px-2.5 py-1 rounded-lg bg-[#08090f] border border-sky-500/20 text-[11px] font-mono font-medium text-slate-200 cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 mt-2 flex flex-col sm:flex-row items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2.5 rounded-xl bg-[#08090f] hover:bg-[#151829] border border-sky-500/30 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4 text-sky-400" />
                    <span>Inspect Code</span>
                  </motion.a>

                  {project.pdkiUrl ? (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.pdkiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-black flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-md shadow-sky-950/40"
                    >
                      <ShieldCheck className="w-4 h-4 text-amber-300" />
                      <span>HAKI PDKI Verification</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  ) : project.liveDemo ? (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-md shadow-emerald-950/40"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  ) : (
                    <div className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-[#08090f] border border-sky-500/20 text-slate-500 text-xs font-mono font-medium flex items-center justify-center gap-1.5 shrink-0">
                      <span>Internal Quest</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
