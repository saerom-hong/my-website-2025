import { STYLES } from '@/utils/constants';

const techStack = {
  'Front-End Development': {
    'Languages & Frameworks': [
      'HTML5',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Next.js',
    ],
    'Tooling & Libraries': [
      'Vite',
      'Webpack',
      'styled-components',
      'Linaria',
      'TailwindCSS',
      'Storybook',
      'GraphQL',
      'Apollo Client',
    ],
    Testing: ['Jest', 'Enzyme', 'React Testing Library', 'Vitest'],
  },
  'Back-End Development': {
    'Languages & Frameworks': ['Python', 'Node.js'],
  },
  'CI/CD & Version Control': {
    Tools: ['Git', 'GitHub', 'Bitbucket', 'Jenkins'],
  },
};

export default function Section() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="relative z-10 px-10 md:px-12 lg:px-12 py-4 md:py-6 lg:py-10 text-black flex flex-col">
        <p className="self-end w-[50vw] text-[2vw] pb-45">
          <b className="bg-[rgba(255,75,184,0.5)] px-1">Curiosity</b> and{' '}
          <b className="bg-[rgba(255,75,184,0.5)] px-1">Continuous Learning</b>{' '}
          are my strengths. Even if I don’t meet every requirement in your tech
          stack, I’m confident in my ability to learn quickly and adapt to new
          technologies.{' '}
        </p>

        <h3 className="text-[1.8vw] md:text-[1.5vw] underline font-bold mt-4 mb-4 text-center">
          What I've used so far
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-[90vw] overflow-y-auto">
          {Object.values(techStack)
            .flatMap((subcategories) => Object.values(subcategories).flat())
            .map((tech, index) => (
              <span
                key={index}
                className="text-[1.2vw] font-semibold md:text-[0.9vw] px-7 py-3.5 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
