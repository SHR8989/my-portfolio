import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className=" px-6 py-10 md:py-[8rem] bg-[#f4d9b0] text-[#333]"
    >
      <h2
  className="relative font-bold text-2xl md:text-4xl mb-10 pb-2 w-max mx-auto 
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-full 
  after:bg-[linear-gradient(to_right,#333_50%,transparent_50%)] after:bg-[length:20px_4px] 
  after:[animation:dash_1s_linear_infinite]"
>
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 justify-items-center">
        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-orange-500">
          <FaHtml5 className="text-5xl md:text-6xl text-orange-600" />
          <p className="mt-2 font-semibold text-xs lg:text-sm">HTML</p>
        </div>

        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-blue-500">
          <FaCss3Alt className="text-5xl md:text-6xl text-blue-600" />
          <p className="mt-2 font-semibold text-xs lg:text-sm">CSS</p>
        </div>

        <div className="flex flex-col items-center  transform transition duration-300 hover:scale-110 hover:text-yellow-500">
          <SiJavascript className="text-5xl md:text-6xl text-yellow-500" />
          <p className="mt-2 font-semibold text-xs lg:text-sm">JavaScript</p>
        </div>

        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-cyan-400">
          <FaReact className="text-5xl md:text-6xl text-cyan-400 animate-spin-slow" />
          <p className="mt-2 font-semibold text-xs lg:text-sm">React</p>
        </div>

        <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-sky-500">
          <SiTailwindcss
            size={60}
            className="text-sky-500 text-4xl md:text-6xl"
          />
          <p className="mt-2 font-semibold text-xs lg:text-sm">Tailwind</p>
        </div>
      </div>
    </section>
  );
}
