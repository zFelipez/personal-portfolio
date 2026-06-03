import Link from "next/link";
import styles from "./NavBar.module.scss";

export function NavBar() {
  return (
    <div className={styles.navWrapperWrap}>
      <div className={styles.navWrapper}>
        <nav>
          <ul className={styles.navegationBoxCont}>
            <li>
              <Link
                href="#home"
                className={`${styles.navegationBoxContI} ${styles.hoverUnderline} ${styles.navBoxIBack}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={`${styles.navegationBoxContI} ${styles.hoverUnderline} ${styles.navBoxIBack}`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className={`${styles.navegationBoxContI} ${styles.hoverUnderline} ${styles.navBoxIBack}`}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`${styles.navegationBoxContI} ${styles.navegationBoxContIAc}`}
              >
                Contato
              </Link>
            </li>
            <li>
              <button
                type="button"
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
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
