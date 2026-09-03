import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, MapPin, Award, FileCheck, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  // Lock background body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Listen to Escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 cursor-pointer"
        />

        {/* Modal Box Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0a0d16] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10"
        >
          
          {/* Modal Toolbar Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
              <h3 className="text-xs sm:text-sm font-bold text-white font-mono truncate">
                Curriculum Vitae — {portfolioData.personal.name}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Cetak / Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Content (Scrollable Container) */}
          <div className="overflow-y-auto p-3 sm:p-8 bg-slate-950 flex justify-center">
            
            {/* CV Document Container */}
            <div id="printable-cv" className="w-full max-w-3xl bg-white text-slate-800 shadow-2xl rounded-xl overflow-hidden print:shadow-none print:rounded-none">
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[900px]">
                
                {/* Left Sidebar (Dark Navy Column - 4 Cols) */}
                <div className="md:col-span-4 bg-[#2C3E50] text-white p-6 space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    
                    {/* Formal Photo Box */}
                    <div className="flex justify-center pb-2">
                      <div className="w-28 h-36 rounded-xl overflow-hidden border-2 border-slate-300/40 shadow-lg pointer-events-none select-none bg-slate-800">
                        <img
                          src={portfolioData.personal.avatar}
                          alt={portfolioData.personal.name}
                          className="w-full h-full object-cover object-top pointer-events-none select-none"
                          draggable="false"
                          onClick={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>

                    {/* Hubungi */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-500/40 pb-1.5">
                        Hubungi
                      </h4>
                      <div className="space-y-2.5 text-xs text-slate-200">
                        <div>
                          <div className="font-semibold text-white">{portfolioData.personal.phone}</div>
                          <div className="text-[10px] text-slate-400">(Mobile)</div>
                        </div>
                        <div>
                          <div className="font-semibold text-white break-all">{portfolioData.personal.email}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-white break-all">
                            {portfolioData.personal.linkedin.replace('https://', '')}
                          </div>
                          <div className="text-[10px] text-slate-400">(LinkedIn)</div>
                        </div>
                      </div>
                    </div>

                    {/* Keahlian Teratas */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-500/40 pb-1.5">
                        Keahlian Teratas
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-200">
                        <li className="font-medium">• UIX & Web Design</li>
                        <li className="font-medium">• Front-End Development</li>
                        <li className="font-medium">• Backend Development</li>
                        <li className="font-medium">• Database Engineering</li>
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-500/40 pb-1.5 flex items-center justify-between">
                        <span>Certifications</span>
                        <Award className="w-4 h-4 text-amber-400" />
                      </h4>
                      <div className="text-xs space-y-1">
                        <div className="font-semibold text-white">
                          Pengembang Web Pratama
                        </div>
                        <div className="text-[11px] text-amber-300 font-mono">
                          Junior Web Developer (BNSP)
                        </div>
                        <a
                          href="/certificates/bnsp-junior-web-developer.jpg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-cyan-300 hover:text-cyan-200 underline pt-1 font-mono cursor-pointer"
                        >
                          <FileCheck className="w-3 h-3" />
                          <span>Lihat Sertifikat BNSP</span>
                        </a>
                      </div>
                    </div>

                    {/* Patents / Hak Cipta */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-500/40 pb-1.5 flex items-center justify-between">
                        <span>Hak Cipta / HAKI</span>
                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                      </h4>
                      <div className="text-xs space-y-1">
                        <div className="font-semibold text-white">
                          Aplikasi Predict-G
                        </div>
                        <div className="text-[10px] text-purple-300 font-mono">
                          DJKI Kemenkumham RI
                        </div>
                        <a
                          href="https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-cyan-300 hover:text-cyan-200 underline pt-1 font-mono cursor-pointer"
                        >
                          <FileCheck className="w-3 h-3" />
                          <span>Verifikasi PDKI DGIP ↗</span>
                        </a>
                      </div>
                    </div>

                  </div>

                  <div className="text-[10px] text-slate-400 pt-4 border-t border-slate-600/40">
                    {portfolioData.personal.name} • CV Resmi
                  </div>
                </div>

                {/* Right Column (Clean White Column - 8 Cols) */}
                <div className="md:col-span-8 bg-white p-6 sm:p-8 space-y-8 text-slate-800">
                  
                  {/* Name & Headline */}
                  <div className="space-y-2 pb-4 border-b border-slate-200">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      {portfolioData.personal.name}
                    </h1>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                      {portfolioData.personal.title} | Laravel, React, PHP, MySQL
                    </p>
                    <p className="text-xs text-slate-500">
                      {portfolioData.personal.location}
                    </p>
                  </div>

                  {/* Pengalaman Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">
                      Pengalaman
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          Kepolisian Negara Republik Indonesia
                        </h4>
                        <div className="text-xs font-semibold text-slate-700">
                          Pengembang Web (Subdit V Siber Ditreskrimsus Polda Sumsel)
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-2">
                          <span>Maret 2025 - Mei 2025 (3 bulan)</span>
                        </div>
                        <div className="text-xs text-slate-400 italic">
                          Palembang
                        </div>
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed">
                        Membuat Sistem Informasi Manajemen Laporan Surat Tanda Terima Pelaporan (STTP) Berbasis Web. STTP merupakan aplikasi internal yang dikembangkan untuk membantu proses pengelolaan dan administrasi laporan STTP pada Subdit V Siber Direktorat Reserse Kriminal Khusus Polda Sumatera Selatan.
                      </p>

                      <div className="space-y-1 text-xs text-slate-700 leading-relaxed">
                        <p className="font-semibold">Dalam proyek ini, saya terlibat dalam pengembangan sistem berbasis web dengan fitur utama meliputi:</p>
                        <ul className="space-y-1 pl-1">
                          <li>• Pengelolaan pengguna dan hak akses berdasarkan role.</li>
                          <li>• Pengelolaan template STTP.</li>
                          <li>• Form input dan pengelolaan data STTP.</li>
                          <li>• Riwayat serta pencarian data STTP.</li>
                          <li>• Pengelolaan dokumen dan data pendukung.</li>
                          <li>• Dashboard administrasi.</li>
                          <li>• Pengembangan antarmuka yang responsif dan mudah digunakan.</li>
                        </ul>
                        <p className="pt-2 text-xs font-medium text-slate-600">
                          <span className="font-bold text-slate-800">Teknologi:</span> PHP Native, MySQL, HTML, Tailwind CSS, JavaScript, XAMPP, dan Visual Studio Code.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pendidikan Section */}
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">
                      Pendidikan
                    </h3>

                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900">
                        Universitas Indo Global Mandiri
                      </h4>
                      <p className="text-xs text-slate-700 font-medium">
                        Sarjana (S.Kom.), Teknik Informatika (Computer Science) · (Oktober 2022 - Oktober 2026)
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
