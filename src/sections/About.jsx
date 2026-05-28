import React from "react";
import { GraduationCap, Target, Heart, Globe, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <h3 className="text-sm tracking-[0.3em] uppercase text-[#AC58F5]">
            About Me
          </h3>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Get to know{" "}
            <span className="bg-linear-to-r from-[#AC58F5] to-purple-400 bg-clip-text text-transparent">
              more about me
            </span>
          </h1>

          <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
            My journey, aspirations, interests, and passion for technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side — Who I Am */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-[#AC58F5]/40 transition-all duration-300 h-full">
            <h2 className="text-2xl font-semibold mb-6">Who I Am</h2>

            <p className="text-white/70 leading-relaxed">
              I'm a passionate BCA student at{" "}
              <span className="text-[#AC58F5] font-medium">
                Kathmandu Business Campus
              </span>
              , affiliated with Tribhuvan University, based in Kathmandu, Nepal.
            </p>

            <p className="mt-5 text-white/70 leading-relaxed">
              My journey in technology started with curiosity and evolved into a
              deep passion for creating meaningful web applications.
            </p>

            <p className="mt-5 text-white/70 leading-relaxed">
              I specialize in frontend and backend development using modern
              technologies like React and Django.
            </p>

            <p className="mt-5 text-white/70 leading-relaxed">
              When I'm not coding, I enjoy learning about new technologies,
              exploring design patterns, and contributing to the developer
              community.
            </p>

            {/* Location */}
            <div className="mt-8 flex items-center gap-3 text-white/60">
              <MapPin size={18} className="text-[#AC58F5]" />
              Kathmandu, Nepal
            </div>
          </div>

          {/* Right Side — 2×2 Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Education */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#AC58F5]/40 transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#AC58F5]/20 flex items-center justify-center shrink-0">
                <GraduationCap className="text-[#AC58F5]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Education</h2>
                <p className="text-white/50 text-xs mt-0.5">Academic Background</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/90">
                  Bachelor of Computer Applications
                </h3>
                <p className="mt-1 text-white/60 text-sm">Kathmandu Business Campus</p>
                <p className="text-white/40 text-xs mt-0.5">Tribhuvan University Affiliated</p>
              </div>
            </div>

            {/* Career Goals */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#AC58F5]/40 transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#AC58F5]/20 flex items-center justify-center shrink-0">
                <Target className="text-[#AC58F5]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Career Goals</h2>
                <p className="text-white/50 text-xs mt-0.5">Future Aspirations</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Aspiring to become a skilled full-stack developer and contribute
                to innovative software solutions that scale.
              </p>
            </div>

            {/* Interests */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#AC58F5]/40 transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#AC58F5]/20 flex items-center justify-center shrink-0">
                <Heart className="text-[#AC58F5]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Interests</h2>
                <p className="text-white/50 text-xs mt-0.5">Things I Love</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Web development, learning frameworks
                and solving complex problems.
              </p>
            </div>

            {/* Content Creation */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#AC58F5]/40 transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#AC58F5]/20 flex items-center justify-center shrink-0">
                <Globe className="text-[#AC58F5]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Content Creation</h2>
                <p className="text-white/50 text-xs mt-0.5">Tech Sharing Page</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                I manage a content page focused on web development and
                programming, where I regularly share roadmaps, study notes, and
                the latest tech updates, along with other valuable resources for
                developers.
              </p>
              <a
                href="https://www.instagram.com/it__bato/"
                target="blank"
                className="inline-flex items-center gap-2 text-[#AC58F5] hover:text-purple-400 transition text-sm font-medium"
              >
                <Globe size={15} />
                Visit My Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;