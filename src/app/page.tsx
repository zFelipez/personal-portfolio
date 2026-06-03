import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="site-content" className={styles.page}>
      <div className={styles.navWrapperWrap}>
        <div className={styles.navWrapper}>
          <nav>
            <ul className={styles.navegationBoxCont}>
              <li>
                {" "}
                <a
                  href="#home"
                  className={`${styles.navegationBoxContI} ${styles.downLine} ${styles.downLineA} ${styles.navBoxIBack}`}
                >
                  {" "}
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#about"
                  className={`${styles.navegationBoxContI} ${styles.downLine} ${styles.downLineA} ${styles.navBoxIBack}`}
                >
                  {" "}
                  Sobre
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#skills"
                  className={`${styles.navegationBoxContI} ${styles.downLine} ${styles.downLineA} ${styles.navBoxIBack}`}
                >
                  Habilidades
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#contact"
                  className={`${styles.navegationBoxContI} ${styles.navegationBoxContIAc}`}
                >
                  Contato
                </a>
              </li>
              <button
                className={`${styles.themeSwitch} ${styles.navegationBoxContI}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z" />
                </svg>
              </button>
            </ul>
          </nav>
        </div>
      </div>

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
        <h1 id="home">Seu nome</h1>
        <p
          className={`${styles.titleP} ${styles.downLine} ${styles.downLineA}`}
        >
          {" "}
          Estudante de tecnologia
        </p>
      </main>

      <section id="about" className={styles.secBoxes}>
        <div className={styles.subtitleH2Box}>
          <h2
            className={`${styles.subtitle} ${styles.downLine} ${styles.downLineA}`}
          >
            {" "}
            Sobre mim
          </h2>
        </div>

        <div className={styles.subtitleBox}>
          <p className={styles.subtitleBoxP}>
            {" "}
            Feliperem ipsum dolor sit amet consectetur, adipisicing elit.
            Molestias, tempora ad fuga nisi eaque libero aliquid dolorum dolore
            laborum nulla. Itaque inventore amet non placeat. Id ullam quos
            natus sapiente excepturi, nostrum modi nisi esse earum ipsam
            laboriosam expedita beatae voluptatibus alias inventore magni at!
            Dolorum laborum minus error, animi beatae modi nulla incidunt
            exercitationem tempora sunt quia architecto. Cumque tempora natus
            praesentium laborum similique ex? Quis dicta quasi illum a
            inventore. Totam enim id commodi excepturi vitae voluptate aut sit,
            iste odio aliquid minima optio dolores illum assumenda officiis
            eaque, porro quasi culpa nemo similique obcaecati dicta! Minus,
            sunt?
          </p>
        </div>
      </section>

      <section id="skills" className={styles.secBoxes}>
        <div className={styles.subtitleH2Box}>
          <h2
            className={`${styles.subtitle} ${styles.downLine} ${styles.downLineA}`}
          >
            {" "}
            Habilidades
          </h2>
        </div>

        <div className={styles.subtitleBox}>
          <p className={styles.subtitleBoxP}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            tempora ad fuga nisi eaque libero aliquid dolorum dolore laborum
            nulla. Itaque inventore amet non placeat. Id ullam quos natus
            sapiente excepturi, nostrum modi nisi esse earum ipsam laboriosam
            expedita beatae voluptatibus alias inventore magni at! Dolorum
            laborum minus error, animi beatae modi nulla incidunt exercitationem
            tempora sunt quia architecto. Cumque tempora natus praesentium
            laborum similique ex? Quis dicta quasi illum a inventore. Totam enim
            id commodi excepturi vitae voluptate aut sit, iste odio aliquid
            minima optio dolores illum assumenda officiis eaque, porro quasi
            culpa nemo similique obcaecati dicta! Minus, sunt?
          </p>
        </div>
      </section>

      <section id="contact" className={styles.secBoxes}>
        <div className={styles.contact}>
          <div className={styles.subtitleH2Box}>
            {" "}
            <h2
              className={`${styles.subtitle} ${styles.subtitleContact} ${styles.downLine} ${styles.downLineA}`}
            >
              {" "}
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
                <div className={styles.text}> Enviar </div>
                <div className={styles.wave}></div>
              </button>{" "}
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div
          className={`${styles.footer} ${styles.navWrapper} ${styles.navWrapperWrap}`}
        >
          {" "}
          <p>
            Meu Github <a href="link"> link do github</a>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}
