'use client';

import { useEffect, useRef } from 'react';
import ScrollReveal from './components/ScrollReveal';
import CertificateModal from './components/CertificateModal';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Moon from './components/Moon';
import Navigation from './components/Navigation';
import StarConstellation from './components/StarConstellation';

export default function Home() {
  return (
    <main className="main-container">
      <div className="bg-gradient-overlay"></div>
      <Moon />
      <StarConstellation />
      <Navigation />

      <style jsx global>{`
        :root {
          --primary: #3b82f6;
          --secondary: #0ea5e9;
          --dark-bg: #0f172a;
          --glass: rgba(15, 23, 42, 0.6);
          --glass-border: rgba(59, 130, 246, 0.15);
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
          background: radial-gradient(circle at 50% 0%, #1e3a5f 0%, transparent 60%);
          z-index: -1;
          pointer-events: none;
        }

        .section-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .gradient-text {
          background: linear-gradient(to right, #3b82f6, #0ea5e9, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

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
          color: #cbd5e1;
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

        .social-icon {
          width: 20px;
          height: 20px;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.35);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: white;
          backdrop-filter: blur(10px);
        }

        .hero-image img {
          width: 100%;
          max-width: 450px;
          border-radius: 30px;
          border: 2px solid var(--primary);
          animation: float 6s ease-in-out infinite;
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.25);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .certificate-section {
          padding: 80px 0;
          overflow: hidden;
          position: relative;
          background-image: 
            radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
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
          background: rgba(59, 130, 246, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
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

        .contact-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 50px;
        }

        .contact-link {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.05));
          padding: 20px;
          border-radius: 16px;
          color: white;
          text-decoration: none;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
        }

        .contact-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .contact-link:hover::before {
          left: 100%;
        }

        .contact-link:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }

        .footer {
          text-align: center;
          padding: 40px;
          color: #64748b;
          border-top: 1px solid #1e293b;
          background-image: 
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px);
          background-size: 50px 100%;
        }

        @media (max-width: 768px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-image { order: -1; }
          .hero-text h1 { font-size: 2.5rem; }
        }
      `}</style>

      <section className="hero" id="home">
        <ScrollReveal>
          <div className="hero-content">
            <div className="hero-text">
              <div style={{ color: '#3b82f6', fontWeight: 600, letterSpacing: '2px', marginBottom: '10px' }}>
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
                <a href="https://www.instagram.com/roboticswithansh/" target="_blank" className="btn btn-secondary"><img src="/icons/instagram.svg" alt="Instagram" className="social-icon" /> Instagram</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/assate/dp1.png" alt="Guddu Kumar" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="about" id="about">
        <div className="section-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>About Me</h2>
            <div style={{ background: 'var(--glass)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none', zIndex: 0 }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  My name is <strong>Guddu Kumar</strong> (nickname Ansh Thakur). I am 17 years old. 
                  I have completed my 12th grade in the Commerce stream from HBSE (Haryana State Board). 
                  I am passionate about robotics and technology. I enjoy fixing electrical devices and 
                  building digital solutions through code.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
                  {['Robotics', 'App Development', 'Website Development', 'Electronics Repair'].map(skill => (
                    <span key={skill} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '8px 20px', borderRadius: '20px', border: '1px solid rgba(59, 130, 246, 0.3)', fontWeight: 500 }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="certificate-section">
        <div className="marquee-container">
          <div className="marquee-content">
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

      <Projects />

      <section className="certificates" id="certificates">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Certificates & Achievements</h2>
          <CertificateModal />
        </div>
      </section>

      <Gallery />

      <section className="contact" id="contact">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's Connect</h2>
            <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Reach out for robotics projects, collaborations, or gaming content.</p>
            
            <a href="mailto:sumitradevi10590gk@gmail.com?subject=Hello%20Guddu&body=Hi%20Guddu,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." 
               className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>✉️ Email Me</a>

            <div className="contact-links">
              <a href="https://www.instagram.com/roboticswithansh/" target="_blank" className="contact-link"><img src="/icons/instagram.svg" alt="Instagram Robotics" className="social-icon" /> Instagram (Robotics)</a>
              <a href="https://www.instagram.com/understand_vibes/" target="_blank" className="contact-link"><img src="/icons/instagram.svg" alt="Instagram Gaming" className="social-icon" /> Instagram (Gaming)</a>
              <a href="https://discord.com/users/thakur10590" target="_blank" className="contact-link"><img src="/icons/discord.svg" alt="Discord" className="social-icon" /> Discord: thakur10590</a>
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