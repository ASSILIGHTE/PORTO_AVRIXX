import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Building, CheckCircle2, Award, Zap, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation({ onOpenCert }) {
  const { education, experience, certificationsList } = portfolioData;
  const mainCert = certificationsList?.[0];

  return (
    <section id="experience" className="py-24 relative bg-[#08090f] border-t border-sky-500/20 bg-pro-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-2"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f111e] border border-sky-500/30 text-sky-300 text-xs font-mono font-bold cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>CAMPAIGN LOG & ACHIEVEMENTS</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Campaign Timeline & Unlocks
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Informatics Engineering degree, national BNSP certification, and practical software development campaign history.
          </p>
        </motion.div>

        {/* Official BNSP Certification Highlight Banner */}
        {mainCert && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0f111e] border border-sky-500/30 shadow-2xl relative overflow-hidden pro-card hud-corner"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Certificate Image Thumbnail (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenCert?.(mainCert.id)}
                  className="relative group/img cursor-pointer rounded-xl overflow-hidden border border-sky-500/40 max-w-sm transition-transform duration-200"
                >
                  <img 
                    src={mainCert.image} 
                    alt={mainCert.title}
                    className="w-full h-auto object-cover" 
                  />
                  <div className="absolute inset-0 bg-[#08090f]/70 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-xl">
                      <Award className="w-4 h-4 animate-bounce" />
                      View Certificate Document
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Certificate Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-black flex items-center gap-1.5 cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    ACHIEVEMENT UNLOCKED: BNSP RI CERTIFICATION
                  </motion.span>
                  <span className="px-3 py-1 rounded-full bg-[#08090f] border border-sky-500/30 text-sky-300 text-xs font-mono font-bold">
                    Reg. TIK 1565 68018 2026
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white">
                    {mainCert.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-300">
                    Authority: {mainCert.issuer} & {mainCert.lsp}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Sertifikat Kompetensi resmi Republik Indonesia dalam bidang <strong className="text-white">Pengembangan Website (Web Development)</strong> dengan kualifikasi <strong className="text-white">Pengembang Web Pratama (Junior Web Developer)</strong>. Diterbitkan pada 04 Juni 2026 di Yogyakarta.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <motion.div whileHover={{ scale: 1.04 }} className="p-3 rounded-xl bg-[#08090f] border border-sky-500/20 text-xs cursor-pointer">
                    <span className="text-[10px] text-slate-400 block font-mono">No. Sertifikat</span>
                    <span className="font-mono text-slate-200 font-bold text-[11px] truncate block">{mainCert.certNo}</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} className="p-3 rounded-xl bg-[#08090f] border border-sky-500/20 text-xs cursor-pointer">
                    <span className="text-[10px] text-slate-400 block font-mono">Masa Berlaku</span>
                    <span className="font-mono text-slate-200 font-bold text-[11px] block">{mainCert.validity}</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} className="p-3 rounded-xl bg-[#08090f] border border-sky-500/20 text-xs col-span-2 sm:col-span-1 cursor-pointer">
                    <span className="text-[10px] text-slate-400 block font-mono">Status Verification</span>
                    <span className="font-mono text-emerald-400 font-black text-[11px] block">Verified (Competent)</span>
                  </motion.div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenCert?.(mainCert.id)}
                    className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
                  >
                    <Award className="w-4 h-4" />
                    <span>View & Verify Official Certificate</span>
                  </motion.button>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* Campaign Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Academic Campaign */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-sky-500/20">
              <div className="p-2 rounded-xl bg-[#0f111e] text-sky-400 border border-sky-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-white">Academic Campaign</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="p-6 rounded-2xl bg-[#0f111e] border border-sky-500/30 space-y-4 pro-card hud-corner cursor-pointer"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#08090f] border border-sky-500/30 text-[11px] font-mono font-bold text-sky-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">BACHELOR DEGREE</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-sm font-bold text-sky-400 flex items-center gap-1.5 mt-0.5">
                      <Building className="w-3.5 h-3.5" />
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {edu.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-sky-500/20">
                    {edu.achievements.map((ach, aIdx) => (
                      <motion.div 
                        key={aIdx} 
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2 text-xs text-slate-200 cursor-pointer font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Work & Police Guild Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-sky-500/20">
              <div className="p-2 rounded-xl bg-[#0f111e] text-sky-400 border border-sky-500/30">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-white">Guild Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="p-6 rounded-2xl bg-[#0f111e] border border-sky-500/30 space-y-4 pro-card hud-corner cursor-pointer"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#08090f] border border-sky-500/30 text-[11px] font-mono font-bold text-sky-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-sm font-bold text-sky-400 flex items-center gap-1.5 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-sky-400" />
                      {exp.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-sky-500/20">
                    {exp.bullets.map((bullet, bIdx) => (
                      <motion.div 
                        key={bIdx} 
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2 text-xs text-slate-200 cursor-pointer font-medium"
                      >
                        <Shield className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </motion.div>
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
