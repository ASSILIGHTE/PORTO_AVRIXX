import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenContact, onOpenCv }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['about', 'skills', 'projects', 'featured', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Case Study', href: '#featured', id: 'featured' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B0F17] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Status Badge */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCv}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 border border-slate-700/80 hover:border-slate-500 hover:text-white transition-all flex items-center gap-1.5 bg-slate-900/40 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>CV</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center gap-1 cursor-pointer"
            >
              Contact Me
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-medium text-slate-200 border border-slate-700 bg-slate-800/50 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              Download Resume (CV)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
