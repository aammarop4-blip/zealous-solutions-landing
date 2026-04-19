import React from 'react';
import { Navbar, Footer } from '../components/Layout';
import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#000000] font-sans text-[#D1D5DB]">
      <Navbar />
      
      <main className="pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto py-16">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-black uppercase text-[#D4AF37] tracking-tighter leading-none mb-4">
              Internal Terms <br className="hidden md:block" /> Of Service
            </h1>
            <div className="w-24 h-1.5 bg-[#D4AF37] mb-8" />
            <p className="text-[#D1D5DB] text-xs font-bold uppercase tracking-[0.3em] opacity-50">
              Protocol Governance Module | Zealous Solutions
            </p>
          </motion.header>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-16"
          >
            <div className="text-[#D1D5DB] leading-relaxed text-lg space-y-12">
              <section>
                <p className="text-white font-bold mb-4 uppercase tracking-widest text-sm opacity-80">
                  Effective Date: 21 November 2020
                </p>
                <p>
                  This Internal Terms of Service ("Agreement") governs the access and use of Zealous Solutions' networks, 
                  portals, and proprietary data. This Agreement applies to all personnel, including Frontiers (In-house & Work-From-Home), 
                  Verifiers, Team Leads, and Floor Managers. By accessing the Zealous Solutions portal, you agree to comply with these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide border-b border-gold/20 pb-2">
                  1. Scope of Employment & Work Location
                </h2>
                <p>
                  These terms apply equally to all personnel, whether working from the Zealous Solutions headquarters or operating 
                  remotely via the Work-From-Home (WFH) framework. Remote personnel are required to maintain a secure, 
                  noise-free environment conducive to professional client interactions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide border-b border-gold/20 pb-2">
                  2. System Monitoring & Remote Tracking
                </h2>
                <div className="space-y-6">
                  <p>To maintain quality assurance and security protocols, Zealous Solutions actively monitors all system usage.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="zealous-glass p-6">
                      <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Activity Tracking</h4>
                      <p className="text-sm opacity-80">Management utilizes an agent status dashboard to monitor real-time online activity.</p>
                    </div>
                    <div className="zealous-glass p-6">
                      <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Screen Capture</h4>
                      <p className="text-sm opacity-80">The system routinely captures periodic screenshots of the workstation during active shifts for WFH personnel.</p>
                    </div>
                  </div>
                  <p className="text-gold/80 italic text-sm">
                    * Attempting to bypass, spoof, or disable these monitoring tools is grounds for immediate termination.
                  </p>
                  <p>
                    <span className="text-white font-bold">Data Maintenance:</span> All captured files and local storage data are subject to 
                    automated maintenance routines, including weekly compression or deletion, to ensure system performance and data security.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide border-b border-gold/20 pb-2">
                  3. Role-Specific Responsibilities
                </h2>
                <div className="space-y-8">
                  {[
                    { role: "Frontiers (Agents)", desc: "Responsible for executing high-quality outbound and inbound interactions. Adherence to approved campaign scripts and achievement of designated KPIs is mandatory." },
                    { role: "Verifiers", desc: "Responsible for stringent quality assurance. Must ensure 100% compliance with Medicare and ACA guidelines before approving any transfer or lead submission." },
                    { role: "Team Leads (TLs)", desc: "Tasked with real-time floor and remote team management. Responsible for monitoring KPIs, immediate coaching, and shift schedule enforcement." },
                    { role: "Floor Managers (FMs)", desc: "Responsible for overarching campaign success. Hold administrative access to performance reports, manage TL outputs, and enforce disciplinary actions." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                      <div>
                        <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-1">{item.role}</h4>
                        <p className="opacity-80 text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide border-b border-gold/20 pb-2">
                  4. Data Security & Confidentiality
                </h2>
                <ul className="space-y-4 list-none">
                  {[
                    "Strict prohibition from copying, downloading, or writing down customer information (PII, healthcare, financial) onto local devices or paper.",
                    "Sharing portal login credentials (ID/Password) or logging in on behalf of others is strictly forbidden.",
                    "Maintain absolute confidentiality regarding proprietary intelligence models and performance architecture."
                  ].map((rule, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="text-[#D4AF37] font-black">/</span>
                      <p>{rule}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide border-b border-gold/20 pb-2">
                  5. Device & Network Requirements
                </h2>
                <p>
                  All personnel must ensure their devices meet technical requirements (including iOS/Safari compatibility). 
                  Security cookies and tracking tokens must remain enabled for portal functionality and access permissions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide border-b border-gold/20 pb-2">
                  6. Termination of Access
                </h2>
                <p>
                  Zealous Solutions reserves the right to suspend or terminate portal access and employment/contract agreements 
                  immediately, without prior notice, upon any breach of these Terms, specifically regarding data theft, 
                  compliance failure, or unauthorized absence.
                </p>
              </section>

              <section className="p-8 border border-gold/30 bg-gold/5 rounded-xl">
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-4 tracking-wide">
                  7. Acknowledgement
                </h2>
                <p className="italic text-white">
                  By logging into the Zealous Solutions portal, you acknowledge that you have read, understood, and agree to 
                  be bound by these internal Terms of Service.
                </p>
              </section>
            </div>

            <section className="text-center md:text-left pt-16 border-t border-white/5">
              <p className="text-[#D1D5DB]/30 text-[10px] uppercase font-bold tracking-[0.5em]">
                Secure Internal Documentation. Unauthorized distribution prohibited.
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
