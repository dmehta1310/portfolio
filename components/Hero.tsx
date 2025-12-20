import React, { useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const MagneticButton: React.FC<{ children: React.ReactNode, className?: string, to?: string, href?: string }> = ({ children, className, to, href }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const content = (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="magnetic-wrap"
    >
      {to ? <Link to={to}>{content}</Link> : <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-cobalt/10 border border-brand-cobalt/20 text-brand-cobalt font-black tracking-[0.4em] uppercase text-[9px] backdrop-blur-2xl">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cobalt animate-pulse"></span>
            Leader • Speaker • Data Strategist
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-10"
        >
          <h1 className="text-7xl md:text-[10rem] font-display font-black text-white tracking-tighter leading-[0.8] uppercase flex flex-col items-center">
            <span>Dhruvi</span>
            <span className="text-gradient">Mehta</span>
          </h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-teal rounded-full blur-sm opacity-50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-400 text-base md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Leveraging <span className="text-white font-bold">leadership</span>, <span className="text-white font-bold">communication</span>, and <span className="text-white font-bold">data intelligence</span> to drive meaningful outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton 
            to="/projects"
            className="group relative inline-flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-[20px] font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-brand-cobalt hover:text-white hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]"
          >
            <span>Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          
          <MagneticButton
            href="#"
            className="group inline-flex items-center gap-4 glass-card border-white/10 text-white px-10 py-5 rounded-[20px] font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-white/10 hover:border-white/20"
          >
            <span>Resume</span>
            <Download size={16} className="group-hover:translate-y-1 transition-transform text-brand-cobalt" />
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-10"
        >
          {[
            { icon: Github, link: SOCIAL_LINKS.github },
            { icon: Linkedin, link: SOCIAL_LINKS.linkedin },
            { icon: Mail, link: `mailto:${SOCIAL_LINKS.email}` }
          ].map((item, idx) => (
            <motion.a 
              key={idx}
              href={item.link} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-slate-500 hover:text-white transition-all p-2"
            >
              <item.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;