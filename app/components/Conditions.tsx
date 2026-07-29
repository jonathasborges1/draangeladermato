import { ArrowRight, Sparkles } from "lucide-react";
import { careGroups, WHATSAPP_URL } from "../lib/content";
import styles from "../page.module.css";
import { CareCard } from "./CareCard";
import { ExternalLink } from "./ExternalLink";

export function Conditions() {
  return (
    <section className={styles.conditions} id="quando-procurar">
      <div className={styles.conditionsLayout}>
        <div className={styles.conditionsLeft}>
          <div className={styles.conditionsHeading}>
            <p className={styles.eyebrowLight}>Quando procurar um dermatologista?</p>
            <h2>Para cuidar da saúde da pele em todas as fases da vida.</h2>
          </div>
          {careGroups.slice(0, 2).map((item) => (
            <CareCard key={item.number} {...item} />
          ))}
        </div>
        <div className={styles.conditionsRight}>
          {careGroups.slice(2).map((item) => (
            <CareCard key={item.number} {...item} />
          ))}
        </div>
      </div>

      <div className={styles.evaluationBand}>
        <Sparkles size={23} />
        <div>
          <strong>Avaliação dermatológica completa</strong>
          <span>
            Pele, cabelos e unhas de adultos e crianças, com o cuidado que
            cada fase da vida pede.
          </span>
        </div>
        <ExternalLink href={WHATSAPP_URL}>
          Conversar com a equipe
          <ArrowRight size={16} />
        </ExternalLink>
      </div>
    </section>
  );
}
