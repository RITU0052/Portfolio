import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileText, CheckCircle2, AlertCircle, Sparkles, Image as ImageIcon } from 'lucide-react';

export const CertificateUploadModal = ({ isOpen, onClose, onAddCertificate }) => {
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [category, setCategory] = useState('Certification');
  const [date, setDate] = useState('2026');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [fileType, setFileType] = useState('image');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setError(null);
    setFile(selectedFile);

    const isPdf = selectedFile.type === 'application/pdf';
    setFileType(isPdf ? 'pdf' : 'image');

    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please provide a certificate title.');
      return;
    }

    setSubmitting(true);

    const newCert = {
      id: `cert-${Date.now()}`,
      title: title.trim(),
      category: category.trim() || 'Certification',
      issuer: issuer.trim() || 'Issuing Authority',
      date: date.trim() || '2026',
      description: description.trim() || 'Verified achievement certificate uploaded to portfolio.',
      type: category.trim() || 'Certification',
      credentialId: `CERT-UP-${Math.floor(100000 + Math.random() * 900000)}`,
      certificateUrl: filePreview || null,
      fileType: fileType,
      isCustom: true
    };

    setTimeout(() => {
      onAddCertificate(newCert);
      setSubmitting(false);
      onClose();
      // Reset form
      setTitle('');
      setIssuer('');
      setDescription('');
      setFile(null);
      setFilePreview(null);
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-[#0e1626] border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-800 bg-[#0b111e] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Upload New Certificate</h3>
                <p className="text-xs text-slate-400">Add custom achievement credentials to your portfolio</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
            
            {/* Certificate File Drag/Select Area */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Upload Certificate Document / Image (PNG, JPG, PDF)
              </label>

              <div className="relative border-2 border-dashed border-slate-700 hover:border-sky-500/50 rounded-xl p-6 text-center bg-slate-900/60 transition-colors cursor-pointer group">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                {filePreview ? (
                  <div className="space-y-2">
                    {fileType === 'pdf' ? (
                      <div className="flex items-center justify-center space-x-2 text-sky-400 font-semibold">
                        <FileText className="w-6 h-6" />
                        <span>{file?.name} (PDF Selected)</span>
                      </div>
                    ) : (
                      <div className="max-h-40 mx-auto overflow-hidden rounded-lg border border-slate-700">
                        <img src={filePreview} alt="Certificate preview" className="max-h-40 mx-auto object-contain" />
                      </div>
                    )}
                    <p className="text-[11px] text-emerald-400 font-medium">✓ File ready for portfolio showcase</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-200 font-semibold">Click to browse file</span> or drag and drop
                    </div>
                    <p className="text-[10px] text-slate-500">Supports PNG, JPG, JPEG, WEBP or PDF documents</p>
                  </div>
                )}
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label htmlFor="cert-title" className="block font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Certificate Title *
              </label>
              <input
                id="cert-title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. AWS Certified Solutions Architect / Python AI Mastery"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="cert-issuer" className="block font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Issuing Organization / Company
                </label>
                <input
                  id="cert-issuer"
                  type="text"
                  value={issuer}
                  onChange={(e) => setIssuer(e.target.value)}
                  placeholder="e.g. Coursera / HackerRank / Google"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="cert-category" className="block font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Category / Type
                </label>
                <select
                  id="cert-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500 transition-all"
                >
                  <option value="Certification">Certification</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Internship">Internship</option>
                  <option value="Competition">Competition</option>
                  <option value="Course Achievement">Course Achievement</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="cert-date" className="block font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Issue Date / Year
                </label>
                <input
                  id="cert-date"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="e.g. 2026 or March 2026"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="cert-desc" className="block font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Short Description
                </label>
                <input
                  id="cert-desc"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Completed advanced AI module & practical assessment"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-all"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Buttons */}
            <div className="pt-2 flex items-center justify-end space-x-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold shadow-glow-indigo transition-all flex items-center space-x-1.5 disabled:opacity-50"
              >
                {submitting ? (
                  <span>Saving...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Add to Portfolio</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
