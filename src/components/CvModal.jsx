import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Award, FileCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personal, about, skills, experience, education, projects, training, languages, softSkills, certificationsList } = portfolioData;
  const hardSkills = Object.values(skills).flat().map((skill) => skill.name);

  return (
    <AnimatePresence>
      <div className="cv-modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[#07101c]/90 backdrop-blur-md">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/60 cursor-pointer" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="cv-modal-panel relative w-full max-w-5xl h-[calc(100dvh-1.5rem)] sm:h-auto sm:max-h-[92vh] bg-[#0d1726] rounded-3xl border border-slate-700/60 shadow-2xl overflow-hidden flex flex-col z-10"
        >
          <div className="cv-modal-toolbar flex items-center justify-between px-5 sm:px-6 py-4 bg-[#101b2a] border-b border-slate-700/60 shrink-0">
            <h3 className="text-xs sm:text-sm font-bold text-white font-mono truncate">Curriculum Vitae — {personal.name}</h3>
            <div className="flex items-center gap-3">
              <button onClick={() => window.print()} className="px-3.5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer">
                <Printer className="w-4 h-4" /><span className="hidden sm:inline">Cetak / Download PDF</span>
              </button>
              <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer" aria-label="Tutup CV">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="cv-modal-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 sm:p-8 bg-[#091321] flex justify-center">
            <div id="printable-cv" className="cv-document w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden print:shadow-none print:rounded-none">
              <header className="bg-[#23344a] text-white p-7 sm:p-10 border-b-4 border-teal-400">
                <h1 className="text-3xl font-black tracking-tight">{personal.name.toUpperCase()}</h1>
                <p className="text-cyan-200 font-semibold mt-1">{personal.title}</p>
                <p className="text-xs text-slate-200 mt-4 leading-relaxed">
                  {personal.location} · {personal.phone} · {personal.email}<br />
                  linkedin.com/in/aufariqrf · github.com/ASSILIGHTE · avrixx.xyz
                </p>
              </header>

              <main className="cv-body p-7 sm:p-10 space-y-8 text-[13px] leading-6">
                <CvSection title="Profil Profesional">
                  <p>{about.bio} Mampu bekerja secara mandiri maupun dalam tim, memiliki kemampuan komunikasi yang baik, berpikir kritis, bertanggung jawab, mudah beradaptasi, serta berkomitmen untuk terus belajar dan mengembangkan kemampuan profesional.</p>
                </CvSection>

                <CvSection title="Pengalaman Kerja">
                  <div className="space-y-5">
                    {experience.map((item) => (
                      <article key={`${item.organization}-${item.role}`}>
                        <div className="flex flex-wrap justify-between gap-1">
                          <h3 className="font-bold text-sm text-slate-900">{item.organization}</h3>
                          <span className="font-semibold text-slate-500">{item.period}</span>
                        </div>
                        <p className="font-semibold text-cyan-700">{item.role}</p>
                        <p className="mt-1">{item.description}</p>
                        <ul className="mt-1 list-disc pl-5">
                          {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                      </article>
                    ))}
                  </div>
                </CvSection>

                <CvSection title="Pendidikan">
                  {education.map((item) => (
                    <article key={item.institution}>
                      <div className="flex flex-wrap justify-between gap-1">
                        <h3 className="font-bold text-sm text-slate-900">{item.institution} | {item.degree}</h3>
                        <span className="font-semibold text-slate-500">{item.period}</span>
                      </div>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </CvSection>

                <CvSection title="Proyek dan Pencapaian">
                  <div className="space-y-3">
                    {projects.map((project) => (
                      <article key={project.id}>
                        <h3 className="font-bold text-sm text-slate-900">{project.title}</h3>
                        <p>{project.shortDescription}</p>
                      </article>
                    ))}
                  </div>
                </CvSection>

                <CvSection title="Keterampilan">
                  <p><strong>Hard Skills:</strong> {hardSkills.join(', ')}</p>
                  <p><strong>Soft Skills:</strong> {softSkills.join(', ')}</p>
                </CvSection>

                <div className="grid sm:grid-cols-2 gap-6">
                  <CvSection title="Sertifikasi">
                    <div className="flex gap-2">
                      <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">{certificationsList[0].title} - {certificationsList[0].issuer}</p>
                        <p>Berlaku {certificationsList[0].validity}</p>
                        <a href={certificationsList[0].image} target="_blank" rel="noreferrer" className="text-cyan-700 inline-flex items-center gap-1 mt-1"><FileCheck className="w-3 h-3" /> Lihat sertifikat</a>
                      </div>
                    </div>
                  </CvSection>
                  <CvSection title="Pelatihan">
                    <p className="font-bold">{training[0].title}</p>
                    <p>{training[0].issuer} · {training[0].period}</p>
                  </CvSection>
                </div>

                <CvSection title="Bahasa">
                  <p>{languages.join(' · ')}</p>
                </CvSection>
              </main>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function CvSection({ title, children }) {
  return (
    <section className="cv-section space-y-2.5">
      <h2 className="text-sm font-black uppercase tracking-[0.12em] border-b-2 pb-1.5">{title}</h2>
      {children}
    </section>
  );
}
