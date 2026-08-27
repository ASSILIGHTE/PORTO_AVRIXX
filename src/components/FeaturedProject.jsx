import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedProject() {
  const { featuredCaseStudy } = portfolioData;

  return (
    <section id="featured" className="py-24 relative bg-[#0F172A]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Flagship Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-cyan-400">Architecture</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Deep dive into system engineering, cryptographic integrity, and access control.
          </p>
        </div>

        {/* Large Case Study Card Layout */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl overflow-hidden shadow-2xl p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Case Study Details (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  {featuredCaseStudy.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {featuredCaseStudy.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {featuredCaseStudy.overview}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-slate-800/80">
                {featuredCaseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-lg font-mono font-bold text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Key Architectural Features:
                </h4>
                <div className="space-y-2">
                  {featuredCaseStudy.keyFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredCaseStudy.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-xs font-mono text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={featuredCaseStudy.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                </a>

                {featuredCaseStudy.liveDemo && (
                  <a
                    href={featuredCaseStudy.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <span>View Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>

            {/* Right Column: Large Preview Image (6 Cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl group">
                <img
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.title}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                
                {/* Security Tag Badge */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-700 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Cryptographic SHA-256 Audit</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
