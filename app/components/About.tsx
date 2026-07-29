import Image from "next/image";
import { formationItems } from "../lib/content";
import styles from "../page.module.css";
import { iconRegistry } from "./icons";

export function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.aboutVisual}>
        <div className={styles.aboutVisualImage}>
          <Image
            src="/images/dra-angela-hero-conceitual.png"
            alt=""
            fill
            sizes="(min-width: 960px) 45vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.aboutVisualOverlay} aria-hidden="true" />
        <div className={styles.aboutQuote}>
          <span className={styles.quoteMark}>“</span>
          <p>
            Mais do que tratar doenças da pele, meu propósito é cuidar de
            pessoas.<span className={styles.quoteMarkClose}>&rdquo;</span>
          </p>
        </div>
        <div className={styles.aboutMonogram} aria-hidden="true">
          AC
        </div>
      </div>

      <div className={styles.aboutCopy}>
        <p className={styles.eyebrowDark}>Sobre a médica</p>
        <h2>Dra. Angela Carolina Nascimento</h2>
        <p className={styles.aboutLead}>
          Acredito que cuidar da pele começa pelo diagnóstico correto.
        </p>
        <p>
          Antes de qualquer tratamento, existe uma pessoa para ser ouvida, uma
          pele para ser examinada com atenção e decisões que devem ser guiadas
          pela ciência. Foi essa convicção que me levou a escolher a
          Dermatologia e orienta cada atendimento que realizo.
        </p>
        <p>
          Sou médica formada pela Universidade José do Rosário Vellano
          (UNIFENAS) desde 2009 e especialista em Dermatologia pelo Hospital
          Central do Exército.
        </p>
        <p>
          Como Capitão Médica do Exército Brasileiro, fui transferida para
          Manaus em 2025. Foi aqui que me senti acolhida e confiante para
          concretizar um antigo sonho: abrir meu consultório e oferecer um
          atendimento pautado na ética, no respeito e na medicina baseada em
          evidências.
        </p>

        <div
          className={styles.formationGrid}
          aria-label="Formação e registros profissionais"
        >
          {formationItems.map(({ icon, label, value, detail }) => {
            const Icon = iconRegistry[icon];
            return (
              <article key={label}>
                <Icon size={20} aria-hidden="true" />
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{detail}</small>
              </article>
            );
          })}
        </div>

        <p className={styles.signature}>
          “O sucesso do tratamento começa com a confiança em quem cuida de você.”
        </p>
      </div>
    </section>
  );
}
