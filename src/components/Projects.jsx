import React from "react";
import { projects } from "../projects";

const Projects = () => {
  return (
    <section id="projects" className="mt-12 md:px-6 py-16 md:py-[9rem] ">
      <h2
  className="relative font-bold text-3xl md:text-5xl mb-8 pb-2 w-max mx-auto 
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-full 
  after:bg-[linear-gradient(to_right,#333_50%,transparent_50%)] after:bg-[length:20px_4px] 
  after:[animation:dash_1s_linear_infinite]"
>
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mt-10 mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="group hover:-translate-y-2 transition-all bg-[#333] text-[#f4d9b0] p-3 md:p-4 rounded-xl shadow-lg  w-full mx-auto">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-md shadow-md"
            />
            <h3 className="text-xl md:text-2xl my-5">{project.title}</h3>
            <p className="mb-4 leading-7 text-sm md:text-[1rem]">{project.description}</p>
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
      <h3 className="pt-5 text-center text-lg mx-auto">
        More coming<span className="dot-animate"></span>
      </h3>
    </section>
  );
};

export default Projects;
