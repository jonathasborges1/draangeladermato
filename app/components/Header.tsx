"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "../lib/content";
import styles from "../page.module.css";
import { HeaderBrand } from "./Brand";
import { ExternalLink } from "./ExternalLink";
import { NavLinks } from "./NavLinks";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerInner}>
        <a href="#inicio" aria-label="Voltar ao início">
          <HeaderBrand compact={scrolled} />
        </a>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <NavLinks />
        </nav>

        <ExternalLink className={styles.headerCta} href={WHATSAPP_URL}>
          Agendar consulta
          <WhatsAppIcon size={16} />
        </ExternalLink>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}>
        <NavLinks
          onNavigate={() => setMenuOpen(false)}
          renderIcon={() => <ChevronRight size={16} />}
        />
        <ExternalLink href={WHATSAPP_URL}>
          Agendar consulta
          <WhatsAppIcon size={16} />
        </ExternalLink>
      </div>
    </header>
  );
}
