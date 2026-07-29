import { Microscope, ScanSearch, ShieldCheck, Stethoscope } from "lucide-react";

export const iconRegistry = {
  Stethoscope,
  ScanSearch,
  Microscope,
  ShieldCheck,
};

export type IconName = keyof typeof iconRegistry;
