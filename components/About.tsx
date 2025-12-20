import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, GraduationCap, Zap, Code2, ShieldCheck, User,
  Terminal, BarChart3, Brain, Workflow, Database, Layers, GitBranch, Table, 
  Target, LineChart, Layout, Cpu, Coffee, Presentation, Network, Timer, 
  Split, RefreshCw, Binary, Award, Calendar, BookOpen, Heart, Users, Mic,
  ChevronRight, ExternalLink
} from 'lucide-react';
import { EDUCATION_DATA, EXPERIENCE_DATA, SKILLS_DATA, CERTIFICATIONS, LEADERSHIP_DATA, PUBLICATION_DATA } from '../constants';

const CategoryIconMap: Record<string, React.ReactNode> = {
  "Programming": <Terminal size={22} />,
  "Data Viz & Tools": <BarChart3 size={22} />,
  "Machine Learning": <Brain size={22} />,
  "Methodologies": <Workflow size={22} />,
};

const SkillIconMap: Record<string, React.ReactNode> = {
  "Python (pandas, NumPy)": <Code2 size={12} />,
  "R": <LineChart size={12} />,
  "TypeScript": <Binary size={12} />,
  "SQL": <Database size={12} />,
  "Java": <Coffee size={12} />,
  "C": <Cpu size={12} />,
  "Power BI (DAX)": <BarChart3 size={12} />,
  "Tableau": <Layout size={12} />,
  "Google Data Studio": <Presentation size={12} />,
  "Excel": <Table size={12} />,
  "Git": <GitBranch size={12} />,
  "Regression": <LineChart size={12} />,
  "Classification (XGBoost)": <Target size={12} />,
  "Clustering": <Network size={12} />,
  "Time Series (ARIMA)": <Timer size={12} />,
  "ETL Pipelines": <Layers size={12} />,
  "A/B Testing": <Split size={12} />,
  "Predictive Analytics": <Cpu size={12} />,
  "Agile/Scrum": <RefreshCw size={12} />,
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <section className="pt-48 pb-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[9rem] font-display font-black text-white tracking-tighter uppercase mb-10 leading-none"
          >
            About <span className="text-gradient">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Merging technical analytical rigor with visionary leadership to solve complex challenges at scale.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-4 space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 rounded-[48px] glass-card border-white/5 relative overflow-hidden group"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-cobalt/5 blur-[100px] rounded-full group-hover:bg-brand-cobalt/10 transition-colors duration-1000" />
                <div className="w-16 h-16 bg-brand-cobalt/10 rounded-2xl flex items-center justify-center text-brand-cobalt mb-10 group-hover:scale-110 transition-all">
                  <User size={32} />
                </div>
                <h3 className="text-3xl font-display font-black text-white mb-8 uppercase tracking-tight">Summary</h3>
                <p className="text-slate-400 font-medium leading-relaxed text-lg">
                  I am a passionate professional with a strong interest in leadership, public speaking, and making a social impact through NGO work. Highly analytical and data-oriented, I leverage a unique blend of technical expertise and communication skills to drive meaningful outcomes in both social and professional settings.
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                  <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500">Leadership Focused</div>
                  <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500">Data Driven</div>
                </div>
              </motion.div>

              <div className="space-y-8">
                <div className="px-6">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">Expertise Stack</h4>
                  <div className="h-1 w-12 bg-brand-cobalt/30 rounded-full" />
                </div>
                {SKILLS_DATA.map((cat, i) => (
                  <motion.div
                    key={cat.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[40px] glass-card glass-card-hover group border-white/5"
                  >
                    <div className="flex items-center gap-5 mb-10">
                      <div className="p-4 bg-brand-cobalt/10 rounded-2xl text-brand-cobalt group-hover:bg-brand-cobalt group-hover:text-white transition-all duration-500 shadow-xl">
                        {CategoryIconMap[cat.category] || <Zap size={22} />}
                      </div>
                      <h5 className="font-black text-white text-[10px] uppercase tracking-[0.3em]">{cat.category}</h5>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map(skill => (
                        <span key={skill} className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-white/5 rounded-2xl text-[10px] font-black text-slate-400 uppercase hover:text-brand-cobalt hover:border-brand-cobalt/30 hover:bg-white/10 transition-all cursor-default">
                          {SkillIconMap[skill]}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-32 lg:pt-8">
              {/* Experience Section */}
              <div className="space-y-16">
                <h2 className="text-5xl font-display font-black text-white uppercase flex items-center gap-8">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 border border-emerald-500/20 shadow-2xl">
                    <Briefcase size={28} />
                  </div>
                  Professional Path
                </h2>
                <div className="space-y-12 relative">
                  <div className="absolute left-8 top-12 bottom-12 w-px bg-white/5" />
                  {EXPERIENCE_DATA.map((exp) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative pl-24 group"
                    >
                      <div className="absolute left-[26px] top-2 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-emerald-500 z-10 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                      <div className="p-12 rounded-[56px] glass-card border-white/5 glass-card-hover">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                          <div>
                            <h3 className="text-3xl font-black text-white leading-tight group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                            <div className="flex items-center gap-3 mt-3">
                                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[11px]">{exp.company}</p>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[11px]">{exp.location}</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] bg-white/10 border border-white/10 px-8 py-3.5 rounded-2xl shadow-xl">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="space-y-5">
                          {exp.points.map((pt, i) => (
                            <li key={i} className="flex gap-6 text-slate-400 font-medium leading-relaxed text-lg group/li">
                              <span className="mt-3 w-2 h-2 rounded-full bg-emerald-500/30 group-hover/li:bg-emerald-500 transition-colors shrink-0"></span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Leadership & Impact */}
              <div className="space-y-16">
                <h2 className="text-5xl font-display font-black text-white uppercase flex items-center gap-8">
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-3xl flex items-center justify-center text-indigo-500 border border-indigo-500/20 shadow-2xl">
                    <Users size={28} />
                  </div>
                  Leadership
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {LEADERSHIP_DATA.map((lead, idx) => (
                    <motion.div
                      key={lead.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-12 rounded-[48px] glass-card border-white/5 glass-card-hover bg-white/[0.02]"
                    >
                      <div className="flex items-center justify-between mb-10">
                        <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                          {lead.role.includes("Speaker") ? <Mic size={24} /> : <ShieldCheck size={24} />}
                        </div>
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">{lead.period}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-indigo-400 transition-colors uppercase">{lead.role}</h3>
                      <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10">{lead.organization}</p>
                      <ul className="space-y-4">
                        {lead.points.map((pt, i) => (
                          <li key={i} className="text-slate-400 text-base font-medium leading-relaxed flex gap-4">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/50 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-16">
                <h2 className="text-5xl font-display font-black text-white uppercase flex items-center gap-8">
                  <div className="w-16 h-16 bg-brand-cobalt/10 rounded-3xl flex items-center justify-center text-brand-cobalt border border-brand-cobalt/20 shadow-2xl">
                    <GraduationCap size={28} />
                  </div>
                  Education
                </h2>
                <div className="space-y-10">
                  {EDUCATION_DATA.map((edu) => (
                    <motion.div
                      key={edu.id}
                      whileHover={{ x: 10 }}
                      className="p-12 rounded-[56px] glass-card border-white/5 relative overflow-hidden group"
                    >
                      <h3 className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-brand-cobalt transition-colors uppercase">{edu.school}</h3>
                      <p className="text-slate-500 font-bold text-[11px] mb-10 uppercase tracking-[0.2em]">{edu.degree}</p>
                      <div className="flex justify-between items-center text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] pt-8 border-t border-white/5">
                        <span>{edu.period}</span>
                        <span>{edu.location}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications Section - NEW CARD STYLE */}
              <div className="space-y-16">
                <h2 className="text-5xl font-display font-black text-white uppercase flex items-center gap-8">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-3xl flex items-center justify-center text-brand-teal border border-brand-teal/20 shadow-2xl">
                    <Award size={28} />
                  </div>
                  Certifications
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {CERTIFICATIONS.map((cert, index) => (
                    <motion.a
                      key={cert.id}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 rounded-[28px] glass-card border-white/5 hover:border-brand-teal/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                    >
                      {/* Sidebar Accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-teal opacity-20 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex items-center gap-6 md:gap-8">
                        <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal shrink-0 group-hover:rotate-[360deg] transition-transform duration-700">
                          <ShieldCheck size={28} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-brand-teal transition-colors tracking-tight uppercase">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{cert.issuer}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{cert.date}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 md:mt-0 flex items-center gap-4 text-[10px] font-black text-brand-teal uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all">
                        <span>Verify Credential</span>
                        <ExternalLink size={14} />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;