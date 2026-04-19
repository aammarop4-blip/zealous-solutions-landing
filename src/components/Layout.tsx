import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { motion } from 'motion/react';
import * as THREE from 'three';
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "HOME", href: "/#" },
    { label: "ABOUT US", href: "/#about-us" },
    { label: "SERVICES", to: "/services" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-8 md:px-16 h-[65px] flex justify-between items-center bg-obsidian/40 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="https://lh3.googleusercontent.com/d/1sybrfTYIAJzLUWlwRn3hzNv1nBUnWgxA" 
            alt="Zealous Solutions Logo" 
            className="h-[55px] w-[55px] object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        {[
          { label: "Home", href: "/#" },
          { label: "About Us", href: "/#about-us" },
          { label: "Services", to: "/services" },
          { label: "Careers", to: "/careers" }
        ].map((link, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            {link.to ? (
              <Link to={link.to} className="text-[13px] font-semibold uppercase tracking-[1px] text-slate-400 hover:text-white transition-all opacity-70 hover:opacity-100">{link.label}</Link>
            ) : (
              <a href={link.href} className="text-[13px] font-semibold uppercase tracking-[1px] text-slate-400 hover:text-white transition-all opacity-70 hover:opacity-100">{link.label}</a>
            )}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/login" className="px-5 py-2 border border-gold bg-gold/10 rounded-[4px] text-[12px] font-bold uppercase tracking-[1px] text-gold hover:bg-gold hover:text-obsidian hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all">
            Portal Login
          </Link>
        </motion.div>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-obsidian border-b border-white/10 px-4 py-6 space-y-6">
          {navLinks.map((link) => (
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="block text-sm font-medium uppercase tracking-widest text-slate-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium uppercase tracking-widest text-slate-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            )
          ))}
          <Link to="/careers" className="block text-sm font-medium uppercase tracking-widest text-gold" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link to="/login" className="block text-sm font-bold uppercase tracking-widest text-gold text-center py-3 border border-gold/20 bg-gold/5 rounded-md" onClick={() => setIsOpen(false)}>Portal Login</Link>
          <button className="w-full zealous-button-primary text-xs mt-4">Apply Now</button>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  const vantaRef = React.useRef<HTMLElement>(null);
  const [vantaEffect, setVantaEffect] = React.useState<any>(null);

  React.useEffect(() => {
    // High-performance synchronization: Ensure THREE is globally accessible for Vanta's internal logic
    if (typeof window !== 'undefined') {
      (window as any).THREE = THREE;
    }

    // Agar animation abhi load nahi hui to ise chalayein
    if (!vantaEffect && vantaRef.current) {
      try {
        setVantaEffect(
          FOG({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            // Minimum height lazmi hai
            minHeight: 500.00, 
            minWidth: 200.00,
            // Rango ko thoda bright kiya gaya hai
            highlightColor: 0x5c4d00, // Wazeh Gold
            midtoneColor: 0x001b5e,   // Wazeh Neela
            lowlightColor: 0x1a1a1a,  // Dark Gray
            baseColor: 0x050505,      // Black
            blurFactor: 0.60,
            speed: 2.00,              // Speed thodi tez ki hai
            zoom: 1.00
          })
        );
      } catch (error) {
        console.error("Vanta FOG Error:", error);
      }
    }

    // Cleanup function
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <footer ref={vantaRef} id="contact-us" className="relative w-full py-16 px-6 border-t border-gray-700 min-h-[500px] overflow-hidden bg-black">
      
      {/* relative z-10 taake text dhuwen ke upar rahe */}
      <div className="relative z-10 max-w-6xl mx-auto bg-black/60 backdrop-blur-md p-10 rounded-2xl border border-gray-800 shadow-2xl">
        
        <div className="text-center mb-16">
          <h2 className="text-white font-black text-4xl md:text-5xl uppercase tracking-wider mb-4">
            CONNECT WITH <span className="text-[#D4AF37]">US</span>
          </h2>
          <p className="text-[#D1D5DB] text-lg max-w-2xl mx-auto leading-relaxed">
            Our strategic advisors are ready to help you navigate your next growth phase. Reach out to start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {/* Headquarters Card */}
          <div className="border border-gray-800 rounded-xl p-8 bg-[#0a0a0a] hover:border-[#D4AF37] transition-colors duration-300 flex flex-col items-center justify-center group">
            <svg className="w-10 h-10 mb-4 text-[#D4AF37] group-hover:scale-110 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-[#D4AF37] text-sm font-bold tracking-[0.2em] mb-4 uppercase">Headquarters</h3>
            <p className="text-white font-bold text-2xl">NEW YORK, NY</p>
          </div>

          {/* Email Card */}
          <div className="border border-gray-800 rounded-xl p-8 bg-[#0a0a0a] hover:border-[#D4AF37] transition-colors duration-300 flex flex-col items-center justify-center group">
            <svg className="w-10 h-10 mb-4 text-[#D4AF37] group-hover:scale-110 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-[#D4AF37] text-sm font-bold tracking-[0.2em] mb-4 uppercase">Direct Inquiries</h3>
            <a href="mailto:contact@zealous.com" className="text-white font-bold text-2xl hover:text-[#D4AF37] transition-colors">
              CONTACT@ZEALOUS.COM
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="max-w-4xl mx-auto">
          <div className="border border-gray-800 rounded-xl p-8 bg-[#0a0a0a] hover:border-[#D4AF37] transition-colors duration-300 flex flex-col items-center justify-center group">
            <svg className="w-10 h-10 mb-4 text-[#D4AF37] group-hover:scale-110 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h3 className="text-[#D4AF37] text-sm font-bold tracking-[0.2em] mb-4 uppercase">Phone Support</h3>
            <a href="tel:+15551234567" className="text-white font-bold text-2xl hover:text-[#D4AF37] transition-colors">
              +1 (555) ZEALOUS
            </a>
          </div>
        </div>

        {/* Bottom Footer Area */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm font-semibold tracking-widest uppercase hover:text-[#D4AF37] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm font-semibold tracking-widest uppercase hover:text-[#D4AF37] transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-2">
            © 2026 ZEALOUS SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[#D4AF37]/50 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
            Kinetic Authority Protocol V5.0
          </p>
        </div>

      </div>
    </footer>
  );
};

