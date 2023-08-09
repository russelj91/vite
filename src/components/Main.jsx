import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="h-screen overflow-hidden relative">
      {/* Top background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-green-500"></div>
      {/* Bottom background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <div className="pb-10">
            <h1 className="sm:text-5xl text-4xl font-bold text-white text-center ">
              Hi My name is John Russel
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 lg:text-white text-center sm:text-black">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "a Junior Full stack Developer",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "but I focus on Front End Development",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1em",
                  paddingLeft: "5px",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </h2>
          </div>
          <div>
            <p className="text-dark py-5 mt-10 md:block hidden font-semibold">
              Hi, I'm a Full Stack Developer with a strong focus on Front End
              Development.
              <br /> I specialize in creating visually appealing and
              user-friendly websites using HTML, CSS, Bootstrap, Tailwind,
              JavaScript, jQuery, React, and Node JS. <br /> I also have
              knowledge in PHP, MySQL, and Laravel for developing scalable and
              efficient Back-End systems to support my Front-End work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
