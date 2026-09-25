import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070b12] py-12 relative text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Logo & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-white text-sm font-bold font-mono">
                R
              </div>
              <span className="text-lg font-extrabold text-white">Ritu</span>
            </div>
            <p className="text-slate-400 text-xs font-mono">
              Building with AI • Data • Technology
            </p>
          </div>

          {/* Quick Links & Social Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/RITU0052"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ritu-sharma-726674314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors flex items-center space-x-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:roshnisharma0052@gmail.com"
              className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center space-x-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Scroll Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all flex items-center space-x-1"
            aria-label="Scroll to top"
          >
            <span className="text-[11px] font-medium">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-slate-500 text-[11px]">
          © 2026 Ritu. All rights reserved. • Built with React & Tailwind CSS
        </div>

      </div>
    </footer>
  );
};
