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
      <div className="flex-1 grid grid-rows-3 gap-[2%]">
        <ProjectBox 
          project_name={"Spooderbot"}
          description="Spooderbot is a quadraped spider-type robot running on a Raspbery Pi 5, with dual picam stereo vision capabilities and dynamic walking. "
          githubUrl="https://github.com/kermitsgonnakermicide/spooderbot"
        />
        <ProjectBox 
          project_name={"Robodog"}
          description="Robodog was the natural evolution of Spooderbot. It features a Raspberry Pi 5, along with a LiDAR and a proper stereo camera all running through ROS2. This project is a WIP at the moment."
          githubUrl="https://github.com/kermitsgonnakermicide/robodog"
        />
        <ProjectBox 
          project_name={"3D Printer"}
          description="This CoreXY 3D Printer was my first foray into making my own 3d printer. It features a large build volume, a belt-driven XY gantry and triple Z-axis motors with a BTT Octopus motherboard. Again, this project is a WIP at the moment."
          githubUrl="https://github.com/kermitsgonnakermicide/3Dprinter"
        />
      </div>
    </div>
  );
}