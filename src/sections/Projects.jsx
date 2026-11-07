
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Sociala - Social Networking Platform",
    description:
      "A full-stack social networking platform built using React and Django. Users can create posts, like and comment on posts, search for users and posts, and follow other users. Includes a responsive interface and REST API integration with PostgreSQL for data management.",
    tags: [
      "React",
      "JavaScript",
      "Python",
      "Django",
      "PostgreSQL",
      "REST API",
    ],
    github: "https://github.com/prasannaadhikari2602/Sociala",
  },
  {
    title: "Leave Management System",
    description:
      "A role-based leave management system built using React, TypeScript, and Django REST Framework. Employees can apply for leave and track balances, managers can approve or reject team requests, and administrators can manage employees, departments, leave policies, and reports.",
    tags: [
      "React",
      "TypeScript",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
    ],
    github: "https://github.com/prasannaadhikari2602/leave-management-system",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-sm tracking-[0.3em] uppercase text-[#AC58F5]">
            Projects
          </h3>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            My{" "}
            <span className="bg-linear-to-r from-[#AC58F5] to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-white/60 mt-5 max-w-xl mx-auto">
            Things I've built along the way.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8
                         hover:border-[#AC58F5]/40 transition-all duration-300
                         flex flex-col gap-5"
            >
              {/* Title */}
              <h2 className="text-xl font-semibold group-hover:text-[#AC58F5] transition-colors duration-300">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-[#AC58F5]/10 border border-[#AC58F5]/20
                               text-[#AC58F5] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
