import React from "react";

const milestones = [
  {
    title: "Started with HTML & CSS",
    desc: "Began my web development journey learning the fundamentals of HTML and CSS.",
  },
  {
    title: "Mastered JavaScript",
    desc: "Dove deep into JavaScript, learning ES6+ features and DOM manipulation.",
  },
  {
    title: "Explored React",
    desc: "Started building dynamic web applications with React and modern tooling.",
  },
  {
    title: "Backend with Python & Django",
    desc: "Expanded skills to backend development with Python and Django framework.",
  },
  {
    title: "Database Management",
    desc: "Learned MySQL and database design for building full-stack applications.",
  },
  {
    title: "Full Stack Developer",
    desc: "Currently building complete web applications as a full-stack developer.",
    current: true,
  },
];

const Journey = () => {
  return (
    <div className="bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-sm tracking-[0.3em] uppercase text-[#AC58F5]">
            Journey
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Learning{" "}
            <span className="bg-gradient-to-r from-[#AC58F5] to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="text-white/60 mt-5 max-w-xl mx-auto">
            My progression in web development and software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-white/10" />

          <div className="flex flex-col gap-8">
            {milestones.map((item, index) => (
              <div key={index} className="flex gap-6 items-start group">

                {/* Dot */}
                <div className={`relative z-10 w-8 h-8 rounded-full shrink-0 flex items-center justify-center border-2 transition-all duration-300 mt-1
                  ${item.current
                    ? "bg-[#AC58F5] border-[#AC58F5]"
                    : "bg-black border-white/20 group-hover:border-[#AC58F5]"
                  }`}
                >
                  {item.current && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 bg-white/5 border rounded-2xl p-5 transition-all duration-300
                  ${item.current
                    ? "border-[#AC58F5]/50 bg-[#AC58F5]/5"
                    : "border-white/10 group-hover:border-[#AC58F5]/30"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-base font-semibold">{item.title}</h2>
                    {item.current && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#AC58F5]/20 text-[#AC58F5] font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Journey;