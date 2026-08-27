import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Sparkles, MessageSquare } from 'lucide-react';
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
    <section id="contact" className="py-24 relative bg-[#0B0F17] border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Have a question, project proposal, or opportunity? Feel free to drop a message.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Quick Contact Info Cards (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-[11px] font-mono text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Email Address</span>
                <p className="text-sm font-semibold text-white truncate">{personal.email}</p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 backdrop-blur-md space-y-3 block group transition-all"
            >
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">LinkedIn Profile</span>
                <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {personal.name} on LinkedIn
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md space-y-3 block group transition-all"
            >
              <div className="p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 w-fit">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">GitHub Profile</span>
                <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  github.com/avrixxx
                </p>
              </div>
            </a>

          </div>

          {/* Interactive Message Box (7 Cols) */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Send a Message</span>
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">Fast Response</span>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiter / Collaborator"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hello AVRIXXX, I would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
