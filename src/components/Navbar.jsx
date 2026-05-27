import React, { useState } from "react";
import { FolderOpen, List, X } from "lucide-react";

const Navbar = ({ refs }) => {
  const [Show, setShow] = useState(false);

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="h-20 flex justify-between items-center bg-black text-white px-5 w-full sticky top-0 border-b border-white/10">
      {/* Logo */}
      <button
        className="flex justify-center items-center gap-2.5 cursor-pointer"
        onClick={() => scrollToSection(refs.homeRef)}
      >
        <FolderOpen className="h-9 w-9 text-[#AC58F5] hover:rotate-12 transition-all duration-300 ease-in-out" />
        <h1 className="text-2xl font-medium italic">
          <span className="text-[#AC58F5]">Port</span>folio
        </h1>
      </button>

      {/* Desktop menu (hidden for now) */}
      <div className="hidden">
        <button>About</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Journey</button>
      </div>

      <button className="hidden">Let's talk</button>

      {/* Toggle button */}
      <button className="hover:cursor-pointer" onClick={() => setShow(!Show)}>
        {Show ? (
          <X className="h-8 w-9 hover:text-[#AC58F5] transition-all duration-300 ease-in-out" />
        ) : (
          <List className="h-8 w-9 hover:text-[#AC58F5] transition-all duration-300 ease-in-out" />
        )}
      </button>

      {/* Mobile menu */}
      {Show && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-5 md:hidden">
          <button onClick={() => scrollToSection(refs.aboutRef)}>About</button>

          <button onClick={() => scrollToSection(refs.skillsRef)}>
            Skills
          </button>

          <button onClick={() => scrollToSection(refs.projectsRef)}>
            Projects
          </button>

          <button onClick={() => scrollToSection(refs.journeyRef)}>
            Journey
          </button>

          <button onClick={() => scrollToSection(refs.contactRef)}>
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
