import React, { useState, useEffect } from 'react';
import { User as UserType } from '../types';
import { LayoutDashboard, BookOpen, MessageSquare, LogOut, Bell, Zap, TrendingUp, HelpCircle, User as UserIcon, Shield, Clock, Award } from 'lucide-react';
import { Footer } from '../components/Layout';
import { motion, AnimatePresence } from 'motion/react';

interface PerformanceMetric {
  label: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
}

export default function EmployeePortal({ user, onLogout }: { user: UserType, onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'resources' | 'comms'>('home');
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [loadingMetrics, setLoadingMetrics] = useState(false);

  useEffect(() => {
    if (activeTab === 'profile') {
      setLoadingMetrics(true);
      // Mock API Fetch
      setTimeout(() => {
        setMetrics([
          { label: 'Quality Score', value: '96.4%', trend: 'UP +1.2%', icon: <Shield size={16} /> },
          { label: 'Attendance', value: '98.5%', trend: 'STABLE', icon: <Clock size={16} /> },
          { label: 'Conversion Rate', value: '14.2%', trend: 'UP +0.8%', icon: <Zap size={16} /> },
          { label: 'Peer Ranking', value: '#12', trend: 'TOP 5%', icon: <Award size={16} /> }
        ]);
        setLoadingMetrics(false);
      }, 800);
    }
  }, [activeTab]);

  const sidebarLinks = [
    { id: 'home', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'profile', label: 'My Profile', icon: <UserIcon size={18} /> },
    { id: 'resources', label: 'Resources', icon: <BookOpen size={18} /> },
    { id: 'comms', label: 'Communication', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-obsidian">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-950/90 border-r border-white/5 flex flex-col py-10 z-20">
        <div className="px-8 mb-12">
          <h1 className="text-gold-bright font-black italic text-2xl tracking-tighter uppercase leading-none">Employee</h1>
          <p className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-2">Personal Command</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            {sidebarLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center space-x-4 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${
                    activeTab === item.id 
                      ? 'bg-gold-bright/10 text-gold-bright border-l-4 border-gold-bright' 
                      : 'text-slate-500 hover:text-cyan'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-8 mt-auto">
          <button onClick={onLogout} className="flex items-center gap-2 text-[10px] font-bold text-slate-600 hover:text-red-400 uppercase tracking-widest mb-8">
            <LogOut size={14} /> logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 lg:p-12 relative flex flex-col min-h-screen">
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
              >
                <header className="flex justify-between items-start mb-16">
                  <div>
                    <span className="text-cyan text-[10px] uppercase font-black tracking-widest flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" /> Kinetic Status: Active
                    </span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Welcome, {user.name}</h2>
                  </div>
                  <div className="flex gap-4">
                    <div className="zealous-glass px-6 py-4 flex items-center gap-4">
                      <div>
                        <p className="text-[8px] uppercase font-bold text-slate-500 mb-1">Assigned Unit</p>
                        <p className="text-sm font-black text-gold-bright">ALPHA-9-SEC</p>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div>
                        <p className="text-[8px] uppercase font-bold text-slate-500 mb-1">Shift Timer</p>
                        <p className="text-sm font-mono text-white">04:22:15</p>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="zealous-card p-10">
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-6">Daily Target</p>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-5xl font-black text-white">88%</span>
                      <span className="text-xs font-bold text-cyan mb-2">UP +4%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan w-[88%]" />
                    </div>
                  </div>
                  <div className="zealous-card p-10">
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-6">Call Volume</p>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-5xl font-black text-white">124</span>
                      <span className="text-xs font-bold text-slate-500 mb-2">OF 150</span>
                    </div>
                    <p className="text-[10px] text-slate-600 font-mono tracking-widest">NEXT MILESTONE: +26</p>
                  </div>
                  <div className="zealous-card p-10 border-l-2 border-gold-bright">
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-6">CSAT Score</p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full border-4 border-gold-bright flex items-center justify-center">
                        <span className="text-2xl font-black">4.9</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white uppercase tracking-tight">Top Performance</p>
                        <p className="text-[8px] text-gold-bright uppercase tracking-widest font-black">Tier 1 Elite</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Board */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <section className="zealous-card p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold uppercase tracking-tight">Operational Resources</h3>
                      <HelpCircle size={18} className="text-slate-700" />
                    </div>
                    <div className="space-y-4">
                      {[
                        { title: 'Inbound Verification Script', version: 'v2.4', color: 'text-cyan' },
                        { title: 'Compliance Guidelines 2024', version: 'v1.1', color: 'text-gold-bright' },
                        { title: 'Troubleshooting Node A-12', version: 'v4.0', color: 'text-slate-400' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer group transition-all">
                          <div className="flex items-center gap-4">
                            <Zap size={16} className={item.color} />
                            <span className="text-sm font-medium">{item.title}</span>
                          </div>
                          <span className="text-[8px] font-mono tracking-widest text-slate-600">{item.version}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="zealous-card p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold uppercase tracking-tight">Kinetic Feed</h3>
                      <Bell size={18} className="text-gold-bright animate-pulse" />
                    </div>
                    <div className="space-y-6">
                      {[
                        { from: 'Floor Manager', msg: 'Sync all active protocols at 14:00.', time: '12:45 PM', urgent: true },
                        { from: 'Team Lead', msg: 'Excellent handle time on last escalation.', time: '11:20 AM', urgent: false }
                      ].map((msg, i) => (
                        <div key={i} className={`p-4 rounded-lg relative ${msg.urgent ? 'bg-red-500/5 border-l-2 border-red-500' : 'bg-white/5 border-l-2 border-cyan'}`}>
                          <p className="text-[10px] font-black uppercase text-slate-400 mb-2">{msg.from}</p>
                          <p className="text-xs text-white leading-relaxed">{msg.msg}</p>
                          <span className="absolute bottom-2 right-4 text-[8px] font-mono text-slate-700 uppercase tracking-widest">{msg.time}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
                className="max-w-4xl"
              >
                <header className="mb-12">
                  <span className="text-gold-bright text-[10px] uppercase font-black tracking-widest mb-2 block">
                    Identity Protocol
                  </span>
                  <h2 className="text-5xl font-black uppercase tracking-tighter">My Profile</h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Profile Details */}
                  <div className="lg:col-span-1">
                    <div className="zealous-card p-8 flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full bg-gold-bright/10 border-2 border-gold-bright flex items-center justify-center mb-6">
                        <UserIcon size={64} className="text-gold-bright" />
                      </div>
                      <h3 className="text-2xl font-black uppercase mb-1">{user.name}</h3>
                      <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-6">{user.role}</p>
                      <div className="w-full space-y-4 border-t border-white/5 pt-6 text-left">
                        <div>
                          <p className="text-[8px] uppercase font-bold text-slate-500 mb-1">Employee ID</p>
                          <p className="text-xs font-mono text-white">{user.id}</p>
                        </div>
                        <div>
                          <p className="text-[8px] uppercase font-bold text-slate-500 mb-1">Status</p>
                          <p className="text-xs font-bold text-green-400 uppercase tracking-tight">Active Duty</p>
                        </div>
                        <div>
                          <p className="text-[8px] uppercase font-bold text-slate-500 mb-1">Clearance</p>
                          <p className="text-xs font-bold text-white uppercase tracking-tight">Level 3 (Operational)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="lg:col-span-2">
                    <section className="zealous-card p-8 h-full">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold uppercase tracking-tight">Performance Statistics</h3>
                        <TrendingUp size={18} className="text-cyan" />
                      </div>

                      {loadingMetrics ? (
                        <div className="flex flex-col items-center justify-center h-64 gap-6">
                          <div className="relative">
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                              className="w-12 h-12 border-2 border-gold-bright/20 border-t-gold-bright rounded-full"
                            />
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 bg-gold-bright/10 rounded-full -z-10"
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-1">Synchronizing Node</p>
                            <motion.p 
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="text-[8px] font-mono text-cyan uppercase tracking-widest"
                            >
                              Fetching Performance Matrix...
                            </motion.p>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {metrics.map((metric, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-white/5 p-6 border border-white/5 hover:border-gold-bright/30 transition-all"
                            >
                              <div className="flex items-center gap-3 mb-4">
                                <div className="text-gold-bright">{metric.icon}</div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{metric.label}</span>
                              </div>
                              <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-black text-white">{metric.value}</span>
                                <span className="text-[8px] font-bold text-cyan uppercase tracking-tighter">{metric.trend}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      <div className="mt-8 p-6 bg-gold-bright/5 border border-gold-bright/20 rounded-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 bg-gold-bright rounded-full">
                            <Award size={16} className="text-obsidian" />
                          </div>
                          <h4 className="text-sm font-black uppercase">Quarterly Commendation</h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed italic">
                          "Consistently demonstrating high-velocity engagement and adherence to compliance protocols. A model for the Alpha-9 Unit."
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'resources' && (
              <motion.div
                key="resources"
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
                className="py-20 text-center"
              >
                <HelpCircle size={48} className="mx-auto text-slate-700 mb-6" />
                <h3 className="text-2xl font-black uppercase mb-2">Resource Repository</h3>
                <p className="text-slate-500 max-w-md mx-auto italic text-sm">
                  Strategic documentation and operational scripts are being synchronized with your local terminal.
                </p>
              </motion.div>
            )}

            {activeTab === 'comms' && (
              <motion.div
                key="comms"
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
                className="py-20 text-center"
              >
                <MessageSquare size={48} className="mx-auto text-slate-700 mb-6" />
                <h3 className="text-2xl font-black uppercase mb-2">Tactical Comms</h3>
                <p className="text-slate-500 max-w-md mx-auto italic text-sm">
                  Secure messaging channels are currently encrypted. Please await further authorization.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Footer />
      </main>
    </div>
  );
}
