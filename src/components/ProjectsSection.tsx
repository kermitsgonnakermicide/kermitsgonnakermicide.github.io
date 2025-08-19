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
          description="Spooderbot is a quadraped spider-type robot running on a Raspbery Pi 5, with dual picam stereo vision capabilities and dynamic walking. This project was my first 'real' robotics project that wasn't just for a competition or school and it taught me a great deal"
          githubUrl="https://github.com/kermitsgonnakermicide/spooderbot"
        />
        <ProjectBox 
          number={2}
          description="Robodog was the natural evolution of Spooderbot, taking the lessons learned from that project and applying them to a quadruped dog-type robot. It features a Raspberry Pi 5, along with a LiDAR and a proper stereo camera all running through ROS2. This project is a WIP at the moment."
          githubUrl="https://github.com/kermitsgonnakermicide/robodog"
        />
        <ProjectBox 
          number={3}
          description="This CoreXY 3D Printer was my first foray into making my own 3d printer. It features a large build volume, a belt-driven XY gantry and triple Z-axis motors with a BTT Octopus motherboard. Again, this project is a WIP at the moment."
          githubUrl="https://github.com/kermitsgonnakermicide/project3"
        />
        <ProjectBox 
          number={4}
          description="This 60% keyboard is arguably my most useful project in my daily life - it features a custom PCB, HMX-Macchiato type switches and is programmed in KMK"
          githubUrl="https://github.com/kermitsgonnakermicide/project4"
        />
      </div>
    </div>
  );
}