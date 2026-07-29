import Image from "next/image";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "../lib/content";
import styles from "../page.module.css";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroAmbient} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>
          <span />
          Dermatologia clínica em Manaus
        </p>
        <h1 id="hero-title">
          Sua pele merece um cuidado guiado pela ciência
          <em> e conduzido com responsabilidade.</em>
        </h1>
        <p className={styles.heroLead}>
          Atendimento realizado por médica com formação completa, para um
          diagnóstico preciso, tratamento individualizado e acompanhamento
          baseado nas melhores evidências científicas.
        </p>

        <div
          className={styles.credentialSpotlight}
          aria-label="Credenciais profissionais da Dra. Angela Carolina Nascimento"
        >
          <ShieldCheck size={25} aria-hidden="true" />
          <div>
            <span>Registro médico</span>
            <strong>CRM-AM 14029</strong>
          </div>
          <div>
            <span>Especialista em Dermatologia</span>
            <strong>RQE 6467</strong>
          </div>
        </div>
        <p className={styles.credentialNote}>
          RQE é o Registro de Qualificação de Especialista em Dermatologia.
        </p>

        <div className={styles.heroActions}>
          <ExternalLink className={styles.primaryButton} href={WHATSAPP_URL}>
            Agendar uma consulta
            <ArrowRight size={17} />
          </ExternalLink>
          <a className={styles.textButton} href="#atendimento">
            Conhecer o atendimento
            <ArrowDown size={15} />
          </a>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.heroFrame}>
          <Image
            src="/images/dra-angela-hero-conceitual.png"
            alt="Retrato da Dra. Angela Carolina Nascimento em ambiente clínico"
            fill
            priority
            sizes="(min-width: 960px) 48vw, 100vw"
            quality={90}
          />
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span>Role para descobrir</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
