'use client';

import { useEffect, useRef, useState } from 'react';

export default function StarConstellation() {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const starsRef = useRef([]);
  const projectNodesRef = useRef([]);
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const config = {
      starCount: 50,
      canvasWidthRatio: 0.4,
      nodeColor: 'rgba(100, 200, 255, 0.9)',
      lineColor: 'rgba(255, 255, 255, 0.3)',
    }; 

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * config.canvasWidthRatio;
      canvas.height = window.innerHeight;
    };

    const initBackgroundStars = () => {
      const stars = [];
      for (let i = 0; i < config.starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.5 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    };

    const scanProjectImages = () => {
      const projectsSection = document.getElementById('projects');
      if (!projectsSection) {
        setIsVisible(false);
        return;
      }

      const sectionRect = projectsSection.getBoundingClientRect();
      const inView = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
      setIsVisible(inView);

      const images = projectsSection.querySelectorAll('.constellation-node');
      const nodes = [];

      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        
        if (rect.width > 0) {
          nodes.push({
            element: img,
            x: rect.left + (rect.width / 2),
            y: rect.top + (rect.height / 2),
            radius: 5,
            pulse: Math.random() * Math.PI
          });
        }
      });
      
      projectNodesRef.current = nodes;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        const opacity = star.opacity + Math.sin(Date.now() * 0.003 + star.twinkleOffset) * 0.2;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, opacity)})`;
        ctx.fill();
      });

      if (isVisible && projectNodesRef.current.length > 0) {
        
        projectNodesRef.current.forEach(node => {
          const rect = node.element.getBoundingClientRect();
          const canvasRect = canvas.getBoundingClientRect();
          
          node.canvasX = rect.left + (rect.width / 2) - canvasRect.left;
          node.canvasY = rect.top + (rect.height / 2) - canvasRect.top;
        });

        ctx.beginPath();
        ctx.strokeStyle = config.lineColor;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);

        let firstNodeDrawn = false;
        
        projectNodesRef.current.forEach((node) => {
          if (node.canvasY > -100 && node.canvasY < canvas.height + 100) {
            if (!firstNodeDrawn) {
              ctx.moveTo(node.canvasX, node.canvasY);
              firstNodeDrawn = true;
            } else {
              ctx.lineTo(node.canvasX, node.canvasY);
            }
          }
        });
        ctx.stroke();
        ctx.setLineDash([]);

        projectNodesRef.current.forEach((node) => {
          if (node.canvasY > -50 && node.canvasY < canvas.height + 50) {
            node.pulse += 0.05;
            const glowSize = node.radius + Math.sin(node.pulse) * 2;

            ctx.beginPath();
            ctx.arc(node.canvasX, node.canvasY, glowSize * 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 200, 255, 0.15)';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(node.canvasX, node.canvasY, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(node.canvasX, node.canvasY, node.radius + 4, 0, Math.PI * 2);
            ctx.strokeStyle = config.nodeColor;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initBackgroundStars();
    
    setTimeout(scanProjectImages, 500);
    setTimeout(scanProjectImages, 2000);

    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initBackgroundStars();
      scanProjectImages();
    });
    
    window.addEventListener('scroll', scanProjectImages);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', scanProjectImages);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '40vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
      }}
    />
  );
}