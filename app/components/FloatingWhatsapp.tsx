"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "../lib/content";
import styles from "../page.module.css";
import { ExternalLink } from "./ExternalLink";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsapp() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("rodape");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <ExternalLink
      className={`${styles.floatingWhatsapp} ${
        footerVisible ? styles.floatingWhatsappHidden : ""
      }`}
      href={WHATSAPP_URL}
      aria-label="Agendar consulta pelo WhatsApp"
    >
      <WhatsAppIcon size={24} />
    </ExternalLink>
  );
}
