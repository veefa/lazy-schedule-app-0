import React from "react";



const About: React.FC = () => {
  return (
    <div
      id="about"
      className="bg-indigo-100 p-6 text-center">
      <h2 className="mb-2 font-bold text-violet-900 text-2xl">About</h2>
      <p className="text-violet-700">
        Lazy Schedule App is designed for anyone who wants to manage their time
        and tasks effortlessly. With a simple, intuitive interface, you can add
        tasks, set reminders, and track your progress—all in one place. Whether
        you’re a student, professional, or just looking to stay organized, Lazy
        Schedule App helps you stay on top of your day without the stress.
      </p>
    </div>
  );
};

export default About;
