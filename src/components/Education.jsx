import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Building2 } from 'lucide-react';
import { educationData } from '../data/education';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-accent">Learning</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal Computer Science & Engineering degree program and secondary education foundation.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 glass-card-hover space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-sky-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    edu.status === 'Currently Pursuing'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <div className="flex items-center space-x-2 text-sm text-indigo-300 font-medium">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono pt-1">{edu.affiliation}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Computer Science & Engineering</span>
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
