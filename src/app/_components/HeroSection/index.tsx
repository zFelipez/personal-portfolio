import Image from "next/image";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <main className={styles.mainCont}>
      <Image
        id="home"
        src="/img1.png"
        alt="profile-photo"
        className={styles.profilePhoto}
        width={320}
        height={320}
        priority
      />
      <h1 id="home" className={styles.heading}>
        Seu nome
      </h1>
      <p className={`${styles.titleP} ${styles.downLine} ${styles.downLineA}`}>
        Estudante de tecnologia
      </p>
    </main>
  );
}
