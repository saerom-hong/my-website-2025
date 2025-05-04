'use client';
import React from 'react';
import ContactLink from './ContactLink';
import FooterText from './FooterText';
import useMouseTrail from '@/utils/useMouseTrail';
import { MOUSE_TRAIL, STYLES } from '@/utils/constants';

export default function Contact() {
  const { paths } = useMouseTrail();

  return (
    <section>
      <div
        className="flex flex-col justify-around items-center h-screen relative"
        style={{
          backgroundImage: "url('/popup_image.avif')",
          inset: '0',
          width: '100%',
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          cursor: "url('/pencil.png'), auto",
        }}
      >
        <svg className="absolute z-10 top-0 left-0 w-full h-full pointer-events-none">
          {paths.map((path, index) => (
            <path
              key={index}
              d={path.d}
              className="trail"
              style={{
                stroke: MOUSE_TRAIL.STROKE_COLOR,
                strokeWidth: path.strokeWidth,
                fill: 'none',
              }}
            />
          ))}
        </svg>
        <div className="relative flex flex-col items-center pt-50">
          <h3
            className="text-[5vw] font-bold uppercase text-center max-w-[70vw] leading-none"
            style={{ backgroundColor: STYLES.CONTACT.TITLE_BG_COLOR }}
          >
            Contact Me
          </h3>
          <ul className="flex justify-center items-center gap-12 pt-48 pb-12 text-[2.5vw]">
            <ContactLink link="https://www.linkedin.com/in/hongsaerom/">
              LinkdIn
            </ContactLink>
            <ContactLink link="mailto:saeromhong12@gmail.com">
              Email
            </ContactLink>
            <ContactLink link="https://github.com/saerom-hong">
              GitHub
            </ContactLink>
          </ul>
          <FooterText />
        </div>
      </div>
    </section>
  );
}
