import React from "react";
import ProjectCard from "./ProjectCard";
import pimg from "../../assets/project/qm.png";
import dimg from "../../assets/project/cd.png";
import simg from "../../assets/project/ts.png";
import timg from "../../assets/project/td.png";
import cimg from "../../assets/project/ci.png";
import cdv from "../../assets/project/cdv.png";
import ecommerceVideo from "../../assets/videos/E-com.mp4";
import dashboardVideo from "../../assets/videos/dc.mp4";
import todoVideo from "../../assets/videos/td.mp4";
import tsVideo from "../../assets/videos/ts.mp4";
const Projects = () => {
  return (

    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          img={pimg}
          title="E-commerce Web App"
          main="A fully functional e-commerce site built with HTML, CSS, JS, and python. Includes cart, login, and admin panel."
          videoFile={ecommerceVideo}
          repoUrl="https://github.com/Dhanasreeds/quickmart.git"
        />
        <ProjectCard
        img={dimg}
          title="Centralized Dashboard"
          main="Analytics dashboard using React and Django REST API, with charts and role-based access control."
          videoFile={dashboardVideo}
          repoUrl="https://github.com/Dhanasreeds/collector-task-management.git"
        />
        <ProjectCard
        img={simg}
          title="Text-to-Speech"
          main="Bringing text to life with my new Text-to-Speech web app, exploring innovation and creativity using HTML,CSS and JS. "
          videoFile={tsVideo}
          repoUrl="https://github.com/Dhanasreeds/text-to-speech.git"
        />
        <ProjectCard
        img={cimg}
          title="Mini calculator"
          main="Streamlining math operations with my minimalistic and functional mini calculator using HTML,CSS and JS."
          videoFile={cdv}
          repoUrl="https://github.com/Dhanasreeds/mini_calculator.git"
        />
        <ProjectCard
        img={timg}
          title="To-Do"
          main="Bringing order to your day with my To-Do web app, a testament to efficient task management using HTML,CSS and JS. "
          videoFile={todoVideo}
          repoUrl="https://github.com/Dhanasreeds/collector-task-management.git"
        />
      </div>
    </div>
  );
};

export default Projects;
