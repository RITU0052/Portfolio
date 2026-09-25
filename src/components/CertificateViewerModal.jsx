import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Download, ShieldCheck, Calendar, Building, ExternalLink, FileText, AlertCircle } from 'lucide-react';

export const CertificateViewerModal = ({ certificate, onClose }) => {
  const [fileError, setFileError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!certificate) return null;

  const certificateFile = certificate.file || certificate.certificateUrl;

  const handleOpenNewTab = () => {
    if (certificateFile) {
      window.open(certificateFile, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#0e1626] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-800 bg-[#0b111e] flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-0 pr-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white truncate">{certificate.title}</h3>
                <p className="text-xs text-sky-400 font-mono truncate">{certificate.issuer}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              {certificateFile && (
                <button
                  onClick={handleOpenNewTab}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-md flex items-center space-x-1.5 transition-all"
                  title="Open Certificate PDF/Image in new browser tab"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                aria-label="Close viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Content Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#090d16]">
            
            {/* Live Certificate File Preview Frame */}
            {certificateFile && !fileError ? (
              <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-2 min-h-[350px]">
                {certificateFile.endsWith('.pdf') ? (
                  <iframe 
                    src={certificateFile} 
                    title={certificate.title} 
                    onError={() => setFileError(true)}
                    className="w-full h-[500px] rounded-lg border-0"
                  />
                ) : (
                  <img
                    src={certificateFile}
                    alt={certificate.title}
                    onError={() => setFileError(true)}
                    className="max-h-[500px] w-auto object-contain rounded-lg shadow-2xl"
                  />
                )}
              </div>
            ) : (
              /* Verified Digital Certificate Summary Card */
              <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#11192b] via-[#0d1424] to-[#090e1a] border-4 border-amber-500/30 text-center space-y-6 shadow-2xl overflow-hidden select-none">
                
                {/* Decorative Corners */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400/50"></div>
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400/50"></div>
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400/50"></div>
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400/50"></div>

                {/* Badge */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/20">
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-amber-400">
                      <Award className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-400 font-mono">
                    Official Certificate of Achievement
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-2">
                    {certificate.title}
                  </h2>
                  <p className="text-xs text-sky-400 font-medium">Presented for Outstanding Technical Excellence</p>
                </div>

                <div className="py-2 border-y border-slate-800/80 max-w-md mx-auto space-y-1">
                  <div className="text-xs text-slate-400 uppercase tracking-wider">This credential belongs to</div>
                  <div className="text-2xl font-extrabold text-gradient-accent font-serif tracking-wide py-1">
                    RITU
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                    {certificate.description}
                  </p>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/60 text-xs">
                  <div className="text-left space-y-1">
                    <div className="text-[10px] text-slate-500 font-mono uppercase">Issuing Organization</div>
                    <div className="font-semibold text-slate-200 flex items-center space-x-1">
                      <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate">{certificate.issuer}</span>
                    </div>
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-[10px] text-slate-500 font-mono uppercase">Issue Date</div>
                    <div className="font-semibold text-slate-200 flex items-center justify-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{certificate.date || "2026"}</span>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1 text-right space-y-1">
                    <div className="text-[10px] text-slate-500 font-mono uppercase">Status</div>
                    <div className="font-semibold text-emerald-400 flex items-center justify-end space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Verified Active</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Information Summary Box */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-semibold text-white">Certificate Information</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono text-[10px]">
                  {certificate.type || "Certificate"}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {certificate.description}
              </p>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-slate-800 bg-[#0b111e] flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              Portfolio Verified Certificate • Ritu
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
