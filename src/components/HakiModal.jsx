import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileImage, ShieldCheck, X } from 'lucide-react';

const documents = [
  {
    src: '/haki/predict-g-certificate.jpg',
    alt: 'Surat Pencatatan Ciptaan aplikasi Predict-G',
    label: 'Surat Pencatatan Ciptaan'
  },
  {
    src: '/haki/predict-g-creators.png',
    alt: 'Lampiran daftar pencipta aplikasi Predict-G',
    label: 'Lampiran Pencipta'
  }
];

export default function HakiModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-slate-950/90 p-3 backdrop-blur-md sm:p-6">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-black/50"
            aria-label="Tutup galeri dokumen"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            className="relative z-10 h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-3xl border border-emerald-400/20 bg-[#091321] shadow-2xl sm:h-[calc(100dvh-3rem)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="haki-modal-title"
          >
            <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-slate-700/60 bg-[#101b2a]/95 px-4 py-4 backdrop-blur-md sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 id="haki-modal-title" className="truncate text-sm font-bold text-white sm:text-base">
                    Dokumen Hak Cipta Predict-G
                  </h2>
                  <p className="text-[11px] text-slate-400 sm:text-xs">DJKI No. 000852775 · 2 dokumen</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Tutup dokumen Hak Cipta"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>

            <div className="space-y-8 p-3 sm:p-6">
              {documents.map((document, index) => (
                <figure key={document.src} className="overflow-hidden rounded-2xl border border-slate-700/70 bg-white shadow-xl">
                  <figcaption className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold text-slate-700 sm:text-sm">
                    <FileImage className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                    <span>{index + 1}. {document.label}</span>
                  </figcaption>
                  <img src={document.src} alt={document.alt} className="h-auto w-full object-contain" />
                </figure>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
