import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "8a7d35fa-4e91-49a7-905e-692c8562d1fd");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  const socials = [
    { label: "GitHub",    icon: faGithub,    href: "https://github.com/prasannaadhikari2602" },
    { label: "LinkedIn",  icon: faLinkedin,  href: "https://www.linkedin.com/in/prasanna-adhikari-52977a409/" },
    { label: "Instagram", icon: faInstagram, href: "https://www.instagram.com/adhikari__neeshan/" },
  ];

  return (
    <div className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Top Heading Row */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#AC58F5]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#AC58F5]">Contact</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Let's work<br />
              <span className="text-transparent" style={{
                WebkitTextStroke: "2px #AC58F5",
                fontStyle: "italic",
              }}>
                together.
              </span>
            </h1>
          </div>
          <div className="lg:text-right">
            <p className="text-white/50 text-lg leading-relaxed max-w-sm lg:ml-auto">
              Open to new projects, creative ideas, and opportunities. Don't hesitate to reach out.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* Left — Info Cards */}
          <div className="flex flex-col gap-4">

            {/* Status */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-[#AC58F5]/40 transition-all duration-300">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
                <span className="text-white/80 text-sm">Available for freelance work</span>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-[#AC58F5]/40 transition-all duration-300">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Email</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#AC58F5]/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#AC58F5]" />
                </div>
                <a
                  href="mailto:prasannaadhikari2602@gmail.com"
                  className="text-white/80 hover:text-[#AC58F5] transition text-sm break-all"
                >
                  prasannaadhikari2602@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-[#AC58F5]/40 transition-all duration-300">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Location</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#AC58F5]/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#AC58F5]" />
                </div>
                <span className="text-white/80 text-sm">Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-[#AC58F5]/40 transition-all duration-300">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Socials</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10
                               text-white/70 text-sm hover:border-[#AC58F5]/50 hover:text-[#AC58F5]
                               transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={s.icon} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right — Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#AC58F5]/40 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-8">Send a message</h2>

            <form onSubmit={onSubmit} className="flex flex-col gap-5">

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm
                               placeholder:text-white/30 focus:outline-none focus:border-[#AC58F5]/60
                               hover:border-white/20 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm
                               placeholder:text-white/30 focus:outline-none focus:border-[#AC58F5]/60
                               hover:border-white/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm
                             placeholder:text-white/30 focus:outline-none focus:border-[#AC58F5]/60
                             hover:border-white/20 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm
                             placeholder:text-white/30 focus:outline-none focus:border-[#AC58F5]/60
                             hover:border-white/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-fit px-7 py-3 rounded-xl
                           bg-white text-black font-semibold text-sm
                           hover:bg-white/90 active:scale-[0.98] transition-all duration-300"
              >
                Send message
                <FontAwesomeIcon icon={faArrowUpRight} size="xs" />
              </button>

              {result && (
                <p className={`text-sm ${
                  result.includes("successfully")
                    ? "text-green-400"
                    : result === "Sending..."
                    ? "text-white/50"
                    : "text-red-400"
                }`}>
                  {result}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

