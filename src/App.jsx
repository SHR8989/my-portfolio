import { useState } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Download } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4d9b0] text-[#333] font-pixel px-6 py-4 overflow-x-hidden">
      {/* Header */}
      <Navbar isOpen={menuOpen} setIsOpen={setMenuOpen} />

      {/* Hero section */}
      <section
        id="home"
        className="mb-16 pt-40 flex flex-col md:flex-row items-center md:items-start gap-10"
      >
        {/* Hero Image */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-[22rem] md:h-[23rem] bg-[#3232315e] inline-block p-2 shadow-[5px_5px_10px_#333] rounded-full overflow-hidden">
            <img
              src="/profile.jpeg" // image in /public
              alt="Your Name"
              className="w-max h-full object-cover pixelated rounded-full hover:opacity-100 opacity-75 transition-opacity duration-300 "
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="flex-1">
          <h1 className="bg-[#333] text-[#f4d9b0] text-3xl md:text-4xl p-2 inline-block mb-6">
            Hi there
          </h1>
          <p className="leading-9 mb-4">
            My name is <b className="text-2xl">Shreyansh Sahu</b>. “I’m a
            front-end React developer. I create responsive websites, portfolio
            sites, and web apps. I have a passion for all things technology and
            design.
          </p>
          <p className="leading-8 mb-4">
            In addition to my love of tech and design, I’m also interested in
            education, history, economics and politics.
          </p>
          <p className="leading-7">
            Below are details of some of the projects I’ve developed over my
            years of coding experience.
          </p>
          <a
            href="/cv.pdf"
            download="Shreyansh_Resume.pdf"
            className="w-auto inline-flex mt-8  items-center gap-2 bg-[#333] text-[#f4d9b0] px-6 py-3 rounded-2xl shadow-lg hover:bg-[#555] transition-all"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
      </section>

      <Projects />

      <About />

      <Skills />

      <Contact />

      <Footer />
    </div>
  );
}
