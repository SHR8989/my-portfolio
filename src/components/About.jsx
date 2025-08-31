
export default function About () {

    return(
<section id="about">
        <div className=" bg-[#f4d9b0] text-[#333] flex flex-col items-center p-10 px-6 py-10 md:py-[3rem]">
          <h2 className="relative group text-2xl md:text-4xl font-bold mb-10 border-dashed border-[#333] pb-5 w-max mx-auto">About Me<span className="absolute bottom-0 left-0 w-full h-[4px] border-b-4 border-dashed border-[#333] 
      bg-[linear-gradient(90deg,#333_50%,transparent_50%)] bg-[length:20px_4px] 
      opacity-0 group-hover:opacity-100 group-hover:animate-dash"></span></h2>
      
          <p className="max-w-2xl text-sm md:text-lg leading-6 text-gray-900">
            Hi, I'm Shreyansh 👋. I'm a full-stack web developer passionate
            about building clean and functional apps. I love working with{" "}
            <strong>Javascript, React, Redux Toolkit, and TailwindCSS</strong> to create
            beautiful, scalable apps. <strong> “Turning your ideas into modern, responsive, and user-friendly websites.”</strong> <br></br><br></br> Apart from coding, I’m also curious about{" "}
            <strong>business, finance, and technology trends</strong>. My goal
            is to land a great job and keep growing as a software engineer 🚀.
          </p>
        </div>
      </section>
    )
}