import React from "react";
import { projects } from "../projects";

const Projects = () => {
  return (
    <section id="projects" className="mt-12 px-6 py-16 md:py-[9rem] ">
      <h2
  className="relative font-bold text-2xl md:text-4xl mb-10 pb-2 w-max mx-auto 
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-full 
  after:bg-[linear-gradient(to_right,#333_50%,transparent_50%)] after:bg-[length:20px_4px] 
  after:[animation:dash_1s_linear_infinite]"
>
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#333] text-[#f4d9b0] p-3 md:p-4 rounded-xl shadow-lg max-w-sm w-full mx-auto">
            <h3 className="text-lg mb-8">{project.title}</h3>
            <p className="mb-4 text-xs md:text-sm">{project.description}</p>
            <div className="flex space-x-4 w-full">
              <a
                href={project.link}
                target="_blank"
                className="bg-[#f4d9b0] text-[#333] px-3 py-1 font-bold shadow-md hover:opacity-80"
              >
                Live
              </a>
              <a
                href={project.code}
                target="_blank"
                className="bg-[#f4d9b0] text-[#333] px-3 py-1 font-bold shadow-md hover:opacity-80"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
      <h3 className="pt-5  mx-auto">
        More coming<span className="dot-animate"></span>
      </h3>
    </section>
  );
};

export default Projects;
