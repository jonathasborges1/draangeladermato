import { trustHighlights } from "../lib/content";
import styles from "../page.module.css";
import { iconRegistry } from "./icons";

export function TrustStrip() {
  return (
    <section className={styles.trustStrip} aria-label="Diferenciais do atendimento">
      {trustHighlights.map(({ icon, text, highlight }) => {
        const Icon = iconRegistry[icon];
        return (
          <div key={highlight}>
            <Icon />
            <span>
              {text}
              <strong>{highlight}</strong>
            </span>
          </div>
        );
      })}
    </section>
  );
}
