'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AgriConnect App",
      description: "AgriConnect is an app I designed during my 12th grade, focusing on connecting urban residents for free exchange of gardening items like plants, saplings, seeds, and pots. Users can upload their items and freely exchange within their communities. To generate revenue, the app offers paid services like gardening advice, garden maintenance, and setting up terrace, vertical, or kitchen gardens. Additionally, it integrates with a custom-built smart compost bin that features temperature control, monitoring, and odor-control air circulation—fully monitored via the app. Notably, our project received recognition from the Haryana Government, with a grant of 1 lakh+ for its innovation and impact.",
      image: "/projects/agri/a8.png",
      gallery: ["/projects/agri/a1.jpeg", "/projects/agri/a2.jpeg", "/projects/agri/a3.jpeg", "/projects/agri/a4.jpeg", "/projects/agri/a5.jpeg", "/projects/agri/a6.jpeg", "/projects/agri/a7.jpeg", "/projects/agri/a8.png"],
    },
    {
      id: 2,
      title: "Children’s Safety Smart Shoe",
      description: "One of my core projects was a Children Safety Smart Shoe. I integrated a GPS module into the shoe, along with two emergency buttons. One button triggered an emergency call, instantly notifying parents if the child was in danger. The second button allowed the child to send their live location directly to the parents. Additionally, parents could check the child’s location at any time by sending an SMS from their phone, receiving the child’s current coordinates in response.",
      image: "/projects/ChildrensSafety/s4.jpeg",
      gallery: ["/projects/ChildrensSafety/s0.jpeg", "/projects/ChildrensSafety/s1.jpeg", "/projects/ChildrensSafety/s3.jpeg", "/projects/ChildrensSafety/s4.jpeg", "/projects/ChildrensSafety/s5.jpeg"],
    },
    {
      id: 3,
      title: "Smart Garbage Segregation Bin",
      description: "Developed a prototype that automatically separates metal-plastic or biodegradable waste using sensors for efficient management.",
      image: "/projects/bin/s1.png",
      gallery: ["/projects/bin/s1.png", "/projects/bin/s2.jpeg", "/projects/bin/s3.jpeg"],
    },
    {
      id: 4,
      title: "Smart Compost Bin",
      description: "Integrated with AgriConnect App, featuring real-time temperature monitoring and automated fan control.",
      image: "/projects/compost-bin/c1.jpeg",
      gallery: ["/projects/compost-bin/c1.jpeg", "/projects/compost-bin/c2.jpeg", "/projects/compost-bin/c3.jpeg", "/projects/compost-bin/c4.jpeg"],
    },
    {
      id: 5,
      title: "Home Automation & Security",
      description: "I developed, focusing on multiple layers of protection. It included remote control of home appliances and features like theft protection, gas leak detection, and a rain detector. Each of these safety measures ensured that homeowners could monitor and respond to potential hazards, providing a secure and smart environment for their families. demonstrated at the state level.",
      image: "",
      gallery: [],
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="section-header">
          <ScrollReveal>
            <h2 className="gradient-title">Project Constellation</h2>
            <p className="subtitle">My journey through engineering and innovation</p>
          </ScrollReveal>
        </div>

        <div className="timeline-container">
          <div className="center-line"></div>

          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.id} className="timeline-row">
                <ScrollReveal>
                  <div className={`timeline-grid ${isEven ? 'layout-left' : 'layout-right'}`}>
                    
                    <div className="card-column">
                      <div 
                        className="project-card"
                        onClick={() => project.gallery.length > 0 && setActiveProject(project)}
                      >
                        <div className="image-box">
                          <img src={project.image} alt={project.title} />
                        </div>
                        <div className="card-info">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          {project.gallery.length > 0 && <span className="view-trigger">View Gallery →</span>}
                        </div>
                      </div>
                    </div>

                    <div className="node-column">
                      <div className="star-node">
                        <div className="pulse-ring"></div>
                      </div>
                    </div>

                    <div className="spacer-column"></div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {activeProject && (
          <div className="modal-overlay" onClick={() => setActiveProject(null)}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActiveProject(null)}>✕</button>
              <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>{activeProject.title}</h3>
              <div className="gallery-grid">
                {activeProject.gallery.map((img, i) => (
                  <img key={i} src={img} alt="Gallery" onClick={() => setPreviewImage(img)} />
                ))}
              </div>
            </div>
          </div>
        )}

        {previewImage && (
          <div className="preview-overlay" onClick={() => setPreviewImage(null)}>
            <img src={previewImage} alt="Fullscreen" />
          </div>
        )}
      </section>

      <style jsx>{`
        .projects-section {
          padding: 100px 20px;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .gradient-title {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(to right, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle { color: #94a3b8; margin-top: 10px; font-size: 1.1rem; }

        .timeline-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        .center-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #6366f1, #a855f7, transparent);
          transform: translateX(-50%);
          z-index: 0;
        }

        .timeline-row {
          position: relative;
          margin-bottom: 100px;
          z-index: 1;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: center;
        }

        .layout-left .card-column { grid-column: 1; text-align: right; }
        .layout-left .node-column { grid-column: 2; }
        .layout-left .spacer-column { grid-column: 3; }

        .layout-right .card-column { grid-column: 3; text-align: left; }
        .layout-right .node-column { grid-column: 2; }
        .layout-right .spacer-column { grid-column: 1; }

        .node-column { display: flex; justify-content: center; }
        .star-node {
          width: 16px; height: 16px;
          background: #6366f1;
          border-radius: 50%;
          box-shadow: 0 0 20px #6366f1;
          position: relative;
        }

        .pulse-ring {
          position: absolute; inset: -8px;
          border: 2px solid #6366f1;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }

        .project-card {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          display: inline-block;
          width: 100%;
          max-width: 450px;
        }

        .project-card:hover {
          border-color: #6366f1;
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .image-box { height: 200px; overflow: hidden; }
        .image-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .project-card:hover .image-box img { transform: scale(1.1); }

        .card-info { padding: 25px; }
        .card-info h3 { color: #fff; margin-bottom: 10px; font-size: 1.3rem; }
        .card-info p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; }
        .view-trigger { display: block; margin-top: 15px; color: #6366f1; font-weight: 600; }

        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.9);
          z-index: 1000; display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }
        .modal-box {
          background: #0f172a; width: 100%; max-width: 800px;
          padding: 30px; border-radius: 24px; position: relative;
          max-height: 80vh; overflow-y: auto; border: 1px solid #334155;
        }
        .gallery-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 15px;
        }
        .gallery-grid img { 
          width: 100%; border-radius: 12px; cursor: zoom-in; 
          transition: 0.3s; height: 140px; object-fit: cover;
        }
        .gallery-grid img:hover { transform: scale(1.05); }

        .preview-overlay {
          position: fixed; inset: 0; background: #000; z-index: 1100;
          display: flex; align-items: center; justify-content: center;
        }
        .preview-overlay img { max-width: 95%; max-height: 90%; object-fit: contain; }

        .close-btn {
          position: absolute; top: 15px; right: 20px; background: none;
          border: none; color: white; font-size: 1.5rem; cursor: pointer;
        }

        @media (max-width: 768px) {
          .center-line { left: 20px; transform: none; }
          .timeline-grid { grid-template-columns: 40px 1fr; gap: 10px; }
          .layout-left .card-column, .layout-right .card-column { grid-column: 2; text-align: left; }
          .layout-left .node-column, .layout-right .node-column { grid-column: 1; }
          .spacer-column { display: none; }
          .gradient-title { font-size: 2rem; }
        }
      `}</style>
    </>
  );
}
