import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  href: string;
  Icon: LucideIcon;
}

export function SocialIcon({ href, Icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-portfolio-blue hover:text-portfolio-yellow transition-colors"
    >
      <Icon size={32} />
    </a>
  );
}