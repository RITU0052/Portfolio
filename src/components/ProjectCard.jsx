import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectMockup } from './ProjectMockup';

export const ProjectCard = ({ project, onSelectProject, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card rounded-2xl border border-slate-800 hover:border-indigo-500/40 overflow-hidden flex flex-col justify-between glass-card-hover group"
    >
      {/* Mockup Preview Area */}
      <div 
        onClick={() => onSelectProject(project)}
        className="cursor-pointer relative overflow-hidden bg-slate-950/80"
      >
        <ProjectMockup projectId={project.id} type="card" />
        <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <span className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-lg">
            View Details
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-sky-400 border border-indigo-500/20">
              {project.category || "AI Project"}
            </span>
            <span className="text-[11px] text-slate-500 font-mono">{project.role}</span>
          </div>

          <h3 
            onClick={() => onSelectProject(project)}
            className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer"
          >
            {project.name}
          </h3>
          <p className="text-xs font-medium text-slate-400">{project.title}</p>

          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed pt-1">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Card Action Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
            <button
              onClick={() => onSelectProject(project)}
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center space-x-1"
            >
              <span>Project Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub Repository`}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} Live Demo`}
                  className="p-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
