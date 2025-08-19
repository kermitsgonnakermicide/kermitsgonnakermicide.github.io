import React from 'react';
import { SocialBar } from './components/SocialBar';
import { ProjectsSection } from './components/ProjectsSection';
import { NameSection } from './components/NameSection';
import { AboutSection } from './components/AboutSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white grid-bg relative">
      <div className="absolute inset-0 flex items-center justify-center px-[10%]">
        <div className="w-full flex gap-4">
          {/* main content box */}
          <div className="flex-1 min-h-[600px] bg-portfolio-blue/90 rounded-3xl shadow-2xl relative p-8">
            {/* name section */}
            <NameSection />
            
            {/* About section */}
            <AboutSection />
            
            {/* social bar(yuck, who even needs a social life)*/}
            <SocialBar />
          </div>

          {/* Yellow accent box */}
          <div className="w-[30%] min-h-[600px] bg-portfolio-yellow rounded-3xl shadow-2xl">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </div>
  );
}