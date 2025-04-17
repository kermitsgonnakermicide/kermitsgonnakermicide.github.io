import React from 'react';
import { ProjectBox } from './ProjectBox';

export function ProjectsSection() {
  return (
    <div className="h-full p-[3%] flex flex-col">
      {/* Title box */}
      <div className="bg-portfolio-cream rounded-2xl p-[3%] mb-[2%]">
        <h1 className="text-2xl font-bold text-center">My Projects</h1>
      </div>

      {/* Project boxes container with reduced spacing */}
      <div className="flex-1 grid grid-rows-4 gap-[2%]">
        <ProjectBox 
          number={1}
          description="something"
          githubUrl="https://github.com/kermitsgonnakermicide/project1"
        />
        <ProjectBox 
          number={2}
          description="something"
          githubUrl="https://github.com/kermitsgonnakermicide/project2"
        />
        <ProjectBox 
          number={3}
          description="something"
          githubUrl="https://github.com/kermitsgonnakermicide/project3"
        />
        <ProjectBox 
          number={4}
          description="something"
          githubUrl="https://github.com/kermitsgonnakermicide/project4"
        />
      </div>
    </div>
  );
}