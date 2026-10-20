import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenContact, onOpenCv }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = ['about', 'skills', 'projects', 'featured', 'experience', 'contact'];
      const position = window.scrollY + 220;
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && position >= element.offsetTop && position < element.offsetTop + element.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    ['Tentang', 'about'], ['Keahlian', 'skills'], ['Proyek', 'projects'],
    ['Studi Kasus', 'featured'], ['Pengalaman', 'experience'], ['Kontak', 'contact']
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <motion.div
        initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className={`mx-auto flex max-w-7xl items-center justify-between border px-4 sm:px-6 transition-all duration-500 ${isScrolled ? 'rounded-2xl border-white/10 bg-[#09121d]/85 py-2.5 shadow-2xl shadow-black/20 backdrop-blur-xl max-w-[calc(100%-2rem)]' : 'border-transparent bg-transparent py-2'}`}
      >
        <a href="#" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">AR</span>
          <span>
            <span className="block text-sm font-extrabold tracking-[0.16em] text-white">{portfolioData.personal.brandName}</span>
            <span className="block text-[10px] tracking-wide text-slate-400">Web Developer · Palembang</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={`relative rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${activeSection === id ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
              {label}
              {activeSection === id && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cyan-400" />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button onClick={onOpenCv} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-white/[0.07]">
            <FileText className="h-4 w-4 text-cyan-400" /> Lihat CV
          </button>
          <button onClick={onOpenContact} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">
            Hubungi Saya <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <button onClick={() => setMobileMenuOpen((value) => !value)} className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-white md:hidden" aria-label="Buka navigasi">
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#09121d]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/[0.06] hover:text-white">{label}</a>)}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <button onClick={() => { setMobileMenuOpen(false); onOpenCv(); }} className="rounded-xl border border-white/10 py-3 text-xs font-bold text-white">Lihat CV</button>
              <button onClick={() => { setMobileMenuOpen(false); onOpenContact(); }} className="rounded-xl bg-cyan-400 py-3 text-xs font-black text-slate-950">Hubungi Saya</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
