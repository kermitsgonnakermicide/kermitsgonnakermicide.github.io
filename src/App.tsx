import React from 'react';
import { SocialBar } from './components/SocialBar';
import { ProjectsSection } from './components/ProjectsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white grid-bg relative">
      <div className="absolute inset-0 flex items-center justify-center px-[10%]">
        <div className="w-full flex gap-4">
          {/* Main content box */}
          <div className="flex-1 min-h-[600px] bg-portfolio-blue/90 rounded-3xl shadow-2xl relative p-8">
            {/* Social bar */}
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