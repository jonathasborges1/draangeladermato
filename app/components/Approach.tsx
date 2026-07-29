import { principles } from "../lib/content";
import styles from "../page.module.css";
import { iconRegistry } from "./icons";

export function Approach() {
  return (
    <section className={styles.approach} id="atendimento">
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrowDark}>Por que escolher o meu atendimento?</p>
        <h2>Uma investigação cuidadosa é o primeiro passo para um tratamento eficaz.</h2>
      </div>

      <div className={styles.approachContent}>
        <p className={styles.approachLead}>
          Aqui cada paciente é ouvido com atenção, pois compreender a sua
          história faz parte do diagnóstico.
        </p>
      </div>

      <div className={styles.principles}>
        {principles.map(({ number, icon, title, text }) => {
          const Icon = iconRegistry[icon];
          return (
            <article key={number}>
              <span>{number}</span>
              <h3>
                <Icon size={24} /> {title}
              </h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
