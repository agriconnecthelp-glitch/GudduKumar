'use client';

import { useState, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

const GALLERY_ITEMS = Array.from({ length: 13 }).map((_, i) => ({
  id: i + 1,
  image: `/gallery/${i + 1}.jpeg`,
  title: `Certification & Achievement ${i + 1}`, 
}));

export default function Gallery() {
  const [active, setActive] = useState(null);

  const openItem = (item) => {
    setActive(item);
    document.body.style.overflow = 'hidden';
  };

  const close = useCallback(() => {
    setActive(null);
    document.body.style.overflow = 'auto';
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [close]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-container">
        <ScrollReveal>
          <div className="header">
            <h2 className="gradient-title">Milestones & Certifications</h2>
            <div className="title-underline"></div>
            <p className="subtitle">A visual record of my professional growth and technical validation.</p>
          </div>

          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <button 
                key={item.id} 
                className="gallery-card" 
                onClick={() => openItem(item)} 
                aria-label={`View ${item.title}`}
              >
                <div className="img-wrapper">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="overlay-hint">
                    <span>Expand View</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {active && (
        <div className="modal-overlay" onClick={close} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={close}>&times;</button>
            <div className="image-container">
               <img src={active.image} alt={active.title} />
            </div>
            <div className="modal-info">
              <h3>{active.title}</h3>
              <div className="info-underline"></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-section { padding: 100px 20px; background: #020617; }
        .header { text-align: center; margin-bottom: 60px; }
        
        .gradient-title { 
          font-size: 3rem; 
          font-weight: 800; 
          background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
        }
        .title-underline { height: 4px; width: 60px; background: #6366f1; margin: 15px auto; border-radius: 2px; }
        .subtitle { color: #94a3b8; max-width: 600px; margin: 0 auto; font-size: 1.1rem; }

        .gallery-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
          gap: 24px; 
          max-width: 1200px; 
          margin: 0 auto; 
        }

        .gallery-card { 
          background: rgba(15, 23, 42, 0.6); 
          border: 1px solid rgba(255, 255, 255, 0.08); 
          padding: 10px; 
          border-radius: 20px; 
          cursor: pointer; 
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
        }

        .img-wrapper { 
          position: relative; 
          height: 200px; 
          border-radius: 14px; 
          overflow: hidden; 
        }

        .img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s ease; }
        
        .overlay-hint {
          position: absolute; inset: 0; background: rgba(79, 70, 229, 0.6);
          display: flex; align-items: center; justify-content: center;
          color: white; font-weight: 600; opacity: 0; transition: 0.3s;
          backdrop-filter: blur(2px);
        }

        .gallery-card:hover { transform: translateY(-10px); border-color: #6366f1; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .gallery-card:hover img { transform: scale(1.1); }
        .gallery-card:hover .overlay-hint { opacity: 1; }

        .modal-overlay { 
          position: fixed; inset: 0; 
          background: rgba(2, 6, 23, 0.95); 
          backdrop-filter: blur(12px);
          z-index: 9999; display: flex; 
          align-items: center; justify-content: center; padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .modal-content { 
          background: #0f172a; border: 1px solid #1e293b;
          border-radius: 28px; max-width: 900px; width: 100%; 
          position: relative; animation: slideUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          overflow: hidden;
        }

        .image-container { background: #000; display: flex; justify-content: center; }
        .modal-content img { max-width: 100%; height: auto; max-height: 70vh; object-fit: contain; }
        
        .modal-info { padding: 25px 35px; text-align: left; }
        .modal-info h3 { color: white; margin: 0; font-size: 1.5rem; letter-spacing: 0.5px; }
        .info-underline { height: 3px; width: 40px; background: #6366f1; margin-top: 10px; border-radius: 2px; }

        .close-btn { 
          position: absolute; top: 20px; right: 25px; 
          background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255,255,255,0.1); 
          color: white; width: 40px; height: 40px; border-radius: 50%;
          font-size: 1.5rem; cursor: pointer; transition: 0.2s;
          display: flex; align-items: center; justify-content: center; z-index: 10;
        }
        .close-btn:hover { background: #ef4444; border-color: #ef4444; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; }
          .img-wrapper { height: 140px; }
          .gradient-title { font-size: 2.2rem; }
          .modal-info h3 { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
}