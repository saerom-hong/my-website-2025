import React from 'react';
import styles from './Description.module.css';

export default function Description() {
  return (
    <section id="description" className={styles.container}>
      <div className={styles.imageContainer} />

      <div className={styles.content}>
        <p className={styles.text}>
          I began{' '}
          <b className={styles.boldText}>
            teaching myself HTML, CSS, and JavaScript
          </b>{' '}
          during the pandemic lockdown in Malaysia and quickly developed a
          passion for creating interactive, user-friendly web applications.{' '}
          <br />
          <b className={styles.boldText}>
            After two years working in Germany as a Front-End Engineer
          </b>
          , I’ve now settled in Aotearoa New Zealand, where I’m{' '}
          <b className={styles.boldText}>seeking new opportunities</b> to
          contribute my experience and continue growing as a Software Engineer.
        </p>
      </div>
    </section>
  );
}
