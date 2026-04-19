import React, { useState } from 'react';
import { Navbar, Footer } from '../components/Layout';
import ZealousEthos from '../components/ZealousEthos';
import MastersOfEngagement from '../components/MastersOfEngagement';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleApplyNow = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
      navigate('/careers');
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 md:px-20 relative z-10 py-20 overflow-hidden">
        {/* Video Background */}
        <div className="hero-video-container">
          <iframe
            src="https://player.mux.com/Hf8uSIj4toUlimHDLY8wR8uubMiPsDe01yrFWFgwWQcY?metadata-video-title=Video+1&video-title=Video+1&autoplay=true&muted=true&loop=true&controls=false"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Hero Video"
          ></iframe>
          <div className="absolute inset-0 bg-black/60 z-0" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-[64px] md:text-[92px] leading-[0.9] font-black uppercase tracking-[-2px] mb-8">
            <span className="text-gold">ZEALOUS</span> <br />
            <span className="text-white">SOLUTIONS</span>
          </h1>
          
          <p className="text-text-muted text-[18px] max-w-[600px] mx-auto mb-10 leading-[1.6]">
            High-energy, data-driven solutions for Inbound Support, Outbound Sales, and Medicare Lead Generation. We don't just talk; we convert.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative mt-12">
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#b8860b", // Rich darker gold (Goldenrod style)
                boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
              className="zealous-button-primary min-w-[200px] rounded-[25px]"
            >
              Get a Quote
            </motion.button>
            <div className="relative">
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
                onClick={handleApplyNow} 
                className="zealous-button-secondary min-w-[200px] rounded-[25px]"
              >
                Apply Now
              </motion.button>
              
              {showTooltip && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-cyan text-obsidian text-[10px] font-bold px-4 py-2 rounded shadow-lg whitespace-nowrap z-30"
                >
                  Redirecting to Careers Portal...
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      <ZealousEthos />

      <MastersOfEngagement />

      <Footer />
    </div>
  );
}
