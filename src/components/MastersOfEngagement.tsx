import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import DOTS from 'vanta/dist/vanta.dots.min';
import { motion } from 'motion/react';

const MastersOfEngagement = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // High-performance synchronization: Ensure THREE is globally accessible for Vanta's internal logic
    if (typeof window !== 'undefined') {
      (window as any).THREE = THREE;
    }

    if (!vantaEffect && vantaRef.current) {
      try {
        setVantaEffect(
          DOTS({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 600.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xd4af37, // Gold Color for dots
            color2: 0x00ffff, // Cyan color for secondary elements
            backgroundColor: 0x050505, // Pure dark background
            size: 3.00, // Dots ka size
            spacing: 40.00, // Dots ke darmiyan fasla
            showLines: false // Lines band rakhi hain taake clean look aaye
          })
        );
      } catch (error) {
        console.error("Vanta DOTS Error:", error);
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  
  // Services Data
  const services = [
    {
      title: "Targeted Lead Generation",
      description: "Identifying and thoroughly vetting high-intent prospects across multiple verticals, ensuring your sales funnel is constantly fueled.",
      icon: (
        <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Inbound Customer Excellence",
      description: "Delivering 24/7 empathetic and efficient support, turning one-time callers into loyal brand advocates.",
      icon: (
        <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Outbound Sales & Acquisition",
      description: "Executing strategic outbound campaigns driven by a highly proficient team, designed to maximize your ROI.",
      icon: (
        <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Specialized Insurance Campaigns",
      description: "Expert handling of US-centric verticals including Medicare, Auto, Home, and Final Expense insurance.",
      icon: (
        <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={vantaRef} id="services" className="relative w-full py-24 px-6 border-t border-gray-900 min-h-[800px] overflow-hidden">
      
      {/* relative z-10 taake content animation ke upar rahe */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Headings */}
        <div className="text-center mb-16 bg-black/40 backdrop-blur-sm p-6 rounded-2xl inline-block w-full">
          <h2 className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm mb-3">
            STRATEGIC SOLUTIONS
          </h2>
          <h1 className="text-white font-black text-4xl md:text-6xl uppercase tracking-wide">
            MASTERS OF ENGAGEMENT.
          </h1>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {services.map((service, index) => (
            /* Card Container - bg ko thoda transparent kiya gaya hai taake dots nazar aayein */
            <div key={index} className="bg-[#0f111a]/80 backdrop-blur-md border border-gray-800 rounded-xl p-8 flex flex-col hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] transition-all duration-300 group">
              
              {/* Icon */}
              <div className="group-hover:text-[#D4AF37] transition-colors duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              {/* View Proposal Link */}
              <div className="mt-auto">
                <a href="#contact-us" className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest flex items-center hover:text-white transition-colors duration-300">
                  VIEW PROPOSAL 
                  <span className="ml-2">→</span>
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MastersOfEngagement;

