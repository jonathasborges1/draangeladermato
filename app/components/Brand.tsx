import Image from "next/image";
import styles from "../page.module.css";

function BrandLogo() {
  return (
    <Image
      className={styles.brandLogo}
      src="/images/dra-angela-monogram.png"
      alt="Monograma AC"
      width={841}
      height={741}
      priority
    />
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`${styles.brand} ${light ? styles.brandLight : ""}`}>
      <BrandLogo />
      <div className={styles.brandText}>
        <span className={styles.brandHonorific}>Dra.</span>
        <strong>Angela Carolina</strong>
        <span className={styles.brandSurname}>Nascimento</span>
        <span className={styles.brandCredentials}>CRM AM 14029 · RQE 6467</span>
        <span className={styles.brandAreas}>
          Dermatologista · Clínica · Cirúrgica · Estética
        </span>
      </div>
    </div>
  );
}

export function HeaderBrand({ compact }: { compact: boolean }) {
  return (
    <div
      className={`${styles.brand} ${styles.brandInline} ${
        compact ? styles.brandCompact : ""
      }`}
    >
      <BrandLogo />
      <div className={styles.brandText}>
        <span className={styles.brandName}>
          {!compact && <span className={styles.brandHonorific}>Dra. </span>}
          Angela Carolina Nascimento
        </span>
        <span className={styles.brandMeta}>
          <span>CRM-AM 14029</span>
          <span className={styles.brandDot} aria-hidden="true" />
          <span>RQE 6467</span>
          <span className={styles.brandDot} aria-hidden="true" />
          <span>Dermatologista</span>
        </span>
      </div>
    </div>
  );
}
