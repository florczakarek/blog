import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/programmer.jpg'
          alt='image presenting programmist'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Arek</h1>
      <p>
        I am interested into Web development. So as to I really like programming
        in JS especially React, Next and Nest. They are awesome but time
        consuming.
      </p>
    </section>
  );
};

export default Hero;
