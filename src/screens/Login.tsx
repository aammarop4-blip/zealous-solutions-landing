import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Smartphone, Monitor, Home, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { User } from '../types';

export default function Login({ onLogin }: { onLogin: (user: User) => void }) {
  const [formData, setFormData] = useState({ id: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const resp = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await resp.json();

      if (data.success) {
        onLogin({
           id: formData.id,
           name: formData.id.startsWith('ADM') ? 'Admin User' : 'Employee Name',
           role: data.user.role
        });
        
        if (data.user.role === 'ADMIN' || data.user.role === 'SUPER_ADMIN') {
          navigate('/dashboard');
        } else {
          navigate('/employee');
        }
      } else {
        setError('Invalid Credentials');
      }
    } catch (err) {
      setError('Invalid Credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-8 left-8 z-20">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-gold transition-colors"
        >
          <Home size={14} /> Back to Main Site
        </Link>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4d4635 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="zealous-glass p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-black tracking-tight uppercase mb-2">
              <span className="text-gold">Zealous</span> <span className="text-white">Solutions</span>
            </h1>
            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-500">Employee Authority Gateway</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Assigned ID</label>
              <input 
                value={formData.id}
                onChange={e => setFormData({ ...formData, id: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 p-5 text-white font-mono placeholder:text-slate-800 outline-none focus:border-cyan transition-colors"
                placeholder="EMP-XXX-XXX or ADM-XXX"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Password</label>
              <input 
                type="password"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 p-5 text-white placeholder:text-slate-800 outline-none focus:border-cyan transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-red-500/10 border border-red-500/20 p-4 rounded flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-red-500" />
                  <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest leading-none">
                    {error}
                  </span>
                </div>
                <button 
                  type="button"
                  onClick={() => setError('')}
                  className="text-red-500/50 hover:text-red-500 transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}

            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                  <span className="text-[8px] uppercase font-bold text-slate-600 tracking-widest">Safari Compatible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={12} className="text-gold-bright" />
                  <span className="text-[8px] uppercase font-bold text-slate-600 tracking-widest">Secured Node</span>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="zealous-button-primary w-full py-5 flex items-center justify-center gap-4 text-xs"
              >
                {loading ? 'Initializing...' : 'Secure Login'} <Lock size={16} />
              </button>
            </div>
          </form>

          <p className="text-[9px] text-center text-slate-600 uppercase tracking-widest leading-relaxed mt-10">
            Access restricted to authorized personnel only.<br />
            Unauthorized attempts are logged and reported.
          </p>
        </div>
        
        {/* Decorative IDs */}
        <div className="flex justify-between mt-12 px-6">
           <div className="flex items-center gap-4 text-slate-700">
             <Smartphone size={16} />
             <Monitor size={16} />
           </div>
           <div className="text-[10px] font-mono text-slate-800 tracking-widest">#A-884950 // 22:05m</div>
        </div>
      </motion.div>
    </div>
  );
}
