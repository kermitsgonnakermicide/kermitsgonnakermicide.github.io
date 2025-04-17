import React from 'react';
import { Github, Mail, Youtube } from 'lucide-react';
import { SocialIcon } from './SocialIcon';

export function SocialBar() {
  return (
    <div className="absolute bottom-[3%] left-[3%] right-[3%] h-[20%] bg-portfolio-cream rounded-2xl flex items-center justify-center space-x-12">
      <SocialIcon href="https://github.com/kermitsgonnakermicide" Icon={Github} />
      <SocialIcon href="mailto:daksh.vohra1@gmail.com" Icon={Mail} />
      <SocialIcon href="https://youtube.com/@kermicidal" Icon={Youtube} />
    </div>
  );
}