
export default function About () {

    return(
<section id="about">
        <div className=" bg-[#f4d9b0] text-[#333] flex flex-col items-center p-2 md:p-10 md:px-6 py-10 md:py-[3rem]">
          <h2
  className="relative font-bold text-3xl md:text-5xl mb-10 pb-2 w-max mx-auto 
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-full 
  after:bg-[linear-gradient(to_right,#333_50%,transparent_50%)] after:bg-[length:20px_4px] 
  after:[animation:dash_1s_linear_infinite]"
>About Me</h2>
      
          <p className="max-w-3xl text-lg md:text-[1.3rem] leading-[1.7rem] md:leading-9 text-gray-900">
            Hi, I'm Shreyansh 👋. I'm a Front-end web developer passionate
            about building clean and functional apps. I love working with{" "}
            <strong>Javascript, React, Redux Toolkit, and TailwindCSS</strong> to create
            beautiful, scalable apps. <strong> “Turning your ideas into modern, responsive, and user-friendly websites.”</strong> <br></br> Apart from coding, I’m also curious about{" "}
            <strong>business, finance, and technology trends</strong>. My goal
            is to land a great job and keep growing as a software engineer 🚀.
          </p>
        </div>
      </section>
    )
}