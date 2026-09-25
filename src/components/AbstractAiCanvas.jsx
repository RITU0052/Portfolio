import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Network, Sparkles, Code2 } from 'lucide-react';

export const AbstractAiCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Node particles setup
    const nodeCount = 28;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        pulse: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update & render nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const alpha = (1 - dist / 110) * 0.25;
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
            gradient.addColorStop(0, `rgba(56, 189, 248, ${alpha})`);
            gradient.addColorStop(1, `rgba(139, 92, 246, ${alpha})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node point
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#8b5cf6';
        ctx.shadowBlur = 8;
        ctx.shadowColor = i % 2 === 0 ? '#38bdf8' : '#8b5cf6';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] md:h-[440px] rounded-2xl overflow-hidden glass-card border border-indigo-500/20 shadow-2xl flex items-center justify-center p-6 select-none">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Floating Center Tech Graphic Overlay */}
      <div className="relative z-10 w-full max-w-sm space-y-4">
        {/* Core Center Pulse Hub */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-indigo-400/40 backdrop-blur-md flex items-center justify-center shadow-glow-indigo relative group"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400 to-purple-500 opacity-30 blur group-hover:opacity-60 transition duration-500"></div>
          <Brain className="w-11 h-11 text-sky-300 relative z-10 animate-pulse" />
        </motion.div>

        {/* Floating Interactive Badge Cards */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center space-x-3 shadow-lg"
          >
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-200">Neural Models</div>
              <div className="text-[10px] text-slate-400">Deep Learning</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center space-x-3 shadow-lg"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-200">Data Analytics</div>
              <div className="text-[10px] text-slate-400">SQL & Insights</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center space-x-3 shadow-lg"
          >
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-200">Web Dev</div>
              <div className="text-[10px] text-slate-400">React & REST</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center space-x-3 shadow-lg"
          >
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-200">AI Applications</div>
              <div className="text-[10px] text-slate-400">Practical Solutions</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Glows */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
};
