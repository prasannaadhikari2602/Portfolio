import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center max-w-md">
        
        {/* 404 Code */}
        <h1 className="text-8xl font-extrabold text-sky-400">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>

        {/* Description */}
        <p className="mt-3 text-slate-300">
          The page you are looking for doesn’t exist or may have been moved or deleted.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-lg hover:bg-sky-300 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Notfound;