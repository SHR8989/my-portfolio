import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-[#f4d9b0] text-[#333] flex flex-col items-center md:p-10 md:px-6 py-16 md:py-[8rem]">
       <h2
  className="relative font-bold text-3xl md:text-5xl mb-10 pb-2 w-max mx-auto 
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-full 
  after:bg-[linear-gradient(to_right,#333_50%,transparent_50%)] after:bg-[length:20px_4px] 
  after:[animation:dash_1s_linear_infinite]"
>
          Contact
        </h2>
        <form 
        action="https://formspree.io/f/mgvlplyk"
        method="POST"
        className="w-full md:max-w-lg bg-[#333] p-6 rounded-lg shadow-lg text-[#f4d9b0] text-sm md:text-[1rem]">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded text-[#333] text-xs md:text-[1rem]"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded text-[#333] text-xs md:text-[1rem]"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea
            name="message"
              className="w-full p-2 rounded text-[#333] text-xs md:text-[1rem]"
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
  );
};

export default Contact;
