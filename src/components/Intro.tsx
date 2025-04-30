import React, { useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Heading from './Heading';
import Scene from './Scene';

//TODO: need to improve UI when mobile mode

export default function Intro() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <section
      ref={container}
      className="h-screen overflow-hidden"
      style={{ cursor: "url('/eraser.png'), auto" }}
    >
      <motion.div style={{ y }} className="relative h-full">
        <main className="flex w-full h-screen items-center justify-center">
          <Heading />
          {!isMobile && <Scene />}
        </main>
      </motion.div>
    </section>
  );
}
