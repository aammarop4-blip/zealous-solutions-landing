import React from 'react';
import { Navbar, Footer } from '../components/Layout';
import { motion } from 'motion/react';
import { Shield, Zap, Target, Users, Award, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about-us" className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-cyan text-xs font-black uppercase tracking-[0.5em] mb-4">About Zealous Solutions</h2>
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-5xl md:text-7xl font-black uppercase mb-6 cursor-default"
            >
              THE ZEALOUS <span className="text-gold">ETHOS</span>
            </motion.h1>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 tracking-wide">
              Bridging the Gap Between Technology and Human Connection.
            </h3>
            <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
              At Zealous Solutions, we are more than just a call center; we are the architects of your customer engagement. 
              Drawing from years of industry expertise, we seamlessly blend high-tech infrastructure with genuine human empathy. 
              Our dedicated 24/7 operations ensure your business never sleeps. From nurturing leads to providing exceptional support, 
              we focus on data-driven insights and quality monitoring to deliver scalable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Target className="text-gold" size={40} />, 
                title: "Precision Execution", 
                desc: "We don't settle for 'close enough'. Every protocol is executed with surgical accuracy to ensure maximum conversion." 
              },
              { 
                icon: <Shield className="text-cyan" size={40} />, 
                title: "Elite Integrity", 
                desc: "Highest-tier security standards embedded in every layer of our operational framework. Your data is our fortress." 
              },
              { 
                icon: <Zap className="text-gold" size={40} />, 
                title: "Kinetic Innovation", 
                desc: "Constantly evolving our assessment models to stay ahead of market shifts. Speed meets intelligence." 
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="zealous-card p-10 text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold uppercase mb-4">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Global Support", value: "24/7" },
              { label: "Trained Agents", value: "500+" },
              { label: "Quality Monitoring", value: "100%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-cyan text-xs font-bold uppercase tracking-[0.4em] mb-4">The Command Center</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase">Elite Leadership</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Marcus Thorne", 
                role: "Director of Operations", 
                image: "https://picsum.photos/seed/marcus/400/500" 
              },
              { 
                name: "Julian Draxler", 
                role: "Lead Systems Architect", 
                image: "https://picsum.photos/seed/julian/400/500" 
              },
              { 
                name: "Sarah Koenig", 
                role: "Chief Security Officer", 
                image: "https://picsum.photos/seed/sarah/400/500" 
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="zealous-card overflow-hidden group"
              >
                <div className="aspect-[4/5] relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-[10px] text-gold font-black uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
