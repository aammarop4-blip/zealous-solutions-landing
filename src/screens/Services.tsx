import React from 'react';
import { Navbar, Footer } from '../components/Layout';
import { motion } from 'motion/react';
import { PhoneCall, TrendingUp, HeartPulse, ShieldCheck, Zap, ArrowRight, BarChart3, Database } from 'lucide-react';

const ServiceIcon = ({ icon, color }: { icon: React.ReactNode, color: string }) => (
  <motion.div 
    className="relative"
    animate={{ 
      scale: [1, 1.05, 1],
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    <motion.div 
      className={`absolute inset-0 blur-xl opacity-20 bg-${color === 'gold' ? 'gold' : 'cyan'}`}
      animate={{ 
        scale: [1, 1.5, 1],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    />
    <div className="relative z-10">{icon}</div>
  </motion.div>
);

export default function Services() {
  const serviceCategories = [
    {
      title: "Targeted Lead Generation",
      description: "Identifying and thoroughly vetting high-intent prospects across multiple verticals, ensuring your sales funnel is constantly fueled.",
      icon: <ServiceIcon icon={<ShieldCheck className="text-gold" size={32} />} color="gold" />,
      features: ["Vetting Protocols", "Multi-Vertical Reach", "Funnel Optimization"]
    },
    {
      title: "Inbound Customer Excellence",
      description: "Delivering 24/7 empathetic and efficient support, turning one-time callers into loyal brand advocates.",
      icon: <ServiceIcon icon={<PhoneCall className="text-gold" size={32} />} color="gold" />,
      features: ["24/7 Deployment", "Empathetic Support", "Brand Advocacy"]
    },
    {
      title: "Outbound Sales & Acquisition",
      description: "Executing strategic outbound campaigns driven by a highly proficient team, designed to maximize your ROI.",
      icon: <ServiceIcon icon={<TrendingUp className="text-cyan" size={32} />} color="cyan" />,
      features: ["High-Velocity Sales", "Strategic Outreach", "ROI Intelligence"]
    },
    {
      title: "Specialized Insurance Campaigns",
      description: "Expert handling of US-centric verticals including Medicare, Auto, Home, and Final Expense insurance.",
      icon: <ServiceIcon icon={<HeartPulse className="text-gold" size={32} />} color="gold" />,
      features: ["US-Centric Logic", "Compliance-First", "Risk Assessment"]
    }
  ];

  const operationalTiers = [
    {
      label: "PRECISION ACQUISITION",
      value: "Deploy targeted, data-driven outbound campaigns designed to capture high-intent prospects. We engineer sales funnels with surgical precision to ensure maximum ROI across all your verticals.",
      color: "border-gold/30"
    },
    {
      label: "OMNICHANNEL RETENTION",
      value: "Transform inbound inquiries into long-term brand loyalty. Our specialized agents provide seamless, 24/7 empathetic support and rapid issue resolution, turning every call into a retention opportunity.",
      color: "border-white/10"
    },
    {
      label: "COMPLIANT HEALTH VERTICALS",
      value: "Navigate complex regulatory landscapes with absolute confidence. Our certified teams execute highly compliant, high-converting enrollment campaigns tailored specifically for the healthcare sector.",
      color: "border-cyan/30 shadow-[0_0_20px_rgba(0,229,255,0.05)]"
    },
    {
      label: "TACTICAL RESPONSE SYNDICATE",
      value: "Capitalize on immediate customer needs with our dedicated security lead generation. We instantly connect you with verified prospects actively seeking premium protection solutions.",
      color: "border-white/10"
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      
      {/* Hero Section */}
      <section id="services" className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-cyan text-xs font-black uppercase tracking-[0.5em] mb-4">Operational Architecture</h2>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-none">
              Zealous <span className="text-gold">Solutions</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Transforming fragmented interactions into high-performance revenue protocols. 
              Our service infrastructure is designed for absolute market dominance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="zealous-card p-10 group"
              >
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300">
                      <Zap size={12} className="text-gold" /> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Tiers */}
      <section className="py-24 bg-slate-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black uppercase">Operational <span className="text-gold">Tiers</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {operationalTiers.map((tier, i) => (
              <div key={i} className={`p-8 zealous-glass border-t-4 transition-all hover:scale-105 ${tier.color}`}>
                <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">{tier.label}</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{tier.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 border-b border-white/5 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-cyan text-xs font-black uppercase tracking-[0.4em] mb-4">Strategic Proof</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase">Success <span className="text-gold">Intelligence</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Deploying Zealous's Outbound Precision protocol transformed our acquisition funnel. We saw a 42% increase in verified enrollment leads within the first operational cycle.",
                author: "Jonathan Vance",
                role: "Director of Growth, HealthLink Collective",
                stats: "42% Growth"
              },
              {
                quote: "The Kinetic Authority engagement model is unlike anything in the market. Their team doesn't just call; they command the conversation and deliver absolute conversion dominance.",
                author: "Sarah Sterling",
                role: "Operations Lead, Global Insure Group",
                stats: "98% Resolution"
              },
              {
                quote: "Zealous Solutions installed a high-performance infrastructure that scaled our support capacity by 3x without sacrificing data integrity or quality scores.",
                author: "Michael Chen",
                role: "COO, SecureGuard Systems",
                stats: "3x Capacity"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="zealous-glass p-8 relative flex flex-col justify-between h-full group border-l-2 border-transparent hover:border-gold transition-all duration-500"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="w-1.5 h-1.5 bg-gold rounded-full" />
                    ))}
                  </div>
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.1) + 0.2, duration: 0.6 }}
                    className="text-slate-300 italic leading-relaxed mb-8 text-sm"
                  >
                    "{testimonial.quote}"
                  </motion.p>
                </div>
                
                <div className="border-t border-white/5 pt-6 flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase mb-1">{testimonial.author}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gold font-black uppercase tracking-widest mb-1">Impact</p>
                    <p className="text-xs font-black text-white">{testimonial.stats}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Intelligence Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="zealous-card overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20">
              <h3 className="text-4xl font-black uppercase mb-6 leading-tight">
                Kinetic <br /> Intelligence <span className="text-cyan">Engine</span>
              </h3>
              <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                Our proprietary engine synchronizes every touchpoint with advanced conversion analytics. 
                We don't just provide services; we install a high-performance operational infrastructure 
                into your business model.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-center gap-4">
                  <BarChart3 className="text-gold" size={24} />
                  <span className="text-[10px] font-bold uppercase text-slate-300">Advanced Yield</span>
                </div>
                <div className="flex items-center gap-4">
                  <Database className="text-cyan" size={24} />
                  <span className="text-[10px] font-bold uppercase text-slate-300">Data Integrity</span>
                </div>
              </div>
              <button className="zealous-button-primary flex items-center gap-3">
                Deploy Services <ArrowRight size={16} />
              </button>
            </div>
            <div className="lg:w-1/2 bg-slate-900 flex items-center justify-center p-12 lg:p-20 relative">
               <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/tech/1000/1000')] bg-cover grayscale" />
               <div className="relative z-10 w-full aspect-square border-2 border-gold/20 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border border-gold/40 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                     <ShieldCheck className="text-gold -rotate-45" size={64} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
