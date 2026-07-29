import { ArrowRight, Instagram } from "lucide-react";
import { INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "../lib/content";
import styles from "../page.module.css";
import { ExternalLink } from "./ExternalLink";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCta() {
  return (
    <section className={styles.finalCta} id="contato">
      <div className={styles.finalOrnament} aria-hidden="true">
        AC
      </div>
      <div className={styles.finalContent}>
        <p className={styles.eyebrowLight}>Sua saúde merece atenção</p>
        <h2>Um cuidado preciso começa com uma avaliação cuidadosa.</h2>
        <p>
          Agende sua consulta e dê o primeiro passo para compreender as
          necessidades da sua pele, dos seus cabelos ou das suas unhas.
        </p>
        <ExternalLink className={styles.finalButton} href={WHATSAPP_URL}>
          <WhatsAppIcon size={18} />
          Agendar pelo WhatsApp
        </ExternalLink>
      </div>

      <div className={styles.contactCard}>
        <span>Atendimento em Manaus</span>
        <strong>Ed. The Office</strong>
        <p>
          Av. Mário Ypiranga, 315
          <br />
          5º andar, sala 521 · Adrianópolis
        </p>
        <ExternalLink className={styles.contactMapButton} href={MAPS_URL}>
          <ArrowRight size={15} />
          Ver no Google Maps
        </ExternalLink>
        <div className={styles.contactLine} />
        <ExternalLink className={styles.contactInstagramButton} href={INSTAGRAM_URL}>
          <Instagram size={17} />
          @angelac.dermato
        </ExternalLink>
      </div>
    </section>
  );
}
