import React, { useState } from 'react';
import { Navbar, Footer } from '../components/Layout';
import { User } from '../types';
import { TRAINING_MODULES } from '../constants';
import { motion } from 'motion/react';
import { Play, Lock, CheckCircle, ShieldAlert, Zap, BarChart3 } from 'lucide-react';

export default function TrainingModule({ user }: { user: User }) {
  const [activeModuleId, setActiveModuleId] = useState('mva');

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">MVA Training Module</h1>
            <p className="text-slate-400 max-w-2xl">Advanced kinetic authority protocols for high-performance assessment.</p>
          </div>
          <div className="hidden lg:flex items-center space-x-6 border-l-2 border-cyan pl-6">
            <div className="text-right">
              <p className="text-[8px] uppercase tracking-widest text-slate-500 font-bold mb-1">Training Identity</p>
              <p className="text-xs font-bold text-gold-bright uppercase">{user.name}</p>
            </div>
            <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded border border-white/10">
              <Zap size={18} className="text-cyan" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Viewer */}
          <div className="lg:col-span-8 space-y-6">
            <div className="zealous-card overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-white/5 z-20">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                  className="h-full bg-cyan shadow-[0_0_10px_rgba(0,229,255,0.8)]"
                />
              </div>
              <div className="aspect-video bg-black relative flex items-center justify-center">
                 <img 
                  src="https://picsum.photos/seed/training/1280/720" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                  alt="Training Video"
                />
                <button className="relative z-10 w-20 h-20 bg-gold-bright/20 backdrop-blur-xl border-2 border-gold-bright/50 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play size={32} className="text-gold-bright fill-current ml-2" />
                </button>
                <div className="absolute top-6 left-6 flex space-x-3">
                  <div className="bg-black/80 px-3 py-1 border-l-2 border-cyan flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">Live Telemetry</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold uppercase tracking-tight">Protocol 04: Motor Vehicle Authority Standards</h3>
                  <span className="text-xs font-mono text-cyan">08:45 / 12:00</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '72%' }}
                    className="h-full bg-gradient-to-r from-gold to-gold-bright"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="zealous-glass p-8">
                <h4 className="text-cyan text-[10px] font-black uppercase tracking-[0.2em] mb-4">Module Objectives</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  This session covers the essential compliance frameworks required for the Zealous Solutions assessment engine.
                </p>
              </div>
              <div className="zealous-glass p-8 flex items-center justify-between">
                <div>
                  <h4 className="text-gold-bright text-[10px] font-black uppercase tracking-[0.2em] mb-2">Completion Badge</h4>
                  <p className="text-xs text-white font-bold">MVA Tier-2 Associate</p>
                </div>
                <BarChart3 className="text-gold-bright" size={32} />
              </div>
            </div>
          </div>

          {/* Sidebar Modules */}
          <div className="lg:col-span-4 space-y-6">
            <div className="zealous-card p-6">
               <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-6">Current Progress</div>
               <div className="flex items-end gap-2 mb-6">
                 <span className="text-6xl font-black text-cyan">64%</span>
                 <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">Assessment Ready</span>
               </div>
               <button className="zealous-button-primary w-full text-sm">Start Assessment</button>
            </div>

            <div className="zealous-card overflow-hidden border-l-4 border-gold-bright">
              <div className="p-6 bg-gold-bright/5 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xs font-black uppercase tracking-widest text-gold-bright">Curriculum Hierarchy</h3>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Phase II</span>
              </div>
              <div className="divide-y divide-white/5">
                {TRAINING_MODULES.map((mod, i) => (
                  <motion.div 
                    key={mod.id}
                    whileHover={{ x: 5 }} 
                    className={`p-5 flex items-center justify-between transition-all duration-300 relative overflow-hidden group ${
                      mod.status === 'in-progress' 
                        ? 'bg-gold-bright/10 border-l-2 border-gold-bright' 
                        : mod.status === 'locked' 
                          ? 'opacity-40 grayscale pointer-events-none' 
                          : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-8 h-8 flex items-center justify-center text-[10px] font-black border ${
                        mod.status === 'completed' ? 'text-cyan border-cyan/50 bg-cyan/5' : 'text-slate-500 border-white/10'
                      }`}>
                        {i + 1 < 10 ? `0${i+1}` : i+1}
                      </div>
                      <div>
                        <p className={`text-sm font-black tracking-tight ${
                          mod.status === 'in-progress' ? 'text-gold-bright' : 'text-white'
                        }`}>{mod.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-[9px] font-bold uppercase tracking-widest ${
                            mod.status === 'in-progress' ? 'text-gold-bright' : 'text-slate-600'
                          }`}>
                            {mod.status === 'in-progress' ? 'Active Protocol' : mod.status}
                          </span>
                          {mod.status === 'in-progress' && (
                            <span className="w-1 h-1 rounded-full bg-gold-bright animate-pulse" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10">
                      {mod.status === 'completed' && <CheckCircle size={16} className="text-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]" />}
                      {mod.status === 'locked' && <Lock size={16} className="text-slate-700" />}
                      {mod.status === 'in-progress' && <div className="w-2 h-2 rounded-full bg-gold-bright shadow-[0_0_10px_#D4AF37] animate-ping" />}
                    </div>
                    {mod.status === 'in-progress' && (
                       <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gold-bright/20 to-transparent pointer-events-none" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
