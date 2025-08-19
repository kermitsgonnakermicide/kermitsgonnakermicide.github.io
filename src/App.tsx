import React from 'react';
import { SocialBar } from './components/SocialBar';
import { ProjectsSection } from './components/ProjectsSection';
import { NameSection } from './components/NameSection';
import { AboutSection } from './components/AboutSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white grid-bg relative">
      <div className="px-4 py-6 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:px-[10%]">
        <div className="w-full flex flex-col gap-4 md:flex-row">
          {/* main content box */}
          <div className="flex-1 min-h-[400px] md:min-h-[600px] bg-portfolio-blue/90 rounded-3xl shadow-2xl relative p-4 md:p-8">
            {/* name section */}
            <NameSection />
            
            {/* About section */}
            <AboutSection />
            
            {/* social bar(yuck, who even needs a social life)*/}
            <SocialBar />
          </div>

          {/* Yellow accent box */}
          <div className="w-full md:w-[30%] min-h-[300px] md:min-h-[600px] bg-portfolio-yellow rounded-3xl shadow-2xl">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </div>
  );
}