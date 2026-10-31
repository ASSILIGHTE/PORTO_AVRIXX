import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Images, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onOpenHaki }) {
  const { projects } = portfolioData;
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'polri', label: 'Polda Sumsel' },
    { id: 'haki', label: 'Hak Cipta' },
    { id: 'research', label: 'Machine Learning Research' }
  ];

  const getFilteredProjects = () => {
    if (filterCategory === 'all') return projects;
    if (filterCategory === 'polri') return projects.filter(p => p.category.toLowerCase().includes('kepolisian') || p.id === 'sttp-system');
    if (filterCategory === 'haki') return projects.filter(p => p.category.toLowerCase().includes('hak cipta') || p.pdkiUrl);
    if (filterCategory === 'research') return projects.filter(p => p.category.toLowerCase().includes('machine learning'));
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
            <span>SELECTED WORK</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Proyek Pilihan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Proyek frontend web, aplikasi prediksi, dan penelitian machine learning yang tercantum pada CV.
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
                          FEATURED
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-200 leading-7 font-normal">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={{ scale: 1.08, y: -1 }}
                          className="px-2.5 py-1 rounded-lg bg-[#06101a] border border-cyan-400/20 text-[11px] font-mono font-semibold text-slate-100 cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {project.pdkiUrl && (
                  <div className="grid gap-3 px-6 pb-6 sm:grid-cols-2">
                    <motion.button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onOpenHaki?.();
                      }}
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex min-h-11 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-3 text-xs font-bold text-sky-200 transition-colors hover:border-sky-300/60 hover:bg-sky-400/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                      aria-label="Tampilkan dua dokumen Hak Cipta Predict-G"
                    >
                      <Images className="h-4 w-4 text-sky-300" aria-hidden="true" />
                      <span>Lihat Dokumen Hak Cipta</span>
                    </motion.button>

                    <motion.a
                      href={project.pdkiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group/link flex min-h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-xs font-bold text-emerald-200 transition-colors hover:border-emerald-300/60 hover:bg-emerald-400/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                      aria-label="Buka detail Hak Cipta Predict-G di situs PDKI pada tab baru"
                    >
                      <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                      <span>Lihat Hak Cipta di PDKI</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
                    </motion.a>
                  </div>
                )}

                {project.liveDemo && (
                  <div className="px-6 pb-6">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group/link flex min-h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-3 text-xs font-bold text-fuchsia-200 transition-colors hover:border-fuchsia-300/60 hover:bg-fuchsia-400/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
                      aria-label={`Kunjungi website ${project.title} di tab baru`}
                    >
                      <ExternalLink className="h-4 w-4 text-fuchsia-300" aria-hidden="true" />
                      <span>Kunjungi Website</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
                    </motion.a>
                  </div>
                )}

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
