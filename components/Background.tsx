import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let nodes: Node[] = [];
    let animationFrameId: number;
    let width: number;
    let height: number;
    let dpr = window.devicePixelRatio || 1;
    let time = 0;
    const mouse = { x: -2000, y: -2000, active: false };

    // Professional Sapphire & Teal Theme Spectrum
    const themes = {
      '/': { primary: '#4f46e5', secondary: '#3b82f6', accent: '#6366f1' }, // Deep Blue
      '/about': { primary: '#0d9488', secondary: '#059669', accent: '#14b8a6' }, // Forest Teal
      '/projects': { primary: '#0891b2', secondary: '#06b6d4', accent: '#22d3ee' }, // Tech Cyan
      '/contact': { primary: '#64748b', secondary: '#475569', accent: '#94a3b8' }, // Steel Grey
    };

    const currentTheme = () => themes[location.pathname as keyof typeof themes] || themes['/'];

    class Node {
      gridX: number;
      gridY: number;
      x: number = 0;
      y: number = 0;
      z: number = 0;
      baseX: number;
      baseY: number;
      baseZ: number;
      px: number = 0;
      py: number = 0;
      brightness: number = 0;

      constructor(gridX: number, gridY: number, totalX: number, totalY: number) {
        this.gridX = gridX;
        this.gridY = gridY;
        const spacing = 180;
        this.baseX = (gridX - totalX / 2) * spacing;
        this.baseY = (gridY - totalY / 2) * spacing;
        this.baseZ = 0;
      }

      update(t: number) {
        const wave1 = Math.sin(t + this.gridX * 0.3) * 40;
        const wave2 = Math.cos(t * 0.8 + this.gridY * 0.4) * 30;
        const focalLength = 800;
        
        const tempScale = focalLength / (focalLength + 400);
        const tempPx = (this.baseX * tempScale) + width / 2;
        const tempPy = (this.baseY * tempScale) + height / 2;

        const dx = mouse.x - tempPx;
        const dy = mouse.y - tempPy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 400;
        
        let mouseEffect = 0;
        if (dist < maxDist) {
          mouseEffect = Math.pow(1 - dist / maxDist, 2) * 150;
        }

        this.x = this.baseX;
        this.y = this.baseY;
        this.z = 400 + wave1 + wave2 - mouseEffect;

        const scale = focalLength / (focalLength + this.z);
        this.px = (this.x * scale) + width / 2;
        this.py = (this.y * scale) + height / 2;

        this.brightness = Math.max(0, (1 - this.z / 1000)) * (0.15 + (mouseEffect / 150) * 0.85);
      }

      draw() {
        if (!ctx) return;
        const r = 1.5 * (1 - this.z / 1000) * dpr;
        
        ctx.beginPath();
        ctx.arc(this.px * dpr, this.py * dpr, r, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme().primary;
        ctx.globalAlpha = this.brightness;
        ctx.fill();
        
        if (this.brightness > 0.6) {
          ctx.shadowBlur = 10 * this.brightness;
          ctx.shadowColor = currentTheme().secondary;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      nodes = [];
      const rows = 14;
      const cols = 14;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          nodes.push(new Node(x, y, cols, rows));
        }
      }
    };

    const drawConnections = () => {
      if (!ctx) return;
      ctx.lineWidth = 0.5 * dpr;
      
      const rows = 14;
      const cols = 14;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const n1 = nodes[idx];

          if (x < cols - 1) connect(n1, nodes[idx + 1]);
          if (y < rows - 1) connect(n1, nodes[idx + cols]);
          if (x < cols - 1 && y < rows - 1) connect(n1, nodes[idx + cols + 1]);
        }
      }
    };

    const connect = (n1: Node, n2: Node) => {
      if (!ctx) return;
      const avgZ = (n1.z + n2.z) / 2;
      const alpha = Math.max(0, 1 - avgZ / 1000) * 0.12;
      const interaction = (n1.brightness + n2.brightness) / 2;

      ctx.beginPath();
      ctx.moveTo(n1.px * dpr, n1.py * dpr);
      ctx.lineTo(n2.px * dpr, n2.py * dpr);
      ctx.strokeStyle = currentTheme().primary;
      ctx.globalAlpha = alpha + (interaction * 0.2);
      ctx.stroke();

      if (interaction > 0.5) {
        ctx.strokeStyle = currentTheme().accent;
        ctx.globalAlpha = interaction * 0.15;
        ctx.stroke();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const animate = () => {
      time += 0.012;
      
      // Professional Background Fill
      ctx.fillStyle = '#030712';
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      grad.addColorStop(0, '#040b2e');
      grad.addColorStop(1, '#030712');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => node.update(time));
      drawConnections();
      nodes.forEach(node => node.draw());

      if (mouse.active) {
        ctx.save();
        ctx.scale(dpr, dpr);
        const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
        mouseGrad.addColorStop(0, `${currentTheme().primary}10`);
        mouseGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [location.pathname]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030712]">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default Background;