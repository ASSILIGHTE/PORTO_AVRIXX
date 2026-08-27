import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, ArrowUpRight, Sparkles } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-[#0B0F17] border-t border-slate-800/80">
      
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Selected software development, backend system architecture, and machine learning applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 flex items-center gap-1 backdrop-blur-md">
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                {project.pdkiUrl ? (
                  <a
                    href={project.pdkiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-purple-500/20 shrink-0"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Verifikasi Hak Cipta PDKI</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 shrink-0"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-600 text-xs font-medium flex items-center justify-center gap-1.5 cursor-not-allowed opacity-60 shrink-0"
                  >
                    <span>Local / Internal</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
