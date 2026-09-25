import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, MessageCircle, ArrowUpRight, Award } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Dynamic Section Active Tracking
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/917042363267?text=${encodeURIComponent("Hi Ritu! I saw your portfolio and would like to talk.")}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav py-3.5 shadow-xl shadow-black/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 text-xl font-extrabold tracking-tight group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-glow-indigo group-hover:scale-105 transition-transform duration-300">
            <span className="font-mono text-lg font-bold">R</span>
          </div>
          <span className="text-white group-hover:text-sky-400 transition-colors">
            Ritu<span className="text-sky-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600/90 text-white shadow-sm border border-indigo-400/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Side Social & WhatsApp Let's Talk CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="https://github.com/RITU0052"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ritu-sharma-726674314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-300 hover:text-sky-400 bg-slate-900/60 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Let's Talk WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-mono shadow-glow-indigo transition-all duration-200 flex items-center space-x-1.5 group"
          >
            <MessageCircle className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-500 text-slate-950 rounded-lg font-semibold flex items-center space-x-1 text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Let's Talk</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
            className="p-2 text-slate-300 hover:text-white bg-slate-900/80 rounded-lg border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#090d16]/95 border-b border-slate-800 backdrop-blur-xl overflow-hidden px-4 py-6"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-indigo-600/30 text-sky-300 border border-indigo-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold flex items-center justify-center space-x-2 text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Let's Talk on WhatsApp (+91 7042363267)</span>
                </a>

                <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/RITU0052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 bg-slate-900 text-slate-300 rounded-lg border border-slate-800 flex items-center justify-center space-x-2 text-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ritu-sharma-726674314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 bg-slate-900 text-sky-400 rounded-lg border border-slate-800 flex items-center justify-center space-x-2 text-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
