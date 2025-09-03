import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 lg:px-6 py-4 bg-black text-[#f4d9b0] shadow-md">
      {/* Logo */}
      <h1 className="text-lg md:text-xl rounded-md font-bold">
        <span className="font-bold">SHR</span>
        <span className="opacity-70">.dev</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 xl:space-x-8">
        {["home", "projects", "about", "skills", "contact"].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="text-[#f4d9b0] text-lg font-bold cursor-pointer px-3 py-1 border-2 border-transparent transition-all duration-200 hover:text-black hover:bg-[#f4d9b0] hover:border-[#f4d9b0] rounded-lg"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden text-2xl z-[60]"
        onClick={() => setIsOpen(!isOpen)}
      >
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
        <a
          href="#"
          className="bg-[#333] text-[#f4d9b0] px-2 py-0 shadow-lg text-xl rounded-lg hover:scale-110 transition-transform"
        >
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

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <ul className="flex flex-col items-start space-y-6 px-6 py-8">
          {["home", "projects", "about", "skills", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                rel="noopener noreferrer"
                className="block w-full text-[#f4d9b0] font-bold cursor-pointer px-3 py-1 hover:text-black hover:bg-[#f4d9b0] rounded-lg"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
