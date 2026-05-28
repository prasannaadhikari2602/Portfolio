import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#AC58F5]/20 border border-[#AC58F5]/30 flex items-center justify-center">
            <span className="text-[#AC58F5] font-bold text-sm">PA</span>
          </div>
          <span className="font-semibold text-white/90 tracking-wide">
            Prasanna Adhikari
          </span>
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Prasanna Adhikari. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;