import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-angela-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-angela-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://draangeladermato.com.br"),
  title: "Dra. Angela Carolina | Dermatologista em Manaus",
  description:
    "Dra. Angela Carolina Nascimento, médica dermatologista em Manaus. CRM-AM 14029, RQE 6467 e formação em Dermatologia pelo Hospital Central do Exército.",
  alternates: {
    canonical: "https://draangeladermato.com.br",
  },
  openGraph: {
    title: "Dra. Angela Carolina Nascimento | Dermatologista em Manaus",
    description:
      "Médica dermatologista em Manaus, CRM-AM 14029 e RQE 6467. Atendimento baseado em formação especializada, diagnóstico preciso e evidências.",
    type: "website",
    locale: "pt_BR",
    url: "https://draangeladermato.com.br",
    images: [
      {
        url: "/images/dra-angela-og.png",
        width: 1200,
        height: 630,
        alt: "Dra. Angela Carolina Nascimento — Dermatologia clínica em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Angela Carolina Nascimento | Dermatologista em Manaus",
    description:
      "Médica dermatologista em Manaus, CRM-AM 14029 e RQE 6467.",
    images: ["/images/dra-angela-og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
