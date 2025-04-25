import React from 'react';
import { motion } from 'framer-motion';

export default function Heading() {
  return (
    <div className="absolute flex flex-col text-[5vw] tracking-tighter uppercase w-[80vw] items-start leading-tight">
      <p className="font-medium">Hi, My Name is Saerom</p>
      <p className="self-end font-bold">Front End Engineer</p>
      <p className="font-medium">Originally from South Korea,</p>
      <p className="font-medium">Based in New Zealand</p>
      <p className="self-end font-bold">Portfolio@2025</p>
      <div className="flex flex-col justify-center items-center w-full translate-y-25 text-[2vw]">
        <motion.div
          className="w-16 h-16"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} // Adjust duration and easing as needed
        >
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 25 25"
            className="w-full h-full"
          >
            <path d="m12 17.586-7.293-7.293-1.414 1.414L12 20.414l8.707-8.707-1.414-1.414L12 17.586z" />
            <path d="m20.707 5.707-1.414-1.414L12 11.586 4.707 4.293 3.293 5.707 12 14.414l8.707-8.707z" />
          </svg>
        </motion.div>
        Scroll Down
      </div>
    </div>
  );
}
