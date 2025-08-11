import React from "react";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
       <div className="text-white p-10 md:p-30 max-w-2xl mx-auto">
      <h1 className="text-xl md:text-3xl font-bold mb-12">About Me</h1>
      <p className="text-sm md:text-sm leading-relaxed tracking-wide">
        Hello! I'm a passionate and dedicated tech professional with a Bachelor's degree in Computer Science and Engineering (B.E. CSE).
        I specialize in <span className="font-semibold text-[#68a0ff]">Frontend Web Development</span> and have solid experience in building responsive and user-friendly interfaces.
        <br /><br />
        On the backend side, I primarily work with the <span className="font-semibold text-[#44c08a]">Django framework</span> and also have hands-on knowledge of <span className="font-semibold">Node.js</span>.
        I love exploring both client-side and server-side technologies to create complete and efficient web solutions.
        <br /><br />
        Currently, I'm working as a <span className="font-semibold text-[#f7b731]">Technical Trainer</span>, where I get to share my knowledge and help others grow in the tech field. Teaching has not only improved my communication and leadership skills but also deepened my understanding of core technical concepts.
        <br /><br />
        I'm always eager to learn new technologies, take on challenges, and collaborate on exciting projects.
      </p>
    </div>
    </div>
  );
};
export default About;
