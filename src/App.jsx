import { useState } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      title: "GST-EMI Calculator",
      description:
        "A web app to calculate GST with options for inclusive/exclusive tax, invoice-friendly output. Simplify your loan payments with GST included. Take control of your finances. Accurately plan for loan repayments by including all applicable GST upfront.",
      link: "https://gst-emi-tool.vercel.app", // live demo web link
      code: "https://github.com/SHR8989/gst-emi-calculator", // GitHub repo link
    },
    {
      title: "Invoice Generator",
      description:
        "An invoice is a document outlining the exchange of the seller's product or service for the buyer's payment. A tool to create, edit, and manage invoices with localStorage persistence using React and Redux Toolkit. You can also download it as PDF.",
      link: "https://invoice-get-app.vercel.app",
      code: "https://github.com/SHR8989/invoice-generator",
    },
  ];

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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-12 px-6 py-16 md:py-[9rem] ">
        <h2 className="relative group text-2xl md:text-4xl font-bold mb-10 border-dashed border-[#333] pb-5 w-max mx-auto">
          Projects
          <span
            className="absolute bottom-0 left-0 w-full h-[4px] border-b-4 border-dashed border-[#333] 
      bg-[linear-gradient(90deg,#333_50%,transparent_50%)] bg-[length:20px_4px] 
      opacity-0 group-hover:opacity-100 group-hover:animate-dash"
          ></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#333] text-[#f4d9b0] p-4 shadow-lg">
              <h3 className="text-lg mb-8">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4">
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

      {/* About section */}
      <About />

      <Skills />

      {/* Contact section */}
      <section id="contact">
        <div className="bg-[#f4d9b0] text-[#333] flex flex-col items-center p-10 px-6 py-16 md:py-[8rem]">
          <h2 className="relative group text-2xl md:text-4xl font-bold mb-10 border-dashed border-[#333] pb-5 w-max mx-auto">
            Contact
            <span
              className="absolute bottom-0 left-0 w-full h-[4px] border-b-4 border-dashed border-[#333] 
      bg-[linear-gradient(90deg,#333_50%,transparent_50%)] bg-[length:20px_4px] 
      opacity-0 group-hover:opacity-100 group-hover:animate-dash"
            ></span>
          </h2>
          <form className="w-full max-w-md bg-[#333] p-6 rounded-lg shadow-lg text-[#f4d9b0]">
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded text-[#333]"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded text-[#333]"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full p-2 rounded text-[#333]"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="bg-[#f4d9b0] text-[#333] px-4 py-2 font-bold hover:opacity-80">
              Send
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
