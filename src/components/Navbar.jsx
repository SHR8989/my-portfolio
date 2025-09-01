import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar({ isOpen, setIsOpen }) {
  return (
   <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between  px-4 lg:px-6 py-4 bg-black text-[#f4d9b0] shadow-md">
      <h1 className="text-lg md:text-xl font-bold"><span className="font-bold">SHR</span><span className="opacity-70">.dev</span>
</h1>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 xl:space-x-8">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 border-2 border-transparent transition-all duration-200 hover:text-black hover:bg-[#f4d9b0] hover:border-[#f4d9b0] rounded-lg"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 border-2 border-transparent transition-all duration-200 hover:text-black hover:bg-[#f4d9b0] hover:border-[#f4d9b0] rounded-lg"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 border-2 border-transparent transition-all duration-200 hover:text-black hover:bg-[#f4d9b0] hover:border-[#f4d9b0] rounded-lg"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 border-2 border-transparent transition-all duration-200 hover:text-black hover:bg-[#f4d9b0] hover:border-[#f4d9b0] rounded-lg"
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 border-2 border-transparent transition-all duration-200 hover:text-black hover:bg-[#f4d9b0] hover:border-[#f4d9b0] rounded-lg"
          >
            Contact
          </Link>
        </li>
      </ul>
    

        {/* Mobile Hamburger */}
         <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

        {/* Social links */}
        <div className="hidden md:flex items-center space-x-4">
           <a
    href="https://www.linkedin.com/in/shreyansh-sahu-9823b2279"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#333] text-[#f4d9b0] p-2 rounded-lg shadow-lg hover:scale-110 transition-transform"
  >
    <FaLinkedin size={22} />
  </a>
          <a href="#" className="bg-[#333] text-[#f4d9b0] px-2 py-0 pb-2 shadow-lg text-lg rounded-lg hover:scale-110 transition-transform">
            🦋
          </a>
         <a
    href="https://github.com/SHR8989"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#333] text-[#f4d9b0] p-2 rounded-lg shadow-lg hover:scale-110 transition-transform"
  >
    <FaGithub size={20} />
  </a>
        </div>
      

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 lg:hidden">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
               className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 hover:text-black hover:bg-[#f4d9b0] rounded-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
               className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 hover:text-black hover:bg-[#f4d9b0] rounded-lg"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
               className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 hover:text-black hover:bg-[#f4d9b0] rounded-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
               className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 hover:text-black hover:bg-[#f4d9b0] rounded-lg"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
               className="text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 hover:text-black hover:bg-[#f4d9b0] rounded-lg"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
