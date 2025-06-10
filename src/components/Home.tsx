import React from "react";
import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {
   const navigate = useNavigate();
  return (
    <div id="home" className="flex flex-col justify-center items-center bg-indigo-100 px-4 min-h-screen">
      <h1 className="mb-10 font-bold text-violet-900 text-5xl">
        Lazy Schedule App
      </h1>
      <p className="mb-8 max-w-xl text-md text-violet-400 text-center">
        Welcome to the Lazy Schedule App! Effortlessly organize your tasks.
      </p>
      <div className="flex gap-4">
        <button
          className="bg-violet-800 hover:bg-violet-500 shadow-sm px-6 py-2 rounded font-semibold text-indigo-100 transition"
          onClick={() => navigate("/lazy-schedule")}
        >
          Get Started
        </button>
        <button
       
         className="hover:bg-violet-500 px-6 py-2 border-2 border-violet-500 rounded text-violet-800 transition">
          Learn More...
        </button>
      </div>
     
    </div>
  );
};
export default Home;
