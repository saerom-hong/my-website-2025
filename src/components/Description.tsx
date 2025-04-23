import React from 'react';
import styles from './Description.module.css';

export default function Description() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer} />

      <div className={styles.content}>
        <p className={styles.text}>
          I started <b>learning to code by myself</b> during the pandemic, while
          under strict lockdown in Malaysia. It was fascinating— I immediately
          captivated by the ability to build for the web. <br />
          <br />
          After working for two years as{' '}
          <b>a Software Engineer, Front-End Focused</b> in Germany, I&apos;ve
          now settled in Aotearoa New Zealand,{' '}
          <strong>seeking new opportunities to continue my journey.</strong>
        </p>
      </div>
    </section>
  );
}
