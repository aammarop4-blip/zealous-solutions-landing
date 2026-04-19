import React, { useState } from 'react';
import { User } from '../types';
import { LayoutDashboard, Users, Presentation, ShieldAlert, Settings, LogOut, Bell, Search, ExternalLink } from 'lucide-react';
import { Footer } from '../components/Layout';
import { motion } from 'motion/react';

export default function AdminDashboard({ user, onLogout }: { user: User, onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('command');

  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'command', label: 'Command', icon: <LayoutDashboard size={18} /> },
    { id: 'recruitment', label: 'Recruitment', icon: <Users size={18} /> },
    { id: 'training', label: 'Training', icon: <Presentation size={18} /> },
    { id: 'security', label: 'Security', icon: <ShieldAlert size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-obsidian">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-950/80 backdrop-blur-2xl border-r border-white/5 flex flex-col py-10">
        <div className="px-8 mb-12">
          <h1 className="text-gold-bright font-black italic text-2xl tracking-tighter uppercase leading-none">Zealous HQ</h1>
          <p className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-2">Kinetic Authority</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-4 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${
                    activeTab === item.id 
                      ? 'bg-gold-bright/10 text-gold-bright border-l-4 border-gold-bright' 
                      : 'text-slate-500 hover:text-cyan hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-8 mt-auto space-y-6">
          <div className="p-4 zealous-glass rounded-lg">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gold-bright/20 rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-black text-gold-bright">ZA</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white uppercase">{user.name}</p>
                  <p className="text-[8px] font-medium text-slate-500 uppercase">{user.role}</p>
                </div>
             </div>
             <button onClick={onLogout} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-red-400 transition-colors uppercase tracking-widest">
               <LogOut size={14} /> logout
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 lg:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Strategic Command</h2>
            <p className="text-cyan text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Level 4 Performance Node</p>
          </div>
          
          <div className="flex-1 max-w-md w-full relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-bright transition-colors" size={18} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Commands, Agents, or Intelligence..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-xs font-bold tracking-wider outline-none focus:border-gold-bright/30 focus:bg-gold-bright/5 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-white transition-colors relative">
               <Bell size={20} />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-obsidian" />
            </button>
            <div className="h-8 w-px bg-white/5" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Protocol Date: <span className="text-white">24 OCT 2024</span></p>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Success Metric', value: '94.2%', color: 'border-gold-bright', trend: '+12.4%' },
            { label: 'Active Nodes', value: '1,204', color: 'border-cyan', trend: 'NOMINAL' },
            { label: 'Application Flow', value: '482', color: 'border-white/20', trend: 'PEAK' },
            { label: 'System Integrity', value: 'Elite', color: 'border-cyan', trend: '99.9%' }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`zealous-glass p-8 border-t-2 ${stat.color}`}
            >
              <div className="flex justify-between items-start mb-2">
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <span className="text-[8px] font-bold text-gold-bright">{stat.trend}</span>
              </div>
              <h3 className="text-3xl font-black tracking-tighter">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Bento Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-8 zealous-card p-10 flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold uppercase tracking-tight">Recruitment Pipeline</h3>
              <button className="text-[10px] text-cyan font-bold uppercase flex items-center gap-2 hover:underline">
                View All <ExternalLink size={12} />
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Julian Draxler', role: 'Support Agent', status: 'MVA Phase I', score: '98%' },
                { name: 'Sarah Koenig', role: 'Security Lead', status: 'Interviewing', score: '14:00 Today' },
                { name: 'Marcus Thorne', role: 'Operations', status: 'New Application', score: '2h ago' }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 bg-slate-900 flex items-center justify-center text-[10px] font-bold text-gold-bright border border-white/5">
                      {row.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{row.name}</p>
                      <p className="text-[10px] text-slate-500 uppercase">{row.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-cyan uppercase mb-1">{row.status}</p>
                    <p className="text-[8px] text-slate-600 font-mono tracking-widest">{row.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="lg:col-span-4 zealous-card p-10 bg-gradient-to-br from-white/5 to-transparent">
             <h3 className="text-xl font-bold uppercase tracking-tight mb-8">Training Overview</h3>
             <div className="space-y-8">
               <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500 mb-2">
                    <span>MVA Phase Current</span>
                    <span className="text-gold-bright">124 active</span>
                  </div>
                  <div className="w-full h-1 bg-white/5">
                    <div className="w-[72%] h-full bg-gold-bright" />
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500 mb-2">
                    <span>Exam Readiness</span>
                    <span className="text-cyan">86 pending</span>
                  </div>
                  <div className="w-full h-1 bg-white/5">
                    <div className="w-[45%] h-full bg-cyan" />
                  </div>
               </div>

               <div className="mt-12 p-6 border-l-2 border-gold-bright bg-white/5">
                  <h4 className="text-[10px] font-black text-gold-bright uppercase tracking-widest mb-2">Operational Insight</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed italic">
                    Candidates in current cohort showing 15% higher accuracy in kinetic theory compared to previous cycles.
                  </p>
               </div>
             </div>
          </section>
        </div>

        <Footer />
      </main>
    </div>
  );
}
