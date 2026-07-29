import type { AnchorHTMLAttributes } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}
