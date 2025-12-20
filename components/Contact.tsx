import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, Linkedin, Github, CheckCircle, Radio, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Identity must be at least 2 characters.';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Electronic mail is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g., name@domain.com).';
      valid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message stream must be at least 10 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pulse Rings */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0, 0.04, 0] }}
              transition={{ duration: 8, repeat: Infinity, delay: ring * 2.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-cobalt/20 rounded-full"
            />
          ))}
        </div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[5%] text-brand-cobalt/5"
        >
          <Radio size={500} strokeWidth={0.05} />
        </motion.div>
      </div>

      <section className="pt-48 pb-20 relative z-10 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[9rem] font-display font-black text-white tracking-tighter uppercase mb-10 leading-none"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Let's collaborate on data-driven strategies and impactful leadership initiatives.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-start">
            
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-16 rounded-[64px] glass-card glass-card-hover group border-white/5 relative overflow-hidden"
              >
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-brand-cobalt/5 blur-[80px] rounded-full group-hover:bg-brand-cobalt/10 transition-all duration-1000" />
                <div className="w-20 h-20 bg-brand-cobalt/10 rounded-3xl flex items-center justify-center text-brand-cobalt mb-10 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <Mail size={36} />
                </div>
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Direct Communication</h4>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-3xl font-display font-black text-white hover:text-brand-cobalt transition-colors block leading-tight break-all">
                  {SOCIAL_LINKS.email}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-16 rounded-[64px] glass-card glass-card-hover group border-white/5 relative overflow-hidden"
              >
                 <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-slate-500/5 blur-[80px] rounded-full group-hover:bg-slate-500/10 transition-all duration-1000" />
                <div className="w-20 h-20 bg-slate-500/10 rounded-3xl flex items-center justify-center text-slate-400 mb-10 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <MapPin size={36} />
                </div>
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Location Base</h4>
                <p className="text-3xl font-display font-black text-white uppercase leading-tight tracking-tight">{SOCIAL_LINKS.location}</p>
              </motion.div>

              <div className="flex gap-8 pt-12 justify-center lg:justify-start">
                 {[
                   { icon: Linkedin, link: SOCIAL_LINKS.linkedin, color: 'hover:text-brand-cobalt hover:bg-brand-cobalt/10' },
                   { icon: Github, link: SOCIAL_LINKS.github, color: 'hover:text-white hover:bg-white/10' }
                 ].map((social, i) => (
                   <motion.a 
                    key={i}
                    whileHover={{ y: -10, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.link} 
                    target="_blank"
                    className={`p-8 glass-card rounded-[32px] text-slate-500 ${social.color} transition-all border-white/5 bg-white/[0.02] shadow-2xl`}
                   >
                     <social.icon size={30} />
                   </motion.a>
                 ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-16 lg:p-24 rounded-[72px] border-white/5 relative overflow-hidden bg-white/[0.02]"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cobalt/5 blur-[150px] rounded-full pointer-events-none" />
              
              <form onSubmit={handleSubmit} noValidate className="space-y-12 relative z-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] ml-8 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cobalt" />
                    Identity
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-950/50 border ${errors.name ? 'border-red-500/50 focus:ring-red-500/5' : 'border-white/10 focus:border-brand-cobalt focus:ring-brand-cobalt/5'} rounded-[32px] px-10 py-7 text-white outline-none transition-all placeholder:text-slate-800 font-bold text-lg focus:ring-[12px]`}
                    placeholder="Enter your name"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center gap-2 text-red-400 text-[11px] font-black uppercase tracking-wider ml-8"
                      >
                        <AlertCircle size={12} />
                        {errors.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] ml-8 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    Electronic Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-950/50 border ${errors.email ? 'border-red-500/50 focus:ring-red-500/5' : 'border-white/10 focus:border-brand-cobalt focus:ring-brand-cobalt/5'} rounded-[32px] px-10 py-7 text-white outline-none transition-all placeholder:text-slate-800 font-bold text-lg focus:ring-[12px]`}
                    placeholder="Enter your email address"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center gap-2 text-red-400 text-[11px] font-black uppercase tracking-wider ml-8"
                      >
                        <AlertCircle size={12} />
                        {errors.email}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] ml-8 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    Message Stream
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full bg-slate-950/50 border ${errors.message ? 'border-red-500/50 focus:ring-red-500/5' : 'border-white/10 focus:border-brand-cobalt focus:ring-brand-cobalt/5'} rounded-[32px] px-10 py-8 text-white outline-none transition-all placeholder:text-slate-800 font-bold text-lg resize-none focus:ring-[12px]`}
                    placeholder="What project are we building?"
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center gap-2 text-red-400 text-[11px] font-black uppercase tracking-wider ml-8"
                      >
                        <AlertCircle size={12} />
                        {errors.message}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.button
                      key="submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white text-slate-950 font-black uppercase tracking-[0.4em] text-[11px] py-10 rounded-[40px] transition-all flex items-center justify-center gap-6 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)] hover:bg-brand-cobalt hover:text-white"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={24} />
                      ) : (
                        <>
                          <span>Establish Connection</span>
                          <Send size={20} />
                        </>
                      )}
                    </motion.button>
                  ) : (
                    <motion.div
                      key="success-msg"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-full py-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-black uppercase tracking-[0.4em] rounded-[40px] flex items-center justify-center gap-6 shadow-2xl backdrop-blur-3xl"
                    >
                      <CheckCircle size={32} />
                      <span className="text-lg">Packet Delivered</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;