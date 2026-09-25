import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappNumber = "917042363267";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Ritu, I saw your portfolio and would like to talk!")}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-2 bg-[#0d1626] border border-emerald-500/40 text-slate-100 p-3 rounded-2xl shadow-2xl text-xs max-w-xs flex items-start space-x-2 relative"
          >
            <div className="flex-1 space-y-0.5">
              <div className="font-bold text-emerald-400 flex items-center space-x-1">
                <span>Let's Talk on WhatsApp!</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Click to message Ritu directly on <strong>+91 7042363267</strong>
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:bg-emerald-400 transition-colors relative group"
        aria-label="Chat with Ritu on WhatsApp (+91 7042363267)"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-950"></span>
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
};
