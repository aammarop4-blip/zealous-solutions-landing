import React from 'react';
import { Navbar, Footer } from '../components/Layout';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#000000] font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-black uppercase text-[#D4AF37] tracking-tighter mb-4">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mb-8" />
            <p className="text-[#D1D5DB] text-sm font-bold uppercase tracking-widest opacity-60">
              Effective Date: 12 November 2020
            </p>
          </motion.header>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="text-[#D1D5DB] leading-relaxed text-lg space-y-10">
              <section>
                <p>
                  At Zealous Solutions, accessible from our digital portal, one of our main priorities is the privacy of our visitors and clients. 
                  This Privacy Policy document contains types of information that is collected and recorded by Zealous Solutions and how we use it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide">
                  1. Information We Collect
                </h2>
                <div className="space-y-6">
                  <p>
                    We collect information to provide better services to all our clients and their respective customers. 
                    The personal information that you are asked to provide will be made clear to you at the point of interaction.
                  </p>
                  <p>
                    <span className="text-white font-bold">Direct Interactions:</span> When you contact us directly, apply for a job via our Job Portal, or fill out a form, 
                    we may receive additional information about you such as your name, email address, phone number, and the contents of the message.
                  </p>
                  <p>
                    <span className="text-white font-bold">Call Center Operations:</span> As part of our inbound and outbound call center services 
                    (including Lead Generation, Medicare, and Insurance campaigns), we may collect and record call interactions, 
                    lead details, and quality monitoring data to ensure the highest level of service and compliance.
                  </p>
                  <p>
                    <span className="text-white font-bold">Log Files and Security Cookies:</span> Zealous Solutions follows a standard procedure of using log files and secure session cookies. 
                    These track visitors within our secure portals to ensure safe access and gather demographic information strictly for system administration and security purposes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">We utilize tactical data architectures to:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Provide, operate, and maintain our website and secure admin portals.</li>
                  <li>Improve, personalize, and expand our kinetic service cycles.</li>
                  <li>Understand and analyze how you interact with our operational framework.</li>
                  <li>Develop new products, services, features, and strategic functionality.</li>
                  <li>Communicate with you for customer service, updates, and marketing protocols.</li>
                  <li>Process job applications and manage employee training through our dedicated portals.</li>
                  <li>Find and prevent fraud through advanced monitoring.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide">
                  3. Sharing of Information
                </h2>
                <p>
                  We do not sell, trade, or rent users' personal identification information to others. We may share generic 
                  aggregated demographic information not linked to any personal identification information with our business partners. 
                  For our B2B lead generation services, collected lead data is securely transferred strictly to the contracted client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide">
                  4. Data Security & Compliance
                </h2>
                <p>
                  We adopt appropriate data collection, storage, and processing practices and security measures to protect against 
                  unauthorized access, alteration, disclosure, or destruction of your personal information and transaction data. 
                  We strictly adhere to industry standards to protect sensitive data across all our campaigns, including healthcare and insurance verticals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide">
                  5. Your Data Protection Rights
                </h2>
                <p className="mb-4">Every user is entitled to the following tactical rights:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="text-white font-bold">The right to access</span> – You have the right to request copies of your personal data.</li>
                  <li><span className="text-white font-bold">The right to rectification</span> – You have the right to request that we correct any information you believe is inaccurate.</li>
                  <li><span className="text-white font-bold">The right to erasure</span> – You have the right to request that we erase your personal data, under certain conditions.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#D4AF37] uppercase mb-6 tracking-wide">
                  6. Contact Us
                </h2>
                <div className="p-8 zealous-glass border-l-2 border-[#D4AF37] space-y-4">
                  <p><span className="text-white font-bold">Email:</span> info@zealoussolutions.live</p>
                  <p><span className="text-white font-bold">Phone:</span> 123-123-000</p>
                  <p><span className="text-white font-bold">Address:</span> 123. Rawalpindi</p>
                </div>
              </section>

              <section className="text-center md:text-left">
                <p className="text-[#D1D5DB]/50 text-xs uppercase tracking-[0.2em] pt-12 border-t border-white/5">
                  Strategic Privacy Protocols Established. Zealous Solutions.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
