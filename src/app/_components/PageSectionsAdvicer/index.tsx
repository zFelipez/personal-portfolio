"use client";

import { ListIndentDecrease, ListIndentIncrease } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type AvailableSectionsProps = {
  id: string;
  title: string;
};

export function PageSectionsAdvicer() {
  const [availableSections, setIsAvailableSections] = useState<
    AvailableSectionsProps[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const pageSectionsSelector = document.querySelectorAll("section[id]");

      const sections = Array.from(pageSectionsSelector).map((section) => {
        const title = section.querySelector("h2")?.textContent?.trim() ?? "";

        return { id: section.id, title };
      });

      setIsAvailableSections(sections.filter((section) => section.title));
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  if (availableSections.length === 0) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className={styles.toggleButton}
        aria-label={
          isOpen ? "Fechar índice da página" : "Abrir índice da página"
        }
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <ListIndentDecrease size={18} />
        ) : (
          <ListIndentIncrease size={18} />
        )}
      </button>

      <aside
        className={`${styles.advicer} ${isOpen ? styles.advicerOpen : ""}`}
        aria-label="Seções da página"
      >
        <p className={styles.title}>Nesta página</p>

        <nav>
          <ul className={styles.list}>
            {availableSections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className={styles.link}
                  onClick={() => setIsOpen(false)}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
