import styles from "./ContentSection.module.scss";

type ContentSectionProps = {
  id: string;
  title: string;
  content: string;
};

export function ContentSection({ id, title, content }: ContentSectionProps) {
  return (
    <section id={id} className={styles.secBoxes}>
      <div className={styles.subtitleH2Box}>
        <h2
          className={`${styles.subtitle} ${styles.downLine} ${styles.downLineA}`}
        >
          {title}
        </h2>
      </div>

      <div className={styles.subtitleBox}>
        <p className={styles.subtitleBoxP}>{content}</p>
      </div>
    </section>
  );
}
