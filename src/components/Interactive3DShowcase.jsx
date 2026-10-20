import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Sparkles, Layers, ShieldCheck, Cpu, Code2, Database } from 'lucide-react';
import Interactive3DCanvas from './Interactive3DCanvas';
import Tilt3DCard from './Tilt3DCard';

export default function Interactive3DShowcase() {
  const [activeSide, setActiveSide] = useState(0);

  const cubeSides = [
    { title: 'Frontend Web Development', desc: 'HTML5, CSS3, JavaScript, Bootstrap', icon: <Code2 className="w-6 h-6 text-sky-400" /> },
    { title: 'Web Application', desc: 'React.js, Laravel, PHP, Node.js', icon: <Cpu className="w-6 h-6 text-indigo-400" /> },
    { title: 'Database', desc: 'MySQL', icon: <Database className="w-6 h-6 text-cyan-400" /> },
    { title: 'Machine Learning Research', desc: 'Python, SVM, Random Forest, Data Analysis', icon: <Sparkles className="w-6 h-6 text-emerald-400" /> },
  ];

  return (
    <section id="interactive-3d" className="py-24 relative bg-[#0b0f19] border-t border-slate-800/80 bg-modern-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-2 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold">
            <Box className="w-3.5 h-3.5" />
            <span>DESAIN & ANIMASI 3D INTERAKTIF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visualisasi 3D Tech Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Sistem interaktif 3D node jaringan teknologi dan kartu 3D berpresisi tinggi. Geser kursor untuk mengontrol sudut 3D secara real-time.
          </p>
        </motion.div>

        {/* 3D Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 3D Interactive Canvas Sphere (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 pro-card relative">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                Sphere Node 3D Interaktif (Goyangkan Kursor)
              </span>
              <span className="font-mono text-[11px] text-sky-400">3D Matrix</span>
            </div>

            <Interactive3DCanvas />
          </div>

          {/* Right: 3D Tilt Feature Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {cubeSides.map((item, idx) => (
              <Tilt3DCard key={idx} maxTilt={10}>
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 pro-card flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
