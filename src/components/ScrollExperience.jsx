import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollExperience() {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef(null);
  const smoothProgress = useSpring(progress, { stiffness: 110, damping: 24, mass: 0.35 });

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')];
    sections.forEach((section, index) => {
      section.classList.add('scroll-section');
      section.dataset.revealDirection = index % 2 === 0 ? 'left' : 'right';
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
        section.classList.add('is-revealed');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-revealed');
        });
      },
      { threshold: 0.025, rootMargin: '0px 0px -3% 0px' },
    );
    sections.forEach((section) => observer.observe(section));

    const revealFallback = window.setTimeout(() => {
      sections.forEach((section) => section.classList.add('is-revealed'));
    }, 1600);

    const updateScroll = () => {
      frameRef.current = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(nextProgress);
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
      document.documentElement.style.setProperty('--scroll-progress', String(nextProgress));
    };

    const handleScroll = () => {
      if (!frameRef.current) frameRef.current = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      observer.disconnect();
      window.clearTimeout(revealFallback);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_14px_rgba(34,211,238,.75)]"
        style={{ scaleX: smoothProgress }}
      />
      <div aria-hidden="true" className="scroll-ambient scroll-ambient-one" style={{ transform: `translate3d(0, ${progress * 140}px, 0)` }} />
      <div aria-hidden="true" className="scroll-ambient scroll-ambient-two" style={{ transform: `translate3d(0, ${progress * -100}px, 0)` }} />
    </>
  );
}
