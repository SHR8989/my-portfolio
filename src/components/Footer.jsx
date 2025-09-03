import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black w-full text-white py-6 ">
      <div className="w-full px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-xs md:text-sm mb-4 sm:mb-0">
          © Copyright {new Date().getFullYear()} Shreyansh.dev. All Rights
          Reserved.
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/SHR8989"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyansh-sahu-9823b2279"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shreyansh8989@gmail.com"
            className="hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
