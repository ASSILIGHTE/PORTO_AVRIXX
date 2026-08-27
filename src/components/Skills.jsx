import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Sparkles,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4 text-indigo-400" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-4 h-4 text-sky-400" /> },
    { id: 'dataAi', label: 'Data & AI', icon: <BrainCircuit className="w-4 h-4 text-purple-400" /> },
    { id: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4 text-emerald-400" /> }
  ];

  const categoryMap = {
    frontend: { title: 'Frontend Development', items: skills.frontend, color: 'from-cyan-500/20 to-blue-500/10', border: 'border-cyan-500/30' },
    backend: { title: 'Backend Engineering', items: skills.backend, color: 'from-indigo-500/20 to-purple-500/10', border: 'border-indigo-500/30' },
    database: { title: 'Database Systems', items: skills.database, color: 'from-sky-500/20 to-teal-500/10', border: 'border-sky-500/30' },
    dataAi: { title: 'Data Science & AI', items: skills.dataAi, color: 'from-purple-500/20 to-pink-500/10', border: 'border-purple-500/30' },
    tools: { title: 'Development Tools', items: skills.tools, color: 'from-emerald-500/20 to-green-500/10', border: 'border-emerald-500/30' }
  };

  const getFilteredCategories = () => {
    if (activeTab === 'all') {
      return Object.keys(categoryMap);
    }
    return [activeTab];
  };

  return (
    <section id="skills" className="py-24 relative bg-[#0B0F17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A comprehensive set of tools, frameworks, languages, and systems I work with.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 text-white border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800/50'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredCategories().map((catKey) => {
            const cat = categoryMap[catKey];
            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-2xl bg-slate-900/60 border ${cat.border} backdrop-blur-md flex flex-col justify-between hover:bg-slate-900/80 transition-all duration-300 shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {cat.items.length} Skills
                    </span>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 w-full sm:w-auto"
                      >
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-800/80">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
