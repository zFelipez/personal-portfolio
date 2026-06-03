import Link from "next/link";
import styles from "./SiteFooter.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Meu Github{" "}
          <Link className={styles.footerLink} href="link">
            link do github
          </Link>
        </p>
      </div>
    </footer>
  );
}
