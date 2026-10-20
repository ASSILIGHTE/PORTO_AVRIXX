import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ScrollExperience() {
  const frameRef = useRef(null);
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, { stiffness: 85, damping: 26, mass: 0.45 });
  const ambientOneY = useTransform(smoothProgress, [0, 1], [0, 140]);
  const ambientTwoY = useTransform(smoothProgress, [0, 1], [0, -100]);

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
      rawProgress.set(nextProgress);
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
  }, [rawProgress]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_14px_rgba(34,211,238,.75)]"
        style={{ scaleX: smoothProgress }}
      />
      <motion.div aria-hidden="true" className="scroll-ambient scroll-ambient-one" style={{ y: ambientOneY }} />
      <motion.div aria-hidden="true" className="scroll-ambient scroll-ambient-two" style={{ y: ambientTwoY }} />
    </>
  );
}
