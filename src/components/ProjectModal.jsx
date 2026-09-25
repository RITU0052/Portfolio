import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Clock, ShieldAlert, Cpu, Layers, Sparkles, AlertCircle } from 'lucide-react';
import { ProjectMockup } from './ProjectMockup';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#0e1626] border border-indigo-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-slate-800 bg-[#0b111e] flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-sky-300 border border-indigo-500/30 font-mono">
                  {project.category || "Software Project"}
                </span>
                {project.featured && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    ★ Featured Showcase
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.name}</h2>
              <p className="text-sm text-slate-300 font-medium">{project.title}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scrollable Content */}
          <div className="p-6 overflow-y-auto space-y-8 text-slate-300 text-sm">
            
            {/* Visual Mockup Display */}
            <div>
              <ProjectMockup projectId={project.id} type="modal" />
            </div>

            {/* Overview / Tagline */}
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Project Overview</h3>
              <p className="text-slate-200 leading-relaxed">{project.longDescription || project.description}</p>
            </div>

            {/* Problem & Solution Dual Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-950/20 border border-red-500/20 p-5 rounded-xl space-y-2">
                <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{project.problem}</p>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/20 p-5 rounded-xl space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Features Breakdown with Implemented vs Coming Soon Status */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Feature Architecture & Implementation Status</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => {
                  const isImplemented = feature.status === 'Implemented';
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isImplemented
                          ? 'bg-slate-900/80 border-slate-800 text-slate-200'
                          : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                      }`}
                    >
                      <span className="font-medium">{feature.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center space-x-1 shrink-0 ml-2 ${
                          isImplemented
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {isImplemented ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Implemented</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3" />
                            <span>Coming Soon</span>
                          </>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Role & Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">My Role</h4>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs font-medium text-sky-300">
                  {project.role}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Challenges & Outcomes */}
            <div className="bg-indigo-950/20 border border-indigo-500/20 p-5 rounded-xl space-y-3">
              <div>
                <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">Key Challenges</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{project.challenges}</p>
              </div>
              <div className="pt-2 border-t border-indigo-500/20">
                <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-1">Results & Learnings</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{project.results}</p>
              </div>
            </div>

          </div>

          {/* Modal Footer Links */}
          <div className="p-6 border-t border-slate-800 bg-[#0b111e] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-800 flex items-center space-x-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-glow-indigo flex items-center space-x-2 transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs text-slate-500 bg-slate-900/50 px-3 py-2 rounded-lg border border-slate-800">
                  Demo Available via Local Deployment
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
