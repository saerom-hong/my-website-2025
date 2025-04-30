import Image from 'next/image';
import Background from '../../public/drawing_circle_02.avif';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div className="relative z-10 p-20 mix-blend-difference text-black w-full h-full flex flex-col justify-between">
        <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference">
          I’ve kept learning and experimenting with new tools and ideas. You can
          follow my learning progress{' '}
          <a
            href="https://www.linkedin.com/in/hongsaerom/details/certifications/"
            className="font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            [here]
          </a>{' '}
          and see my latest projects{' '}
          <a
            href="https://github.com/saerom-hong"
            className="font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            [here]
          </a>
          .
        </p>
        <p className="text-[5vw] tracking-tight uppercase mix-blend-difference">
          Curiosity and Continuous Learning is My Key
        </p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={Background}
            alt="image"
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '80%',
              position: 'absolute',
              top: '50%',
              left: '40%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
