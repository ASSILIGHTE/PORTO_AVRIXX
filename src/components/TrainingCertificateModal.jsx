import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, X } from 'lucide-react';

const certificateImage = '/certificates/skill-academy-digital-marketing.jpg';

export default function TrainingCertificateModal({ isOpen, onClose }) {
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
            aria-label="Tutup tampilan sertifikat"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            className="relative z-10 h-[calc(100dvh-1.5rem)] w-full max-w-6xl overflow-y-auto overscroll-contain rounded-3xl border border-teal-400/20 bg-[#091321] shadow-2xl sm:h-[calc(100dvh-3rem)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="training-certificate-title"
          >
            <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-slate-700/60 bg-[#101b2a]/95 px-4 py-4 backdrop-blur-md sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 id="training-certificate-title" className="truncate text-sm font-bold text-white sm:text-base">
                    Sertifikat Pelatihan Skill Academy
                  </h2>
                  <p className="truncate text-[11px] text-slate-400 sm:text-xs">Strategi Promosi Digital UMKM · November 2022</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Tutup sertifikat pelatihan"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>

            <div className="p-3 sm:p-6">
              <figure className="overflow-hidden rounded-2xl border border-slate-700/70 bg-white shadow-xl">
                <img
                  src={certificateImage}
                  alt="Sertifikat Skill Academy untuk pelatihan Merancang dan Mengembangkan Strategi Promosi Digital UMKM bagi Spesialis Pemasaran"
                  className="h-auto w-full object-contain"
                />
              </figure>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
