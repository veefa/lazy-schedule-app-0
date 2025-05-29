import React from "react";
import clockSvg from "../assets/clock.svg";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div id="about" className="bg-indigo-100 px-6 py-16">
      <div className="items-center gap-4 grid grid-cols-1 md:grid-cols-5">
        {/* Text Content */}
        <motion.div
          className="md:col-span-3 md:text-left text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-3 font-bold text-violet-900 text-3xl">About</h2>
          <p className="mx-auto md:mx-0 mb-6 max-w-xl text-md text-violet-800">
            Lazy Schedule App was born from a simple realization: sometimes,
            planning our day feels more exhausting than actually living it. So,
            we built a tool that takes the pressure off. With an easy interface,
            you can add tasks, set reminders, and track your day—without the
            overwhelm. Whether you’re a student, a professional, or just trying
            to stay on top of things, Lazy Schedule keeps it simple.
          </p>
          <div className="mx-auto md:mx-0 mb-4 border-violet-300 border-b-2 w-24"></div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center md:justify-start md:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img src={clockSvg} alt="Clock" className="w-36 md:w-44 h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;