'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <Contact />
    </main>
  );
}
