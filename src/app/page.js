'use client';

import { useEffect, useRef } from 'react';
import ScrollReveal from './components/ScrollReveal';
import CertificateModal from './components/CertificateModal';
import Projects from './components/Projects';
import Moon from './components/Moon';
import Navigation from './components/Navigation';
import StarConstellation from './components/StarConstellation';

export default function Home() {
  return (
    <main className="main-container">
      {/* Background Elements */}
      <div className="bg-gradient-overlay"></div>
      <Moon />
      <StarConstellation />
      <Navigation />

      <style jsx global>{`
        :root {
          --primary: #6366f1;
          --secondary: #a855f7;
          --dark-bg: #020617;
          --glass: rgba(15, 23, 42, 0.6);
          --glass-border: rgba(255, 255, 255, 0.1);
        }

        body {
          background-color: var(--dark-bg);
          color: #f8fafc;
          font-family: 'Inter', sans-serif;
          margin: 0;
          overflow-x: hidden;
        }

        .main-container {
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        .bg-gradient-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 50% 0%, #1e1b4b 0%, transparent 60%);
          z-index: -1;
          pointer-events: none;
        }

        .section-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .gradient-text {
          background: linear-gradient(to right, #818cf8, #c084fc, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* --- HERO SECTION --- */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          max-width: 1200px;
          width: 100%;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1.5rem;
          color: #94a3b8;
          margin-bottom: 20px;
        }

        .btn {
          padding: 12px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .hero-image img {
          width: 100%;
          max-width: 450px;
          border-radius: 30px;
          border: 1px solid var(--glass-border);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* --- CERTIFICATE MARQUEE --- */
        .certificate-section {
          padding: 80px 0;
          overflow: hidden;
        }

        .marquee-container {
          position: relative;
          width: 100%;
          display: flex;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-content {
          display: flex;
          gap: 30px;
          padding: 20px 0;
          animation: scroll 40s linear infinite;
        }

        .marquee-content:hover { animation-play-state: paused; }

        .cert-card { flex: 0 0 320px; }

        .cert-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 10px;
          transition: 0.4s ease;
        }

        .cert-glass img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 6px;
        }

        .cert-glass:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* --- CONTACT --- */
        .contact-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 50px;
        }

        .contact-link {
          background: var(--glass);
          padding: 20px;
          border-radius: 16px;
          color: white;
          text-decoration: none;
          border: 1px solid var(--glass-border);
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .contact-link:hover {
          border-color: var(--secondary);
          transform: translateY(-5px);
        }

        .footer {
          text-align: center;
          padding: 40px;
          color: #64748b;
          border-top: 1px solid #1e293b;
        }

        @media (max-width: 768px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-image { order: -1; }
          .hero-text h1 { font-size: 2.5rem; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <ScrollReveal>
          <div className="hero-content">
            <div className="hero-text">
              <div style={{ color: '#818cf8', fontWeight: 600, letterSpacing: '2px', marginBottom: '10px' }}>
                WELCOME TO MY PORTFOLIO
              </div>
              <h1>
                Hi, I'm <br />
                <span className="gradient-text">Guddu Kumar</span>
              </h1>
              <p className="subtitle">Tech & Robotics Enthusiast</p>
              <p style={{ color: '#cbd5e1', marginBottom: '30px', maxWidth: '500px' }}>
                A passionate robotics enthusiast with skills in mobile app development, 
                website development, and electronics repair.
              </p>
              <div className="cta-buttons">
                <a href="mailto:sumitradevi10590gk@gmail.com" className="btn btn-primary">✉️ Get In Touch</a>
                <a href="https://www.instagram.com/roboticswithansh/" target="_blank" className="btn btn-secondary">📸 Instagram</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/assate/dp1.png" alt="Guddu Kumar" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="section-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>About Me</h2>
            <div style={{ background: 'var(--glass)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                My name is <strong>Guddu Kumar</strong> (nickname Ansh Thakur). I am 17 years old. 
                I have completed my 12th grade in the Commerce stream from HBSE (Haryana State Board). 
                I am passionate about robotics and technology. I enjoy fixing electrical devices and 
                building digital solutions through code.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
                {['Robotics', 'App Development', 'Website Development', 'Electronics Repair'].map(skill => (
                  <span key={skill} style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', padding: '8px 20px', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CERTIFICATE SECTION (Auto-Scrolling Marquee) */}
      <section className="certificate-section">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* Using 6 certs as per your reference, duplicated for loop */}
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
              <div key={i} className="cert-card">
                <div className="cert-glass">
                  <img src={`/certificates/cert${num}.jpeg`} alt={`Certificate ${num}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION (Staggered Timeline) */}
      <Projects />

      {/* CERTIFICATES GALLERY */}
      <section className="certificates" id="certificates">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Certificates & Achievements</h2>
          <CertificateModal />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's Connect</h2>
            <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Reach out for robotics projects, collaborations, or gaming content.</p>
            
            <a href="mailto:sumitradevi10590gk@gmail.com?subject=Hello%20Guddu&body=Hi%20Guddu,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." 
               className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>✉️ Email Me</a>

            <div className="contact-links">
              <a href="https://www.instagram.com/roboticswithansh/" target="_blank" className="contact-link">🤖 Instagram (Robotics)</a>
              <a href="https://www.instagram.com/understand_vibes/" target="_blank" className="contact-link">🎮 Instagram (Gaming)</a>
              <a href="https://discord.com/users/thakur10590" target="_blank" className="contact-link">💬 Discord: thakur10590</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Guddu Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}