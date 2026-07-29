import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Conditions } from "./components/Conditions";
import { FinalCta } from "./components/FinalCta";
import { FloatingWhatsapp } from "./components/FloatingWhatsapp";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { physicianSchema } from "./lib/content";
import styles from "./page.module.css";

export default function DraAngelaPage() {
  return (
    <main className={styles.page} id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      <Header />
      <Hero />
      <TrustStrip />
      <Approach />
      <Conditions />
      <About />
      <FinalCta />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
