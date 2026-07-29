import { Instagram, ShieldCheck } from "lucide-react";
import { credentials, INSTAGRAM_URL, WHATSAPP_URL } from "../lib/content";
import styles from "../page.module.css";
import { Brand } from "./Brand";
import { ExternalLink } from "./ExternalLink";
import { NavLinks } from "./NavLinks";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={styles.footerMain}>
        <div className={styles.footerBrand}>
          <Brand light />
          <p>Dermatologia clínica, cirúrgica e estética em Manaus.</p>
        </div>

        <div className={styles.footerCredentials}>
          <span className={styles.footerEyebrow}>Credenciais profissionais</span>
          {credentials.map(({ label, value }) => (
            <div className={styles.footerCredentialRow} key={label}>
              <ShieldCheck size={17} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerContact}>
          <span className={styles.footerEyebrow}>Agende sua avaliação</span>
          <ExternalLink className={styles.footerWhatsapp} href={WHATSAPP_URL}>
            <WhatsAppIcon size={18} />
            Agendar consulta
          </ExternalLink>
          <ExternalLink className={styles.footerInstagram} href={INSTAGRAM_URL}>
            <Instagram size={15} strokeWidth={1.6} />
            @angelac.dermato
          </ExternalLink>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2026 Dra. Angela Carolina Nascimento</span>
        <nav aria-label="Navegação do rodapé">
          <NavLinks />
        </nav>
        <div>
          <span>Site desenvolvido por</span>
          <ExternalLink href="https://lumasites.com.br">Luma Sites</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
