import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

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

        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-sm tracking-[0.3em] uppercase text-[#AC58F5]">
            Contact
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Get In{" "}
            <span className="bg-linear-to-r from-[#AC58F5] to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-white/60 mt-5 max-w-xl mx-auto">
            Let's connect and discuss opportunities.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — Info */}
          <div className="flex flex-col gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#AC58F5]/40 transition-all duration-300">
              <p className="text-white/70 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#AC58F5]/40 transition-all duration-300 flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#AC58F5]/20 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[#AC58F5]" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:prasannaadhikari2602@gmail.com" target="blank"
                  className="text-white/90 hover:text-[#AC58F5] transition text-sm font-medium"
                >
                  prasannaadhikari2602@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#AC58F5]/40 transition-all duration-300 flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#AC58F5]/20 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#AC58F5]" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="text-white/90 text-sm font-medium">Kathmandu, Nepal</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#AC58F5]/40 transition-all duration-300">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Social Links</p>
              <div className="flex gap-3 flex-wrap">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="blank"
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
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#AC58F5]/40 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-8">Send a Message</h2>

            <form onSubmit={onSubmit} className="flex flex-col gap-5">

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs uppercase tracking-widest">Name</label>
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
                <label className="text-white/50 text-xs uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm
                             placeholder:text-white/30 focus:outline-none focus:border-[#AC58F5]/60
                             hover:border-white/20 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm
                             placeholder:text-white/30 focus:outline-none focus:border-[#AC58F5]/60
                             hover:border-white/20 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-xl bg-[#AC58F5] hover:bg-[#9b45e8]
                           text-white font-semibold text-sm transition-all duration-300
                           hover:shadow-lg hover:shadow-[#AC58F5]/20 active:scale-[0.98]"
              >
                Send Message
              </button>

              {result && (
                <p className={`text-center text-sm mt-1 ${
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