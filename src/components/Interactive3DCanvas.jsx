import React, { useEffect, useRef } from 'react';

export default function Interactive3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = (canvas.parentElement ? canvas.parentElement.clientWidth : 400) || 400);
    let height = (canvas.height = (canvas.parentElement ? canvas.parentElement.clientHeight : 350) || 350);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 400;
      height = canvas.height = canvas.parentElement.clientHeight || 350;
    };
    window.addEventListener('resize', handleResize);

    // 3D Nodes & Particles System
    const numParticles = 60;
    const radius = Math.min(width, height) * 0.35;
    const particles = [];

    const techLabels = [
      'HTML5', 'CSS3', 'JavaScript', 'Bootstrap',
      'React.js', 'Laravel', 'PHP', 'Node.js',
      'MySQL', 'Python', 'Machine Learning', 'UI/UX'
    ];

    for (let i = 0; i < numParticles; i++) {
      const phi = Math.acos(-1 + (2 * i) / numParticles);
      const theta = Math.sqrt(numParticles * Math.PI) * phi;
      particles.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        label: i < techLabels.length ? techLabels[i] : null,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotationY = (x / (width / 2)) * 0.8;
      targetRotationX = -(y / (height / 2)) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth spring rotation
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      // Auto slow spin
      const autoAngle = Date.now() * 0.0005;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY + autoAngle);
      const sinY = Math.sin(rotationY + autoAngle);

      const projected = [];

      particles.forEach((p) => {
        // Rotate 3D Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate 3D X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // 3D Perspective Projection
        const fov = 400;
        const scale = fov / (fov + z2);
        const x2d = x1 * scale + width / 2;
        const y2d = y2 * scale + height / 2;

        projected.push({
          x: x2d,
          y: y2d,
          scale,
          z: z2,
          label: p.label,
        });
      });

      // Sort by depth for correct 3D rendering
      projected.sort((a, b) => b.z - a.z);

      // Draw 3D Connecting Lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.25 * projected[i].scale;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw 3D Nodes & Typography Labels
      projected.forEach((p) => {
        const size = Math.max(1.5, 3.5 * p.scale);
        const opacity = Math.max(0.2, (p.z + radius) / (2 * radius));

        // Node Glow Circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`;
        ctx.fill();

        // 3D Text Label
        if (p.label && opacity > 0.45) {
          ctx.font = `${Math.round(11 * p.scale)}px "JetBrains Mono", monospace`;
          ctx.fillStyle = `rgba(241, 245, 249, ${opacity * 0.9})`;
          ctx.fillText(p.label, p.x + 8, p.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
}
