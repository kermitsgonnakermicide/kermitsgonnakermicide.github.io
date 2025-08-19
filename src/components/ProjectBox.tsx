import React from 'react';
import { Github } from 'lucide-react';

interface ProjectBoxProps {
  project_name: string;
  description: string;
  githubUrl: string;
}

export function ProjectBox({ project_name, description, githubUrl }: ProjectBoxProps) {
  return (
    <div className="bg-portfolio-cream rounded-2xl p-[3%] h-full">
      <div className="flex items-start">
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[25%] text-portfolio-blue hover:text-portfolio-yellow transition-colors"
        >
          <Github size={50} />
        </a>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{project_name}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}