import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Building, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation({ onOpenCert }) {
  const { education, experience, certificationsList } = portfolioData;
  const mainCert = certificationsList?.[0];

  return (
    <section id="experience" className="py-24 relative bg-[#0B0F17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Academic & Professional Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience, Education & <span className="text-cyan-400">Certification</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            My academic timeline in Informatics Engineering, national BNSP certification, and practical development achievements.
          </p>
        </div>

        {/* BNSP Certification Highlight Banner Card */}
        {mainCert && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-amber-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
          >
            {/* Glow backing */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Certificate Image Thumbnail (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div 
                  onClick={() => onOpenCert?.(mainCert.id)}
                  className="relative group/img cursor-pointer rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 max-w-sm transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img 
                    src={mainCert.image} 
                    alt={mainCert.title}
                    className="w-full h-auto object-cover" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      Pratinjau Sertifikat
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate Description (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Sertifikasi Resmi BNSP
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                    Reg. TIK 1565 68018 2026
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-white">
                    {mainCert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Otoritas: {mainCert.issuer} & {mainCert.lsp}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Sertifikat Kompetensi resmi Republik Indonesia dalam bidang <strong className="text-amber-300">Pengembangan Website (Web Development)</strong> dengan kualifikasi <strong className="text-cyan-300">Pengembang Web Pratama (Junior Web Developer)</strong>. Diterbitkan pada 04 Juni 2026 di Yogyakarta dan berlaku selama 3 tahun.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                    <span className="text-[10px] text-slate-400 block font-mono">No. Sertifikat</span>
                    <span className="font-mono text-cyan-300 font-semibold text-[11px] truncate block">{mainCert.certNo}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                    <span className="text-[10px] text-slate-400 block font-mono">Masa Berlaku</span>
                    <span className="font-mono text-emerald-300 font-semibold text-[11px] block">{mainCert.validity}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 block font-mono">Status</span>
                    <span className="font-mono text-amber-300 font-semibold text-[11px] block">Terverifikasi (Competent)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenCert?.(mainCert.id)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>Lihat & Verifikasi Sertifikat Resmi</span>
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/30 backdrop-blur-md space-y-4 shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Bachelor Degree</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-sm font-medium text-cyan-400 flex items-center gap-1.5 mt-0.5">
                      <Building className="w-3.5 h-3.5" />
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {edu.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/30 backdrop-blur-md space-y-4 shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-mono text-indigo-300 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-sm font-medium text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
