import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const journeyRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex flex-col w-full">

      {/* Navbar */}
      <Navbar
        refs={{
          homeRef,
          aboutRef,
          skillsRef,
          projectRef,
          journeyRef,
          contactRef,
        }}
      />

      {/* Single Page Sections */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <section ref={homeRef} className='h-[calc(100vh-80px)] bg-black'>
                <Home />
              </section>

              <section ref={aboutRef} className='h-[calc(100vh-80px)] bg-black'>
                <About />
              </section>

              <section ref={skillsRef} className='h-[calc(100vh-80px)] bg-black'>
                <Skills />
              </section>

              <section ref={projectRef} className='h-[calc(100vh-80px)] bg-black'>
                <Projects />
              </section>

              <section ref={journeyRef} className='h-[calc(100vh-80px)] bg-black'>
                <Journey />
              </section>

              <section ref={contactRef} className='h-[calc(100vh-80px)] bg-black'>
                <Contact />
              </section>
            </div>
          }
        />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;