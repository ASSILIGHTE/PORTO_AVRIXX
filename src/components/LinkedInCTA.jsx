import React from 'react';
import { ArrowUpRight, Users, MessageSquare, Briefcase } from 'lucide-react';
import { Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function LinkedInCTA() {
  const { personal } = portfolioData;

  return (
    <section className="py-16 relative bg-[#0F172A]/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-8 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden group">
          
          {/* Decorative ambient lighting */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/15 transition-all duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                <Linkedin className="w-3.5 h-3.5" />
                <span>Professional Network</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's <span className="text-indigo-400">Connect</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Interested in collaboration, technology discussions, backend engineering, or new opportunities? Feel free to connect with me.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Networking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Career Opportunities</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tech Dialogue</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
