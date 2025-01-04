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
          description="A revolutionary web application that transforms how users interact with data visualization."
          githubUrl="https://github.com/yourusername/project1"
        />
        <ProjectBox 
          number={2}
          description="An AI-powered tool that helps developers write better code faster."
          githubUrl="https://github.com/yourusername/project2"
        />
        <ProjectBox 
          number={3}
          description="A modern e-commerce platform built with cutting-edge technologies."
          githubUrl="https://github.com/yourusername/project3"
        />
        <ProjectBox 
          number={4}
          description="A cross-platform mobile application for seamless task management."
          githubUrl="https://github.com/yourusername/project4"
        />
      </div>
    </div>
  );
}