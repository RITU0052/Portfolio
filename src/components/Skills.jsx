import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, BarChart3, Globe, Wrench, Cpu, CheckCircle } from 'lucide-react';
import { skillsCategories } from '../data/skills';

const iconMap = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  BarChart3: BarChart3,
  Globe: Globe,
  Wrench: Wrench,
  Cpu: Cpu
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-accent">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Core programming languages, AI models, data analytics toolkits, and software development concepts.
          </p>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, idx) => {
            const IconComp = iconMap[cat.iconName] || Code2;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 group-hover:text-indigo-300 group-hover:scale-105 transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">{cat.category}</h3>
                      <span className="text-[11px] text-slate-500 font-mono">{cat.skills.length} competencies</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">{cat.description}</p>
                </div>

                {/* Clean skill badges without fake percentage bars */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-200 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all flex items-center space-x-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
