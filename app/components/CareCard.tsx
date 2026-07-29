import { ArrowRight } from "lucide-react";
import type { careGroups } from "../lib/content";
import styles from "../page.module.css";

type CareCardProps = (typeof careGroups)[number];

export function CareCard({ number, eyebrow, title, text }: CareCardProps) {
  return (
    <article>
      <div className={styles.cardTop}>
        <span>{number}</span>
        <ArrowRight size={18} />
      </div>
      <p>{eyebrow}</p>
      <h3>{title}</h3>
      <div className={styles.cardLine} />
      <p>{text}</p>
    </article>
  );
}
