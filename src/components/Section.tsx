import Background from '../../public/drawing_circle_02.avif';

export default function Section() {
  return (
    <section
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div className="relative z-10 p-15 mix-blend-difference text-black w-full h-full flex flex-col justify-between">
        <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference">
          I have kept learning and experimenting with new tools and ideas. You
          can follow my learning progress{' '}
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
        <p
          className="text-[5vw] tracking-tight uppercase mix-blend-difference"
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundSize: '60%',
            backgroundPosition: '30% center',
            backgroundRepeat: 'no-repeat',
            padding: '4rem',
          }}
        >
          <b>Curiosity</b> and <b>Continuous Learning</b> are my strengths{' '}
        </p>
      </div>
    </section>
  );
}
