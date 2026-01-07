import styles from './Description.module.css';

export default function Description() {
  return (
    <section id="description" className={styles.container}>
      <div className={styles.imageContainer} />

      <div className={styles.content}>
        <p className={styles.text}>
          I am a{' '}
          <b className={styles.boldText}>self-taught software engineer</b> with
          a passion for creating interactive, user-friendly web applications.
          <br />
          <br />
          After completing a React course at{' '}
          <a
            href="https://www.redi-school.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            ReDI School
          </a>
          , I moved into professional development and{' '}
          <b className={styles.boldText}>
            worked for two years as a Front-End Engineer at DW in Germany.
          </b>
          <br /> I then took a year focused on professional development,
          expanding my technical scope across modern web and application
          technologies, including Next.js, Python, and React Native, and{' '}
          <a
            href="https://apps.apple.com/kr/app/derdiedasx/id6751554309?l=en-GB"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <b>building and releasing an iOS application</b>
          </a>{' '}
          that I continue to maintain.
          <br />
          <br />I am{' '}
          <b className={styles.boldText}>now seeking new opportunities</b> to
          apply this experience and continue growing as a software engineer.
        </p>
      </div>
    </section>
  );
}
