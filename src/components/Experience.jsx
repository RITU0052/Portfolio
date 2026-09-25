import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Brain, Code, Headphones, Laptop, Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';

const iconMap = {
  Brain: Brain,
  Code: Code,
  Headphones: Headphones,
  Laptop: Laptop
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & <span className="text-gradient-accent">Internships</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical exposure in artificial intelligence, software projects, and customer service.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-500/40 md:hidden"></div>

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Briefcase;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Marker Icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 p-2.5 rounded-full bg-slate-900 border-2 border-indigo-500 text-sky-400 shadow-glow-indigo">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                    isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 glass-card-hover space-y-3">
                      
                      <div className={`flex items-center justify-between flex-wrap gap-2 ${
                        isEven ? 'md:justify-end' : ''
                      }`}>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-sky-300 border border-indigo-500/20 font-mono">
                          {item.type}
                        </span>
                        <div className="flex items-center space-x-1 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">{item.role}</h3>
                        <p className="text-sm font-medium text-indigo-400">{item.company}</p>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Focus Pills */}
                      <div className={`flex flex-wrap gap-1.5 pt-2 ${
                        isEven ? 'md:justify-end' : ''
                      }`}>
                        {item.focusPills.map((pill) => (
                          <span
                            key={pill}
                            className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
