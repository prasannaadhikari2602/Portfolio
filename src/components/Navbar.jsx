import React, { useState } from "react";
import { FolderOpen, List, X } from "lucide-react";

const Navbar = ({ refs }) => {
  const [show, setShow] = useState(false);

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setShow(false);
  };

  const { homeRef, aboutRef, skillsRef, projectRef, contactRef, journeyRef } =
    refs;

  const menu = [
    {
      id: 0,
      text: "Home",
      ref: homeRef,
    },
    {
      id: 1,
      text: "About",
      ref: aboutRef,
    },
    {
      id: 2,
      text: "Skills",
      ref: skillsRef,
    },
    {
      id: 3,
      text: "Projects",
      ref: projectRef,
    },
    {
      id: 4,
      text: "Journey",
      ref: journeyRef,
    },
    {
      id: 5,
      text: "Contact",
      ref: contactRef,
    },
  ];

  return (
    <nav className="h-20 flex justify-between items-center bg-black text-white px-5 w-full sticky top-0 border-b border-white/10 z-50 lg:px-8">
      {/* Logo */}
      <button
        className="flex justify-center items-center gap-2.5 cursor-pointer"
        onClick={() => scrollToSection(homeRef)}
      >
        <FolderOpen className="h-9 w-9 text-[#AC58F5] hover:rotate-12 transition-all duration-300 ease-in-out" />

        <h1 className="text-2xl font-medium italic">
          <span className="text-[#AC58F5]">Port</span>folio
        </h1>
      </button>

      {/* Desktop Menu */}

      <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md">
        {menu
          .filter((item) => item.text !== "Journey" && item.text !== "Contact")
          .map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.ref)}
              className="relative h-9 px-5 rounded-full text-sm font-medium tracking-wide text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 ease-in-out group overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">{item.text}</span>

              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#AC58F5] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
      </div>

      {/* Desktop Button */}
      <button
        onClick={() => scrollToSection(contactRef)}
        className="hidden lg:flex h-10 px-5 items-center justify-center rounded-lg bg-[#AC58F5] hover:bg-[#933ce6] transition-all duration-300 cursor-pointer"
      >
        Let's Talk
      </button>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {show ? (
          <X className="h-8 w-8 hover:text-[#AC58F5] transition-all duration-300" />
        ) : (
          <List className="h-8 w-8 hover:text-[#AC58F5] transition-all duration-300" />
        )}
      </button>

      {/* Mobile Menu */}
      {show && (
        <div className="flex flex-col absolute top-20 bg-black/10 left-0 w-full lg:hidden">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.ref)}
              className="w-full h-15 flex items-center justify-center hover:bg-[#AC58F5] transition-all duration-300 border-b border-white/10"
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
