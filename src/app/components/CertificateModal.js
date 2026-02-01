'use client';

import { useState, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

const CERTIFICATES = [
  { id: 1, year: '2022', image: '/certificates/cert1.jpeg', title: 'Robotics Classes Certificate', description: 'Completed specialized Robotics training in Grade 9, focusing on mechanical assembly and basic programming concepts.' },
  { id: 2, year: '2026', image: '/certificates/cert2.jpeg', title: 'AgriConnect – Govt Funded', description: 'AgriConnect connects urban gardeners. 🏆 Achievement: Secured ₹100,000+ funding from the Haryana Government.' },
  { id: 3, year: '2025', image: '/certificates/cert3.jpeg', title: 'Smart Garbage Segregation', description: 'Built a smart garbage bin that automatically segregates plastic, metal, and biodegradable waste. 🏆 1st Place at Block Level.' },
  { id: 4, year: '2024', image: '/certificates/cert4.jpeg', title: "Children's Safety Shoe", description: 'Designed a GPS-enabled smart safety shoe with emergency buttons and live location sharing.' },
  { id: 5, year: '2023', image: '/certificates/cert5.jpeg', title: 'Smart Home Automation', description: 'Developed an IoT-based home automation system enabling remote control for improved energy efficiency.' },
  { id: 6, year: '2023', image: '/certificates/cert6.jpeg', title: 'State Level Innovation', description: 'Presented at State Level. Features include theft detection, gas leak alerts, and remote appliance control.' }
];

export default function CertificateModal() {
  const [activeId, setActiveId] = useState(null);
  const activeCert = CERTIFICATES.find(cert => cert.id === activeId);
  const closeModal = useCallback(() => setActiveId(null), []);

  return (
    <>
      <section className="certificates-section">
        <div className="timeline-container">
          <div className="center-line"></div>

          {CERTIFICATES.map((cert, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={cert.id} className="timeline-row">
                <ScrollReveal>
                  <div className={`timeline-grid ${isEven ? 'layout-left' : 'layout-right'}`}>
                    
                    <div className="column-side">
                      {isEven ? (
                        <div className="cert-card" onClick={() => setActiveId(cert.id)}>
                          <div className="image-box"><img src={cert.image} alt={cert.title} /></div>
                          <div className="card-info">
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="year-tag right-align">{cert.year}</div>
                      )}
                    </div>

                    <div className="column-center">
                      <div className="star-node"><div className="pulse-ring"></div></div>
                    </div>

                    <div className="column-side">
                      {!isEven ? (
                        <div className="cert-card" onClick={() => setActiveId(cert.id)}>
                          <div className="image-box"><img src={cert.image} alt={cert.title} /></div>
                          <div className="card-info">
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="year-tag left-align">{cert.year}</div>
                      )}
                    </div>

                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {activeCert && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>✕</button>
              <h3 className="modal-title">{activeCert.title} ({activeCert.year})</h3>
              <div className="modal-body">
                <img src={activeCert.image} alt={activeCert.title} />
                <p className="modal-desc">{activeCert.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .certificates-section { padding: 80px 20px; position: relative; }
        .timeline-container { max-width: 1100px; margin: 0 auto; position: relative; }
        
        .center-line {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, transparent, #6366f1, #a855f7, transparent);
          transform: translateX(-50%); z-index: 0;
        }

        .timeline-row { position: relative; margin-bottom: 80px; z-index: 1; }
        .timeline-grid { display: grid; grid-template-columns: 1fr 80px 1fr; align-items: center; }
        
        .column-center { display: flex; justify-content: center; }
        .star-node {
          width: 16px; height: 16px; background: #818cf8; border-radius: 50%;
          box-shadow: 0 0 20px #6366f1; position: relative;
        }
        .pulse-ring {
          position: absolute; inset: -8px; border: 2px solid #6366f1;
          border-radius: 50%; animation: pulse 2s infinite;
        }
        @keyframes pulse { 0% { transform: scale(0.6); opacity: 0.8; } 100% { transform: scale(2); opacity: 0; } }

        .year-tag {
          font-size: 2.5rem; font-weight: 900; color: rgba(255, 255, 255, 0.07);
          font-family: 'Space Grotesk', sans-serif; transition: 0.3s; user-select: none;
        }
        .timeline-row:hover .year-tag { color: rgba(99, 102, 241, 0.3); transform: scale(1.1); }
        .right-align { text-align: right; }
        .left-align { text-align: left; }

        .cert-card {
          background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px;
          overflow: hidden; cursor: pointer; transition: 0.4s ease; width: 100%;
        }
        .cert-card:hover { border-color: #818cf8; transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.4); }
        .image-box { height: 180px; overflow: hidden; }
        .image-box img { width: 100%; height: 100%; object-fit: cover; }
        .card-info { padding: 20px; }
        .card-info h3 { color: #fff; font-size: 1.1rem; margin-bottom: 5px; }
        .card-info p { color: #94a3b8; font-size: 0.85rem; line-height: 1.4; }

        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 2000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); }
        .modal-box { background: #0f172a; width: 90%; max-width: 650px; padding: 30px; border-radius: 24px; border: 1px solid #334155; position: relative; }
        .modal-title { color: #fff; margin-bottom: 15px; }
        .modal-body img { width: 100%; border-radius: 12px; margin-bottom: 15px; }
        .modal-desc { color: #cbd5e1; font-size: 1rem; }
        .close-btn { position: absolute; top: 15px; right: 15px; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }

        @media (max-width: 768px) {
          .center-line { left: 30px; transform: none; }
          .timeline-grid { grid-template-columns: 60px 1fr; }
          .column-center { grid-column: 1; }
          .column-side { grid-column: 2; }
          .year-tag { font-size: 1.5rem; text-align: left !important; margin-bottom: 10px; }
          .column-side:has(.year-tag) { order: -1; }
        }
      `}</style>
    </>
  );
}