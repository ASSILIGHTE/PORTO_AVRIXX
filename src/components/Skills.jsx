import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Sparkles,
  Layers,
  Zap,
  Swords
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skill Tree', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'backend', label: 'Backend Buffs', icon: <Server className="w-3.5 h-3.5 text-sky-400" /> },
    { id: 'frontend', label: 'Frontend Abilities', icon: <Code2 className="w-3.5 h-3.5 text-teal-400" /> },
    { id: 'database', label: 'Database Vault', icon: <Database className="w-3.5 h-3.5 text-sky-400" /> },
    { id: 'dataAi', label: 'AI & Data Mastery', icon: <BrainCircuit className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'tools', label: 'Dev Tools', icon: <Wrench className="w-3.5 h-3.5 text-emerald-400" /> }
  ];

  const categoryMap = {
    backend: { title: 'Backend Skill Tree', items: skills.backend, summary: 'PHP Native, Laravel, Java, Flask' },
    frontend: { title: 'Frontend Skill Tree', items: skills.frontend, summary: 'HTML, CSS, JavaScript, React, Tailwind CSS' },
    database: { title: 'Database Vault', items: skills.database, summary: 'MySQL, PostgreSQL' },
    dataAi: { title: 'AI & Data Mastery', items: skills.dataAi, summary: 'Python, Pandas, Scikit-learn, Predict-G' },
    tools: { title: 'Dev Equipment & Tools', items: skills.tools, summary: 'Git, VS Code, Vite, XAMPP' }
  };

  const getFilteredCategories = () => {
    if (activeTab === 'all') return Object.keys(categoryMap);
    return [activeTab];
  };

  return (
    <section id="skills" className="py-24 relative bg-[#08090f] border-t border-sky-500/20">
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
            <Swords className="w-3.5 h-3.5 text-sky-400" />
            <span>PLAYER TECH INVENTORY</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Developer Skill Tree & Tech Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Unlocked capabilities, programming languages, databases, and development equipment.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white border border-sky-400 shadow-md shadow-sky-950/50'
                    : 'bg-[#0f111e] text-slate-400 hover:text-white border border-sky-500/30'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {getFilteredCategories().map((catKey) => {
              const cat = categoryMap[catKey];
              return (
                <motion.div
                  layout
                  key={catKey}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-[#0f111e] border border-sky-500/30 pro-card hud-corner flex flex-col justify-between"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-sky-500/20 mb-5">
                      <div>
                        <h3 className="text-base font-bold text-white tracking-wide">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] font-mono text-sky-300">{cat.summary}</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#08090f] border border-sky-500/30 text-emerald-400">
                        {cat.items.length} SKILLS
                      </span>
                    </div>

                    {/* Skill List with Progress Bars */}
                    <div className="space-y-3">
                      {cat.items.map((skill, idx) => {
                        const isAdvanced = skill.level.toLowerCase() === 'advanced';
                        const xpPercent = isAdvanced ? 90 : 75;
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02, x: 3 }}
                            className="p-3 rounded-xl bg-[#08090f] border border-sky-500/20 space-y-1.5 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                                <span className="text-xs font-bold text-slate-100">
                                  {skill.name}
                                </span>
                              </div>
                            </div>

                            {/* Mini XP Progress bar */}
                            <div className="w-full h-1.5 rounded-full bg-[#0f111e] overflow-hidden p-0.5">
                              <div
                                className={`h-full rounded-full ${
                                  isAdvanced 
                                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500' 
                                    : 'bg-gradient-to-r from-cyan-500 to-emerald-400'
                                }`}
                                style={{ width: `${xpPercent}%` }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
