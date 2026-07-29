import type { ReactNode } from "react";
import { navItems } from "../lib/content";

type NavLinksProps = {
  onNavigate?: () => void;
  renderIcon?: (href: string) => ReactNode;
};

export function NavLinks({ onNavigate, renderIcon }: NavLinksProps) {
  return (
    <>
      {navItems.map(({ label, href }) => (
        <a key={href} href={href} onClick={onNavigate}>
          {label}
          {renderIcon?.(href)}
        </a>
      ))}
    </>
  );
}
