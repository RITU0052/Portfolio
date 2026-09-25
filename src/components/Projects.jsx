import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = projectsData.find(p => p.featured) || projectsData[0];
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world software solutions built with AI, Machine Learning, Python, and Modern Web Stack.
          </p>
        </div>

        {/* Featured Project #1: Health Carer */}
        <div className="mb-16">
          <FeaturedProject 
            project={featuredProject} 
            onSelectProject={(proj) => setSelectedProject(proj)} 
          />
        </div>

        {/* Other Projects Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">More Practical Projects</h3>
            <p className="text-xs text-slate-400">Conversational AI, Speech Processing, and NLP Utilities</p>
          </div>
          <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            {otherProjects.length} Projects
          </span>
        </div>

        {/* Grid of Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
