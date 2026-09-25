import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, MessageCircle, Phone } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const whatsappNumber = "917042363267";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    if (!formData.name.trim() || !formData.message.trim()) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Please enter your name and message to send via WhatsApp.'
      });
      return;
    }

    // Build formatted message for WhatsApp
    const messageText = `Hi Ritu! 👋\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim() || 'Not provided'}\n\nMessage:\n${formData.message.trim()}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      // Open WhatsApp chat directly
      window.open(whatsappUrl, '_blank');
      setFormData({ name: '', email: '', message: '' });
    }, 400);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/60 relative glow-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Let's Talk • Direct WhatsApp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Talk & Build <span className="text-gradient-accent">Together</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Have a project idea, opportunity, or question? Send a message directly to my WhatsApp number (<strong className="text-emerald-400">+91 7042363267</strong>) or reach out through social channels.
          </p>
        </div>

        {/* 2 Column Layout: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Ritu, I saw your portfolio and would like to connect!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-r from-emerald-950/30 to-slate-900/80 glass-card-hover flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center space-x-4 min-w-0">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <MessageCircle className="w-6 h-6 animate-pulse" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Direct WhatsApp Chat</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate font-mono">
                    +91 7042363267
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 shrink-0 group-hover:bg-emerald-400 transition-colors">
                Chat Now
              </span>
            </a>

            {/* Email Card */}
            <a
              href="mailto:roshnisharma0052@gmail.com"
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-sky-500/30 glass-card-hover flex items-center space-x-4 group"
            >
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors truncate">
                  roshnisharma0052@gmail.com
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/ritu-sharma-726674314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/30 glass-card-hover flex items-center space-x-4 group"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
                <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                  linkedin.com/in/ritu-sharma
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/RITU0052"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-purple-500/30 glass-card-hover flex items-center space-x-4 group"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400 font-medium">GitHub Repository</div>
                <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                  github.com/RITU0052
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Location</div>
                <div className="text-sm font-semibold text-white">India</div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative">
              
              <div className="mb-6 flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">Send WhatsApp Message</h3>
                  <p className="text-xs text-slate-400">Fill in details and click to open direct WhatsApp conversation</p>
                </div>
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email Address / Phone (Optional)
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Ritu, I saw your portfolio and CareBridge app. I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Form Feedback Messages */}
                {formStatus.error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{formStatus.error}</span>
                  </div>
                )}

                {formStatus.submitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-xs space-y-1">
                    <div className="flex items-center space-x-2 font-bold text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Opening WhatsApp Chat...</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      WhatsApp conversation initiated for number <strong>+91 7042363267</strong>.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 hover:text-white text-sm font-extrabold shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 group active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950 group-hover:text-white transition-colors" />
                  <span>Send Message via WhatsApp (+91 7042363267)</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
