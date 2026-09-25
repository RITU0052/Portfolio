import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Eye, ExternalLink, Filter, ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { CertificateViewerModal } from './CertificateViewerModal';

export const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filterCategories = ['All', 'Hackathon', 'Job Simulation', 'Workshop', 'Certification', 'Internship'];

  const filteredAchievements = activeFilter === 'All' 
    ? achievementsData 
    : achievementsData.filter(item => {
        if (activeFilter === 'Hackathon') return item.type === 'Hackathon' || item.type === 'Ideathon' || item.type === 'Competition';
        return item.type === activeFilter;
      });

  return (
    <section id="achievements" className="py-20 relative glow-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Verified Credentials ({achievementsData.length})</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-accent">Achievements</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Verified national hackathons, Thoughtworks Buildathons, AWS/Deloitte/TATA Job Simulations, AI workshops, and certifications. Click <strong className="text-amber-400 font-semibold">"View Certificate"</strong> to open the official certificate file in a new tab.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-5xl mx-auto border-b border-slate-800/80 pb-4">
          <span className="text-xs text-slate-400 font-mono mr-2 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Filter:</span>
          </span>
          {filterCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'Hackathon' ? 'Hackathons & Competitions' : cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredAchievements.map((item, idx) => {
            const certUrl = item.certificateUrl || item.file;
            const hasValidFile = certUrl && certUrl !== '#' && certUrl !== '/';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (idx % 6) * 0.04 }}
                onClick={() => setSelectedCertificate(item)}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 glass-card-hover flex flex-col justify-between space-y-4 group cursor-pointer relative overflow-hidden"
              >
                {/* Top Row Icon & Category Tag */}
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                    item.type === 'Job Simulation'
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                      : item.type === 'Hackathon' || item.type === 'Ideathon'
                      ? 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                      : item.type === 'Workshop'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  }`}>
                    {item.type || "Credential"}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-sky-400">
                    {item.issuer}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Action Button Area */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    {item.date || "2026"}
                  </span>

                  {hasValidFile ? (
                    <a
                      href={certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center space-x-1.5 transition-colors group-hover:border-amber-400"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Certificate</span>
                    </a>
                  ) : (
                    <span 
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1 rounded-lg bg-slate-900 text-slate-400 border border-slate-800 text-[11px] font-medium flex items-center space-x-1 cursor-default"
                      title="Certificate file will open when added to /public/certificates/"
                    >
                      <AlertCircle className="w-3 h-3 text-amber-400" />
                      <span>File Pending</span>
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <CertificateViewerModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};
