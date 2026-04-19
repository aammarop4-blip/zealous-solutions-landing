import React, { useState } from 'react';
import { Navbar, Footer } from '../components/Layout';
import { AVAILABLE_JOBS } from '../constants';
import { Job } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Clock, ShieldCheck, ChevronRight, Zap } from 'lucide-react';

export default function JobPortal() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(AVAILABLE_JOBS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cnic: '',
    city: '',
    experience: '',
    proficiency: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value) {
      if (name === 'cnic') {
        error = "ID Card (CNIC) is required protocol.";
      } else {
        error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required protocol.`;
      }
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Invalid email syntax detected.';
    } else if (name === 'phone' && value.length < 8) {
      error = 'Phone number length insufficient.';
    } else if (name === 'cnic' && !/^\d{5}-\d{7}-\d{1}$/.test(value)) {
      error = 'CNIC format mismatch. Format: XXXXX-XXXXXXX-X';
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    // Mimic API delay
    setTimeout(() => {
      // Logic for auto-email would be here
    }, 1000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      cnic: '',
      city: '',
      experience: '',
      proficiency: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-4">
            <span className="text-gold-bright">Careers</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Join the elite force at Zealous Solutions. We are scouting for high-impact professionals 
            ready to command the future of operational intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Jobs List */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan" /> Open Commands
            </h2>
            {AVAILABLE_JOBS.map((job, idx) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onClick={() => setSelectedJob(job)}
                whileHover={{ 
                  scale: selectedJob?.id === job.id ? [1.03, 1.045, 1.03] : 1.02, 
                  x: selectedJob?.id === job.id ? 0 : 5,
                  boxShadow: selectedJob?.id === job.id 
                    ? ["0 0 20px rgba(212,175,55,0.15)", "0 0 35px rgba(212,175,55,0.3)", "0 0 20px rgba(212,175,55,0.15)"] 
                    : "0 0 10px rgba(255,255,255,0.05)",
                  transition: {
                    scale: selectedJob?.id === job.id ? { repeat: Infinity, duration: 2.5, ease: "easeInOut" } : { duration: 0.3 },
                    boxShadow: selectedJob?.id === job.id ? { repeat: Infinity, duration: 2.5, ease: "easeInOut" } : { duration: 0.3 },
                    x: { duration: 0.3 }
                  }
                }}
                className={`cursor-pointer zealous-card p-6 border-l-4 transition-all relative overflow-hidden ${
                  selectedJob?.id === job.id 
                    ? 'border-gold-bright bg-gold-bright/10 shadow-[0_0_30px_rgba(212,175,55,0.2)]' 
                    : 'border-transparent hover:border-white/20'
                }`}
              >
                {selectedJob?.id === job.id && (
                  <div className="absolute top-0 right-0 h-full w-1.5 bg-gold-bright" />
                )}
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    selectedJob?.id === job.id ? 'text-gold-bright' : 'text-cyan'
                  }`}>{job.department}</span>
                  <ChevronRight size={14} className={selectedJob?.id === job.id ? 'text-gold-bright' : 'text-slate-600'} />
                </div>
                <h3 className={`text-xl font-black uppercase mb-4 transition-colors relative z-10 ${selectedJob?.id === job.id ? 'text-gold-bright' : 'text-white'}`}>
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 text-[10px] uppercase font-bold text-slate-500 tracking-wider relative z-10">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                // ... (submitted view is good)
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="zealous-card p-12 text-center"
                >
                  <div className="w-20 h-20 bg-gold-bright/10 text-gold-bright rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={40} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 uppercase">Application Transmitted</h2>
                  <p className="text-slate-400 max-w-md mx-auto mb-8">
                    Personnel Induction Protocol initiated. Check your inbox for the welcome sequence and mandatory screening details.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={resetForm} className="zealous-button-primary px-10">Back to Jobs</button>
                    <button onClick={resetForm} className="zealous-button-secondary">Portal Overview</button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key={selectedJob?.id || 'empty'}
                  initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="zealous-glass p-8 md:p-12 border-t-4 border-gold-bright/20"
                >
                  {selectedJob && (
                    <div className="mb-12 pb-8 border-b border-white/5">
                      <div className="flex items-center gap-3 text-gold-bright text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                        <Zap size={14} /> ACTIVE CALL TO COMMAND
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6">
                        {selectedJob.title}
                      </h2>
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-4 py-3 px-5 bg-white/5 border border-white/10">
                           <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center">
                              <MapPin size={14} className="text-cyan" />
                           </div>
                           <div>
                              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Location</p>
                              <p className="text-xs font-black uppercase">{selectedJob.location}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 py-3 px-5 bg-white/5 border border-white/10">
                           <div className="w-8 h-8 rounded-full bg-gold-bright/10 flex items-center justify-center">
                              <Clock size={14} className="text-gold-bright" />
                           </div>
                           <div>
                              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Type</p>
                              <p className="text-xs font-black uppercase">{selectedJob.type}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 py-3 px-5 bg-white/5 border border-white/10 text-cyan">
                           <ShieldCheck size={14} />
                           <p className="text-[10px] font-black uppercase tracking-widest">Top Secret Clearance</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h3 className="text-2xl font-black uppercase">Application Protocol</h3>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Personnel Induction Protocol v4.0</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-cyan/5 border border-cyan/10 rounded-full text-[10px] font-bold text-cyan">
                      <Clock size={12} /> REAL-TIME SYNC ACTIVE
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8" noValidate>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">Full Name</label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        className={`w-full bg-white/5 border p-4 outline-none transition-all duration-300 ${
                          errors.name ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-gold-bright'
                        }`} 
                        placeholder="e.g. Julian Draxler" 
                      />
                      {errors.name && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">ID Card (CNIC)</label>
                      <input 
                        name="cnic"
                        value={formData.cnic}
                        onChange={handleInputChange}
                        required 
                        className={`w-full bg-white/5 border p-4 outline-none transition-all duration-300 ${
                          errors.cnic ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-gold-bright'
                        }`} 
                        placeholder="XXXXX-XXXXXXX-X" 
                      />
                      {errors.cnic && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.cnic}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">Phone Number</label>
                      <input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                        className={`w-full bg-white/5 border p-4 outline-none transition-all duration-300 ${
                          errors.phone ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-gold-bright'
                        }`} 
                        placeholder="+1 (555) 000-0000" 
                      />
                      {errors.phone && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">Email Address</label>
                      <input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        className={`w-full bg-white/5 border p-4 outline-none transition-all duration-300 ${
                          errors.email ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-gold-bright'
                        }`} 
                        placeholder="j.draxler@zealous.com" 
                      />
                      {errors.email && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">CITY</label>
                      <input 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required 
                        className={`w-full bg-white/5 border p-4 outline-none transition-all duration-300 ${
                          errors.city ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-gold-bright'
                        }`} 
                        placeholder="e.g. Islamabad" 
                      />
                      {errors.city && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.city}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">Experience (Years)</label>
                      <input 
                        name="experience"
                        type="number" 
                        value={formData.experience}
                        onChange={handleInputChange}
                        required 
                        className={`w-full bg-white/5 border p-4 outline-none transition-all duration-300 ${
                          errors.experience ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-gold-bright'
                        }`} 
                        placeholder="5" 
                      />
                      {errors.experience && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.experience}</p>}
                    </div>
                    <div className="md:col-span-2 space-y-2">
                       <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">English Proficiency</label>
                      <select 
                        name="proficiency"
                        value={formData.proficiency}
                        onChange={handleInputChange}
                        required 
                        className={`w-full bg-white/5 border p-4 outline-none transition-all duration-300 appearance-none ${
                          errors.proficiency ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)] text-red-400' : 'border-white/10 focus:border-gold-bright text-slate-400'
                        }`}
                      >
                        <option value="">Select Level</option>
                        <option>Native / Bilingual</option>
                        <option>Full Professional</option>
                        <option>Professional Working</option>
                      </select>
                      {errors.proficiency && <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.proficiency}</p>}
                    </div>
                    
                    <div className="md:col-span-2 pt-6">
                      <button type="submit" className="zealous-button-primary w-full py-5 flex items-center justify-center gap-4">
                        Submit Application <Send size={20} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
