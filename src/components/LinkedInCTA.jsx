import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, MessageSquare, Briefcase, Zap } from 'lucide-react';
import { Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function LinkedInCTA() {
  const { personal } = portfolioData;

  return (
    <section className="py-14 relative bg-[#08090f] border-t border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          whileHover={{ y: -4 }}
          className="relative rounded-2xl bg-[#0f111e] border border-sky-500/30 p-8 sm:p-10 shadow-2xl overflow-hidden pro-card hud-corner group"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08090f] border border-sky-500/30 text-sky-300 text-xs font-mono font-bold cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>GUILD & PROFESSIONAL NETWORK</span>
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Connect on LinkedIn Guild
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Interested in software collaboration, web architecture discussions, backend engineering, or new quest opportunities? Feel free to reach out.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-xs font-mono text-slate-300 pt-1 font-semibold">
                <motion.div whileHover={{ scale: 1.06, y: -2 }} className="flex items-center gap-1.5 cursor-pointer">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span>Networking</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06, y: -2 }} className="flex items-center gap-1.5 cursor-pointer">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>Quest Opportunities</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06, y: -2 }} className="flex items-center gap-1.5 cursor-pointer">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Tech Dialogue</span>
                </motion.div>
              </div>
            </div>

            <div className="shrink-0">
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs shadow-lg shadow-sky-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer border border-sky-400/40"
              >
                <Linkedin className="w-4 h-4 text-white" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
