import styles from "./ContactSection.module.scss";

export function ContactSection() {
  return (
    <section id="contact" className={styles.secBoxes}>
      <div className={styles.contact}>
        <div className={styles.subtitleH2Box}>
          <h2
            className={`${styles.subtitle} ${styles.subtitleContact} ${styles.downLine} ${styles.downLineA}`}
          >
            Contato
          </h2>
        </div>

        <form
          action="https://formsubmit.co/seu_email"
          method="POST"
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className={`${styles.formField} ${styles.formFieldS}`}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`${styles.formField} ${styles.formFieldS}`}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Digite sua mensagem"
              rows={6}
              className={styles.formField}
              required
            ></textarea>
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://..." />

          <div className={styles.formGroup}>
            <button type="submit" className={styles.formBtn}>
              <div className={styles.text}>Enviar</div>
              <div className={styles.wave}></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
