import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Download, CheckCircle2, ShieldCheck, Calendar, MapPin, User, FileText, ZoomIn, ZoomOut } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CertificateModal({ isOpen, onClose, certId = "bnsp-junior-web-developer" }) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const cert = portfolioData.certificationsList?.find(c => c.id === certId) || portfolioData.certificationsList?.[0];

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        
        {/* Backdrop click to close */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60"
        />

        {/* Main Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#0a0d16] rounded-3xl border border-slate-800 shadow-2xl shadow-indigo-950/30 overflow-hidden flex flex-col max-h-[92vh] z-10"
        >
          
          {/* Header Toolbar */}
          <div className="flex items-center justify-between px-5 py-4 bg-slate-950/90 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {cert.qualification}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {cert.badgeText}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={cert.image}
                download="Sertifikat_BNSP_Aufariq_Rajabi_Fristyan.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Unduh Berkas</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Layout */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Certificate Image Viewer (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col items-center space-y-3">
                <div 
                  className={`relative w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl transition-all duration-300 cursor-pointer ${
                    isZoomed ? 'max-h-none shadow-cyan-500/20' : 'max-h-[600px]'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className={`w-full object-contain transition-transform duration-300 ${
                      isZoomed ? 'scale-105' : 'scale-100 hover:scale-[1.02]'
                    }`}
                  />
                  
                  {/* Floating Zoom Indicator */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed(!isZoomed);
                    }}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono backdrop-blur-md flex items-center gap-1.5 cursor-pointer shadow-lg"
                  >
                    {isZoomed ? <ZoomOut className="w-3.5 h-3.5 text-cyan-400" /> : <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />}
                    <span>{isZoomed ? 'Perkecil' : 'Perbesar Tampilan'}</span>
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Dokumen Asli Sertifikat Kompetensi — Klik gambar untuk zoom
                </p>
              </div>

              {/* Certificate Metadata Details (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Official Title Card */}
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      Resmi & Terverifikasi
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 text-[11px] font-mono border border-amber-500/20">
                      BNSP / LSP
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-extrabold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 italic mt-0.5">
                      {cert.titleEn}
                    </p>
                  </div>
                </div>

                {/* Technical Metadata Matrix */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 text-xs">
                  
                  <div className="flex items-start gap-3 pb-2.5 border-b border-slate-800/80">
                    <User className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-[11px]">Nama Terdaftar:</div>
                      <div className="text-white font-bold text-sm">{cert.recipient}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-2.5 border-b border-slate-800/80">
                    <FileText className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-[11px]">No. Registrasi (Reg. TIK):</div>
                      <div className="text-cyan-300 font-mono font-semibold">{cert.regNo}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-2.5 border-b border-slate-800/80">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-[11px]">No. Sertifikat:</div>
                      <div className="text-amber-300 font-mono font-semibold">{cert.certNo}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-2.5 border-b border-slate-800/80">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-[11px]">Otoritas Penerbit:</div>
                      <div className="text-slate-200 font-semibold">{cert.issuer}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{cert.lsp}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-2.5 border-b border-slate-800/80">
                    <Calendar className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-[11px]">Tanggal Terbit & Masa Berlaku:</div>
                      <div className="text-slate-200 font-semibold">{cert.location}, {cert.issueDate}</div>
                      <div className="text-[11px] text-emerald-400 font-mono">Berlaku selama {cert.validity}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-[11px]">Direktur LSP Teknologi Digital:</div>
                      <div className="text-slate-200 font-semibold">{cert.director}</div>
                    </div>
                  </div>

                </div>

                {/* Direct Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    <span>Buka Gambar Ukuran Penuh</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
