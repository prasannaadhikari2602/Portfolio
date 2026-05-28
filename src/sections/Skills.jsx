import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

const TailwindIcon = () => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="#38BDF8" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6.4c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4 1.218.304 2.088 1.188 3.048 2.162C18.186 14.115 19.814 15.8 23.2 15.8c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-1.218-.304-2.088-1.188-3.048-2.162C21.014 8.085 19.386 6.4 16 6.4zM8 15.8c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4 1.218.304 2.088 1.188 3.048 2.162C10.186 23.515 11.814 25.2 15.2 25.2c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-1.218-.304-2.088-1.188-3.048-2.162C13.014 17.485 11.386 15.8 8 15.8z"/>
  </svg>
);

const Skills = () => {
  const skills = [
    { name: "HTML",        icon: faHtml5,    color: "#E34F26" },
    { name: "CSS",         icon: faCss3Alt,  color: "#1572B6" },
    { name: "JavaScript",  icon: faJs,       color: "#F7DF1E" },
    { name: "Tailwind CSS",icon: null,       color: "#38BDF8", customIcon: true },
    { name: "React",       icon: faReact,    color: "#61DAFB" },
    { name: "Python",      icon: faPython,   color: "#3776AB" },
    { name: "Django",      icon: faCode,     color: "#2BA977" },
    { name: "MySQL",       icon: faDatabase, color: "#00758F" },
  ];

  return (
    <div className="bg-black text-white px-4 sm:px-6 py-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h3 className="text-sm tracking-[0.3em] uppercase text-[#AC58F5]">
            Skills
          </h3>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            My{" "}
            <span className="bg-linear-to-r from-[#AC58F5] to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>

          <p className="text-white/60 mt-5 max-w-xl mx-auto text-sm sm:text-base">
            Technologies I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl
                         p-5 sm:p-8
                         flex flex-col items-center justify-center gap-3
                         hover:border-[#AC58F5]/50 hover:bg-white/10
                         transition-all duration-300"
            >
              {skill.customIcon ? (
                <div className="group-hover:scale-110 transition">
                  <TailwindIcon />
                </div>
              ) : (
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="group-hover:scale-110 transition text-[2rem] sm:text-[3rem]"
                  style={{ color: skill.color }}
                />
              )}

              <h2 className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white text-center">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;