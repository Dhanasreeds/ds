import React from "react";
import ih from "../../assets/IH.jpg";
import csc from "../../assets/c.png";
import idm from "../../assets/idm.png";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img className="w-32 h-32 object-contain p-4" src={ih} alt={`banner`} />
            <span className="text-white">
              <h2 className="leading-tight">MERN Stack intern</h2>
              <p className="text-sm leading-tight font-thin">
                November 2024 - March 2025
              </p>
              <ul className="text-sm p-2">
                <li>- Intern as MERN stack developer</li>
                <li>- Bulit strong foundation on backend with REST Api </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img className="w-32 h-32 object-contain p-4" src={csc} alt={`banner`} />
            <span className="text-white">
              <h2 className="leading-tight">Technical Trainer</h2>
              <p className="text-sm leading-tight font-thin">
                April 2025 - July 2025
              </p>
              <ul className="text-sm p-2">
                <li>- Handle c,c++ and python programming concept </li>
                <li>- improve strong programming knownledge</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img className="w-32 h-32 object-contain p-4" src={idm} alt={`banner`} />
            <span className="text-white">
              <h2 className="leading-tight">Technical Trainer</h2>
              <p className="text-sm leading-tight font-thin">
                August 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Working as technical trainer</li>
                <li>- Exploring the UI/UX design principle</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
