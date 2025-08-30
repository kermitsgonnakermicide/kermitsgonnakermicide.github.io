import React from 'react';
import { Github, Mail, Youtube } from 'lucide-react';
import { SocialIcon } from './SocialIcon';

export function SocialBar() {
  return (
    <div className="w-full bg-portfolio-cream rounded-2xl flex items-center justify-center flex-wrap gap-4 md:gap-10 p-3 md:p-4">
      <SocialIcon href="https://github.com/kermitsgonnakermicide" Icon={Github} />
      <SocialIcon href="mailto:daksh@dakshvohra.com" Icon={Mail} />
      <SocialIcon href="https://youtube.com/@kermicidal" Icon={Youtube} />
    </div>
  );
}