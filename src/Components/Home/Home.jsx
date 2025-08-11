import React from "react";
import avatarImg from "../../assets/ds__.png";
import cv from "../../assets/Dhanasree+k+.pdf";
import logo from "../../assets/ds.png";
import TextChange from "../TextChange";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <br/>
        <h2 className="text-sm md:text-2xl tracking-tight ">
          Fullstack python developer | Technical Trainner
        </h2>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        <div className="flex space-x-4 mt-4 text-2xl md:text-3xl">
          <a
            href="https://www.linkedin.com/in/dhanasree-k-819781233"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Dhanasreeds"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:dhanasree315@gmail.com"
            className="hover:text-red-400"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-col md:flex-row gap-3">
          <a
            href={cv}
            download="Dhanasree_Resume.pdf"
            className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#4a9477] text-center"
          >
            Download Resume
          </a>
        </div>
        </div>
        <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
