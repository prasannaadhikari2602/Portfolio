import React, { useState } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [result, setResult] = useState("");
  const [focused, setFocused] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending");
    const formData = new FormData(event.target);
    formData.append("access_key", "8a7d35fa-4e91-49a7-905e-692c8562d1fd");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("success");
      event.target.reset();
    } else {
      setResult("error");
    }
  };

  const socials = [
    { label: "GitHub",    icon: faGithub,    href: "https://github.com/prasannaadhikari2602" },
    { label: "LinkedIn",  icon: faLinkedin,  href: "https://www.linkedin.com/in/prasanna-adhikari-52977a409/" },
    { label: "Instagram", icon: faInstagram, href: "https://www.instagram.com/adhikari__neeshan/" },
  ];

  const inputClass = (name) => `
    w-full bg-transparent border-0 border-b py-3 text-white text-sm outline-none
    placeholder:text-[#555] transition-colors duration-300
    ${focused === name ? "border-[#AC58F5]" : "border-[#2a2a2a]"}
  `;

  return (
    <div style={{ backgroundColor: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }} className="text-white px-6 py-24 min-h-screen">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: #AC58F5; color: #fff; }
      `}</style>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em" }} className="text-[#AC58F5] uppercase mb-4">
            — Contact
          </p>
          <h1 style={{ fontWeight: 300, lineHeight: 1.1 }} className="text-5xl md:text-7xl text-white">
            Let's work<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>together.</em>
          </h1>
        </div>

        {/* Thin rule */}
        <div style={{ height: "1px", backgroundColor: "#2a2a2a" }} className="mb-16" />

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <div className="flex flex-col">

            <p style={{ fontWeight: 300, lineHeight: 1.8 }} className="text-[#777] text-base mb-14">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out.
            </p>

            {/* Info rows */}
            <div className="flex flex-col">

              <div className="flex items-start justify-between py-5" style={{ borderBottom: "1px solid #1e1e1e" }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em" }} className="text-[#555] uppercase pt-0.5">
                  Email
                </p>
                <a
                  href="mailto:prasannaadhikari2602@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#ccc] hover:text-[#AC58F5] transition-colors duration-200 flex items-center gap-1 group"
                >
                  <span className="break-all text-right">prasannaadhikari2602@gmail.com</span>
                  <ArrowUpRight size={13} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </div>

              <div className="flex items-center justify-between py-5" style={{ borderBottom: "1px solid #1e1e1e" }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em" }} className="text-[#555] uppercase">
                  Location
                </p>
                <p className="text-sm text-[#ccc]">Kathmandu, Nepal</p>
              </div>

              <div className="flex items-center justify-between py-5" style={{ borderBottom: "1px solid #1e1e1e" }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em" }} className="text-[#555] uppercase">
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
                  <p className="text-sm text-[#ccc]">Available for work</p>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="mt-10 flex flex-col gap-3">
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em" }} className="text-[#555] uppercase mb-1">
                Socials
              </p>
              <div className="flex gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#777] hover:text-[#AC58F5] transition-colors duration-200 group"
                  >
                    <FontAwesomeIcon icon={s.icon} className="text-base" />
                    <span className="hidden sm:inline">{s.label}</span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right — Form */}
          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em" }} className="text-[#555] uppercase mb-8">
              Send a message
            </p>

            <form onSubmit={onSubmit} className="flex flex-col gap-8">

              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em" }} className="block text-[#555] uppercase mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("name")}
                />
              </div>

              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em" }} className="block text-[#555] uppercase mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("email")}
                />
              </div>

              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em" }} className="block text-[#555] uppercase mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("message")}
                  style={{ resize: "none" }}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group flex items-center gap-3 text-sm font-medium text-white hover:text-[#AC58F5] transition-colors duration-200"
                >
                  <span
                    style={{ backgroundColor: "#AC58F5" }}
                    className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  >
                    <ArrowUpRight size={16} color="#fff" />
                  </span>
                  Send Message
                </button>

                {result === "sending" && (
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px" }} className="text-[#555] mt-4">
                    Sending…
                  </p>
                )}
                {result === "success" && (
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px" }} className="text-green-500 mt-4">
                    ✓ Message sent successfully.
                  </p>
                )}
                {result === "error" && (
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px" }} className="text-red-500 mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>

            </form>
          </div>

        </div>

        {/* Bottom rule */}
        <div style={{ height: "1px", backgroundColor: "#1e1e1e" }} className="mt-24 mb-6" />
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em" }} className="text-[#333] uppercase">
          Prasanna Adhikari — Portfolio
        </p>

      </div>
    </div>
  );
};

export default Contact;