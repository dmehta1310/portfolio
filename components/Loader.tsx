import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse-slow"></div>
      
      <div className="relative text-center w-full px-6">
        {/* 
           Improved SVG for better fullscreen visibility:
           - Expanded viewBox width (1500) and height (300) to allow characters to breathe.
           - preserveAspectRatio="xMidYMid meet" ensures it scales gracefully.
           - dominantBaseline and textAnchor set for precise centering within the viewport.
        */}
        <svg 
          viewBox="0 0 1500 300" 
          className="w-full max-w-6xl h-auto mx-auto overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="120"
            className="loader-text font-display font-black uppercase"
            style={{
              stroke: "#8b5cf6",
              strokeWidth: "1.5px",
              fill: "transparent",
              letterSpacing: "0.2em"
            }}
          >
            Dhruvi Mehta
          </text>
        </svg>
        
        <div className="flex flex-col items-center mt-12">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "240px" }}
            transition={{ delay: 0.3, duration: 1.5 }}
            className="h-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 mt-8"
          >
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
            <p className="text-white text-[10px] font-black uppercase tracking-[0.5em]">
              Initializing Neural Frame
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;