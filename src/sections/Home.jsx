import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Profile from "../assets/Profile.png";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6 bg-black text-white">
      {/* Badge */}
      <h2 className="text-sm font-medium text-[#AC58F5] bg-white/5 px-5 py-2 rounded-full border border-[#AC58F5]/40 backdrop-blur-md">
        Hello, I'm
      </h2>

      {/* Name + Role */}
      <div className="mt-6 flex flex-col gap-3">
        <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-[#AC58F5] via-white to-[#AC58F5] text-transparent bg-clip-text">
          Prasanna Adhikari
        </h1>

        <h3 className="text-lg md:text-2xl text-white/80">
          BCA Student | Full Stack Developer
        </h3>
      </div>

      <img
        src={Profile}
        alt="Profile"
        className="mt-6 w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#AC58F5]/40 shadow-lg shadow-[#AC58F5]/30 hover:scale-105 transition-transform duration-300"
      />

      {/* Description */}
      <p className="mt-5 text-white/60 max-w-xl text-base md:text-lg">
        Building modern web experiences with passion, creativity.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center items-center sm:flex-row gap-4">
        <button className="px-6 py-3 rounded-xl bg-[#AC58F5] hover:bg-[#8a3de0] transition-all duration-300 shadow-lg shadow-[#AC58F5]/30">
          View Projects
        </button>

        <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
          Download CV
        </button>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex gap-6 text-xl text-white/70">
        <a
          href="https://github.com/prasannaadhikari2602"
          target="blank"
          className="hover:text-[#AC58F5] transition duration-300 ease-in-out text-4xl"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/prasanna-adhikari-52977a409/"
          target="blank"
          className="hover:text-[#AC58F5] transition duration-300 ease-in-out text-4xl"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="mailto:prasannaadhikari2602@gmail.com"
          className="hover:text-[#AC58F5] transition duration-300 ease-in-out text-4xl"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Home;
