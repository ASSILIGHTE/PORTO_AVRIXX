import React from 'react';
import { Code2, ArrowUpRight, GitBranch, Star } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function GitHubCTA() {
  const { personal } = portfolioData;

  return (
    <section className="py-16 relative bg-[#0B0F17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden group">
          
          {/* Decorative background ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <Github className="w-3.5 h-3.5" />
                <span>Open Source Repositories</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Explore <span className="text-cyan-400">My Code</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore selected projects, experiments, backend logic, data science models, and open-source development work on GitHub.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Structured Repos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Clean Commits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  <span>Documented Codebases</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <Github className="w-5 h-5" />
                <span>Visit GitHub</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
