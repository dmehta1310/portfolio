import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ExternalLink, Github, Database, Monitor, Box, Cpu, Activity, Layers, 
  Zap, Target, TrendingUp, BarChart3, Shield, PieChart, Code2, Link as LinkIcon,
  ChevronRight, ArrowUpRight
} from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const TechIconMap: Record<string, React.ReactNode> = {
  "Python": <Code2 size={12} />,
  "SQL": <Database size={12} />,
  "PostgreSQL": <Database size={12} />,
  "Tableau": <PieChart size={12} />,
  "Power BI": <BarChart3 size={12} />,
  "Excel": <Layers size={12} />,
  "XGBoost": <Cpu size={12} />,
  "Scikit-learn": <Target size={12} />,
  "APIs": <Activity size={12} />,
  "ETL": <TrendingUp size={12} />,
};

const MetricIconMap: Record<string, React.ReactNode> = {
  "database": <Database size={14} />,
  "zap": <Zap size={14} />,
  "target": <Target size={14} />,
  "activity": <Activity size={14} />,
  "trending-up": <TrendingUp size={14} />,
  "bar-chart": <BarChart3 size={14} />,
  "shield": <Shield size={14} />,
  "cpu": <Cpu size={14} />,
};

const TiltCard: React.FC<{ children: React.ReactNode, index: number }> = ({ children, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        perspective: "1500px" 
      }}
      className="group relative flex flex-col h-full rounded-[48px] glass-card border-white/5 hover:border-cyan-500/40 transition-all duration-700 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.9)] overflow-hidden bg-[#070d18]"
    >
      {/* Enhanced Hover Gradient Glow - More Prominent */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-brand-cobalt/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-brand-cobalt/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {children}
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <section className="pt-48 pb-24 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-3xl"
          >
            <Activity size={14} className="animate-pulse" />
            Project Archive v2.5
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[10rem] font-display font-black text-white tracking-tighter uppercase mb-10 leading-[0.8] transition-all"
          >
            Data <br /><span className="text-gradient">Intelligence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A curated showcase of high-impact analytical tools and machine learning systems.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {PROJECTS_DATA.map((project, index) => (
              <TiltCard key={project.id} index={index}>
                <div className="relative h-full flex flex-col p-10 lg:p-14" style={{ transformStyle: "preserve-3d" }}>
                  
                  {/* Image Viewport Header */}
                  <div className="flex justify-between items-center mb-10 opacity-60">
                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                      <span className="text-[11px] font-black text-white/70 uppercase tracking-[0.4em]">SYS_NODE_{project.id.slice(0, 4).toUpperCase()}</span>
                    </div>
                    <LinkIcon size={16} className="text-slate-500" />
                  </div>

                  {/* TECHNICAL VIEWPORT IMAGE */}
                  <div 
                    className="relative h-72 lg:h-80 w-full overflow-hidden rounded-[32px] mb-12 bg-black border border-white/10 group-hover:border-cyan-500/40 transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                    />
                    
                    {/* Scanning Overlay - Faster & Sharper */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div 
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20"
                      />
                    </div>

                    {/* Interactive Command Center */}
                    <div 
                      className="absolute inset-0 bg-[#020617]/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-8 z-10"
                      style={{ transform: "translateZ(100px)" }}
                    >
                      {project.links.demo && (
                        <motion.a 
                          whileHover={{ scale: 1.1, y: -5, backgroundColor: "#22d3ee", color: "#000" }}
                          whileTap={{ scale: 0.9 }}
                          href={project.links.demo} 
                          target="_blank"
                          className="p-6 bg-white/5 border border-white/10 rounded-[30px] text-white shadow-2xl transition-all flex flex-col items-center gap-3"
                        >
                          <ExternalLink size={26} />
                          <span className="text-[9px] font-black uppercase tracking-[0.3em]">Launch</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* CONTENT BODY */}
                  <div className="flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl lg:text-4xl font-display font-black text-white group-hover:text-cyan-400 transition-all uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <ArrowUpRight size={24} className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                    </div>

                    <p className="text-slate-400 mb-10 text-lg font-medium leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* TELEMETRY METRICS */}
                    <div className="grid grid-cols-2 gap-5 mb-12" style={{ transform: "translateZ(40px)" }}>
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="bg-white/[0.04] border border-white/10 p-5 rounded-[30px] flex items-center gap-4 group-hover:bg-white/[0.06] group-hover:border-cyan-500/30 transition-all shadow-xl">
                          <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                            {MetricIconMap[metric.icon] || <Zap size={16} />}
                          </div>
                          <div>
                            <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-0.5">{metric.label}</div>
                            <div className="text-xl font-black text-white font-display tracking-tight">{metric.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* TECH STACK - ENHANCED VISIBILITY & GLASSMAPPING */}
                    <div className="flex flex-wrap gap-2.5 mt-auto" style={{ transform: "translateZ(20px)" }}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                        >
                          {TechIconMap[tech] || <Cpu size={12} className="text-cyan-500" />}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 text-center"
          >
            <a 
              href="https://github.com/dmehta1310" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 text-slate-500 hover:text-cyan-400 font-black uppercase tracking-[0.6em] text-[10px] transition-all group p-4 border border-transparent hover:border-cyan-500/10 rounded-full"
            >
              Access Complete Repository
              <ChevronRight size={18} className="group-hover:translate-x-3 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
