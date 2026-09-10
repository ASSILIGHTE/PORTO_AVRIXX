import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy, MessageSquare, Zap } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ isModalOpen, onCloseModal }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      if (onCloseModal) onCloseModal();
    }, 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#08090f] border-t border-sky-500/20 bg-pro-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-2 mb-14"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f111e] border border-sky-500/30 text-sky-300 text-xs font-mono font-bold cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>START QUEST / DIRECT CONTACT</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Send Message to Player 1
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Have a project proposal, technical question, or quest opportunity? Send a message directly.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info Cards (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="md:col-span-5 space-y-4"
          >
            
            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -3, scale: 1.01 }}
              className="p-6 rounded-2xl bg-[#0f111e] border border-sky-500/30 space-y-3 pro-card hud-corner cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#08090f] text-sky-400 border border-sky-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#08090f] border border-sky-500/30 text-[11px] font-mono text-sky-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-bold"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </motion.button>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Direct Email Channel</span>
                <p className="text-sm font-bold text-white truncate">{personal.email}</p>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.a
              whileHover={{ y: -3, scale: 1.01 }}
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#0f111e] border border-sky-500/30 hover:border-sky-400 space-y-3 block group transition-all pro-card hud-corner cursor-pointer"
            >
              <div className="p-2.5 rounded-xl bg-[#08090f] text-sky-400 border border-sky-500/30 w-fit">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">LinkedIn Network</span>
                <p className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {personal.name}
                </p>
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              whileHover={{ y: -3, scale: 1.01 }}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#0f111e] border border-sky-500/30 hover:border-sky-400 space-y-3 block group transition-all pro-card hud-corner cursor-pointer"
            >
              <div className="p-2.5 rounded-xl bg-[#08090f] text-slate-200 border border-sky-500/30 w-fit">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">GitHub Vault</span>
                <p className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  github.com/Aufariqrf
                </p>
              </div>
            </motion.a>

          </motion.div>

          {/* Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f111e] border border-sky-500/30 shadow-2xl pro-card hud-corner">
              
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-white">QUEST TRANSMITTED!</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Thank you for reaching out. Message received by Player 1.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-500/20">
                    <h3 className="text-base font-bold text-white">
                      Transmit Direct Message
                    </h3>
                    <span className="text-[10px] font-mono text-sky-300 font-bold">READY TO TRANSMIT</span>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Your Name / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiter / Client"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090f] border border-sky-500/30 text-white text-xs placeholder:text-slate-600 focus:border-sky-400 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090f] border border-sky-500/30 text-white text-xs placeholder:text-slate-600 focus:border-sky-400 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Quest Proposal / Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hello Aufariq, I would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090f] border border-sky-500/30 text-white text-xs placeholder:text-slate-600 focus:border-sky-400 outline-none transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 hover:from-sky-500 hover:to-emerald-400 text-white font-black text-xs shadow-lg shadow-sky-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer border border-sky-400/40 group"
                  >
                    <Send className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>SEND QUEST TRANSMISSION NOW</span>
                  </motion.button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
