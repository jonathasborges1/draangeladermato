const WHATSAPP_NUMBER = "559282902505";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma consulta com a Dra. Angela Carolina Nascimento.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/angelac.dermato/";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av+M%C3%A1rio+Ypiranga+315+Adrian%C3%B3polis+Manaus";

export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dra. Angela Carolina Nascimento",
  url: "https://draangeladermato.com.br",
  image: "https://draangeladermato.com.br/images/dra-angela-hero-conceitual.png",
  jobTitle: "Médica dermatologista",
  identifier: [
    {
      "@type": "PropertyValue",
      name: "CRM-AM",
      value: "14029",
    },
    {
      "@type": "PropertyValue",
      name: "RQE em Dermatologia",
      value: "6467",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade José do Rosário Vellano (UNIFENAS)",
  },
  knowsAbout: [
    "Dermatologia clínica",
    "Dermatologia cirúrgica",
    "Dermatologia estética",
  ],
  areaServed: {
    "@type": "City",
    name: "Manaus",
  },
};

export const navItems: { label: string; href: string }[] = [
  { label: "Atendimento", href: "#atendimento" },
  { label: "Quando procurar", href: "#quando-procurar" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const careGroups = [
  {
    number: "01",
    eyebrow: "Pele",
    title: "Alterações da pele",
    text: "Acne, melasma, rosácea, dermatites, alergias, psoríase, vitiligo, urticária, micoses, herpes, coceira persistente e hidradenite supurativa.",
  },
  {
    number: "02",
    eyebrow: "Cabelos & unhas",
    title: "Queda de cabelo e problemas nas unhas",
    text: "Queda de cabelo, calvície, caspa, dermatite seborreica, doenças do couro cabeludo, micoses e outras alterações das unhas.",
  },
  {
    number: "03",
    eyebrow: "Prevenção",
    title: "Pintas, sinais e câncer de pele",
    text: "Avaliação de pintas e sinais, prevenção do câncer de pele e acompanhamento de lesões que mudaram de forma, cor ou tamanho.",
  },
  {
    number: "04",
    eyebrow: "Cirurgias",
    title: "Procedimentos dermatológicos",
    text: "Avaliação de verrugas, cistos, caroços, furúnculos e outras lesões com indicação de pequenas cirurgias da pele.",
  },
  {
    number: "05",
    eyebrow: "Estética",
    title: "Dermatologia estética",
    text: "Toxina Botulínica, Peeling, Microagulhamento, Laser de CO2, MMP, Drug Delivery, Tratamento de cicatrizes de acne.",
  },
];

export const credentials = [
  { label: "Registro médico", value: "CRM-AM 14029" },
  { label: "Especialista em Dermatologia", value: "RQE 6467" },
];

export const principles = [
  {
    number: "01",
    icon: "ScanSearch" as const,
    title: "Escuta que investiga",
    text: "Sua história, seus sintomas e sua rotina orientam uma avaliação mais precisa.",
  },
  {
    number: "02",
    icon: "Microscope" as const,
    title: "Ciência que orienta",
    text: "Tratamentos atualizados e fundamentados nas melhores evidências disponíveis.",
  },
  {
    number: "03",
    icon: "ShieldCheck" as const,
    title: "Responsabilidade que acompanha",
    text: "Um plano individualizado, transparente e acompanhado ao longo do tratamento.",
  },
];

export const trustHighlights = [
  {
    icon: "Stethoscope" as const,
    text: "Atendimento",
    highlight: "adulto e infantil",
  },
  {
    icon: "ScanSearch" as const,
    text: "Avaliação",
    highlight: "cuidadosa e completa",
  },
  {
    icon: "Microscope" as const,
    text: "Condutas baseadas",
    highlight: "em evidências científicas",
  },
  {
    icon: "ShieldCheck" as const,
    text: "Decisões com",
    highlight: "ética e transparência",
  },
];

export const formationItems = [
  {
    icon: "Stethoscope" as const,
    label: "Formação médica",
    value: "Medicina — UNIFENAS",
    detail: "Graduação concluída em 2009",
  },
  {
    icon: "Microscope" as const,
    label: "Especialização",
    value: "Dermatologia — HCE",
    detail: "Residência/Especialização em Dermatologia",
  },
  {
    icon: "ShieldCheck" as const,
    label: "Registros profissionais",
    value: "CRM-AM 14029",
    detail: "RQE 6467 · Dermatologia",
  },
];
