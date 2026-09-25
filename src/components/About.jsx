import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Code2, Rocket, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';
import { currentlyLearning } from '../data/skills';

export const About = () => {
  const cards = [
    {
      title: "AI & Machine Learning",
      description: "Developing intelligent algorithms, NLP models, and conversational chatbots that translate raw logic into smart tools.",
      icon: Brain,
      color: "from-sky-500/20 to-sky-500/5",
      borderColor: "border-sky-500/30",
      iconColor: "text-sky-400"
    },
    {
      title: "Data Analytics",
      description: "Analyzing datasets using Python, SQL, Pandas, and visualization tools to discover actionable trends and patterns.",
      icon: BarChart3,
      color: "from-indigo-500/20 to-indigo-500/5",
      borderColor: "border-indigo-500/30",
      iconColor: "text-indigo-400"
    },
    {
      title: "Web Development",
      description: "Crafting modern, responsive web user interfaces using React, JavaScript, and styled with Tailwind CSS.",
      icon: Code2,
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      title: "Product Building",
      description: "Focusing on end-to-end practical solution engineering, from initial problem framing to usable working prototypes.",
      icon: Rocket,
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Background & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Computer Science Engineering Student passionate about software, intelligence, and practical impact.
          </p>
        </div>

        {/* Narrative & Paragraph Content */}
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 rounded-2xl mb-16 border border-slate-800 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed shadow-xl">
          <p>
            I'm <strong className="text-white">Ritu</strong>, a Computer Science Engineering student with an interest in Artificial Intelligence, Data Analytics, and software development.
          </p>
          <p>
            I enjoy learning by building. From AI-based applications and chatbots to web platforms and data-driven solutions, I like working on projects that solve practical problems.
          </p>
          <p>
            My approach is simple: <span className="text-sky-300 font-semibold">understand the problem</span>, <span className="text-indigo-300 font-semibold">explore the right technology</span>, <span className="text-purple-300 font-semibold">build a working solution</span>, and continuously improve it.
          </p>
          <p>
            I'm currently focused on strengthening my skills in AI/ML, Python, SQL, Data Analytics, and modern web development while building real-world projects.
          </p>
        </div>

        {/* 4 Feature Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border ${card.borderColor} bg-gradient-to-b ${card.color} glass-card-hover relative group`}
              >
                <div className={`p-3 rounded-xl bg-slate-900/90 border border-slate-800 w-fit mb-4 ${card.iconColor} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* "Currently Learning" Area */}
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/20 via-slate-900/60 to-purple-950/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Continuous Growth</span>
              </div>
              <h3 className="text-xl font-bold text-white">Currently Learning & Expanding</h3>
              <p className="text-xs text-slate-400">Actively deepening expertise in key technical areas</p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {currentlyLearning.map((item) => (
                <div 
                  key={item}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-indigo-500/30 text-xs font-medium text-indigo-200 flex items-center space-x-1.5 shadow-sm hover:border-indigo-400 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
