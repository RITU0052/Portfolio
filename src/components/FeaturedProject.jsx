import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, CheckCircle2, Clock, Sparkles, Layers, ArrowRight, Globe } from 'lucide-react';
import { ProjectMockup } from './ProjectMockup';

export const FeaturedProject = ({ project, onSelectProject }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-3xl border border-indigo-500/40 overflow-hidden bg-gradient-to-b from-[#0f172a]/95 via-[#0d1527] to-[#090d16] p-6 sm:p-10 shadow-2xl relative group"
    >
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <div className="px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>#1 Flagship Project</span>
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">AI & Healthcare</span>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={project.demoUrl || "https://carebridge-website-xi.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold">Live App Ready</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center space-x-3">
              <span>{project.name}</span>
            </h3>
            <p className="text-lg font-semibold text-sky-400">{project.title}</p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Direct Live App URL Callout Box */}
          <div className="bg-gradient-to-r from-sky-950/40 via-indigo-950/40 to-slate-900/60 p-4 rounded-2xl border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-sky-300 flex items-center space-x-1.5">
                <Globe className="w-4 h-4 text-sky-400" />
                <span>CareBridge Live App Link:</span>
              </div>
              <a 
                href={project.demoUrl || "https://carebridge-website-xi.vercel.app/"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-300 hover:text-white underline underline-offset-2 break-all"
              >
                {project.demoUrl || "https://carebridge-website-xi.vercel.app/"}
              </a>
            </div>

            <a
              href={project.demoUrl || "https://carebridge-website-xi.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg flex items-center justify-center space-x-1.5 shrink-0 transition-transform active:scale-95"
            >
              <span>Open App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-3 pt-1">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Core Capabilities & Status</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.features.slice(0, 8).map((feat, idx) => {
                const isImplemented = feat.status === 'Implemented';
                return (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800/90 text-slate-300"
                  >
                    <span className="truncate pr-2 font-medium">{feat.name}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded font-semibold shrink-0 ${
                      isImplemented 
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20' 
                        : 'bg-amber-500/15 text-amber-300 border border-amber-500/20'
                    }`}>
                      {isImplemented ? 'Active' : 'Coming Soon'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-lg bg-indigo-600/15 border border-indigo-500/25 text-sky-200 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.demoUrl || "https://carebridge-website-xi.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-glow-indigo transition-all flex items-center space-x-2 group hover:scale-[1.02]"
            >
              <span>Launch CareBridge Web App</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={() => onSelectProject(project)}
              className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-800 flex items-center space-x-2 transition-colors"
            >
              <span>Architecture Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white font-semibold text-xs border border-slate-800 flex items-center space-x-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Preview Visual Column */}
        <div className="lg:col-span-5 space-y-3">
          <div 
            onClick={() => onSelectProject(project)}
            className="cursor-pointer transform group-hover:scale-[1.01] transition-transform duration-300"
          >
            <ProjectMockup projectId={project.id} type="card" />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span>Click thumbnail for full architecture study</span>
            <a 
              href={project.demoUrl || "https://carebridge-website-xi.vercel.app/"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline flex items-center space-x-1"
            >
              <span>Open live site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
