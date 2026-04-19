import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import { motion } from 'motion/react';

const ZealousEthos = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // High-performance synchronization: Ensure THREE is globally accessible for Vanta's internal logic
    if (typeof window !== 'undefined') {
      (window as any).THREE = THREE;
    }

    let vantaEffect: any = null;
    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 600.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00ffff, // High-performance Neon Cyan dots
        backgroundColor: 0x030303, // Slightly deeper black for premium contrast
        points: 10.00,     // Optimized density for a cleaner technical look
        maxDistance: 24.00, // Extended connection length for depth
        spacing: 16.00,    // Precise mesh spacing 
        showDots: true
      });
    }
    return () => { if (vantaEffect) vantaEffect.destroy(); };
  }, []);

  return (
    // Main Container with Vanta Background
    <section ref={vantaRef} id="about-us" className="relative w-full py-24 px-6 flex items-center justify-center min-h-[700px]">
      
      {/* THE GLASS BOX FIX (z-20 to keep text above lines) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-5xl mx-auto text-center p-10 md:p-14 bg-black/80 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl"
      >
        
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white font-black text-5xl md:text-7xl uppercase mb-4 tracking-tight"
        >
          THE ZEALOUS <span className="text-[#D4AF37]">ETHOS</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white text-xl md:text-2xl font-medium mb-8"
        >
          Bridging the Gap Between Technology and Human Connection.
        </motion.p>
        
        {/* Paragraph */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[#D1D5DB] leading-relaxed text-base md:text-lg text-justify md:text-center mb-12"
        >
          At Zealous Solutions, we are more than just a call center; we are the architects of your customer engagement. Drawing from years of industry expertise, we seamlessly blend high-tech infrastructure with genuine human empathy. Our dedicated 24/7 operations ensure your business never sleeps. From nurturing leads to providing exceptional support, we focus on data-driven insights and quality monitoring to deliver scalable growth.
        </motion.p>
        
        {/* Bottom Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-8 mt-8"
        >
          {[
            { value: "24/7", label: "Global Support" },
            { value: "500+", label: "Trained Agents" },
            { value: "100%", label: "Quality Monitoring" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-4"
            >
              <h3 className="text-[#D4AF37] font-black text-3xl md:text-4xl mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ZealousEthos;
