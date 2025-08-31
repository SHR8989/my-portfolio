import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className=" px-6 py-10 md:py-[8rem] bg-[#f4d9b0] text-[#333]"
    >
      <h2 className="relative group text-2xl md:text-4xl font-bold mb-10 border-dashed border-[#333] pb-5 w-max mx-auto">
        Skills
        <span
          className="absolute bottom-0 left-0 w-full h-[4px] border-b-4 border-dashed border-[#333] 
      bg-[linear-gradient(90deg,#333_50%,transparent_50%)] bg-[length:20px_4px] 
      opacity-0 group-hover:opacity-100 group-hover:animate-dash"
        ></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 justify-items-center">
        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-orange-500">
          <FaHtml5 className="text-6xl text-orange-600" />
          <p className="mt-2 font-semibold">HTML</p>
        </div>

        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-blue-500">
          <FaCss3Alt className="text-6xl text-blue-600" />
          <p className="mt-2 font-semibold">CSS</p>
        </div>

        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-110 hover:text-yellow-500">
          <SiJavascript className="text-6xl text-yellow-500" />
          <p className="mt-2 font-semibold">JavaScript</p>
        </div>

        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-cyan-400">
          <FaReact className="text-6xl text-cyan-400 animate-spin-slow" />
          <p className="mt-2 font-semibold">React</p>
        </div>

        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-sky-500">
          <SiTailwindcss size={60} className="text-sky-500" />
          <p className="mt-2 font-bold">Tailwind</p>
        </div>
      </div>
    </section>
  );
}
