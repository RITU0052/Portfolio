import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Brain, BarChart2, Code, ExternalLink, MessageCircle, HeartPulse } from 'lucide-react';
import { AbstractAiCanvas } from './AbstractAiCanvas';

export const Hero = () => {
  const whatsappUrl = `https://wa.me/917042363267?text=${encodeURIComponent("Hi Ritu! I saw your portfolio and would like to talk.")}`;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden glow-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Live CareBridge App Highlight Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                <span>Computer Science Engineering Student</span>
              </div>

              <a
                href="https://carebridge-website-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <HeartPulse className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>CareBridge App Live 🚀</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building practical solutions with{' '}
              <span className="text-gradient-accent">AI, data, and technology.</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Hi, I'm <span className="text-white font-semibold">Ritu</span>, a Computer Science Engineering student passionate about Artificial Intelligence, Data Analytics, and software development. Creator of <a href="https://carebridge-website-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sky-300 font-semibold underline underline-offset-2">CareBridge Healthcare App</a>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="https://carebridge-website-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-glow-indigo hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center space-x-2 group"
              >
                <span>Launch CareBridge App</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>

              <a
                href="#projects"
                className="px-5 py-3.5 rounded-xl bg-slate-900/90 text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all duration-200 flex items-center space-x-2 shadow-lg"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Core Specializations Pills Below Buttons */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs text-slate-400 font-medium mr-1">Focus Areas:</span>
              
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                <Brain className="w-3.5 h-3.5 text-sky-400" />
                <span>AI/ML</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Data Analytics</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                <Code className="w-3.5 h-3.5 text-purple-400" />
                <span>Web Development</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract AI Technology Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <AbstractAiCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
